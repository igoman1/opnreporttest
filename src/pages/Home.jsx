import React from 'react';
import {Link} from 'react-router-dom';
import InputForm from '../components/InputForm';
import ColoredHeader from '../layout/ColoredHeader';
import './home.css';
import BottomButton from './../components/BottomButton';

const Home = () => {
    
    return (
        <>

        <ColoredHeader />
        <InputForm></InputForm>


<Link to="/report">
    <BottomButton></BottomButton>

</Link>
     
        </>
    );
};


export default Home;