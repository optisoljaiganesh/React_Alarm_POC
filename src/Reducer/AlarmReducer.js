const INITIAL_STATE = {

    alarmMusic: null,


};


export function setAlarmMusic(state = INITIAL_STATE, action) {

    switch (action.type) {

        case 'set_alarm_music':

            return {
                ...state,
                alarmMusic: action.payload,

            };

        case "set_default_alarm_music":
            return {
                ...state,
                alarmMusic: null,

            };

        default:

            return state;

    }

}