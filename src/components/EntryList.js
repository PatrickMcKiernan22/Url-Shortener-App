import axios from "axios";
import './Design.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from "@mui/system";
import {Divider, Typography } from "@mui/material";
import {Link} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
// import '../App.css';


const EntryList = (props) => {
    console.log(props);

    const deleteAllUrls = (e) => {
        e.preventDefault();

        axios
            .delete("http://localhost:8040/url/all")
            .catch((error) => {
                console.log(error);
            });
            window.location.reload();
    };

return(
    <Box paddingTop sx={{
        alignItems: 'center',
        margin: 'auto',
        width: 500,
        height: 250,
    }}>
        {props.entries.map((entry) => (
            <Stack paddingBottom direction={'column'} spacing={.75} sx={{
                width: 500,
                wordWrap: 'break-word',
                borderRadius: 'black',
                alignItems: 'center',
                backgroundColor: '#fffffe',
                color:'#2b2c34',
                margin: 'auto'
            }} key={entry.id}>
                <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
                        Long Url <br/>
                </Typography>
                <Typography sx={{ width: 450, wordWrap:'break-word'}}> 
                {entry.longUrl}
                </Typography>
                 <Typography variant="h6" sx={{ fontWeight: 'bold'}} >
                    Short Url
                </Typography> 
                <Typography> 
                    <Link href={entry.longUrl}>
                        http://localhost:8040/url/{entry.shortUrl}
                    </Link>
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold'}}>
                    Created
                </Typography>
                <Typography>{entry.createdOn}</Typography>
              <Divider orientation='horizontal' color='#2b2c34' flexItem/>
            </Stack>
        ))}
             <Button style={{backgroundColor: '#078080'}} variant="contained" startIcon={<DeleteIcon/>} 
        onClick={(e) => deleteAllUrls(e)}>Delete All</Button>
    </Box>
    );
};

export default EntryList;