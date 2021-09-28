import React, {useEffect, useState} from "react";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";


function FrontPage(props) {
    const [category, setCategory] = useState([])
    let { path, url } = useRouteMatch();

    useEffect(() => {
            fetch("http://localhost:8080/categories")
                .then(response => response.json())
                .then(data => setCategory(data));
        }, []
           );


    return (
        <div className="frontpage">

        {category.map(cat => (
                <ul>
                    <Link to={`${url}/cat.category`}>
                        {cat.category} : {cat.numberOfAds}
                        </Link>
                    </ul>

                ))}

            </div>
            )}


export default FrontPage;