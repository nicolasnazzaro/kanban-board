export const addCard = (text, listId) => ({
    type: "ADD_CARD",
    payload: {text, listId}
});