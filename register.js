import { ReadFile, WriteFile } from "./helper.js";

const register = async (userDetails, FILE) => {  
    const { name, email, password, gender } = userDetails;  

    if (!name || !email || !password || !gender)
        return { message: "All fields are required" };


    const users = await ReadFile(FILE);

    const existingUser = users.find((user) => user.email === email);
    if (existingUser)
        return { message: "User already exists" };
    let updatedUsers = [];

    
    users.length === 0
        ? [userDetails]          
        : [...users, userDetails]; 

    const response = await WriteFile(FILE, updatedUsers);
    return response;
};
register({ name: "xyz", email: "xyz@gmail.com", password: "123456", gender: "male" }, "users.json").then((res) => console.log(res));
export default register;
