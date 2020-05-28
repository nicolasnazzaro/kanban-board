import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { deleteCard } from '../actions/cardsActions';
import { connect } from 'react-redux';

const CardContainer = styled.div `
  padding-bottom: 4px;
  padding-top: 4px;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;
`;

const EditButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 13px;
  opacity: 0.3;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const DeleteButton = styled(Icon)`
  position: absolute;
  display: none;
  right: 5px;
  bottom: 13px;
  opacity: 0.3;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const CardItem = ({text, cardId, index, dispatch, listId}) => {
  
const handleDeleteCard = () => {
  dispatch(deleteCard(listId, cardId));
};
  
  return (
    <Draggable draggableId={cardId} index={index}>
      {provided => (
          <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <Card>
                <EditButton fontSize="small">edit</EditButton>
                <DeleteButton fontSize="small" onClick={handleDeleteCard}>delete</DeleteButton>
                <CardContent>
                  <Typography gutterBottom>{text}</Typography>
                </CardContent>
              </Card>  
          </CardContainer>
      )}
    </Draggable>
  );
}

export default connect()(CardItem);