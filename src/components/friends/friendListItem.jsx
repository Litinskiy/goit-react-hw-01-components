// import PropTypes from "prop-types";
import css from "../friends/friendListItem.module.css" 
    
export function FriendListItem({ avatar, isOnline, name  }) {
    return (
    <li className={css.item}>
            <span className={isOnline ? css.statusOnline : css.statusOffline} isOnline={isOnline}></span>
            <img className={css.avatar} src={ avatar } alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
</li>) 
}

// FriendListItem.PropTypes = {
//     avatar: PropTypes.string,
//     name: PropTypes.string,
//     isOnline: PropTypes.bool.isRequired,
// }