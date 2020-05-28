import { v4 as uuid } from 'uuid';

const initialState = [
    {
        title: "To do",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text: "Code react applications"
            }
        ]
    },
    {
        title: "In progress",
        id: uuid(),
        cards: []
    },
    {
        title: "Done",
        id: uuid(),
        cards: []
    }
]

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LIST': {
            const newList = {
                id: uuid(),
                title: action.payload,
                cards: []
            }
            return [...state, newList];
        }
        case 'ADD_CARD': {
            const newCard = {
                id: uuid(),
                text: action.payload.text
            }
            const newState = state.map(list => {
                if (list.id === action.payload.listId) {
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                } else {
                    return list;
                }
            });
            return newState;
        }
        case 'LIST_DRAGGED': {
            const {
                droppableIndexEnd,
                droppableIndexStart,
            } = action.payload;
            const newState = [...state];
            
            const list = newState.splice(droppableIndexStart, 1);
            newState.splice(droppableIndexEnd, 0, ...list);
            
            return newState;
        }
        case 'CARD_DRAGGED': {
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
            } = action.payload;
            const newState = [...state];

            if (droppableIdStart === droppableIdEnd) {
                const list = state.find(list => list.id === droppableIdStart);
                const card = list.cards.splice(droppableIndexStart, 1);
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            if (droppableIdStart !== droppableIdEnd) {
                const startList = state.find(list => list.id === droppableIdStart);
                const endList = state.find(list => list.id === droppableIdEnd);

                const card = startList.cards.splice(droppableIndexStart, 1);
                endList.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        }
        default: 
            return state;
    }
}

export default boardReducer;