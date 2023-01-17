export const isHTML = (str: any) => {
    const a = document.createElement('div');
    a.innerHTML = str;

    for (let c = a.childNodes, i = c.length; i--; ) {
        if (c[i].nodeType == 1) return true;
    }

    return false;
}

export const mergeClass = (first = "", second = ""): string => {
    return [first, second].join(" ").trim();
};
export const classByArray = (arr: string[]): string => {
    return arr.join(" ");
};

export const classForComponents = (name: string, arr: string[] = []) => {
    return classByArray(['sh', name, ...arr]);
}
