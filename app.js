(() => {
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
    const weekdayHours = {
      Mon: [540, 900], Tue: [540, 900], Wed: [540, 900],
      Thu: [540, 900], Fri: [540, 900], Sat: [540, 720]
    };
    const hours = weekdayHours[weekday];
    const isOpen = Boolean(hours && totalMinutes >= hours[0] && totalMinutes < hours[1]);

    statusDot?.classList.remove('closed');

    if (isOpen) {
      openStatus.textContent = `Open now · closes at ${weekday === 'Sat' ? '12 PM' : '3 PM'}`;
    } else if (weekday === 'Sun') {
      openStatus.textContent = 'Closed today · open Monday at 9 AM';
      statusDot?.classList.add('closed');
    } else if (hours && totalMinutes < 540) {
      openStatus.textContent = 'Opens today at 9 AM';
      statusDot?.classList.add('closed');
    } else if (weekday === 'Sat') {
      openStatus.textContent = 'Closed now · open Monday at 9 AM';
      statusDot?.classList.add('closed');
    } else {
      openStatus.textContent = 'Closed now · open tomorrow at 9 AM';
      statusDot?.classList.add('closed');
    }
  }

  const revealItems = [...document.querySelectorAll('.reveal')];
  revealItems.forEach((el) => {
    el.style.setProperty('--delay', `${Number(el.dataset.delay || 0)}ms`);
  });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.07, rootMargin: '0px 0px -5% 0px' });

    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }
})();
