import styled from "styled-components/macro";

export const SCMainContainer = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(164, 145, 33, 1) 0%,
    rgba(88, 176, 135, 1) 76%,
    rgba(0, 212, 255, 1) 100%
  );
  /* border: 2px solid lightsalmon; */
  height: 100vh;
  /* align-items: center; */
  /* li {
    margin-top: 2rem;
  } */
`;

export const SCHeader = styled.div`
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(164, 145, 33, 1) 0%,
    rgba(88, 176, 135, 1) 76%,
    rgba(0, 212, 255, 1) 100%
  );
  height: 5vh;
  /* border: 2px solid blue; */
  display: flex;
  justify-content: space-evenly;
`;

export const SCExercise = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2em;
  select {
    height: 2em;
    margin: 0 6rem 0 6rem;
  }
`;

export const SCExerciseManagement = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  /* button {margin: 0 6rem 0 6rem}; */
`;
