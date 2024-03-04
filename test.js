import { fetchItems, fetchReviews } from "./app/lib/data.js"

// test.js
async function testFetchData() {
    try {
        const items = await fetchItems();
        console.log('Fetched Items:', items);

        const reviews = await fetchReviews();
        console.log('Fetched Reviews:', reviews);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testFetchData();
