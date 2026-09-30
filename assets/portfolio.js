document.querySelectorAll('[data-filter]').forEach(button => {
  button.setAttribute('aria-pressed', String(button.dataset.filter === 'all'));
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelectorAll('[data-project]').forEach(card => {
      card.classList.toggle('d-none', button.dataset.filter !== 'all' && !card.dataset.category.split(' ').includes(button.dataset.filter));
    });
  });
});

const coreToggle = document.getElementById('coreToggle');
coreToggle.addEventListener('click', () => {
 const scanning = coreToggle.getAttribute('aria-pressed') !== 'true';
 coreToggle.setAttribute('aria-pressed', String(scanning));
 coreToggle.classList.toggle('bg-info', scanning);
 document.getElementById('hudStatus').textContent = scanning ? 'SCAN ACTIVE' : 'ONLINE';
 document.getElementById('hudStack').textContent = scanning ? 'PROJECT MAP' : 'FLUTTER';
 document.getElementById('hudLink').textContent = scanning ? 'SCAN MODE' : 'ESTABLISHED';
 document.getElementById('coreLabel').textContent = scanning ? 'SYSTEM SCAN ACTIVE' : 'ENGINEERING CORE';
});
