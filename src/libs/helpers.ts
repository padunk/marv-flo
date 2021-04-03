export const sanitizeIGCaption = (caption: string): string => {
    let result = "";

    // remove @string
    result = caption.replace(/\@\w+/g, "");

    // remove #string
    result = result.replace(/\#\w+/g, "");

    // remove Reposted from
    result = result.replace("Reposted from", "");

    // trim the left and right space
    result = result.trim();

    return result;
};

export const debounce = (fn: () => void, timeout: number) => {
    let id: number;
    return function () {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(fn, timeout);
    };
};
