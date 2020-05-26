import { addList } from '../actions/listActions'

const initialState = [
    {
        title: "List 1",
        id: 0,
        cards: [
            {
                id: 0,
                text: "text card 1"
            },
            {
                id: 1,
                text: "text card 2"
            },
        ]
    },
    {
        title: "List 2",
        id: 1,
        cards: [
            {
                id: 0,
                text: "text card 1"
            },
            {
                id: 1,
                text: "text card 2"
            },
            {
                id: 2,
                text: "text card 3"
            }
        ]
    },
    {
        title: "List 3",
        id: 2,
        cards: [
            {
                id: 2,
                text: "text card 1"
            },
            {
                id: 1,
                text: "text card 2"
            },
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_LIST":
            const newList ={
                id: 3,
                title: action.payload,
                cards: []
            }
            return [...state, newList]
        default: 
            return state;
    }
}

export default listsReducer;