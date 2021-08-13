export const getQuote = () =>
  fetch(process.env.REACT_APP_API).then((response) => response.json());


  //process.env.REACT_APP_API