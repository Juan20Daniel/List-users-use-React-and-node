export function users(url) {
    return fetch(url,{
        method:'GET',
        headers: {
            "Content-Type":"application/json"
        }
    }).then(res => {
        return res.json();
    }).then(data => {
        return data
    }).catch((err) => {
        console.log(err);
    })
}