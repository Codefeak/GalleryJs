
const container = document.getElementById('container');
const popUp = document.createElement('div');
const main = document.getElementById('container').parentElement;
const img = document.createElement('img');
const fullName = document.createElement('h2');
fullName.id='popup-fullName';
const title = document.createElement('h3');
title.id='popup-title';
const nationality = document.createElement("p");
nationality.id='popup-nationality';
const skillsList = document.createElement('p');
skillsList.id='popup-skillsList';
const reason = document.createElement('p');
reason.id='popup-reason';
const vision = document.createElement('p');
vision.id='popup-vision';
const motivate = document.createElement('p');
motivate.id='popup-motivate';
const quote = document.createElement('p');
quote.id='popup-quote';
const joinedDate = document.createElement('p');
joinedDate.id='popup-joinedDate';
const leftBtn = document.createElement('button');
const rightBtn = document.createElement('button');
let i = 0;
document.addEventListener ('load' , createPhotoHolder());
document.body.addEventListener ('click', handleClick);

function createPhotoHolder(){
  let i=0;
  data.forEach(function (item){
    const onePhotoHolder = document.createElement('div') ;
    const image = document.createElement('img');
    container.appendChild(onePhotoHolder);
    onePhotoHolder.classList.add("box");
    onePhotoHolder.id = "thumbnails"+i;
    image.src = "images\/thumbnails\/"+data[i].src;
    image.id = i;
    onePhotoHolder.appendChild(image);
    image.name = data[i].firstName + " "+ data[i].lastName;
    image.alt = data[i].alt;
    i++;
  });
  main.appendChild(popUp);
  popUp.className = "popOff";
};

const createPopUpContainer = () => {
  popUp.innerHTML="";
  leftBtn.innerHTML="<";
  leftBtn.id = "left-btn";
  popUp.appendChild(leftBtn);
  popUp.appendChild(img);
  const infoContainer = document.createElement('div');
  popUp.appendChild(infoContainer);
  rightBtn.innerHTML = ">";
  rightBtn.id = "right-btn";
  popUp.appendChild(rightBtn);
  infoContainer.classList.add('red-background', "info-container");
  infoContainer.appendChild(fullName);
  infoContainer.appendChild(document.createElement('hr'));
  infoContainer.appendChild(title);
  infoContainer.appendChild(nationality);
  infoContainer.appendChild(skillsList);
  infoContainer.appendChild(reason);
  infoContainer.appendChild(vision);
  infoContainer.appendChild(motivate);
  infoContainer.appendChild(quote);
  infoContainer.appendChild(joinedDate);
}

function popFunction(event){

  img.id = event.target.id;
  img.src = "images\/" +data[img.id].src;
  fullName.innerHTML = event.target.name;
  for(i= 0; i<data.length; i++){
    if(event.target.alt === data[i].alt){
      skillsList.innerHTML="";
      title.innerHTML = data[i].title;
      nationality.innerHTML = data[i].nationality;
      reason.innerHTML = "Why Software developer : "+data[i].whySofterDeveloper;
      vision.innerHTML = "Long Term Vision : "+ data[i].longTermVision;
      motivate.innerHTML = "Motivates Me : "+data[i].motivatesMe;
      quote.innerHTML = "Favorite Quote : "+data[i].favoriteQuote;
      joinedDate.innerHTML = "Joined On : "+data[i].joinedOn;
      skillsList.innerHTML = "Skills : "+ data[i].skills.join(" ");
    }
    }
};

function leftBtnFn(event){
  let c = event.target.parentElement.childNodes[1].id;
  if(c==0){
    c=data.length;
  };
  event.target.parentElement.childNodes[1].src="images\/" +data[c-1].src;
  document.querySelector('#popup-fullName').innerHTML = data[c-1].firstName +" "+ data[c-1].lastName;
  document.querySelector('#popup-title').innerHTML = data[c-1].title;
  document.querySelector('#popup-nationality').innerHTML = data[c-1].nationality;
  document.querySelector('#popup-reason').innerHTML ="Why Software developer : " +data[c-1].whySofterDeveloper;
  document.querySelector('#popup-vision').innerHTML = "Long Term Vision : "+data[c-1].longTermVision;
  document.querySelector('#popup-motivate').innerHTML = "Motivates Me : "+ data[c-1].motivatesMe;
  document.querySelector('#popup-quote').innerHTML = "Favorite Quote : "+data[c-1].favoriteQuote;
  document.querySelector('#popup-joinedDate').innerHTML ="Joined On : "+ data[c-1].joinedOn;
  document.querySelector('#popup-skillsList').innerHTML = "Skills : " +data[c-1].skills.join(" ");

  event.target.parentElement.childNodes[1].id = c-1;
  }

function rightBtnFn(event){
  let c = event.target.parentElement.childNodes[1].id;
    if(c==data.length-1){
    c=-1;

  }
  c++;
  event.target.parentElement.childNodes[1].src="images\/"+ data[c].src;
  document.querySelector('#popup-fullName').innerHTML = data[c].firstName +" "+ data[c].lastName;
  document.querySelector('#popup-title').innerHTML = data[c].title;
  document.querySelector('#popup-nationality').innerHTML = data[c].nationality;
  document.querySelector('#popup-reason').innerHTML = "Why Software developer : " +data[c].whySofterDeveloper;
  document.querySelector('#popup-vision').innerHTML = "Long Term Vision : "+ data[c].longTermVision;
  document.querySelector('#popup-motivate').innerHTML = "Motivates Me : "+ data[c].motivatesMe;
  document.querySelector('#popup-quote').innerHTML = "Favorite Quote : "+data[c].favoriteQuote;
  document.querySelector('#popup-joinedDate').innerHTML = "Joined On : "+data[c].joinedOn;
  document.querySelector('#popup-skillsList').innerHTML = "Skills : " +data[c].skills.join(" ");
  event.target.parentElement.childNodes[1].id = c;

}

function handleClick(event){
  event.preventDefault();
  if(event.target.tagName !='IMG'){
    if(event.target.id == 'left-btn'){
      leftBtnFn(event);
    }else if(event.target.id == 'right-btn'){
      rightBtnFn(event);
    }else{
      popUp.innerHTML="";
      popUp.className = "popOff";
    }
  }else if(event.target.tagName =='IMG'){
      popUp.innerHTML="";
      popUp.className = "popOff";
      popUp.className = "popOn";
      createPopUpContainer();
      console.dir();
    if(event.target.id != document.querySelector('.popOn').childNodes[1].id){
      popFunction(event);
    }
  }
}
