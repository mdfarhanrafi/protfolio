'use client'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {PlusIcon} from "lucide-react"
import {useRouter} from "next/navigation"
import { useState,useEffect } from "react"
import axios from "axios"
export default function ProjectCards() {
  const router= useRouter()
  const [projects,setprojects]=useState([])
  console.log(projects)
  const fetch = async() =>{
    const result = await axios.get(`${process.env.NEXT_PUBLIC_API}/project/get`)
    if(result.data.success){
      setprojects(result.data.data)
    } 
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
   <div className="space-y-4"> 
   <div className="flex justify-end mt-2">
   <Button
   className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm"
   onClick={() => router.push("/dashboard/addProject")}
   >
   <PlusIcon className="h-5 w-5" />
   Add New Project
 </Button>  

   </div>
 

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {projects.map((project) => (
        <Card key={project.id} className="overflow-hidden border rounded-lg">
          <CardHeader className="p-0">
            <div className="relative h-48 w-full">
              <Image
                src={project.images?.[0]?.url || "/placeholder.svg"}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={project.id <= 2}
              />
            </div>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.techStack.join(" • ")}</p>
            <div className="flex gap-4 text-sm">
              <Link href={`/projects/${project.id}`} className="text-blue-500 hover:underline">
                View
              </Link>
              <Link href={`/projects/${project.id}/edit`} className="text-green-500 hover:underline">
                Edit
              </Link>
              <button
                className="text-red-500 hover:underline"
                onClick={() => console.log(`Delete project ${project.id}`)}
              >
                Delete
              </button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>

    </div>
  )
}

