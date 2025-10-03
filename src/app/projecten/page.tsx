import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projecten",
  description: "Bekijk recent werk van Van Soolingen Bouw in Amsterdam & omstreken.",
};

const demoProjects = [
  {
    slug: "renovatie-woning-b",
    title: "Renovatie Tuinhuis",
    type: "residentieel",
    year: 2024,
  },
  {
    slug: "renovatie-woning-c",
    title: "Renovatie Keuken",
    type: "residentieel",
    year: 2024,
  },
];

export default function ProjectenPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-dark md:text-5xl">Projecten</h1>
              <p className="mt-2 text-lg text-slate-600">Bekijk recent werk van Van Soolingen Bouw</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {demoProjects.map((p) => (
              <article key={p.slug} className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm transition-all hover:border-blue hover:shadow-xl">
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-amber-100 to-orange-200 relative">
                  <img
                    src={
                      p.slug === "renovatie-woning-b"
                        ? "/fotos/B2.jpg"
                        : p.slug === "renovatie-woning-c"
                        ? "/fotos/C2.jpg"
                        : `https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop&crop=center&sig=${p.slug}`
                    }
                    alt={`${p.title} bouwproject`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-dark">{p.title}</h2>
                  <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                    <span>{p.type}</span>
                    <span>•</span>
                    <span>{p.year}</span>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue"></span>
                    <span className="text-gold transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
