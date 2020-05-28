import React, { useState } from 'react';
import CardItem from './CardItem';
import AddElementButton from './common/AddElementButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { deleteList, editList } from '../actions/listActions';
import { Button, TextareaAutosize, Card } from '@material-ui/core';


const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 4px;
    width: 280px;
    height: 100%;
    padding: 10px;
    margin-right: 8px
`
const TitleContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const ListButton = styled(Icon)`
    display: none;
    margin-rigth: 50px;
    transition: opacity 0.3s ease-in-out;
    opacity: 0.2;
    ${ListContainer}:hover & {
        display: inline;
        cursor: pointer;
      }
    &:hover {
        opacity: 0.8;
    }   
`;

const List = ({title, cards, listId, index, dispatch}) => {
    
    const [editing, setEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    const renderEditInput = () => (
    <form style={{display: 'flex', justifyContent: 'space-between', paddingBottom: 8}}>
        <Card style={{width: '55%', padding: '6px 8px 2px'}}>
            <TextareaAutosize
                style={{
                    resize: 'none',
                    overflow: 'hidden',
                    outline: 'none',
                    border: 'none',
                    fontSize: 15,
                    fontWeight: 600,
                }}
                value={listTitle}
                onChange={(e) => {
                    e.preventDefault();
                    setListTitle(e.target.value)
                }}
                autoFocus
                onBlur={() => {setEditing(false)}}
            />
        </Card>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <Button
                variant='contained' 
                color='primary'
                onMouseDown={handleEdit}
                disabled={!!!listTitle}
                value='Save'
            >
                Save
            </Button>
            <Icon style={{cursor: 'pointer', marginLeft: 8}} onClick={() => {setEditing(false)}}>close</Icon>
        </div>
      </form>)

    const handleDeleteList = () => {
        dispatch(deleteList(listId));
    }

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editList(listId, listTitle));
        setEditing(false);
    }
    
    return (
        <Draggable draggableId={listId} index={index}>
            {provided => (
                <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                    <Droppable droppableId={listId} type='card'>
                        {(provided) => (
                            <div>
                                {editing ? renderEditInput() : (
                                    <TitleContainer>
                                        <h4>{title}</h4>
                                        <div>
                                            <ListButton onClick={() => {setEditing(true)}}>edit</ListButton>
                                            <ListButton onClick={handleDeleteList}>delete</ListButton>
                                        </div>
                                    </TitleContainer>
                                )}
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {cards.map((card, index) => (
                                        <CardItem 
                                            key={card.id} 
                                            text={card.text} 
                                            cardId={card.id} 
                                            index={index}
                                            listId={listId}
                                        />) )}
                                    {provided.placeholder}
                                    <div style={{marginTop: 8}}>
                                        <AddElementButton listId={listId} element='card'/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Droppable>
                </ListContainer>
            )}
        </Draggable>
    );
}

export default connect()(List);