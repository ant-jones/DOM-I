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

let anchors = document.querySelectorAll("nav a");
anchors.forEach(
  (el, index) => (el.textContent = siteContent["nav"][`nav-item-${index + 1}`])
);

let topTitle = document.querySelector("cta, h1");
topTitle.textContent = siteContent["cta"][`${"h1"}`];

let topButton = document.querySelector("cta, button");
topButton.textContent = siteContent["cta"][`${"button"}`];

const title = document.querySelector('.cta-text h1');
title.textContent = 'Dom \n Is \n Awesome';
title.style.width = '100px';

let topPic = document.getElementById("cta-img");
topPic.setAttribute("src", siteContent["cta"]["img-src"]);

let topTitleText = document.querySelector("main-content, .title1");
topTitleText.textContent = siteContent["main-content"][`${"features-h4"}`];

let topText = document.querySelector("main-content, .para1");
topText.textContent = siteContent["main-content"][`${"features-content"}`];

let topSec = document.querySelector(".para1");
topSec.style.width = "400px"; 

let topTitleText2 = document.querySelector("main-content, .title2");
topTitleText2.textContent = siteContent["main-content"][`${"about-h4"}`];

let topText2 = document.querySelector("main-content, .para2");
topText2.textContent = siteContent["main-content"][`${"about-content"}`];

let topSec2 = document.querySelector(".para2");
topSec2.style.width = "400px";

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

middleImg.style.width = "100%";

let bottomContent = document.querySelector("main-content, .title3");
bottomContent.textContent = siteContent["main-content"][`${"services-h4"}`];

let bottomContent2 = document.querySelector("main-content, .para3");
bottomContent2.textContent = siteContent["main-content"][`${"services-content"}`];

let botSec = document.querySelector(".para3");
botSec.style.width = "300px";

let bottomContent3 = document.querySelector("main-content, .title4");
bottomContent3.textContent = siteContent["main-content"][`${"product-h4"}`];

let bottomContent4 = document.querySelector("main-content, .para4");
bottomContent4.textContent = siteContent["main-content"][`${"product-content"}`];

let botSec2 = document.querySelector(".para4");
botSec2.style.width = "300px";

let bottomContent5 = document.querySelector("main-content, .title5");
bottomContent5.textContent = siteContent["main-content"][`${"vision-h4"}`];

let bottomContent6 = document.querySelector("main-content, .para5");
bottomContent6.textContent = siteContent["main-content"][`${"vision-content"}`];

let botSec3 = document.querySelector(".para5");
botSec3.style.width = "300px";

let topContent = document.querySelector(".text-content");
topContent.style.width = "100%";

let contact2 = document.querySelector("contact, .con");
contact2.textContent = siteContent["contact"][`${"contact-h4"}`];

let address = document.querySelector("contact, .address");
address.textContent = siteContent["contact"][`${ "address"}`]

let phone = document.querySelector("contact, .phone");
phone.textContent = siteContent["contact"][`${"phone"}`];

let email = document.querySelector("contact, .email");
email.textContent = siteContent["contact"][`${"email"}`];

let footer2 = document.querySelector("footer, .copy");
footer2.textContent = siteContent["footer"][`${"copyright"}`];


