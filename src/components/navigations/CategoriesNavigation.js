import { Link } from "react-router-dom";
import classes from './CategoriesNavigation.module.scss'

const CategoriesNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><Link to='men'>Men</Link></li>
                    <li><Link to='women'>Women</Link></li>
                    <li><Link to='unisex'>Unisex</Link></li>
                    <li><Link to='kids'>Kids</Link></li>
                    <li><Link to='best-sellers'>Best Sellers</Link></li>
                    <li><Link to='new-arrivals'>New Arrivals</Link></li>
                    <li><Link to='offers'>Offers</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default CategoriesNavigation;