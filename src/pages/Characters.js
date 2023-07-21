import { gameOfThronesService } from "../services/gameOfThrones.service";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let navigate = useNavigate();

  const fetchCharacters = async () => {
    try {
      const res = await gameOfThronesService.getCharacters();
      setCharacters(res.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <React.Fragment>
      {isLoading ? (
        <div className="loader-container">
          <CircleLoader
            color="#03bcf4"
            size={100}
            cssOverride={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      ) : (
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
                    <h3 className="character-title">{character.fullName}</h3>
                    <p className="character-subtitle">{character.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </React.Fragment>
  );
};

export default Characters;
