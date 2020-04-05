import React from 'react';
import "./Preview.css"


export function Preview() {
    return(
        <div className="preview">
           <img className="preview-img" src={require("../../image/Preview-bg.png")} alt="preview"></img>
           <div></div>
        </div>
    );
}