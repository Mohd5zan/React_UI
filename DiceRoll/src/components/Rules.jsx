import styled from "styled-components";
const Rules = () => {
  return (
    <Rulescont>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after clicking on dice if selected number is equal to dice number you
          will get same point as dice number
        </p>
        <p>for wrong guess 2 points will be dedcuted </p>
      </div>
    </Rulescont>
  );
};

export default Rules;
const Rulescont = styled.div`
  background-color: #fbf1f1;
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  margin-top: 40px;
  padding: 20px;
  h2 {
    font-size: 24px;
  }
  .text {
    margin-top: 24px;
  }
`;
