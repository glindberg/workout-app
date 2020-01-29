import React, { Component } from "react";
import Header from "./Header";
import {
  SCMainContainer,
  SCExerciseInput,
  SCExerciseList,
  SCExerciseManagement
} from "../styles";

class Workout extends Component {
  state = {
    post: {
      exercise: "",
      weight: ""
    },
    exercisesInWorkout: []
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState(prevState => ({
      post: { ...prevState.post, [name]: value }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Pre submit" + JSON.stringify(this.state.post));
    this.setState(prevState => ({
      exercisesInWorkout: [...prevState.exercisesInWorkout, prevState.post],
      post: { exercise: "", weight: "" }
    }));
  };

  handleRemove = e => {
    this.setState = "";
  };

  render() {
    return (
      <SCMainContainer>
        <Header />

        <SCExerciseInput>
          <form>
            <input
              name="exercise"
              onChange={this.handleChange}
              type="text"
              value={this.state.post.exercise}
              placeholder="Exercise.."
            />
            <input
              name="weight"
              onChange={this.handleChange}
              type="text"
              value={this.state.post.weight}
              placeholder="Weight.."
            />

            <button onClick={this.handleSubmit}>Add</button>
          </form>
        </SCExerciseInput>
        <SCExerciseList>
          <ul>
            {this.state.exercisesInWorkout.map((exercise, index) => (
              <li key={index}>
                {exercise.exercise + " "} Weight: {exercise.weight + "kg "}{" "}
                Repetitions:{" "}
                <select name="repetitions">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>8</option>
                  <option>7</option>
                  <option>9</option>
                  <option>10</option>
                </select>
                <button>Add set</button>
                <button onClick={this.handleRemove}>Remove</button>
              </li>
            ))}
          </ul>
        </SCExerciseList>
      </SCMainContainer>
    );
  }
}

export default Workout;
