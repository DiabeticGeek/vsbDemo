import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenties",
  description:
    "Lees ervaringen van klanten van Van Soolingen Bouw uit Amsterdam & omstreken.",
};

const testimonials = [
  {
    author: "Fam. Jansen",
    quote:
      "Strakke planning en uitstekende communicatie. Het resultaat is boven verwachting!",
  },
  {
    author: "Studio Noord",
    quote: "Zeer net opgeleverd en meedenkend in oplossingen.",
  },
];

export default function ReferentiesPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-dark md:text-5xl">Referenties</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Lees ervaringen van klanten van Van Soolingen Bouw uit Amsterdam & omstreken.
          </p>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="group cursor-pointer rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-gold hover:shadow-xl">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80&sig=${t.author.replace(' ', '')}`}
                        alt={t.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed text-slate-700">{t.quote}</p>
                    <footer className="mt-4 text-sm font-semibold text-dark">— {t.author}</footer>
                  </div>
                </div>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
