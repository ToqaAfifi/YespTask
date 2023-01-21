import React, { createContext } from "react";

const AppContext = createContext({
    isDrawerOpen: false,
    cartItems: [],
    noOfItems: 0,
    total: 0,
    toggleDrawer: (state) => { },
    addProduct: (item) => { },
    removeProduct: (id) => { },
});

export class AppContextProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
            cartItems: [],
            noOfItems: 0,
            total: 0
        };
    }

    toggleDrawer = (state) => {
        this.setState({ isDrawerOpen: state });
    };

    addProduct = (product) => {

        let items = [...this.state.cartItems];
        const itemIndex = this.state.cartItems.findIndex(i => i.id === product.id);
        let item;

        if (itemIndex !== -1) {
            item = {
                ...items[itemIndex],
                quantity: items[itemIndex].quantity + product.quantity
            }
            items[itemIndex] = item;
        }
        else {
            items.push(product);
        }

        const newTotal = items.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
        const numberOfItems = items.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

        this.setState({ cartItems: items, noOfItems: numberOfItems, total: newTotal, isDrawerOpen: true });
    };

    removeProduct = (id) => {
        
        let items = [...this.state.cartItems];
        const filteredItems = items.filter(item => item.id !== id);

        const newTotal = filteredItems.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.quantity), 0);
        const numberOfItems = filteredItems.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

        this.setState({ cartItems: filteredItems, noOfItems: numberOfItems, total: newTotal });
    };

    render() {
        return <AppContext.Provider value={{ isDrawerOpen: this.state.isDrawerOpen, cartItems: this.state.cartItems, noOfItems: this.state.noOfItems, total: this.state.total, toggleDrawer: this.toggleDrawer, addProduct: this.addProduct, removeProduct: this.removeProduct }}>{this.props.children}</AppContext.Provider>
    }
}

export default AppContext;