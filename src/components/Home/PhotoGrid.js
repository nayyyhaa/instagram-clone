import React from 'react';

import photo1 from './../../assets/images/photo1.jpeg';
import photo2 from './../../assets/images/photo2.jpeg';
import photo3 from './../../assets/images/photo3.jpeg';
import photo4 from './../../assets/images/photo4.jpeg';
import photo5 from './../../assets/images/photo5.jpeg';
import photo6 from './../../assets/images/photo6.jpeg';

const photos = [photo1,photo2,photo3,photo4,photo5,photo6];

const Header = () => {
    return(
      <div className="photo_content">
        <div className="photosdiv">
          {
            photos.map((photo) => {
            return (
                <div className="img_wrap">
                  <img className="grid-images" src={photo} alt="Insta image"/>
                  <p className="likes">
                    <i class="fas fa-heart"></i>
                    <p className="likes_count">5</p></p>
                </div>
              )
            })
          }
        </div>
      </div>
    )
}

export default Header;