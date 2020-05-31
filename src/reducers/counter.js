
const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'COUNTER_UP': {
            return {
                ...state,
                count: state.count + 1
            }
        }

        case 'COUNTER_DOWN': {
            return {
                ...state,
                count: state.count - 1
            }
        }

        default: {
            return state
        }
    }
}