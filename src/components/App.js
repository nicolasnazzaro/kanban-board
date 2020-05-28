import React from 'react';
import List from './List';
import { connect } from "react-redux";
import AddElementButton from './AddElementButton';
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

    console.log(
      'drag: ' + source.draggableId +
      'drop: ' + source.droppableId + ' ' + destination.droppableId
    )
    
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
              <div style={styles.addContainer}>
               <AddElementButton element='list'/>
              </div>
              {provided.placeholder}
            </AllListContainer>
          )}
        </Droppable>
    </DragDropContext>
  );
}

const mapStateToProps = state => ({
  board: state.board
})

const styles = {
  addContainer: {
    backgroundColor: "#dfe3e6",
    borderRadius: 4,
    width: 280,
    height: '100%',
    padding: 10,
    marginRight: 8,
  }
}

export default connect(mapStateToProps)(App);