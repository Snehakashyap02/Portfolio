document.addEventListener('DOMContentLoaded', () => {
  const config = window.PORTFOLIO_CONFIG || {};
  const emailLink = document.getElementById('emailLink');
  const githubLink = document.getElementById('githubLink');
  const linkedinLink = document.getElementById('linkedinLink');
  const resumeLink = document.getElementById('resumeLink');
  const navResume = document.getElementById('navResume');
  const resumeContact = document.getElementById('resumeContact');
  if (emailLink && config.email) emailLink.href = `mailto:${config.email}`;
  if (githubLink && config.github) githubLink.href = config.github;
  if (linkedinLink && config.linkedin) linkedinLink.href = config.linkedin;
  if (resumeLink && config.resume) { resumeLink.href = config.resume; resumeLink.target = '_blank'; resumeLink.rel = 'noreferrer'; }
  if (navResume && config.resume) { navResume.href = config.resume; navResume.target = '_blank'; navResume.rel = 'noreferrer'; }
  if (resumeContact && config.resume) { resumeContact.href = config.resume; resumeContact.target = '_blank'; resumeContact.rel = 'noreferrer'; }
  document.getElementById('year').textContent = new Date().getFullYear();

  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  toggle?.addEventListener('click', () => nav.classList.toggle('open'));
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

  const progress = document.getElementById('progress');
  const updateProgress = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true }); updateProgress();

  const typing = document.getElementById('typing');
  const words = config.roles || ['AI applications', 'GenAI solutions', 'RAG systems'];
  let word = 0, char = 0, deleting = false;
  function typeLoop() {
    const current = words[word % words.length];
    char += deleting ? -1 : 1;
    typing.textContent = current.slice(0, char);
    let delay = deleting ? 35 : 75;
    if (!deleting && char === current.length) { deleting = true; delay = 1450; }
    else if (deleting && char === 0) { deleting = false; word++; delay = 300; }
    setTimeout(typeLoop, delay);
  }
  if (typing && words.length) typeLoop();

  if (window.THREE) {
    try {
      const canvas = document.getElementById('bg-canvas');
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(65, innerWidth / innerHeight, .1, 1000);
      camera.position.z = 28;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7)); renderer.setSize(innerWidth, innerHeight);
      const count = innerWidth < 700 ? 700 : 1500;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) positions[i] = (Math.random() - .5) * 100;
      const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({ color: 0xb8b5ff, size: .11, transparent: true, opacity: .7, sizeAttenuation: true });
      const stars = new THREE.Points(geometry, material); scene.add(stars);
      let mx = 0, my = 0;
      window.addEventListener('pointermove', e => { mx = (e.clientX / innerWidth - .5) * .12; my = (e.clientY / innerHeight - .5) * .12; }, { passive: true });
      function animate() { requestAnimationFrame(animate); stars.rotation.y += .00025; stars.rotation.x += .0001; stars.rotation.y += (mx - stars.rotation.y) * .002; stars.rotation.x += (my - stars.rotation.x) * .002; renderer.render(scene, camera); }
      animate();
      window.addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });
    } catch (e) { console.warn('3D background unavailable; continuing without it.', e); }
  }
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray('.section-heading, .project-card, .skill-group, .timeline-item, .stat-card, .contact-panel').forEach((el, i) => {
      gsap.from(el, { opacity: 0, y: 24, duration: .65, delay: (el.classList.contains('project-card') ? (i % 2) * .07 : 0), ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
  }
});
