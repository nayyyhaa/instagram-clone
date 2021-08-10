import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import grid from '../../assets/images/grid_44x44.png';
import channel from '../../assets/images/channel_44x44.png';
import saved from '../../assets/images/saved_44x44.png';
import tagged from '../../assets/images/tagged_44x44.png';
import EditUser from './../EditPage/EditUser'

const UserInfo = () => {
    const userDetails = useSelector((state) => state.userDetails);
    const {name, username, bio, userImg} = userDetails[0];
    console.log(userDetails);
    let [editmodeon, setEditmodeon] = useState(false);

    let togglePop = () => {
    setEditmodeon(!editmodeon);
    };

    return(
        <div className="userInfo">
            <div className="user-profile">
                <div className="user_description">
                    <img className="user-img" src={userImg} alt="User image"></img>
                        <h3>{name}</h3>
                        <p className="bio">{bio}</p>
                </div>
                <div className="userBio">
                    <h1 className="username">{username}</h1>
                    <button className="edit-btn" onClick={togglePop}><strong>Edit Profile</strong></button>
                </div>
            </div>
            <div className="user-count">
                <div className="posts">
                    <p className="number">6</p>
                    <p className="description">posts</p>
                </div>
                <div className="followers">
                    <p className="number">168</p>
                    <p className="description">followers</p>
                </div>
                <div className="following">
                    <p className="number">81</p>
                    <p className="description">following</p>
                </div>
            </div>
            <div className="gallery-nav">
                <ul>
                    <li className="option"><img src={grid} alt="grid"/></li>
                    <li className="option"><img src={channel} alt="channel"/></li>
                    <li className="option"><img src={saved} alt="saved"/></li>
                    <li className="option"><img src={tagged} alt="tagged"/></li>
                </ul>
            </div>
            {editmodeon ? <EditUser toggle={togglePop}/> : null}
        </div>
    )
}

export default UserInfo;