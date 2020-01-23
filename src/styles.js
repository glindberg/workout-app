import styled from "styled-components";

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
  display: flex;
  flex-direction: column;
  align-items: center;
  li {
    margin-top: 2rem;
  }
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
