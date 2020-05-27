import React from 'react';
import CardItem from './CardItem';
import AddElementButton from './AddElementButton';
import { Droppable } from 'react-beautiful-dnd';

const List = ({title, cards, listId}) => {
    return (
        <Droppable droppableId={listId}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                <h4>{title}</h4>
                {cards.map((card, index) => (<CardItem key={card.id} text={card.text} cardId={card.id} index={index}/>) )}
                <AddElementButton listId={listId} element='card'/>
                {provided.placeholder}
            </div>
            )}
        </Droppable>
    );
}

const styles = {
    container : {
        backgroundColor: "#dfe3e6",
        borderRadius: 4,
        width: 280,
        height: '100%',
        padding: 10,
        marginRight: 8
    }
}

export default List;