// ========================= EDITABLE DATA =========================
// All labels and ranking numbers are regular browser text, not baked into an image.
// SVG filenames follow the row order from 01 at the top to 08 at the bottom.
const stats = [
  {metric:'YPC',     description:'Rushing yards per attempt',                       rank:'RB1', icon:'01_Cleat.svg'},
  {metric:'MTF/A',   description:'Missed tackles forced per rushing attempt',       rank:'RB2', icon:'02_Tackle.svg'},
  {metric:'YCO/A',   description:'Yards after Contact per Attempt', rank:'RB1',
     icon:'03_Strength.svg'},
  {metric:'EXPLSV%', description:'Explosive Rush Rate • % of rushes that go for 10+ yards',               rank:'RB1', icon:'04_Speed.svg'},
  {metric:'RYOE',    description:'Rushing yards above expected (vs. model)',        rank:'RB4', icon:'05_Statistics.svg'},
  {metric:'TGT',     description:'Total pass targets',                             rank:'RB5', icon:'06_Accuracy.svg'},
  {metric:'TS%',     description:'% of team pass targets',                        rank:'RB3', icon:'07_Analytics.svg'},
  {metric:'recYDS',  description:'Total receiving yards',                         rank:'RB4', icon:'08_Receptions.svg'},
];

const escapeHTML = text => String(text).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
document.getElementById('stats').innerHTML = stats.map(({metric,description,rank,icon}) => `
  <article class="stat-row" aria-label="${escapeHTML(metric)}: ${escapeHTML(rank)}">
    <div class="stat-inner">
      <div class="stat-iconbox"><img class="stat-icon" src="assets/Sports_Icons_SVG/${escapeHTML(icon)}" alt="" aria-hidden="true" /></div>
      <div class="stat-short">${escapeHTML(metric)}</div>
      <div class="stat-detail">${escapeHTML(description)}</div>
      <div class="rank-plate"><span class="rank-text rank-${Number(rank.replace('RB','')) || 1}">${escapeHTML(rank)}</span></div>
    </div>
  </article>
`).join('');

function fitArtboard() {
  const scale = Math.min(window.innerWidth / 1536, window.innerHeight / 1024, 1.25);
  const frame = document.getElementById('frame');
  frame.style.width = `${1536 * scale}px`;
  frame.style.height = `${1024 * scale}px`;
  document.getElementById('stage').style.transform = `scale(${scale})`;
}
addEventListener('resize',fitArtboard);
fitArtboard();
