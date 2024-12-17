'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { fileToBase64 } from '@/lib/utils'
import { processImage } from '@/lib/actions/processimage'

export default function OCRTool() {
  const [file, setFile] = useState<File | null>(null)
  const [result, setResult] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsProcessing(true)
    try {
      const base64 = await fileToBase64(file)
      const response = await processImage(base64)
      if (response.success) {
        setResult(response.text!)
      } else {
        setResult('Error: ' + response.error)
      }
    } catch (error) {
      console.error('Error processing image:', error)
      setResult('An error occurred while processing the image.')
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader>
        <CardTitle>OCR Tool</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
          />
          <Button type="submit" disabled={!file || isProcessing} className="w-full ">
            {isProcessing ? 'Processing...' : 'Extract Text'}
          </Button>
        </form>
        {result && (
          <Textarea
            value={result}
            readOnly
            className="mt-4 h-40"
            placeholder="Extracted text will appear here..."
          />
        )}
      </CardContent>
    </Card>
  )
}

