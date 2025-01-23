import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-24">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-24">
          <h2 className="text-orange-500 text-2xl mb-8">
            Get in Touch With Us
          </h2>
          <Link
            href="mailto:info@aaronn.com"
            className="text-white text-5xl md:text-6xl lg:text-7xl font-display inline-block border-b border-white/20 pb-2 hover:text-orange-500 transition-colors"
          >
            info@aaronn.com
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-24">
          <div>
            <Link href="/" className="text-white text-3xl font-bold">
              <Image
                src="/logo.jpg"
                alt="AARONN"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="space-y-4">
            <p className="text-white text-xl">Street Avenue 21, CA</p>
            <p className="text-white text-xl">0-8-00-888-000</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-white text-xl font-light mb-4">+9 0283353</p> 
          
          <div className="flex justify-start md:justify-end gap-6">    
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-white hover:text-orange-500 transition-colors"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        </div> 

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/60 text-center">
            © {currentYear}. Ideapeel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
