export const initialState = {
    time: 25 * 60,
    settings: {
        time: {
            pomodoro: 25,
            'short break': 5,
            'long break': 15,
        },
        font: 'Kumbh Sans',
        color: '#F87070',
    },
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
    }
};
