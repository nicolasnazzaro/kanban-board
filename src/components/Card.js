import React from 'react';
import { Card, Typography, CardContent } from '@material-ui/core';

const CardItem = ({text}) => {
    return (
        <Card style={styles.cardContainer}>
          <CardContent>
            <Typography gutterBottom>{text}</Typography>
          </CardContent>
        </Card>
      );
}

const styles = {
  cardContainer: {
    marginBottom: 8
  }
}

export default CardItem;