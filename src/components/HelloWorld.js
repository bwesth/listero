function HelloWorld() {

    const name = "  bJØRN  "

    function capitalize(string) {
        const lowerCaseString = string.toLowerCase()
        const firstLetterCapitalized = lowerCaseString.substr(0,1).toUpperCase()
        const restOfString = lowerCaseString.substr(1, lowerCaseString.length)
        return firstLetterCapitalized+restOfString
    }

  return <h1>{`Hello, ${capitalize(name.trim())}!`}</h1>;
}

export default HelloWorld;
