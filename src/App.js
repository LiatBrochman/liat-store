import './App.css';
import SignInPage from "./pages/SignInPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {init} from "./redux/userSlice";
import ProductsPage from "./pages/ProductsPage";

function App() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(init())
            .then(() => setIsLoading(false))
            .catch(error => {
                console.error(error);
                setIsLoading(false);
            });
    }, [dispatch]);


    return (
        <div>
            {user.isLoggedIn ? (
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ProductsPage/>
                )
            ) : (
                <SignInPage/>
            )}
        </div>
    );
}

export default App;
