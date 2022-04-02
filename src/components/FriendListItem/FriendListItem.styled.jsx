import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 5px;
  padding: 10px;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  margin-left: 10px;
`;

export const FriendName = styled.p`
  font-size: 24px;
  margin-left: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.titleText}; ;
`;
