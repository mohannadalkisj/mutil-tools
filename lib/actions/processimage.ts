'use client'

import { createWorker } from 'tesseract.js'

export async function processImage(imageData: string) {
  try {
    const worker = await createWorker('eng')
    const result = await worker.recognize(imageData)
    await worker.terminate()
    return { success: true, text: result.data.text }
  } catch (error) {
    console.error('OCR processing error:', error)
    return { success: false, error: 'Failed to process image' }
  }
}

