"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram, ArrowRight, Link2, Search, Folder, Cog, BarChart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MainNav } from "@/components/main-nav"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
const workflows = [
  {
    icon: <Link2 className="h-8 w-8 text-gray-600" />,
    title: "Short Links",
    gradient: "from-purple-500 to-red-500"
  },
  {
    icon: <Search className="h-8 w-8 text-gray-600" />,
    title: "OCR",
    gradient: "from-orange-400 to-blue-500"
  },
  {
    icon: <ArrowRight className="h-8 w-8 text-gray-600" />,
    title: "Conversion",
    gradient: "from-yellow-400 to-cyan-500"
  },
  {
    icon: <Folder className="h-8 w-8 text-gray-600" />,
    title: "Store",
    gradient: "from-cyan-400 to-blue-400"
  },
  {
    icon: <Cog className="h-8 w-8 text-gray-600" />,
    title: "Processing",
    gradient: "from-cyan-700 to-cyan-900"
  },
  {
    icon: <BarChart className="h-8 w-8 text-gray-600" />,
    title: "Reports",
    gradient: "from-neutral-400 to-pink-400"
  }
]
const items = [
  {
    title: 'Products', href: '/'
  },
  {
    title: 'Price', href: '/'
  },
  {
    title: 'About', href: '/'
  },
  {
    title: 'Contact', href: '/'
  },
]

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const features = [
    {
      title: 'Financial Management',
      desc: "Data Visualization and key data flow"
    },
    {
      title: 'Document Management',
      desc: "and paste into your apps. Free."
    },
    {
      title: "Project Management",
      desc: "Source. And Next.js 13 Ready Free."
    }
  ]

  return (
    <div className="relative w-full ">
      {<MainNav items={items} />}

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animation-delay-2000 absolute -right-4 top-0 h-72 w-72 animate-blob rounded-full bg-yellow-300 opacity-70 mix-blend-multiply blur-xl filter" />
        <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-pink-300 opacity-70 mix-blend-multiply blur-xl filter" />
      </div>



      <div className="container relative mx-auto grid gap-2 px-4 py-12 md:grid-cols-2 md:items-center md:gap-12 lg:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="relative py-8">
            <h1 className="text-3xl font-bold tracking-tight lg:text-4xl xl:text-5xl text-center  ">
              All-in-One

              <span className="bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent mx-2">Toolkit
              </span>
              for Your Bussines
            </h1>
            <div className="absolute  h-14 w-20 animate-spin-slow rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-lg" />
          </div>

          <div className="text-lg  py-2 grid md:grid-cols-3 justify-around ">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex flex-col m-2  backdrop-blur-sm  hover:shadow-pink-400  bg- hover:text-gray-700 transition-all"
              >
                <CardHeader className="text-pink-500 font-bold pb-2">
                  {feature.title}
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {feature.desc}
                  </CardDescription>

                </CardContent>
              </Card>
            ))}
          </div>

          <div
            className="grid  md:grid-cols-2 items-center gap-4 "
          >
            <Link href={'/signup'}>
              <Button
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 px-8 py-2 text-lg font-semibold text-white transition-all hover:scale-105 w-full"
                size="lg"
              >
                Sign up
                <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1 " />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 opacity-0 transition-opacity" />
              </Button>
            </Link>
            <Link href={'/dashboard'}>

              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 px-8 py- text-lg font-semibold transition-all hover:scale-105 hover:bg-gray-50 w-full"
              >
                Demo
              </Button>
            </Link>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="space-y-4  items-center"
          >
            <div className=" gap-6 py-12 grid grid-cols-4 text-">
              {[
                { Icon: Facebook, color: "hover:text-blue-500", href: "#" },
                { Icon: Youtube, color: "hover:text-red-500", href: "#" },
                { Icon: Instagram, color: "hover:text-pink-500", href: "#" },
                { Icon: Linkedin, color: "hover:text-blue-500", href: "#" }
              ].map(({ Icon, color, href }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={href}
                    className={`group relative block p-2 ${color}`}
                  >
                    <div className="absolute inset-0 rounded-lg bg-gray-100 opacity-0 transition-opacity group-hover:opacity-100" />
                    <Icon className={`relative h-6 w-6 m-auto`} />
                    <span className="sr-only">Social Media Link</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-80 blur-3xl"
            style={{
              transform: `translate(${scrollY * 0.1}px, ${scrollY * 0.05}px)`,
            }}
          />
          <motion.div
            className="relative flex flex-col items-center gap-4 text-white"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >  <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Essential <span className="text-gray-800">Tools</span> Used in Every Business Field







            </h1>
            <div className="container mx-auto px-4 py-12">

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {workflows.map((item, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`relative p-3 rounded-full bg-gradient-to-r from-pink-400 to-cyan-500`}>
                      <div className="absolute inset-1 bg-white rounded-full" />
                      <div className="relative bg-white rounded-full p-2">
                        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="mt-4 text-lg font-medium text-gray-100">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function CheckIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function DocumentIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function WrenchIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

function CodeIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

