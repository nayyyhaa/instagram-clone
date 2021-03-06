import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {editUserDetails} from "../../redux/actions/userProfileActions";

const EditUser = ({toggle}) => {
    const userDetails = useSelector((state) => state.userDetails);
    const {name, username, bio, userImg} = userDetails[0];
    let handleClick = () => {
        toggle();
        console.log("open")
    };
    let dispatch = useDispatch();

  let [tname, setNameTemp] = useState(name);
  let [tuserName, setUserNameTemp] = useState(username);
  let [tbio, setBioTemp] = useState(bio);

  const inputNameHandler = (e) => {
        setNameTemp(e.target.value);
    }

    const inputUserNameHandler = (e) => {
        setUserNameTemp(e.target.value);
    }
    const inputBioHandler = (e) => {
        setBioTemp(e.target.value);
    }

    const saveAll = () => {
        let editedState = {
            userDetails : 
            [{
                name: tname,
                username: tuserName,
                bio: tbio,
                userImg: userImg
            }]
        }
        dispatch(editUserDetails(editedState));
        handleClick();
    }

    return(
    <div className="backDrop">
        
        <h1 className="close-btn" onClick={handleClick}>&times;</h1>
        <div className="modal">
            <div className="modal_content">
                <h2>Edit Profile</h2>
                <div className="edit-userInfo">
                    <div className="edit-info">
                        <img className="edit-user-img" src={userImg} alt="User image"></img>
                        <div className="edit-info-display">
                            <h2>{username}</h2>
                            <p className="upload-img">Change Profile Photo</p>
                        </div>
                    </div>
                    <div className="edit-info">
                        <h2 className="edit-field-name">Name</h2>
                        <input className="edit-user-field" value={tname} onChange={inputNameHandler}></input>
                    </div>
                    <div className="edit-info">
                        <h2 className="edit-field-name">User name</h2>
                        <input className="edit-user-field" value={tuserName} onChange={inputUserNameHandler}></input>
                    </div>
                    <div className="edit-info">
                        <h2 className="edit-field-name">Bio</h2>
                        <input className="edit-user-field" value={tbio} onChange={inputBioHandler}></input>
                    </div>
                </div>
                <button className="save-btn" onClick={saveAll}>Save</button>
            </div>
        </div>
    </div>
    )
}

export default EditUser;