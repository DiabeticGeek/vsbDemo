import Link from "next/link";
import Container from "@/components/Container";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-dark/40 bg-dark">
      <Container>
        <div className="flex h-14 items-center justify-between text-white">
          <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-gold text-dark font-bold text-sm overflow-hidden">
              <img src="/VSB1.png" alt="Van Soolingen Bouw" className="h-full w-full object-contain" />
            </div>
            <span>Van Soolingen Bouw</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium sm:flex">
            <Link href="/over-ons" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Over ons
            </Link>
            <Link href="/diensten" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Diensten
            </Link>
            <Link href="/projecten" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Projecten
            </Link>
            <Link href="/referenties" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Referenties
            </Link>
            <Link href="/contact" className="text-white/90 hover:text-white hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-md bg-gold px-3 py-1.5 text-sm font-semibold text-dark shadow hover:brightness-95"
          >
            Vrijblijvend contact
          </Link>
        </div>
      </Container>
    </header>
  );
}
