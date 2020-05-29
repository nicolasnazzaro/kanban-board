import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import { Typography } from '@material-ui/core';
import AddElementForm from './AddElementForm';
import styled from 'styled-components';

const AddButtonContainer = styled.div`
    display: flex;
    background-color: inherit;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    width: 266px;
    min-width: 266px;
    padding-left: 10px;
    &:hover {
        background-color: lightgray;
    }
`;

const AddElementButton = ({element, listId}) => {

    const [formOpen, setFormOpen] = useState(false);

    const renderButton = () => (
        <AddButtonContainer onClick={() => {setFormOpen(true)}}>
            <Icon>add</Icon>
            { element === 'list'
                ? <Typography variant='h6'>Add a new {element}</Typography> 
                : <Typography>Add a new {element}</Typography>
            }
        </AddButtonContainer>
    );
    
    return formOpen ? <AddElementForm listId={listId} element={element} onBlur={() => {setFormOpen(false)}}/> : renderButton();
}

export default AddElementButton;