import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import formatAmount from 'indian-currency-formatter'
import { Link } from 'react-router-dom'

const Home = () => {
    const { products } = useSelector(state => state.ProductsReducer)
    return (
        <div className="home">
            <Header />
            <div className="container">
                <div className="product-heading">
                    <h3>Fresh Flowers Bundled into an Aesthetic Bouquet</h3><br />
                    <h4>a Perfect Fit for all Occassions</h4>
                </div>
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product-container card">
                                    <div className="product__img">
                                        <Link to={`/details/${product.id}`}>
                                            <img src={`/images/${product.image}`} alt="product" />
                                        </Link>
                                    </div>
                                    <div className="product__name">
                                        {product.name}
                                    </div>
                                    <div className="row">
                                        <div className="price-row">
                                            <div className="col-6">
                                                <div className="product__price">
                                                    <span className="actualPrice">₹ {formatAmount(product.price)}</span>
                                                    <span className="discount">{product.discount}% OFF</span>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="product__discount__price">
                                                    ₹ {formatAmount(Math.round(product.discountPrice))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Home
