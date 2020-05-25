import React from 'react'
import CardItem from './Card'

const List = ({title}) => {
    return (
        <div style={styles.container}>
            <h4>{title}</h4>
            <CardItem/>
        </div>
    );
}

const styles = {
    container : {
        backgroundColor: "#eee",
        borederRadius: 3,
        width: 300,
        padding: 8
    }
}

export default List;