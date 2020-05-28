import React, { useState, useRef } from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, Button } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList } from '../../actions/listActions';
import { addCard } from '../../actions/cardsActions';

const AddElementForm = ({element, onBlur, dispatch, listId}) => {
    
    const buttonTitle = element === 'list' ? 'Add List' : 'Add Card';
    const placeholder = element === 'list' ? 'Enter list title...' : 'Enter a title for this card...';

    const [elementText, setElementText] = useState('');
    const textareaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.currentTarget.name)
        if (element === 'list') {
            dispatch(addList(elementText));
        } else if (element === 'card') {
            dispatch(addCard(elementText, listId));
        }
        setElementText('');
        textareaRef.current.blur();
    }

    return (
        <div style={{paddingTop: 4}}>
            <Card onBlur={onBlur} style={{
                overflow: 'visible',
                minHeight: element === 'card' ? 80 : 'none',
                minWidth: 266,
                padding: '6px 8px 2px'
            }}>
            <TextareaAutosize
                placeholder={placeholder}
                autoFocus
                ref={textareaRef}
                value={elementText}
                onChange={e => setElementText(e.target.value)}
                style={{
                    resize: 'none',
                    width: '100%',
                    overflow: 'hidden',
                    outline: 'none',
                    border: 'none',
                    fontSize: 15,
                    fontWeight: element === 'list' && 600,
                }}
            />
            </Card>
            <div style={{marginTop: 8, display: 'flex', alignItems: 'center'}}>
                <Button
                    variant='contained'
                    disabled={!!!elementText}
                    onMouseDown={e => handleSubmit(e)}
                    color='primary'
                >
                    {buttonTitle}
                </Button>
                <Icon style={{cursor: 'pointer', marginLeft: 8}} onClick={() => {textareaRef.current.blur()}}>close</Icon>
            </div>
        </div>
    );
}

export default connect()(AddElementForm);