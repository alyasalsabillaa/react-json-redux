import { typographyClasses } from "@mui/material";

const initialState = { 
    pegawai: [], 
    pegawai: {}, 
    loading: false 
 } 

 const usersReducers = (state = initialState, action) => { 
    switch (action.type) { 
        case typographyClasses.GET_USERS: 
        return { 
            ...state, 
            users: action.payload, 
            loading: false,     
        }
        default : 
            return state; 
    }
}; 

export default usersReducers; 