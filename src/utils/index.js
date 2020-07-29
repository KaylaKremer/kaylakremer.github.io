export const updateState = (oldState, newState) => {
    return {
        ...oldState,
        ...newState
    };
};

export const capitalize = str =>
    str.replace(/^\w/, letter => letter.toUpperCase());
