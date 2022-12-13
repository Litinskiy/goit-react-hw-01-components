import PropTypes from "prop-types";
import css from "../friends/friendListItem.module.css" 
import { FriendListItem } from "../friends/friendListItem"

export function FriendList({ friends }) {
    return (<ul className={css.friend_list}>
        {friends.map(({avatar, isOnline, id,  name})=>
            (<FriendListItem key={ id} avatar={avatar} isOnline={isOnline} name={name}/>))}
</ul>)
}

FriendList.PropTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    })).isRequired
}