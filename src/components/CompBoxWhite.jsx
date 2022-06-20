import React from 'react';
import './comp-box.css'


const CompBoxWhite = (props) => {
    return (
        <div className='comp-box-white-wrapper'>
            <div className='comp-box-white'>
                <div className='comp-box-header-white'>{props.name}</div>
                <div className='comp-box-body-white'>{props.num}</div>

                
            </div>
        </div>
    );
};

export default CompBoxWhite;