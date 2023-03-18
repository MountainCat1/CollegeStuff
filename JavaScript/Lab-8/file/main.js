const fileInput = document.querySelector("input[type=file]");
const output = document.querySelector('.output');
const img = document.getElementById('img');
const mediaType = document.getElementById("type");

fileInput.addEventListener("change", () => {
    const [file] = fileInput.files;
    if (file) {
        const reader = new FileReader();
        reader.addEventListener("load", () => onLoad(reader));


        switch(mediaType.value){
            case "text":
                reader.readAsText(file);
                break;
            case "image":
                reader.readAsDataURL(file);
                break;
        }
    }
});

function onLoad(reader) {
    switch (mediaType.value) {
        case "text":
            output.append(constructTable(reader.result))
            // output.innerText = reader.result;
            break;
        case "image":
            img.src = reader.result;
            break;
    }
}

function constructTable(jsonText){
    let array = JSON.parse( jsonText );
    console.log(array)

    let tableNode = document.createElement("table");

    for (let i = 0; i < array.length; i++) {
        let person = array[i];

        let row = tableNode.insertRow(i);

        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);

        cell1.innerHTML = person.name;
        cell2.innerHTML = person.points;
    }

    return tableNode
}

