import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, addFav, removeFav } from '../redux/action';
import ProductCard from './ProductCard';

const Products = () => {
    const [data, setdata] = useState([]);
    const [productcat, setProductcat] = useState([]);
    const [productdata, setProductdata] = useState([]);
    const state = useSelector((e) => e.handleCart)

    // useSelector()  React hook ko istemal kar kay redux store say handlecart ki state
    // ko select kar kay state variable main rakh raha hai is tarah hum aonay cart ki information ko componenet main acces kar sakte hai
    const favproduct = useSelector((state) => state.favhandler || [])
    // (state) say (favhandler) ko access kar kay (favproduct) variable mein save kare aur agar (favhandler) undefined ho to khali array[] return karay. 
    const dispatch = useDispatch();// useDispatch() ko call karke ek dispatch function lete hain, jo actions ko Redux store tak bhejta hai.
    useEffect(() => {
        const getproducts = async () => { // async function ka istemal tub hota hai jub app na api say deta lena ho.
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json(); // 
           // res() //res ka matlab hai "response". Ye object hota hai jo HTTP response ko represent karta hai. Jab aap kisi server se request karte hain, to server response generate karta hai aur res ke zariye usay client ko bhejta hai.

            //Json() Method // json() ek method hai jo response ko JSON format mein convert karta hai. JSON (JavaScript Object Notation) ek lightweight data interchange format hai jo aasani se padhi ja sakti hai aur likhi ja sakti hai. Is format ko client-side JavaScript (jese ke React) mein istemal karna asaan hota hai

            //Jab aap kisi API ko data bhej rahe hote hain ya us se data le rahe hote hain, to res.json() ka istemal isliye hota hai taake aapka response format standardized ho. Iska matlab hai ke aapka data ek [uniform structure mein hoga], jise aap aasani se manipulate kar sakte hain.
            console.log(data)
            const uniqlist = [...new Set(data.map((curElem) => {
                // (SET) ke function se duplicates ko hata kar ek new array uniqlist me save karta hai
                return curElem.category;
            })), 'ALL']
            // useEffect hook kay andar aik getproducts function banaya gaya hai jo (fakestoreapi) se product fecth karta hai
            // aur un products ki categories ko nikal kar unique list banata hai, aur uss list mein 'ALL' category bhi add karta hai.
            setProductcat(uniqlist)
            if (productdata.length === 0) {
                // Yeh check karta hai ke agar productdata array khaali hai, toh setProductdata(data) ke zariye new data ko set karein.
                setProductdata(data)
            }
            setdata(data)
            // Chahe condition true ho ya na ho, setdata(data) ke zariye data ko update kar diya jata hai.
        }
        getproducts();
    }, [])// UseEffect complete ho gaya aur yeh hook sirf jab component first time load ho tab chalega.

    
    const filterProducts = (cat) => {
        // Yahaan pe filterProducts ek arrow function hai jo ek argument cat (category) leta hai.
        // Jab bhi koi user ek category select karta hai, yeh function call hota hai.
        if (cat === 'ALL') {
            return setProductdata(data)
            // Is if statement mein check kiya jaata hai agar selected category ALL ho. Agar ALL select kiya ho, toh
            // setProductdata(data) call hota hai, jo saari products ko waapis set kar deta hai bina filter ke
        }

        const updateList = data.filter((curElem) => {
            return curElem.category === cat
        })
        // Agar category ALL nahi hai, toh data.filter() use kiya jaata hai jo sirf wohi products return karega
        // jinka category ka field selected category cat ke barabar hoga. curElem har product ka ek element hai.
        setProductdata(updateList)
        // Ab jo filtered list milti hai updateList mein, usay setProductdata ke through
        // state mein update kiya jaata hai taake screen pe sirf filtered products dikhai dein.
    }

    const isProductInCart = (id) => {
        // Yeh aik arrow function hai jiska naam isProductInCart hai. Yeh function aik parameter id ko accept karta hai. Matlab, yeh function jab bhi call hoga, usay aik product ka id milega.
        if (state.length === 0) {
            // Yahan hum check kar rahay hain ke agar state array khali hai ya iski length zero hai. Agar khali hai to yeh block true ho jata hai.
            return false;
            // Agar state array khali hai, to function false return karta hai. Matlab, agar koi bhi product cart mein nahi hai, to false wapas milega.
        }
        return state.some((e) => e.id === id);
        // Yeh function check karta hai ke koi product cart mein hai ya nahi, pehle state ka size dekh kar agar state khaali ho to false return karta hai, warna har item ka ID match karta hai us ID se jo diya gaya hai.
    };



    const addProduct = (product) => {
        dispatch(addCart(product))
        // Yeh function addProduct kaam karta hai ke jab koi product pass hota hai, to Redux store mein dispatch hook ke zariye addCart action ko call karta hai. Is se product shopping cart mein add hota hai.//
        // Translation:Jab aap koi product add karna chahte hain, yeh function Redux ko bataata hai ke product cart mein add karo.
    }

    const addProductFav = (product) => {
        const isFavorite = isFavProductInCart(product.id);
        if (isFavorite) {
            dispatch(removeFav(product));
        } else {
            dispatch(addFav(product));
        }
        // Yeh function addProductFav check karta hai ke product favorite list mein hai ya nahi. Agar product favorite mein hai, to use removeFav action ke zariye favorite list se hata diya jata hai. Agar nahi hai, to addFav action ke zariye favorite list mein add kar diya jata hai.
        // Translation: Yeh function dekh raha hai ke product pehle se favorite list mein hai, agar hai to hata do, warna add kar do.
    };


    const isFavProductInCart = (id) => {
        if (favproduct.length === 0) {
            return false;
        }
        return favproduct.some((e) => e.id === id);
        // Yeh function isFavProductInCart check karta hai ke koi product, jo ID ke saath hai, favorite list mein hai ya nahi. Pehle yeh check karega ke favorite list khali to nahi hai. Agar list khali hai to false return karega, warna list ko loop karke dekhega ke product list mein hai ya nahi.
        // Translation: Yeh function dekh raha hai ke jo product aap dekh rahe hain wo favorite list mein hai ke nahi, aur accordingly true ya false return karega.
    };


    return (
        <>
            <div className="container my-5 py-5">
                <div className='row'>
                    <div className='col-md-12 mb-5'>
                        <h1 className='text-center'>Latest Products</h1>
                    </div>
                </div>
                <div className="row g-3 justify-content-center">
                    <div className='buttons d-flex justify-content-center'>
                        {
                            productcat.map((e, i) => {
                                // Ye line productcat array ke har element par loop chalati hai, jahan e current element hai aur i uski index hai.
                                return (
                                    // Ye line JSX code return karne ke liye hai jo is function ke andar hai.
                                    <>
                                        <button className="btn btn-outline-dark me-2 text-capitalize" onClick={() => filterProducts(e)} key={i}>{e}
                                        </button>
                                    </>
                                    // onClick={() => filterProducts(e)}
                                    //Jab button par click hota hai, ye filterProducts function ko call karta hai aur e (current product category) ko argument ke taur par pass karta hai.
                                    //key={i}
                                    // Ye key prop hai jo React ko batata hai ke ye button unique hai, jisse React ko re-rendering mein madad milti hai
                                )
                            })
                        }
                    </div>
                    {
                        productdata.map((product) => { //Yeh line productdata array ko map karti hai, jisme har product ke liye function call hota hai
                            const { id } = product; // Is line mein, product object se id nikaali ja rahi hai. Ye shorthand syntax hai, jo product.id ko directly variable id mein assign karta hai.
                            const productIsInCart = isProductInCart(id); // Yahaan, isProductInCart function ko call kiya ja raha hai, jisme id pass kiya gaya hai. Ye function check karta hai ke kya product cart mein hai ya nahi, aur uska result productIsInCart variable mein store hota hai.
                            const favProductIsInCart = isFavProductInCart(id); // Is line mein, isFavProductInCart function ko call kiya gaya hai, jo check karta hai ke kya favorite product cart mein hai. Result favProductIsInCart variable mein store hota hai.
                            return (
                                <>
                                    <ProductCard key={product.id} favProductIsInCart={favProductIsInCart} addProductFav={addProductFav} addProduct={addProduct} product={product} productIsInCart={productIsInCart} />
                                </> // Ye <ProductCard> component ko render kar raha hai, jismein key, favProductIsInCart, addProductFav, addProduct, product, aur productIsInCart props pass kiye gaye hain, jo har product ka data aur functions ko manage karne ke liye istemal hotay hain
                            )
// [Key] key ek special unique Identifier hoti hai jo React ko batati hai ke har element list mein kaise identify karna hai.Aur batati hai kis item main change huva hai Iski wajah se React efficiently render kar sakta hai
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Products