import React from 'react';
import pin from '../asset/pin_icon.svg';
import iconDent from '../asset/icon-치과.svg';
import './intro.css';
import Card from './../components/Card';

const Intro = (props) => {
    return (
        <>
        <Card>
            <div className='intro-head'>
                <img src={pin} />
                <span className='intro-dong-name'>{props.address_sido_sigungu} {props.address_dong}</span>
            </div>
            <div className='intro-body-1'>
                <div className='intro-body-1-left'>
                    <img src={iconDent} />
                    <div className='intro-dep-name-top'>치과</div>
                </div>
                <div className='intro-body-1-right'>
                    <div className='txt-attractiveness-head'>개원 매력도</div>
                    <div className='intro-short-line'></div>
                    <div className='txt-attractiveness-body'>보통</div>
                </div>
            </div>
            <div className='intro-paragraph'>
                역삼1동은 서울특별시 강남구의 행정동으로, 지리 상 역삼동을 포함하고 있습니다. 
                오픈닥터의 개원 입지 분석 시스템에서 역삼1동 내 분석 대상 의원은 총 97개 입니다.
                또한 병원급 의료기관은 2개 존재하며, 치과병원 2개가 있습니다.
                개원여기에 입력된 나의 개원 선호사항 10개 중 역삼1동은 총 5개를 만족시켜 개원 매력도가 보통인 곳 입니다.
                <div className='intro-long-line'></div>
            </div>
            <div className='intro-guide-text-bot'>분석에 활용되는 진료과</div>
            <div className='intro-dep-name-bot'>치과</div>
        </Card>
        </>
    );
};

export default Intro;