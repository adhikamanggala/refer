import { SELECT_ITEM } from "../actions/type";

const INITIAL_STATE = { id: 0, nama: '', harga: 0, img: '', description: '', merk: '' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECT_ITEM :
            return action.payload;
        default :
            return state;

    }
}