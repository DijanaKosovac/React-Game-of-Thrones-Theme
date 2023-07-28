import { gameOfThronesService } from "../services/gameOfThrones.service";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters } from "../store/character-slice";

const Characters = () => {
  const characters = useSelector((state) => state.characters);
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchCharacters = async () => {
    try {
      const res = await gameOfThronesService.getCharacters();
      dispatch(setCharacters(res.data));
    } catch (error) {
      console.error("Unexpected error!", error);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <React.Fragment>
      {!characters.length ? (
        <SkeletonCard />
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
