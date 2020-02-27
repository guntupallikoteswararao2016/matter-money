const avator = (state ={isloggedin:true}, action) => {
    switch (action.type) {
        case 'SHOW_AVATOR':
            return [
                ...state,
                {
                    text: action.text
                }
            ];
        case 'HIDE_AVATOR':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            );
        default:
            return state
    }
};

export default avator