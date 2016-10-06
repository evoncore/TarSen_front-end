import axios from 'axios';

export function fetchMessages() {
  var request = axios.post('/api/messages');

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: 'FETCH_MESSAGES', payload: data });
    });
  }
}

export function addMessage(id, userName, text) {
  var addMessage = {
    id: id,
    userName: userName,
    text: text
  }

  axios.post('/api/messages/add', addMessage);

  return {
    type: 'ADD_MESSAGE',
    id: id,
    userName,
    text
  }
}

export function removeMessage(id) {
  axios.post('/api/messages/' + id + '/remove');

  return {
    type: 'REMOVE_MESSAGE',
    id
  }
}