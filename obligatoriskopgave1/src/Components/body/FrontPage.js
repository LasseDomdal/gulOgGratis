import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './body.css';



function FrontPage(props) {
    const [categories, setCategory] = useState([])


    useEffect(() => {
        getCategoryList().catch(error => console.log(error))
    }, [])

    async function getCategoryList() {
        let response = await fetch("http://localhost:8080/categories",
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
            setCategory(js)
        } else new Error("something went wrong")
    }

    function getCategoryComponents() {
        return categories.map((c, index) => <Category key={index} categories={c}/>)
    }

    function Category(props) {
        return (
            <div >
                    <ul>
                        <Link to={'/advertisements/' + props.categories.category}>
                            {props.categories.category} : {props.categories.numberOfAds}

                        </Link>
                    </ul>

            </div>
        );
    }

    return (
        <div className="frontpage">
            {getCategoryComponents()}
        </div>
    )
}


export default FrontPage;