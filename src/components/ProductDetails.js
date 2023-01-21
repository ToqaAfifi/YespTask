import React from "react";
import AppContext from "../store/context";
import ImageSlider from "./ui/ImageSlider";
import Rating from '@mui/material/Rating';
import Chip from '@mui/material/Chip';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Divider, IconButton } from "@mui/material";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";
import classes from './ProductDetails.module.scss'

class ProductDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            product: {},
            quantity: '1'
        };
    }

    componentDidMount() {
        this.setState((prevState) => {
            let productObj = { ...this.props.product }
            productObj.quantity = 1
            return {
                product: productObj
            }
        })
    }

    calculatePriceBeforeDisc = (priceAfter, discPer) => {
        const discValue = priceAfter * (discPer / 100);
        const priceBefore = priceAfter + discValue;
        return priceBefore
    }

    addQuantityHandler = (e) => {

        const max = this.state.product.stock;
        if (+this.state.quantity + 1 > max) {
            return;
        }

        this.setState(prevState => {
            let updatedProduct = { ...prevState.product };
            updatedProduct.quantity = +prevState.quantity + 1;
            return {
                product: updatedProduct,
                quantity: +prevState.quantity + 1
            }
        })
    }

    removeQuantityHandler = (e) => {

        const min = 1;
        if (+this.state.quantity - 1 < min) {
            return;
        }

        this.setState(prevState => {
            let updatedProduct = { ...prevState.product };
            updatedProduct.quantity = +prevState.quantity - 1;
            return {
                product: updatedProduct,
                quantity: +prevState.quantity - 1
            }
        })
    }

    render() {

        const product = this.state.product;

        if (Object.keys(product).length === 0) {
            return <p>No Data</p>
        }

        return (
            <AppContext.Consumer>
                {({ addProduct }) => (

                    <div className={classes.row}>
                        <div className={classes.content}>
                            <ImageSlider images={product.images} />
                        </div>
                        <div className={classes.content}>
                            <h1>{product.title}</h1>
                            <p>{product.description}</p>
                            <p className={classes.category}>{product.category}</p>
                            <p className={classes.rating}>
                                <Rating value={product.rating} readOnly />
                                {product.rating} Of 5
                            </p>
                            <div className={classes.price}>
                                {product.price} LE
                                <span className={classes.priceBefore}>{this.calculatePriceBeforeDisc(product.price, product.discountPercentage)}</span>
                                <Chip label={`${product.discountPercentage}% Off`} color="warning" />
                            </div>
                            <Divider style={{ margin: '12px 0' }} />
                            <h3>Quantity</h3>

                            <div className={classes.quantity}>

                                <IconButton style={{ backgroundColor: "var(--secondary-color)", color: 'black', position: 'absolute', margin: "3px 144px" }} onClick={(e) => this.addQuantityHandler(e)}>
                                    <AiOutlinePlus size={20} />
                                </IconButton>

                                <input name='quantity' value={this.state.quantity} readOnly className={classes.quantityInput} />

                                <IconButton style={{ backgroundColor: "var(--secondary-color)", color: 'black', position: 'absolute', margin: "3px 0px" }} onClick={(e) => this.removeQuantityHandler(e)}>
                                    <AiOutlineMinus size={20} />
                                </IconButton>

                            </div>
                            <div className={classes.content}>

                                <PrimaryButton styles={{ borderRadius: '35px', backgroundColor: "var(--primary-color)", color: 'white', fontSize: "15px", margin: "0 8%" }} onClick={() => addProduct(product)}>Add to Cart</PrimaryButton>

                                <SecondaryButton styles={{ borderRadius: '35px', backgroundColor: "var(--secondary-color)", color: 'black', fontSize: "15px", margin: "0 8%" }}>Pick up from Store</SecondaryButton>

                            </div>
                        </div>
                    </div>

                )}
            </AppContext.Consumer>
        )
    }
}

export default ProductDetails;