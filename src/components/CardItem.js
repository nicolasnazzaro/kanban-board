import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div `
  padding-bottom: 4px;
  padding-top: 4px;
`;

const CardItem = ({text, cardId, index}) => {
    return (
        <Draggable draggableId={cardId} index={index}>
          {provided => (
            <CardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                <Card>
                  <CardContent>
                    <Typography gutterBottom>{text}</Typography>
                  </CardContent>
                </Card>  
            </CardContainer>
          )}
        </Draggable>
    );
}

export default CardItem;