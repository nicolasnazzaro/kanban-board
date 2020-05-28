import React from 'react';
import List from './List';
import { connect } from "react-redux";
import AddElementButton from './common/AddElementButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sortCard } from '../actions/cardsActions';
import { sortList } from '../actions/listActions';
import styled from 'styled-components';

const AllListContainer = styled.div`
  display: flex;
`; 

const App = ({board, dispatch}) => {
  
  const onDragEnd = (result) => {
    const {destination, source, draggableId, type} = result;
    
    if (!destination) {
      return;
    }
    
    if (type === 'card') {
      dispatch(sortCard(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
      ));
    } else if (type === 'list') {
      dispatch(sortList(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
      ));
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='all-lists' type='list' direction='horizontal'>
          {provided => (
            <AllListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {board.map((list, index) => 
                <List 
                  key={list.id} 
                  listId={list.id} 
                  title={list.title} 
                  cards={list.cards} 
                  index={index}
                />
              )}
              {provided.placeholder}
               <AddElementButton element='list'/>
            </AllListContainer>
          )}
        </Droppable>
    </DragDropContext>
  );
}

const mapStateToProps = state => ({
  board: state.board
})

export default connect(mapStateToProps)(App);