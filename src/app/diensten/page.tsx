import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Nieuwbouw, renovaties en uitbreidingen door Van Soolingen Bouw in Amsterdam & omstreken.",
};

const services = [
  {
    title: "Nieuwbouw",
    desc: "Van fundering tot afwerking, volledig op maat.",
  },
  {
    title: "Renovaties",
    desc: "Woningen en bedrijfspanden naar moderne standaarden.",
  },
  {
    title: "Uitbreidingen & verbouwingen",
    desc: "Slimme extra ruimte en betere indeling.",
  },
];

export default function DienstenPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-dark md:text-5xl">Diensten</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Wij ondersteunen particulieren en bedrijven in Amsterdam & omstreken met complete
            bouw- en verbouwoplossingen.
          </p>
        </Container>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-sm transition-all hover:border-gold hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-100 to-orange-200 relative">
                  <img
                    src={
                      s.title === "Nieuwbouw"
                        ? "/fotos/B2.jpg"
                        : s.title === "Renovaties"
                        ? "/fotos/C2.jpg"
                        : "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center"
                    }
                    alt={`${s.title} Amsterdam bouwproject`}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-dark">{s.title}</h2>
                  <p className="mt-2 text-slate-600">{s.desc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue">Meer informatie</span>
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
