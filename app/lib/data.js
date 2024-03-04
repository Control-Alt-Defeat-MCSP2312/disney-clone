import pkg from 'pg';
const { Pool } = pkg;


export async function fetchItems() {
    try {
        console.log("Fetching data...");
        const data = await Pool `SELECT * FROM item`;
        console.log("Items fetched:", data);  // Log the entire data object
        console.log("Items fetched:", data.rows);  // Log only the rows
        return data.rows;
    } catch (err) {
        console.error("Database error: ", err);
        throw new Error("Failed to fetch item data");
    }
}

export async function fetchReviews() {
    try {
        console.log("Fetching data...");
        const data = await Pool `SELECT * FROM reviews`;
        console.log("Reviews fetched:", data);  // Log the entire data object
        console.log("Reviews fetched:", data.rows);  // Log only the rows
        return data.rows;
    } catch (err) {
        console.error("Database error: ", err);
        throw new Error("Failed to fetch reviews data");
    }
}
