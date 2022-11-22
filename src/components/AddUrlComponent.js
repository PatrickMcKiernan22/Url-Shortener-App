import React, { useState } from 'react'
import './Design.css';

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
    // let link = document.getElementsByClassName("link").innerHTML;
    // console.log(link);
    const copyLink = async () =>{
       var copy = document.getElementById("text").value;
       navigator.clipboard.writeText(copy).then(() => {
        console.log(copy);
        alert("Copied");
       });
    }

    function copyElementText(id) {

        var text = document.getElementById(id).innerText;
    
        var elem = document.createElement("textarea");
    
        document.body.appendChild(elem);
    
        elem.value = text;
    
        elem.select();
    
        document.execCommand("copy");
    
        document.body.removeChild(elem);
    
    }





return(
<div className='form'>
    <container >
        <main>
            <section className='w-100 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='title'>URL Shortener</h1>
                <form className='w-50' onSubmit={onSubmit}>
                    <input
                        className='w-100 border border-primary p-2 mb-2 fs-3 h-25'
                        type="url"
                        required
                        placeholder="Enter Url Here"
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                    />
                    <div class="submitButton">
                        <button type="submit" className="addbutton">
                            Shorten Url
                        </button>
                    </div>
                </form>
                <p type="text" id="url" className='link'>http://localhost:8040/url/{shortUrl}</p>
                <button className='addbutton' onClick={(e) => copyElementText("url")}>Copy<i class="fa fa-copy"></i></button>
            </section>
        </main>
    </container>
</div>
);

};

export default AddUrl;