import React, {useEffect, useState} from "react";
import './body.css';
import {Link, useHistory, useRouteMatch} from "react-router-dom";


function Overview({match}) {
    const [view, setView] = useState([]);
    const { url } = useRouteMatch();
    let show;

    useEffect(() => {
            fetch("http://localhost:8080/advertisements")
                .then(response => response.json())
                .then(data => setView(data));
            console.log(match);
        }, []
    );

        show = (
            <div>
                {view.map(view => (
                    <ul key={view.id}>{view.text}</ul>

                ))}

            </div>
        );




    return (

        <div className="frontpage">
            <div>{show}</div>
        </div>
    )
}

export default Overview;