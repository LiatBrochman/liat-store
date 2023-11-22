import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const getAllShelf = createAsyncThunk('product/get-all-shelf', async () => {
        const response = await fetch(`http://localhost:5000/product/get-all-shelf`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })

        return (await response.json())
        // return data
    }
)

export const getBasket = createAsyncThunk('product/get-basket', async () => {
        const response = await fetch(`http://localhost:5000/product/get-basket`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })

        return (await response.json())
        // return data
    }
)

export const addToBasket = createAsyncThunk('product/add-to-basket', async ({name, quantity}, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:5000/product/add-to-basket`, {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, quantity})
            })
            return (await response.json())
        } catch (err) {
            return rejectWithValue(err.message)

        }
    },

    //** pending code ** //
    // {
    //     getPendingMeta: ({arg}) => ({text: arg}),
    // }

    // *** code for local data *** //

    //     return data.map((product) =>
    //         product._id === _id ? {...product, quantity: product.quantity + quantity} : product
    //     );
    //
    // }

)


export const removeFromBasket = createAsyncThunk('product/remove-from-basket', async (name, quantity, {rejectWithValue}) => {
        try {
            const response = await fetch(`http://localhost:5000/product/remove-from-basket`, {
                method: "DELETE",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({name, quantity})
            })
            return (await response.json())
        } catch (err) {
            return rejectWithValue(err.message)

        }
    },

    //** pending code ** //
    // {
    //     getPendingMeta: ({arg}) => ({text: arg}),
    // }

    // *** code for local data *** //
    // Simulate removing from the basket by filtering out the product with the specified _id
    //     return data.filter((product) => product._id !== _id);
    //
    //
    // }
// )


// export const editBasket = createAsyncThunk('product/edit-product', async (updatedProduct, {rejectWithValue}) => {
//             try {
//                 const response = await fetch(`http://localhost:5000/product/edit-product`, {
//                     method: "PUT",
//                     credentials: "include",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify(product)
//                 })
//                 return (await response.json())
//             } catch (err) {
//                 return rejectWithValue(err.message)
//
//             }
//         },

    //** pending code ** //
    // {
    //     getPendingMeta: ({arg}) => ({text: arg}),
    // }

    // *** code for local data *** //
    //     return data.map((product) =>
    //         product._id === updatedProduct._id ? updatedProduct : product
    //     );
    //
    // }
)


export const productsSlice = createSlice({
    name: 'basket',
    initialState: {},
    reducers: {},
    extraReducers: {

        [getAllShelf.fulfilled]: (state, action) => {
            return action.payload
        },
        [getAllShelf.rejected]: (state, action) => {
            console.log("error", action.payload)
        },


        [getBasket.fulfilled]: (state, action) => {
            return action.payload
        },
        [getBasket.rejected]: (state, action) => {
            console.log("error", action.payload)
        },


        [addToBasket.fulfilled]: (state, action) => {
            return state.push(action.payload)

            // *** code for local data *** //
            // return action.payload
        },
        [addToBasket.rejected]: (state, action) => {
            console.log("error", action.payload)
        },


        [removeFromBasket.fulfilled]: (state, action) => {
            return state.filter((product) => product._id !== action.payload._id)

            // *** code for local data *** //
            // return action.payload
        },
        [removeFromBasket.rejected]: (state, action) => {
            console.log("error", action.payload)
        },


        // [editBasket.fulfilled]: (state, action) => {
        //     const product = state.indexOf((product) => product.id === action.payload.id)
        //     return state[product] = action.payload
        //
        //     // *** code for local data *** //
        //     // return action.payload
        // },
        // [editBasket.rejected]: (state, action) => {
        //     console.log("error", action.payload)
        // },
    }
})


export default productsSlice.reducer