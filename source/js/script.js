const navigation = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

navigation.classList.remove('navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navigation.classList.contains('navigation--closed')) {
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
  } else {
    navigation.classList.add('navigation--closed');
    navigation.classList.remove('navigation--opened');
  }
});

const map = document.querySelector('.location__map');
const mapImage = document.querySelector('.location__map-image');
const contacts = document.querySelector('.contacts');

if (getComputedStyle(contacts).height > '300px') {
  map.style.height = `${getComputedStyle(contacts).height}`;
  mapImage.style.height = `${getComputedStyle(contacts).height}`
}
