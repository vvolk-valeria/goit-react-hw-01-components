import styled from '@emotion/styled';

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StatisticsContainer = styled.section`
  margin-bottom: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 350px;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px 15px rgba(146, 207, 235, 0.75);
  background-color: ${randomColor};
`;

export const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  color: #0b118f;
  font-size: 24px;
  font-weight: 700;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 10px 5px rgba(144, 213, 245, 0.75);
  border-radius: 5px;
  background-color: rgba(140, 247, 227, 0.8);
`;

export const Item = styled.li`
  padding: 5px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: rgb(44 127 146);
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 3px;
  padding: 5px;
`;

export const Percentage = styled.span`
  display: block;
  font-weight: 700;
  padding: 5px;
  color: #2c34d4;
`;
