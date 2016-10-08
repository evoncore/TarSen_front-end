import axios from 'axios';
import config from '../config';

// GET ALL
export function fetchMessages() {
  var request = axios.post(config.server + '/api/messages');

  return (dispatch) => {
    request
      .then(({data}) => {
        dispatch({ type: 'FETCH_MESSAGES', payload: data });
      })
      .catch(function(error) {
        console.log('SERVER_FETCH_MESSAGES', error);
      });
  };
}

// ADD
export function addMessage(message) {
  var payload = {
    id: message.id,
    userName: message.userName,
    text: message.text,
  };

  var request = axios.post(config.server + '/api/messages/add', payload);

  return (dispatch) => {
    request
      .then(() => {
        dispatch({ type: 'ADD_MESSAGE', payload });
      })
      .catch(function(error) {
        console.log('SERVER_ADD_MESSAGE', error);
      });
  }
}

// REMOVE
export function removeMessage(id) {
  var payload = { id: id };
  var request = axios.post(config.server + '/api/messages/' + payload.id + '/remove');

  return (dispatch) => {
    request
      .then(() => {
        dispatch({ type: 'REMOVE_MESSAGE', payload });
      })
      .catch(function(error) {
        console.log('SERVER_REMOVE_MESSAGE', error);
      });
  };
}