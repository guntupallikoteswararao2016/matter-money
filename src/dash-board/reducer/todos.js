const profile = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROFILE':
            return [
                ...state,
                {
                    text: action.text
                }
            ];
        default:
            return state
    }
};

export default profile