import * as types from './types-action'

export const getHeroes= (heroes)=> {
    return {
        type: types.GET_HEROES,
        heroes
    }
}