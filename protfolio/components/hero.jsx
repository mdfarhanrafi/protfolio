'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from "motion/react"
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-black to-gray-900">
      <div className="container px-4 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider text-white leading-tight">
            Adaptive Logo Design
            <br />
            for Your Brand
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Button
              asChild
              className="bg-[#FF8A3C] text-white hover:bg-[#FF8A3C]/90 rounded-full px-8 py-6 text-sm tracking-wider"
            >
              <Link href="/works" className="inline-flex items-center">
                EXPLORE WORKS
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

