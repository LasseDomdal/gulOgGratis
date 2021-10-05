import React, {useEffect, useState} from "react";
import './body.css';
import {Link, useParams} from "react-router-dom";


function Overview(props) {
    const [view, setView] = useState([]);

    const params = useParams();


    useEffect(() => {
        getByCategory(params.categories).catch(error => console.log(error))
    }, [params])


    async function getByCategory(category) {
        let response = await fetch("http://localhost:8080/advertisements?category=" + category,
            {
                method: "GET",
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        if (response.ok && response.status.toString()[0] === "2") {
            let js = await response.json()
            setView(js)

        } else new Error("something went wrong")
    }

    function getAdvertisementComponents() {
        return view.map((a, index) => <Advertisement key={index} view={a}/>)

    }

    function Advertisement(props) {
        if (props.view.category === params.category) {
            return (
                <ul>
                    <ul>
                        Categori:<br/> {props.view.category} <br/>
                        købs type:<br/> {props.view.type} <br/>
                        Mærke: <br/>{props.view.headerText} <br/>
                        Pris: <br/>{props.view.price} kr.

                    </ul>
                </ul>
            );
        } else {
            return (
                <div>

                </div>
            )
        }
    }


    return (
        <div className="Overview">
            {getAdvertisementComponents()}
        </div>
    )
}

export default Overview;