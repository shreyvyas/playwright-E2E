import xlsx from 'xlsx';

export function readExcel(filepath, sheetname){

    const workbook = xlsx.readFile(filepath);

    const sheet = workbook.Sheets[sheetname];

    return xlsx.utils.sheet_to_json(sheet);

}