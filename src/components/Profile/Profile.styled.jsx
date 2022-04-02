import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 10px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ProfileDescription = styled.div`
  text-align: center;
`;

export const ProfileAvatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 1px solid black;
`;

export const ProfileName = styled.p`
  font-size: 32px;
`;
