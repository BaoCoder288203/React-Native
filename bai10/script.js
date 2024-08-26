document.addEventListener('DOMContentLoaded', function() {
    const game = document.querySelector('.game');
    const msg = document.querySelector('.msg'),
        num = document.querySelector('.num'),
        guess = document.querySelector('.guess');
    let score = document.querySelector('score');


    const min = 0;
    const max = 20;
    window.handlerCheck = () => {
        let numScore = Number(score.textContent);
        let valueInputGuess = guess.value;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        num.innerHTML = randomNumber;
        if (valueInputGuess === "") {
            alert("please input number!");
        } else {
            valueInputGuess = Number(valueInputGuess);
            if (valueInputGuess === randomNumber) {
                game.style.background = '#14ff27';
                score.textContent = Number(score.textContent) + 1;
            } else {
                game.style.background = '#fd0000';
                if (numScore == 0) {
                    score.textContent = '00';
                } else {
                    score.textContent = Number(score.textContent) - 1;
                }
            }
        }
    }
    window.handlerRestore = () => {
        score = 0;
        scoreElement.textContent = score;
        game.style.background = '#222';
        guess.value = "";
    }
})