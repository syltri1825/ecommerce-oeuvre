import React from "react";
import { Link } from "react-router-dom";
import AddCont from "../Filling/Contemporary/AddCont";
import Filling from "../Filling/Filling";
import FillingContemporary from "../Filling/FillingContemporary";
import Manage from "../Manage";
import HeaderLeftGenerale from "../Props/HeaderLeftGenerale";
import HeaderSecond from "../Props/HeaderSecond";

export default function ContemporaryAdmin(){    

    return (
        <>
            <div className="col-md-12">
                <Manage 
                    header={<HeaderSecond title={"Contemporary Arts"} />}
                    loadhead={<HeaderLeftGenerale />}
                    link={
                        <Link to={"/adminuser"} className="lie--tw">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lien--tela bi bi-caret-left-fill" viewBox="0 0 16 16">
                            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                            </svg>
                        </Link>
                    }
                    titre={"Vos meilleures arts"}
                    composant={<Filling dashboard={<FillingContemporary />}/>}
                    image={"../images/img1.jpg"}
                    addlink={<Link to={"/ca/oeuvra/add"} title="add art" className="lie--tw">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="lie--tela bi bi-plus-circle-fill lie--tel" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                                </svg>
                            </Link>}
                    addtitle={<span>Add</span>}
                    
                    updatelink={<Link to={""} className="lie--tw">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lie--tela bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </Link>}
                    updatetitle={<span>Update</span>}

                    deletelink={<Link to={""} className="lie--tw">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="lie--tela bi bi-trash-fill" viewBox="0 0 16 16">
                                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                                </svg>
                            </Link>}
                    deletetitle={<span>Delete</span>}
                />
            </div>
        </>
    );
}