const firstPart = [
    'You will',
    'Your dog will',
    'Your friend will',
    'The random squirrel in the tree will',
    'That guy whose face you hate will',
]
const secondPart = [
    'jump over',
    'fart in',
    'slide under',
    'piss on',
    'steal from'
]
const thirdPart = [
    'the snatchbox.',
    'the clocktower.',
    'the Tesla battery.',
    'the meth house.',
    'the red-light district.'
]

const images = [
    'istockphoto-1082721304-612x612.jpg',
    'istockphoto-1189860501-612x612.jpg',
    'inspiring-motivational-quotes-jpg.jpg',
    'istockphoto-1255203350-612x612.jpg',
    'photo-1520371764250-8213f40bc3ed.jpg',
    'getty_696209402_2000133320009280405_375492.jpg',
    'inspirational-leadership-2-min.png',
    'photo-1611934180042-da791b4091e7.jpg'
]

function returnRandom(inputArray){
    return inputArray[Math.floor(Math.random() * inputArray.length)];
}

function mixedMessages(array1, array2, array3){
    let selection1 = returnRandom(array1);
    let selection2 = returnRandom(array2);
    let selection3 = returnRandom(array3);
    let fullMessage = "";
    fullMessage = `${selection1} ${selection2} ${selection3}`;
    return fullMessage;
}

/*  function insertElement(modify:<string>, create:<string>, inputText:<string>, styleTag:<string>, styles:<string>) 
 *  modify takes argument of html element to be modified, create takes argument of element to be created
 *  inputText is the text that you want inside the tag being created, styleTag is supposed to be 'style' but some other
 *  attribute could be used in its place.  Currently only handles single attributes.  styles should be any css styles
 *  you wish to add to the parent element. Improvements could be made. Would like to add a check to prevent same image
 *  image file from being used.
 */
function insertElement(modify, create, inputText, styleTag, styles){
    const element = document.getElementById(modify);
    const node = document.createElement(create);
    const textnode = document.createTextNode(inputText);
    node.appendChild(textnode);
    if(element.children.length === 0){
        element.appendChild(node);
        
    }else{
        element.replaceChild(node, element.childNodes[1])
        
    }
    element.setAttribute(styleTag, styles);
}

/* Check boolean for first run, probably unnecessary */
let hasRun = false;
/* using the insertElement function in the webPage itself produced errors when trying to find image file names
 * created helper function to execute the function from an onClick event, errors are gone.
 */
function clickMe(){
    insertElement("generator", "h2", mixedMessages(firstPart, secondPart, thirdPart), "style", `background-image: url('resources/img/${returnRandom(images)}')`);
}
//Runs clickMe() once for initial page load.
if(hasRun === false){
    clickMe();
    hasRun = true;   
}