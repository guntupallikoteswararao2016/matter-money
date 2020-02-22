
export default async (url, options={}) =>{
    let fetchOptions= {};
    const defaultHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    fetchOptions.headers = {
        ...defaultHeaders,
        ...options
    };
    let data = await fetch(url,fetchOptions.headers);
    return data;

}
