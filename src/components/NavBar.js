import me from  './images/ismael.jpg'
import bell from './images/bell.png'
import massenger from './images/massenger.png'
import menu from './images/menu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faUsersLine, faStore, faTv, faHouse } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'
import facebook from './images/facebook.png'

export default function NavBar() {
  return (
    <div className='navBar'>
        <ul>
            <li><a href='https://www.facebook.com/profile.php?id=100003618607210'><img src={me} alt='my pic'/></a></li>
            <li><a href='https://www.facebook.com/hussein.khaled.10420/posts/pfbid0PZLC2x12V7KCA4qSeSpkX45YGTfevL54meBK7GtvwfE6he55cjy39ST9ogCg6vSjl?notif_id=1692986149559515&notif_t=close_friend_activity&ref=notif'><img src={bell} alt='bell' id='bell' /></a></li>
            <li><a href='https://www.facebook.com/profile.php?id=100003618607210'><img src={massenger} alt='massenger'/></a></li> 
            <li><a href='https://www.facebook.com/profile.php?id=100003618607210'><img src={menu} alt='menu' id='menu'/></a></li> 
            <li>
                <ul className='navPages'>
                    <li><h3>itemmmmmmm</h3></li>
                    <li><a href='https://www.facebook.com/gaming/play/?store_visit_source=gaming_tab'><FontAwesomeIcon icon={faGamepad} size='xl' /></a></li>
                    <li><h3>iteeemmm</h3></li>
                    <li><a href='https://www.facebook.com/'><FontAwesomeIcon icon={faUsersLine} size='xl' /></a></li>
                    <li><h3>iteeemmm</h3></li>
                    <li><a href='https://www.facebook.com/marketplace/?ref=app_tab'><FontAwesomeIcon icon={faStore} size='xl' /></a></li>
                    <li><h3>iteeemmm</h3></li>
                    <li><a href='https://www.facebook.com/watch/?ref=tab'><FontAwesomeIcon icon={faTv} size='xl' /></a></li>
                    <li><h3>iteeemmm</h3></li>
                    <li><a href='https://www.facebook.com/'><FontAwesomeIcon icon={faHouse} size='xl' /></a></li>
                    <li><h3>iteeeemmmmmm</h3></li>
                    <li><SearchBar/></li>
                    <li><a href='https://www.facebook.com/'><img src={facebook} alt='facebook-icon'/></a></li>
                </ul>
            </li>
        </ul>
    </div>
  )
}
