import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      connectionTimeout: 10000,
      greetingTimeout: 5000,
      socketTimeout: 10000,
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'tj.jimenez03@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from Anthony's Portfolio Website</em></p>
      `,
      replyTo: email,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    })

  } catch (error) {
    console.error('Contact form error:', error)
    
    let errorMessage = 'Failed to send message. Please try again later.'
    
    if (error instanceof Error) {
      if (error.message.includes('Invalid login') || error.message.includes('authentication')) {
        errorMessage = 'Email authentication failed. Please contact the site administrator.'
        console.error('Gmail authentication error - check EMAIL_USER and EMAIL_PASS environment variables')
      } else if (error.message.includes('timeout') || error.message.includes('ETIMEDOUT')) {
        errorMessage = 'Email service timeout. Please try again in a moment.'
      } else if (error.message.includes('ENOTFOUND') || error.message.includes('network')) {
        errorMessage = 'Network error. Please check your connection and try again.'
      }
    }
    
    return NextResponse.json({ 
      error: errorMessage 
    }, { status: 500 })
  }
}
