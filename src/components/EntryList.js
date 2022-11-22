import axios from "axios";
import './Design.css';
// import '../App.css';
// import {createUseStyles} from 'react-jss';

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
            <div className="entrypreview" key={entry.id}>
                    <b>Long Url</b> <div className="entryValue"> {entry.longUrl}</div>
                    <b>Short Url</b> <div className="entryValue"><a href={entry.longUrl}>http://localhost:8040/url/{entry.shortUrl}</a></div>
                    <b>Created</b>
                    <div className="entryValue">{entry.createdOn}</div>
            </div>
        ))}
        <div className="button">
             <button className="deleteAllUrlsButton"
        onClick={(e) => deleteAllUrls(e)}>Clear History</button>
        </div>
    </div>
    );
};

export default EntryList;