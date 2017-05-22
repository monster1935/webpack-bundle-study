console.log('test1 is loaded');
console.log('before test2');
test2();
import {test2} from './test2.js';
console.log('test2 load end');
function test1 () {
    console.log('this is in test1 export function');
}

export {test1};
