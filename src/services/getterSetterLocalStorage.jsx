export const getChatMessagesLocalStorage = () => {
  return JSON.parse(localStorage.getItem('chat_messages'));
}

export const setChatMessagesLocalStorage = (messages) => {
  return localStorage.setItem('chat_messages', JSON.stringify(messages));
}

export const getCSVMessagesLocalStorage = () => {
  return JSON.parse(localStorage.getItem('csv-message'));
}

export const setCSVMessagesLocalStorage = (messages) => {
  return localStorage.setItem('csv-message', JSON.stringify(messages));
}

export const getUserDataLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user-data'));
}

export const setUserDataLocalStorage = (messages) => {
  return localStorage.setItem('user-data', JSON.stringify(messages));
}