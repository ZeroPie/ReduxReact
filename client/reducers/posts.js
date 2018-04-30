function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('Incrementing Likes => Dopamin Shot!');
      const i = action.index
      return [  // spread operator copies löike object assign or array copy
        ...state.slice(0,i), //everything before the one we are updating
        {...state[i], likes: state[i].likes +1},
        ...state.slice(i + 1), //stuff after the one we are updating
      ]
      default:
        return state;
  }
  return state;
}

export default posts;
