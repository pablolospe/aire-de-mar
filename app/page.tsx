import { Navbar } from "@/components/navbar"
import { ProjectGrid } from "@/components/project-grid"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="flex pt-32 pb-20 px-6 lg:px-12">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          {/* <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance text-foreground mb-8">
            Aire de mar
          </h1> */}
           <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-11-08%20at%208.01.41%E2%80%AFPM-KKJJseTZbFitEwAsNQUV6520H5XeIo.png"
              alt="Aire de Mar"
              width={1600}
              height={1000}
              className="h-80 w-auto"
              priority
            />
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl tracking-wide leading-relaxed">
            Creando espacios que conectan forma, función y contexto con sensibilidad minimalista.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos">
        <ProjectGrid />
      </section>

      {/* Information Section */}
      <section id="estudio" className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-6">Estudio</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nuestro estudio se especializa en arquitectura residencial y comercial con un enfoque minimalista y
                sostenible.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cada proyecto es una oportunidad para explorar la relación entre espacio, luz y materialidad.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-light tracking-tight mb-6">Servicios</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>— Diseño arquitectónico</li>
                <li>— Planificación urbana</li>
                <li>— Arquitectura de interiores</li>
                <li>— Consultoría de proyectos</li>
                <li>— Dirección de obra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight mb-12">Contacto</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Instagram</p>
              <a
                href="https://www.instagram.com/airedemarstudio"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                @airedemarstudio
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:info@airedemarstudio.com"
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                info@airedemarstudio.com
              </a>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Teléfono</p>
              <a href="tel:+541112345678" className="text-foreground hover:text-muted-foreground transition-colors">
                +598 94 017 151
              </a>
            </div>
            {/* <div>
              <p className="text-sm text-muted-foreground mb-2">Ubicación</p>
              <p className="text-foreground">Punta del Este, Uruguay</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">© 2025 Arquitectura Studio</p>
          <div className="flex gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instagram
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Behance
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
