import useGenres from "../hooks/useGenres";

export const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return <div>{error && <Text>{error}</Text>}</div>;
};
