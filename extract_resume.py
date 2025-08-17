import sys
from docx import Document

def extract_text_from_docx(file_path):
    try:
        doc = Document(file_path)
        full_text = []
        for paragraph in doc.paragraphs:
            if paragraph.text.strip():
                full_text.append(paragraph.text.strip())
        return '\n'.join(full_text)
    except Exception as e:
        print(f"Error reading docx: {e}")
        return None

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python extract_resume.py <docx_file_path>")
        sys.exit(1)
    
    file_path = sys.argv[1]
    text = extract_text_from_docx(file_path)
    if text:
        print(text)
    else:
        print("Failed to extract text from the document")
