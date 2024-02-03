const array = [
    { field: 'id', operator: 'eq' },
    { field: 'cStatus', operator: 'eq' },
    { field: 'money', operator: 'eq' },
];

const filterField = 'money';

function removeArrayElement(filterField) {
    // write your solution here

    return array.filter((obj) => obj.field !== filterField);
}

console.log(removeArrayElement(filterField));
