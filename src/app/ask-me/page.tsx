'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Send, Copy, User, Bot } from 'lucide-react'
import { siteConfig } from '../../content/config'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

export default function AskMePage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm Anthony's AI assistant. I can answer questions about his background, projects, experience, and skills. What would you like to know?",
      role: 'assistant',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const suggestedPrompts = [
    "What's Anthony's experience with automation?",
    "Tell me about his ML projects",
    "What technologies does he specialize in?",
    "Describe his work at Shock Tech Inc",
    "What's his educational background?",
    "How does he balance athletics and engineering?"
  ]

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    setTimeout(() => {
      const response = generateResponse(message)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        role: 'assistant',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1000)
  }

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase()
    
    if (lowerQuestion.includes('automation') || lowerQuestion.includes('automate')) {
      return "Anthony specializes in building automation tools that eliminate manual work. At Shock Tech Inc, he created Python automations that cut an 8-hour isolator matching task to seconds and automated analytics for 2,000+ material samples. His V8 Engine Deal Finder automates the entire process of scraping listings, deduplicating data, and scoring deals with ML. He's passionate about turning repetitive tasks into reliable systems."
    }
    
    if (lowerQuestion.includes('ml') || lowerQuestion.includes('machine learning') || lowerQuestion.includes('ai')) {
      return "Anthony builds end-to-end ML systems that solve real-world problems. His V8 Engine Deal Finder uses Random Forest to score deal quality after scraping multiple marketplaces. He works with PyTorch, TensorFlow, scikit-learn, and Pandas to build complete pipelines from data collection to automated alerting. At Reminous, he applies ML to marketing automation and lead scoring."
    }
    
    if (lowerQuestion.includes('shock tech') || lowerQuestion.includes('manufacturing')) {
      return "At Shock Tech Inc, Anthony has worked in both testing and manufacturing engineering roles. As a Manufacturing Engineering Intern, he created Python automations for production data flows and built an Excel/VBA tool that reduced an 8-hour manual task to seconds. Previously as a Testing Engineering Intern, he automated analytics for 2,000+ aerospace-grade elastomer samples using Excel macros and Python, generating summarized test reports from raw equipment data."
    }
    
    if (lowerQuestion.includes('education') || lowerQuestion.includes('school') || lowerQuestion.includes('njit')) {
      return "Anthony is currently a Junior at New Jersey Institute of Technology (NJIT) in the Ying Wu College of Computing, pursuing General Engineering/Computer Science with an expected graduation in May 2027. He's also a NCAA Division 1 Track and Field athlete, which has taught him excellent time management and discipline that translates well to engineering challenges."
    }
    
    if (lowerQuestion.includes('reminous') || lowerQuestion.includes('cto') || lowerQuestion.includes('startup')) {
      return "Anthony is the CTO & Co-Founder at Reminous, a marketing automation startup based in Orlando, FL (remote). He leads software strategy, builds Python scripts for lead collection and database syncing, creates internal dashboards for sales tracking, and coordinates product requirements with design and marketing teams across weekly sprints."
    }
    
    if (lowerQuestion.includes('technologies') || lowerQuestion.includes('tech stack') || lowerQuestion.includes('skills')) {
      return "Anthony's core technologies include Python, JavaScript/Node.js, and SQL for development. He specializes in automation tools like Playwright and Selenium, ML frameworks like PyTorch and TensorFlow, and data analysis with Pandas and NumPy. He works with various databases (SQLite, MongoDB, MySQL) and is proficient in Git, Linux, and development tools like VS Code and IntelliJ."
    }
    
    if (lowerQuestion.includes('athletics') || lowerQuestion.includes('track') || lowerQuestion.includes('balance')) {
      return "As a NCAA Division 1 Track and Field athlete at NJIT, Anthony has developed exceptional time management and discipline. The competitive mindset from athletics translates directly to engineering challenges - he approaches problems with the same systematic, goal-oriented mentality. This balance has taught him to be efficient with his time and maintain focus under pressure."
    }
    
    if (lowerQuestion.includes('projects') || lowerQuestion.includes('github')) {
      return "Anthony has built several impressive automation projects: 1) V8 Engine Deal Finder - an end-to-end ML system that scrapes multiple marketplaces and scores deals, 2) PDF Email Automation with OCR for extracting tables from documents, 3) LinkedIn Easy Apply Bot that applies to jobs at 5-10/min with intelligent error handling, and 4) Manufacturing Automation Tools that streamline production workflows. All demonstrate his focus on eliminating manual work."
    }
    
    return "That's a great question! Anthony is a results-driven Software Engineer specializing in full-stack development and machine learning. He builds scrapers, automations, and ML-powered tools that eliminate manual work. Currently, he's CTO at Reminous, a Manufacturing Engineering Intern at Shock Tech Inc, and a Junior at NJIT studying General Engineering/Computer Science. He's also a NCAA Division 1 Track and Field athlete. Feel free to ask about any specific aspect of his background!"
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      {/* Navigation */}
      <nav className="border-b border-surface bg-bg/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="font-heading font-bold text-xl text-text hover:text-accent transition-colors duration-200">
              Anthony Jimenez
            </a>
            <a
              href="/"
              className="text-muted hover:text-text transition-colors duration-200"
            >
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
            Ask Me Anything
          </h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            This chat can answer questions about me, my projects, and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Bio & FAQ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-surface border border-surface rounded-lg p-6">
              <h3 className="font-heading text-lg font-semibold text-text mb-4">
                Quick Facts
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-accent font-medium">Role:</span>
                  <span className="text-muted ml-2">{siteConfig.role}</span>
                </div>
                <div>
                  <span className="text-accent font-medium">Education:</span>
                  <span className="text-muted ml-2">Junior @ NJIT</span>
                </div>
                <div>
                  <span className="text-accent font-medium">Current Work:</span>
                  <span className="text-muted ml-2">CTO at Reminous, Intern at Shock Tech</span>
                </div>
                <div>
                  <span className="text-accent font-medium">Athletics:</span>
                  <span className="text-muted ml-2">NCAA D1 Track &amp; Field</span>
                </div>
              </div>
            </div>

            <div className="bg-surface border border-surface rounded-lg p-6">
              <h3 className="font-heading text-lg font-semibold text-text mb-4">
                Suggested Questions
              </h3>
              <div className="space-y-2">
                {suggestedPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(prompt)}
                    className="w-full text-left p-3 bg-bg border border-surface rounded-md text-sm text-muted hover:text-text hover:border-accent/50 transition-colors duration-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Chat */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-surface border border-surface rounded-lg h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-surface">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <MessageCircle size={16} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-text">Anthony&apos;s AI Assistant</h3>
                    <p className="text-xs text-muted">Ask about my background and experience</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.role === 'assistant' && (
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-accent text-white'
                          : 'bg-bg border border-surface text-text'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      {message.role === 'assistant' && (
                        <button
                          onClick={() => copyToClipboard(message.content)}
                          className="mt-2 text-xs text-muted hover:text-text transition-colors duration-200 flex items-center gap-1"
                        >
                          <Copy size={12} />
                          Copy
                        </button>
                      )}
                    </div>
                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-surface rounded-full flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-muted" />
                      </div>
                    )}
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-bg border border-surface text-text p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-surface">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage(inputMessage)
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about Anthony's experience, projects, or skills..."
                    className="flex-1 px-4 py-2 bg-bg border border-surface rounded-md text-text placeholder-muted focus:border-accent focus:outline-none transition-colors duration-200"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !inputMessage.trim()}
                    className="px-4 py-2 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white rounded-md transition-colors duration-200 flex items-center gap-2"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
