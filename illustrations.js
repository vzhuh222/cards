// SVG-иллюстрации к карточкам по планиметрии.
// Ключ — текст вопроса карточки, значение — SVG-строка.
const ILLUSTRATIONS = {

// --- 1. Базовые факты о треугольниках ---

"Чему равна сумма углов треугольника?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,25 40,175 260,175" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 60,175 A 25,25 0 0,0 52,158" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 240,175 A 25,25 0 0,1 248,158" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 140,45 A 20,20 0 0,1 160,45" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="150" y="18" fill="#e5e7eb" font-size="14" text-anchor="middle">A</text>
<text x="28" y="185" fill="#e5e7eb" font-size="14" text-anchor="middle">B</text>
<text x="272" y="185" fill="#e5e7eb" font-size="14" text-anchor="middle">C</text>
<text x="60" y="162" fill="#f59e0b" font-size="11" text-anchor="middle">β</text>
<text x="240" y="162" fill="#f59e0b" font-size="11" text-anchor="middle">γ</text>
<text x="150" y="55" fill="#f59e0b" font-size="11" text-anchor="middle">α</text>
</svg>`,

"Чему равен внешний угол треугольника?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,30 50,170 220,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="220" y1="170" x2="290" y2="170" stroke="#818cf8" stroke-width="2" stroke-dasharray="6,3"/>
<path d="M 235,170 A 18,18 0 0,0 228,155" fill="none" stroke="#f59e0b" stroke-width="2"/>
<path d="M 140,50 A 18,18 0 0,1 158,52" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
<path d="M 68,170 A 22,22 0 0,0 60,154" fill="none" stroke="#94a3b8" stroke-width="1.5"/>
<text x="150" y="22" fill="#e5e7eb" font-size="14" text-anchor="middle">A</text>
<text x="38" y="180" fill="#e5e7eb" font-size="14" text-anchor="middle">B</text>
<text x="220" y="185" fill="#e5e7eb" font-size="14" text-anchor="middle">C</text>
<text x="288" y="185" fill="#e5e7eb" font-size="14" text-anchor="middle">D</text>
<text x="252" y="160" fill="#f59e0b" font-size="12" text-anchor="middle">∠BCD</text>
</svg>`,

"Первый признак равенства треугольников (по двум сторонам и углу)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="30,170 80,40 170,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="140,170 190,40 280,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="52" y1="100" x2="57" y2="108" stroke="#f59e0b" stroke-width="2"/>
<line x1="163" y1="100" x2="168" y2="108" stroke="#f59e0b" stroke-width="2"/>
<line x1="96" y1="170" x2="96" y2="163" stroke="#f59e0b" stroke-width="2"/>
<line x1="206" y1="170" x2="206" y2="163" stroke="#f59e0b" stroke-width="2"/>
<path d="M 50,170 A 22,22 0 0,0 44,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 160,170 A 22,22 0 0,0 154,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="100" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">△₁</text>
<text x="210" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">△₂</text>
</svg>`,

"Второй признак равенства треугольников (по стороне и двум углам)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="30,170 80,40 170,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="140,170 190,40 280,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="96" y1="170" x2="96" y2="163" stroke="#f59e0b" stroke-width="2"/>
<line x1="206" y1="170" x2="206" y2="163" stroke="#f59e0b" stroke-width="2"/>
<path d="M 50,170 A 22,22 0 0,0 44,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 160,170 A 22,22 0 0,0 154,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 152,170 A 22,22 0 0,1 162,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 262,170 A 22,22 0 0,1 272,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
</svg>`,

"Третий признак равенства треугольников (по трём сторонам)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="30,170 80,40 170,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="140,170 190,40 280,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="52" y1="100" x2="57" y2="108" stroke="#f59e0b" stroke-width="2"/>
<line x1="163" y1="100" x2="168" y2="108" stroke="#f59e0b" stroke-width="2"/>
<line x1="120" y1="100" x2="125" y2="108" stroke="#4ade80" stroke-width="2"/>
<line x1="118" y1="102" x2="123" y2="110" stroke="#4ade80" stroke-width="2"/>
<line x1="230" y1="100" x2="235" y2="108" stroke="#4ade80" stroke-width="2"/>
<line x1="228" y1="102" x2="233" y2="110" stroke="#4ade80" stroke-width="2"/>
<line x1="96" y1="170" x2="96" y2="163" stroke="#f97373" stroke-width="2"/>
<line x1="93" y1="170" x2="93" y2="163" stroke="#f97373" stroke-width="2"/>
<line x1="99" y1="170" x2="99" y2="163" stroke="#f97373" stroke-width="2"/>
<line x1="206" y1="170" x2="206" y2="163" stroke="#f97373" stroke-width="2"/>
<line x1="203" y1="170" x2="203" y2="163" stroke="#f97373" stroke-width="2"/>
<line x1="209" y1="170" x2="209" y2="163" stroke="#f97373" stroke-width="2"/>
</svg>`,

"Что такое равнобедренный треугольник? Какие у него свойства?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 50,180 250,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="95" y1="97" x2="100" y2="105" stroke="#f59e0b" stroke-width="2"/>
<line x1="200" y1="97" x2="205" y2="105" stroke="#f59e0b" stroke-width="2"/>
<text x="150" y="14" fill="#e5e7eb" font-size="14" text-anchor="middle">A</text>
<text x="38" y="190" fill="#e5e7eb" font-size="14" text-anchor="middle">B</text>
<text x="262" y="190" fill="#e5e7eb" font-size="14" text-anchor="middle">C</text>
<text x="82" y="95" fill="#94a3b8" font-size="11" text-anchor="end">a</text>
<text x="218" y="95" fill="#94a3b8" font-size="11" text-anchor="start">a</text>
</svg>`,

"Где лежит центр описанной окружности треугольника?":
`<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,25 40,175 260,175" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="118" r="95" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="150" cy="118" r="3" fill="#f59e0b"/>
<text x="158" y="113" fill="#f59e0b" font-size="12">O</text>
<line x1="150" y1="175" x2="150" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<text x="150" y="18" fill="#e5e7eb" font-size="14" text-anchor="middle">A</text>
<text x="28" y="185" fill="#e5e7eb" font-size="14" text-anchor="middle">B</text>
<text x="272" y="185" fill="#e5e7eb" font-size="14" text-anchor="middle">C</text>
</svg>`,

"Три свойства параллельных прямых (при секущей)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="20" y1="60" x2="280" y2="60" stroke="#818cf8" stroke-width="2"/>
<line x1="20" y1="150" x2="280" y2="150" stroke="#818cf8" stroke-width="2"/>
<line x1="100" y1="10" x2="200" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
<text x="12" y="55" fill="#94a3b8" font-size="12">a</text>
<text x="12" y="145" fill="#94a3b8" font-size="12">b</text>
<text x="205" y="190" fill="#94a3b8" font-size="12">c</text>
<path d="M 152,60 A 14,14 0 0,1 142,72" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 175,150 A 14,14 0 0,1 165,162" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="138" y="80" fill="#f59e0b" font-size="11">∠1</text>
<text x="161" y="170" fill="#f59e0b" font-size="11">∠2</text>
</svg>`,

"Три признака параллельности прямых":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="20" y1="60" x2="280" y2="60" stroke="#818cf8" stroke-width="2"/>
<line x1="20" y1="150" x2="280" y2="150" stroke="#818cf8" stroke-width="2"/>
<line x1="100" y1="10" x2="200" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
<text x="12" y="55" fill="#94a3b8" font-size="12">a</text>
<text x="12" y="145" fill="#94a3b8" font-size="12">b</text>
<path d="M 152,60 A 14,14 0 0,0 162,72" fill="none" stroke="#4ade80" stroke-width="1.5"/>
<path d="M 175,150 A 14,14 0 0,0 185,162" fill="none" stroke="#4ade80" stroke-width="1.5"/>
<text x="167" y="78" fill="#4ade80" font-size="11">∠4</text>
<text x="190" y="168" fill="#4ade80" font-size="11">∠4</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">∠4 = ∠4 ⇒ a ∥ b</text>
</svg>`,

"Обобщённая теорема Фалеса":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="60" y1="30" x2="60" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="220" y1="30" x2="220" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="20" y1="50" x2="280" y2="50" stroke="#818cf8" stroke-width="1.5"/>
<line x1="20" y1="110" x2="280" y2="110" stroke="#818cf8" stroke-width="1.5"/>
<line x1="20" y1="170" x2="280" y2="170" stroke="#818cf8" stroke-width="1.5"/>
<text x="55" y="82" fill="#f59e0b" font-size="13" text-anchor="end">a</text>
<text x="55" y="142" fill="#f59e0b" font-size="13" text-anchor="end">a′</text>
<text x="225" y="82" fill="#f59e0b" font-size="13" text-anchor="start">b</text>
<text x="225" y="142" fill="#f59e0b" font-size="13" text-anchor="start">b′</text>
<text x="150" y="195" fill="#94a3b8" font-size="12" text-anchor="middle">a/a′ = b/b′</text>
</svg>`,

"Обратная обобщённая теорема Фалеса":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="60" y1="30" x2="60" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="220" y1="30" x2="220" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="20" y1="50" x2="280" y2="50" stroke="#818cf8" stroke-width="1.5"/>
<line x1="20" y1="110" x2="280" y2="110" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="6,3"/>
<line x1="20" y1="170" x2="280" y2="170" stroke="#818cf8" stroke-width="1.5"/>
<text x="55" y="82" fill="#f59e0b" font-size="13" text-anchor="end">a</text>
<text x="55" y="142" fill="#f59e0b" font-size="13" text-anchor="end">a′</text>
<text x="225" y="82" fill="#4ade80" font-size="13">b</text>
<text x="225" y="142" fill="#4ade80" font-size="13">b′</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">a/a′ = b/b′ ⇒ прямые ∥</text>
</svg>`,

"Первый признак подобия треугольников":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="30,170 80,50 190,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="210,170 235,110 280,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 50,170 A 22,22 0 0,0 44,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 225,170 A 16,16 0 0,0 221,160" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="105" y="190" fill="#94a3b8" font-size="11" text-anchor="middle">k·a</text>
<text x="245" y="190" fill="#94a3b8" font-size="11" text-anchor="middle">a</text>
</svg>`,

"Второй признак подобия треугольников":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="30,170 80,50 190,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="210,170 235,110 280,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 50,170 A 22,22 0 0,0 44,155" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 225,170 A 16,16 0 0,0 221,160" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 172,170 A 20,20 0 0,1 180,156" fill="none" stroke="#4ade80" stroke-width="1.5"/>
<path d="M 268,170 A 14,14 0 0,1 274,161" fill="none" stroke="#4ade80" stroke-width="1.5"/>
</svg>`,

"Третий признак подобия треугольников":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="30,170 80,50 190,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="210,170 235,110 280,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<text x="45" y="115" fill="#f59e0b" font-size="11">k·a</text>
<text x="140" y="115" fill="#4ade80" font-size="11">k·b</text>
<text x="105" y="187" fill="#f97373" font-size="11" text-anchor="middle">k·c</text>
<text x="218" y="143" fill="#f59e0b" font-size="11">a</text>
<text x="262" y="143" fill="#4ade80" font-size="11">b</text>
<text x="245" y="187" fill="#f97373" font-size="11" text-anchor="middle">c</text>
</svg>`,

// --- 2. Средние линии и медианы ---

"Что такое средняя линия треугольника? Её свойства?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,180 260,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="95" y1="100" x2="205" y2="100" stroke="#f59e0b" stroke-width="2"/>
<circle cx="95" cy="100" r="3" fill="#f59e0b"/>
<circle cx="205" cy="100" r="3" fill="#f59e0b"/>
<text x="150" y="14" fill="#e5e7eb" font-size="13" text-anchor="middle">B</text>
<text x="28" y="190" fill="#e5e7eb" font-size="13" text-anchor="middle">A</text>
<text x="272" y="190" fill="#e5e7eb" font-size="13" text-anchor="middle">C</text>
<text x="82" y="98" fill="#f59e0b" font-size="12" text-anchor="end">A₁</text>
<text x="218" y="98" fill="#f59e0b" font-size="12">C₁</text>
<text x="150" y="95" fill="#94a3b8" font-size="11" text-anchor="middle">∥ AC</text>
</svg>`,

"На сколько равных треугольников средние линии разбивают треугольник?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,180 260,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="95" y1="100" x2="205" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="95" y1="100" x2="150" y2="180" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="205" y1="100" x2="150" y2="180" stroke="#f59e0b" stroke-width="1.5"/>
<text x="150" y="70" fill="#e5e7eb" font-size="13" text-anchor="middle">1</text>
<text x="100" y="155" fill="#e5e7eb" font-size="13" text-anchor="middle">2</text>
<text x="150" y="145" fill="#e5e7eb" font-size="13" text-anchor="middle">3</text>
<text x="200" y="155" fill="#e5e7eb" font-size="13" text-anchor="middle">4</text>
</svg>`,

"Какое свойство медианы треугольника относительно площади?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,180 260,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,3"/>
<circle cx="150" cy="180" r="3" fill="#f59e0b"/>
<text x="150" y="14" fill="#e5e7eb" font-size="13" text-anchor="middle">A</text>
<text x="28" y="190" fill="#e5e7eb" font-size="13">B</text>
<text x="262" y="190" fill="#e5e7eb" font-size="13">C</text>
<text x="155" y="192" fill="#f59e0b" font-size="11">D</text>
<text x="90" y="130" fill="#94a3b8" font-size="12" text-anchor="middle">S₁</text>
<text x="210" y="130" fill="#94a3b8" font-size="12" text-anchor="middle">S₂</text>
<text x="150" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">S₁ = S₂</text>
</svg>`,

"Формула длины медианы BD треугольника ABC":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 200,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="200" y1="30" x2="150" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,3"/>
<circle cx="150" cy="170" r="3" fill="#f59e0b"/>
<text x="30" y="185" fill="#e5e7eb" font-size="13">A</text>
<text x="200" y="22" fill="#e5e7eb" font-size="13" text-anchor="middle">B</text>
<text x="270" y="185" fill="#e5e7eb" font-size="13">C</text>
<text x="155" y="185" fill="#f59e0b" font-size="12">D</text>
<text x="165" y="105" fill="#f59e0b" font-size="11">m</text>
</svg>`,

"В каком отношении медианы делятся точкой пересечения?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,180 260,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="40" y1="180" x2="205" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="260" y1="180" x2="95" y2="100" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="150" cy="127" r="4" fill="#f59e0b"/>
<text x="158" y="123" fill="#f59e0b" font-size="12">O</text>
<text x="150" y="14" fill="#e5e7eb" font-size="13" text-anchor="middle">A</text>
<text x="28" y="190" fill="#e5e7eb" font-size="13">B</text>
<text x="272" y="190" fill="#e5e7eb" font-size="13">C</text>
<text x="140" y="80" fill="#94a3b8" font-size="10">2</text>
<text x="145" y="158" fill="#94a3b8" font-size="10">1</text>
</svg>`,

"На сколько равновеликих треугольников три медианы делят треугольник?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,180 260,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="#94a3b8" stroke-width="1"/>
<line x1="40" y1="180" x2="205" y2="100" stroke="#94a3b8" stroke-width="1"/>
<line x1="260" y1="180" x2="95" y2="100" stroke="#94a3b8" stroke-width="1"/>
<circle cx="150" cy="127" r="3" fill="#f59e0b"/>
<text x="120" y="80" fill="#e5e7eb" font-size="11">1</text>
<text x="170" y="80" fill="#e5e7eb" font-size="11">2</text>
<text x="85" y="155" fill="#e5e7eb" font-size="11">3</text>
<text x="130" y="165" fill="#e5e7eb" font-size="11">4</text>
<text x="170" y="165" fill="#e5e7eb" font-size="11">5</text>
<text x="215" y="155" fill="#e5e7eb" font-size="11">6</text>
</svg>`,

// --- 3. Прямоугольный треугольник ---

"Чему равна медиана прямоугольного треугольника, проведённая из вершины прямого угла?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 50,40 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<rect x="50" y="155" width="15" height="15" fill="none" stroke="#818cf8" stroke-width="1"/>
<line x1="50" y1="170" x2="150" y2="105" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6,3"/>
<circle cx="150" cy="105" r="3" fill="#f59e0b"/>
<text x="42" y="35" fill="#e5e7eb" font-size="13">A</text>
<text x="42" y="185" fill="#e5e7eb" font-size="13">B</text>
<text x="255" y="185" fill="#e5e7eb" font-size="13">C</text>
<text x="155" y="100" fill="#f59e0b" font-size="12">M</text>
<text x="90" y="145" fill="#94a3b8" font-size="11">BM=½AC</text>
</svg>`,

"Теорема Пифагора (прямая и обратная)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 50,50 230,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<rect x="50" y="155" width="15" height="15" fill="none" stroke="#818cf8" stroke-width="1"/>
<text x="38" y="115" fill="#f59e0b" font-size="14" text-anchor="end">a</text>
<text x="145" y="185" fill="#4ade80" font-size="14" text-anchor="middle">b</text>
<text x="148" y="100" fill="#f97373" font-size="14" text-anchor="middle">c</text>
<text x="150" y="195" fill="#94a3b8" font-size="12" text-anchor="middle">c² = a² + b²</text>
</svg>`,

"Высота из вершины прямого угла: на какие треугольники делит?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 130,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="130" y1="30" x2="130" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="130" y="155" width="12" height="15" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="130" y="22" fill="#e5e7eb" font-size="13" text-anchor="middle">B</text>
<text x="28" y="185" fill="#e5e7eb" font-size="13">A</text>
<text x="268" y="185" fill="#e5e7eb" font-size="13">C</text>
<text x="130" y="185" fill="#f59e0b" font-size="12" text-anchor="middle">H</text>
</svg>`,

"Чему равен квадрат высоты из прямого угла?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 130,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="130" y1="30" x2="130" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="130" y="155" width="12" height="15" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="80" y="185" fill="#94a3b8" font-size="11" text-anchor="middle">AH</text>
<text x="195" y="185" fill="#94a3b8" font-size="11" text-anchor="middle">BH</text>
<text x="120" y="105" fill="#f59e0b" font-size="11" text-anchor="end">CH</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">CH² = AH · BH</text>
</svg>`,

"Формула проекции катета на гипотенузу":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,160 150,30 260,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="30" x2="150" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="150" y="147" width="10" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="150" y="22" fill="#e5e7eb" font-size="13" text-anchor="middle">C</text>
<text x="28" y="170" fill="#e5e7eb" font-size="13">A</text>
<text x="268" y="170" fill="#e5e7eb" font-size="13">B</text>
<text x="150" y="175" fill="#f59e0b" font-size="11" text-anchor="middle">H</text>
<text x="90" y="175" fill="#94a3b8" font-size="10" text-anchor="middle">AH=AC²/AB</text>
</svg>`,

"Формула высоты из вершины прямого угла через катеты":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 50,40 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="170" x2="112" y2="90" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="50" y="155" width="13" height="15" fill="none" stroke="#818cf8" stroke-width="1"/>
<text x="42" y="35" fill="#e5e7eb" font-size="13">A</text>
<text x="35" y="175" fill="#e5e7eb" font-size="13">C</text>
<text x="258" y="175" fill="#e5e7eb" font-size="13">B</text>
<text x="75" y="125" fill="#f59e0b" font-size="11">h</text>
<text x="40" y="110" fill="#94a3b8" font-size="11">a</text>
<text x="150" y="185" fill="#94a3b8" font-size="11" text-anchor="middle">b</text>
<text x="150" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">h = ab/c</text>
</svg>`,

"Вписанная окружность в прямоугольном треугольнике: какую фигуру образуют вершина прямого угла, точки касания и центр?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 50,40 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<rect x="50" y="155" width="13" height="15" fill="none" stroke="#818cf8" stroke-width="1"/>
<circle cx="100" cy="120" r="50" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="100" cy="120" r="3" fill="#f59e0b"/>
<rect x="50" y="70" width="50" height="100" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="108" y="116" fill="#f59e0b" font-size="11">O</text>
</svg>`,

"Свойства прямоугольного треугольника с углом 30°":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 50,50 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<rect x="50" y="155" width="13" height="15" fill="none" stroke="#818cf8" stroke-width="1"/>
<path d="M 225,170 A 30,30 0 0,0 237,150" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="220" y="158" fill="#f59e0b" font-size="12">30°</text>
<text x="38" y="115" fill="#94a3b8" font-size="12" text-anchor="end">c/2</text>
<text x="155" y="100" fill="#94a3b8" font-size="12">c</text>
</svg>`,

"Тригонометрические соотношения в прямоугольном треугольнике":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 50,50 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<rect x="50" y="155" width="13" height="15" fill="none" stroke="#818cf8" stroke-width="1"/>
<path d="M 225,170 A 30,30 0 0,0 237,150" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="215" y="158" fill="#f59e0b" font-size="12">α</text>
<text x="38" y="115" fill="#f59e0b" font-size="13" text-anchor="end">a</text>
<text x="150" y="185" fill="#4ade80" font-size="13" text-anchor="middle">b</text>
<text x="160" y="100" fill="#f97373" font-size="13">c</text>
</svg>`,

// --- 4. Многоугольники ---

"Чему равна сумма углов выпуклого четырёхугольника?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="60,160 40,60 180,30 260,140" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 55,140 A 20,20 0 0,0 56,78" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 60,62 A 18,18 0 0,0 160,38" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 196,38 A 20,20 0 0,0 248,128" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 244,148 A 22,22 0 0,0 78,160" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="150" y="195" fill="#94a3b8" font-size="12" text-anchor="middle">Σ = 360°</text>
</svg>`,

"Что такое трапеция?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="90,50 210,50 270,160 30,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<text x="150" y="40" fill="#94a3b8" font-size="11" text-anchor="middle">основание</text>
<text x="150" y="178" fill="#94a3b8" font-size="11" text-anchor="middle">основание</text>
<line x1="95" y1="55" x2="95" y2="45" stroke="#f59e0b" stroke-width="1"/>
<line x1="205" y1="55" x2="205" y2="45" stroke="#f59e0b" stroke-width="1"/>
<text x="80" y="50" fill="#e5e7eb" font-size="13">B</text>
<text x="218" y="50" fill="#e5e7eb" font-size="13">C</text>
<text x="15" y="165" fill="#e5e7eb" font-size="13">A</text>
<text x="275" y="165" fill="#e5e7eb" font-size="13">D</text>
</svg>`,

"Что такое параллелограмм?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="70,160 120,50 260,50 210,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<text x="55" y="168" fill="#e5e7eb" font-size="13">A</text>
<text x="108" y="45" fill="#e5e7eb" font-size="13">B</text>
<text x="268" y="45" fill="#e5e7eb" font-size="13">C</text>
<text x="218" y="168" fill="#e5e7eb" font-size="13">D</text>
<text x="88" y="110" fill="#94a3b8" font-size="10">∥</text>
<text x="240" y="110" fill="#94a3b8" font-size="10">∥</text>
</svg>`,

"Признаки параллелограмма (3 признака)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="70,160 120,50 260,50 210,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="70" y1="160" x2="260" y2="50" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="120" y1="50" x2="210" y2="160" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="165" cy="105" r="3" fill="#f59e0b"/>
<text x="173" y="102" fill="#f59e0b" font-size="11">O</text>
</svg>`,

"Свойства параллелограмма (3 свойства)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="70,160 120,50 260,50 210,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="90" y1="108" x2="94" y2="102" stroke="#f59e0b" stroke-width="2"/>
<line x1="237" y1="103" x2="241" y2="97" stroke="#f59e0b" stroke-width="2"/>
<line x1="136" y1="160" x2="136" y2="153" stroke="#4ade80" stroke-width="2"/>
<line x1="139" y1="160" x2="139" y2="153" stroke="#4ade80" stroke-width="2"/>
<line x1="193" y1="50" x2="193" y2="57" stroke="#4ade80" stroke-width="2"/>
<line x1="190" y1="50" x2="190" y2="57" stroke="#4ade80" stroke-width="2"/>
</svg>`,

"Что такое ромб? Его признаки?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 50,105 150,190 250,105" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="97" y1="58" x2="101" y2="66" stroke="#f59e0b" stroke-width="2"/>
<line x1="97" y1="143" x2="101" y2="151" stroke="#f59e0b" stroke-width="2"/>
<line x1="199" y1="66" x2="203" y2="58" stroke="#f59e0b" stroke-width="2"/>
<line x1="199" y1="151" x2="203" y2="143" stroke="#f59e0b" stroke-width="2"/>
<text x="150" y="14" fill="#e5e7eb" font-size="13" text-anchor="middle">A</text>
<text x="38" y="110" fill="#e5e7eb" font-size="13">B</text>
<text x="150" y="205" fill="#e5e7eb" font-size="13" text-anchor="middle">C</text>
<text x="260" y="110" fill="#e5e7eb" font-size="13">D</text>
</svg>`,

"Свойства ромба":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 50,105 150,190 250,105" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="190" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="50" y1="105" x2="250" y2="105" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="150" y="105" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="1" transform="rotate(0)"/>
<circle cx="150" cy="105" r="2" fill="#f59e0b"/>
</svg>`,

"Что такое прямоугольник? Его признаки?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<rect x="50" y="50" width="200" height="110" fill="none" stroke="#818cf8" stroke-width="2"/>
<rect x="50" y="147" width="13" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<rect x="237" y="147" width="13" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<rect x="50" y="50" width="13" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<rect x="237" y="50" width="13" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="40" y="48" fill="#e5e7eb" font-size="13">A</text>
<text x="258" y="48" fill="#e5e7eb" font-size="13">B</text>
<text x="258" y="175" fill="#e5e7eb" font-size="13">C</text>
<text x="40" y="175" fill="#e5e7eb" font-size="13">D</text>
</svg>`,

"Свойство прямоугольника (про диагонали)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<rect x="50" y="50" width="200" height="110" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="50" x2="250" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="250" y1="50" x2="50" y2="160" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="40" y="48" fill="#e5e7eb" font-size="13">A</text>
<text x="258" y="48" fill="#e5e7eb" font-size="13">B</text>
<text x="258" y="175" fill="#e5e7eb" font-size="13">C</text>
<text x="40" y="175" fill="#e5e7eb" font-size="13">D</text>
<text x="150" y="195" fill="#94a3b8" font-size="12" text-anchor="middle">AC = BD</text>
</svg>`,

"Что такое квадрат? Перечислите его свойства.":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<rect x="75" y="25" width="150" height="150" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="75" y1="25" x2="225" y2="175" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="225" y1="25" x2="75" y2="175" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="147" y1="25" x2="147" y2="33" stroke="#f59e0b" stroke-width="2"/>
<line x1="147" y1="175" x2="147" y2="167" stroke="#f59e0b" stroke-width="2"/>
<line x1="75" y1="97" x2="83" y2="97" stroke="#f59e0b" stroke-width="2"/>
<line x1="225" y1="97" x2="217" y2="97" stroke="#f59e0b" stroke-width="2"/>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">d = a√2</text>
</svg>`,

"Свойство трапеции: сумма углов при боковой стороне":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="90,50 210,50 270,160 30,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 50,160 A 22,22 0 0,0 42,142" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 86,68 A 20,20 0 0,0 96,56" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="55" y="142" fill="#f59e0b" font-size="11">α</text>
<text x="80" y="68" fill="#f59e0b" font-size="11">β</text>
<text x="150" y="195" fill="#94a3b8" font-size="12" text-anchor="middle">α + β = 180°</text>
</svg>`,

"Признаки и свойства равнобедренной трапеции":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="100,50 200,50 260,160 40,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="64" y1="108" x2="69" y2="100" stroke="#f59e0b" stroke-width="2"/>
<line x1="236" y1="100" x2="231" y2="108" stroke="#f59e0b" stroke-width="2"/>
<line x1="40" y1="160" x2="200" y2="50" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="260" y1="160" x2="100" y2="50" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">d₁ = d₂</text>
</svg>`,

"Сумма внутренних углов выпуклого n-угольника":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 50,80 70,170 230,170 250,80" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="80" x2="230" y2="170" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="50" y1="80" x2="250" y2="80" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<text x="150" y="195" fill="#94a3b8" font-size="12" text-anchor="middle">(n−2)·180°</text>
</svg>`,

"Чему равен каждый угол правильного n-угольника?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 50,80 70,170 230,170 250,80" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 68,150 A 22,22 0 0,0 83,170" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="90" y="165" fill="#f59e0b" font-size="11">α</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">α = (n−2)·180°/n</text>
</svg>`,

"Правильный треугольник: углы, высота, площадь (через сторону a)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,180 260,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="180" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<text x="150" y="185" fill="#94a3b8" font-size="10" text-anchor="middle">a</text>
<text x="160" y="105" fill="#f59e0b" font-size="11">h=a√3/2</text>
<text x="150" y="14" fill="#e5e7eb" font-size="12" text-anchor="middle">60°</text>
<text x="55" y="190" fill="#e5e7eb" font-size="12">60°</text>
<text x="245" y="190" fill="#e5e7eb" font-size="12">60°</text>
</svg>`,

"Свойства правильного шестиугольника":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,15 235,52 235,148 150,185 65,148 65,52" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="15" x2="150" y2="185" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="65" y1="52" x2="235" y2="148" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="65" y1="148" x2="235" y2="52" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<circle cx="150" cy="100" r="3" fill="#f59e0b"/>
<text x="160" y="97" fill="#f59e0b" font-size="11">O</text>
<text x="150" y="8" fill="#e5e7eb" font-size="11" text-anchor="middle">a</text>
</svg>`,

// --- 5. Площади ---

"Как относятся площади треугольников с общей стороной?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="50" y1="170" x2="250" y2="170" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="170" x2="130" y2="40" stroke="#818cf8" stroke-width="2"/>
<line x1="250" y1="170" x2="130" y2="40" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="170" x2="200" y2="80" stroke="#4ade80" stroke-width="2"/>
<line x1="250" y1="170" x2="200" y2="80" stroke="#4ade80" stroke-width="2"/>
<line x1="130" y1="40" x2="130" y2="170" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="200" y1="80" x2="200" y2="170" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3"/>
<text x="122" y="105" fill="#f59e0b" font-size="10" text-anchor="end">h₁</text>
<text x="208" y="130" fill="#f59e0b" font-size="10">h₂</text>
</svg>`,

"Как относятся площади треугольников с общим углом?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="40" y1="170" x2="260" y2="170" stroke="#818cf8" stroke-width="2"/>
<line x1="40" y1="170" x2="160" y2="30" stroke="#818cf8" stroke-width="2"/>
<line x1="260" y1="170" x2="160" y2="30" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="170" y1="170" x2="118" y2="87" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="5,3"/>
<path d="M 60,170 A 22,22 0 0,0 52,152" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="40" y="185" fill="#e5e7eb" font-size="13">A</text>
<text x="155" y="25" fill="#e5e7eb" font-size="13">B</text>
<text x="265" y="185" fill="#e5e7eb" font-size="13">C</text>
</svg>`,

"Как относятся площади треугольников с общей высотой?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="30" y1="170" x2="270" y2="170" stroke="#818cf8" stroke-width="2"/>
<polygon points="30,170 150,40 180,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="180,170 150,40 270,170" fill="none" stroke="#4ade80" stroke-width="2"/>
<line x1="150" y1="40" x2="150" y2="170" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3"/>
<text x="100" y="165" fill="#818cf8" font-size="11" text-anchor="middle">a</text>
<text x="225" y="165" fill="#4ade80" font-size="11" text-anchor="middle">b</text>
<text x="140" y="110" fill="#f59e0b" font-size="11" text-anchor="end">h</text>
</svg>`,

"Площади треугольников между параллельными прямыми":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="20" y1="40" x2="280" y2="40" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="20" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<polygon points="80,170 100,40 200,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="80,170 220,40 200,170" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="12" y="37" fill="#94a3b8" font-size="11">p</text>
<text x="12" y="167" fill="#94a3b8" font-size="11">q</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">S₁ = S₂</text>
</svg>`,

"Как относятся площади подобных треугольников?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="20,180 100,40 200,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="220,180 250,120 280,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<text x="100" y="135" fill="#94a3b8" font-size="12" text-anchor="middle">S₁</text>
<text x="250" y="165" fill="#94a3b8" font-size="12" text-anchor="middle">S₂</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">S₁/S₂ = k²</text>
</svg>`,

"Формула Герона площади треугольника":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 180,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<text x="105" y="105" fill="#f59e0b" font-size="14" text-anchor="end">a</text>
<text x="225" y="105" fill="#4ade80" font-size="14">b</text>
<text x="160" y="185" fill="#f97373" font-size="14" text-anchor="middle">c</text>
<text x="150" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">p = (a+b+c)/2</text>
</svg>`,

"Площадь треугольника через основание и высоту":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 200,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="200" y1="30" x2="200" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="200" y="157" width="10" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="150" y="185" fill="#818cf8" font-size="13" text-anchor="middle">a</text>
<text x="210" y="105" fill="#f59e0b" font-size="13">h</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">S = ah/2</text>
</svg>`,

"Площадь треугольника через две стороны и синус угла":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 170,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 60,170 A 22,22 0 0,0 52,152" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="62" y="152" fill="#f59e0b" font-size="12">α</text>
<text x="95" y="105" fill="#818cf8" font-size="13" text-anchor="end">a</text>
<text x="155" y="185" fill="#818cf8" font-size="13" text-anchor="middle">b</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">S = ½ab·sinα</text>
</svg>`,

"Площадь треугольника через полупериметр и радиус вписанной окружности":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,180 260,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="130" r="50" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="150" cy="130" r="2" fill="#f59e0b"/>
<line x1="150" y1="130" x2="150" y2="180" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3"/>
<text x="155" y="160" fill="#f59e0b" font-size="11">r</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">S = p·r</text>
</svg>`,

"Площадь треугольника через стороны и радиус описанной окружности":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,22 40,170 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="115" r="95" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="150" y1="115" x2="245" y2="115" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3"/>
<text x="200" y="110" fill="#f59e0b" font-size="11">R</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">S = abc/(4R)</text>
</svg>`,

"Площадь выпуклого четырёхугольника через диагонали":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,120 130,30 260,100 170,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="40" y1="120" x2="260" y2="100" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="130" y1="30" x2="170" y2="180" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="155" y="70" fill="#f59e0b" font-size="11">d₁</text>
<text x="195" y="115" fill="#f59e0b" font-size="11">d₂</text>
</svg>`,

"Площадь параллелограмма (2 формулы)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="70,160 120,50 270,50 220,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="120" y1="50" x2="120" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="120" y="147" width="10" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="145" y="165" fill="#818cf8" font-size="13" text-anchor="middle">a</text>
<text x="112" y="110" fill="#f59e0b" font-size="13" text-anchor="end">h</text>
</svg>`,

"Площадь ромба через диагонали":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,15 50,100 150,185 250,100" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="15" x2="150" y2="185" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="50" y1="100" x2="250" y2="100" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="155" y="55" fill="#f59e0b" font-size="12">d₁</text>
<text x="195" y="97" fill="#f59e0b" font-size="12">d₂</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">S = ½d₁d₂</text>
</svg>`,

"Площадь прямоугольника":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<rect x="50" y="50" width="200" height="110" fill="rgba(99,102,241,0.08)" stroke="#818cf8" stroke-width="2"/>
<text x="150" y="185" fill="#f59e0b" font-size="14" text-anchor="middle">a</text>
<text x="260" y="110" fill="#f59e0b" font-size="14">b</text>
<text x="150" y="115" fill="#94a3b8" font-size="14" text-anchor="middle">S = ab</text>
</svg>`,

"Площадь квадрата (2 формулы)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<rect x="75" y="25" width="150" height="150" fill="rgba(99,102,241,0.08)" stroke="#818cf8" stroke-width="2"/>
<line x1="75" y1="25" x2="225" y2="175" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="150" y="190" fill="#818cf8" font-size="13" text-anchor="middle">a</text>
<text x="165" y="105" fill="#f59e0b" font-size="12">d</text>
</svg>`,

"Площадь трапеции":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="100,50 200,50 270,160 30,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="100" y1="50" x2="100" y2="160" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="100" y="147" width="10" height="13" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="150" y="43" fill="#94a3b8" font-size="12" text-anchor="middle">a</text>
<text x="150" y="178" fill="#94a3b8" font-size="12" text-anchor="middle">b</text>
<text x="90" y="110" fill="#f59e0b" font-size="12" text-anchor="end">h</text>
</svg>`,

"Формула Брахмагупты (площадь вписанного четырёхугольника)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="85" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<polygon points="80,40 230,55 240,160 70,165" fill="none" stroke="#818cf8" stroke-width="2"/>
<text x="150" y="30" fill="#94a3b8" font-size="11" text-anchor="middle">AB</text>
<text x="248" y="110" fill="#94a3b8" font-size="11">BC</text>
<text x="155" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">CD</text>
<text x="60" y="110" fill="#94a3b8" font-size="11" text-anchor="end">DA</text>
</svg>`,

// --- 6. Окружность ---

"Чему равен вписанный угол по отношению к центральному?":
`<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="105" r="85" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="105" r="3" fill="#f59e0b"/>
<line x1="150" y1="105" x2="80" y2="160" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="150" y1="105" x2="220" y2="160" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="150" y1="20" x2="80" y2="160" stroke="#818cf8" stroke-width="1.5"/>
<line x1="150" y1="20" x2="220" y2="160" stroke="#818cf8" stroke-width="1.5"/>
<text x="158" y="100" fill="#f59e0b" font-size="11">O</text>
<text x="150" y="15" fill="#e5e7eb" font-size="12" text-anchor="middle">P</text>
<text x="68" y="170" fill="#e5e7eb" font-size="12">A</text>
<text x="228" y="170" fill="#e5e7eb" font-size="12">B</text>
<text x="150" y="205" fill="#94a3b8" font-size="11" text-anchor="middle">∠APB = ½∠AOB</text>
</svg>`,

"Свойство радиуса, проведённого к точке касания":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="75" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="100" r="3" fill="#f59e0b"/>
<line x1="150" y1="100" x2="225" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="225" y1="40" x2="225" y2="170" stroke="#94a3b8" stroke-width="2"/>
<rect x="213" y="100" width="12" height="12" fill="none" stroke="#f59e0b" stroke-width="1"/>
<circle cx="225" cy="100" r="3" fill="#4ade80"/>
<text x="225" y="185" fill="#94a3b8" font-size="11" text-anchor="middle">касательная</text>
<text x="185" y="95" fill="#f59e0b" font-size="11">R</text>
</svg>`,

"Связь равных хорд и дуг":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="80" y1="60" x2="180" y2="30" stroke="#f59e0b" stroke-width="2"/>
<line x1="100" y1="170" x2="220" y2="145" stroke="#f59e0b" stroke-width="2"/>
<line x1="125" y1="48" x2="128" y2="40" stroke="#f59e0b" stroke-width="2"/>
<line x1="155" y1="160" x2="158" y2="152" stroke="#f59e0b" stroke-width="2"/>
</svg>`,

"Угол между хордой и касательной":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="230" y1="100" x2="90" y2="35" stroke="#818cf8" stroke-width="2"/>
<line x1="230" y1="100" x2="280" y2="100" stroke="#94a3b8" stroke-width="2"/>
<line x1="230" y1="50" x2="230" y2="170" stroke="#94a3b8" stroke-width="2"/>
<circle cx="230" cy="100" r="3" fill="#4ade80"/>
<path d="M 218,100 A 14,14 0 0,0 222,88" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
</svg>`,

"Квадрат касательной (свойство)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="160" cy="100" r="70" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="30" y1="140" x2="160" y2="170" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="30" y1="140" x2="230" y2="100" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="30" y1="140" x2="105" y2="48" stroke="#f59e0b" stroke-width="2"/>
<circle cx="30" cy="140" r="3" fill="#e5e7eb"/>
<circle cx="105" cy="48" r="3" fill="#4ade80"/>
<text x="20" y="138" fill="#e5e7eb" font-size="12" text-anchor="end">O</text>
<text x="98" y="42" fill="#4ade80" font-size="12">K</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">OK² = OA·OB</text>
</svg>`,

"Произведение секущей на внешнюю часть — постоянная величина":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="170" cy="100" r="70" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="30" y1="120" x2="240" y2="100" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="30" y1="120" x2="210" y2="40" stroke="#4ade80" stroke-width="1.5"/>
<circle cx="30" cy="120" r="3" fill="#e5e7eb"/>
<text x="20" y="118" fill="#e5e7eb" font-size="12" text-anchor="end">O</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">OA·OB = OC·OD</text>
</svg>`,

"Свойство отрезков касательных из одной точки":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="180" cy="100" r="65" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="40" y1="100" x2="128" y2="58" stroke="#f59e0b" stroke-width="2"/>
<line x1="40" y1="100" x2="128" y2="142" stroke="#f59e0b" stroke-width="2"/>
<circle cx="40" cy="100" r="3" fill="#e5e7eb"/>
<circle cx="128" cy="58" r="3" fill="#4ade80"/>
<circle cx="128" cy="142" r="3" fill="#4ade80"/>
<text x="30" y="98" fill="#e5e7eb" font-size="12" text-anchor="end">O</text>
<text x="120" y="50" fill="#4ade80" font-size="12">A</text>
<text x="120" y="158" fill="#4ade80" font-size="12">B</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">OA = OB</text>
</svg>`,

"Произведения отрезков пересекающихся хорд":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="80" y1="50" x2="230" y2="130" stroke="#f59e0b" stroke-width="1.5"/>
<line x1="90" y1="155" x2="220" y2="55" stroke="#4ade80" stroke-width="1.5"/>
<circle cx="155" cy="92" r="3" fill="#e5e7eb"/>
<text x="163" y="88" fill="#e5e7eb" font-size="12">O</text>
<text x="70" y="48" fill="#f59e0b" font-size="12">A</text>
<text x="235" y="138" fill="#f59e0b" font-size="12">C</text>
<text x="80" y="165" fill="#4ade80" font-size="12">B</text>
<text x="225" y="50" fill="#4ade80" font-size="12">D</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">AO·OC = BO·OD</text>
</svg>`,

"Угол между пересекающимися хордами окружности":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="80" y1="50" x2="230" y2="130" stroke="#818cf8" stroke-width="1.5"/>
<line x1="90" y1="155" x2="220" y2="55" stroke="#818cf8" stroke-width="1.5"/>
<path d="M 162,85 A 12,12 0 0,1 165,98" fill="none" stroke="#f59e0b" stroke-width="2"/>
<text x="172" y="96" fill="#f59e0b" font-size="12">α</text>
<text x="150" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">α = ½(⌣AB + ⌣CD)</text>
</svg>`,

"Угол между секущими из одной точки":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="180" cy="100" r="65" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="40" y1="100" x2="245" y2="75" stroke="#818cf8" stroke-width="1.5"/>
<line x1="40" y1="100" x2="225" y2="150" stroke="#818cf8" stroke-width="1.5"/>
<circle cx="40" cy="100" r="3" fill="#e5e7eb"/>
<path d="M 58,95 A 20,20 0 0,1 58,108" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="68" y="105" fill="#f59e0b" font-size="12">α</text>
<text x="150" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">α = ½(⌣AB − ⌣CD)</text>
</svg>`,

"Свойство радиуса, перпендикулярного хорде":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="90" y1="155" x2="210" y2="155" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="155" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="150" cy="100" r="3" fill="#f59e0b"/>
<rect x="150" y="143" width="10" height="12" fill="none" stroke="#f59e0b" stroke-width="1"/>
<circle cx="150" cy="155" r="3" fill="#4ade80"/>
<text x="80" y="168" fill="#e5e7eb" font-size="12">A</text>
<text x="215" y="168" fill="#e5e7eb" font-size="12">B</text>
<text x="158" y="97" fill="#f59e0b" font-size="11">O</text>
</svg>`,

"Признаки вписанности четырёхугольника в окружность":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="1.5" stroke-dasharray="5,3"/>
<polygon points="90,40 230,60 220,170 80,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 100,50 A 16,16 0 0,0 98,60" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<path d="M 210,160 A 16,16 0 0,0 212,150" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="103" y="58" fill="#f59e0b" font-size="11">α</text>
<text x="206" y="152" fill="#f59e0b" font-size="11">β</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">α + β = 180°</text>
</svg>`,

"Частный случай: два угла по 90° опираются на одну сторону":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="70" y1="100" x2="230" y2="100" stroke="#f59e0b" stroke-width="2"/>
<line x1="70" y1="100" x2="150" y2="25" stroke="#818cf8" stroke-width="1.5"/>
<line x1="230" y1="100" x2="150" y2="25" stroke="#818cf8" stroke-width="1.5"/>
<rect x="138" y="25" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="60" y="98" fill="#e5e7eb" font-size="12" text-anchor="end">A</text>
<text x="240" y="98" fill="#e5e7eb" font-size="12">B</text>
<text x="150" y="18" fill="#e5e7eb" font-size="12" text-anchor="middle">P</text>
<text x="150" y="115" fill="#f59e0b" font-size="11" text-anchor="middle">диаметр</text>
</svg>`,

// --- 7. Ортоцентр ---

"Свойство 1 ортоцентра: вписанные четырёхугольники":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,175 260,175" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="175" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="40" y1="175" x2="216" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="260" y1="175" x2="84" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<circle cx="150" cy="110" r="4" fill="#f59e0b"/>
<text x="158" y="107" fill="#f59e0b" font-size="12">H</text>
<text x="150" y="14" fill="#e5e7eb" font-size="13" text-anchor="middle">A</text>
<text x="28" y="185" fill="#e5e7eb" font-size="13">B</text>
<text x="272" y="185" fill="#e5e7eb" font-size="13">C</text>
</svg>`,

"Свойство 2 ортоцентра: ещё вписанные четырёхугольники":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,175 260,175" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="20" x2="150" y2="175" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="40" y1="175" x2="216" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="260" y1="175" x2="84" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<circle cx="150" cy="110" r="4" fill="#f59e0b"/>
<circle cx="150" cy="175" r="3" fill="#4ade80"/>
<circle cx="216" cy="60" r="3" fill="#4ade80"/>
<circle cx="84" cy="60" r="3" fill="#4ade80"/>
<text x="158" y="107" fill="#f59e0b" font-size="12">H</text>
</svg>`,

"Свойство 3 ортоцентра и ортотреугольника":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,175 260,175" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="150,175 84,60 216,60" fill="none" stroke="#4ade80" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="150" cy="110" r="4" fill="#f59e0b"/>
<text x="158" y="107" fill="#f59e0b" font-size="12">H = I₁</text>
<text x="150" y="190" fill="#4ade80" font-size="10" text-anchor="middle">ортотреугольник</text>
</svg>`,

"Лемма об отражении ортоцентра 1":
`<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,25 50,170 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="115" r="93" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="150" cy="105" r="3" fill="#f59e0b"/>
<circle cx="150" cy="135" r="3" fill="#4ade80"/>
<text x="158" y="102" fill="#f59e0b" font-size="11">H</text>
<text x="158" y="148" fill="#4ade80" font-size="11">H′</text>
<line x1="150" y1="105" x2="150" y2="135" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
<text x="150" y="205" fill="#94a3b8" font-size="10" text-anchor="middle">H′ на описанной окружности</text>
</svg>`,

"Лемма об отражении ортоцентра 2":
`<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,25 50,170 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="115" r="93" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="150" cy="105" r="3" fill="#f59e0b"/>
<circle cx="150" cy="170" r="3" fill="#94a3b8"/>
<circle cx="150" cy="208" r="3" fill="#4ade80"/>
<text x="158" y="102" fill="#f59e0b" font-size="11">H</text>
<text x="158" y="168" fill="#94a3b8" font-size="11">M</text>
<text x="158" y="208" fill="#4ade80" font-size="11">H_B</text>
<text x="150" y="22" fill="#e5e7eb" font-size="12" text-anchor="middle">A</text>
</svg>`,

"Свойство BH = 2OM (ортоцентр и центр описанной окружности)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,25 50,170 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="105" r="3" fill="#f59e0b"/>
<circle cx="150" cy="80" r="3" fill="#4ade80"/>
<circle cx="150" cy="170" r="3" fill="#94a3b8"/>
<text x="158" y="102" fill="#f59e0b" font-size="11">H</text>
<text x="158" y="77" fill="#4ade80" font-size="11">O</text>
<text x="158" y="168" fill="#94a3b8" font-size="11">M</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">BH = 2·OM</text>
</svg>`,

"Свойство AH² + BC² = ?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,25 50,170 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="115" r="93" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="150" cy="105" r="3" fill="#f59e0b"/>
<text x="158" y="102" fill="#f59e0b" font-size="11">H</text>
<text x="150" y="18" fill="#e5e7eb" font-size="12" text-anchor="middle">A</text>
<text x="38" y="180" fill="#e5e7eb" font-size="12">B</text>
<text x="258" y="180" fill="#e5e7eb" font-size="12">C</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">AH² + BC² = 4R²</text>
</svg>`,

// --- 8. Биссектрисы и инцентр ---

"Основное свойство биссектрисы угла":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="40" y1="170" x2="260" y2="170" stroke="#818cf8" stroke-width="2"/>
<line x1="40" y1="170" x2="160" y2="30" stroke="#818cf8" stroke-width="2"/>
<line x1="40" y1="170" x2="240" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="160" cy="130" r="3" fill="#4ade80"/>
<line x1="160" y1="130" x2="160" y2="170" stroke="#4ade80" stroke-width="1" stroke-dasharray="3,2"/>
<line x1="160" y1="130" x2="120" y2="85" stroke="#4ade80" stroke-width="1" stroke-dasharray="3,2"/>
<text x="165" y="128" fill="#4ade80" font-size="11">P</text>
<text x="165" y="165" fill="#94a3b8" font-size="10">d₁</text>
<text x="132" y="108" fill="#94a3b8" font-size="10">d₂</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">d₁ = d₂</text>
</svg>`,

"Свойство биссектрисы BL в треугольнике ABC (пропорция)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 180,25 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="180" y1="25" x2="145" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="145" cy="170" r="3" fill="#f59e0b"/>
<text x="40" y="185" fill="#e5e7eb" font-size="13">A</text>
<text x="180" y="18" fill="#e5e7eb" font-size="13" text-anchor="middle">B</text>
<text x="268" y="185" fill="#e5e7eb" font-size="13">C</text>
<text x="145" y="185" fill="#f59e0b" font-size="12" text-anchor="middle">L</text>
<text x="90" y="185" fill="#94a3b8" font-size="10" text-anchor="middle">AL</text>
<text x="200" y="185" fill="#94a3b8" font-size="10" text-anchor="middle">LC</text>
</svg>`,

"Биссектрисы односторонних углов при параллельных прямых":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="20" y1="50" x2="280" y2="50" stroke="#818cf8" stroke-width="2"/>
<line x1="20" y1="150" x2="280" y2="150" stroke="#818cf8" stroke-width="2"/>
<line x1="130" y1="10" x2="180" y2="190" stroke="#94a3b8" stroke-width="1.5"/>
<line x1="142" y1="50" x2="210" y2="115" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="168" y1="150" x2="210" y2="115" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="200" y="106" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="1"/>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">⊥</text>
</svg>`,

"Биссектрисы смежных углов":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="30" y1="100" x2="270" y2="100" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="100" x2="100" y2="20" stroke="#818cf8" stroke-width="2"/>
<line x1="150" y1="100" x2="70" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="150" y1="100" x2="230" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<rect x="143" y="68" width="10" height="10" fill="none" stroke="#f59e0b" stroke-width="1" transform="rotate(25,148,73)"/>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">Биссектрисы ⊥</text>
</svg>`,

"Где лежит центр вписанной окружности треугольника?":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,175 260,175" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="130" r="45" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="150" cy="130" r="3" fill="#f59e0b"/>
<line x1="150" y1="20" x2="150" y2="175" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="40" y1="175" x2="225" y2="65" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="260" y1="175" x2="75" y2="65" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<text x="158" y="127" fill="#f59e0b" font-size="12">I</text>
</svg>`,

"Где лежит центр вневписанной окружности треугольника?":
`<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,30 60,160 240,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="210" r="50" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="150" cy="210" r="3" fill="#f59e0b"/>
<text x="158" y="208" fill="#f59e0b" font-size="11">I_A</text>
<text x="150" y="23" fill="#e5e7eb" font-size="12" text-anchor="middle">A</text>
<text x="48" y="165" fill="#e5e7eb" font-size="12">B</text>
<text x="248" y="165" fill="#e5e7eb" font-size="12">C</text>
</svg>`,

"Длина отрезка касания вписанной окружности (формула x = p − a)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,20 40,175 260,175" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="128" r="47" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="150" cy="175" r="3" fill="#4ade80"/>
<text x="150" y="14" fill="#e5e7eb" font-size="13" text-anchor="middle">A</text>
<text x="28" y="185" fill="#e5e7eb" font-size="13">B</text>
<text x="272" y="185" fill="#e5e7eb" font-size="13">C</text>
<text x="90" y="190" fill="#94a3b8" font-size="10" text-anchor="middle">p−a</text>
<text x="210" y="190" fill="#94a3b8" font-size="10" text-anchor="middle">p−a</text>
</svg>`,

"Описанный четырёхугольник: условие вписанности окружности":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="60,160 80,40 240,50 250,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="155" cy="105" r="55" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="45" y="168" fill="#e5e7eb" font-size="12">A</text>
<text x="72" y="35" fill="#e5e7eb" font-size="12">B</text>
<text x="248" y="42" fill="#e5e7eb" font-size="12">C</text>
<text x="258" y="168" fill="#e5e7eb" font-size="12">D</text>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">a + c = b + d</text>
</svg>`,

// --- 9. Трапеция ---

"Средняя линия трапеции":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="100,40 200,40 270,170 30,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="65" y1="105" x2="235" y2="105" stroke="#f59e0b" stroke-width="2"/>
<circle cx="65" cy="105" r="3" fill="#f59e0b"/>
<circle cx="235" cy="105" r="3" fill="#f59e0b"/>
<text x="55" y="103" fill="#f59e0b" font-size="12" text-anchor="end">M</text>
<text x="245" y="103" fill="#f59e0b" font-size="12">N</text>
<text x="150" y="35" fill="#94a3b8" font-size="11" text-anchor="middle">a</text>
<text x="150" y="185" fill="#94a3b8" font-size="11" text-anchor="middle">b</text>
<text x="150" y="100" fill="#94a3b8" font-size="10" text-anchor="middle">(a+b)/2</text>
</svg>`,

"Замечательное свойство трапеции (4 точки на одной прямой)":
`<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="110,60 190,60 250,160 50,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="160" x2="190" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="250" y1="160" x2="110" y2="60" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="150" y1="5" x2="150" y2="215" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="4,2"/>
<circle cx="150" cy="60" r="3" fill="#4ade80"/>
<circle cx="150" cy="110" r="3" fill="#4ade80"/>
<circle cx="150" cy="160" r="3" fill="#4ade80"/>
<text x="158" y="58" fill="#4ade80" font-size="10">M</text>
<text x="158" y="108" fill="#4ade80" font-size="10">O</text>
<text x="158" y="158" fill="#4ade80" font-size="10">N</text>
</svg>`,

"Отрезок, соединяющий середины диагоналей трапеции":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="100,50 200,50 260,160 40,160" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="40" y1="160" x2="200" y2="50" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="260" y1="160" x2="100" y2="50" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<circle cx="120" cy="105" r="3" fill="#f59e0b"/>
<circle cx="180" cy="105" r="3" fill="#f59e0b"/>
<line x1="120" y1="105" x2="180" y2="105" stroke="#f59e0b" stroke-width="2"/>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">(b−a)/2</text>
</svg>`,

// --- 10. Метод координат ---

"Формула длины отрезка по координатам":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="40" y1="170" x2="40" y2="20" stroke="#94a3b8" stroke-width="1"/>
<line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1"/>
<line x1="80" y1="140" x2="220" y2="50" stroke="#f59e0b" stroke-width="2"/>
<circle cx="80" cy="140" r="4" fill="#f59e0b"/>
<circle cx="220" cy="50" r="4" fill="#f59e0b"/>
<text x="65" y="155" fill="#f59e0b" font-size="12">A₁</text>
<text x="228" y="48" fill="#f59e0b" font-size="12">A₂</text>
<text x="40" y="185" fill="#94a3b8" font-size="11">O</text>
<text x="285" y="175" fill="#94a3b8" font-size="11">x</text>
<text x="35" y="18" fill="#94a3b8" font-size="11">y</text>
</svg>`,

"Координаты середины отрезка":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="40" y1="170" x2="40" y2="20" stroke="#94a3b8" stroke-width="1"/>
<line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1"/>
<line x1="80" y1="140" x2="220" y2="50" stroke="#818cf8" stroke-width="2"/>
<circle cx="80" cy="140" r="4" fill="#818cf8"/>
<circle cx="220" cy="50" r="4" fill="#818cf8"/>
<circle cx="150" cy="95" r="4" fill="#f59e0b"/>
<text x="65" y="152" fill="#818cf8" font-size="12">A₁</text>
<text x="228" y="48" fill="#818cf8" font-size="12">A₂</text>
<text x="158" y="93" fill="#f59e0b" font-size="12">O</text>
</svg>`,

"Координаты вектора AB по координатам точек":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="40" y1="170" x2="40" y2="20" stroke="#94a3b8" stroke-width="1"/>
<line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1"/>
<line x1="80" y1="140" x2="220" y2="50" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)"/>
<defs><marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker></defs>
<circle cx="80" cy="140" r="3" fill="#f59e0b"/>
<text x="65" y="152" fill="#e5e7eb" font-size="12">A</text>
<text x="228" y="48" fill="#e5e7eb" font-size="12">B</text>
</svg>`,

"Длина (модуль) вектора AB = {a, b}":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="40" y1="170" x2="40" y2="20" stroke="#94a3b8" stroke-width="1"/>
<line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" stroke-width="1"/>
<line x1="60" y1="150" x2="240" y2="50" stroke="#f59e0b" stroke-width="2" marker-end="url(#arr2)"/>
<defs><marker id="arr2" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker></defs>
<line x1="60" y1="150" x2="240" y2="150" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<line x1="240" y1="150" x2="240" y2="50" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
<text x="150" y="168" fill="#94a3b8" font-size="12" text-anchor="middle">a</text>
<text x="250" y="105" fill="#94a3b8" font-size="12">b</text>
<text x="140" y="90" fill="#f59e0b" font-size="12">|AB|</text>
</svg>`,

"Скалярное произведение векторов (2 формулы)":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<line x1="50" y1="150" x2="230" y2="150" stroke="#f59e0b" stroke-width="2" marker-end="url(#ar3)"/>
<line x1="50" y1="150" x2="180" y2="50" stroke="#4ade80" stroke-width="2" marker-end="url(#ar4)"/>
<defs>
<marker id="ar3" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#f59e0b"/></marker>
<marker id="ar4" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6" fill="#4ade80"/></marker>
</defs>
<path d="M 75,150 A 28,28 0 0,0 72,130" fill="none" stroke="#e5e7eb" stroke-width="1.5"/>
<text x="83" y="135" fill="#e5e7eb" font-size="12">φ</text>
<text x="145" y="168" fill="#f59e0b" font-size="12" text-anchor="middle">→a</text>
<text x="108" y="90" fill="#4ade80" font-size="12">→b</text>
</svg>`,

// --- 11. Счётные теоремы ---

"Теорема Менелая":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 150,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="20" y1="120" x2="280" y2="80" stroke="#f59e0b" stroke-width="1.5"/>
<circle cx="90" cy="112" r="3" fill="#f59e0b"/>
<circle cx="218" cy="87" r="3" fill="#f59e0b"/>
<text x="50" y="185" fill="#e5e7eb" font-size="13">A</text>
<text x="150" y="23" fill="#e5e7eb" font-size="13" text-anchor="middle">B</text>
<text x="268" y="185" fill="#e5e7eb" font-size="13">C</text>
<text x="80" y="110" fill="#f59e0b" font-size="11" text-anchor="end">C₁</text>
<text x="225" y="83" fill="#f59e0b" font-size="11">A₁</text>
</svg>`,

"Теорема Чевы":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 150,25 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="170" x2="220" y2="75" stroke="#f59e0b" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="260" y1="170" x2="85" y2="75" stroke="#f59e0b" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="150" y1="25" x2="155" y2="170" stroke="#f59e0b" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="152" cy="110" r="3" fill="#f59e0b"/>
<text x="160" y="108" fill="#f59e0b" font-size="11">P</text>
<text x="50" y="185" fill="#e5e7eb" font-size="13">A</text>
<text x="150" y="18" fill="#e5e7eb" font-size="13" text-anchor="middle">B</text>
<text x="268" y="185" fill="#e5e7eb" font-size="13">C</text>
</svg>`,

"Теорема Ван-Обеля":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="50,170 150,25 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="50" y1="170" x2="220" y2="75" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="260" y1="170" x2="85" y2="75" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="150" y1="25" x2="155" y2="170" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="152" cy="110" r="4" fill="#f59e0b"/>
<text x="160" y="108" fill="#f59e0b" font-size="12">P</text>
<text x="155" y="185" fill="#94a3b8" font-size="11">B₁</text>
</svg>`,

"Теорема Стюарта":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 180,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="180" y1="30" x2="150" y2="170" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="150" cy="170" r="3" fill="#f59e0b"/>
<text x="100" y="105" fill="#818cf8" font-size="12" text-anchor="end">a</text>
<text x="225" y="105" fill="#818cf8" font-size="12">b</text>
<text x="90" y="185" fill="#94a3b8" font-size="11" text-anchor="middle">x</text>
<text x="205" y="185" fill="#94a3b8" font-size="11" text-anchor="middle">y</text>
<text x="168" y="105" fill="#f59e0b" font-size="11">p</text>
</svg>`,

"Теорема косинусов":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,170 170,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<path d="M 60,170 A 22,22 0 0,0 52,152" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
<text x="62" y="152" fill="#f59e0b" font-size="12">γ</text>
<text x="95" y="105" fill="#818cf8" font-size="13" text-anchor="end">b</text>
<text x="220" y="105" fill="#818cf8" font-size="13">a</text>
<text x="150" y="185" fill="#f97373" font-size="13" text-anchor="middle">c</text>
<text x="150" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">c² = a²+b²−2ab·cosγ</text>
</svg>`,

"Теорема синусов":
`<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,22 40,170 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="115" r="95" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="150" y1="115" x2="245" y2="115" stroke="#f59e0b" stroke-width="1" stroke-dasharray="4,3"/>
<text x="200" y="110" fill="#f59e0b" font-size="11">R</text>
<text x="85" y="105" fill="#818cf8" font-size="12" text-anchor="end">a</text>
<text x="215" y="105" fill="#818cf8" font-size="12">b</text>
<text x="150" y="185" fill="#818cf8" font-size="12" text-anchor="middle">c</text>
<text x="150" y="205" fill="#94a3b8" font-size="10" text-anchor="middle">a/sinα = b/sinβ = c/sinγ = 2R</text>
</svg>`,

"Теорема Птолемея":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<circle cx="150" cy="100" r="80" fill="none" stroke="#818cf8" stroke-width="1.5"/>
<polygon points="90,40 230,55 225,165 75,155" fill="none" stroke="#818cf8" stroke-width="2"/>
<line x1="90" y1="40" x2="225" y2="165" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<line x1="230" y1="55" x2="75" y2="155" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<text x="160" y="50" fill="#94a3b8" font-size="11">a</text>
<text x="235" y="115" fill="#94a3b8" font-size="11">b</text>
<text x="150" y="178" fill="#94a3b8" font-size="11" text-anchor="middle">c</text>
<text x="68" y="105" fill="#94a3b8" font-size="11" text-anchor="end">d</text>
<text x="170" y="105" fill="#f59e0b" font-size="10">d₁d₂=ac+bd</text>
</svg>`,

// --- 12. Крутые факты ---

"Параллелограмм Вариньона":
`<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="40,150 80,30 260,60 220,180" fill="none" stroke="#818cf8" stroke-width="2"/>
<polygon points="60,90 170,45 240,120 130,165" fill="none" stroke="#f59e0b" stroke-width="2"/>
<circle cx="60" cy="90" r="3" fill="#f59e0b"/>
<circle cx="170" cy="45" r="3" fill="#f59e0b"/>
<circle cx="240" cy="120" r="3" fill="#f59e0b"/>
<circle cx="130" cy="165" r="3" fill="#f59e0b"/>
<text x="150" y="195" fill="#94a3b8" font-size="11" text-anchor="middle">середины → параллелограмм</text>
</svg>`,

"Лемма о трезубце":
`<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="150,25 50,170 250,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="150" cy="115" r="93" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<line x1="150" y1="25" x2="150" y2="208" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,3"/>
<circle cx="150" cy="208" r="4" fill="#f59e0b"/>
<circle cx="150" cy="130" r="3" fill="#4ade80"/>
<text x="158" y="208" fill="#f59e0b" font-size="11">P</text>
<text x="158" y="128" fill="#4ade80" font-size="11">I</text>
<text x="150" y="18" fill="#e5e7eb" font-size="12" text-anchor="middle">B</text>
<text x="40" y="180" fill="#e5e7eb" font-size="12">A</text>
<text x="258" y="180" fill="#e5e7eb" font-size="12">C</text>
</svg>`,

"Прямая Симсона":
`<svg viewBox="0 0 300 210" xmlns="http://www.w3.org/2000/svg" style="font-family:sans-serif">
<polygon points="60,160 160,30 260,170" fill="none" stroke="#818cf8" stroke-width="2"/>
<circle cx="155" cy="115" r="90" fill="none" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,3"/>
<circle cx="245" cy="80" r="4" fill="#f59e0b"/>
<text x="253" y="78" fill="#f59e0b" font-size="12">P</text>
<line x1="80" y1="170" x2="230" y2="115" stroke="#4ade80" stroke-width="2"/>
<text x="150" y="205" fill="#94a3b8" font-size="10" text-anchor="middle">P на окр. ⟺ проекции на одной прямой</text>
</svg>`,

};
