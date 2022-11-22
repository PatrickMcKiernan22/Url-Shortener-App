import React, { useState } from "react"
import axios from "axios"
import EntryList from "./EntryList";
import '../App.css';
import './Design.css';

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
                <h2 className="h2">Display All Urls</h2>
                <div className="DisplayAll">
                    <button className="display" onClick={handleViewAllUrls}>
                        View All Urls
                    </button>
                </div>
            <div className="content">
                <EntryList entries={allUrls}/>
            </div>
        </div>
    );
}

export default ViewAllUrls;