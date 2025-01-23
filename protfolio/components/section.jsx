import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Section() {
  return (
    <section className="bg-zinc-950 min-h-screen flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="space-y-8">
          <h1 className="text-white text-6xl lg:text-7xl font-display leading-tight">Let's get know about me closer</h1>
          <p className="text-zinc-400 text-lg max-w-xl">
            Aeronn is a New York-based visual designer focusing on branding and visual identity. Her portfolio showcases
            her wide range of work, spanning books, posters and web design.
          </p>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg">
            Discover More About Me
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-[400px] h-[400px]">
            <Image
              src="/person.png"
              alt="Designer portrait"
              fill
              className="object-cover rounded-3xl"
              priority
            />
            <div className="absolute inset-0 border border-orange-500/20 rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

