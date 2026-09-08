(() => {
  const layoutStyles = document.createElement('link');
  layoutStyles.rel = 'stylesheet';
  layoutStyles.href = 'layout-fixes.css';
  document.head.appendChild(layoutStyles);

  const menuButton = document.getElementById('menuButton');
  const siteNav = document.getElementById('siteNav');
  const year = document.getElementById('year');
  const openStatus = document.getElementById('openStatus');
  const statusDot = document.querySelector('.status-dot');

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && siteNav) {
    const closeMenu = () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  function easternNowParts() {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
    const parts = formatter.formatToParts(new Date());
    return Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  }

  if (openStatus) {
    const { weekday, hour, minute } = easternNowParts();
    const totalMinutes = Number(hour) * 60 + Number(minute);
    const weekdayHours = { Mon: [540, 900], Tue: [540, 900], Wed: [540, 900], Thu: [540, 900], Fri: [540, 900], Sat: [540, 720] };
    const hours = weekdayHours[weekday];
    const isOpen = Boolean(hours && totalMinutes >= hours[0] && totalMinutes < hours[1]);

    if (isOpen) {
      const closesAt = weekday === 'Sat' ? '12 PM' : '3 PM';
      openStatus.textContent = `Open now · closes at ${closesAt}`;
    } else if (weekday === 'Sun') {
      openStatus.textContent = 'Closed today · open Monday at 9 AM';
      statusDot?.classList.add('closed');
    } else {
      const todaysClose = weekday === 'Sat' ? 720 : 900;
      if (hours && totalMinutes < 540) {
        openStatus.textContent = 'Opens today at 9 AM';
      } else if (hours && totalMinutes >= todaysClose) {
        openStatus.textContent = weekday === 'Sat' ? 'Closed now · open Monday at 9 AM' : 'Closed now · open tomorrow at 9 AM';
      } else {
        openStatus.textContent = 'Closed now';
      }
      statusDot?.classList.add('closed');
    }
  }

  const revealItems = [...document.querySelectorAll('.reveal')];
  revealItems.forEach((el) => {
    const delay = Number(el.dataset.delay || 0);
    el.style.setProperty('--delay', `${delay}ms`);
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6% 0px' });
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }

  const canvas = document.getElementById('petalCanvas');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (canvas && !reduceMotion) {
    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = 1;
    let petals = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const targetCount = Math.min(22, Math.max(9, Math.floor(width / 95)));
      petals = Array.from({ length: targetCount }, () => makePetal(true));
    }

    function makePetal(initial = false) {
      const palette = ['#d86145', '#e8b7ad', '#f2d8bd', '#b7c7aa'];
      return {
        x: Math.random() * width,
        y: initial ? Math.random() * height : -30,
        size: 4 + Math.random() * 7,
        vy: .12 + Math.random() * .32,
        vx: -.14 + Math.random() * .28,
        sway: Math.random() * Math.PI * 2,
        spin: Math.random() * Math.PI,
        spinV: -.01 + Math.random() * .02,
        alpha: .18 + Math.random() * .22,
        color: palette[Math.floor(Math.random() * palette.length)]
      };
    }

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.spin);
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * .52, p.size, .5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      petals.forEach((p, i) => {
        p.sway += .006;
        p.x += p.vx + Math.sin(p.sway) * .08;
        p.y += p.vy;
        p.spin += p.spinV;
        if (p.y > height + 40 || p.x < -50 || p.x > width + 50) petals[i] = makePetal(false);
        drawPetal(p);
      });
      requestAnimationFrame(animate);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });
    animate();
  }
})();
