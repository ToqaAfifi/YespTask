import { Outlet } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import CategoriesNavigation from "../components/navigations/CategoriesNavigation";
import InfoNavigation from "../components/navigations/InfoNavigation";
import MainNavigation from "../components/navigations/MainNavigation";
import AppContext from "../store/context";
import Cart from "../components/Cart";
import Footer from "../components/ui/Footer";

const Layout = () => {
    return (
        <AppContext.Consumer>
            {({ isDrawerOpen, toggleDrawer }) => (
                <>
                    <InfoNavigation />
                    <MainNavigation />
                    <CategoriesNavigation />

                    <Drawer anchor='right' open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
                        <Cart />
                    </Drawer>

                    <main>
                        <Outlet />
                    </main>

                    <Footer />
                </>
            )}
        </AppContext.Consumer>
    )
}

export default Layout;