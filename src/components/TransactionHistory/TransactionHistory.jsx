import PropTypes from 'prop-types';

import {
  TableTransaction,
  TableHead,
  TableRow,
  TableHeadTitle,
  TableBody,
  TableContent,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TableTransaction>
      <TableHead>
        <TableRow>
          <TableHeadTitle>Type</TableHeadTitle>
          <TableHeadTitle>Amount</TableHeadTitle>
          <TableHeadTitle>Currency</TableHeadTitle>
        </TableRow>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableRow key={id}>
              <TableContent>{type}</TableContent>
              <TableContent>{amount}</TableContent>
              <TableContent>{currency}</TableContent>
            </TableRow>
          );
        })}
      </TableBody>
    </TableTransaction>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
