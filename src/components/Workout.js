import React from "react";
import { SCMainContainer, SCExercise } from "../styles";

const Workout = () => {
  return (
    <SCMainContainer>
      onSubmit
      <SCExercise>
        <p>Exercise 1 :</p>
        <select>
          <option value="none">None</option>
          <option value="deadlift">Deadlift</option>
          <option value="squats">Squats</option>
          <option value="benchpress">Benchpress</option>
          <option value="hudles">Hurdles</option>
          <option defaultValue value="None">
            None
          </option>
          <option value="mango">Mango</option>
        </select>
        <button>OK</button>
      </SCExercise>
    </SCMainContainer>
  );
};

export default Workout;
