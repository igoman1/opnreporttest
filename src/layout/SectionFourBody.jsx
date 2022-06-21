import React, {useState} from 'react';
import Card from '../components/Card';
import './section-body.css';

const SectionFourBody = (props) => {
    
    const data=props.input

    return (
        <div className='section-body'>
            <Card>

            {data.address_dong}에서 {data.department}에 가장 많은 금액을 지불한 고객군은 {data.major_Customer_age_sex} 입니다. 성별로 보면 남성 {data.customer_male_ratio} 여성 {data.customer_female_ratio}로 {data.sex_compare}이 더 많습니다. 
            남성 중 가장 큰 비중을 차지하는 연령대는 {data.male_max_count_age}로, 전체 남성 중 {data.male_max_count_ratio}에 해당합니다. 
            여성의 경우는 {data.female_max_count_age}로, 전체 여성 중 {data.female_max_count_ratio}를 차지합니다.
소득수준별로 보면 {data.major_Customer_profit} 구간이 전체의 35%로 가장 많습니다.
평균 객단가는 {data.average_profit_per_customer}으로 나타났습니다. 지난 12개월 중 최대값은 {data.max_average_profit_per_customer} ({data.max_average_profit_per_customer_year} {data.max_average_profit_per_customer_month}) 이며, 최소값은 {data.min_average_profit_per_customer} ({data.min_average_profit_per_customer_year} {data.min_average_profit_per_customer_month}) 입니다. 
최근 3년 추세는 25만 1,507원에서 27만 5,013원으로 9% 증가하였습니다.
           </Card>
        </div>
    );
};

export default SectionFourBody;