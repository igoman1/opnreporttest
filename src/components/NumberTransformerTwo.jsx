import React from 'react';

const NumberTransformerTwo = (num) => {
    let transformedNum;

    let rev = num;
    var rev1;
    var rev2;
    if(rev>(10**4)) {
        rev1 = Math.floor(rev/(10**4));
        rev2 = rev-rev1*(10**4);
        transformedNum = `월 ${rev1}만 ${rev2}원`
    }
    else {
        transformedNum = `월 ${rev}원`
    }

    return transformedNum;
};

export default NumberTransformerTwo;