import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

export default function AboutPage() {
  const socialLinks = [
    { name: "DRIBBBLE", href: "#" },
    { name: "TWITTER", href: "#" },
    { name: "FACEBOOK", href: "#" },
    { name: "INSTAGRAM", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main className="max-w-[1167px] mx-auto px-6 pt-32 pb-20">
        {/* Header Section */}
        <div className="mb-16">
          <h1 className="text-white text-6xl font-bold mb-2">About Me</h1>
          <p className="text-zinc-500 text-sm">Little Brief About Myself</p>
        </div>

        <Separator/>
        {/* Mission Section */}

        <div className="flex flex-col">
             <div className="flex flex-row gap-1">
             <h2 className="text-white text-6xl font-bold leading-tight mb-8 w-[535px]">
              My mission
              <br />
              is to make
              <br />
              design
              <br />
              easier.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed w-[495px]">
              Create custom Designs with AARONN that converts more visitors to
              my website. No matter the design, you can create it without code.
              Create custom landing Pages with AARONN that converts more
              visitors than any website. With lots of sections, you can easily
              build a top-notch portfolio.
            </p>
 
             </div>
            
            
            <div className="grid grid-cols-3 gap-6">
                
            <div className="relative w-full h-full">
              <Image
                src="/person.png"
                alt="Portrait 1"
                width={361}
                height={515}
                className="rounded-2xl h-full object-cover grayscale"
              />
              <div className="h-[90px] w-[20px] absolute top-8 -left-4 lg:w-[55px] lg:h-[178px] border border-orange-500 rounded-[30px]" />
            </div>
            <div className="col-span-2 relative w-full h-full">
              <Image
                src="/person2.png"
                alt="Portrait 2"
                width={750}
                height={515}
                className="rounded-2xl h-full object-cover grayscale"
              />
              <div className="h-[20px] w-[100px] absolute -bottom-4 -right-4 lg:h-[55px] lg:w-[178px] border border-orange-500 rounded-[30px]" />
            </div>
            </div>
           

        </div> 

        {/* Social Links Section */}
        <div className="mt-16">
          <h3 className="text-white text-xl mb-4 font-bold">Follow me on:</h3>
          <div className="flex gap-6 justify-between">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-400 font-bold hover:text-orange-500 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
