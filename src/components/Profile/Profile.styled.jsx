import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: 50px auto;
  height: auto;
  width: 350px;
  border-radius: 5px;
  background-color: rgba(140, 247, 227, 0.8);
  padding: 20px;
  box-shadow: 0px 0px 10px 15px rgba(146, 207, 235, 0.75);
`;

export const Description = styled.div`
  margin-bottom: 35px;
  text-align: center;
  color: rgb(29 107 125);
`;

export const Avatar = styled.img`
  margin-top: 20px;
  margin-bottom: 35px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  overflow: hidden;
  width: 150px;
  padding: 5px;
  box-shadow: 0px 0px 10px 5px rgba(146, 207, 235, 0.75) inset;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  color: #0b118f;
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const Location = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 0px 10px 5px rgba(144, 213, 245, 0.75);
  border-radius: 5px;
`;

export const StatsItem = styled.li`
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

export const Quantity = styled.span`
  display: block;
  font-weight: 700;
  padding: 5px;
  color: #2c34d4;
`;
