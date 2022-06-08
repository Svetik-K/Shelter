const pets = [
    {
      id: 1,
      name: "Jennifer",
      img: "../../assets/images/pets-jennifer.jpg",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 2,
      name: "Sophia",
      img: "../../assets/images/pets-sophia.jpg",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 3,
      name: "Woody",
      img: "../../assets/images/pets-woody.jpg",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },
    {
      id: 4,
      name: "Scarlett",
      img: "../../assets/images/pets-scarlett.jpg",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 5,
      name: "Katrine",
      img: "../../assets/images/pets-katrine.jpg",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 6,
      name: "Timmy",
      img: "../../assets/images/pets-timmy.jpg",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },
    {
      id: 7,
      name: "Freddie",
      img: "../../assets/images/pets-freddie.jpg",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      id: 8,
      name: "Charly",
      img: "../../assets/images/pets-charly.jpg",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"]
    },
    {
      id: 9,
      name: "Petra",
      img: "../../assets/images/pets-freddie.jpg",
      type: "Cat",
      breed: "Tabby cat",
      description: "This cute girl, Petra, is just 6 months old. She loves to play and snuggle. She is neutered and up to date on age appropriate vaccinations. Most of all enjoys being held.",
      age: "6 months",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["none"],
      parasites: ["none"]
    }
  ];

//Burger menu

const burger = document.querySelector('.burger-menu');
const layer = document.querySelector('.layer');
const navBar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const logoDuplicate = document.querySelector('.logo-group-duplicate');


burger.addEventListener('click', function(e) {
    if(e.target.classList.contains('active')) {
        closeSideMenu();
    } else {
        callSideMenu();
    }
    e.preventDefault();
});

function callSideMenu() {
    burger.classList.toggle("active");
    navBar.classList.toggle("open");
    logoDuplicate.style.display = 'block';
    layer.style.display = 'block';
}

navLinks.forEach(link => link.addEventListener('click', closeSideMenu));
navBar.addEventListener('click', closeSideMenu);
layer.addEventListener('click', closeSideMenu);

function closeSideMenu() {
    burger.classList.remove('active');
    navBar.classList.remove('open');
    logoDuplicate.style.display = 'none';
    layer.style.display = 'none';
}

//Slider

const leftBtn = document.querySelector('.button-left');
const rightBtn = document.querySelector('.button-right');
const slider = document.querySelector('.slider-cards');
const cardsLeft = document.querySelector('#cards-left');
const cardsRight = document.querySelector('#cards-right');
const cardsActive = document.querySelector('#cards-active');

function createCardTemplate(pet) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', pet.id);

    const cardImg = document.createElement('img');
    cardImg.src = pet.img;
    card.appendChild(cardImg);

    const nameEl = document.createElement('div');
    nameEl.classList.add('name');
    nameEl.innerText = pet.name;
    card.appendChild(nameEl);

    const cardBtn = document.createElement('button');
    cardBtn.classList.add('learn-more-btn');
    cardBtn.innerText = 'Learn more';
    card.appendChild(cardBtn);

    return card;
}

leftBtn.addEventListener('click', slideLeft);
rightBtn.addEventListener('click', slideRight);

function slideLeft() {
    slider.classList.add('transition-left');
    leftBtn.removeEventListener('click', slideLeft);
    rightBtn.removeEventListener('click', slideRight);
}

function slideRight() {
    slider.classList.add('transition-right');
    rightBtn.removeEventListener('click', slideRight);
    leftBtn.removeEventListener('click', slideLeft);
}


slider.addEventListener('animationend', (animation) => {
    
    if(animation.animationName === 'move-left') {
        slider.classList.remove('transition-left');
        const leftCards = cardsLeft.innerHTML;

        document.querySelector('#cards-active').innerHTML = leftCards;

        cardsLeft.innerHTML = '';
        let newCardsIds = new Set();

        while(newCardsIds.size < 3) {
            newCardsIds.add(Math.floor(Math.random() * 8));
        }

        for (let num of newCardsIds) {
            const card = createCardTemplate(pets[num]);
            cardsLeft.appendChild(card); 
        }
    

    } else {
        slider.classList.remove('transition-right');
        const rightCards = cardsRight.innerHTML;

        document.querySelector('#cards-active').innerHTML = rightCards;

        cardsRight.innerHTML = '';
        let newCardsIds = new Set();

        while(newCardsIds.size < 3) {
            newCardsIds.add(Math.floor(Math.random() * 8));
        }

        for (let num of newCardsIds) {
            const card = createCardTemplate(pets[num]);
            cardsRight.appendChild(card); 
        }
    }
    
    leftBtn.addEventListener('click', slideLeft);
    rightBtn.addEventListener('click', slideRight);
})



// Modal window

const modal = document.querySelector('.modal');

cardsActive.addEventListener('click', (e) => {
    if(e.target.parentElement.classList.contains('card')) {
        for(let pet of pets) {
            if(e.target.parentElement.getAttribute('id') == pet.id) {
            const modalWindow = createModalTemplate(pet);
            modal.append(modalWindow);
            document.body.style.overflow = 'hidden';
          }
        }
    }
})

function createModalTemplate(pet) {
    const overlay = document.createElement('div');
    overlay.classList.add('modal-overlay');

    const modalCard = document.createElement('div');
    modalCard.classList.add("modal-card");
    overlay.appendChild(modalCard);

    const img = document.createElement('img');
    img.src = pet.img;
    img.classList.add('pet-img');
    modalCard.appendChild(img);
   
    const modalTextBlock = document.createElement('div');
    modalTextBlock.classList.add("modal-text");
    modalCard.appendChild(modalTextBlock);

    const petName = document.createElement('h3');
    petName.classList.add("pet-name");
    petName.innerText = pet.name;
    modalTextBlock.appendChild(petName);
    
    const petBreed = document.createElement('h4');
    petBreed.classList.add("pet-breed");
    petBreed.innerText = pet.breed;
    modalTextBlock.appendChild(petBreed);

    const petDescription = document.createElement('p');
    petDescription.classList.add("pet-description");
    petDescription.innerText = pet.description;
    modalTextBlock.appendChild(petDescription);

    const otherInfo = document.createElement('ul');
    otherInfo.classList.add("other-info");
    modalTextBlock.appendChild(otherInfo);

    const listItem1 = document.createElement('li');
    listItem1.classList.add("other-item");
    listItem1.innerHTML = `Age: ${pet.age}`;
    otherInfo.appendChild(listItem1);

    const listItem2 = document.createElement('li');
    listItem2.classList.add("other-item");
    listItem2.innerHTML = `Inoculation: ${pet.inoculations}`;
    otherInfo.appendChild(listItem2);

    const listItem3 = document.createElement('li');
    listItem3.classList.add("other-item");
    listItem3.innerHTML = `Deseases: ${pet.diseases}`;
    otherInfo.appendChild(listItem3);

    const listItem4 = document.createElement('li');
    listItem4.classList.add("other-item");
    listItem4.innerHTML = `Parasites: ${pet.parasites}`;
    otherInfo.appendChild(listItem4);

    const modalButton = document.createElement('button');
    modalButton.classList.add("close-button");
    modalCard.appendChild(modalButton);

    return overlay;
}

modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('modal-overlay') || e.target.classList.contains('close-button')) {
        closeModal();
        document.body.style.overflow = '';
    }
    e.preventDefault();
});

function closeModal() {
    modal.innerHTML = '';
}


