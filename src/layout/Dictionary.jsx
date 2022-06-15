import React from 'react';
import './dictionary.css';

const Dictionary = () => {
    return (
        <div className='dictionary-box'>
            <div className='dictionary-header'>용어 설명</div>
            <div className='dictionary-body-wrapper'>
                <div className='dictionary-body'>
                    <div className='dictionary-body-word'>매출액</div>
                    <div className='dictionary-body-meaning'>
                        <div>월간 카드 매출 합계를 의미합니다.</div>
                        <div className='dictionary-body-explanation'>(심사평가원에 따르면 치과의 카드 매출은 보험급여가 포함된 실제 매출의 58%를 반영합니다)</div>
                    </div>
                </div>

                <div className='dictionary-line' />
                <div className='dictionary-body'>
                    <div className='dictionary-body-word'>시장규모</div>
                    <div className='dictionary-body-meaning'>
                        <div>분석 대상 의원들의 월 매출액 합계이며, 지난 12개월의 평균값을 사용합니다.</div>
                    </div>
                </div>
                <div className='dictionary-line' />
                <div className='dictionary-body'>
                    <div className='dictionary-body-word'>객단가</div>
                    <div className='dictionary-body-meaning'>
                        <div>고객의 결제 건당 금액을 의미하며, 지난 12개월의 평균값을 사용합니다. </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dictionary;