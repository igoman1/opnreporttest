import React from 'react';
import pin from '../asset/pin_icon.svg';
import iconDent from '../asset/icon-치과.svg';
import './intro.css';
import Card from './../components/Card';
import { id_ID } from 'faker/lib/locales';

const Intro = (props) => {
    const introData=props.input
    // console.log(introData)
    let dep=introData.department
    // console.log(dep)

    let depIcon='기타'
    // switch(dep){
    //     case '정형외과':
    //         depIcon='정형외과'
    //     case '마취통증의학과':
    //         depIcon='정형외과'
    //     case '재활의학과':
    //         depIcon='정형외과'
    //     case '신경외과':
    //         depIcon='정형외과'
    //     case '일반의원':
    //         depIcon='내과'
    //     case '가정의학과':
    //         depIcon='내과'
    //     case '내과':
    //         depIcon='내과'    
    //     case '소아과':
    //         depIcon='이비인후과'
    //     case '피부과':
    //         depIcon='피부과'
    //     case '성형외과':
    //         depIcon='성형외과'
    //     case '정신건강의학과':
    //         depIcon='정신건강의학과'
    //     case '안과':
    //         depIcon= '안과'
    //     case '치과':
    //         depIcon='치과'                                             
    // }
    if(dep==='정형외과'){
        depIcon='정형외과'
    }
    else if(dep==='마취통증의학과'){
        depIcon='정형외과'
    }
    else if(dep==='재활의학과'){
        depIcon='정형외과'
    }
    else if(dep==='신경외과'){
        depIcon='정형외과'
    }   
    else if(dep==='일반의원'){
        depIcon='내과'
    }
    else if(dep==='내과'){
        depIcon='내과'
    }
    else if(dep==='소아청소년과'){
        depIcon='내과'
    }
    else if(dep==='이비인후과'){
        depIcon='내과'
    }
    else if(dep==='가정의학과'){
        depIcon='내과'
    }
    else if(dep==='피부과'){
        depIcon='피부과'
    }
    else if(dep==='성형외과'){
        depIcon='성형외과'
    }
    else if(dep==='정신건강의학과'){
        depIcon='정신건강의학과'
    }
    else if(dep==='산부인과'){
        depIcon='산부인과'
    }
    else if(dep==='안과'){
        depIcon='안과'
    }
    else if(dep==='치과'){
        depIcon='치과'
    }
    else{
        depIcon='기타'
    }
    // console.log(depIcon)

    const iconUrl = "icon/"+"icon-"+depIcon+".svg"
    // console.log(iconUrl)

    return (
        <>
        <Card>
            <div className='intro-head'>
                <img src={pin}/>
                <span className='intro-dong-name'>{introData.address_sido_sigungu} {introData.address_dong}</span>
            </div>
            <div className='intro-body-1'>
                <div className='intro-body-1-left'>
                    <img src={iconUrl} />
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
                오픈닥터의 개원 입지 분석 시스템에서 {introData.address_dong} 내 분석 대상 의원은 총 {introData.hospital_count} 입니다.
                또한 병원급 의료기관은 
                {introData.big_hospital_count==='0개' ? <span> 없습니다.</span> : <span> {introData.big_hospital_count} 존재하며, {introData.big_hospital_departments}가 있습니다.</span>}
                <div className='intro-long-line'></div>
            </div>
            <div className='intro-guide-text-bot'>분석에 활용되는 진료과</div>
            <div className='intro-dep-name-bot'>{introData.department_group}</div>
        </Card>
        </>
    );
};

export default Intro;