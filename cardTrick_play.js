'use strict'; //don't let node silently create global variables
//install json and cards packages in node
const promtSync = require('prompt-sync')({ sigint: true });
const { decks } = require('cards');//object destructuring

const SUIT_SYMBOLS = {
    clubs: '♣',
    diamonds: '♦',
    spades: '♠',
    hearts: '♥',
  };

function initializeCardRows() {
    const deck = new decks.StandardDeck();
    deck.shuffleAll();

    //new container to hold cards
    const cardRows = [];
    cardRows.push(deck.draw(7));
    cardRows.push(deck.draw(7));
    cardRows.push(deck.draw(7));
    return cardRows;
}
//function that takes card obj from deck array turn into num + suit
function cardToSymbol(card) {
    return card.rank.shortName + SUIT_SYMBOLS[card.suit.name];
}

//function that will render whole set of cards into 3 rows
function renderCardRows(cardRows) {
    cardRows.forEach(function (cardRow, i) {
        const cardSymbols = cardRow.map(cardToSymbol);
        const cardRowString = cardSymbols.join(`\t`);
        console.log(`Row ${i + 1}: ${cardRowString}`)
    });
}

//function that'll promt user for row index
function promptForRowIndex() {
    let rowNumber;
    while(!(rowNumber >= 1 && rowNumber<= 3)) {
        rowNumber = promptSync('Which Row Is Your Card In? ');
        rowNumber = parseInt(rowNumber); 
    }
    return rowNumber - 1;
}

function reDealCardRows(cardRows, selectedRowIndex ) {
    const selectedRow = cardRows.splice(selectedRowIndex, 1)[0];
    const pileOfCards = [
        ...cardRows[0],
        ...selectedRow,
        ...cardRows[1],
    ];

    const newRows = [[], [], []];
    for (let i =0; i < 21; i++) {
        newRows[i % 3].push(pileOfCards[i]);
    }

    return newRows;
}

function doTheTrick() {
    let cardRows = initializeCardRows();
    console.log('Pick a card and remember it.');

    for(let i = 0; i < 2; i++) {
        reenderCardRows(cardRows);
        const selectedRowIndex = promptForRowIndex();
        cardRows = reDealCardRows(cardRows, selectedRowIndex);
    }

    let selectedRowIndex;
    while(selectedRow != 1) {
        renderCardRows(cardRows);
        selectedRow = promptForRowIndex();
        cardRows = reDealCardRows(cardRows, selectedRow);
    }

    const userCard = cardRows[1][3];
    console.log(`Your card is: ${cardToSymbol(userCard)}`);
}

doTheTrick();




const newRows = initializeCardRows();

const newTest = promtForRowIndex();
console.log(rowTest);


//console.log(renderCardRows(newRows));
//const cardSymbolTest = cardToSymbol(newRows[0][0]);
//console.log(cardSymbolTest);


//console.log('6' + SUIT_SYMBOLS.clubs);

//const test = promtSync('What is up?');
//console.log(decks);