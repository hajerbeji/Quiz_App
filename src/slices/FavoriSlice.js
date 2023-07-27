import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favoris:[{
    
        question: "Which country is known as the 'Land of the Rising Sun'?",
        options: {
            option1:{answer:"China",iscorrect:false},
            option2:{answer:"Japan",iscorrect:true},
            option3:{answer:"South Corea",iscorrect:false},
        }
    
  }]
}

export const FavoriSlice = createSlice({
  name: 'favorislice',
  initialState,
  reducers: {
    addfavori:(state,action)=>{
        state.favoris=[...state.favoris,action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addfavori } = FavoriSlice.actions

export default FavoriSlice.reducer