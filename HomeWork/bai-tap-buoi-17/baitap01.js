function createSlug(text) {
    let slug = text.toLowerCase();
    slug = slug.replace(/\s+/g, "-");
    slug = slug.replace(/[^a-z0-9\-]/g, "");
    return slug;
}

function generateOrderId(productName, quantity) {
    const prefix = productName.slice(0, 3).toUpperCase();
    const len = productName.length;
    return `ORD-${prefix}-${quantity}-${len}`;
}

function formatPrice(price, currency = "VND") {
    if (currency === "VND") {
        return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND"
        }).format(price);
    } else if (currency === "USD") {
        return new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(price);
    }
}

function buildProductUrl(baseUrl, product) {
    const slug = createSlug(product.name);
    return `${baseUrl}/${product.category}/${slug}?id=${product.id}`;
}