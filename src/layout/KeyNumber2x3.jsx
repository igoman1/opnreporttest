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
    keyNumberData.push(data.hospital_count);
    keyNumberData.push(data.hospital_count_trend);
    keyNumberData.push(data.profit_per_area_size);
    keyNumberData.push(data.profit_per_area_trend);

    // const sampleData= ['7689035679','증가','96','감소','105','증가']

    // const keyNumbersTransformer =(array) => {
    //     let tmp = [...array]
    //     tmp[2] = `${array[2]}개`
    //     tmp[4] = `월 ${array[4]}만원`
    //     tmp[0] = NumberTransformer(tmp[0])

    //     return tmp
    // }
    

    // const [visualData, setVisualData] = useState(keyNumberData)
    // useEffect(()=> {
    // setVisualData(keyNumberData);
    
    // },[])

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