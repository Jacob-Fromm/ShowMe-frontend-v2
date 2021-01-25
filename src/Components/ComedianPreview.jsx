import React from "react"
import { connect } from 'react-redux'

function ComedianPreview(){
    console.log("comedianpreview state", state.comics)
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

const msp = state => {
    console.log("current redux state", state)
    return { comics: state.comics }
}

// const mdp = dispatch => {
//     return { followComic: (followObj, currentUser) => dispatch(followComic(followObj, currentUser)) }
// }

export default connect(msp)(ComedianPreview)