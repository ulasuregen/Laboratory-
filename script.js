
const container = document.querySelector('.container');

const myContent = document.createElement('p');
myContent.textContent = 'Hey I\'m red';
myContent.style.color = 'red';

const h3Text = document.createElement('h3');
h3Text.textContent = 'I\'m a blue h3!';

container.appendChild(myContent);
container.insertBefore(h3Text,myContent);

//new div

const newDiv = document.createElement('div');
newDiv.style.cssText = 'border: black 1px solid; background-color: pink; display: flex; height: 200px; width: 100vw; flex-direction: column; align-items: center; justify-content: center;';

const h1Text = document.createElement('h1');
h1Text.textContent = 'I\'m in div';

const pText = document.createElement('p');
pText.textContent = 'Me too !';

newDiv.appendChild(h1Text);
newDiv.appendChild(pText);

container.appendChild(newDiv);


const myButton = document.createElement('button');
myButton.textContent = 'Press Me';
container.appendChild(myButton);

myButton.addEventListener('click', (e) => {
    console.log('button was clicked');
});

document.body.addEventListener('click', () => {
    console.log('body was clicked');
})