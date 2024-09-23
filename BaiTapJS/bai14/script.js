document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('#convertBtn');
    button.addEventListener('click',()=>{
        const inputText = document.querySelector('#inputText').value;
        const lines = inputText.split('\n');
        let outputText = '';

        for (let i = 0; i < lines.length; i++) {
            let word1 = lines[i].trim().split('_');
            let firstWord = word1[0];

            for (let j = 1; j < word1.length; j++) {
                firstWord += word1[j][0].toUpperCase() + word1[j].slice(1);                 
            }
            outputText += firstWord + '✅'.repeat(i + 1) + '\n';
        }

        document.querySelector('#outputText').innerText = outputText.trim();
    })
})