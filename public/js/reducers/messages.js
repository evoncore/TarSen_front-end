
function messages(state=[], action) {
  switch(action.type) {

    case 'FETCH_MESSAGES': {
      return JSON.parse(action.payload);
      break;
    }

    case 'ADD_MESSAGE': {
      return [...state, {id: action.id, userName: action.userName, text: action.text}];
      break;
    }

    case 'REMOVE_MESSAGE': {
      var arr = state.filter(el => {
        if (action.id != el.id) {
          return el;
        }
      });

      return state = arr;
      break;
    }

    default: {
      return state;
    }
  }
}

export default messages;