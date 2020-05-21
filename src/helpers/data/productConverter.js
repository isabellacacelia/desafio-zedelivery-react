const toProductComponent = ({ id, title, images, productVariants }) => {
    if (productVariants?.length > 0) {
        const variant = productVariants[0];
        const imgProduct = images?.length > 0 ? images[0]?.url : {};
        const { price } = variant;

        return {
            id,
            title,
            imgProduct,
            price: price?.toFixed(2),
        }
    }

    return {
        id,
        title,
    };
}

export { toProductComponent };