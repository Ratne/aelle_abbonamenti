export default (config: any) => {
    if (typeof localStorage !== "undefined"){
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.token = token;
        }
    }
    return config;
};
