"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import axiosInstance from "@/app/api/axiosInstance"
import { useRouter } from "next/navigation"
export default function SkillForm() {
  const router= useRouter()
  const [proficiency, setProficiency] = useState(50)
  const [experienceLevel, setExperienceLevel] = useState("beginner")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const skillData = {
      skillName: formData.get("skillName"),
      category: formData.get("category"),
      proficiencyLevel: proficiency,
      experienceLevel: experienceLevel,
      yearsOfExperience: formData.get("yearsOfExperience"),
      additionalNotes: formData.get("additionalNotes"),
    }
    console.log(skillData)
    const result= await axiosInstance.post(`${process.env.NEXT_PUBLIC_API}/skill/add`,skillData)
    console.log(result)
    if(result.data.success){
      router.push('/dashboard')
    }
    // Handle form submission
  }

  return (
    <Card className="w-full max-w-2xl mx-auto p-4">
      <CardHeader>
        <CardTitle>Add New Skill</CardTitle>
        <CardDescription>Add a new skill to your portfolio with proficiency level.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="skillName">Skill Name</Label>
            <Input id="skillName" name="skillName" placeholder="Enter skill name (e.g., React.js, Node.js)" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select name="category" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="frontend">Frontend Development</SelectItem>
                <SelectItem value="backend">Backend Development</SelectItem>
                <SelectItem value="mobile">Mobile Development</SelectItem>
                <SelectItem value="devops">DevOps</SelectItem>
                <SelectItem value="design">Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <Label>Proficiency Level</Label>
            <div className="space-y-3">
              <Slider
                value={[proficiency]}
                onValueChange={(value) => setProficiency(value[0])}
                min={0}
                max={100}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Beginner</span>
                <span>Current: {proficiency}%</span>
                <span>Expert</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Experience Level</Label>
            <div className="grid grid-cols-3 gap-4">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <Button
                  key={level.toLowerCase()}
                  type="button"
                  variant={experienceLevel === level.toLowerCase() ? "default" : "outline"}
                  className="w-full"
                  onClick={() => setExperienceLevel(level.toLowerCase())}
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearsOfExperience">Years of Experience</Label>
            <Input
              id="yearsOfExperience"
              name="yearsOfExperience"
              type="number"
              min="0"
              step="0.5"
              placeholder="Enter years of experience"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes</Label>
            <Textarea
              id="additionalNotes"
              name="additionalNotes"
              placeholder="Any additional information about your skill"
              className="min-h-[100px]"
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Add Skill</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

