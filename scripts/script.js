console.log('Hello World');
const randomMessages = [
"“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney",
"“The secret of getting ahead is getting started.” —Mark Twain",
"“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.” —Michael Jordan",
"“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” —Mary Kay Ash",
"“The best time to plant a tree was 20 years ago. The second best time is now.” ―Chinese Proverb",
"“Only the paranoid survive.” —Andy Grove",
"“It’s hard to beat a person who never gives up.” —Babe Ruth",
"“I wake up every morning and think to myself, ‘How far can I push this company in the next 24 hours.’” —Leah Busque",
"“If people are doubting how far you can go, go so far that you can’t hear them anymore.” —Michele Ruiz",
"“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes―understanding that failure is not the opposite of success, it’s part of success.” ―Arianna Huffington",
"“Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.” —Joss Whedon"
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
const node = document.createElement("h2");
const textnode = document.createTextNode(returnRandom(randomMessages));
node.appendChild(textnode);

document.getElementById("generator").appendChild(node);
document.getElementById("generator").setAttribute('style', `background-image: url('resources/img/${returnRandom(images)}')`);