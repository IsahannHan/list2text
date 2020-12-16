import { TextField } from '@material-ui/core';

function ElementDisplay() {
    return (
        <TextField
            disabled
            id="outlined-basic"
            label="Generated dialogue"
            variant="outlined"
            multiline
            defaultValue="Generated dialogue will soon appear here..."
            rows={5}
        />
    );
}

export default ElementDisplay;
