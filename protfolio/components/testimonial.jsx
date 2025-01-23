"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

const testimonials = [
  {
    quote:
      "Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn't need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can't thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!",
    author: "Martin lee",
  },
  {
    quote:
      "Working with Aaronn was an incredible experience. Their attention to detail and creative vision brought our brand to life in ways we couldn't have imagined.",
    author: "Sarah Chen",
  },
  {
    quote:
      "The level of professionalism and creativity that Aaronn brings to each project is unmatched. They truly understand how to translate ideas into stunning visual designs.",
    author: "James Wilson",
  },
]

export default function TestimonialCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-start mb-16">
          <h2 className="text-white text-5xl font-display">Testimonial</h2>
          <div className="flex gap-1">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-orange-500">
              <path d="M25 0H50V25C50 38.8071 38.8071 50 25 50V25V0Z" stroke="currentColor" />
            </svg>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-orange-500">
              <path d="M25 0H50V25C50 38.8071 38.8071 50 25 50V25V0Z" stroke="currentColor" />
            </svg>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="w-full">
                  <div className="space-y-8">
                    <blockquote className="text-zinc-400 text-xl leading-relaxed max-w-4xl">
                      "{testimonial.quote}"
                    </blockquote>
                    <footer>
                      <cite className="text-white text-2xl font-display not-italic">-{testimonial.author}</cite>
                    </footer>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

