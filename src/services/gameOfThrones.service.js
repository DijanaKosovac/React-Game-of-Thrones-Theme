import apiUrl from "../api/api";

const getCharacters = () => {
  const response = apiUrl.get("/Characters");
  return response;
};

export const gameOfThronesService = {
  getCharacters,
};
