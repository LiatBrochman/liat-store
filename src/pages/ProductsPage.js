import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllShelf, getBasket} from "../redux/productsSlice";
import Product from "../components/Product";
import Navbar from "../components/Navbar";


function TodoPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)


    useEffect(() => {
        dispatch(getAllShelf())
        console.log("Shelf products ", products)
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBasket())
        console.log("Basket products ", products)
    }, [dispatch]);


    return (
        <div>
            <Navbar/>

            <div>

                <div className=" flex row justify-center flex-wrap ml-auto">
                    {Array.isArray(products) && products.map(shelfProduct => {
                            return <Product key={shelfProduct._id} {...shelfProduct}/>

                        }
                    )}
                </div>
            </div>
        </div>


    );

}

export default TodoPage;
