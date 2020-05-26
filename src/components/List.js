import React from 'react'
import CardItem from './Card'
import AddElementButton from './AddElementButton'

const List = ({title, cards}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            {cards.map(card => (<CardItem key={card.id} text={card.text}/>) )}
            <AddElementButton element='card'/>
        </div>
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