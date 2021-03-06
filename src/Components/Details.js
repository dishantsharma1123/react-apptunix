import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import formatAmount from 'indian-currency-formatter'
import fmt from 'indian-number-format'

const Details = () => {
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()

    const { product } = useSelector(state => state.ProductsReducer)

    useEffect(() => {
        dispatch({ type: 'PRODUCT', id })
    }, [id])

    return (
        <div className='container mt-80'>
            <div className="detail-row">
                <div className="col-6">
                    <div className="details__image">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product.name}
                    </div>
                    <div className="details__prices">
                        <span className="details__actual">
                            ₹ {fmt.format(product.price)}
                        </span>
                        <span className="details__discount">
                            ₹ {formatAmount(Math.round(product.discountPrice))}
                        </span>
                    </div>
                    <div className="">
                        <div className="">
                            {/* <span className="dec" onClick={decQuantity} > <BsDash /></span>
                            <span className="quantity">{quantity}</span>
                            <span className="inc" onClick={() => setQuantity(quantity + 1)}><BsPlus /></span> */}
                            <button className="btn-default add-to-cart" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })}>add to cart</button>
                            <h5 className='caution'>(click on the cart icon on the topmost right corner to edit the number of products.)</h5>
                        </div>
                    </div>
                    <div className="details__p">
                        <h4>Product Description</h4>
                        {product.desc}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
