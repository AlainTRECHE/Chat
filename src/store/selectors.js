export const getHighestId = (state) => {
  const ids = state.messages.map((m) => m.id);

  return Math.max(...ids);
};
