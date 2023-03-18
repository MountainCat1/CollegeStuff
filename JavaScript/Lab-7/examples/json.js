/**
 * Serializacja to zamiana obiektów JS na łańcuch, który znak po znaku może zostać przesłany strumieniem.
 * Deserializacja to zamiana łańcucha na obiekt JS.
 * JSON to łańcuch opisujący obiekt JS. 
 */
let obj = {
    authors: ["Adam", "Ewa"],
    content: "Hello from JavaScript",
    createdAt: new Date(),
};
console.log("default serialization")
const serializedObj = JSON.stringify(obj);
console.dir(serializedObj);
/**
 *  Serializując obiekt można pominąć wybrane składowe. Drugi parametr
 *  może zawierać listę właściwości, które zostaną zserialozowane, nie wymienione
 *  nie zostaaą uwzględnione w JSON
 *  Brak drugiego parametru oznacza serializację wszystkich właściwości.
 */
const serializedObjView = JSON.stringify(obj, ["content", "createdAt"]);
console.log("custom serialization")
console.dir(serializedObjView);
console.log("serialization with replacer");
const replacedObjView = JSON.stringify(obj, (key, value) => {
    if (key === "content"){
        return value.toUpperCase();
    }
    return value;
});
console.dir(replacedObjView);
/**
 * Trzecim parametrem funkcji serializacji jest znak, któy zostanie użyty do formatowania
 * JSON w celu poprawienie czytelności. Domyślnie łańcuch JSON nie zawiera żadnych znaków nowej linii, spacji, tabulatorów.
 */
console.log("serialization with space - readability improved")
const serializedObjLine = JSON.stringify(obj,null,"\t");
console.dir(serializedObjLine);
const objStr = '{"title": "JavaScript", "author": "Adam Adamski", "published":"2020-10-10"}';

const parsedObj = JSON.parse(objStr);
console.log("default deserialization")
console.dir(parsedObj);
console.log(typeof parsedObj.published);
/**
 * Podczas parsowanie można podać drugi parametr, który jest funkcją z dwoma argumentami
 * pierwszy key to klucz w parsownaych łańcuchu
 * drugi value to wartość tego klucza
 * Zadaniem funkcji jest wykonanie dodatkowych czynności w trakcie parsowania np.
 * wybraną właściwość można zamienić na żądany obiekt
 */
console.log("custom deserialization - conversion string properties to Date object" )
const parsedObjWithDate = JSON.parse(objStr, (key, value) => {
    if (key === "published"){               //jeśli w parsowanym JSON występuje właściwość "published"
        return new Date(value);             //jej wartość w obiekcie zostanie zamieniona na obiekt Fate
    }else {
        return value;
    }
});
console.dir(parsedObjWithDate);
/**
 * Definiując w obiekcie metodę toJSON() można decydować o postaci obiektu po serializacji
 */
obj = {
    authors: ["Adam", "Ewa"],
    content: "Hello from JavaScript",
    createdAt: new Date(),
    toJSON(){
        return {authors: this.authors, content: this.content.toUpperCase(), createdAt: this.createdAt.valueOf()};
    }
};
console.log("custom to JSON");
console.dir(JSON.stringify(obj));
