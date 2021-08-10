import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Instagram from './../../assets/images/instagram-new-logo.png';
import EditUser from '../EditPage/EditUser';
const Header = () => {
    const userDetails = useSelector((state) => state.userDetails);
    const {userImg} = userDetails[0];
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
          {editmodeon ? <EditUser toggle={togglePop}/> : null}
        </div>
    )
}

export default Header;