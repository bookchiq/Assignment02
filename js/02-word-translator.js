function wordTranslator() {
    // Prompt the user for a language code.
    let languageCode = prompt("Enter a language code (es, de, en, fr):");

    // Set up the language phrases.
    let frenchPhrase = "Bonjour le monde!";
    let spanishPhrase = "¡Hola Mundo!";
    let germanPhrase = "Hallo Welt!";
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