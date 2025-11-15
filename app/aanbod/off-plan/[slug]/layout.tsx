export default function OffPlanPropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      {children}
      <section className="mt-12 px-4 mx-auto">
        <h2 className="text-xl font-semibold mb-4">
          Vergelijkbare vastgoedobjecten
        </h2>
        <div>Vergelijkbare vastgoedobjecten hier.</div>
      </section>
    </main>
  );
}
