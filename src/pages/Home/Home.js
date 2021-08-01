import React, { useState } from 'react';
import Icon from './../../assets/images/user.jpg';
import Header from './../../components/Home/header';
import UserInfo from './../../components/Home/UserInfo';
import PhotoGrid from './../../components/Home/PhotoGrid';

let Home = () => {
  let [name, setName] = useState("Neha Gupta");
  let [userName, setUserName] = useState("nayyyhaa");
  let [bio, setBio] = useState("Through my lens.");

        return (
            <div>
                <Header userImg = {Icon} name={name} userName={userName} bio={bio} setName={setName} setUserName={setUserName} setBio={setBio}/>
                <UserInfo userImg = {Icon} name={name} userName={userName} bio={bio} setName={setName} setUserName={setUserName} setBio={setBio}/>
                <PhotoGrid/>
            </div>
        )
}

export default Home;

