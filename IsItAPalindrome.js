'use strict'

//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(word) {
    return word.toLowerCase() === word.split('').reverse().join('').toLowerCase();
}