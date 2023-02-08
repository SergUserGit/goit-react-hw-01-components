import PropTypes from 'prop-types';
import css from './Friends.module.css';
import FriendListItem from 'components/Friends/FriendListItem';

const FriendsList = function ({ friends }) {
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
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendsList;
