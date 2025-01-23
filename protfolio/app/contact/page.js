'use client'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(" i am submitting")
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex justify-center items-center">
        <div className="w-[1148px] px-4 pt-32">
          <div className="w-full mx-auto">
            {/* Header Section */}
            <div className="mb-16">
              <h1 className="text-white text-6xl font-display mb-2">Contact Me</h1>
              <p className="text-zinc-500 text-sm">Feel Any Project Knock Us</p>
            </div>

            {/* Form Section */}
            <div className="border-t border-zinc-800 pt-16 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-white text-5xl font-display leading-tight mb-12">
                    Get in
                    <br />
                    Touch With
                    <br />
                    Us
                  </h2>
                </div>
                <form onSubmit={()=>handleSubmit(e)} className="space-y-6">
                  <div>
                    <label className="text-zinc-400 uppercase text-sm mb-2 block">
                      NAME
                    </label>
                    <Input
                      type="text"
                      className="bg-transparent border-zinc-800 focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 uppercase text-sm mb-2 block">
                      SUBJECT
                    </label>
                    <Input
                      type="text"
                      className="bg-transparent border-zinc-800 focus:border-orange-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-zinc-400 uppercase text-sm mb-2 block">
                      MESSAGE
                    </label>
                    <Textarea
                      rows={4}
                      className="bg-transparent border-zinc-800 focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    SEND
                  </Button>
                </form>
              </div>
            </div>

            {/* Image Section */}
            <div className="mb-16 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-orange-500/20 mix-blend-overlay" />
              <Image
                src="/laptop.png"
                alt="Laptop with colorful glow"
                width={720}
                height={400}
                className="w-full rounded-lg"
              />
            </div>

            {/* Footer Info Section */}
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-400 gap-4 md:gap-0">
              <span>Street Avenue 21, CA</span>
              <span>+9 0283353</span>
              <span>info@aaronn.com</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;