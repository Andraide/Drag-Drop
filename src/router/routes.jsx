import React from 'react';
import { Switch, Route, } from "react-router-dom";
import { DragNDrop } from "@/screens";


export default function Routes() 
{
    return (
            <Switch>                  
                <Route exact path= "/" component= {DragNDrop}></Route>
            </Switch>
    )
}