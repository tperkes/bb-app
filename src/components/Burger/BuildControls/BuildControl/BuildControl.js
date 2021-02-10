import React from 'react';
import buildControls from '../BuildControls';
import classes from './buildControl.css'

const buildControl = ( props ) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.iglabel}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
)

export default buildControls;