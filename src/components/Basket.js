import React from 'react';
import Product from "./Product";
import {useDispatch} from "react-redux";

function Basket(products) {


    return (
        <div className=" w-11/12 ml-2 mb-2 p-1 border border-blue-950">
            <h2 className="text-center font-bold">Cart</h2>
            <div className=" flex row justify-end flex-wrap ml-auto">
                {Array.isArray(products) && products.map(product => {
                        return <Product key={product._id} {...product}/>

                    }
                )}
            </div>
        </div>
    );
}

export default Basket;