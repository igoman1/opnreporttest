import React from 'react';
import './key-number-box.css';

const KeyNumberBoxLean = (props) => {
    return (
            <div className='key-number-box-lean-wrapper'>
                <div className='key-number-box-lean'>
                    <div className='key-number-box-header'>{props.header}</div>
                    <div className='key-number-box-line'></div>
                    <div className='key-number-box-body'>{props.body}</div>
                </div>
            </div>
    );
};

export default KeyNumberBoxLean;