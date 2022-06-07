import React from 'react';
import {Link} from 'react-router-dom';
import InputForm from '../components/InputForm';
import ColoredHeader from '../layout/ColoredHeader';

const Home = () => {
    
    return (
        <>
        <InputForm></InputForm>
        <ColoredHeader />
        <div>
            홈화면
        </div>

<Link to="/report">
        <button>분석 리포트 보기</button>
</Link>
     
        </>
    );
};


export default Home;