import React, {useState} from 'react';
import Card from '../components/Card';
import './section-body.css';

const SectionThreeBody = (props) => {
    
    const data=props.input
    console.log(data)

    return (
        <div className='section-body'>
            <Card>
            {data.address_dong}의 {data.department} 평균 매출액은 월 {data.all_hospital_average_profit}입니다. 최근 24개월 내 개원한 신규 의원은 {data.new_hospital_count}입니다.
            {/* // 조건문 작성 필요 */}
의원별 점유율을 토대로한 경쟁 지표는 {data.competition_rate}으로 산출됩니다. 통상 이 지표가 0.25보다 크면 독과점, 0.15와 0.25 사이면 균형적인 경쟁, 0.15보다 작으면 경쟁이 치열하다고 판단합니다. 
이에 따라 {data.address_dong}의 {data.department} 시장은 {data.competition_type} 유형으로 볼 수 있습니다.
        </Card>
        </div>
    );
};

export default SectionThreeBody;