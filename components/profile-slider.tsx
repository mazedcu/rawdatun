"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Profile {
  id: number
  name: string
  role: string
  image: string
  bio: string
}

interface ProfileSliderProps {
  profiles: Profile[]
}

export function ProfileSlider({ profiles }: ProfileSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Duplicate profiles to create a seamless loop
  const duplicatedProfiles = [...profiles, ...profiles]

  return (
    <div className="w-full overflow-hidden py-8 bg-gradient-to-r from-green-50 to-green-100">
      <h3 className="text-2xl font-bold text-center mb-6 text-primary">Our Team</h3>
      <div ref={containerRef} className="relative">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          <div className="flex gap-6 px-4">
            {duplicatedProfiles.map((profile, index) => (
              <motion.div
                key={`${profile.id}-${index}`}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden border border-green-200"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="h-48 relative">
                  <Image src={profile.image || "/placeholder.svg"} alt={profile.name} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-lg text-primary">{profile.name}</h4>
                  <p className="text-green-700 font-medium">{profile.role}</p>
                  <p className="text-sm text-green-600 mt-2 line-clamp-3">{profile.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
