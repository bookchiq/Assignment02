function wordTranslator() {
    // Prompt the user for a language code.
    let languageCode = prompt("Enter a language code (es, de, en, fr):");

    // Set up the language phrases.
    let frenchPhrase = '"Hello World" translated to French is: Bonjour le monde!';
    let spanishPhrase = '"Hello World" translated to Spanish is: ¡Hola Mundo!';
    let germanPhrase = '"Hello World" translated to German is: Hallo Welt!';
    let englishPhrase = "Hello World!";

    // Translate the word "Hello World!" into the language specified by the user.
    if (languageCode === "fr") {
        document.getElementById("output").innerHTML = frenchPhrase;
    }
    else if (languageCode === "es") {
        document.getElementById("output").innerHTML = spanishPhrase;
    }
    else if (languageCode === "de") {
        document.getElementById("output").innerHTML = germanPhrase;
    }
    else {
        // Default to English.
        document.getElementById("output").innerHTML = englishPhrase;
    }
}