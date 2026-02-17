import fs from "fs";

const appendFilesync = (fileName, data) => {
    try {
        fs.appendFileSync(fileName, data);
        console.log("Data appended successfully");
    } catch (err) {
        console.error("Error appending file:", err);
    }
};

const writeFilesync = (fileName, data) => {
    try {
        fs.writeFileSync(fileName, data);
        console.log("File written successfully");
    } catch (err) {
        console.error("Error writing file:", err);
    }
};

function runExample() {
    const filename = "output.txt";
    const dataToAppend = "This is some appended data.\n";
    const dataToWrite = "This is some new data that will overwrite the file.\n";
}