import { read } from "fs";
import fs from "fs/promises";

const writeFile = async (File) => {
    try {
        const data = await fs.readFile(File, "utf-8");
        console.log(data);
    } catch (err) {
        console.error("unable to read file:", err);
    }
} ;



