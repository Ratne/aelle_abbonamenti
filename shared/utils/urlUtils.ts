export const getParameter = (paramName: string) => {
    let searchString = window.location.search.substring(1),
        i,
        val,
        params = searchString.split('&');
    for (i = 0; i < params.length; i++) {
        val = params[i].split('=');
        if (val[0] == paramName) {
            return val[1];
        }
    }
    return null;
}


export const getUrl = () => {
    const url = window.location.origin + window.location.pathname;
    return url.includes('localhost:') ? process.env.REACT_APP_URL_BASE + url.substring(window.location.href.indexOf('localhost:') + 14): url;
}
