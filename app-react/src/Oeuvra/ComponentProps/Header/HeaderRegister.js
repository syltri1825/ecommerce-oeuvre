import React from "react";
import { Link } from "react-router-dom";


export default function HeaderRegister(){
    return(
        <>
            <div className="col-sm-12 mt-3 container">
                <div className="row">
                    <h1 className="col-sm-10 forme--text"><Link to={'/adminhome'} className="header--title">Oeuvra</Link></h1>
                    <h1 className="col-sm-2"></h1>
                </div>
            </div>  
        </>
    );
}
