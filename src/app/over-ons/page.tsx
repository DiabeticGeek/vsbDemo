import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maak kennis met Van Soolingen Bouw: missie, waarden en vakmanschap in Amsterdam & omstreken.",
};

export default function OverOnsPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-dark md:text-5xl">Over ons</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Maak kennis met Van Soolingen Bouw
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-lg leading-relaxed text-slate-700">
              <p className="text-xl font-medium text-dark">
                Wij zijn Van Soolingen Bouw. Gedreven door kwaliteit en vakmanschap werken wij aan
                nieuwbouw, renovaties en verbouwingen in Amsterdam & omstreken.
              </p>
              <p>
                Heldere communicatie, nette planning en een zorgvuldige oplevering staan centraal.
                Elk project behandelen we met dezelfde toewijding en aandacht voor detail.
              </p>
            </div>

            {/* Values */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {[
                { 
                  title: "Ervaring", 
                  desc: "Jarenlange expertise in de bouwsector",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                { 
                  title: "Vakmanschap", 
                  desc: "Hoogwaardige afwerking en materialen",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                { 
                  title: "Betrouwbaar", 
                  desc: "Transparante communicatie en planning",
                  icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                },
              ].map((v) => (
                <div key={v.title} className="rounded-xl border-2 border-slate-200 bg-white p-6 transition-all hover:border-gold hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-100 to-orange-200 overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80&sig=${v.title}`}
                      alt={`${v.title} icoon`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-dark">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
