import { useParams } from "react-router-dom";
import { gameOfThronesService } from "../services/gameOfThrones.service";
import React, { useEffect, useState } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const CharacterDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  const fetchCharacter = async () => {
    try {
      const res = await gameOfThronesService.getCharacterById(id);
      setCharacter(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  useEffect(() => {
    fetchCharacter();
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
        <section className="character">
          <section className="character__details">
            <section>
              <h1 className="character__title">{character.fullName}</h1>
              <p className="character__subtitle">- {character.title} - </p>
              <p className="character__subtitle">{character.family}</p>
            </section>
            <div className="character__image-wrapper">
              <img src={character.imageUrl} alt="character-profile" />
            </div>
          </section>
        </section>
      )}
    </React.Fragment>
  );
};

export default CharacterDetails;
