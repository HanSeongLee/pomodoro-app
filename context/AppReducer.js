export const initialState = {
    time: 25 * 60,
    mode: 'pomodoro',
    settings: {
        time: {
            pomodoro: 25,
            'short break': 5,
            'long break': 15,
        },
        font: 'Kumbh Sans',
        color: '#F87070',
    },
    start: false,
};

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'set_time': {
            return {
                ...state,
                time: action.value,
            };
        }
        case 'set_settings': {
            return {
                ...state,
                settings: {
                    ...action.value,
                },
            };
        }
        case 'set_mode': {
            return {
                ...state,
                mode: action.value,
                start: false,
            };
        }
        case 'timer_start': {
            return {
                ...state,
                start: true,
            }
        }
        case 'timer_pause': {
            return {
                ...state,
                start: false,
            }
        }
        case 'timer_restart': {
            return {
                ...state,
                time: state.settings.time[state.mode] * 60,
                start: true,
            }
        }
        case 'tick': {
            return {
                ...state,
                time: state.time > 0 ? state.time - 1 : 0,
            }
        }
    }
};
