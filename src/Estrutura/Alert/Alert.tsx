import React, { useState } from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = ({ severity, message, onClose }) => {
    const [open, setOpen] = useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        onClose(); // Chama a função onClose passada como propriedade para notificar o componente pai que o alerta foi fechado.
    };

    return (
        <Snackbar 
            open={open} 
            autoHideDuration={3000} 
            onClose={handleClose} 
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}
        >
            <MuiAlert onClose={handleClose} severity={severity}>
                {message}
            </MuiAlert>
        </Snackbar>
    );
};

export default Alert;