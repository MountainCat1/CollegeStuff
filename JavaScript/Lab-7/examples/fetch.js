const url = "https://jsonplaceholder.typicode.com/photos";
const option = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};
fetch( url, option)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw "no ok with status " + response.status;
    })
    .then(json => {
        console.dir(json)
    })
    .catch(e => {
        console.log(e);
    });