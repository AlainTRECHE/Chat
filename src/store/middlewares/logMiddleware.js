const logMiddleware = (store) => (next) => (action) => {
  console.log("une action passe dans logMiddleware : ", action);

  next(action);
};

export default logMiddleware;
