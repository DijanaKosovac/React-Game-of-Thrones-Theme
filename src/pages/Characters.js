import { gameOfThronesService } from "../services/gameOfThrones.service";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  let navigate = useNavigate();

  const fetchCharacters = async () => {
    try {
      const res = await gameOfThronesService.getCharacters();
      setCharacters(res.data);
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <React.Fragment>
      <section className="characters">
        {characters.map((character) => (
          <div
            key={character.id}
            className="container"
            onClick={() => navigate(`/characters/${character.id}`)}
          >
            <div className="card">
              <div className="imgBx">
                <img src={character.imageUrl} alt="characters profiles" />
              </div>
              <div className="contentBx">
                <div className="content">
                  <h3 className="character-title">
                    {character.firstName} {character.lastName}
                  </h3>
                  <p className="character-subtitle">{character.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
};

export default Characters;
