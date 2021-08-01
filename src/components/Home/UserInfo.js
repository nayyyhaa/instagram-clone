import React, {useState} from 'react';
import grid from '../../assets/images/grid_44x44.png';
import channel from '../../assets/images/channel_44x44.png';
import saved from '../../assets/images/saved_44x44.png';
import tagged from '../../assets/images/tagged_44x44.png';
import EditUser from './../EditPage/edit'

const UserInfo = ({userImg, name, userName, bio, setName, setUserName, setBio}) => {
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
                    <h1 className="username">{userName}</h1>
                    <button className="edit-btn" onClick={togglePop}><strong>Edit Profile</strong></button>
                </div>
            </div>
            <div className="user-count">
                <div class="posts">
                    <p class="number">6</p>
                    <p class="description">posts</p>
                </div>
                <div class="followers">
                    <p class="number">168</p>
                    <p class="description">followers</p>
                </div>
                <div class="following">
                    <p class="number">81</p>
                    <p class="description">following</p>
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
            {editmodeon ? <EditUser toggle={togglePop} userImg={userImg} name={name} userName={userName} bio={bio} setName={setName} setUserName={setUserName} setBio={setBio}/> : null}
        </div>
    )
}

export default UserInfo;