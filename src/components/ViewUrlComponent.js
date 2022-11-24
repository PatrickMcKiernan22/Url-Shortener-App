import React, { useState } from "react"
import axios from "axios"
import EntryList from "./EntryList";
import '../App.css';
import './Design.css';
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";

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
        <Box sx={{
            width: 500,
            height: 250,
            borderRadius: 'black',
            alignItems: 'center',
            margin: 'auto'
    }}>
                <Typography variant="h5" paddingTop paddingBottom sx={{ fontWeight: 'bold'}}> Display All Urls</Typography>
                <Box>
                    <Button style={{backgroundColor: '#078080'}} paddingBottom className="display" variant='contained' onClick={handleViewAllUrls}> 
                    View All Urls
                    </Button>
               </Box>
               <Box>
                <EntryList entries={allUrls}/>
               </Box>
        </Box>
    );
}

export default ViewAllUrls;