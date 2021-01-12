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
            rows={100}
            value={props.generatedDialogue}
            size="big"
        />
    );
}

export default ElementDialogue;
