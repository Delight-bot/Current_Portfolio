// projects.js

const projects = [
  {
    id: "bloomspace",
    name: "BloomSpace",
    icon: "🌱",
    description: "A wellness platform for students (Apple Bootcamp)",
    details: `
      <p><strong>What I did:</strong> Built the UI, designed accessibility routing, and validated it with mentor testing.</p>
      <p><strong>Tech:</strong> HTML, CSS, JavaScript, accessibility routing logic</p>
      <p><strong>Links:</strong> <a href="https://apple.com" target="_blank">Apple Bootcamp</a></p>
    `,
  },
  {
    id: "harvest-shield",
    name: "Harvest Shield",
    icon: "🌾",
    description: "AI crop protection system (MIT FutureMakers)",
    details: `
      <p>Trained VGG16 models on 160K+ images for plant health detection. Created map-based UI with feedback from real farmers.</p>
      <p><strong>Links:</strong> <a href="https://mit.edu" target="_blank">MIT FutureMakers</a></p>
    `,
  },
  {
    id: "tacc-alz",
    name: "TACC Alzheimer's App",
    icon: "🧠",
    description: "ML-based Alzheimer’s screening tool",
    details: `
      <p><strong>Role:</strong> Built the logistic regression pipeline and connected it to a Flask-powered interface.</p>
      <p><strong>Bonus:</strong> Added a public-friendly Q&A input to help explain the model.</p>
    `,
  },
  {
    id: "unity-games",
    name: "Unity Games",
    icon: "🎮",
    description: "5+ published C# games with story and mechanics",
    details: `
      <p><strong>Role:</strong> Game dev lead for Activision x EICOP. Designed, programmed, and reviewed all games.</p>
      <p><strong>Stack:</strong> Unity, C#, GIT</p>
    `,
  },
  {
    id: "wafflehacks",
    name: "WaffleHacks App",
    icon: "🧇",
    description: "Wellness App that won Best Beginner Design 🏆",
    details: `
      <p>Used health APIs and TensorFlow.js to get real-time BMI and heart rate feedback. Built fully responsive mobile view.</p>
      <p><a href="https://devpost.com/software/wafflehacks-wellness-app" target="_blank">View on Devpost</a></p>
    `,
  },
];

const grid = document.getElementById("projectGrid");
const modal = document.getElementById("projectModal");
const modalBody = document.getElementById("modalBody");

function createCard(project) {
  const div = document.createElement("div");
  div.className = "project-card";
  div.innerHTML = `
    <div class="icon">${project.icon}</div>
    <div class="name">${project.name}</div>
    <p class="desc">${project.description}</p>
  `;
  div.onclick = () => openModal(project);
  return div;
}

function openModal(project) {
  modal.classList.remove("hidden");
  modalBody.innerHTML = `
    <h2>${project.name}</h2>
    ${project.details}
  `;
}

function closeModal() {
  modal.classList.add("hidden");
  modalBody.innerHTML = "";
}

projects.forEach(project => grid.appendChild(createCard(project)));

/* ===== Scroll-Spy: highlight active dock button ===== */
const sections = [
  document.getElementById('about'),
  document.getElementById('projects'),
  document.getElementById('technologies'),
  document.getElementById('contact'),
  document.getElementById('reviews')
].filter(Boolean);

const dockLinks = Array.from(document.querySelectorAll('.section-dock .dock-btn'));

function setActiveDock(id) {
  dockLinks.forEach(a => a.classList.toggle('active', a.getAttribute('data-target') === id));
}

// Observe which section is in view
const spy = new IntersectionObserver((entries) => {
  // pick the most visible entry
  const visible = entries
    .filter(e => e.isIntersecting)
    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible?.target?.id) setActiveDock(visible.target.id);
}, { root: null, threshold: [0.4, 0.6, 0.8] });

sections.forEach(sec => spy.observe(sec));

/* Optional: ensure smooth scroll + close modal if open when navigating */
dockLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('data-target');
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      // Close an open modal so it doesn't cover the section
      if (!modal.classList.contains('hidden')) closeModal();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
