function renderHome() {
  document.getElementById('home').innerHTML = `
    <h2>Home Section</h2>
    <p>Welcome to my website. This is the home section.</p>
  `;
}

function renderAbout() {
  document.getElementById('about').innerHTML = `
    <h2>About Section</h2>
    <p>Learn more about us and what we do.</p>
  `;
}

function renderServices() {
  document.getElementById('services').innerHTML = `
    <h2>Services Section</h2>
    <p>Explore our services and what we offer.</p>
  `;
}

function renderContact() {
  document.getElementById('contact').innerHTML = `
    <h2>Contact Section</h2>
    <p>Contact us for any queries or collaborations.</p>
  `;
}

setTimeout(() => {
  renderHome();
}, 2000);

setTimeout(() => {
  renderAbout();
}, 3000);

setTimeout(() => {
  renderServices();
}, 4000);

setTimeout(() => {
  renderContact();
}, 5000);
