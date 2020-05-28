import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import AddElementForm from './AddElementForm';
import styled from 'styled-components';

const AddButtonContainer = styled.div`
    display: flex;
    background-color: #dfe3e6;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    width: 266px;
    min-width: 266px;
    padding-left: 10px;
    &:hover {
        border: solid 1px #c0c0c0;
        background-color: #c0c0c0;
    }
`;

const AddElementButton = ({element, listId}) => {

    const [formOpen, setFormOpen] = useState(false);

    const renderButton = () => (
        <AddButtonContainer onClick={() => {setFormOpen(true)}}>
            <Icon>add</Icon>
            <p>Add a new {element}</p>
        </AddButtonContainer>
    );
    
    return formOpen ? <AddElementForm listId={listId} element={element} onBlur={() => {setFormOpen(false)}}/> : renderButton();
}

export default AddElementButton;