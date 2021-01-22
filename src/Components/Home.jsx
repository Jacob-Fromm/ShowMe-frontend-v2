import React from "react"
import ComedianPreview from "./ComedianPreview"

export default function Home(){
    return(
        <div>
            <div className="filter">
                {/* <div className="filter-role">
                    <h2>I am a...</h2>
                    <label for="role"></label>
                    <select name="roles" id="roles">
                        <option value="Fan">Fan</option>
                        <option value="Comic">Comic</option>
                    </select>
                </div> */}
                <div className="filter-location">
                    <h2>Show me events in...</h2>
                    <label for="location"></label>
                    <select name="location" id="location" placeholder="Select a location">
                        <option value="New York City">New York City</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Boston">Boston</option>
                        <option value="San Francisco">San Francisco</option>
                    </select>
                </div>
            </div>
            <ComedianPreview />
        </div>
       
    )
}