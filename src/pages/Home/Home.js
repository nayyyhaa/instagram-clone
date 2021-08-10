import React from 'react';
import Icon from './../../assets/images/user.jpg';
import Header from '../../components/Home/Header';
import UserInfo from './../../components/Home/UserInfo';
import PhotoGrid from './../../components/Home/PhotoGrid';

let Home = () => {
        return (
            <div>
                <Header userImg = {Icon}/>
                <UserInfo userImg = {Icon}/>
                <PhotoGrid/>
            </div>
        )
}

export default Home;

