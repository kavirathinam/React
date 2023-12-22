import React from "react";
import { Button,Paper } from "@mui/material";

const ButtonMUI = () => {
    return (
        <div>
            <Paper elevation={5}>
                <Button variant="text">variant text</Button>
                <Button variant="outlined">variant outlined</Button>
                <Button variant="contained">variant contained</Button>
                <Button color="primary" variant="contained">Primary</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="success">Success</Button>
                <Button color="error" variant="contained">Error</Button>
            </Paper>
        </div>
    )
};
export default ButtonMUI;