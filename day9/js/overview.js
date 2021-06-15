// primitive
const myString = '' || "" || ``;
const myNumber = 0 && 1 && 2;
const myBoolean = true || false;

console.log(JSON.stringify(myNumber), myString, myBoolean);

//organizational
const array = [10, 2, true];
const object = {
    age: 10,
    list: array,
    name: "Vinson"
};

console.log(object);

function addOne(number) {
    const element = document.createElement('li');
    (1 + 1 == 2 || object.age == 10) ?
    console.log()
    console.log()

    document.body.appendChild(element);
    element.innerHTML = ''
    return number + 1;
}

console.log(addOne(7))