
fetchUserData("Max")
.then(data => parseData(data))
.catch(reason => console.log(reason.message))

function parseData(data) {
    console.log(data.Items);
    for (let i = 0; i < data.Items.length; i++) {
        handleItem(data.Items[i])
    }
}

function handleItem(item) {
    let today = new Date();
    let diffDays = getDiffInDays(today, item.badDate)
    addItemToGraph(item, diffDays)
}

function getDiffInDays(today, badDate) { //make timezone compatibility?
    badDate = Date.parse(badDate);
    const diffTime = badDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    console.log(diffDays + " days");
}

function addItemToGraph(item, diffDays) {
    
}
async function fetchUserData (user) {
    let headers = new Headers();

    let myRequest = new Request('http://localhost:8080/sql/getItemsFrom?user=' + user, {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default',
    });
    let response = await fetch(myRequest)
    let data = await response.json();
    return data;
}