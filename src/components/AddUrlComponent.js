import React, { useState } from 'react'
import './Design.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Divider, Typography} from "@mui/material";
import TextField  from '@mui/material/textfield';
import { Stack } from '@mui/system';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ClearIcon from '@mui/icons-material/Clear';


const styles = {
    stackCenter: {
        justifyContent: 'center'
    }
}

const AddUrl = () => {
    const [longUrl, setLongUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");

    const onSubmit = (e)=> {
        e.preventDefault();
        const UrlModel = {longUrl};

        fetch("http://localhost:8040/url",{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(UrlModel),
        })
            .then((response) => response.text())
            .then((text) => setShortUrl(text));
    };

    function copyElementText(id) {

        var text = document.getElementById(id).innerText;
    
        var elem = document.createElement("textarea");
    
        document.body.appendChild(elem);
    
        elem.value = text;
    
        elem.select();
    
        document.execCommand("copy");
    
        document.body.removeChild(elem);
    
    }

    const clearInput = () => {
        setLongUrl("");
    }

return(
        <Box sx={{
        alignItems: 'center',
        justifyContent: 'center'
}} >
 <form  onSubmit={onSubmit}>
    <Stack direction={'column'}>
        <Typography variant="h2">URL Shortener</Typography>
            <TextField sx={{
                width: 500,
                backgroundColor: 'white',
                margin: 'auto'
            }}
                label="URL"
                type="url"
                required
                placeholder="Enter Url Here"
                value={longUrl}
                onChange={(e) => setLongUrl(e.target.value)}
        />
    </Stack>
    <Stack sx={styles.stackCenter} paddingTop paddingBottom direction={'row'} spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
        <Button style={{backgroundColor: '#078080'}} className='button' variant='contained' startIcon={<ClearIcon/>} onClick={clearInput}>Clear</Button>
        <Button style={{backgroundColor: '#078080'}} className='button' variant='contained' type="submit" size='large'>
            Shorten Url
        </Button>
    </Stack>
</form>
                <Typography paddingBottom type="text" id="url">http://localhost:8040/url/{shortUrl}</Typography>
                <Button style={{backgroundColor: '#078080'}} className='copyButton' variant='contained' startIcon={<ContentCopyIcon/>} onClick={(e) => copyElementText("url")}>Copy Short Url</Button>
                </Box>

);

};

export default AddUrl;