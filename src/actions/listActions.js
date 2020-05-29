export const addList = (title) => ({
    type: "LIST_ADD",
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

export const deleteList = (listId) => ({
    type: 'LIST_DELETE',
    payload: { listId }
});

export const editList = (listId, listTitle) => ({
    type: 'LIST_EDIT',
    payload: { listId, listTitle }
});