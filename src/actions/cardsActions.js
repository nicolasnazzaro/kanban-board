export const addCard = (text, listId) => ({
    type: "CARD_ADD",
    payload: { 
        text, 
        listId 
    }
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

export const deleteCard = (listId, cardId) => ({
    type: 'CARD_DELETE',
    payload: {
        listId,
        cardId
    }
});

export const editCard = (listId, cardId, text) => ({
    type: 'CARD_EDIT',
    payload: {
        listId,
        cardId,
        text
    }
});