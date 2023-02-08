import React from "react";
import { Link } from "react-router-dom";
import Filling from "../Filling/Filling";
import FillingSetting from "../Filling/FillingSetting";
import Manage from "../Manage";
import HeaderLeftGenerale from "../Props/HeaderLeftGenerale";
import HeaderSecond from "../Props/HeaderSecond";

export default function SettingAdmin(){    

    return (
        <>
            <div className="col-md-12">
                <Manage 
                    header={<HeaderSecond title={"Setting"} />}
                    loadhead={<HeaderLeftGenerale />}
                    link={
                        <Link to={"/adminuser"} className="lie--tw">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lien--tela bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </Link>
                    }
                    titre={"Modifier selon vos préférence"}
                    composant={<Filling dashboard={<FillingSetting />}/>}
                    image={"../images/img1.jpg"}
                />
            </div>
        </>
    );
}