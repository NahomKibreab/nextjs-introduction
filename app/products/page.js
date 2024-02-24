import Link from "next/link";

export default function Products() {
  const products = ["MAC", "IPHONE", "AIRPOD"];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Products Page</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
