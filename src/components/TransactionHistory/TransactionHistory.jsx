import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableHead,
  TableBody,
  TableRow,
  TableHeadСell,
  TableBodyСell,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TableHead>
        <TableRow>
          <TableHeadСell>Type</TableHeadСell>
          <TableHeadСell>Amount</TableHeadСell>
          <TableHeadСell>Currency</TableHeadСell>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <TableBodyСell>{type}</TableBodyСell>
            <TableBodyСell>{amount}</TableBodyСell>
            <TableBodyСell>{currency}</TableBodyСell>
          </TableRow>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
