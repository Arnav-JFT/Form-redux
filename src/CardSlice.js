import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: [],
    updateIndex:0,
    updateFlag: false
}

const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    saveCard : (state , action)=>{
        state.list.push(action.payload)
    },
    updateCard : (state , action)=>{
        state.updateIndex = action.payload
        state.updateFlag = true
    },
    editCardData: (state ,action)=>{
        state.list[state.updateIndex] = action.payload
        state.updateFlag = false
    }

  }
});

export const { saveCard,updateCard ,editCardData} = CardSlice.actions

export const selectCard = state => state.card.list

export default CardSlice.reducer