"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  title: string
  location: string
  year: string
  coverImage: string
  slug: string
  size: "small" | "medium" | "large" | "wide"
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "Residencia Costa",
    location: "Mar del Plata",
    year: "2024",
    coverImage: "/modern-coastal-residence-architecture.jpg",
    slug: "residencia-costa",
    size: "large",
  },
  {
    id: 2,
    title: "Casa Urbana",
    location: "Buenos Aires",
    year: "2023",
    coverImage: "/minimalist-urban-house-architecture.jpg",
    slug: "casa-urbana",
    size: "medium",
  },
  {
    id: 3,
    title: "Edificio Palermo",
    location: "Buenos Aires",
    year: "2023",
    coverImage: "/contemporary-apartment-building-architecture.jpg",
    slug: "edificio-palermo",
    size: "small",
  },
  {
    id: 4,
    title: "Casa Bosque",
    location: "Bariloche",
    year: "2022",
    coverImage: "/forest-house-modern-architecture.jpg",
    slug: "casa-bosque",
    size: "wide",
  },
  {
    id: 5,
    title: "Estudio Creativo",
    location: "Córdoba",
    year: "2024",
    coverImage: "/creative-studio-industrial-architecture.jpg",
    slug: "estudio-creativo",
    size: "medium",
  },
  {
    id: 6,
    title: "Villa Mediterránea",
    location: "Mendoza",
    year: "2023",
    coverImage: "/mediterranean-villa-architecture.jpg",
    slug: "villa-mediterranea",
    size: "large",
  },
  {
    id: 7,
    title: "Loft Industrial",
    location: "Rosario",
    year: "2022",
    coverImage: "/industrial-loft-conversion-architecture.jpg",
    slug: "loft-industrial",
    size: "small",
  },
  {
    id: 8,
    title: "Casa Minimalista",
    location: "La Plata",
    year: "2024",
    coverImage: "/minimalist-concrete-house-architecture.jpg",
    slug: "casa-minimalista",
    size: "wide",
  },
]

const getFloatingOffset = (id: number) => {
  const offsets = [0, 20, -15, 30, -20, 25, -10, 15]
  return offsets[id % offsets.length]
}

const getSizeClasses = (size: Project["size"]) => {
  switch (size) {
    case "small":
      return "md:row-span-2"
    case "medium":
      return "md:row-span-3"
    case "large":
      return "md:row-span-4"
    case "wide":
      return "md:col-span-2 md:row-span-2"
    default:
      return "md:row-span-3"
  }
}

const getAspectRatio = (size: Project["size"]) => {
  switch (size) {
    case "small":
      return "aspect-square"
    case "medium":
      return "aspect-[3/4]"
    case "large":
      return "aspect-[2/3]"
    case "wide":
      return "aspect-[16/9]"
    default:
      return "aspect-[3/4]"
  }
}

export function ProjectGrid() {
  const [projects, setProjects] = useState<Project[]>([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const observerTarget = useRef<HTMLDivElement>(null)

  const loadMoreProjects = () => {
    setLoading(true)
    setTimeout(() => {
      const nextProjects = allProjects.slice(page * 4, (page + 1) * 4)
      setProjects((prev) => [...prev, ...nextProjects])
      setPage((prev) => prev + 1)
      setLoading(false)
    }, 500)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMoreProjects()
    }, 100) // Using a small delay to ensure initial render is complete
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && projects.length < allProjects.length) {
          loadMoreProjects()
        }
      },
      { threshold: 0.1 },
    )

    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }

    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current)
      }
    }
  }, [loading, projects])

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 auto-rows-[180px]">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={`/proyecto/${project.slug}`}
            className={`group ${getSizeClasses(project.size)}`}
            style={{
              marginTop: `${getFloatingOffset(project.id)}px`,
            }}
          >
            <div className={`relative h-full overflow-hidden bg-muted`}>
              <Image
                src={project.coverImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-base md:text-lg tracking-wider font-light text-white mb-1">{project.title}</h3>
                  <p className="text-xs md:text-sm tracking-wider font-light text-white/90">
                    {project.location} — {project.year}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Intersection Observer Target */}
      <div ref={observerTarget} className="h-20 flex items-center justify-center mt-12">
        {loading && projects.length < allProjects.length && (
          <div className="text-sm tracking-wider font-light text-muted-foreground">Cargando proyectos...</div>
        )}
      </div>
    </div>
  )
}
