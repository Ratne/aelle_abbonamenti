export const getBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader:any = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error: any) => reject(error);
    });
}

export const getBase64ToString = (file: any) => {
    return new Promise((resolve, reject) => {
        const reader: any = new FileReader();

        reader.onload = () => resolve(reader.result
            .replace("data:", "")
            .replace(/^.+,/, ""));
        reader.onerror = (error: any) => reject(error);
        reader.readAsDataURL(file);

    });
}

export const b64toBlob = (base64: string, type = 'application/octet-stream') =>
    fetch(`data:${type};base64,${base64}`).then(res => res.blob())
