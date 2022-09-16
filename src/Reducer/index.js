import { combineReducers } from "redux";
import { setAlarmMusic } from "./AlarmReducer";

export default combineReducers(
    {
        setAlarmMusic: setAlarmMusic,
    }

)