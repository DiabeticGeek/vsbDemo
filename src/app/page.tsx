"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";

export default function Home() {
  const [projectBImage, setProjectBImage] = useState("/fotos/B1.jpg");
  const [projectCImage, setProjectCImage] = useState("/fotos/C1.jpg");

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 md:py-32">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-dark md:text-6xl lg:text-7xl">
                Bouw uw toekomst met kwaliteit
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Van Soolingen Bouw levert vakmanschap voor nieuwbouw, renovaties en
                verbouwingen in <strong className="text-dark">Amsterdam & omstreken</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group rounded-lg bg-gold px-6 py-3 text-base font-semibold text-dark shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                >
                  Vrijblijvend contact
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/projecten"
                  className="rounded-lg border-2 border-blue bg-white px-6 py-3 text-base font-semibold text-blue transition-all hover:bg-blue hover:text-white"
                >
                  Bekijk projecten
                </Link>
              </div>
            </div>
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amber-100 to-orange-200 shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
                alt="Bouwproject Amsterdam"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Voor en Na Projecten */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-dark">Voor en Na</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Bekijk de transformatie van onze bouwprojecten. Klik op een afbeelding om tussen voor en na te wisselen.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Project B */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-dark text-center"></h3>
              <div className="relative group cursor-pointer">
                <div
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-lg relative transition-all duration-500"
                  style={{backgroundImage: `url('${projectBImage}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  onClick={() => setProjectBImage(projectBImage === "/fotos/B1.jpg" ? "/fotos/B2.jpg" : "/fotos/B1.jpg")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 group-hover:scale-110">
                    Klik om te wisselen
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                    {projectBImage.includes('B1') ? 'VOOR' : 'NA'}
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 text-center">
              </p>
            </div>

            {/* Project C */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-dark text-center"></h3>
              <div className="relative group cursor-pointer">
                <div
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 shadow-lg relative transition-all duration-500"
                  style={{backgroundImage: `url('${projectCImage}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  onClick={() => setProjectCImage(projectCImage === "/fotos/C1.jpg" ? "/fotos/C2.jpg" : "/fotos/C1.jpg")}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 group-hover:scale-110">
                    Klik om te wisselen
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-medium">
                    {projectCImage.includes('C1') ? 'VOOR' : 'NA'}
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-600 text-center">
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
