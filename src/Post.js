import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import { ExpandMoreOutlined} from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Post({profilePic, image, username, timestamp, message}) {
  return (
    <div className='post'>
       <div className="post_top">
        <Avatar src={profilePic} className="post_avatar" />
        <div className="post_topinfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
       </div>
       <div className="post_buttom">
        <p>{message}</p>
       </div>
       <div className="post_image">
        <img src={image} alt=" " />
       </div>
       <div className="post_options">
        <div className="post_option">
            <ThumbUpIcon />
            <p>Like</p>
        </div>
        <div className="post_option">
            <ChatBubbleOutlineIcon/>
            <p>Comment</p>
        </div>
        <div className="post_option">
            <NearMeIcon/>
            <p>Share</p>
        </div>
        <div className="post_option">
            <AccountCircleIcon />
            <ExpandMoreOutlined />
        </div>
       </div>
    </div>
  )
}

export default Post