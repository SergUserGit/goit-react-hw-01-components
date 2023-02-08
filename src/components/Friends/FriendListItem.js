import PropTypes from 'prop-types';
import css from './Friends.module.css';

const FriendListItem = function ({ isOnline, avatar, name }) {
  return (
    <li className={css.item}>
      <span
        className={
          css.status + ' ' + css[isOnline ? 'statusOnline' : 'statusOffline']
        }
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};

export default FriendListItem;
