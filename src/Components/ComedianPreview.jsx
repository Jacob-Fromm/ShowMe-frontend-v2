import React from "react"

export default function ComedianPreview(){
    return(
        <div className="comedian-preview">
            <div className="comedian-info">
                <h2>Comedian Name</h2>
                <img className="headshot" src="https://www.dailyherald.com/storyimage/DA/20101213/entlife/712179997/AR/0/AR-712179997.jpg&updated=201012131458&MaxW=900&maxH=900&noborder&Q=80"/>
                <button>SUBSCRIBE</button>
            </div>
            <div className="event-info">
                <h2>Next Show</h2>
                <div className="event-details">
                    <p>Venue</p>
                    <p>Date</p>
                    <p>Ticket Link</p>
                </div>
                <button>Follow Show</button>
            </div>
        </div>
    )
}