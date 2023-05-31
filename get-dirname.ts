import { dirname } from 'path';

export function getDirname() {
    const { stack } = new Error();
    
    const [ , , stackLine ] = stack.split('\n');
    
    const [ , filePath ] = stackLine.match(/\(?file:\/\/(.+?)\:\d+\:\d+\)?$/) ?? [];
    
    return dirname(filePath);
}
