import React from 'react';
import './comp-box.css'

const CompBox = (props) => {
    return (
        <div className='comp-box-wrapper'>
            <div className='comp-box'>
                <div className='comp-box-header'>{props.name}</div>
                <div className='comp-box-body'>{props.num}</div>
                
            </div>
        </div>
    
    );
};

export default CompBox;