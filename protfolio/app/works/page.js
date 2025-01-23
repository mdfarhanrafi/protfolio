import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
const projects= [
{
    title: "Ovallinery",
    client: "2024",
    image: "/work1.png",
    href: "/works/ovallinery",
  },
  {
    title: "West Lands",
    client: "2024",
    image: "/work2.png",
    href: "/works/west-lands",
  },
  {
    title: "Spaceshots",
    client: "2024",
    image: "/work3.png",
    href: "/works/spaceshots",
  },
  {
    title: "Driftinland",
    client: "DESIGN",
    image: "/work4.png",
    href: "/works/driftinland",
  },
  {
    title: "BuildingBurgh",
    client: "DESIGN",
    image: "/work5.png",
    href: "/works/buildingburgh",
  },
  {
    title: "Mythimind",
    client: "DESIGN",
    image: "/work6.png",
    href: "/works/mythimind",
  },
  {
    title: "South Antenne",
    client: "DESIGN",
    image: "/work7.png",
    href: "/works/south-antenne",
  },
  {
    title: "Lake Trevor",
    client: "DESIGN",
    image: "/work8.png",
    href: "/works/lake-trevor",
  },
]


export default function Page(){
  return(
       <div className="min-h-screen bg-zinc-950">
         <Navbar/>
      <main className="max-w-[1200px] mx-auto px-4 pt-32 pb-24">
        <div className="mb-16">
          <h1 className="text-white text-5xl md:text-6xl font-display mb-2">My works</h1>
          <p className="text-zinc-400">Showcase About Works</p>
        </div>

        <Separator className="mb-[101px]"/>

        <div className="w-[1140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={index} href={project.href} className="group block">
              <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1 justify-center text-center">
                <h2 className="text-white text-lg font-medium">{project.title}</h2>
                <p className="text-zinc-400 text-sm">{project.client}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            variant="outline"
            className="text-orange-500 rounded-full border-[#FF9142] bg-white/10"
          >
            Load More Works
          </Button>
        </div>
      </main>      
         <Footer/>
       </div>

        )

}