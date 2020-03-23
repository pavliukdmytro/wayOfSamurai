import React from 'react';

import forest from '../images/forest.jpg'
function Profile () {
    return(
        <main className="content">
            <img src={forest} alt=""/>
            <div>
                <img  src="https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12234558/Chinook-On-White-03.jpg" alt=""/>
            </div>
        </main>
    )
}

export default Profile;