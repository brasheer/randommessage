console.log('Hello World');

const node = document.createElement("h1");
const textnode = document.createTextNode("Hello World!");
node.appendChild(textnode);

document.getElementsByTagName('body')[0].appendChild(node);