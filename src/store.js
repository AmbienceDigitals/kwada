import { configureStore } from '@reduxjs/toolkit';
import paymentReducer from './feature/payment'

export const store = configureStore({
    reducer: {
        payment: paymentReducer,
    },
});