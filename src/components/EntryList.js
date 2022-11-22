import axios from "axios";

const EntryList = (props) => {
    console.log(props);

    const deleteAllUrls = (e) => {
        e.preventDefault();

        axios
            .delete("http://localhost:8040/url/all")
            .catch((error) => {
                console.log(error);
            });
    };

return(
    <div className="entry-list">
        {props.entries.map((entry) => (
            <div className="entry-preview" key={entry.id}>
                <p>
                    <b>Long Url</b> <div className="entryValue"> {entry.longUrl}</div>
                </p>
                <p>
                    <b>Short Url</b> <div className="entryValue"><a href={entry.longUrl}>http://localhost:8040/url/{entry.shortUrl}</a></div>
                </p>
                <p>
                    <b>Created</b>
                    <div className="entryValue">{entry.createdAt}</div>
                </p>
                <div className="indivdualButtons">
                    <button className="deleteAllUrlsButton"
                    onClick={(e) => deleteAllUrls(e)}>Delete All</button>
                </div>
            </div>
        ))}
    </div>
    );
};

export default EntryList;