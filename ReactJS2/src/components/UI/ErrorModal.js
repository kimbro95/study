import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import ModalOverlay from './ModalOverlay';

const backdropRoot = document.getElementById('backdrop-root');
const modalRoot = document.getElementById('modal-root');

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onErrorHandler={props.onErrorHandler} />,
                backdropRoot
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onErrorHandler={props.onErrorHandler}
                />,
                modalRoot
            )}
        </Fragment>
    );
}

export default ErrorModal;