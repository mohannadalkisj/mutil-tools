"use client"

import { SetStateAction, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function DocumentConverter() {
  const [file, setFile] = useState<File | null>(null)
  const [format, setFormat] = useState<string>("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleConvert = async () => {
    if (!file || !format) {
      alert({
        title: "Error",
        description: "Please select a file and a target format.",
        variant: "destructive",
      })
      return
    }

    // Simulating conversion process
    alert({
      title: "Converting...",
      description: "Your file is being converted.",
    })

    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert({
      title: "Conversion Complete",
      description: `${file.name} has been converted to ${format.toUpperCase()}.`,
    })
  }

  return (
    <div>
      <Link href={'/dashboard'}>
        <Button variant={'outline'}>Back</Button> 
      </Link>
      <Card className="w-full max-w-md mx-auto mt-4">
        <CardHeader>
          <CardTitle>Convert Documents</CardTitle>
          <CardDescription>Upload a document and convert it to your desired format.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="document">Document</label>
            <Input id="document" type="file" onChange={handleFileChange} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-4">
            <label htmlFor="format">Target Format</label>
            <Select onValueChange={(value: SetStateAction<string>) => setFormat(value)}>
              <SelectTrigger id="format">
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="docx">DOCX</SelectItem>
                <SelectItem value="txt">TXT</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button className="mt-4 w-full" onClick={handleConvert}>Convert</Button>
        </CardContent>
      </Card>
    </div>
  )
}

