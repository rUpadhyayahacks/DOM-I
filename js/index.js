const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

var navContainer = document.querySelector('nav')

var newAnchorOne = document.createElement('a');
var newAnchorT = document.createElement('div');

newAnchorT.textContent = 'Hello';
newAnchorT.style.color = 'green';

newAnchorOne.textContent = 'Goodbye';
newAnchorOne.style.color = 'green';

navContainer.prepend(newAnchorT);
navContainer.appendChild(newAnchorOne);

const navAnchor = document.querySelectorAll('a');
navAnchor.forEach(item => item.style.color = 'green');

const navAnchorOne = navAnchor[0];
navAnchorOne.textContent = 'Services'


const navAnchorTwo = navAnchor[1];
navAnchorTwo.textContent = 'Product';
navAnchorTwo.style.color = 'green';

const navAnchorThree = navAnchor[2];
navAnchorThree.textContent = 'Vision';

const navAnchorFour = navAnchor[3];
navAnchorFour.textContent = 'Features';

const navAnchorFive = navAnchor[4];
navAnchorFive.textContent = 'About';

const navAnchorSix = navAnchor[5];
navAnchorSix.textContent = 'Contact'


var headLine = document.querySelector('h1');
headLine.setAttribute('style', 'white-space: pre;');

headLine.textContent = 'Dom \r\n is \r\n Awesome';
headLine.style.color = 'red'


const getButton = document.querySelector('button');
getButton.textContent = 'Get Started';

let codeImg = document.getElementById('cta-img');
codeImg.setAttribute('src', 'img/header-img.png');


//main content
const title = document.querySelectorAll('h4');
const titleP = document.querySelectorAll('p');

const titleOne = title[0];
const textOne = titleP[0];

titleOne.textContent = 'Features';
textOne.textContent = siteContent['main-content']
['features-content']

const titleTwo = title[1];
const textTwo = titleP[1];

titleTwo.textContent = 'About';
textTwo.textContent = siteContent['main-content']
['about-content']

const titleThree = title[2];
const textThree = titleP[2];

titleThree.textContent = 'Services';
textThree.textContent = siteContent['main-content']
['services-content']

const titleFour = title[3];
const textFour = titleP[3];

titleFour.textContent = 'Product';
textFour.textContent = siteContent['main-content']
['product-content']

const titleFive = title[4];
const textFive = titleP[4];

titleFive.textContent = 'Vision';
textFive.textContent = siteContent['main-content']
['vision-content']

//mid img

const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', 'img/mid-page-accent.jpg');

//contact 

const bottomSec = document.querySelector('.contact h4');
bottomSec.textContent = "Contact";

const bottomSecT = document.querySelectorAll('.contact p')
bottomSecT[0].setAttribute('style', 'white-space: pre;');
bottomSecT[0].textContent = '123 Way 456 Street \r\n Somewhere, USA';

bottomSecT[1].textContent = '1 (888) 888-8888';
bottomSecT[2].textContent = 'sales@greatidea.io'

//footer

const footerSec = document.querySelector('footer')
footerSec.textContent = 'Copyright Great Idea! 2018'

