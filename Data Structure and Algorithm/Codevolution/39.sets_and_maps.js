/**
 * Sets => Set is a collection of unique values.
 */

const set = new Set([1, 2, 3]);

// add new value, duplicate value never been added. 
set.add(4);
set.add(5);

set.has(4);       // check the value is exist
set.delete(5);   // remove value 
set.size;       // length of Set
set.clear();   // clear all value 





/**
 * Map => Map is an unordered collection of key-value pairs.
 */

const map = new Map([['name', 'shohan'], ['age', '23']]);


// add new value, duplicate value never been added. ;
map.set('city', 'pabna');

map.has(4);       // check the value is exist
map.delete(5);   // remove value 
map.size;       // length of map
map.clear();   // clear all value 

// how iterate the Map
for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}