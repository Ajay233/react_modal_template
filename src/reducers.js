import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { modalReducer } from './modal/reducer'

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "RESET_APP": return state = undefined;
    default: return allReducers(state, action);
  }
}

export const allReducers = combineReducers({
  modalState: modalReducer,
  form: formReducer
})
