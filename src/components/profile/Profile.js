import React from 'react';

const Profile = () => {
    var textArea = document.getElementById("text-area");
    if (textArea) {
        var textWidth = textArea.clientWidth;
    }
    console.log(textWidth);
    return (
        <div>
            <img src='https://medley.s3.us-west-2.amazonaws.com/profile.png'></img>
            <div id='text-area'>
            {
                textWidth < 100? <p className='truncate whitespace-normal p-2' >We travel to discover nature and taste the cuisine of rural areas. We love to reinvent ourselves in different cultures and natures. We enjoy telling our stories.</p>:null
            }
            </div>
        </div>
    );
};

export default Profile;