import { Navbar } from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const projectData: Record<
  string,
  {
    title: string
    location: string
    year: string
    area: string
    description: string
    images: string[]
  }
> = {
  "residencia-costa": {
    title: "Residencia Costa",
    location: "Mar del Plata, Argentina",
    year: "2024",
    area: "350 m²",
    description:
      "Una residencia contemporánea diseñada para maximizar las vistas al mar y la luz natural. La estructura combina hormigón expuesto con grandes superficies acristaladas, creando una conexión fluida entre interior y exterior.",
    images: [
      "/modern-coastal-residence-exterior-architecture.jpg",
      "/coastal-residence-interior-living-room.jpg",
      "/coastal-residence-bedroom-ocean-view.jpg",
      "/coastal-residence-terrace-and-pool.jpg",
    ],
  },
  "casa-urbana": {
    title: "Casa Urbana",
    location: "Buenos Aires, Argentina",
    year: "2023",
    area: "280 m²",
    description:
      "Casa unifamiliar en contexto urbano que responde a la densidad del entorno con un diseño vertical y compacto. Los patios internos garantizan privacidad y luz natural en todos los niveles.",
    images: [
      "/minimalist-urban-house-facade.jpg",
      "/urban-house-interior-courtyard.jpg",
      "/urban-house-modern-kitchen.jpg",
      "/placeholder.svg?height=1000&width=1500",
    ],
  },
  "edificio-palermo": {
    title: "Edificio Palermo",
    location: "Buenos Aires, Argentina",
    year: "2023",
    area: "1200 m²",
    description:
      "Edificio de viviendas que reinterpreta la arquitectura tradicional del barrio con un lenguaje contemporáneo. Las terrazas escalonadas crean espacios exteriores privados para cada unidad.",
    images: [
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
    ],
  },
  "casa-bosque": {
    title: "Casa Bosque",
    location: "Bariloche, Argentina",
    year: "2022",
    area: "400 m²",
    description:
      "Refugio en la montaña que se integra al paisaje natural mediante materiales locales y un diseño que minimiza el impacto ambiental. Los amplios ventanales enmarcan las vistas del bosque circundante.",
    images: [
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
    ],
  },
  "estudio-creativo": {
    title: "Estudio Creativo",
    location: "Córdoba, Argentina",
    year: "2024",
    area: "500 m²",
    description:
      "Renovación de un galpón industrial transformado en espacio de trabajo colaborativo. La estructura original se conserva y complementa con intervenciones minimalistas en acero y vidrio.",
    images: [
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
    ],
  },
  "villa-mediterranea": {
    title: "Villa Mediterránea",
    location: "Mendoza, Argentina",
    year: "2023",
    area: "450 m²",
    description:
      "Villa diseñada para el clima seco de Mendoza, con patios internos y galerías que proporcionan sombra natural. Los materiales en tonos tierra se integran al paisaje árido circundante.",
    images: [
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
    ],
  },
  "loft-industrial": {
    title: "Loft Industrial",
    location: "Rosario, Argentina",
    year: "2022",
    area: "180 m²",
    description:
      "Conversión de un antiguo depósito en loft residencial. Se preservan elementos industriales originales como vigas de hierro y muros de ladrillo, contrastando con intervenciones contemporáneas.",
    images: [
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
    ],
  },
  "casa-minimalista": {
    title: "Casa Minimalista",
    location: "La Plata, Argentina",
    year: "2024",
    area: "320 m²",
    description:
      "Vivienda que explora la esencia del minimalismo a través de volúmenes puros, superficies blancas y una cuidadosa relación con el jardín. La luz natural define los espacios interiores.",
    images: [
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
      "/placeholder.svg?height=1000&width=1500",
    ],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectData[slug]

  if (!project) {
    return <div>Proyecto no encontrado</div>
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-32 pb-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Volver a proyectos
          </Link>
        </div>

        {/* Project Info */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-balance">{project.title}</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Ubicación</p>
              <p className="text-foreground">{project.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Año</p>
              <p className="text-foreground">{project.year}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Área</p>
              <p className="text-foreground">{project.area}</p>
            </div>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">{project.description}</p>
        </div>

        {/* Project Images */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          {project.images.map((image, index) => (
            <div key={`${project.title}-${index}`} className="relative aspect-3/2 w-full overflow-hidden bg-muted">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Imagen ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
