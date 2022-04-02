import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  width: 1200px;

  display: block;
  margin: 0 auto;
  margin-top: 50px;
  border-collapse: separate;
  border-spacing: 2px;
`;

export const TableHead = styled.thead`
  display: block;
  text-align: center;
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const TableHeadTitle = styled.th`
  padding: 20px;
  display: block;
  width: 33%;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  background: #2e82c3;
  border: 1px solid white;
  text-transform: uppercase;
`;

export const TableBody = styled.tbody`
  display: block;
  margin-top: 10px;
  tr:nth-of-type(2n) {
    background-color: silver;
  }
`;

export const TableContent = styled.td`
  padding: 20px;
  display: block;
  width: 33%;
  text-align: center;
  border: 1px solid white;
  :nth-of-type(1)::first-letter {
    text-transform: uppercase;
  }
`;
