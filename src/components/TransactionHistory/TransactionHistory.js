import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

const TransactionHistory = function ({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th className={css.transactionTitle}>Type</th>
          <th className={css.transactionTitle}>Amount</th>
          <th className={css.transactionTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.transactionValue}>{type}</td>
            <td className={css.transactionValue}>{amount}</td>
            <td className={css.transactionValue}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
