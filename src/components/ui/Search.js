import classes from './Search.module.scss'
import { BiSearch } from 'react-icons/bi'

const Search = () => {
    return (
        <form className={classes.search}>
            <BiSearch size={25} style={{ position: 'absolute', margin: "0px 0px 0px 10%" }} />
            <input type='search' className={classes.searchInput} placeholder="Search" />
        </form>
    )
}

export default Search;