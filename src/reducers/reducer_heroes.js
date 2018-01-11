import * as types from '../actions/types-action'

const initialState = {
    heroes: [],
}

export default (state = initialState,action) => {
    switch (action.type){
        case types.GET_HEROES:
            return Object.assign({},state,{heroes:action.heroes})
    }
    return state
}