import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
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
}
