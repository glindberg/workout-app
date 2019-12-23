import React from "react";
import { SCMainContainer } from "../styles";

const Workout = () => {
  return (
    <SCMainContainer>
      <ul>
        <li>Deadlift(click to expand)</li>
        <li>
          Benchpress(is expanded) <br />
          Weight: 80 Kg
          <br />
          First Set: 8 reps <br />
          Second Set: 9 reps <br />
          Third Set: 10 reps <br />
          Fourth Set: 7 reps <br />
        </li>
        <li>
          Benchpress <br />
          Weight <input maxlength="3" size="3" /> Kg
          <br />
          First Set
          <input maxlength="3" size="3" /> reps <br />
        </li>
      </ul>
      <button>Add Set</button>
    </SCMainContainer>
  );
};

export default Workout;

// Två views
//Live-view.
//Post-training view.

// I Live view
//Man behöver kunna avsluta/klarmarkera sin övning. Då fälls övningsdiven ihop och
//lägger sig ovanför. Sen ska man kunna trycka på den och den expanderar ner
//(fortfarande i Live view).
