// ─── Skin Definitions ────────────────────────────────────────────────────────

const SKINS = {
  dark: {
    label: '⚗ Alchemist',
    title: '⚗ The Alchemist\'s Workshop',
    subtitle: 'Gather reagents. Transmute essence. Uncover the Great Work.',
    currency: 'essence',
    currencySymbol: '✦',
    waiting: 'Distilling…',
    collecting: 'Collect',
    prestigeVerb: 'Transcend',
    prestigeToken: 'Resonance',
    reagents: [
      { name: 'Brimstone',          icon: '🜍', desc: 'The fiery principle. Click to collect.' },
      { name: 'Quicksilver',        icon: '☿',  desc: 'The fluid spirit. Collected every 10s.' },
      { name: 'Alchemic Salt',      icon: '🜔', desc: 'The base principle. Collected every 20s.' },
      { name: 'Philosopher\'s Dust',icon: '✦',  desc: 'Rare luminous powder. Collected every 40s.' },
      { name: 'Auric Flakes',       icon: '⚜',  desc: 'Transmuted gold. Collected every 90s.' },
      { name: 'Void Crystal',       icon: '🔮', desc: 'A shard of pure void. Collected every 3 min.' },
      { name: 'Dragon Scale',       icon: '🐉', desc: 'Ancient draconic armour. Collected every 5 min.' },
      { name: 'Celestial Dust',     icon: '🌟', desc: 'Stardust from dying suns. Collected every 10 min.' },
    ],
    upgrades: [
      { name: 'Clockwork Bellows',   desc: 'Auto-collects Brimstone every cycle.' },
      { name: 'Silver Siphon',       desc: 'Auto-collects Quicksilver each cycle.' },
      { name: 'Refined Crucible',    desc: 'Brimstone yields ×2 essence per collect.' },
      { name: 'Hermetic Seal',       desc: 'Quicksilver yields ×2 essence per collect.' },
      { name: 'Tidal Retort',        desc: 'Auto-collects Alchemic Salt.' },
      { name: 'Calcination Oven',    desc: 'Alchemic Salt yields ×2 essence.' },
      { name: 'Astral Conduit',      desc: 'Auto-collects Philosopher\'s Dust.' },
      { name: 'Lunar Prism',         desc: 'Philosopher\'s Dust yields ×3 essence.' },
      { name: 'Perpetual Athanor',   desc: 'Auto-collects Auric Flakes.' },
      { name: 'Grand Furnace',       desc: 'Auric Flakes yield ×2 essence.' },
      { name: 'Brimstone Overdrive', desc: 'Brimstone yields ×3 essence.' },
      { name: 'Quicksilver Torrent', desc: 'Quicksilver yields ×3 essence.' },
      { name: 'Void Resonator',      desc: 'Auto-collects Void Crystal.' },
      { name: 'Void Amplifier',      desc: 'Void Crystal yields ×2 essence.' },
      { name: 'Dragon Hearth',       desc: 'Auto-collects Dragon Scale.' },
      { name: 'Dragon Amplifier',    desc: 'Dragon Scale yields ×2 essence.' },
      { name: 'Star Engine',         desc: 'Auto-collects Celestial Dust.' },
      { name: 'Celestial Amplifier', desc: 'Celestial Dust yields ×2 essence.' },
    ],
  },
  light: {
    label: '☀ Garden',
    title: '🌿 The Herbalist\'s Garden',
    subtitle: 'Tend your garden. Gather herbs. Brew gentle remedies.',
    currency: 'petals',
    currencySymbol: '❀',
    waiting: 'Growing…',
    collecting: 'Gather',
    prestigeVerb: 'Bloom',
    prestigeToken: 'Seedling',
    reagents: [
      { name: 'Chamomile',    icon: '🌼', desc: 'A gentle bloom. Click to gather.' },
      { name: 'Lavender',     icon: '💜', desc: 'Fragrant sprigs. Gathered every 10s.' },
      { name: 'Rosemary',     icon: '🌿', desc: 'Woody herb. Gathered every 20s.' },
      { name: 'Rose Petals',  icon: '🌹', desc: 'Delicate petals. Gathered every 40s.' },
      { name: 'Saffron',      icon: '🧡', desc: 'Precious threads. Gathered every 90s.' },
      { name: 'Moonflower',   icon: '🌙', desc: 'Blooms only at night. Every 3 min.' },
      { name: 'Mandrake Root',icon: '🫚', desc: 'Rare magical root. Every 5 min.' },
      { name: 'Starbloom',    icon: '🌟', desc: 'A flower of pure light. Every 10 min.' },
    ],
    upgrades: [
      { name: 'Wicker Basket',      desc: 'Auto-gathers Chamomile each cycle.' },
      { name: 'Lavender Sachet',    desc: 'Auto-gathers Lavender each cycle.' },
      { name: 'Silver Shears',      desc: 'Chamomile yields ×2 petals.' },
      { name: 'Drying Rack',        desc: 'Lavender yields ×2 petals.' },
      { name: 'Stone Pestle',       desc: 'Auto-gathers Rosemary.' },
      { name: 'Pressing Board',     desc: 'Rosemary yields ×2 petals.' },
      { name: 'Rose Trellis',       desc: 'Auto-gathers Rose Petals.' },
      { name: 'Crystal Vial',       desc: 'Rose Petals yield ×3 petals.' },
      { name: 'Golden Spice Rack',  desc: 'Auto-gathers Saffron.' },
      { name: 'Saffron Press',      desc: 'Saffron yields ×2 petals.' },
      { name: 'Chamomile Overdrive',desc: 'Chamomile yields ×3 petals.' },
      { name: 'Lavender Cascade',   desc: 'Lavender yields ×3 petals.' },
      { name: 'Moon Basin',         desc: 'Auto-gathers Moonflower.' },
      { name: 'Moon Amplifier',     desc: 'Moonflower yields ×2 petals.' },
      { name: 'Root Cellar',        desc: 'Auto-gathers Mandrake Root.' },
      { name: 'Root Amplifier',     desc: 'Mandrake Root yields ×2 petals.' },
      { name: 'Solar Trellis',      desc: 'Auto-gathers Starbloom.' },
      { name: 'Star Amplifier',     desc: 'Starbloom yields ×2 petals.' },
    ],
  },
  kittens: {
    label: '🐱 Kittens',
    title: '🌈 Kitten Rainbow Meadow',
    subtitle: 'Collect cuddles. Grow flowers. Spread happiness forever!',
    currency: 'cuddles',
    currencySymbol: '💖',
    waiting: 'Snuggling…',
    collecting: 'Collect',
    prestigeVerb: 'Ascend',
    prestigeToken: 'Sparkle',
    reagents: [
      { name: 'Tiny Meows',      icon: '🐱', desc: 'The tiniest meow! Click to collect!' },
      { name: 'Daisy Chains',    icon: '🌸', desc: 'Pretty daisy chains! Every 10s!' },
      { name: 'Rainbow Drops',   icon: '🌈', desc: 'Sparkly rainbow drops! Every 20s!' },
      { name: 'Fluffy Purrs',    icon: '😻', desc: 'Extra fluffy purrs! Every 40s!' },
      { name: 'Stardust',        icon: '✨', desc: 'Magic stardust! Every 90s!' },
      { name: 'Moonbeam Kisses', icon: '🌙', desc: 'Soft moonbeam kisses! Every 3 min!' },
      { name: 'Dragon Nuzzles',  icon: '🐲', desc: 'Baby dragon nuzzles! Every 5 min!' },
      { name: 'Cosmic Boops',    icon: '💫', desc: 'Boop from outer space! Every 10 min!' },
    ],
    upgrades: [
      { name: 'Cozy Cat Bed',       desc: 'Auto-collects Tiny Meows! So cozy!' },
      { name: 'Flower Crown',       desc: 'Auto-collects Daisy Chains!' },
      { name: 'Happy Purr Motor',   desc: 'Tiny Meows give ×2 cuddles!' },
      { name: 'Double Rainbow',     desc: 'Daisy Chains give ×2 cuddles!' },
      { name: 'Cloud Bouncer',      desc: 'Auto-collects Rainbow Drops!' },
      { name: 'Glitter Factory',    desc: 'Rainbow Drops give ×2 cuddles!' },
      { name: 'Snuggle Amplifier',  desc: 'Auto-collects Fluffy Purrs!' },
      { name: 'Prism Collar',       desc: 'Fluffy Purrs give ×3 cuddles!' },
      { name: 'Cosmic Catnip',      desc: 'Auto-collects Stardust!' },
      { name: 'Stardust Shaker',    desc: 'Stardust gives ×2 cuddles!' },
      { name: 'Mega Purr Engine',   desc: 'Tiny Meows give ×3 cuddles!' },
      { name: 'Rainbow Tripler',    desc: 'Daisy Chains give ×3 cuddles!' },
      { name: 'Moon Hammock',       desc: 'Auto-collects Moonbeam Kisses!' },
      { name: 'Moon Amplifier',     desc: 'Moonbeam Kisses give ×2 cuddles!' },
      { name: 'Dragon Snuggle Pod', desc: 'Auto-collects Dragon Nuzzles!' },
      { name: 'Dragon Amplifier',   desc: 'Dragon Nuzzles give ×2 cuddles!' },
      { name: 'Boop Attractor',     desc: 'Auto-collects Cosmic Boops!' },
      { name: 'Cosmic Amplifier',   desc: 'Cosmic Boops give ×2 cuddles!' },
    ],
  },
  plain: {
    label: '📋 Plain',
    title: 'Idle Collector',
    subtitle: 'Collect items. Accumulate points. Unlock upgrades.',
    currency: 'points',
    currencySymbol: '★',
    waiting: 'Waiting…',
    collecting: 'Collect',
    prestigeVerb: 'Prestige',
    prestigeToken: 'Token',
    reagents: [
      { name: 'Item A', icon: '🟧', desc: 'Produces every 3s. Click to collect.' },
      { name: 'Item B', icon: '🟦', desc: 'Produces every 10s.' },
      { name: 'Item C', icon: '🟩', desc: 'Produces every 20s.' },
      { name: 'Item D', icon: '🟪', desc: 'Produces every 40s.' },
      { name: 'Item E', icon: '🟨', desc: 'Produces every 90s.' },
      { name: 'Item F', icon: '🟥', desc: 'Produces every 3 min.' },
      { name: 'Item G', icon: '⬜', desc: 'Produces every 5 min.' },
      { name: 'Item H', icon: '🔶', desc: 'Produces every 10 min.' },
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
      { name: 'Upgrade 10', desc: 'Item E gives ×2 points.' },
      { name: 'Upgrade 11', desc: 'Item A gives ×3 points.' },
      { name: 'Upgrade 12', desc: 'Item B gives ×3 points.' },
      { name: 'Upgrade 13', desc: 'Auto-collects Item F.' },
      { name: 'Upgrade 14', desc: 'Item F gives ×2 points.' },
      { name: 'Upgrade 15', desc: 'Auto-collects Item G.' },
      { name: 'Upgrade 16', desc: 'Item G gives ×2 points.' },
      { name: 'Upgrade 17', desc: 'Auto-collects Item H.' },
      { name: 'Upgrade 18', desc: 'Item H gives ×2 points.' },
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
  document.querySelectorAll('.skin-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.skin === skinKey);
  });
  localStorage.setItem('idle_skin', skinKey);
  renderPrestige();
}

// ─── Game Data ───────────────────────────────────────────────────────────────

const REAGENTS = [
  { id: 'sulfur',     color: 'c-amber',  interval: 3,   value: 1,    unlockCost: 0      },
  { id: 'mercury',    color: 'c-blue',   interval: 10,  value: 10,   unlockCost: 15     },
  { id: 'salt',       color: 'c-green',  interval: 20,  value: 10,   unlockCost: 200    },
  { id: 'phosphorus', color: 'c-purple', interval: 40,  value: 30,   unlockCost: 1000   },
  { id: 'gold',       color: 'c-gold',   interval: 90,  value: 100,  unlockCost: 8000   },
  { id: 'void',       color: 'c-void',   interval: 180, value: 400,  unlockCost: 60000  },
  { id: 'dragon',     color: 'c-dragon', interval: 300, value: 1200, unlockCost: 300000 },
  { id: 'celestial',  color: 'c-celest', interval: 600, value: 4000, unlockCost: 1500000},
];

const UPGRADES = [
  // ── Tier 1 ──────────────────────────────────────────────────────────────────
  { id: 'auto_sulfur',      cost: 80,
    effect: () => { state.auto.sulfur = true; log(skinMsg('auto', 0)); },
    available: () => state.unlocked.sulfur, purchased: false },
  { id: 'auto_mercury',     cost: 350,
    effect: () => { state.auto.mercury = true; log(skinMsg('auto', 1)); },
    available: () => state.unlocked.mercury, purchased: false },
  { id: 'double_sulfur',    cost: 200,
    effect: () => { state.multiplier.sulfur = (state.multiplier.sulfur||1)*2; log(skinMsg('double',0)); },
    available: () => state.unlocked.sulfur, purchased: false },
  { id: 'double_mercury',   cost: 1500,
    effect: () => { state.multiplier.mercury = (state.multiplier.mercury||1)*2; log(skinMsg('double',1)); },
    available: () => state.unlocked.mercury, purchased: false },
  // ── Tier 2 ──────────────────────────────────────────────────────────────────
  { id: 'auto_salt',        cost: 3000,
    effect: () => { state.auto.salt = true; log(skinMsg('auto', 2)); },
    available: () => state.unlocked.salt, purchased: false },
  { id: 'double_salt',      cost: 5000,
    effect: () => { state.multiplier.salt = (state.multiplier.salt||1)*2; log(skinMsg('double',2)); },
    available: () => state.unlocked.salt, purchased: false },
  { id: 'auto_phosphorus',  cost: 20000,
    effect: () => { state.auto.phosphorus = true; log(skinMsg('auto', 3)); },
    available: () => state.unlocked.phosphorus, purchased: false },
  { id: 'triple_phosphorus',cost: 40000,
    effect: () => { state.multiplier.phosphorus = (state.multiplier.phosphorus||1)*3; log(skinMsg('double',3)); },
    available: () => state.unlocked.phosphorus, purchased: false },
  // ── Tier 3 ──────────────────────────────────────────────────────────────────
  { id: 'auto_gold',        cost: 150000,
    effect: () => { state.auto.gold = true; log(skinMsg('auto', 4)); },
    available: () => state.unlocked.gold, purchased: false },
  { id: 'double_gold',      cost: 250000,
    effect: () => { state.multiplier.gold = (state.multiplier.gold||1)*2; log(skinMsg('double',4)); },
    available: () => state.unlocked.gold, purchased: false },
  { id: 'triple_sulfur',    cost: 300000,
    effect: () => { state.multiplier.sulfur = (state.multiplier.sulfur||1)*3; log(skinMsg('double',0)); },
    available: () => state.upgrades['double_sulfur'], purchased: false },
  { id: 'triple_mercury',   cost: 350000,
    effect: () => { state.multiplier.mercury = (state.multiplier.mercury||1)*3; log(skinMsg('double',1)); },
    available: () => state.upgrades['double_mercury'], purchased: false },
  // ── Tier 4 (new collectors) ──────────────────────────────────────────────────
  { id: 'auto_void',        cost: 1000000,
    effect: () => { state.auto.void = true; log(skinMsg('auto', 5)); },
    available: () => state.unlocked.void, purchased: false },
  { id: 'double_void',      cost: 1500000,
    effect: () => { state.multiplier.void = (state.multiplier.void||1)*2; log(skinMsg('double',5)); },
    available: () => state.unlocked.void, purchased: false },
  { id: 'auto_dragon',      cost: 5000000,
    effect: () => { state.auto.dragon = true; log(skinMsg('auto', 6)); },
    available: () => state.unlocked.dragon, purchased: false },
  { id: 'double_dragon',    cost: 8000000,
    effect: () => { state.multiplier.dragon = (state.multiplier.dragon||1)*2; log(skinMsg('double',6)); },
    available: () => state.unlocked.dragon, purchased: false },
  { id: 'auto_celestial',   cost: 30000000,
    effect: () => { state.auto.celestial = true; log(skinMsg('auto', 7)); },
    available: () => state.unlocked.celestial, purchased: false },
  { id: 'double_celestial', cost: 50000000,
    effect: () => { state.multiplier.celestial = (state.multiplier.celestial||1)*2; log(skinMsg('double',7)); },
    available: () => state.unlocked.celestial, purchased: false },
];

function skinMsg(type, reagentIdx) {
  const skin = getSkin();
  const r = skin.reagents[reagentIdx];
  if (!r) return type === 'auto' ? 'Auto-collection activated!' : 'Yield increased!';
  const upgradeIdx = reagentIdx * 2 + (type === 'auto' ? 0 : 1);
  const u = skin.upgrades[upgradeIdx] || skin.upgrades[reagentIdx];
  if (type === 'auto') return `${u ? u.name : 'Auto'} — ${r.name} now collects automatically!`;
  return `${u ? u.name : 'Upgrade'} — ${r.name} yield increased!`;
}

// ─── Prestige ─────────────────────────────────────────────────────────────────
// prestigeTokens persists across resets; each token = +10% to all yields
// Prestige unlocks when totalEarned >= PRESTIGE_THRESHOLD
const PRESTIGE_THRESHOLD = 500000;

function prestigeBonus() {
  return 1 + (state.prestigeTokens || 0) * 0.1;
}

function canPrestige() {
  return state.totalEarned >= PRESTIGE_THRESHOLD;
}

function doPrestige() {
  const skin = getSkin();
  const tokens = Math.floor(Math.log2(state.totalEarned / PRESTIGE_THRESHOLD) + 1);
  const gained = Math.max(1, tokens);
  const prev = state.prestigeTokens || 0;
  const newTotal = prev + gained;

  if (!confirm(`${skin.prestigeVerb}? You will earn ${gained} ${skin.prestigeToken}${gained>1?'s':''} (total: ${newTotal}), giving +${Math.round(newTotal*10)}% to all yields. Your progress will reset.`)) return;

  state = {
    essence: 0,
    totalEarned: 0,
    unlocked: { sulfur: true },
    auto: {}, multiplier: {}, timers: {}, upgrades: {},
    prestigeTokens: newTotal,
    prestigeCount: (prev > 0 ? state.prestigeCount || 0 : 0) + 1,
  };
  reachedMilestones = new Set();
  UPGRADES.forEach(u => { u.purchased = false; });
  REAGENTS.forEach(r => { state.multiplier[r.id] = 1; });
  autoSave();
  log(`✦ ${skin.prestigeVerb}! You carry ${newTotal} ${skin.prestigeToken}${newTotal>1?'s':''} — all yields +${Math.round(newTotal*10)}%.`, 'highlight');
  showToast(`${skin.prestigeVerb} complete! +${Math.round(gained*10)}% bonus earned!`);
  renderPrestige();
}

function renderPrestige() {
  const skin = getSkin();
  const tokens = state.prestigeTokens || 0;
  const panel = document.getElementById('prestigePanel');
  if (!panel) return;

  const ready = canPrestige();
  const gained = ready ? Math.max(1, Math.floor(Math.log2(state.totalEarned / PRESTIGE_THRESHOLD) + 1)) : 0;

  panel.innerHTML = `
    <span class="prestige-label">
      ${tokens > 0 ? `${skin.prestigeToken}s: <strong>${tokens}</strong> (+${Math.round(tokens*10)}% yield)` : `${skin.prestigeVerb} unlocks at ${fmt(PRESTIGE_THRESHOLD)} total earned`}
    </span>
    ${ready ? `<button class="prestige-btn" onclick="doPrestige()">✦ ${skin.prestigeVerb} (+${gained} ${skin.prestigeToken}${gained>1?'s':''})</button>` : ''}
  `;
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
  prestigeTokens: 0,
  prestigeCount: 0,
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
  if (!state.prestigeTokens) state.prestigeTokens = 0;
  if (!state.prestigeCount) state.prestigeCount = 0;
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

    const mult = (state.multiplier[r.id] || 1) * prestigeBonus();
    const displayValue = Math.round(r.value * mult);
    card.querySelector('.reagent-icon').textContent = sd.icon;
    card.querySelector('.reagent-name-text').innerHTML =
      sd.name + (isAuto ? '<span class="auto-badge">AUTO</span>' : '');
    card.querySelector('.reagent-count').textContent =
      fmt(state.timers[r.id + '_collected'] || 0) + ' collected';
    card.querySelector('.reagent-desc-text').textContent =
      sd.desc + (unlocked ? ` · ${r.interval}s · +${fmt(displayValue)} ${skin.currency}` : '');
    card.querySelector('.progress-bar').style.width = (progress * 100).toFixed(1) + '%';

    const btn = card.querySelector('.collect-btn');
    if (!unlocked) {
      btn.textContent = r.unlockCost === 0 ? 'Available' : `Unlock — ${fmt(r.unlockCost)} ${skin.currency}`;
      btn.disabled = !canUnlock && r.unlockCost > 0;
    } else if (isAuto) {
      btn.textContent = 'Auto-collecting…';
      btn.disabled = true;
    } else {
      btn.textContent = ready ? `${skin.collecting} (+${fmt(displayValue)})` : skin.waiting;
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
    card.querySelector('.upgrade-name-text').textContent = (u.purchased ? '✓ ' : '') + (sd ? sd.name : u.id);
    card.querySelector('.upgrade-cost-text').textContent = u.purchased ? 'Done' : fmt(u.cost) + ' ' + skin.currencySymbol;
    card.querySelector('.upgrade-desc-text').textContent = sd ? sd.desc : '';

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
      rate += (r.value * (state.multiplier[r.id] || 1) * prestigeBonus()) / r.interval;
    }
  });
  document.getElementById('rateDisplay').textContent = (rate > 0 ? '+' : '') + rate.toFixed(2) + '/s';
  renderPrestige();
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
  const amount = Math.round(r.value * (state.multiplier[r.id] || 1) * prestigeBonus());
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
  'c-void':   '#9b59b6',
  'c-dragon': '#e74c3c',
  'c-celest': '#f1c40f',
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

const milestones = [10, 50, 100, 500, 1000, 5000, 10000, 50000, 100000, 500000, 1000000, 5000000, 10000000];
let reachedMilestones = new Set();

function checkMilestones() {
  milestones.forEach(m => {
    if (!reachedMilestones.has(m) && state.totalEarned >= m) {
      reachedMilestones.add(m);
      log(`Milestone: ${fmt(m)} ${getSkin().currency} earned!`, 'highlight');
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
  if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9)  return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6)  return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3)  return (n / 1e3).toFixed(1) + 'k';
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
    prestigeTokens: state.prestigeTokens || 0,
    prestigeCount: state.prestigeCount || 0,
    milestones: [...reachedMilestones],
    skin: currentSkin,
  };
}

function loadSaveData(data) {
  state.essence       = data.essence       || 0;
  state.totalEarned   = data.totalEarned   || 0;
  state.unlocked      = data.unlocked      || { sulfur: true };
  state.auto          = data.auto          || {};
  state.multiplier    = data.multiplier    || {};
  state.timers        = data.timers        || {};
  state.upgrades      = data.upgrades      || {};
  state.prestigeTokens= data.prestigeTokens|| 0;
  state.prestigeCount = data.prestigeCount || 0;
  reachedMilestones   = new Set(data.milestones || []);
  UPGRADES.forEach(u => { u.purchased = !!state.upgrades[u.id]; });
  REAGENTS.forEach(r => { if (!state.multiplier[r.id]) state.multiplier[r.id] = 1; });
  if (data.skin) applySkin(data.skin);
}

function autoSave() {
  try { localStorage.setItem('idle_save', JSON.stringify(buildSaveData())); } catch(e) {}
}

setInterval(autoSave, 10000);

function downloadSave() {
  autoSave();
  const blob = new Blob([JSON.stringify(buildSaveData(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'idle-save.json'; a.click();
  URL.revokeObjectURL(url);
  log('Save file downloaded.', 'highlight');
}

function uploadSave() {
  const input = document.createElement('input');
  input.type = 'file'; input.accept = '.json,application/json';
  input.onchange = e => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        loadSaveData(JSON.parse(ev.target.result));
        autoSave();
        log('Save file loaded. Welcome back!', 'highlight');
        showToast('Save loaded!');
      } catch(err) { log('Could not read save file.', ''); }
    };
    reader.readAsText(file);
  };
  input.click();
}

function exportSave() {
  const code = btoa(JSON.stringify(buildSaveData()));
  navigator.clipboard.writeText(code).then(() => {
    log('Save code copied to clipboard.', 'highlight');
    showToast('Save code copied!');
  }).catch(() => {
    document.getElementById('saveCode').value = code;
    document.getElementById('saveCodeRow').style.display = 'flex';
    log('Save code shown below — copy it manually.', 'highlight');
  });
}

function importSave() {
  const code = document.getElementById('saveCode').value.trim();
  if (!code) { log('No save code pasted.'); return; }
  try {
    loadSaveData(JSON.parse(atob(code)));
    autoSave();
    log('Save restored. Welcome back!', 'highlight');
    showToast('Save loaded!');
    document.getElementById('saveCode').value = '';
    document.getElementById('saveCodeRow').style.display = 'none';
  } catch(e) { log('Save code invalid or corrupt.', ''); }
}

function resetGame() {
  if (!confirm('Erase all progress and begin anew? (Prestige tokens are kept.)')) return;
  const tokens = state.prestigeTokens || 0;
  const count  = state.prestigeCount  || 0;
  state = {
    essence: 0, totalEarned: 0,
    unlocked: { sulfur: true },
    auto: {}, multiplier: {}, timers: {}, upgrades: {},
    prestigeTokens: tokens,
    prestigeCount: count,
  };
  reachedMilestones = new Set();
  UPGRADES.forEach(u => { u.purchased = false; });
  REAGENTS.forEach(r => { state.multiplier[r.id] = 1; });
  localStorage.removeItem('idle_save');
  log('Progress erased. Prestige tokens retained.', 'highlight');
}

// ─── Boot ─────────────────────────────────────────────────────────────────────

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

const savedSkin = localStorage.getItem('idle_skin');
if (savedSkin && SKINS[savedSkin]) applySkin(savedSkin);
else applySkin(currentSkin);

requestAnimationFrame(tick);
