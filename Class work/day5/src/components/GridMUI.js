
import { Grid ,Paper} from "@mui/material";
import React from "react";

const GridMUI=()=>{

    return (
        <div>
            <Paper elevation={5}>
                <Grid Container spacing={5}>
                    <Grid sx={{backgroundColor:"red"}} item xs={4}>
                     <h1>Grid -1</h1>
                    </Grid>
                    <Grid sx={{backgroundColor:"blue"}} item xs={4}>
                       <h1>Grid -2</h1>
                    </Grid>
                    <Grid sx={{backgroundColor:"green"}} item xs={4}>
                        <h1>Grid -3</h1>
                    </Grid>
                    <Grid sx={{backgroundColor:"yellow"}} item xs={4}>
                        <h1>Grid -4</h1>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
export default GridMUI;