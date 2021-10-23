// this is mean't to reduce the number of calls made to the API. 
const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
       timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};