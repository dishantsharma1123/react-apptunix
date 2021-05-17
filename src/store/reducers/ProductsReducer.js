
const initState = {
    products: [
        {
            id: 1, name: 'Ravishing 7 Red Rose in Black Sleeve', image: 'product-one.jpg', price: 600, discount: 8, discountPrice: 600 - (8 / 100) * 600, quantity: 1, desc: 'Rose hips contain more Vitamin C than oranges. The farther north of the equator a rose hip is grown, the richer it is said to be in Vitamin C. Rugosa rose hips are said to be the best source of Vitamin C.'
        },
        {
            id: 2, name: 'Mixed Roses Bunch', image: 'product-two.jpg', price: 549, discount: 8, discountPrice: 549 - (8 / 100) * 549, quantity: 1, desc: 'The world\'s most expensive rose is a 2006 variety by famed rose breeder David Austin that was christened Juliet.Breeding the rose took a total 15 years and cost 5 million dollars!'
        },
        {
            id: 3, name: 'Sweet Pink Roses Bunch', image: 'product-three.jpg', price: 949, discount: 4, discountPrice: 949 - (4 / 100) * 949, quantity: 1, desc: '16 Baby Pink Roses Wrapped in Jute Tied with White Raffia'
        },
        {
            id: 4, name: 'Mixed Brilliance Gerbera Blossoms', image: 'product-four.jpg', price: 599, discount: 8, discountPrice: 599 - (8 / 100) * 599, quantity: 1, desc: '8 Mixed Colour Gerberas. Seasonal Green Fillers. Wrapped up with White Non Woven Paper. Tied with a Mixed colour Ribbon.'
        },
        {
            id: 5, name: 'Romantic - 20 Red Roses Bouquet', image: 'product-five.jpg', price: 1049, discount: 19, discountPrice: 1049 - (19 / 100) * 1049, quantity: 1, desc: 'Red Roses are perfect expressions of love and romance since ancient times!'
        },
        {
            id: 6, name: '10 Red Roses Exotic Bouquet', image: 'product-six.jpg', price: 499, discount: 10, discountPrice: 499 - (10 / 100) * 499, quantity: 1, desc: 'The famous Cleopatra of Egypt was believed to have covered the floor of her palace room with roses before Mark Antony visited her.The world\'s oldest living rose is believed to be 1, 000 years old.It grows on the wall of the Cathedral of Hildesheim in Germany and its presence is documented since A.D. 815!'
        },
        {
            id: 7, name: 'Ten Purple Orchids Bouquet', image: 'product-seven.jpg', price: 1249, discount: 7, discountPrice: 1249 - (7 / 100) * 1249, quantity: 1, desc: 'Ten Purple Orchids. Seasonal Fillers. Pink Non Woven Paper. White Non Woven Paper. Tied with Pink Ribbon'
        },
        {
            id: 8, name: 'Vivid - 10 Red Roses Bouquet', image: 'product-eight.jpg', price: 600, discount: 8, discountPrice: 600 - (8 / 100) * 600, quantity: 1, desc: '10 Red Roses. Red Packing Paper. Red Ribbon. Green Fillers. Did you know a rose bush can grow quite tall? The tallest ever recorded rose bush stands at over 23 feet (7 meters) tall!'
        }
    ],

    product: {}
}

function ProductsReducer(state = initState, action) {
    switch (action.type) {
        case 'PRODUCT':
            return {
                ...state,
                product: state.products.find(product => product.id === parseInt(action.id))
            }
        default:
            return state;
    }
}

export default ProductsReducer
