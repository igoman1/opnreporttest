import React, {useState} from 'react';
import KeyNumberBoxFat from '../components/KeyNumberBoxFat';
import '../components/key-number-box.css';
import { useEffect } from 'react';
import NumberTransformer from '../components/NumberTransformer';

const KeyNumber2x3 = (props) => {
    const data=props.input;
    const keyNumberData=[];
    keyNumberData.push(data.market_size);
    keyNumberData.push(data.market_trend);
    keyNumberData.push(data.hospital_count_now);
    keyNumberData.push(data.hospital_count_trend);
    keyNumberData.push(data.profit_per_area_size);
    keyNumberData.push(data.profit_per_area_trend);

    const titleSet= ['시장규모', '시장규모 장기 추세', '의원 개수', '의원 개수 장기 추세', '의원 1평당 매출액', '1평당 매출액 장기 추세']

    return (
        <>
        <div className='key-number-box-fat-container'>
            {keyNumberData.map((item, index) => <KeyNumberBoxFat body={item} header={titleSet[index]}/>)}
        </div>
        </>
    );
     } ;

export default KeyNumber2x3;