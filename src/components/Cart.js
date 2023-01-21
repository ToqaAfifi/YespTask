import AppContext from "../store/context";
import { Divider } from "@mui/material";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import CartItem from "./CartItem";
import classes from './Cart.module.scss'

const Cart = () => {
    return (
        <AppContext.Consumer>
            {({ cartItems, total, removeProduct }) => (
                <div className={classes.wrapper}>
                    <h1 className={classes.title}>My Cart</h1>
                    <Divider />

                    <h3>Cart Summary</h3>

                    {cartItems.length > 0 ? cartItems.map(item => <CartItem key={item.id} {...item} removeProduct={removeProduct}/>) : <p>No Items Yet</p>}

                    <h2 className={classes.total}>Total: {total} LE</h2>

                    <div className={classes.buttons}>
                        <SecondaryButton styles={{ borderRadius: '35px', backgroundColor: "var(--secondary-color)", color: 'black', fontSize: "15px", margin: "0 2%" }}>Review Cart</SecondaryButton>
                        <PrimaryButton styles={{ borderRadius: '35px', backgroundColor: "var(--primary-color)", color: 'white', fontSize: "15px", margin: "0 2%" }}>Complete Checkout</PrimaryButton>
                    </div>
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default Cart;