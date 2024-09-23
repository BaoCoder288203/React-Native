document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('#text');
    const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    
    registerNewAnswer(){
        do {
            const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}`));
        
            if (answer >= 0 && answer < this.options.length && typeof answer === 'number') {
                this.answers[answer]++;
                break; 
            } else {
                alert('Lựa chọn không hợp lệ. Vui lòng thử lại.');
            }
        } while (true); 
        this.displayResults();
    },

    displayResults(type = 'string'){
        let rs;
        const textElement = document.querySelector('#text');
        if (type === 'string') {
            textElement.innerText = `Poll results are ${this.answers.join(', ')}`;
            rs = `Poll results are ${this.answers.join(', ')}`;
        } else if (type === 'array') {
            textElement.innerText = this.answers;
            rs = this.answers;
        }
        return rs;
    }

};

document.querySelector('.btn').addEventListener('click', ()=>{
    poll.registerNewAnswer();
})
const testArray1 = [5, 2, 3];
const testArray2 = [1, 5, 3, 9, 6];

textElement.innerText += poll.displayResults.call({ answers: testArray1 }, 'array') + '\n';
textElement.innerText += poll.displayResults.call({ answers: testArray2 }, 'array') + '\n';

textElement.innerText += poll.displayResults.call({ answers: testArray1 }, 'string') + '\n';
textElement.innerText += poll.displayResults.call({ answers: testArray2 }, 'string') + '\n';


});