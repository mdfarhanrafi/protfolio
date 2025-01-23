'use client'
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState,useEffect } from "react"
import axios from "axios"




export default function ProjectsGrid() {
  const [projects,setprojects]=useState([])
  console.log(projects)
  const fetch =async() =>{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API}/project/get`)
    if(result.data.success){
      setprojects(result.data.data)
    } 
  }

  useEffect(() => {
    fetch();
  }, []);
  return (
    <section className="bg-zinc-950 py-24">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="flex flex-col items-center mb-16 space-y-6">
        <h2 className="text-white text-4xl font-display">My Projects Highlight</h2>
        <Button variant="outline" className="text-white border-orange-500 rounded-full bg-zinc-950 group">
          EXPLORE MORE
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4">
            <div className="relative aspect-square overflow-hidden">
              <Image src={project.images?.[0]?.url || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="text-white text-lg font-medium">{project.title}</h3>
                <div className="h-[1px] w-6 bg-orange-500/50" />
              </div>
              <div className="text-sm text-zinc-500">
                <span className="opacity-70">Client:</span> <span>{project.client}</span>
                
                <div className="mt-1"><span className="opacity-70">Work:</span> {project.work.join("   ")}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

