export default function formatPrice(price) {
    let nicePrice = "$";
    if (price.includes(".")) {
        nicePrice += price + '0';
    }
    else {
        nicePrice += price + '.00';
    }
    return nicePrice;
}

