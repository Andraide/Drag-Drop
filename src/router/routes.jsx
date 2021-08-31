import Reac from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import CustomFormHook from "../screens/CustomForm/CustomFormHooks";


export default function Routes() 
{
    return (
            <Switch>                  
                <Route exact path= "/" component={CustomFormHook}></Route>
            </Switch>
    )
}
