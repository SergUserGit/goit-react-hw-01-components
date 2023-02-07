import css from './Friends.module.css';
import FriendListItem from 'components/Friends/FriendListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
        />
      ))}
    </ul>
  );
}
