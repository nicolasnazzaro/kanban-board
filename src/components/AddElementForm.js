import React, { Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import { Card, Button } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';

const AddElementForm = ({element, onBlur}) => {
    const buttonTitle = element === 'list' ? 'Add List' : 'Add Card';
        const placeholder = element === 'list' ? 'Enter list title' : 'Enter a title for this card';

        return (
            <Fragment>
                <Card style={{
                    overflow: 'visible',
                    minHeight: 80,
                    minWidth: 266,
                    padding: '6px 8px 2px'
                }}>
                    <TextareaAutosize
                        placeholder={placeholder}
                        autoFocus
                        onBlur={onBlur}
                        style={{
                            resize: 'none',
                            width: '100%',
                            overflow: 'hidden',
                            outline: 'none',
                            border: 'none'
                        }}
                    />
                </Card>
                <div style={{marginTop: 8, display: 'flex', alignItems: 'center'}}>
                    <Button 
                        variant='contained'
                        style={{color: 'white', backgroundColor: '#5aac44'}}
                    >{buttonTitle}</Button>
                    <Icon style={{cursor: 'pointer', marginLeft: 8}}>close</Icon>
                </div>
            </Fragment>
        );
}

export default AddElementForm;