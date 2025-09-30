async function load() {
  const grid = document.getElementById('grid');
  const tpl = document.getElementById('card-tpl');
  const editionEl = document.getElementById('edition');

  const resp = await fetch('feed.json', {cache:'no-cache'});
  const data = await resp.json();

  const nhn = data.newsletter || {};
  editionEl.textContent = `Edição: ${nhn.edition_date || ''}`;

  const secs = nhn.sections || [];
  const all = [];
  for (const s of secs) for (const it of (s.items||[])) all.push({...it, sectionTitle: s.title});

  all.forEach(item => {
    const node = tpl.content.cloneNode(true);
    const aThumb = node.querySelector('.thumb');
    const img = node.querySelector('img');
    const badge = node.querySelector('.badge');
    const source = node.querySelector('.source');
    const title = node.querySelector('.title');
    const summary = node.querySelector('.summary');
    const read = node.querySelector('.readmore');

    aThumb.href = item.url || '#';
    read.href = item.url || '#';
    title.textContent = item.title || '';
    summary.textContent = item.summary || '';
    source.textContent = item.source || '';
    badge.textContent = item.sectionTitle || '';

    if (item.image_url) { img.src = item.image_url; }
    else { img.src = 'placeholder.jpg'; }

    grid.appendChild(node);
  });
}
load().catch(err => {
  console.error(err);
  document.getElementById('grid').innerHTML = '<p>Erro ao carregar feed.json.</p>';
});
