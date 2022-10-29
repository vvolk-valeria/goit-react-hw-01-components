import PropTypes from 'prop-types';
import { FriendListContainer } from './FriendList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListContainer>
      {friends.map(({ name, avatar, isOnline, id }) => (
        <FriendListItem
          name={name}
          avatar={avatar}
          isOnline={isOnline}
          key={id}
        />
      ))}
    </FriendListContainer>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

// export const FriendList = ({ friends }) => {
//   return (
//     <FriendListContainer>
//       {friends.map(({ name, avatar, isOnline, id }) => (
//         <Item key={id}>
//           <Status isOnline={isOnline}></Status>
//           <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
//           <Name>{name}</Name>
//         </Item>
//       ))}
//     </FriendListContainer>
//   );
// };
