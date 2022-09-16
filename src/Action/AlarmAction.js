export function setAlarmMusic(source) {

    return (dispatch, getState) => {
        dispatch({
            type: 'set_alarm_music',
            payload: source
        });

    }
}

export function setDefaultAlarmMusic() {

    return (dispatch, getState) => {
        dispatch({
            type: 'set_default_alarm_music',
        });

    }
}