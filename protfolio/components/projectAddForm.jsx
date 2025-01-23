"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImageIcon, X } from "lucide-react"
import axios from "axios"

export default function ProjectForm() {
  const [images, setImages] = useState([])
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files) => {
    const validImageTypes = ["image/gif", "image/jpeg", "image/png"]
    const newImages = Array.from(files).filter((file) => validImageTypes.includes(file.type))
    setImages((prevImages) => [...prevImages, ...newImages])
  }

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const projectData = {
      title: formData.get("title"),
      description: formData.get("description"),
      techStack: formData
        .get("techStack")
        .split(",")
        .map((tech) => tech.trim()),
      liveUrl: formData.get("liveUrl"),
      githubUrl: formData.get("githubUrl"),
      status: formData.get("status"),
      images: images,
    }
    console.log(projectData)
    // Here you would typically send this data to your backend
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API}/project/upload`,formData);
      if (response.ok) {
        const result = await response.json();
        console.log("Project created:", result);
      } else {
        console.error("Error creating project:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } 

  }

  
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add New Project</CardTitle>
        <CardDescription>Fill in the details below to add a new project to your portfolio.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Project Title</Label>
            <Input id="title" name="title" placeholder="Enter project title" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" placeholder="Describe your project" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="images">Project Images</Label>
            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                dragActive ? "border-primary" : "border-gray-300"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Input
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleChange}
              />
              <Label htmlFor="images" className="cursor-pointer flex flex-col items-center gap-2">
                <ImageIcon className="h-8 w-8 text-gray-400" />
                <span className="text-sm text-gray-600">Click to upload or drag and drop</span>
                <span className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</span>
              </Label>
            </div>
            {images.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {images.map((file, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(file) || "/placeholder.svg"}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="techStack">Tech Stack</Label>
            <Input id="techStack" name="techStack" placeholder="Add technologies (comma separated)" required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="liveUrl">Live Demo URL</Label>
              <Input id="liveUrl" name="liveUrl" type="url" placeholder="https://example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="githubUrl">Github Repository</Label>
              <Input id="githubUrl" name="githubUrl" type="url" placeholder="https://github.com/username/repo" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Project Status</Label>
            <Select name="status" defaultValue="completed">
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Add Project</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

