import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
// useParams() hook React Router mein istemal hota hai, jisse hum URL mein se dynamic parameters ko access kar sakte hain.
// useParam() ka istemal karke API calls bhi kar sakte hain
import { addCart } from '../redux/action' 
import { Link } from 'react-router-dom'

const Product = () => {
    const { id } = useParams()//{ id }: URL se jo "id" parameter hai, usay nikal raha hai.
     //URL ke parameters ko access karne ka tareeqa hai. Is se humein wo ID mil rahi hai jo URL mein di gayi hai. 
    const cartitems = useSelector((state) => state.handleCart)
    //UseSelector Redux store se state ko access karne ke liye use hota hai.
    const [product, setProduct] = useState({})
    const dispatch = useDispatch() // useDispatch() ko call karke ek dispatch function lete hain, jo actions ko Redux store tak bhejta hai
    const addProduct = (Product) => dispatch(addCart(Product)) 
    // jo bhi product pass kiya jata hai, usko Redux store mein addCart action ke zariye cart mein add kar diya jata hai.
    useEffect(() => {
        const getProduct = async () => { // async() functions promises ko handle karte hain.
            const res = await fetch(`https://fakestoreapi.com/products/${id}`) // await() ka use kiya jata hai async operations ka result lene ke liye, bina code ko block kiye
            //Jaise agar kisi specific user ki details laani ho, toh id ko fetch request mein daal ke data fetch kar sakte hain
            setProduct(await res.json())
            //  API ya fetch se jo response mila hai usse JSON format mein convert karke setProduct function ke zariye state mein save kar rahe hain.
        }
        getProduct(); // product ya data ko retrieve karnay ke liye use hota hai.
    }, [id]) 
    const ProductInCart = cartitems.some(item => item.id === product.id) // Conditional Rendering
    // cartitems array mein koi item hai jo product.id ke barabar ho, agar hai toh ProductInCart true hoga, warna false.

    return (
        <>
            <div className="container py-5 singleproduct">
                <div className="row py-4">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <img src={product.image} alt={product.title} className='img-fluid' />
                    </div>
                    <div className="col-md-6">
                        <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                        <h1 className='display-6'>{product.title}</h1>
                        <p className='lead'>
                            Rating {product.rating && product.rating.rate} 
{/* product.rating maujood hai (truthy value), toh product.rating.rate ko dikhaya jayega. Agar product.rating nahi hai (falsy value), toh kuch nahi dikhai dega */}
                            <i className='fa fa-star ms-2'></i>
                        </p>
                        <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
{/* ${product.price} ka istemal dynamic data ko display karne kay liye istemal hota hai */}
                        <p className="lead">{product.description}</p>
                        <div className='d-flex justify-content-start'>
                            {ProductInCart ? (
                                <Link className="bordered-primary-btn w-25 mx-0" to="/cart">Go to Cart</Link>
                            ) : (
                                <Link className="bordered-primary-btn w-25 mx-0" onClick={() => addProduct(product)}>Add to Cart</Link>
                            )}

                    {/* Yeh code ReactJS mein conditional rendering ka istemal karta hai. Jab ProductInCart true hota hai, toh "Go to Cart" ka link dikhai deta hai, jo user ko cart page par le jata hai. Agar ProductInCart false hai, toh "Add to Cart" ka link dikhai deta hai, jo addProduct(product) function ko call karta hai aur product ko cart mein daal deta hai. Yeh approach user ko cart ki current state ke mutabiq alag-alag actions lene ki ijaazat deta hai. */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product