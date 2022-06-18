import React from 'react';

const NumberTransformer = (num) => {
    let transformedNum;

    let rev = num;
    var rev1;
    var rev2;
    if(rev>(10**8)){
    rev1 = Math.floor(rev/(10**8));
    let revTemp = rev-rev1*(10**8);
    rev2 = Math.floor(revTemp/(10**4));
    transformedNum = `월 ${rev1}억 ${rev2}만원`
    }
    else if(rev>(10**4)) {
        rev2 = Math.floor(rev/(10**4));
        transformedNum = `월 ${rev2}만원`
    }
    else {
        transformedNum = `월 ${rev}원`
    }

    return transformedNum;
};

export default NumberTransformer;