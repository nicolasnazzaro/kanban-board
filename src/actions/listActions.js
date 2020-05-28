export const addList = (title) => ({
    type: "ADD_LIST",
    payload: title
});

export const sortList = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd
) => ({
    type: 'LIST_DRAGGED',
    payload: {
        droppableIdEnd,
        droppableIdStart,
        droppableIndexEnd,
        droppableIndexStart
    }
});