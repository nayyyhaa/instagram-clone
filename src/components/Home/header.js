import React, { useState } from 'react';

import Instagram from './../../assets/images/instagram-new-logo.png';
import EditUser from './../EditPage/edit'
const Header = ({userImg, name, userName, bio, setName, setUserName, setBio}) => {
  let [editmodeon, setEditmodeon] = useState(false);

  let togglePop = () => {
   setEditmodeon(!editmodeon);
  };

    return(
      <div className="header_content">
          <div className="header">
              <img className="header__logo-image" src={Instagram} alt="Insta image"></img>
              <button className="profile-btn" onClick={togglePop}>
                  <img className="header-user-img" src={userImg} alt="User image"></img>
              </button>
          </div>
          {editmodeon ? <EditUser toggle={togglePop} userImg={userImg} name={name} userName={userName} bio={bio} setName={setName} setUserName={setUserName} setBio={setBio}/> : null}
        </div>
    )
}

export default Header;