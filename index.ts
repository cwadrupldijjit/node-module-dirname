import { getDirname } from './get-dirname.js';

try {
    eval('console.log(\'__dirname should not work here:\', __dirname)');
}
catch (error) {
    console.log('__dirname by itself doesn\'t work, as expected');
}

const __exampleDirname = getDirname();

console.log('__dirname should point to this file\'s directory:', __exampleDirname);
