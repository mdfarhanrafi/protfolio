"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ProjectDetail() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Project One",
      story:
        "In a world of technological breakthroughs and digital artistry, this project stands as a testament to innovation. Through careful consideration and meticulous execution, we've created something that pushes the boundaries of what's possible.",
      mainImage: "/project4.png",
      subImages: ["/project2.png", "/project3.png"],
    },
    {
      id: 2,
      title: "Project Two",
      story:
        "In a world of technological breakthroughs and digital artistry, this project stands as a testament to innovation. Through careful consideration and meticulous execution, we've created something that pushes the boundaries of what's possible.",
      mainImage: "/project4.png",
      subImages: ["/project2.png", "/project3.png"],
    },
    // Add more projects as needed
  ];

  const products = [
    {
      id: 1,
      title: "Project One",
      story:
        "In a world of technological breakthroughs and digital artistry, this project stands as a testament to innovation. Through careful consideration and meticulous execution, we've created something that pushes the boundaries of what's possible.",
      mainImage: "/project4.png",
      subImages: ["/project2.png", "/project3.png", "/project4.png"],
    },

    // Add more projects as needed
  ];
  // Navigation Handlers
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navbar />
      <div className="max-w-[1151px] mx-auto pt-32 px-4 mb-3">
        <h1 className="text-4xl font-bold mb-6 text-white">Project Detail</h1>

        {/* Main Image Section */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image
            src={projects[currentSlide].mainImage || "/placeholder.svg"}
            alt={projects[currentSlide].title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Project Story */}
        <div className="space-y-4 text-white mt-6 w-full">
          <div className="items-center">
          <h2 className="text-xl font-semibold">Project Story</h2>
          <p className="text-gray-400 leading-relaxed">
            {projects[currentSlide].story}
          </p>
          </div>  
          
        </div>

        {/* Sub Images Grid */}
        <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2">
          {projects[currentSlide].subImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Project detail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6">
          <Button
            className=" text-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Prev Slide
          </Button>
          <Button
            className="text-white"
            onClick={nextSlide}
          >
            Next Slide
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
      <div className="max-w-[1151px] mx-auto pt-5 px-4 mb-32">
        <h1 className="text-4xl font-bold mb-6 text-white flex justify-center">
          Others Project
        </h1>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {products.map((product) =>
            product.subImages.map((image, index) => (
              <div
                key={`${product.id}-${index}`} // Use a unique key combining product ID and index
                className="relative aspect-square overflow-hidden rounded-lg"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Project ${product.id} detail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
