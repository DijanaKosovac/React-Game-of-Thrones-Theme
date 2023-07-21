import apiUrl from "../api/api";

const getCharacters = () => {
  const response = apiUrl.get("/Characters");
  return response;
};

const getCharacterById = (id) => {
  const response = apiUrl.get(`/Characters/${id}`);
  return response;
};

export const gameOfThronesService = {
  getCharacters,
  getCharacterById,
};
