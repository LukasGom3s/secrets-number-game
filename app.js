let listDraftNumbers = [];
let limitNumber = 10;
let secretnumber = generateRandomNumber();
let attempts = 1;
inicialMessage();

function changeText(tag, text) {
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
    responsiveVoice.speak(text, 'Brazilian Portuguese Female', {rate:1.2});
}

function inicialMessage(){
changeText('h1', 'Secrets number game');
changeText('p', 'Select a number between 1 and 10');
}

function checkAttempt() {
    let attempt = document.querySelector('input').value;
    if (attempt == secretnumber) {
        changeText('h1', 'Nice, you got it right');
        let wordAttempt = attempts > 1 ? 'attempts' : 'attempt';
        let messageAttempts = `You got right the secret number with ${attempts} ${wordAttempt}.`;
        changeText('p', messageAttempts);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (attempt > secretnumber) {
        changeText('p', 'The secret number is smaller');
        changeText('h1', 'You missed');
        attempts++;
    } else if (attempt < secretnumber) {
        changeText('p', 'The secret number is bigger');
        changeText('h1', 'You missed');
        attempts++;
    }
    cleanCamp();
}

function generateRandomNumber() {
    let chosenNumber = parseInt(Math.random() * limitNumber + 1);
    let numberElementsOnTheList = listDraftNumbers.length;
    if(numberElementsOnTheList == limitNumber)
    {
        listDraftNumbers = [];
    }
    if(listDraftNumbers.includes(chosenNumber)){
        return generateRandomNumber();
    }else {
        listDraftNumbers.push(chosenNumber);
        return chosenNumber;
    }
}

function cleanCamp() {
    attempt = document.querySelector('input');
    attempt.value = '';
}

function restartGame()
{
    secretnumber = generateRandomNumber();
    cleanCamp();
    attempts = 1;
    inicialMessage();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}