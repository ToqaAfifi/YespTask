import { Link } from "react-router-dom"
import { BsCart3 } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import Search from "../ui/Search";
import AppContext from "../../store/context";
import { Badge } from "@mui/material";
import classes from './MainNavigation.module.scss'

const MainNavigation = () => {
    return (
        <AppContext.Consumer>
            {({ toggleDrawer, noOfItems }) => (
                <header className={classes.header}>
                    <nav>
                        <Search />

                        <ul className={classes.list}>
                            <li>
                                <Link onClick={() => toggleDrawer(true)}>
                                    <Badge badgeContent={noOfItems === 0 ? '0' : noOfItems} color='error' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                                        <BsCart3 size={20} style={{ padding: "0 8px" }} />
                                        Cart
                                    </Badge>
                                </Link>
                            </li>
                            <li><Link to='wishlist'><AiOutlineHeart size={20} style={{ padding: "0 8px" }} />WishList</Link></li>
                            <li><Link to='login'><AiOutlineUser size={20} style={{ padding: "0 8px" }} />Login</Link></li>
                        </ul>
                    </nav>
                </header>
            )}
        </AppContext.Consumer>
    )
}

export default MainNavigation;