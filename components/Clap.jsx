import React from "react";
import { useState } from "react";

export const Clap = ({blogs, blogId}) => {
    
    const [clap, setClap] = useState(blogs[blogId].clap);

    const clapCount = () => {
        setClap(clap + 1);
    }

    return (
        <>  
            <button onClick={clapCount} className="p-2 mx-auto hover:bg-blue-200 rounded-full ">
                { clap >= 1 ?  <span >+{clap}</span> : <span >{clap}</span> }
            </button>
        </>
    )
}