import React, {useState} from 'react'
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import InputOption from './InputOption';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';

function Feed() {
    const [posts, setPosts] = useState([])
    const sendPost = e => {
        e.preventDefault();
    }


    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input type='text'/>
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e'/>
                </div>
            </div>
            
            {posts.map((post) => (
                <Post/>
            ))}
            <Post name='Casey Delaney' description='This is a test desc' message='This is a really really really really really really really long test message'/>
        </div>
    )
}

export default Feed