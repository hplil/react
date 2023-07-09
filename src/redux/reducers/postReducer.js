// reducer作用： 返回最新的状态
import { FETCH_POSTS, NEW_POST ,NEW_TEST} from '../actions/types';

const initState = {
    items: [],
    item: [],
    test:'1'
}

export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        case NEW_TEST:
            return {
                ...state,
                test: action.payload
            };
        default:
            return state
    }
}
