import React, { useState } from "react"
import axios from "axios"
import EntryList from "./EntryList";

const ViewAllUrls = () =>{
    const[allUrls, setAllUrls] = useState([]);

  const handleViewAllUrls = (e) => {
    e.preventDefault();

    axios
        .get("http://localhost:8040/url/all")
        .then((response) =>{
            setAllUrls(response.data.response);
        })
        .catch((error) => {
            console.log(error);
        });
  };

    return(
        <div className="viewAllEntries">
            <div className="header">
                <h2>Displaying All Urls Entered</h2>
                <div className="DisplayAll">
                    <button onClick={handleViewAllUrls}>
                        View All Urls
                    </button>
                </div>
            </div>
            <div className="content">
                <EntryList entries={allUrls}/>
            </div>
        </div>
    );
}

export default ViewAllUrls;