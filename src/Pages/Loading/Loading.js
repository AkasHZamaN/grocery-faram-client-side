import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{height:'400px'}} className='w-100 d-flex justify-content-center align-items-center'>
             <Spinner animation="border" style={{color:'#6A1B4D'}} />
        </div>
    );
};

export default Loading;