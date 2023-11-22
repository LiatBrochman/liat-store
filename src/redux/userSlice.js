import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const init = createAsyncThunk('user/get-user', async () => {
        const response = await fetch(`http://localhost:5000/user/get-user`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })

        return (await response.json())
    }
)


export const signOut = createAsyncThunk('user/close-session', async () => {
        const response = await fetch(`http://localhost:5000/user/close-session`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        })

        return (await response.json())
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState: {email: '', isLoggedIn: false},
    reducers: {},
    extraReducers: {
        [init.fulfilled]: (state, action) => {
            // console.log(action.payload)
            return {email: action.payload.email, isLoggedIn: true}
        },
        [init.rejected]: (state, action) => {
            console.log("error " + action.payload)
        },
        [signOut.fulfilled]: (state, action) => {
            return {email: '', isLoggedIn: false}
        },
        [signOut.rejected]: (state, action) => {
            console.log(action.payload)
        }
    }
})

export default userSlice.reducer