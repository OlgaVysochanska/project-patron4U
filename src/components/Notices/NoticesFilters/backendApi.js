const sendRequestToBackend = requestParams => {
  // Імітація бекенд-запиту з setTimeout
  setTimeout(() => {
    console.log('Sending request:', requestParams);
    // + фактичну логіку запитів до бекенду тут
  }, 1000); // Затримка в 1 секунду для демонстрації
};

export default sendRequestToBackend;
