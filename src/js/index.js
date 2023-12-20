// [
    



//     {
//       title: 'Save the Children',
//       url:
//         'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
//       img: './img/sa',
//      img src'./'
//     },
//     {
//       title: 'Project HOPE',
//       url: 'https://www.projecthope.org/country/ukraine/',
//       img: null,
//     },
//     {
//       title: 'UNITED24',
//       url: 'https://u24.gov.ua/uk',
//       img: null,
//     },
//     {
//       title: 'International Medical Corps',
//       url: 'https://internationalmedicalcorps.org/country/ukraine/',
//       img: null,
//     },
//     {
//       title: 'Medicins Sans Frontieres',
//       url: 'https://www.msf.org/ukraine',
//       img: null,
//     },
//     {
//       title: 'RAZOM',
//       url: 'https://www.razomforukraine.org/',
//       img: null,
//     },
//     {
//       title: 'Action against hunger',
//       url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//       img: null,
//     },
//     {
//       title: 'World vision',
//       url: 'https://www.wvi.org/emergencies/ukraine',
//       img: null,
//     },
//     {
//       title: 'Serhiy Prytula Charity Foundation',
//       url: 'https://prytulafoundation.org/en',
//       img: null,
//     },
//   ]

//   import { sponsors } from './sponsors-obj';
// import images from '../images/sponsors/*.png';

// const sponsorsList = document.querySelector('.js-sponsors-list');
// let id = 0;

// const mqLarge = window.matchMedia('(min-width: 768px)');
// mqLarge?.addEventListener('change', () => (distance = mqLarge.matches ? 3 : 5));

// let distance = mqLarge.matches ? 3 : 5;

// function renderSponsorsList() {
//   const markup = sponsors
//     .map(
//       ({ url, title, img }) =>
//         `<li class="sponsor-item"><span class="sup_number">${pad(
//           (id += 1)
//         )}</span><a href="${url}" target="_blank" noopener noreferrer class="sponsorsLink" ><img class="sponsor-img" src="${
//           images[img]
//         }" alt="${title}"/></a></li>`
//     )
//     .join('');
//   sponsorsList?.insertAdjacentHTML('beforeend', markup);
// }
// renderSponsorsList();

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

// const sponsorsSlideDownBtn = document.querySelector('.sponsors-slideDown__btn');
// const sponsorsSlideUpBtn = document.querySelector('.sponsors-slideUp__btn');

// sponsorsSlideUpBtn?.classList.add('hide');

// let step = 0;
// let count = 0;
// sponsorsSlideDownBtn?.addEventListener('click', onScrollDownSponsors);
// sponsorsSlideUpBtn?.addEventListener('click', onScrollUpSponsors);

// function onScrollDownSponsors() {
//   if (count < distance) {
//     ++count;
//     step += 52;
//     sponsorsList.style.transform = `translateY(-${step}px)`;
//   }

//   if (count === distance) {
//     sponsorsSlideUpBtn?.classList.remove('hide');
//     sponsorsSlideDownBtn?.classList.add('hide');
//   }
// }

// function onScrollUpSponsors() {
//   if (count > 0) {
//     --count;
//     step -= 52;
//     sponsorsList.style.transform = `translateY(-${step}px)`;
//   }

//   if (count === 0) {
//     step = 0;
//     sponsorsSlideDownBtn?.classList.remove('hide');
//     sponsorsSlideUpBtn?.classList.add('hide');
//   }
// }



const icons = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('/src/images/save-children-logo.png', import.meta.url),
    img2: new URL('/src/images/save-children-logo@2x.png', import.meta.url),
    p: '01',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('/src/images/project-hope-logo.png', import.meta.url),
    img2: new URL('/src/images/project-hope-logo@2x.png', import.meta.url),
    p: '02',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('/src/images/medical-corps-logo.png', import.meta.url),
    img2: new URL('/src/images/medical-logo@2x.png', import.meta.url),
    p: '03',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('/src/images/razom-logo.png', import.meta.url),
    img2: new URL('/src/images/razom-logo@2x.png', import.meta.url),
    p: '04',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('/src/images/against-hunger-logo.png', import.meta.url),
    img2: new URL('/src/images/against-hunger-logo@2x-5.png', import.meta.url),
    p: '05',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('/src/images/prytula-logo.png', import.meta.url),
    img2: new URL('/src/images/prytula-logo@2x-7.png', import.meta.url),
    p: '06',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('/src/images/medical-logo.png', import.meta.url),
    img2: new URL('/src/images/medical-corps-logo@2x.png', import.meta.url),
    p: '07',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('/src/images/world-vison-logo.png', import.meta.url),
    img2: new URL('/src/images/world-vison-logo@2x.png', import.meta.url),
    p: '08',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('/src/images/united-logo.png', import.meta.url),
    img2: new URL('/src/images/united-logo@2x.png', import.meta.url),
    p: '09',
  },
];

const container = document.querySelector('.support-ukraine-list');
const buttonSupport = document.querySelector('.ukraine-button');

function listSupport(arr) {
  return arr
    .map(
      ({ title, url, img, img2, p }) =>
        `<div class="support-ukraine-icons">
 <p class="support-counter">${p}</p>
       <a
          href="${url}"   
          title="${title}"
          target="_blank">
          <img
          srcset="${img}, ${img2}"
          src="${img}"
          alt="${title}"
          height="32"
      /></a>
        </div>`
    )
    .join('');
}
container.insertAdjacentHTML('beforeend', listSupport(icons));

buttonSupport.addEventListener('click', scrollSupport);

function scrollSupport(event) {
  container.scrollTo({
    top: container.scrollHeight,
    behavior: 'smooth',
  });
}