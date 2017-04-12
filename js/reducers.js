const DEFAULT_STATE = {
  searchTerm: ''
}

const rootReducer = (state, action) => {
  // if (!state) {
  //   state = DEFAULT_STATE
  // }
  state = state || DEFAULT_STATE
  switch (action.type) {
    default: 
    return state
  }  
}
