import { TextField } from '@material-ui/core';

function ElementDialogue(props) {
    return (
        <TextField
            disabled
            id="outlined-basic"
            label="Generated dialogue"
            variant="outlined"
            multiline
            defaultValue="Generated dialogue will soon appear here..."
            rows={15}
            value={props.generatedDialogue}
        />
    );
}

export default ElementDialogue;
