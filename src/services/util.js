export async function loader({request, params}) {
    const response = await fetch(`https://dummyjson.com/products/${params.productId}`);

    if (!response.ok) {
        throw new Response(JSON.stringify({ message: 'Could not fetch product data' }), { status: 500 });
    } else {
        const resData = await response.json();
        return resData;
    }
}