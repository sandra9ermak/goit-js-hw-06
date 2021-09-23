"use strict";

const amountOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${amountOfCategories.length}`);

document.querySelectorAll('.item').forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}\n` +
        `Elements: ${item.querySelectorAll('li').length}`);
});