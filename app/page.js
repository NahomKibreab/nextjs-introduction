import { Movie } from "../components/Movie";
import movies from "../data/movies.json";
export default function Home() {
  console.log(movies);
  return (
    <main className="flex min-h-screen flex-col items-center flex-start p-24">
      <h1 className="text-4xl font-bold">Movies</h1>
      <div className="flex flex-wrap justify-center mx-1">
        {movies.map((movie, index) => {
          return <Movie key={index} movie={movie} />;
        })}
      </div>
    </main>
  );
}
