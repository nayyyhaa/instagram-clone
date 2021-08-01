import React from 'react';


const UserInfo = ({userImg, name, userName, bio}) => {
    return(
        <div className="userInfo">
          <img className="user-img" src={userImg} alt="User image"></img>
          <div className="userBio">
              <h2>{userName}</h2>
              <div className="user-count">
                  <p style={{margin: "0 0.5rem 0 0"}}><strong>81</strong> posts</p>
                  <p style={{margin: "0 0.5rem 0 0"}}><strong>81</strong> followers</p>
                  <p style={{margin: "0 0.5rem 0 0"}}><strong>81</strong> followings</p>
              </div>
              <div className="user_description">
                  <h3>{name}</h3>
                  <p className="bio">{bio}</p>
              </div>
          </div>
        </div>
    )
}

export default UserInfo;