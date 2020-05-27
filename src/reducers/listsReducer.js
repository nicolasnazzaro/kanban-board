import { v4 as uuid } from 'uuid';

const initialState = [
    {
        title: "To do",
        id: uuid(),
        cards: [
            {
                id: uuid(),
                text: "Do the laundry"
            },
            {
                id: uuid(),
                text: "Code react applications"
            },
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

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LIST':
            const newList = {
                id: uuid(),
                title: action.payload,
                cards: []
            }
            return [...state, newList];
        case 'ADD_CARD':
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
        default: 
            return state;
    }
}

export default listsReducer;