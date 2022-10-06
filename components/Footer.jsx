import React from "react";

export const Footer = () => {
    const date = new Date();


    const leftZero = (num) => {
        num < 10 ? num = 0 + '' + num : num = num;
        return num;
    }

    const years = leftZero(date.getDate()) +  '.' + leftZero(date.getMonth()) + '.' + date.getFullYear()
    
    return (
        <footer className="py-6">
            <p className="text-center">{years} 
                <span className="animate-pulse"> | </span>
                hudayihancerli <sup>&#169;</sup></p>
        </footer>
    )
}
