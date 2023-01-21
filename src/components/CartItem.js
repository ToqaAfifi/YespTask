import classes from './CartItem.module.scss'
import SecondaryButton from './ui/SecondaryButton';

const CartItem = ({ id, title, quantity, price, thumbnail, removeProduct }) => {

    return (
        <div className={classes.card}>
            <img src={thumbnail} alt="thumbnail" style={{width: '40%', borderRadius: 'inherit'}}/>

            <div className={classes.details}>
                <h3>{title}</h3>
                <p className={classes.quantity}>Quantity: {quantity}</p>
                <div className={classes.price}>
                    {price} LE
                    <SecondaryButton styles={{ borderRadius: '35px', backgroundColor: "var(--secondary-color)", color: 'black', fontSize: "15px", margin: "0 2%" }} onClick={() => removeProduct(id)}>Remove</SecondaryButton>
                </div>
            </div>
        </div>
    )
}

export default CartItem;