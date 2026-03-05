const indicators = [
  { key: 'co2', label: 'Émissions CO₂', reverse: true },
  { key: 'energy', label: 'Consommation énergétique', reverse: true },
  { key: 'clean', label: 'Véhicules propres (%)', reverse: false },
  { key: 'fill', label: 'Taux de remplissage (%)', reverse: false }
];

// Opérateurs actifs par défaut
let activeOperators = ['ratp', 'tcl','rtm'];
let operatorsData = {};

document.addEventListener('DOMContentLoaded', async () => {
  operatorsData = await fetchOperatorsData();

  bindButtons();
  syncButtons();
  updateTable();
  updateScores();
  drawRadar();
});

// Gère les clics sur les boutons opérateurs
function bindButtons() {
  document.querySelectorAll('.operator-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const op = btn.dataset.operator;

      if (op === 'all') {
        activeOperators = ['ratp', 'tcl', 'rtm'];
      } else {
        document.querySelector('.operator-btn.all')?.classList.remove('active');

        if (activeOperators.includes(op)) {
          if (activeOperators.length === 1) return;
          activeOperators = activeOperators.filter(o => o !== op);
        } else {
          if (activeOperators.length === 2) activeOperators.shift();
          activeOperators.push(op);
        }
      }

      syncButtons();
      operatorsData = await fetchSelectedOperators(activeOperators);

      updateTable();
      updateScores();
      drawRadar();
    });
  });
}

// Synchronise l'état visuel des boutons
function syncButtons() {
  document.querySelectorAll('.operator-btn').forEach(btn => {
    const op = btn.dataset.operator;
    if (op === 'all') {
      btn.classList.toggle('active', activeOperators.length === 3);
    } else {
      btn.classList.toggle('active', activeOperators.includes(op));
    }
  });
}

// Met à jour le tableau des indicateurs
function updateTable() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  ['ratp', 'tcl', 'rtm'].forEach(op => {
    document.querySelectorAll(`.col-${op}`).forEach(el => {
      el.classList.toggle('hidden', !activeOperators.includes(op));
    });
  });

  indicators.forEach(ind => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ind.label}</td>
      <td class="col-ratp">${operatorsData.ratp?.[ind.key] ?? ''}</td>
      <td class="col-tcl">${operatorsData.tcl?.[ind.key] ?? ''}</td>
      <td class="col-rtm">${operatorsData.rtm?.[ind.key] ?? ''}</td>
    `;
    tbody.appendChild(row);
  });
}

// Met à jour les scores circulaires
function updateScores() {
  ['ratp', 'tcl', 'rtm'].forEach(op => {
    const circle = document.querySelector(`.score-circle.${op}`);
    if (!circle) return;

    if (activeOperators.includes(op)) {
      circle.classList.remove('hidden');
      circle.querySelector('.score-value').textContent = operatorsData[op]?.score ?? 0;
    } else {
      circle.classList.add('hidden');
    }
  });
}

// Dessine le radar
function drawRadar() {
  if (!operatorsData || activeOperators.length === 0) return;

  const canvas = document.getElementById('radarChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = 140;
  const axes = 5;
  const step = (2 * Math.PI) / axes;

  // Grille radar
  ctx.strokeStyle = '#ddd';
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    for (let j = 0; j <= axes; j++) {
      const a = j * step - Math.PI / 2;
      const rr = (r / 5) * i;
      ctx[j === 0 ? 'moveTo' : 'lineTo'](
        cx + rr * Math.cos(a),
        cy + rr * Math.sin(a)
      );
    }
    ctx.stroke();
  }

  const normalize = (v, max) => Math.max(0, Math.min(1, v / max)) * r;
  const colors = { ratp: '#2d6f3e', tcl: '#dc3545', rtm: '#0066cc' };

  // Tracer chaque opérateur
  activeOperators.forEach(op => {
    const d = operatorsData[op];
    if (!d) return;

    const values = [
      normalize(60 - d.co2, 60),       // CO₂ inversé
      normalize(5 - d.energy, 5),      // Energie inversé
      normalize(d.clean, 100),          // Véhicules propres
      normalize(d.fill, 100),           // Taux remplissage
      normalize(d.score, 100)           // Score global
    ];

    ctx.beginPath();
    values.forEach((v, i) => {
      const a = i * step - Math.PI / 2;
      const x = cx + v * Math.cos(a);
      const y = cy + v * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.strokeStyle = colors[op];
    ctx.fillStyle = colors[op] + '33';
    ctx.stroke();
    ctx.fill();
  });
}
