import React from "react"
import ComedianPreview from "./ComedianPreview"
import logo from "../Assets/mod5projectlogo.jpg"

export default function Landing(){
    return(
        <>
        <div className="landing-conatiner">
            <header className="landing-header">
                <img id="logo-image" src={logo} alt="ShowMe Logo Image"/>
                <h2>Experience ShowMe as a...</h2>
                <button>Fan</button> <button>Comedian</button>
            </header>
        </div>
            <div className="imported-comedian-preview">
                <ComedianPreview />
                <ComedianPreview />
                <ComedianPreview />
                <ComedianPreview />
            </div>
        </>
    )
}