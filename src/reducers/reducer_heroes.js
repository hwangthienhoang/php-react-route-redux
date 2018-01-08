import * as types from '../actions/types-action'

const initialState = {
    heroes: undefined,
}

export default (state = initialState,action) => {
    switch (action.type){
        case types.GET_HEROES:
            return Object.assign({},state,{heroes:action.heroes})
    }
    return [
        {id: '1', name: 'Vayne', class: 'AD'},
        {id: '2', name: 'Riven', class: 'TOP'},
        {id: '3', name: 'Ryze', class: 'MID'},
        {id: '4', name: 'Lee sin', class: 'Jungle'},
        {id: '5', name: 'Leona', class: 'Support'}
    ]
}