import { Hero } from "@/components/hero";
import Section from "@/components/section";
import Navbar from "@/components/navbar";
import ProjectsGrid from "@/components/projects";
import TestimonialCarousel from "@/components/testimonial"
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Section/>
    <ProjectsGrid/>
    <TestimonialCarousel/>
    <Footer/>
    </>
  );
}
