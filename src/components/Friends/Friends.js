import css from './Friends.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <li className={css.item} key={id}>
          <span className={css.status}>{isOnline}</span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
}
