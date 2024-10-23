function analyzeSentence(sentence) {
    
    if (sentence[sentence.length - 1] !== '.') {
        return "La phrase doit se terminer par un point.";
    }

    let length = 0; 
    let wordCount = 0; 
    let vowelCount = 0; 
    const vowels = 'aeiouyAEIOUY'; 


    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        length++;


        if (vowels.includes(char)) {
            vowelCount++;
        }

    
        if (char === ' ') {
        
            if (i > 0 && sentence[i - 1] !== ' ') {
                wordCount++;
            }
        }
    }

    if (length > 1) {
        wordCount++;
    }


    console.log("Longueur de la phrase : " + length);
    console.log("Nombre de mots : " + wordCount);
    console.log("Nombre de voyelles : " + vowelCount);
}


const phrase = "Bonjour, comment ça va."; 
analyzeSentence(phrase);
