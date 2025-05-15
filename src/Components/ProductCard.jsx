import React from 'react'
import { Link } from 'react-router-dom'


const ProductCard = ({ product, productIsInCart, addProduct, addProductFav, favProductIsInCart }) => {

    return (
        <>
            <div className="col-md-3 col-6 designcard">
                {favProductIsInCart ?
                    // agar favproductincart true hai tu heart wala icon show ho ga jis ko click karne par addProductFav(product)
                    // function call ho ga jo product ko favourite kare ga.
                    <i className='fas fa-heart' onClick={() => addProductFav(product)}></i> :
                    <i onClick={() => addProductFav(product)}></i>
                }
                <div className="card h-100 text-center p-md-4">
                    <Link to={`/products/${product.id}`}> 
                    {/* Yeh line React JS mein <Link> component ka istemal karti hai jo kisi product ki detail page par navigate karne ke liye URL banata hai. product.id ka istemal karke specific product ka ID link mein shamil kiya gaya hai. */}
                        <img src={product.image} className="card-img-top" height='200px' alt={product.title} />
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <p className="card-text fw-bold">{product.title.substring(0, 12)}</p>
                                {/* Yeh product.title se pehle 12 characters ko nikaalta hai. substring(0, 12) ka matlab hai ke string ka pehla 12 characters dikhana */}
                                <p className="card-text fw-bold">${product.price}</p>
                            </div>
                            {productIsInCart ? //Ye ek conditional statement hai jo check kar raha hai ke productIsInCart (kya product cart mein hai) ka value true hai ya false.
                                <Link className="bordered-primary-btn added me-0" to='/cart'>Go to Cart</Link> :
                                <Link onClick={() => addProduct(product)} className="primary-btn">Buy Now</Link>
                                // jahan agar productIsInCart true hai toh "Go to Cart" ka link dikhaya jata hai, warna "Buy Now" ka link dikhaya jata hai.
                            }
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard