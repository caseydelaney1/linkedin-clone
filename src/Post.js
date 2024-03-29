import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';
import InputOption from './InputOption.js'

function Post({name, description, message, photoUrl}) {
    return (
        <div className='post'>
            <div className='post__header'>
            <Avatar />
            <div className='post__info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            </div>

            <div className='post__body'>
                <p>{message}</p>
            </div>

            <div className='post__buttons'>
                <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray"/>
                <InputOption Icon={ChatBubbleOutlineIcon} title="Like" color="gray"/>
                <InputOption Icon={ShareIcon} title="Like" color="gray"/>
                <InputOption Icon={SendIcon} title="Like" color="gray"/>
            </div>
        </div>
    )
}

export default Post
