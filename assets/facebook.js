const notification = new bootstrap.Toast(document.getElementById('toast'), { delay: 2200 });
function notify(message) {
  document.getElementById('toast').textContent = message;
  notification.show();
}
function searchPosts() {
  const term = document.getElementById('searchInput').value.trim().toLowerCase();
  let visible = 0;
  document.querySelectorAll('#posts article').forEach(post => {
    const match = (post.dataset.search + ' ' + post.textContent).toLowerCase().includes(term);
    post.classList.toggle('d-none', !match);
    if (match) visible++;
  });
  document.getElementById('emptySearch').classList.toggle('d-none', visible > 0);
}
document.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  if (button.hasAttribute('data-like')) {
    const liked = button.getAttribute('aria-pressed') !== 'true';
    button.setAttribute('aria-pressed', String(liked));
    button.classList.toggle('text-primary', liked);
    button.textContent = liked ? '👍 Liked' : '👍 Like';
  } else if (button.dataset.action) {
    notify(button.dataset.action + ' is a demo feature.');
  } else if (button.hasAttribute('data-nav')) {
    document.querySelectorAll('[data-nav]').forEach(item => item.classList.toggle('active', item === button));
    notify(button.title + ' selected (demo).');
  } else {
    notify((button.getAttribute('aria-label') || button.textContent.trim()) + ' is a demo feature.');
  }
});
document.getElementById('postInput').addEventListener('keydown', event => {
  if (event.key !== 'Enter' || !event.target.value.trim()) return;
  const article = document.createElement('article');
  article.className = 'card mb-3 overflow-hidden';
  article.dataset.search = event.target.value.toLowerCase();
  article.innerHTML = '<div class="d-flex gap-2 align-items-center p-3"><span class="badge rounded-pill text-bg-primary p-3">You</span><div><strong>You</strong><small class="d-block text-body-secondary">Just now · 🌐</small></div></div><p class="px-3" data-post-text></p><div class="d-flex justify-content-around border-top p-2"><button class="btn btn-light" data-like aria-pressed="false">👍 Like</button><button class="btn btn-light" data-action="Comment">▢ Comment</button><button class="btn btn-light" data-action="Share">↗ Share</button></div>';
  article.querySelector('[data-post-text]').textContent = event.target.value.trim();
  document.getElementById('posts').prepend(article);
  event.target.value = '';
  searchPosts();
  notify('Your post was added. Posts last until this page is reloaded.');
});
document.getElementById('searchInput').addEventListener('input', searchPosts);
