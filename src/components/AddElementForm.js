import React, { Fragment, useState } from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, Button } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList } from '../actions/listActions';
import { addCard } from '../actions/cardsActions';

const AddElementForm = ({element, onBlur, dispatch}) => {
    
    const buttonTitle = element === 'list' ? 'Add List' : 'Add Card';
    const placeholder = element === 'list' ? 'Enter list title' : 'Enter a title for this card';
    const addElement = element === 'list' ? addList : addCard;

    const [elementText, setElementText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addElement(elementText));
        setElementText('');
    }

    return (
        <Fragment>
            <Card name='form' onBlur={onBlur} style={{
                overflow: 'visible',
                minHeight: element === 'card' ? 80 : 'none',
                minWidth: 266,
                padding: '6px 8px 2px'
            }}>
            <TextareaAutosize
                placeholder={placeholder}
                autoFocus
                value={elementText}
                onChange={e => setElementText(e.target.value)}
                style={{
                    resize: 'none',
                    width: '100%',
                    overflow: 'hidden',
                    outline: 'none',
                    border: 'none',
                    fontSize: 15,
                    fontWeight: element === 'list' && 700
                }}
            />
            </Card>
            <div style={{marginTop: 8, display: 'flex', alignItems: 'center'}}>
                <Button
                    onMouseDown={e => {handleSubmit(e)}}
                    variant='contained'
                    style={{color: 'white', backgroundColor: '#5aac44'}}
                >
                    {buttonTitle}
                </Button>
                <Icon style={{cursor: 'pointer', marginLeft: 8}}>close</Icon>
            </div>
        </Fragment>
    );
}

export default connect()(AddElementForm);