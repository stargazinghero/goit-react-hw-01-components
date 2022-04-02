import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
  padding-top: 20px;
  width: 500px;
  text-align: center;
  margin: 0 auto;
`;

export const StatisticsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.subtitleText};
  padding: 20px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  background-color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
`;

export const StatisticsList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

export const StatisticsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const StatisticsLabel = styled.span`
  color: ${({ theme }) => theme.colors.white};
`;

export const StatisticsPercentage = styled.span`
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.white};
  font-size: 32px;
`;
