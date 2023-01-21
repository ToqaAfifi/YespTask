import { Link } from "react-router-dom"
import { BiPhoneCall } from 'react-icons/bi'
import { BsTruck } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiMenuAlt1 } from 'react-icons/hi'
import classes from './InfoNavigation.module.scss'

const InfoNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <p><HiMenuAlt1 size={20} style={{ padding: "0 8px" }} />Yashary Logo</p>
                <ul className={classes.list}>
                    <li><Link to='contact-us'><BiPhoneCall size={20} style={{ padding: "0 8px" }} />Contact Us</Link></li>
                    <li><Link to='track-order'><BsTruck size={20} style={{ padding: "0 8px" }} />Track Order</Link></li>
                    <li><Link to='stores'><HiOutlineLocationMarker size={20} style={{ padding: "0 8px" }} />Find Store</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default InfoNavigation;