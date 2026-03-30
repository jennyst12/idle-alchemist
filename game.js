// ─── Skin Definitions ────────────────────────────────────────────────────────

const SKINS = {
  dark: {
    label: '⚗ Alchemist',
    title: '⚗ The Alchemist\'s Workshop',
    subtitle: 'Gather reagents. Transmute essence. Uncover the Great Work.',
    currency: 'essence',
    currencySymbol: '✦',
    reagents: [
      { name: 'Brimstone',          icon: '🜍', desc: 'The fiery principle. Click to collect.' },
      { name: 'Quicksilver',        icon: '☿',  desc: 'The fluid spirit. Collected every 10s.' },
      { name: 'Alchemic Salt',      icon: '🜔', desc: 'The base principle. Collected every 20s.' },
      { name: 'Philosopher\'s Dust',icon: '✦',  desc: 'Rare luminous powder. Collected every 40s.' },
      { name: 'Auric Flakes',       icon: '⚜',  desc: 'Transmuted gold. Collected every 90s.' },
    ],
    upgrades: [
      { name: 'Clockwork Bellows',  desc: 'Auto-collects Brimstone every cycle.' },
      { name: 'Silver Siphon',      desc: 'Auto-collects Quicksilver each cycle.' },
      { name: 'Refined Crucible',   desc: 'Brimstone yields ×2 essence per collect.' },
      { name: 'Hermetic Seal',      desc: 'Quicksilver yields ×2 essence per collect.' },
      { name: 'Tidal Retort',       desc: 'Auto-collects Alchemic Salt.' },
      { name: 'Calcination Oven',   desc: 'Alchemic Salt yields ×2 essence.' },
      { name: 'Astral Conduit',     desc: 'Auto-collects Philosopher\'s Dust.' },
      { name: 'Lunar Prism',        desc: 'Philosopher\'s Dust yields ×3 essence.' },
      { name: 'Perpetual Athanor',  desc: 'Auto-collects Auric Flakes.' },
    ],
  },
  light: {
    label: '☀ Garden',
    title: '🌿 The Herbalist\'s Garden',
    subtitle: 'Tend your garden. Gather herbs. Brew gentle remedies.',
    currency: 'petals',
    currencySymbol: '❀',
    reagents: [
      { name: 'Chamomile',   icon: '🌼', desc: 'A gentle bloom. Click to gather.' },
      { name: 'Lavender',    icon: '💜', desc: 'Fragrant sprigs. Gathered every 10s.' },
      { name: 'Rosemary',    icon: '🌿', desc: 'Woody herb. Gathered every 20s.' },
      { name: 'Rose Petals', icon: '🌹', desc: 'Delicate petals. Gathered every 40s.' },
      { name: 'Saffron',     icon: '🧡', desc: 'Precious threads. Gathered every 90s.' },
    ],
    upgrades: [
      { name: 'Wicker Basket',     desc: 'Auto-gathers Chamomile each cycle.' },
      { name: 'Lavender Sachet',   desc: 'Auto-gathers Lavender each cycle.' },
      { name: 'Silver Shears',     desc: 'Chamomile yields ×2 petals per gather.' },
      { name: 'Drying Rack',       desc: 'Lavender yields ×2 petals per gather.' },
      { name: 'Stone Pestle',      desc: 'Auto-gathers Rosemary.' },
      { name: 'Pressing Board',    desc: 'Rosemary yields ×2 petals.' },
      { name: 'Rose Trellis',      desc: 'Auto-gathers Rose Petals.' },
      { name: 'Crystal Vial',      desc: 'Rose Petals yield ×3 petals.' },
      { name: 'Golden Spice Rack', desc: 'Auto-gathers Saffron.' },
    ],
  },
  kittens: {
    label: '🐱 Kittens',
    title: '🌈 Kitten Rainbow Meadow',
    subtitle: 'Collect cuddles. Grow flowers. Spread happiness forever!',
    currency: 'cuddles',
    currencySymbol: '💖',
    reagents: [
      { name: 'Tiny Meows',    icon: '🐱', desc: 'The tiniest meow! Click to collect!' },
      { name: 'Daisy Chains',  icon: '🌸', desc: 'Pretty daisy chains! Every 10s!' },
      { name: 'Rainbow Drops', icon: '🌈', desc: 'Sparkly rainbow drops! Every 20s!' },
      { name: 'Fluffy Purrs',  icon: '😻', desc: 'Extra fluffy purrs! Every 40s!' },
      { name: 'Stardust',      icon: '✨', desc: 'Magic stardust! Every 90s!' },
    ],
    upgrades: [
      { name: 'Cozy Cat Bed',     desc: 'Auto-collects Tiny Meows! So cozy!' },
      { name: 'Flower Crown',     desc: 'Auto-collects Daisy Chains!' },
      { name: 'Happy Purr Motor', desc: 'Tiny Meows give ×2 cuddles! Purr!' },
      { name: 'Double Rainbow',   desc: 'Daisy Chains give ×2 cuddles!' },
      { name: 'Cloud Bouncer',    desc: 'Auto-collects Rainbow Drops!' },
      { name: 'Glitter Factory',  desc: 'Rainbow Drops give ×2 cuddles!' },
      { name: 'Snuggle Amplifier',desc: 'Auto-collects Fluffy Purrs!' },
      { name: 'Prism Collar',     desc: 'Fluffy Purrs give ×3 cuddles!' },
      { name: 'Cosmic Catnip',    desc: 'Auto-collects Stardust!' },
    ],
  },
  plain: {
    label: '📋 Plain',
    title: 'Idle Collector',
    subtitle: 'Collect items. Accumulate points. Unlock upgrades.',
    currency: 'points',
    currencySymbol: '★',
    reagents: [
      { name: 'Item A', icon: '🟧', desc: 'Produces every 4s. Click to collect.' },
      { name: 'Item B', icon: '🟦', desc: 'Produces every 10s.' },
      { name: 'Item C', icon: '🟩', desc: 'Produces every 20s.' },
      { name: 'Item D', icon: '🟪', desc: 'Produces every 40s.' },
      { name: 'Item E', icon: '🟨', desc: 'Produces every 90s.' },
    ],
    upgrades: [
      { name: 'Upgrade 1',  desc: 'Auto-collects Item A.' },
      { name: 'Upgrade 2',  desc: 'Auto-collects Item B.' },
      { name: 'Upgrade 3',  desc: 'Item A gives ×2 points.' },
      { name: 'Upgrade 4',  desc: 'Item B gives ×2 points.' },
      { name: 'Upgrade 5',  desc: 'Auto-collects Item C.' },
      { name: 'Upgrade 6',  desc: 'Item C gives ×2 points.' },
      { name: 'Upgrade 7',  desc: 'Auto-collects Item D.' },
      { name: 'Upgrade 8',  desc: 'Item D gives ×3 points.' },
      { name: 'Upgrade 9',  desc: 'Auto-collects Item E.' },
    ],
  },
};

let currentSkin = 'dark';

function getSkin() { return SKINS[currentSkin]; }

function applySkin(skinKey) {
  currentSkin = skinKey;
  const skin = getSkin();
  document.documentElement.dataset.theme = skinKey;
  document.getElementById('gameTitle').textContent = skin.title;
  document.getElementById('gameSubtitle').textContent = skin.subtitle;
  document.getElementById('essenceLabel').textContent = skin.currency.charAt(0).toUpperCase() + skin.currency.slice(1);
  document.getElementById('currencySymbol').textContent = skin.currencySymbol;
  // Update skin buttons
  document.querySelectorAll('.skin-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.skin === skinKey);
  });
  localStorage.setItem('idle_skin', skinKey);
}

// ─── Game Data ───────────────────────────────────────────────────────────────

const REAGENTS = [
  { id: 'sulfur',     color: 'c-amber',  interval: 4,  value: 1,   unlockCost: 0    },
  { id: 'mercury',    color: 'c-blue',   interval: 10, value: 5,   unlockCost: 15   },
  { id: 'salt',       color: 'c-green',  interval: 20, value: 10,  unlockCost: 200  },
  { id: 'phosphorus', color: 'c-purple', interval: 40, value: 30,  unlockCost: 1000 },
  { id: 'gold',       color: 'c-gold',   interval: 90, value: 100, unlockCost: 8000 },
];

const UPGRADES = [
  {
    id: 'auto_sulfur',     cost: 80,
    effect: () => { state.auto.sulfur = true; log(skinMsg('auto', 0)); },
    available: () => state.unlocked.sulfur, purchased: false,
  },
  {
    id: 'auto_mercury',    cost: 500,
    effect: () => { state.auto.mercury = true; log(skinMsg('auto', 1)); },
    available: () => state.unlocked.mercury, purchased: false,
  },
  {
    id: 'double_sulfur',   cost: 300,
    effect: () => { state.multiplier.sulfur = (state.multiplier.sulfur || 1) * 2; log(skinMsg('double', 0)); },
    available: () => state.unlocked.sulfur, purchased: false,
  },
  {
    id: 'double_mercury',  cost: 1500,
    effect: () => { state.multiplier.mercury = (state.multiplier.mercury || 1) * 2; log(skinMsg('double', 1)); },
    available: () => state.unlocked.mercury, purchased: false,
  },
  {
    id: 'auto_salt',       cost: 3000,
    effect: () => { state.auto.salt = true; log(skinMsg('auto', 2)); },
    available: () => state.unlocked.salt, purchased: false,
  },
  {
    id: 'double_salt',     cost: 5000,
    effect: () => { state.multiplier.salt = (state.multiplier.salt || 1) * 2; log(skinMsg('double', 2)); },
    available: () => state.unlocked.salt, purchased: false,
  },
  {
    id: 'auto_phosphorus', cost: 20000,
    effect: () => { state.auto.phosphorus = true; log(skinMsg('auto', 3)); },
    available: () => state.unlocked.phosphorus, purchased: false,
  },
  {
    id: 'double_phosphorus', cost: 40000,
    effect: () => { state.multiplier.phosphorus = (state.multiplier.phosphorus || 1) * 3; log(skinMsg('double', 3)); },
    available: () => state.unlocked.phosphorus, purchased: false,
  },
  {
    id: 'auto_gold',       cost: 150000,
    effect: () => { state.auto.gold = true; log(skinMsg('auto', 4)); },
    available: () => state.unlocked.gold, purchased: false,
  },
];

function skinMsg(type, reagentIdx) {
  const skin = getSkin();
  const r = skin.reagents[reagentIdx];
  const u = skin.upgrades[reagentIdx * 2 + (type === 'auto' ? 0 : 1)] || skin.upgrades[reagentIdx];
  if (type === 'auto') return `${u.name} — ${r.name} now collects automatically!`;
  return `${u.name} — ${r.name} yield increased!`;
}

// ─── State ────────────────────────────────────────────────────────────────────

let state = {
  essence: 0,
  totalEarned: 0,
  unlocked: { sulfur: true },
  auto: {},
  multiplier: {},
  timers: {},
  upgrades: {},
};

// ─── Init ─────────────────────────────────────────────────────────────────────

function initState() {
  REAGENTS.forEach(r => {
    if (!state.timers[r.id]) state.timers[r.id] = 0;
    if (!state.multiplier[r.id]) state.multiplier[r.id] = 1;
  });
  UPGRADES.forEach(u => {
    if (state.upgrades[u.id]) u.purchased = true;
  });
}

// ─── Rendering ────────────────────────────────────────────────────────────────

function renderReagents() {
  const panel = document.getElementById('reagentsPanel');
  const skin = getSkin();

  REAGENTS.forEach((r, i) => {
    const sd = skin.reagents[i];
    const unlocked = !!state.unlocked[r.id];
    const canUnlock = !unlocked && state.essence >= r.unlockCost && r.unlockCost > 0;
    const isAuto = !!state.auto[r.id];
    const intervalMs = r.interval * 1000;
    const progress = unlocked ? Math.min((state.timers[r.id] || 0) / intervalMs, 1) : 0;
    const ready = progress >= 1 && unlocked && !isAuto;

    let card = panel.querySelector(`[data-id="${r.id}"]`);
    if (!card) {
      card = document.createElement('div');
      card.dataset.id = r.id;
      card.innerHTML = `
        <div class="reagent-header">
          <span class="reagent-icon"></span>
          <span class="reagent-name reagent-name-text"></span>
          <span class="reagent-count"></span>
        </div>
        <div class="reagent-desc reagent-desc-text"></div>
        <div class="progress-wrap"><div class="progress-bar"></div></div>
        <button class="collect-btn"></button>
      `;
      card.querySelector('.collect-btn').addEventListener('click', () => handleCollect(r.id));
      panel.appendChild(card);
    }

    card.className = [
      'reagent-card', r.color,
      !unlocked ? 'locked' : '',
      ready ? 'ready' : '',
      progress >= 0.7 && unlocked ? 'active-glow' : '',
    ].filter(Boolean).join(' ');

    const mult = state.multiplier[r.id] || 1;
    card.querySelector('.reagent-icon').textContent = sd.icon;
    card.querySelector('.reagent-name-text').innerHTML =
      sd.name + (isAuto ? '<span class="auto-badge">AUTO</span>' : '');
    card.querySelector('.reagent-count').textContent =
      fmt(state.timers[r.id + '_collected'] || 0) + ' collected';
    card.querySelector('.reagent-desc-text').textContent =
      sd.desc + (unlocked ? ` · ${r.interval}s · +${fmt(r.value * mult)} ${skin.currency}` : '');
    card.querySelector('.progress-bar').style.width = (progress * 100).toFixed(1) + '%';

    const btn = card.querySelector('.collect-btn');
    if (!unlocked) {
      btn.textContent = r.unlockCost === 0 ? 'Available' : `Unlock — ${fmt(r.unlockCost)} ${skin.currency}`;
      btn.disabled = !canUnlock && r.unlockCost > 0;
    } else if (isAuto) {
      btn.textContent = 'Auto-collecting…';
      btn.disabled = true;
    } else {
      btn.textContent = ready ? `Collect (+${fmt(r.value * mult)})` : 'Distilling…';
      btn.disabled = !ready;
    }
  });
}

function renderUpgrades() {
  const panel = document.getElementById('upgradesPanel');
  const skin = getSkin();

  UPGRADES.forEach((u, i) => {
    const sd = skin.upgrades[i];
    const avail = u.available();
    const canBuy = avail && !u.purchased && state.essence >= u.cost;

    let card = panel.querySelector(`[data-upgrade-id="${u.id}"]`);
    if (!card) {
      card = document.createElement('div');
      card.dataset.upgradeId = u.id;
      card.innerHTML = `
        <div class="upgrade-header">
          <span class="upgrade-name-text"></span>
          <span class="upgrade-cost-text"></span>
        </div>
        <div class="upgrade-desc-text"></div>
        <button class="upgrade-btn"></button>
      `;
      card.querySelector('.upgrade-btn').addEventListener('click', () => buyUpgrade(u.id));
      panel.appendChild(card);
    }

    card.className = `upgrade-card ${u.purchased ? 'purchased' : ''} ${!avail ? 'locked' : ''}`;
    card.querySelector('.upgrade-name-text').textContent = (u.purchased ? '✓ ' : '') + sd.name;
    card.querySelector('.upgrade-cost-text').textContent = u.purchased ? 'Done' : fmt(u.cost) + ' ' + skin.currencySymbol;
    card.querySelector('.upgrade-desc-text').textContent = sd.desc;

    const btn = card.querySelector('.upgrade-btn');
    if (u.purchased) {
      btn.style.display = 'none';
    } else {
      btn.style.display = '';
      btn.textContent = !avail ? 'Locked' : canBuy ? 'Purchase' : 'Insufficient ' + skin.currency;
      btn.disabled = !canBuy;
    }
  });
}

function renderHUD() {
  const skin = getSkin();
  document.getElementById('essenceDisplay').textContent = fmt(state.essence);
  document.getElementById('totalEarned').textContent = fmt(state.totalEarned);
  let rate = 0;
  REAGENTS.forEach(r => {
    if (state.auto[r.id] && state.unlocked[r.id]) {
      rate += (r.value * (state.multiplier[r.id] || 1)) / r.interval;
    }
  });
  document.getElementById('rateDisplay').textContent = (rate > 0 ? '+' : '') + rate.toFixed(2) + '/s';
}

// ─── Actions ─────────────────────────────────────────────────────────────────

function handleCollect(id) {
  const r = REAGENTS.find(x => x.id === id);
  if (!r) return;

  if (!state.unlocked[id]) {
    if (state.essence >= r.unlockCost) {
      state.essence -= r.unlockCost;
      state.unlocked[id] = true;
      state.timers[id] = 0;
      const sd = getSkin().reagents[REAGENTS.indexOf(r)];
      log(`${sd.icon} ${sd.name} unlocked!`, 'highlight');
      showToast(`${sd.icon} ${sd.name} unlocked!`);
      autoSave();
      renderReagents();
      renderHUD();
    }
    return;
  }

  const intervalMs = r.interval * 1000;
  if ((state.timers[id] || 0) < intervalMs) return;
  doCollect(r);
}

function doCollect(r) {
  const amount = r.value * (state.multiplier[r.id] || 1);
  state.essence += amount;
  state.totalEarned = (state.totalEarned || 0) + amount;
  state.timers[r.id] = 0;
  state.timers[r.id + '_collected'] = (state.timers[r.id + '_collected'] || 0) + 1;
  spawnParticle(`+${fmt(amount)}`, r.color);
  checkMilestones();
  renderHUD();
}

function buyUpgrade(id) {
  const u = UPGRADES.find(x => x.id === id);
  if (!u || u.purchased || state.essence < u.cost) return;
  state.essence -= u.cost;
  u.purchased = true;
  state.upgrades[id] = true;
  u.effect();
  autoSave();
  renderUpgrades();
  renderHUD();
}

// ─── Game Loop ────────────────────────────────────────────────────────────────

let lastTick = Date.now();

function tick() {
  const now = Date.now();
  const delta = now - lastTick;
  lastTick = now;

  REAGENTS.forEach(r => {
    if (!state.unlocked[r.id]) return;
    const intervalMs = r.interval * 1000;
    state.timers[r.id] = (state.timers[r.id] || 0) + delta;

    if (state.auto[r.id] && state.timers[r.id] >= intervalMs) {
      const cycles = Math.floor(state.timers[r.id] / intervalMs);
      for (let i = 0; i < cycles; i++) doCollect(r);
      state.timers[r.id] = state.timers[r.id] % intervalMs;
    }
  });

  renderReagents();
  renderUpgrades();
  renderHUD();
  requestAnimationFrame(tick);
}

// ─── Particles ────────────────────────────────────────────────────────────────

const colorMap = {
  'c-amber':  '#d4621a',
  'c-blue':   '#4a9fcc',
  'c-green':  '#6abf5e',
  'c-purple': '#aa60cc',
  'c-gold':   '#e8b84b',
};

function spawnParticle(text, colorClass) {
  const el = document.createElement('div');
  el.className = 'particle';
  el.textContent = text;
  el.style.color = colorMap[colorClass] || '#c8922a';
  el.style.left = (Math.random() * 60 + 20) + '%';
  el.style.top  = (Math.random() * 40 + 20) + '%';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 950);
}

// ─── Milestones ───────────────────────────────────────────────────────────────

const milestones = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000];
let reachedMilestones = new Set();

function checkMilestones() {
  milestones.forEach(m => {
    if (!reachedMilestones.has(m) && state.totalEarned >= m) {
      reachedMilestones.add(m);
      log(`Milestone: ${fmt(m)} ${getSkin().currency} collected!`, 'highlight');
    }
  });
}

// ─── Log ─────────────────────────────────────────────────────────────────────

function log(msg, cls = '') {
  const panel = document.getElementById('logPanel');
  const ts = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const div = document.createElement('div');
  div.className = 'log-entry ' + cls;
  div.textContent = `[${ts}] ${msg}`;
  panel.prepend(div);
  if (panel.children.length > 60) panel.lastElementChild.remove();
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function showToast(msg) {
  const old = document.querySelector('.toast');
  if (old) old.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3100);
}

// ─── Format numbers ───────────────────────────────────────────────────────────

function fmt(n) {
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'k';
  return Math.floor(n).toString();
}

// ─── Save / Load ──────────────────────────────────────────────────────────────

function buildSaveData() {
  return {
    essence: state.essence,
    totalEarned: state.totalEarned,
    unlocked: state.unlocked,
    auto: state.auto,
    multiplier: state.multiplier,
    timers: state.timers,
    upgrades: state.upgrades,
    milestones: [...reachedMilestones],
    skin: currentSkin,
  };
}

function loadSaveData(data) {
  state.essence     = data.essence     || 0;
  state.totalEarned = data.totalEarned || 0;
  state.unlocked    = data.unlocked    || { sulfur: true };
  state.auto        = data.auto        || {};
  state.multiplier  = data.multiplier  || {};
  state.timers      = data.timers      || {};
  state.upgrades    = data.upgrades    || {};
  reachedMilestones = new Set(data.milestones || []);
  UPGRADES.forEach(u => { u.purchased = !!state.upgrades[u.id]; });
  REAGENTS.forEach(r => { if (!state.multiplier[r.id]) state.multiplier[r.id] = 1; });
  if (data.skin) applySkin(data.skin);
}

// Auto-save to localStorage
function autoSave() {
  try {
    localStorage.setItem('idle_save', JSON.stringify(buildSaveData()));
  } catch(e) {}
}

// Periodic auto-save every 10s
setInterval(autoSave, 10000);

// Download save as a file
function downloadSave() {
  autoSave();
  const json = JSON.stringify(buildSaveData(), null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'idle-save.json';
  a.click();
  URL.revokeObjectURL(url);
  log('Save file downloaded.', 'highlight');
}

// Upload save from a file
function uploadSave() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json,application/json';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const data = JSON.parse(ev.target.result);
        loadSaveData(data);
        autoSave();
        log('Save file loaded. Welcome back!', 'highlight');
        showToast('Save loaded!');
      } catch(err) {
        log('Could not read save file — file may be corrupt.', '');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}

// Copy save code to clipboard
function exportSave() {
  const code = btoa(JSON.stringify(buildSaveData()));
  navigator.clipboard.writeText(code).then(() => {
    log('Save code copied to clipboard.', 'highlight');
    showToast('Save code copied!');
  }).catch(() => {
    // Fallback: show in textarea
    document.getElementById('saveCode').value = code;
    document.getElementById('saveCodeRow').style.display = 'flex';
    log('Save code shown below — copy it manually.', 'highlight');
  });
}

// Import from pasted code
function importSave() {
  const code = document.getElementById('saveCode').value.trim();
  if (!code) { log('No save code pasted.'); return; }
  try {
    const data = JSON.parse(atob(code));
    loadSaveData(data);
    autoSave();
    log('Save restored. Welcome back!', 'highlight');
    showToast('Save loaded!');
    document.getElementById('saveCode').value = '';
    document.getElementById('saveCodeRow').style.display = 'none';
  } catch(e) {
    log('Save code invalid or corrupt.', '');
  }
}

function resetGame() {
  if (!confirm('Erase all progress and begin anew?')) return;
  state = {
    essence: 0, totalEarned: 0,
    unlocked: { sulfur: true },
    auto: {}, multiplier: {}, timers: {}, upgrades: {},
  };
  reachedMilestones = new Set();
  UPGRADES.forEach(u => { u.purchased = false; });
  REAGENTS.forEach(r => { state.multiplier[r.id] = 1; });
  localStorage.removeItem('idle_save');
  log('Progress erased. The work begins anew.', 'highlight');
}

// ─── Boot ─────────────────────────────────────────────────────────────────────

// Try to restore from localStorage first
const saved = localStorage.getItem('idle_save');
if (saved) {
  try {
    loadSaveData(JSON.parse(saved));
    log('Progress restored from last session.', 'highlight');
  } catch(e) {
    initState();
    log('Could not restore last session. Starting fresh.', '');
  }
} else {
  initState();
  log('The Workshop stirs to life. Begin your work.', 'highlight');
}

// Restore skin preference (in case not in save)
const savedSkin = localStorage.getItem('idle_skin');
if (savedSkin && SKINS[savedSkin]) applySkin(savedSkin);
else applySkin(currentSkin);

requestAnimationFrame(tick);
