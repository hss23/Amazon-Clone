/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Product from './Product'
import "./Home.css"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="carousal">
                    <img className="adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg" />
                    {/* <img className="adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/May21/Covid_Hero/Coid_Pantry_MH__1500x600._CB669212531_.jpg" />
                    <img className="adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/HPC/GW/Grocery_1500x600._CB669573043_.jpg" />
                    <img className="adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC_21/HeroPC_1500x600_1._CB669048608_.jpg" /> */}
                </div>
                <div className="home__row">
                    <Product id="1" title="The Lean Startup: How cjlakfjlkajwlkjra lkjrralkwjlkerjalkejw" price={19.4} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
                    <Product id="2" title="SamSUng M31S" price={60} image="https://images-eu.ssl-images-amazon.com/images/I/41%2BxWzgV8jL._SX300_SY300_QL70_FMwebp_.jpg" rating={5} />
                    <Product id="3" title="Redmi Note 10" price={54} image="https://images-eu.ssl-images-amazon.com/images/I/41atHSWSGaL._SX300_SY300_QL70_FMwebp_.jpg" rating={3} />
                </div>
                <div className="home__row">
                    <Product id="4" title="The Lean Startup: How cjlakfjlkajwlkjra lkjrralkwjlkerjalkejw" price={19.4} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
                    <Product id="5" title="The Lean Startup: How cjlakfjlkajwlkjra lkjrralkwjlkerjalkejw" price={19.4} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
                </div>
                <div className="home__row">
                    <Product id="6" title="The Lean Startup: How cjlakfjlkajwlkjra lkjrralkwjlkerjalkejw" price={19.4} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home
