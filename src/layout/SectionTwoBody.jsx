import React, {useState} from 'react';
import Card from '../components/Card';
import './section-body.css';

const SectionTwoBody = (props) => {
    
    const data=props.input

    return (
        <div className='section-body'>
            <Card>
            {data.address_dong}의 {data.department} 시장규모는 월 {data.market_size}입니다. 지난 12개월 중 최대값은 {data.market_max_size} ({data.market_max_year} {data.market_max_month}) 이며, 최소값은 {data.market_min_size} ({data.market_min_year} {data.market_min_month}) 입니다.
최근 3년간 시장규모 추세는 2022년 월 75억 4,323만원에서 2022년 월 75억 4,323만원으로 11% 증가하였습니다.{data.address_dong}의 현재 {data.department} 의원 개수는 {data.hospital_count}입니다. 
최근 3년간 의원 개수 추세는 2020년 101개에서 2022년 97개로 4개 감소하였습니다.
평수가 큰 의원일수록 매출이 높은 경향이 있기 때문에, 평수의 효과를 제거한 1평당 매출액을 확인하는 것이 중요합니다. 의원 1평당 매출액은 월 {data.profit_per_area_size}으로, 50평 의원 기준으로 환산하면 {data.profit_per_50p} 입니다. 최근 3년 추세는 2020년 월 99만원에서 2022년 월 100만원으로 1% 증가하였습니다.           </Card>
        </div>
    );
};

export default SectionTwoBody;