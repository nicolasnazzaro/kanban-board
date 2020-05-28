import React from 'react';
import CardItem from './CardItem';
import AddElementButton from './AddElementButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';


const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 4px;
    width: 280px;
    height: 100%;
    padding: 10px;
    margin-right: 8px
`

const List = ({title, cards, listId, index}) => {
    return (
        <Draggable draggableId={listId} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={listId} type='card'>
                        {(provided) => (
                            <div>
                                <h4>{title}</h4>
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {cards.map((card, index) => (
                                        <CardItem 
                                            key={card.id} 
                                            text={card.text} 
                                            cardId={card.id} 
                                            index={index}
                                            listId={listId}
                                        />) )}
                                    {provided.placeholder}
                                    <AddElementButton listId={listId} element='card'/>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
}

export default List;