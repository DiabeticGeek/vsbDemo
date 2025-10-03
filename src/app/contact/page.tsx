import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem vrijblijvend contact op met Van Soolingen Bouw in Amsterdam & omstreken.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-16 md:py-24">
        <Container>
          <h1 className="text-4xl font-bold tracking-tight text-dark md:text-5xl">Contact</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Neem vrijblijvend contact op met Van Soolingen Bouw in Amsterdam & omstreken.
          </p>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold text-dark">Neem contact op</h2>
              <p className="mt-2 text-slate-600">
                Bel <a className="text-blue underline hover:text-dark" href="tel:+31628528582">+31 6 285 285 82</a> of mail naar; 
                <a className="text-blue underline hover:text-dark" href="mailto:mats@vansoolingenbouw.nl">mats@vansoolingenbouw.nl</a>.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border-2 border-slate-200 bg-white p-6">
                  <div className="text-sm font-medium text-dark/80">Telefoon</div>
                  <div className="mt-1 text-dark">+31 6 285 285 82</div>
                </div>
                <div className="rounded-xl border-2 border-slate-200 bg-white p-6">
                  <div className="text-sm font-medium text-dark/80">E-mail</div>
                  <div className="mt-1 text-dark">mats@vansoolingenbouw.nl</div>
                </div>
                <div className="rounded-xl border-2 border-slate-200 bg-white p-6">
                  <div className="text-sm font-medium text-dark/80">Regio</div>
                  <div className="mt-1 text-dark">Amsterdam & omstreken</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-dark">Onze locatie</h2>
              <p className="mt-2 text-slate-600">We zijn actief in Amsterdam en omgeving.</p>
              <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-50">
                {/* TODO: embed Google Map once address is provided */}
                <div className="flex h-full w-full items-center justify-center text-slate-400">
                  Google Map (adres volgt)
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
