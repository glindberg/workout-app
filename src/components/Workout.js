import React, { Component } from "react";
import Header from "./Header";
import { SCMainContainer, SCExercise, SCExerciseManagement } from "../styles";
import { logoutUser } from "../actions";

class Workout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = this.state;
    console.log("Final data" + JSON.stringify(data));
  };

  handleInputChange = event => {
    event.preventDefault();
    // console.log(event.target.name);
    // console.log(event.target.value);
    this.setState({
      //Brackets enables the ability to set event.target.name
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { exercise } = this.state;
    return (
      <SCMainContainer>
        <Header />

        <SCExerciseManagement>
          {/* Borde startas automatiskt när man startar första övningen */}
          <h2>Timer: </h2> <button>Start/Stop</button> <button>Pause</button>
        </SCExerciseManagement>

        <SCExercise>
          <p>The exercise is: {exercise}</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <input
                type="text"
                // placeholder="Gustav"
                name="exercise"
                value={exercise}
                onChange={this.handleInputChange}
              />
            </p>
            <p>
              <button>Send Message</button>
            </p>
          </form>

          <ul>
            <li>{exercise}</li>
          </ul>
        </SCExercise>
      </SCMainContainer>
    );
  }
}

export default Workout;
