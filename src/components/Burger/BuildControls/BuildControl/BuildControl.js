import React from 'react';
import classes from './BuildControl.css'

const buildControl = ( props ) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More} onClick={props.added}>More</button> 
    </div>
) // 133 starting at 7:26 to understand the more button

export default buildControl;