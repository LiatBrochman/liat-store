import React, {useState} from 'react';
import {signOut} from "../redux/userSlice";
import {useDispatch} from "react-redux";
import {MapPinIcon, ShoppingCartIcon, UserIcon} from "@heroicons/react/24/outline";
import {MagnifyingGlassIcon,} from "@heroicons/react/20/solid";
import logo from '../img/sotre-liat-logo.png';

function Navbar() {
    const dispatch = useDispatch()
    const [text, setText] = useState('');

    function handleSignOut() {
        dispatch(signOut())
        // dispatch(clearTodos())
    }


    function handleSearchProduct() {
        function searchProduct() {
            return undefined;
        }

        dispatch(searchProduct(text))
        setText('')
    }

    function handleChangeText(e) {
        setText(e.target.value)
    }

    return (
        <div className="flex row  justify-around items-center pr-3 pt-5 pb-3">
            <img src={logo} className="h-24" alt="logo"/>
            <UserIcon className="h-7 w-7 text-stone-600" onClick={handleSignOut}/>
            <MapPinIcon className="h-7 w-7 text-stone-600"/>
            <p className="text-center">ISRAEL</p>
            <input type='text' value={text} onChange={handleChangeText}
                   className="bg-stone-50 border-solid border-2 border-stone-200"/>
            <MagnifyingGlassIcon onClick={handleSearchProduct} className=" h-7 w-7 text-stone-600"/>

            <p className="text-center">history orders</p>
            {/*<Basket {...products} />*/}
            <ShoppingCartIcon className="h-7 w-7 text-stone-600"/>
        </div>
    );
}

export default Navbar;