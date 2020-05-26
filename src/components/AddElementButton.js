import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import AddElementForm from './AddElementForm';

const AddElementButton = ({element}) => {

    const [formOpen, setFormOpen] = useState(false);

    const renderButton = () => (
        <div style={addButtonStyles} onClick={() => {setFormOpen(true)}}>
            <Icon>add</Icon>
            <p>Add a new {element}</p>
        </div>
    );
    
    return formOpen ? <AddElementForm element={element} onBlur={() => {setFormOpen(false)}}/> : renderButton();
}

const addButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 266,
    paddingLeft: 10
}

export default AddElementButton;