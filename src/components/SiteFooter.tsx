import Container from "@/components/Container";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/60 bg-white py-10 text-sm text-slate-600">
      <Container>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 font-semibold text-dark mb-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gold text-dark font-bold text-xs overflow-hidden">
                <img src="/VSB1.png" alt="Van Soolingen Bouw" className="h-full w-full object-contain" />
              </div>
              <span>Van Soolingen Bouw</span>
            </div>
            <p className="max-w-xs">Bouw- en renovatiediensten in Amsterdam & omstreken.</p>
          </div>
          <div>
            <div className="font-semibold text-dark">Navigatie</div>
            <ul className="mt-2 space-y-1">
              <li><Link href="/over-ons" className="hover:underline underline-offset-4">Over ons</Link></li>
              <li><Link href="/diensten" className="hover:underline underline-offset-4">Diensten</Link></li>
              <li><Link href="/projecten" className="hover:underline underline-offset-4">Projecten</Link></li>
              <li><Link href="/referenties" className="hover:underline underline-offset-4">Referenties</Link></li>
              <li><Link href="/contact" className="hover:underline underline-offset-4">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-dark">Contact</div>
            <ul className="mt-2 space-y-1">
              <li>Tel: <a href="tel:+31628528582" className="hover:underline">+31 6 285 285 82</a></li>
              <li>E-mail: <a href="mailto:mats@vansoolingenbouw.nl" className="hover:underline">mats@vansoolingenbouw.nl</a></li>
              <li>Regio: Amsterdam & omstreken</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t pt-6 text-xs text-slate-500">© {new Date().getFullYear()} Van Soolingen Bouw. Alle rechten voorbehouden.</div>
      </Container>
    </footer>
  );
}
