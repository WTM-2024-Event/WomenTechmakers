'use strict';

// Hamburguesa
const toggleButton = document.querySelector('.nav_toggle');
const itemsContainer = document.querySelector('.navbar_items');

toggleButton.onclick = () => {
  itemsContainer.classList.toggle('open');

  toggleButton.classList.toggle('close');
};



// Modales Ponentes

// Objeto que almacena la información de los ponentes

const ponentesInfo = {
  'Ponente 1': {
    name: 'Cristina rodríguez',
    image: './images/cris.png',
    title: 'Cómo teletrabajar en un networking',
    place: '(Madrid, 1991)',
    bio: 'Breve biografía del Ponente 1.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus!',
  },
  'Ponente 2': {
    name: 'Ainhoa de las Heras',
    image: './images/ainhoa.jpg',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 2.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 3': {
    name: 'Raquel Ortiz',
    image: './images/Rachel.jpg',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 3.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 4': {
    name: 'Alba Ginés',
    image: './images/istockphoto-1328879352-612x612.jpg',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 4.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 5': {
    name: 'Aranzazu Barrutia',
    image: './images/istockphoto-1328879352-612x612.jpg',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 5.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
  'Ponente 6': {
    name: 'Paula Gonzalez',
    image: './images/istockphoto-1328879352-612x612.jpg',
    title: 'Cómo teletrabajar en un networking',
    place: '(Barcelona, 1991)',
    bio: 'Breve biografía del Ponente 6.',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veniam consequuntur. Sapiente vitae minima sequi laboriosam expedita distinctio iure quasi natus ratione, eum quia autem aut fugiat ipsum perferendis possimus',
  },
};

function openModal(ponente) {
  const modal = document.getElementById('myModal');
  const modalContent = document.getElementById('modalContent');

  modal.classList.remove ('hidden');

  const modalShown = localStorage.getItem('modalShown');
  if (!modalShown) {
    const info = ponentesInfo[ponente];

    modalContent.innerHTML = `
      <div class="modal__column img-column">
      <div class="shadow">
        <img src="${info.image}" alt="${info.name}" class="modal__imgM">
      </div> 
        <h2 class="modal__name">${info.name}</h2>
      </div>
      <div class="modal__column text-column">
        <h3 class="modal__titleP">${info.title}</h3>
        <p class="modal__text"><b>${info.place}</b> ${info.bio}</p>
        <p class="modal__text">${info.info}</p>
        <button class="modal__close" onclick="closeModal()">Volver</button>
      </div>`;

    localStorage.setItem('modalShown', 'true');
  }
}

function closeModal() {
  const modalContent = document.getElementById('modalContent');

  myModal.classList.add ('hidden');
  modalContent.innerHTML = '';
  
  localStorage.removeItem('modalShown');
}



// const speakersSocials = {
//   'Ponente 3': {
//     name: 'Alba Ginés',
//     linkedin: 'https://www.linkedin.com/in/alba-gg/',
//     twitter: 'https://twitter.com/developerdrm',
//   }
 
// };

// function openModalSocials(speaker) {
//   const modalContainer = document.getElementById('modalWindow');
//   const modalText = document.getElementById('modalText');

//   modalContainer.classList.remove ('hidden');
//   const infoSpeaker = speakersSocials[speaker];
//   modalText.innerHTML = `
//       </div> 
//         <h2 class="speaker__name">${infoSpeaker.name}</h2>
//       </div>
//       <div class="speaker__socials">
//         <a href="${infoSpeaker.linkedin}">
//           <i class="fa-brands fa-linkedin"></i>
//         </a>
//         <a href="${infoSpeaker.twitter}">
//           <i class="fa-brands fa-x-twitter"></i>
//         </a>
//         <button class="modal__close" onclick="closeModalSocials()"">Volver</button>
//       </div>`;
//   }


// function closeModalSocials() {
//   const modalText = document.getElementById('modalText');
//   const modalContainer = document.getElementById('modalWindow');

//   modalContainer.classList.add ('hidden');
//   modalText.innerHTML = '';

// }