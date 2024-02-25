import Link from "next/link";
import { Body } from "../components/Body";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">My Page</h1>
      <Header />
      <Body />
      <Link href="/apicall">
        <h1 style={{ background: "blue" }}>Learn API</h1>
      </Link>
    </main>
  );
}
