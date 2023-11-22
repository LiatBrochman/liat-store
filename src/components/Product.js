import React from 'react';
import {useDispatch} from "react-redux";
import {MinusCircleIcon, PlusCircleIcon} from '@heroicons/react/24/outline'
import {addToBasket} from "../redux/productsSlice";

export default function Product(shelfProduct) {
    const dispatch = useDispatch()
// export interface Product {
//     _id?: string
//     name: string
//     description?: string
//     picture?: string
//     category: string
//     price: number
//     quantity: number
//     state: ["shelf", "basket", "order"],
//         customer?: string
//     date?: Date
//
// }


    function handleAddToBasket() {
        dispatch(addToBasket({name: shelfProduct.name, quantity: shelfProduct.quantity}))
    }


    return (
        <div className="w-1/5  mr-1 mb-2 p-1 border-y-2 border-x rounded-lg border-yellow-600">
            <h2 className="text-center font-medium text-yellow-600">{shelfProduct.name}</h2>
            <p className="text-center text-xs text-yellow-700 mr-1 ml-2">{shelfProduct.description}</p>
            <img src={shelfProduct?.picture} alt={shelfProduct?.name} className="h-32 mt-2 m-auto rounded-lg"/>
            <p className="text-center mt-2 text-xs font-medium text-yellow-600">{shelfProduct.price}$</p>
            <div className="flex row justify-center mt-2 mb-2 mr-14 ml-14">
                <MinusCircleIcon onClick={handleAddToBasket} className="h-4 w-4 text-yellow-700 mr-1"/>
                <p className="text-center text-xs font-medium text-yellow-700">{shelfProduct.quantity}</p>
                <PlusCircleIcon onClick={handleAddToBasket} className="h-4 w-4 text-yellow-700 ml-1"/>
            </div>
        </div>
    );
}

