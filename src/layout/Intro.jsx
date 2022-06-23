import React from 'react';
import pin from '../asset/pin_icon.svg';
import iconDent from '../asset/icon-치과.svg';
import './intro.css';
import Card from './../components/Card';

const Intro = (props) => {
    const introData=props.input
    console.log(introData)
    return (
        <>
        <Card>
            <div className='intro-head'>
                <img src={pin} />
                <span className='intro-dong-name'>{introData.address_sido_sigungu} {introData.address_dong}</span>
            </div>
            <div className='intro-body-1'>
                <div className='intro-body-1-left'>
                    <img src={iconDent} />
                    <div className='intro-dep-name-top'>{introData.department}</div>
                </div>
                {/* <div className='intro-body-1-right'>
                    <div className='txt-attractiveness-head'>개원 매력도</div>
                    <div className='intro-short-line'></div>
                    <div className='txt-attractiveness-body'>-</div>
                </div> */}
            </div>
            <div className='intro-paragraph'>
                {introData.address_dong}은 {introData.address_sido_sigungu}의 행정동으로, 지리 상 {introData.address_realated_dongs}을 포함하고 있습니다. 
                오픈닥터의 개원 입지 분석 시스템에서 {introData.address_dong} 내 분석 대상 의원은 총 {introData.hospital_count}개 입니다.
                또한 병원급 의료기관은 
                {introData.big_hospital_count===0 ? <span> 없습니다.</span> : <span>{introData.big_hospital_count}개 존재하며, </span>}
                {/* 병원 개수에 따라 조건부 문 작성 필요함 */}
                <div className='intro-long-line'></div>
            </div>
            <div className='intro-guide-text-bot'>분석에 활용되는 진료과</div>
            <div className='intro-dep-name-bot'>{introData.department_group}</div>
        </Card>
        </>
    );
};

export default Intro;