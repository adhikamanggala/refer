import { SELECT_ITEM } from "../actions/type";

const INITIAL_STATE = { id: 0, nama: '', kota: '', img_1: '', desc: '', img_2: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            return action.payload;
        default:
            return state;

    }
}