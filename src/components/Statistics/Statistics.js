import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {typeof title !== 'undefined' && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.quantity}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
