document.body.style.margin = "0";
document.body.style.fontFamily ="'Outfit', sans-serif";
document.body.style.backgroundColor ="hsl(217, 54%, 11%)";

let wrapper = document.createElement("div");
document.body.appendChild(wrapper);
wrapper.id = "wrapper";
wrapper.style.margin ="0 auto";
wrapper.style.maxWidth = "1440px";
wrapper.style.display = "flex";
wrapper.style.justifyContent ="center";
wrapper.style.marginTop = "80px";

let card = document.createElement("div");
wrapper.appendChild(card);
card.className ="card";
card.style.backgroundColor ="hsl(216, 50%, 16%)";
card.style.borderRadius="15px";
card.style.padding="20px 20px 0";
card.style.fontSize="18px";
card.style.boxShadow ="8px 16px 5px 10px rgba(0,0,0,0.12), -8px 16px 5px 10px rgba(0,0,0,0.12)";

let cardImage = document.createElement("img");
card.appendChild(cardImage);
cardImage.className = "card-image";
cardImage.src = "./images/image-equilibrium.jpg";
cardImage.style.maxWidth = "250px";
cardImage.style.borderRadius = "8px";

let cardTitle = document.createElement("h3");
card.appendChild(cardTitle);
cardTitle.className="card-title";
cardTitle.innerText="Equilibrium #3429";
cardTitle.style.color="hsl(0, 0%, 100%)";
cardTitle.style.fontWeight="600";
cardTitle.style.fontSize="18px";

let subTitle = document.createElement("p");
card.appendChild(subTitle);
subTitle.className="subtitle";
subTitle.innerText="Our Equilibrium collection promotes balance and calm.";
subTitle.style.maxWidth="250px";
subTitle.style.fontWeight="300";
subTitle.style.fontSize="15px";
subTitle.style.color="hsl(215, 51%, 70%)";

let item =document.createElement("div");
card.appendChild(item);
item.className="item";
item.style.display="flex";
item.style.justifyContent="space-between";
item.style.marginTop="-5px";


let item1=document.createElement("div");
item.appendChild(item1);
item1.className="item1";
item1.style.display="flex";
item1.style.alignItems="center";


let itemImg=document.createElement("img");
item1.appendChild(itemImg);
itemImg.className="item-img";
itemImg.src="./images/icon-ethereum.svg";
itemImg.style.marginRight="6px";

let itemTxt=document.createElement("p");
item1.appendChild(itemTxt);
itemTxt.className="item-txt";
itemTxt.innerText="0.041 ETH";
itemTxt.style.margin = "0";
itemTxt.style.fontSize = "14px";
itemTxt.style.fontWeight = "600";
itemTxt.style.color="hsl(178, 100%, 50%)";

let item2=document.createElement("div");
item.appendChild(item2);
item2.className="item2";
item2.style.display="flex";
item2.style.alignItems="center";

let dateImg=document.createElement("img");
item2.appendChild(dateImg);
dateImg.className="date-img";
dateImg.src="./images/icon-clock.svg";
dateImg.style.maxWidth="16px";
dateImg.style.maxHeight="16px";
dateImg.style.marginRight="6px";

let dateTxt=document.createElement("p");
item2.appendChild(dateTxt);
dateTxt.className="date-txt";
dateTxt.innerText="3 days left";
dateTxt.style.fontSize="14px";
dateTxt.style.color="hsl(215, 51%, 70%)";

let cardLine=document.createElement("hr");
card.appendChild(cardLine);
cardLine.className="card-line";
cardLine.style.border="none";
cardLine.style.borderTop="1px solid hsl(215, 32%, 27%)";

let avatarItem=document.createElement("div");
card.appendChild(avatarItem);
avatarItem.className="avatar-item";
avatarItem.style.display="flex";
avatarItem.style.alignItems="center";
avatarItem.style.marginTop="15px";
avatarItem.style.marginBottom="24px";


let avatarImg=document.createElement("img");
avatarItem.appendChild(avatarImg);
avatarImg.className="avatar-img";
avatarImg.src="./images/image-avatar.png";
avatarImg.style.border="1px solid white";
avatarImg.style.borderRadius="50%";
avatarImg.style.maxWidth="24px";
avatarImg.style.marginRight="8px";

let avatarTxt=document.createElement("span");
avatarItem.appendChild(avatarTxt);
avatarTxt.className="avatar-txt";
avatarTxt.innerText="Creation of";
avatarTxt.style.textAlign="center";
avatarTxt.style.color="hsl(215, 51%, 70%)";
avatarTxt.style.fontSize="15px";

let avatarTxt2=document.createElement("span");
avatarItem.appendChild(avatarTxt2);
avatarTxt2.className="avatar-txt2";
avatarTxt2.innerText="Jules Wyvern";
avatarTxt2.style.textAlign="center";
avatarTxt2.style.paddingLeft="3px";
avatarTxt2.style.color="hsl(0, 0%, 100%)";
avatarTxt2.style.fontSize="15px";

let challenge=document.createElement("div");
document.body.appendChild(challenge);
challenge.className="challenge";
challenge.style.display="flex";

let challengeTxt=document.createElement("span");
challenge.appendChild(challengeTxt);
challengeTxt.innerText="Challenge by ";
challengeTxt.style.color="white";
challengeTxt.style.margin="50px 0 0 1100px";

let link = document.createElement('a');
let linkText = document.createTextNode("Frontend Mentor.");
link.appendChild(linkText);
link.style.margin="50px 0 0 0";
link.style.color="yellow";
link.style.marginLeft="4px";
link.title = "Frontend Mentor.";
link.href = "https://www.frontendmentor.io/home";
challenge.appendChild(link);

let myName=document.createElement("p");
document.body.appendChild(myName);
myName.className="my-name";
myName.innerText="Coded by Arystanbek kyzy Zhazgul."
myName.style.margin="2px 0 0 1100px";
myName.style.color="white";

alert("Я оцениваю свою работу на 110 баллов😉");