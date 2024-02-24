export default function Page({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Products: {params.product}</h1>
    </main>
  );
}
