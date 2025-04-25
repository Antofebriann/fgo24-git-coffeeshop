import fetch from 'node-fetch';

const url = 'https://raw.githubusercontent.com/Antofebriann/fgo24-node-datasource/main/listMenu.json';

export async function fetchMenu() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching menu:", error);
        return null;
    }
}