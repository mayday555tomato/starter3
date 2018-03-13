import fetch from 'node-fetch';

function getFoodData() {
    return fetch('/api/jokes/food').then(res => res.data);
}

function getCelebrityData() {
    return fetch('/api/jokes/celebrity').then(res => res.data);
}

function getUserData() {
    return fetch('/users').then(res => res.data);
}

export {getFoodData, getCelebrityData, getUserData};