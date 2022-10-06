import React from "react";
import { BackHome, Clap } from "./index";

export const Nav = ({blogs, blogId}) => {
    return( 
        <div className="fixed bottom-10 right-1">
            <div className="flex gap-4 backdrop-blur-sm bg-sky-500/10 rounded-full text-center p-3" >
                <Clap blogId={blogId} blogs={blogs} />
                <BackHome />
            </div>
        </div>
    )
}