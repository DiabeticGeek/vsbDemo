import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Pagina niet gevonden</h1>
      <p className="max-w-prose text-slate-600">
        De pagina die je zoekt bestaat niet of is verplaatst. Ga terug naar de homepage of
        bekijk onze diensten.
      </p>
      <div className="mt-2 flex gap-3">
        <Link href="/" className="rounded-md bg-dark px-4 py-2 text-white">
          Naar home
        </Link>
        <Link href="/diensten" className="rounded-md border px-4 py-2">
          Onze diensten
        </Link>
      </div>
    </main>
  );
}
