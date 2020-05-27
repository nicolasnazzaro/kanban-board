import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';
import { Draggable } from 'react-beautiful-dnd';

const CardItem = ({text, cardId, index}) => {
    return (
        <Draggable draggableId={cardId} index={index}>
          {provided => (
            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <Card style={styles.cardContainer}>
                <CardContent>
                  <Typography gutterBottom>{text}</Typography>
                </CardContent>
              </Card>  
            </div>
          )}
        </Draggable>
    );
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }
}

export default CardItem;