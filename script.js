let quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "The only way to do great work is to love what you do.",
    "In three words I can sum up everything I've learned about life: It goes on.",
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "Be yourself; everyone else is already taken.",
    "Life is what happens when you're busy making other plans.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you."
  ];

let authors = [
"Franklin D. Roosevelt",
"Winston Churchill",
"Steve Jobs",
"Robert Frost",
"Theodore Roosevelt",
"Eleanor Roosevelt",
"Nelson Mandela",
"Oscar Wilde",
"John Lennon",
"Brian Tracy"
];

window.onload = function() {
  alert("Hover over the quote to see who said it");
};

document.getElementById('newquotebtn').addEventListener('click', function(){
    let index=Math.floor(Math.random()*10);
    let quote=quotes[index];
    let author=authors[index];

    document.getElementsByClassName('front')[0].innerHTML=`<h1>${quote}</h1>`;
    document.getElementsByClassName('back')[0].innerHTML=`<h1>${author}</h1>`;
})