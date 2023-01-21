import { useLoaderData } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const ProductPage = () => {

    const product = useLoaderData();

    return (
        <ProductDetails product={product} />
    )
}

export default ProductPage;