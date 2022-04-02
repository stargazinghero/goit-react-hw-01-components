import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  padding-top: 10px;
  width: 300px;
  margin: 0 auto;
  margin-top: 10px;
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
  margin-top: 5px;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.titleText};
`;

export const ProfileTag = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.subtitleText};
`;

export const ProfileLocation = styled.p`
  margin-top: 5px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.subtitleText};
`;

export const ProfileStatsList = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.subtitleText};
`;

export const ProfileStatsItem = styled.li`
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  :not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.subtitleText};
  }
`;
export const ProfileStatsLabel = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.subtitleText};
`;

export const ProfileStatsQuantity = styled.span`
  margin-top: 5px;
  font-weight: bold;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.titleText};
`;
