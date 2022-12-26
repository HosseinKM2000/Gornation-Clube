import React , {useState} from 'react';
import './Header.css';
import gornationLOGO from '../../assets/LOGO.png';
import hamberMenu from '../../assets/hamburger.png';
import { Link } from 'react-scroll';

const Header = () => {

const [menuOpened,setMenuOpened] = useState(false);  
const mobile = window.innerWidth <= 768 ? true : false;
console.log(mobile)

return (
      <div className="header">
        <img src={gornationLOGO} alt="logo"/>
        {
          (menuOpened === false && mobile === true)?(
          <img src={hamberMenu} alt="menu-icon" onClick={()=> setMenuOpened(true)}/>
          ) : (<ul className='header-menu'>
          <li><Link onClick={()=>setMenuOpened(false)} span={true} smooth={true} to='Home' >Home</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} span={true} smooth={true} to='Programs'>Programs</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} span={true} smooth={true} to='Reasons'>Why us</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} span={true} smooth={true} to='Plans'>Plans</Link></li>
          <li><Link onClick={()=>setMenuOpened(false)} span={true} smooth={true} to='Testimonials'>Testimonials</Link></li>
        </ul>)
        }
      </div>
  )
}

export default Header;
