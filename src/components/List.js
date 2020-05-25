import React from 'react'
import CardItem from './Card'

const List = ({title, cards}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (<CardItem text={card.text}/>) )}
        </div>
    );
}

const styles = {
    container : {
        backgroundColor: "#dfe3e6",
        borderRadius: 4,
        width: 300,
        padding: 10,
        marginRight: 8
    }
}

export default List;