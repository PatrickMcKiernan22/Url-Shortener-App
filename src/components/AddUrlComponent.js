import React, { useState } from 'react'

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
            .then((response) => response.json())
            .then((data) => setShortUrl(data.response.shortUrl));
    };


return(
    <div>
        <main>
            <section className='w-100 d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mb-2 fs-1'>URL Shortener</h1>
                <form className='w-50' onSubmit={onSubmit}>
                    <input
                        className='w-100 border border-primary p-2 mb-2 fs-3 h-25'
                        type="url"
                        required
                        placeholder="Enter Url Here"
                        value={longUrl}
                        onChange={(e) => setLongUrl(e.target.value)}
                    />
                    <div class="d-grip gap-2 col-6 mx-auto">
                        <button type="submit" className="btn btn-danger m-5">
                            Enter
                        </button>
                    </div>
                </form>
            </section>
        </main>
    </div>
);
};

export default AddUrl;