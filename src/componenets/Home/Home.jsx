/** @format */

import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import Images from "./image";
const Home = () => {
    return (
        <div className='home'>
            <img
                src='https://m.media-amazon.com/images/I/61feUOjzx6L._SX3000_.jpg'
                alt='amazon banner img'
                className='home__img'
            />
            {/* first row */}
            <div className='home_row'>
                <Product
                    image={Images.item1.image}
                    title={Images.item1.title}
                    rating={4}
                    price={Images.item1.price}
                    id={1}
                />
                <Product
                    image={Images.item2.image}
                    title={Images.item2.title}
                    rating={3}
                    price={Images.item2.price}
                    id={2}
                />
                <Product
                    image={Images.item3.image}
                    title={Images.item3.title}
                    rating={5}
                    price={Images.item3.price}
                    id={3}
                />
            </div>

            {/* second row */}
            <div className='home_row'>
                <Product
                    image={Images.item4.image}
                    title={Images.item4.title}
                    rating={3}
                    price={Images.item4.price}
                    id={4}
                />
                <Product
                    image={Images.item5.image}
                    title={Images.item5.title}
                    rating={4}
                    price={Images.item5.price}
                    id={5}
                />
                <Product
                    image={Images.item6.image}
                    title={Images.item6.title}
                    rating={4}
                    price={Images.item6.price}
                    id={6}
                />
            </div>
            {/* third row  */}
            <div className='home_row'>
                <Product
                    image={Images.item9.image}
                    title={Images.item9.title}
                    rating={5}
                    price={Images.item9.price}
                    id={9}
                />
            </div>
            {/* fourth row  */}
            <div className='home_row'>
                <Product
                    image={Images.item7.image}
                    title={Images.item7.title}
                    rating={5}
                    price={Images.item7.price}
                    id={7}
                />
                <Product
                    image={Images.item8.image}
                    title={Images.item8.title}
                    rating={4}
                    price={Images.item8.price}
                    id={8}
                />
            </div>
            {/* fifth row  */}
            <div className="'home_row'">
                <Product
                    image={Images.item10.image}
                    title={Images.item10.title}
                    rating={4}
                    price={Images.item10.price}
                    id={10}
                />
            </div>
        </div>
    );
};

export default Home;
