import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cartItems',
    initialState : [],
    reducers : {
        addToCart : (state, actionByComponent) => {
            const existingProduct = state.find(item=>item.id == actionByComponent.payload.id)
            if(existingProduct){
                existingProduct.quantity++
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProduct = state.filter(item=>item.id != existingProduct.id)
                state = [...remainingProduct, existingProduct]
            }else{
                state.push({...actionByComponent.payload, quantity: 1, totalPrice : actionByComponent.payload.price})
                alert("Product added to Cart")
            }
        },
        incrementQuantity : (state, actionByCart)=>{
            const existingProduct = state.find(item=>item.id == actionByCart.payload)
            existingProduct.quantity++
            existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
            const remainingProduct = state.filter(item=>item.id != existingProduct.id)
            state = [...remainingProduct, existingProduct]

        },
        decrementQuantity : (state, actionByCart) => {
            const existingProduct = state.find(item=>item.id == actionByCart.payload)
            if(existingProduct.quantity > 1){
                existingProduct.quantity--
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price
                const remainingProduct = state.filter(item=>item.id != existingProduct.id)
                state = [...remainingProduct, existingProduct]
            }else{
                return state.filter(item=>item.id != actionByCart.payload)
            }
        },
        removeCartItem : (state, actionByCart) =>{
            return state.filter(item=>item.id != actionByCart.payload)
        },
        emptyCart : (state)=>{
            return state = []
        }
    }
})

export const {addToCart, incrementQuantity, decrementQuantity, removeCartItem, emptyCart} = cartSlice.actions
export default cartSlice.reducer