// ─── Game Data ───────────────────────────────────────────────────────────────

const REAGENTS = [
  {
    id: 'sulfur',
    name: 'Brimstone',
    icon: '🜍',
    desc: 'The fiery principle. Click to collect.',
    color: 'c-amber',
    interval: 4,
    value: 1,
    unlockCost: 0,
  },
  {
    id: 'mercury',
    name: 'Quicksilver',
    icon: '☿',
    desc: 'The fluid spirit. Collected every 10s.',
    color: 'c-blue',
    interval: 10,
    value: 5,
    unlockCost: 15,
  },
  {
    id: 'salt',
    name: 'Alchemic Salt',
    icon: '🜔',
    desc: 'The base principle. Collected every 20s.',
    color: 'c-green',
    interval: 20,
    value: 10,
    unlockCost: 200,
  },
  {
    id: 'phosphorus',
    name: 'Philosopher\'s Dust',
    icon: '✦',
    desc: 'Rare luminous powder. Collected every 40s.',
    color: 'c-purple',
    interval: 40,
    value: 30,
    unlockCost: 1000,
  },
  {
    id: 'gold',
    name: 'Auric Flakes',
    icon: '⚜',
    desc: 'Transmuted gold. Collected every 90s.',
    color: 'c-gold',
    interval: 90,
    value: 100,
    unlockCost: 8000,
  },
];

const UPGRADES = [
  {
    id: 'auto_sulfur',
    name: 'Clockwork Bellows',
    desc: 'Auto-collects Brimstone every cycle.',
    cost: 80,
    effect: () => { state.auto.sulfur = true; log('Clockwork Bellows installed — Brimstone flows freely.', 'upgrade-log'); },
    available: () => state.unlocked.sulfur,
    purchased: false,
  },
  {
    id: 'auto_mercury',
    name: 'Silver Siphon',
    desc: 'Auto-collects Quicksilver each cycle.',
    cost: 500,
    effect: () => { state.auto.mercury = true; log('Silver Siphon connected — Quicksilver gathers itself.', 'upgrade-log'); },
    available: () => state.unlocked.mercury,
    purchased: false,
  },
  {
    id: 'double_sulfur',
    name: 'Refined Crucible',
    desc: 'Brimstone yields ×2 essence per collect.',
    cost: 300,
    effect: () => { state.multiplier.sulfur = (state.multiplier.sulfur || 1) * 2; log('Crucible upgraded — Brimstone yields doubled!', 'upgrade-log'); },
    available: () => state.unlocked.sulfur,
    purchased: false,
  },
  {
    id: 'double_mercury',
    name: 'Hermetic Seal',
    desc: 'Quicksilver yields ×2 essence per collect.',
    cost: 1500,
    effect: () => { state.multiplier.mercury = (state.multiplier.mercury || 1) * 2; log('Hermetic Seal applied — Quicksilver potency doubled!', 'upgrade-log'); },
    available: () => state.unlocked.mercury,
    purchased: false,
  },
  {
    id: 'auto_salt',
    name: 'Tidal Retort',
    desc: 'Auto-collects Alchemic Salt.',
    cost: 3000,
    effect: () => { state.auto.salt = true; log('Tidal Retort placed — Salt collects without labour.', 'upgrade-log'); },
    available: () => state.unlocked.salt,
    purchased: false,
  },
  {
    id: 'double_salt',
    name: 'Calcination Oven',
    desc: 'Alchemic Salt yields ×2 essence.',
    cost: 5000,
    effect: () => { state.multiplier.salt = (state.multiplier.salt || 1) * 2; log('Calcination Oven fired — Salt yield doubled!', 'upgrade-log'); },
    available: () => state.unlocked.salt,
    purchased: false,
  },
  {
    id: 'auto_phosphorus',
    name: 'Astral Conduit',
    desc: 'Auto-collects Philosopher\'s Dust.',
    cost: 20000,
    effect: () => { state.auto.phosphorus = true; log('Astral Conduit opened — Dust drifts in unbidden.', 'upgrade-log'); },
    available: () => state.unlocked.phosphorus,
    purchased: false,
  },
  {
    id: 'double_phosphorus',
    name: 'Lunar Prism',
    desc: 'Philosopher\'s Dust yields ×3 essence.',
    cost: 40000,
    effect: () => { state.multiplier.phosphorus = (state.multiplier.phosphorus || 1) * 3; log('Lunar Prism aligned — Dust yield tripled!', 'upgrade-log'); },
    available: () => state.unlocked.phosphorus,
    purchased: false,
  },
  {
    id: 'auto_gold',
    name: 'Perpetual Athanor',
    desc: 'Auto-collects Auric Flakes.',
    cost: 150000,
    effect: () => { state.auto.gold = true; log('The Athanor burns eternal — Gold collects itself!', 'upgrade-log'); },
    available: () => state.unlocked.gold,
    purchased: false,
  },
];

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

  REAGENTS.forEach(r => {
    const unlocked = !!state.unlocked[r.id];
    const canUnlock = !unlocked && state.essence >= r.unlockCost && r.unlockCost > 0;
    const isAuto = !!state.auto[r.id];
    const intervalMs = r.interval * 1000;
    const progress = unlocked ? Math.min((state.timers[r.id] || 0) / intervalMs, 1) : 0;
    const ready = progress >= 1 && unlocked && !isAuto;

    // Create card on first render, update in place on subsequent ticks
    let card = panel.querySelector(`[data-id="${r.id}"]`);
    if (!card) {
      card = document.createElement('div');
      card.dataset.id = r.id;
      card.innerHTML = `
        <div class="reagent-header">
          <span class="reagent-icon">${r.icon}</span>
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

    // Update classes
    card.className = [
      'reagent-card',
      r.color,
      !unlocked ? 'locked' : '',
      ready ? 'ready' : '',
      progress >= 0.7 && unlocked ? 'active-glow' : '',
    ].filter(Boolean).join(' ');

    // Update text content
    const mult = state.multiplier[r.id] || 1;
    card.querySelector('.reagent-name-text').innerHTML =
      r.name + (isAuto ? '<span class="auto-badge">AUTO</span>' : '');
    card.querySelector('.reagent-count').textContent =
      fmt(state.timers[r.id + '_collected'] || 0) + ' collected';
    card.querySelector('.reagent-desc-text').textContent =
      r.desc + (unlocked ? ` · ${r.interval}s · +${fmt(r.value * mult)} essence` : '');
    card.querySelector('.progress-bar').style.width = (progress * 100).toFixed(1) + '%';

    // Update button
    const btn = card.querySelector('.collect-btn');
    if (!unlocked) {
      btn.textContent = r.unlockCost === 0 ? 'Available' : `Unlock — ${fmt(r.unlockCost)} essence`;
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
  panel.innerHTML = '';
  UPGRADES.forEach(u => {
    const avail = u.available();
    const canBuy = avail && !u.purchased && state.essence >= u.cost;
    const card = document.createElement('div');
    card.className = `upgrade-card ${u.purchased ? 'purchased' : ''} ${!avail ? 'locked' : ''}`;
    card.innerHTML = `
      <div class="upgrade-header">
        <span class="upgrade-name">${u.purchased ? '✓ ' : ''}${u.name}</span>
        <span class="upgrade-cost">${u.purchased ? 'Done' : fmt(u.cost) + ' ✦'}</span>
      </div>
      <div class="upgrade-desc">${u.desc}</div>
      ${!u.purchased ? `<button class="upgrade-btn" onclick="buyUpgrade('${u.id}')" ${canBuy ? '' : 'disabled'}>
        ${!avail ? 'Locked' : canBuy ? 'Purchase' : 'Insufficient Essence'}
      </button>` : ''}
    `;
    panel.appendChild(card);
  });
}

function renderHUD() {
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
      log(`✦ ${r.name} flask unsealed.`, 'highlight');
      showToast(`${r.icon} ${r.name} unlocked!`);
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
      log(`⚗ Milestone: ${fmt(m)} essence transmuted!`, 'highlight');
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

function exportSave() {
  const saveData = {
    essence: state.essence,
    totalEarned: state.totalEarned,
    unlocked: state.unlocked,
    auto: state.auto,
    multiplier: state.multiplier,
    timers: state.timers,
    upgrades: state.upgrades,
    milestones: [...reachedMilestones],
  };
  const code = btoa(JSON.stringify(saveData));
  document.getElementById('saveCode').value = code;
  log('Grimoire inscribed. Copy the save code to preserve your work.', 'highlight');
}

function importSave() {
  const code = document.getElementById('saveCode').value.trim();
  if (!code) { log('No save code provided.'); return; }
  try {
    const data = JSON.parse(atob(code));
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
    log('Grimoire restored. Welcome back, Alchemist.', 'highlight');
    showToast('Save loaded successfully!');
    document.getElementById('saveCode').value = '';
  } catch (e) {
    log('The runes are corrupt — save code invalid.', '');
  }
}

function resetGame() {
  if (!confirm('Erase all progress and begin anew?')) return;
  state = {
    essence: 0,
    totalEarned: 0,
    unlocked: { sulfur: true },
    auto: {},
    multiplier: {},
    timers: {},
    upgrades: {},
  };
  reachedMilestones = new Set();
  UPGRADES.forEach(u => { u.purchased = false; });
  REAGENTS.forEach(r => { state.multiplier[r.id] = 1; });
  log('The Workshop is empty. The Great Work begins anew.', 'highlight');
}

// ─── Boot ─────────────────────────────────────────────────────────────────────

initState();
// Pre-fill sulfur timer so the first collect is available immediately
//if (state.timers['sulfur'] === 0) {
//  state.timers['sulfur'] = REAGENTS.find(r => r.id === 'sulfur').interval * 1000;
//}
log('The Workshop stirs to life. Collect Brimstone to begin.', 'highlight');
requestAnimationFrame(tick);
