import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: '',
    amount: 0,
    earning: 0,
    repayment: '',
}

const store = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        currentStatus: (state, action) => {
            state.status = action.payload
        },

        earnings: (state, action) => {
            state.earning = action.payload
        },

        request: (state, action) => {
            state.amount = action.payload;
        },

        repaymentPlan: (state, action) => {
            state.repayment = action.payload;
        }
    
    }
});

export const {
    currentStatus,
    earnings,
    request,
    repaymentPlan
} = store.actions

export const selectRequestedAmount = (state) => state.payment.amount;

export const selectRepaymentPlan = (state) => state.payment.repayment;

export const selectStatus = (state) => state.payment.status;

export const selectEarning = (state) => state.payment.earning;

export default store.reducer