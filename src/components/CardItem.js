import React, { useState } from 'react';
import { Card, Typography, CardContent, TextareaAutosize, Button } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { deleteCard, editCard } from '../actions/cardsActions';
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

  const [editing, setEditing] = useState(false);
  const [cardText, setCardText] = useState('');

  const handleDeleteCard = () => {
    dispatch(deleteCard(listId, cardId));
  }

  const handleEdit = () => {
    dispatch(editCard(listId, cardId, cardText));
    setEditing(false);
    setCardText('');
  }

  const renderEditInput = () => (
    <div style={{paddingTop: 4, marginBottom: 8}}>
      <Card 
        onBlur={() => setEditing(false)} 
        style={{
          overflow: 'visible',
          minHeight: 80,
          minWidth: 266,
          padding: '6px 8px 2px'
        }}
      >
        <TextareaAutosize
          autoFocus
          value={cardText}
          onChange={e => setCardText(e.target.value)}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
            border: 'none',
            fontSize: 15,
          }}
        />
      </Card>
      <div style={{marginTop: 8, display: 'flex', alignItems: 'center'}}>
        <Button
          variant='contained'
          disabled={!!!cardText}
          onMouseDown={handleEdit}
          color='primary'
        >
          Save
        </Button>
        <Icon style={{cursor: 'pointer', marginLeft: 8}} onClick={() => setEditing(false)}>close</Icon>
      </div>
    </div>
  );
  
  return editing ? renderEditInput() : 
  (
    <Draggable draggableId={cardId} index={index}>
      {provided => (
          <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <Card>
                <EditButton fontSize="small" onClick={() => {setEditing(true); setCardText(text)}}>edit</EditButton>
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