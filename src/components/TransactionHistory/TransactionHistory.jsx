
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => (
    <table className={css.transactionHistory}>
        <thead className={css.theadRow}>
            <tr className={css.valuesRow}>
                <th classsName={css.topColumn}>Type</th>
                <th classsName={css.topColumn}>Amount</th>
                <th classsName={css.topColumn}>Currency</th>
            </tr>
        </thead>

        <tbody>
          {items.map(item => (
        <tr key={item.id} className={css.valuesRow}>
          <td className={css.transactionData}>{item.type}</td>
          <td className={css.transactionData}>{item.amount}</td>
          <td className={css.transactionData}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.number.isRequired,
    })
  ).isRequired,
};
