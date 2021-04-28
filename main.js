
/**
 * Verifying user input to avoid errors in Convert_Sequence_Integers() function
 * @returns all user given command line arguments or exits if inputs are not integers
 */
function Verify_and_Retrieve_CLI_Input() {

    var myArgs = process.argv.slice(2);

    // verify if there's input
    if (myArgs.length == 0) {
        throw new Error("Please try again! There were no command line arguments");  
    }

    // verify if every element is the right data type
    for (i = 0; i < myArgs.length; i++) {
        if (Number.isNaN(parseInt(myArgs[i]))) {
            throw new Error("Please try again! One of your inputs is not an integer")
        }
    }

    return myArgs
}

/**
 * used in Convert_Sequence_Integers to convert intgers into phoenetic equivalent
 * @returns  dictionary of digit : spelled out version of the digit
 */
function Init_Digit_Map() {

    var DigitMap = {};
    var DigitWords = ["Zero", "One", "Two", 
                      "Three", "Four", "Five",
                      "Six", "Seven", "Eight", "Nine"]

    for (i = 0; i <= 9; i++) {
        DigitMap[i] = DigitWords[i]
    }

    return DigitMap
}

/**
 * main function of the program -> iterating over integers in input array 
 * and then within digits of these integers
 * @param {*} a_array_integers (array of strings that are input integers)
 * @returns ConvertedArray
 */
function Convert_Sequence_Integers(a_array_integers) {

    // retrieve the dictionary
    var DigitMap = Init_Digit_Map()
    var ConvertedArray = []
    var FinalString = ""
    
    //iterate over integers in array 
    for (i = 0; i < a_array_integers.length; i++) {
        var CurrentElement = a_array_integers[i]
        var CurrentPhoeneticElement = ""
        // then iterate over the integer's digits
        for (j = 0; j < CurrentElement.length; j++){
            var OneDigit = DigitMap[CurrentElement[j]]
            CurrentPhoeneticElement = CurrentPhoeneticElement.concat(OneDigit)
        }
        ConvertedArray.push(CurrentPhoeneticElement)
    }

    // for the print statement
    for (i=0; i < ConvertedArray.length; i++) {
        FinalString = FinalString.concat(ConvertedArray[i], ",")
    }
    FinalString = FinalString.substring(0, FinalString.length - 1)
    console.log(FinalString)

    return ConvertedArray
}

cli_input = Verify_and_Retrieve_CLI_Input()
Convert_Sequence_Integers(cli_input);
