export const addCard = (text, listId) => ({
    type: "ADD_CARD",
    payload: {text, listId}
});

export const sortCard = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd
) => ({
    type: 'CARD_DRAGGED',
    payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart
    }
});