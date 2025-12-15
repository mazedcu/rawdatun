"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Clock, MapPin, GraduationCap, Shield, LayoutGrid, Sunrise } from "lucide-react"
import { ProfileSlider } from "@/components/profile-slider"
import { GoogleFormEmbed } from "@/components/google-form-embed"
import { H5PEmbed } from "@/components/h5p-embed"
import { PhysicsBackground } from "@/components/physics-background"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const profiles = [
  {
    id: 1,
    name: "Ustad Thanim",
    role: "Quran Teacher",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ustadh Thanim has completed his hifz in Dubai.He has also worked as Islamiyat Teacher in English Medium School.",
  },
  {
    id: 2,
    name: "Mohammad Hasan Mazed",
    role: "Head of Academics",
    image: "/placeholder.svg?height=400&width=400",
    bio: "He has been working with different English medium institutions and preparing O and A level students for final exam.",
  },
  {
    id: 3,
    name: "Ustad Shoaib",
    role: "Arabic Langjuage Adviser",
    image: "/placeholder.svg?height=400&width=400",
    bio: "He has been working with different madrasa and English Medium schools and teaching students arabic and also a Teacher's trainer",
  }
  
]

export default function Home() {
  return (
    <><div className="flex flex-col min-h-screen bg-green-50">
      <header className="sticky top-0 z-40 w-full border-b bg-white border-green-100">
        <div className="container flex h-20 items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="bg-green-50 p-2 rounded-full">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <div>
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800">
                Rawdatun
              </span>
              <span className="block text-sm text-green-700 -mt-1">Academy</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#courses" className="text-sm font-medium transition-colors hover:text-primary">
              Subjects
            </Link>
            <Link href="#h5p-content" className="text-sm font-medium transition-colors hover:text-primary">
              Learning
            </Link>
            <Link href="#admission" className="text-sm font-medium transition-colors hover:text-primary">
              Admission
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="hidden md:flex border-green-500 text-green-700 hover:bg-green-50"
            >
              <Link href="#admission">Apply Now</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-green-700">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          className="w-full py-16 md:py-28 lg:py-36 bg-gradient-to-b from-green-100 to-green-50 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Physics Background */}
          <PhysicsBackground className="opacity-30" />

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-green-500 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-green-600 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-green-400 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div className="space-y-6" variants={fadeIn}>
                <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-1 rounded-full border border-green-200 text-green-700 text-sm font-medium mb-2">
                  Welcome to our Islamic Academy
                </div>

                <div className="space-y-2">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-primary leading-tight">
                    <span className="block">Rawdatun</span>
                    <span className="block">Academy</span>
                  </h1>
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                </div>

                <p className="text-green-700 md:text-xl max-w-xl">
                  Nurturing souls who strive to become resilient and muttaqi . Our online madrasa provides quality
                  Islamic education with modern teaching methods and interactive contents.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button asChild size="lg" className="bg-primary hover:bg-green-700 rounded-full px-8">
                    <Link href="#courses">Explore Subjects</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-green-500 text-green-700 hover:bg-green-50 rounded-full px-8"
                  >
                    <Link href="#admission">Apply for Admission</Link>
                  </Button>
                </div>
              </motion.div>

              <motion.div
                className="mx-auto max-w-sm lg:max-w-none relative"
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-green-500 rounded-2xl rotate-3 opacity-20"></div>
                <div className="absolute inset-0 bg-green-500 rounded-2xl -rotate-3 opacity-20"></div>
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Students learning"
                  width={550}
                  height={550}
                  className="relative z-10 rounded-2xl object-cover shadow-lg border-4 border-white" />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-green-100">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-green-800">Join 100+ Students</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-white islamic-pattern"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block bg-green-50 px-4 py-1 rounded-full border border-green-200 text-green-700 text-sm font-medium mb-2">
                Discover Our Vision
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">About Our Academy</h2>
                <div className="mx-auto w-20 h-1 bg-primary rounded-full"></div>
                <p className="max-w-[900px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                  Rawdatun Academy is dedicated to providing comprehensive Islamic education in a nurturing online
                  environment. Our curriculum combines traditional Islamic teachings with modern educational approaches.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-5xl py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Keep the specialty tiles as they are, but add the hover-lift class to each one */}
                <motion.div
                  className="specialty-card rounded-xl bg-green-50 border border-green-200 p-6 flex flex-col items-center text-center hover-lift"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GraduationCap className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary">
                    Online Academy supporting homeschooling and even school going children.
                  </h3>
                  <p className="card-description text-green-700">
                    We offer fully online studies for children so that students from around the globe can study at the
                    comfort of their home. It is also suitable for homeschooling parents to fully support
                    their needs and also can help school going children to compensate for any learning gap.
                  </p>
                </motion.div>

                {/* Specialty Tile 2 */}
                <motion.div
                  className="specialty-card rounded-xl bg-green-50 border border-green-200 p-6 flex flex-col items-center text-center hover-lift"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BookOpen className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary">Expert Teachers</h3>
                  <p className="card-description text-green-700">
                    Our biggest strength is our teachers panel alhamdulillah. Our expert teachers made the state of the
                    art contents that is engaging , fun and easy to grasp.
                  </p>
                </motion.div>

                {/* Specialty Tile 3 */}
                <motion.div
                  className="specialty-card rounded-xl bg-green-50 border border-green-200 p-6 flex flex-col items-center text-center hover-lift"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary">Islamic Values</h3>
                  <p className="card-description text-green-700">
                    We emphasize core Islamic values like compassion, integrity, respect, and excellence. Our teaching
                    approach focuses on character development alongside academic knowledge, helping students become
                    well-rounded Muslims who contribute positively to society.
                  </p>
                </motion.div>

                {/* Specialty Tile 4 */}
                <motion.div
                  className="specialty-card rounded-xl bg-green-50 border border-green-200 p-6 flex flex-col items-center text-center hover-lift"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <LayoutGrid className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary">Interactive Learning</h3>
                  <p className="card-description text-green-700">
                    We have introduced 3D and 2D interactive contents that will enhance learning to the next level.
                    Resources such as notes, Interactive books, lessons are organized such a manner to have the best
                    learning experience InshaaAllah.
                  </p>
                </motion.div>

                {/* Specialty Tile 5 */}
                <motion.div
                  className="specialty-card rounded-xl bg-green-50 border border-green-200 p-6 flex flex-col items-center text-center hover-lift"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary">
                    Madrasah blending Tailored syllabus with 21st century skills
                  </h3>
                  <p className="card-description text-green-700">
                    Our goal is to blend Madrasa Syllabus with 21st Century skills such as Computing, programming ,
                    English and thinking skills following the Nizaam syllabus during the time of khaleefah.
                  </p>
                </motion.div>

                {/* Specialty Tile 6 */}
                <motion.div
                  className="specialty-card rounded-xl bg-green-50 border border-green-200 p-6 flex flex-col items-center text-center hover-lift"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Sunrise className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary">Flexible Learning</h3>
                  <p className="card-description text-green-700">
                    Our programs accommodate diverse schedules and learning paces. Students can access recorded lessons,
                    and self-paced modules.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Profiles Slider */}
        <ProfileSlider profiles={profiles} />

        {/* Courses Section */}
        <motion.section
          id="courses"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Subjects</h2>
                <p className="max-w-[900px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive range of subjects designed to provide a well-rounded Islamic education.
                </p>
              </div>
            </div>
            <motion.div
              className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-green-200 hover:border-primary transition-colors duration-300 bg-white">
                  <CardHeader className="bg-green-50 rounded-t-lg">
                    <CardTitle className="text-primary">Mathematics</CardTitle>
                    <CardDescription className="text-green-700">Learn Maths in Singapore way</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-green-700">.....</span>
                    </div>
                    <p className="text-sm text-green-700">
                      A skill that is a must . We , Muslims has a legacy of huge contributions towards mathematics. In
                      fact , the rise of Algebra was introduced to solve the problem of law of inheritance of Islam.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-green-500 text-green-700 hover:bg-green-50"
                    >
                      <Link href="#admission">Enroll Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-green-200 hover:border-primary transition-colors duration-300 bg-white">
                  <CardHeader className="bg-green-50 rounded-t-lg">
                    <CardTitle className="text-primary">Arabic</CardTitle>
                    <CardDescription className="text-green-700">
                      Learn Arabic using Second language acquisition model
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-green-700">.....</span>
                    </div>
                    <p className="text-sm text-green-700">
                      This is the language of Quran and this single fact is enough to make it necessary knowledge of
                      Islam. We follow Stephen Krahen's second language acquisition model to teach Arabic in an effective way.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-green-500 text-green-700 hover:bg-green-50"
                    >
                      <Link href="#admission">Enroll Now</Link>
                    </Button>
                  </CardFooter>
                </Card>


              </motion.div>
              <motion.div variants={fadeIn} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="h-full border-green-200 hover:border-primary transition-colors duration-300 bg-white">
                  <CardHeader className="bg-green-50 rounded-t-lg">
                    <CardTitle className="text-primary">computing</CardTitle>
                    <CardDescription className="text-green-700">
                      Learn coding and engineering principles{" "}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-green-700">.....</span>
                    </div>
                    <p className="text-sm text-green-700">
                      One of the key 21st century skill is computing that includes coding, Data Structure, Algorithm
                      etc. Here in Rawdatun , we have introduced computing very early and InshaAllah our students will
                      be able to be competent programmers early in their lives.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-green-500 text-green-700 hover:bg-green-50"
                    >
                      <Link href="#admission">Enroll Now</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeIn} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full border-green-200 hover:border-primary transition-colors duration-300 bg-white">
                <CardHeader className="bg-green-50 rounded-t-lg">
                  <CardTitle className="text-primary">Phonics</CardTitle>
                  <CardDescription className="text-green-700">
                    Learn coding and engineering principles{" "}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm text-green-700">.....</span>
                  </div>
                  <p className="text-sm text-green-700">
                    Our program for phonics is called Phonics for Muslim children . It is a method where try to teach phonics within the boundary of sharia.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-500 text-green-700 hover:bg-green-50"
                  >
                    <Link href="#admission">Enroll Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
         



        </div>
      </motion.section>

      {/* H5P Content Section */}
      <motion.section
        id="h5p-content"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Interactive Learning</h2>
              <p className="max-w-[900px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Engage with our interactive content designed to enhance your learning experience.
              </p>
            </div>
          </div>
          <motion.div className="mx-auto max-w-5xl py-12" variants={fadeIn}>
            <Tabs defaultValue="quran" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-green-100">
                <TabsTrigger value="quran" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Mathematics
                </TabsTrigger>
                <TabsTrigger value="arabic" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Arabic
                </TabsTrigger>
              </TabsList>
              <TabsContent value="quran" className="p-4 border rounded-lg mt-4 border-green-200">
                <motion.div
                  className="aspect-video bg-green-50 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">Mathematics Interactive Content</h3>
                    <p className="text-green-700 mb-4">Interactive Math exercises</p>
                    <div className="bg-white p-8 rounded-lg border border-green-200">
                      <H5PEmbed
                        src="https://campus.rawdatun.org/h5p/embed.php?url=https%3A%2F%2Fcampus.rawdatun.org%2Fpluginfile.php%2F312%2Fmod_h5pactivity%2Fpackage%2F0%2Faddition-4.h5p&component=mod_h5pactivity"
                        title="Quran Interactive Content"
                        height={500} />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="arabic" className="p-4 border rounded-lg mt-4 border-green-200">
                <motion.div
                  className="aspect-video bg-green-50 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-center p-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">Arabic Language Interactive Content</h3>
                    <p className="text-green-700 mb-4">
                      Interactive Arabic vocabulary builders, grammar exercises, and conversation practice.
                    </p>
                    <div className="bg-white p-8 rounded-lg border border-green-200">
                      <H5PEmbed
                        src="https://campus.rawdatun.org/h5p/embed.php?url=https%3A%2F%2Fcampus.rawdatun.org%2Fpluginfile.php%2F312%2Fmod_h5pactivity%2Fpackage%2F0%2Faddition-4.h5p&component=mod_h5pactivity"
                        title="Arabic Interactive Content"
                        height={500} />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </motion.section>

      {/* Admission Form Section with Google Form */}
      <motion.section
        id="admission"
        className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Apply for Admission</h2>
              <p className="max-w-[900px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our online madrasa and begin your journey of Islamic learning. Fill out the form below to apply.
              </p>
            </div>
          </div>
          <motion.div className="mx-auto max-w-3xl py-12" variants={fadeIn}>
            {/* Google Form Embed */}
            <GoogleFormEmbed
              formUrl="https://docs.google.com/forms/d/e/1FAIpQLSeZnuTOEcXJDX4Fs0V9oZk0u7T3bWh8Wjqjz0dLudAdACHaGA/viewform?usp=sf_link"
              title="Rawdatun Academy Admission Form"
              height={800}
              className="shadow-lg" />

            {/* Additional information card */}
            <Card className="mt-8 border-green-200 bg-white">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <CardTitle className="text-primary">Application Process</CardTitle>
                <CardDescription className="text-green-700">
                  What happens after you submit your application
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800">Application Review</h4>
                    <p className="text-sm text-green-700">
                      Our admissions team will review your application within 3-5 business days.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800">Placement Assessment</h4>
                    <p className="text-sm text-green-700">
                      You'll be invited to a brief online assessment to determine your current knowledge level.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full w-6 h-6 flex items-center justify-center mt-0.5">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-800">Enrollment Confirmation</h4>
                    <p className="text-sm text-green-700">
                      Upon acceptance, you'll receive enrollment details and access to our learning platform.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-green-50 border-t border-green-100">
                <p className="text-sm text-green-700">
                  For any questions about the application process, please contact our admissions team at{" "}
                  <a href="mailto:admissions@rawdatun.org" className="text-primary font-medium hover:underline">
                    admissions@rawdatun.org
                  </a>
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="w-full py-12 md:py-24 lg:py-32 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Contact Us</h2>
              <p className="max-w-[900px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions? We're here to help. Reach out to us through any of the following channels.
              </p>
            </div>
          </div>
          <motion.div className="mx-auto max-w-3xl py-12" variants={fadeIn}>
            <Card className="border-green-200 hover:border-primary transition-colors duration-300 bg-white">
              <CardHeader className="bg-green-50 border-b border-green-100">
                <CardTitle className="text-primary">Get in Touch</CardTitle>
                <CardDescription className="text-green-700">We'd love to hear from you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800">Address</h3>
                    <p className="text-sm text-green-700">Dhaka</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800">Office Hours</h3>
                    <p className="text-sm text-green-700">Saturday - Thursday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium text-green-800">Support</h3>
                    <p className="text-sm text-green-700">Email: support@rawdatun.org</p>
                    <p className="text-sm text-green-700">Phone: +8801676885195</p>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2 text-green-800">Follow Us</h3>
                  <div className="flex space-x-4">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-green-300 text-primary hover:bg-green-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-green-300 text-primary hover:bg-green-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full border-green-300 text-primary hover:bg-green-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4 text-primary"
                        >
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-green-50 border-t border-green-100">
                <motion.div className="w-full" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Button className="w-full bg-primary hover:bg-green-700" asChild>
                    <a href="mailto:support@rawdatun.org">Email Us</a>
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </main><footer className="w-full border-t bg-white border-green-100">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Rawdatun Academy</span>
          </div>
          <p className="text-center text-sm leading-loose text-green-700 md:text-left">
            &copy; {new Date().getFullYear()} Rawdatun Academy. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium text-green-700 hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium text-green-700 hover:text-primary">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium text-green-700 hover:text-primary">
              Sitemap
            </Link>
          </nav>
        </div>
      </footer></>
    </div>
  )
}
