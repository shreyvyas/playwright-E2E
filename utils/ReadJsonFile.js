import fs from fs;

export function readJson(filePath){

    const raw = fs.readFileSync(filePath, 'utf-8');

    return json.parse(raw);

}