function getQueryString(query: string): string {
    const urlParams = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => {
            return searchParams.get(prop);
        }
    });
    return urlParams[query];
}

export { getQueryString };
