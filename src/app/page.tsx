import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ritesh Kumar</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:text-primary">About</a></li>
              <li><a href="#projects" className="hover:text-primary">Projects</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/placeholder.svg?height=200&width=200"
              alt="Your Name"
              width={200}
              height={200}
              className="rounded-full"
            />
            <p className="text-lg">
              Hello! I'm a passionate web developer with experience in React, Next.js, and Node.js. 
              I love creating responsive and user-friendly web applications.
            </p>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
              <div key={project} className="border rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                <p className="mb-4">A brief description of the project and your role in it.</p>
                <Button variant="outline">View Project</Button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="mailto:your.email@example.com">
              <Button variant="outline" size="icon">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-muted">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}