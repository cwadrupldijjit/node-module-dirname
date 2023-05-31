import { dirname } from 'path';

export function getDirname() {
    const { stack } = new Error();
    
    const [ , , stackLine ] = stack.split('\n');
    
    const [ , filePath ] = stackLine.match(/\(?file:\/\/(.+?)\:\d+\:\d+\)?$/) ?? [];
    
    // this removes the extra leading slash from the resulting path because it's problematic on Windows
    return dirname(filePath).slice(process.platform == 'win32' ? 1 : 0);
}
