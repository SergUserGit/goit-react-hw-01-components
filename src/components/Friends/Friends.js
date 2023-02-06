import css from './Friends.module.css';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ id, isOnline, name, avatar }) => (
        <li key={id}>
          <span>{isOnline}</span>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
}
