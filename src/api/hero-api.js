import axios from 'axios'
import store from '../store'
import {getHeroes} from '../actions/heroes-action'

export const getAll = ()=>{
    return axios.get('code/api.php')
        .then(res => {
            store.dispatch(getHeroes(res.data))
            return res
        })
}