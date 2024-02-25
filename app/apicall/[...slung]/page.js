async function getData(name) {
  const res = await fetch(`https://api.github.com/users/${name}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return {
      login: "Not Found",
      avatar_url:
        "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
    };
  }

  return res.json();
}

export default async function Page({ params }) {
  const data = await getData(params.slung);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">
        Slung Page {params.slung[0]} / {params.slung[1]}{" "}
      </h1>
      <p>{data.login}</p>
      <img src={data.avatar_url} alt={data.login} width={400} />
    </main>
  );
}
