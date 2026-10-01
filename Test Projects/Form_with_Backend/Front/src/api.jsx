// export default async  UserData => 
// App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function Api(){
    let item;
    const [items, setItems] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:5184/UserInfo")
            .then((res) => {
                setItems(res.data);
                setDataIsLoaded(true);
            });
    }, []);
    // item = items[Math.floor(Math.random() * items.length)]
    // console.log(typeof item)
    if (!dataIsLoaded) {
        return (
            <div>
                <h1>Please wait some time....</h1>
            </div>
        );
    }
    return (
        <div className="App">
            {/* <h1 className="geeks">GeeksforGeeks</h1> */}
            {/* <h3>Fetch data from an API in React</h3> */}
            <div className="container">
                {items}
                {/* {items.map((item) => (
                    <div className="item" key={item.id}>
                        <ol>
                            <div>
                                <strong>User_Name: </strong>
                                {item.username},
                            </div>
                            <div>Full_Name: {item.name}</div>
                            <div>User_Email: {item.email}</div>
                        </ol>
                    </div>
                ))} */}
            </div>
        </div>
    );
};
export default Api;
