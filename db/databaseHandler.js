import { DatabaseError } from "../errors/DatabaseError.js";

const databaseHandler = (func, errorMessage = 'Error code 500: Database error') => {
    return async (...args) => {
        console.log(...args);
        const funcReturn = func(...args);
        return Promise.resolve(funcReturn).catch(() => {
            throw new DatabaseError(errorMessage);
        })
    }
}

export { databaseHandler }