document.addEventListener('DOMContentLoaded', function() {
    const game = document.querySelector('.game');
    const msg = document.querySelector('.msg'),
        num = document.querySelector('.num'),
        guess = document.querySelector('.guess');
        const score = document.querySelector('.score');
        
        
        const min = 0;
        const max = 20;
        window.handlerCheck = () => {
        const numScore = score.value;
        let valueInputGuess = guess.value;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        num.innerHTML = randomNumber;
        if (valueInputGuess === "") {
            alert("please input number!");
        } else {
            valueInputGuess = Number(valueInputGuess);
            if (valueInputGuess === randomNumber) {
                game.style.background = '#14ff27';
                score.value += 1;
            } else {
                game.style.background = '#fd0000';
                if (numScore == 0) {
                    score.value == 0;
                } else {
                    score.value -= 1;
                }
            }
        }
    }

    window.handlerRestore = () => {
        score.value = 0;
        num.innerHTML = 0;
        game.style.background = '#222';
        guess.value = "";
    }
})