export const Movie = ({ movie, key }) => {
  return (
    <div
      key={key}
      style={{ background: "grey", margin: "1rem", padding: "1rem" }}
    >
      <p>Title: {movie.Title}</p>
      <p>Year: {movie.Year}</p>
      <img src={movie.Poster} alt={movie.Title} width={400} />
    </div>
  );
};
