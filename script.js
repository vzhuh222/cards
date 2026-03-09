// --------- НАСТРОЙКИ УЧИТЕЛЯ ---------
// Здесь вы добавляете / редактируете модули карточек.
// Ученики не видят этот код, только используют уже созданные модули.

const MODULES = [
  {
    id: "planimetry-full",
    title: "Вся теория по планиметрии",
    cards: [
      // --- 1. Базовые факты о треугольниках и углах. Параллельность прямых ---
      { question: "Чему равна сумма углов треугольника?", answerType: "text", answer: "∠A + ∠B + ∠C = 180°" },
      { question: "Чему равен внешний угол треугольника?", answerType: "text", answer: "Внешний угол треугольника равен сумме двух углов треугольника, не смежных с ним: ∠BCD = ∠A + ∠B" },
      { question: "Первый признак равенства треугольников", answerType: "text", answer: "Если две стороны и угол между ними одного треугольника соответственно равны двум сторонам и углу между ними другого треугольника, то такие треугольники равны." },
      { question: "Второй признак равенства треугольников", answerType: "text", answer: "Если сторона и два прилежащих угла одного треугольника соответственно равны стороне и двум прилежащим углам другого треугольника, то такие треугольники равны." },
      { question: "Третий признак равенства треугольников", answerType: "text", answer: "Если три стороны одного треугольника соответственно равны трём сторонам другого треугольника, то такие треугольники равны." },
      { question: "Что такое равнобедренный треугольник? Какие у него свойства?", answerType: "text", answer: "Треугольник, у которого две стороны (боковые) равны. 1) Биссектриса, медиана и высота к основанию совпадают. 2) Углы при основании равны." },
      { question: "Где лежит центр описанной окружности треугольника?", answerType: "text", answer: "На пересечении серединных перпендикуляров к сторонам треугольника." },
      { question: "Три свойства параллельных прямых (при секущей)", answerType: "text", answer: "Если a ∥ b и c — секущая, то: 1) накрест лежащие углы равны (∠1 = ∠2); 2) соответственные углы равны (∠1 = ∠4); 3) сумма односторонних углов равна 180° (∠1 + ∠3 = 180°)." },
      { question: "Три признака параллельности прямых", answerType: "text", answer: "Прямые a ∥ b при секущей c, если: 1) накрест лежащие углы равны; 2) соответственные углы равны; 3) сумма односторонних углов равна 180°." },
      { question: "Обобщённая теорема Фалеса", answerType: "text", answer: "Параллельные секущие образуют на прямых пропорциональные отрезки: a/a′ = b/b′." },
      
      { question: "Первый признак подобия треугольников", answerType: "text", answer: "Если две стороны одного треугольника пропорциональны двум сторонам другого, а углы между ними равны, то треугольники подобны." },
      { question: "Второй признак подобия треугольников", answerType: "text", answer: "Если два угла одного треугольника равны двум углам другого, то треугольники подобны." },
      { question: "Третий признак подобия треугольников", answerType: "text", answer: "Если три стороны одного треугольника пропорциональны трём сторонам другого, то треугольники подобны." },
      // --- 2. Средние линии и медианы треугольника ---
      { question: "Что такое средняя линия треугольника? Её свойства?", answerType: "text", answer: "Отрезок, соединяющий середины двух сторон. 1) Параллельна третьей стороне; 2) Равна половине третьей стороны; 3) Отсекает подобный треугольник." },
      { question: "На сколько равных треугольников средние линии разбивают треугольник?", answerType: "text", answer: "На 4 равных треугольника с равными площадями." },
      { question: "Какое свойство медианы треугольника относительно площади?", answerType: "text", answer: "Медиана делит треугольник на два равновеликих (равных по площади) треугольника." },
      { question: "Формула длины медианы BD треугольника ABC", answerType: "text", answer: "BD = ½√(2AB² + 2BC² − AC²)" },
      { question: "В каком отношении медианы делятся точкой пересечения?", answerType: "text", answer: "В отношении 2:1, считая от вершины." },
      { question: "На сколько равновеликих треугольников три медианы делят треугольник?", answerType: "text", answer: "На 6 равновеликих треугольников." },
      // --- 3. Прямоугольный треугольник ---
      { question: "Чему равна медиана прямоугольного треугольника, проведённая из вершины прямого угла?", answerType: "text", answer: "Половине гипотенузы: BM = ½AC = AM = MC. Образуются два равнобедренных треугольника." },
      { question: "Теорема Пифагора", answerType: "text", answer: "Прямая: c² = a² + b² (квадрат гипотенузы = сумма квадратов катетов). Обратная: если квадрат стороны равен сумме квадратов двух других сторон, то треугольник прямоугольный." },
      { question: "Высота из вершины прямого угла: на какие треугольники делит?", answerType: "text", answer: "На два треугольника, подобных исходному: △ABC ∼ △AHC ∼ △BHC." },
      { question: "Чему равен квадрат высоты из прямого угла?", answerType: "text", answer: "Произведению отрезков, на которые она делит гипотенузу: CH² = AH · BH." },
      { question: "Формула проекции катета на гипотенузу", answerType: "text", answer: "BH = BC²/AB; AH = AC²/AB (проекция катета = квадрат катета / гипотенуза)." },
      { question: "Формула высоты из вершины прямого угла через катеты", answerType: "text", answer: "CH = (AC · BC) / AB (произведение катетов / гипотенуза)." },
      { question: "Вписанная окружность в прямоугольном треугольнике: какую фигуру образуют вершина прямого угла, точки касания и центр?", answerType: "text", answer: "Квадрат." },
      { question: "Свойства прямоугольного треугольника с углом 30°", answerType: "text", answer: "1) Катет, лежащий против угла 30°, равен половине гипотенузы. 2) Если катет = половина гипотенузы, то он лежит против угла 30°." },
      { question: "Тригонометрические соотношения в прямоугольном треугольнике", answerType: "text", answer: "sin α = a/c, cos α = b/c, tg α = a/b, ctg α = b/a (a — противолежащий катет, b — прилежащий, c — гипотенуза)." },
      // --- 4. Базовые факты о многоугольниках ---
      { question: "Чему равна сумма углов выпуклого четырёхугольника?", answerType: "text", answer: "360°" },
      { question: "Что такое трапеция?", answerType: "text", answer: "Выпуклый четырёхугольник, у которого две стороны параллельны (основания), а две другие — не параллельны (боковые)." },
      { question: "Что такое параллелограмм?", answerType: "text", answer: "Четырёхугольник, у которого противоположные стороны попарно параллельны." },
      { question: "Признаки параллелограмма (3 признака)", answerType: "text", answer: "Четырёхугольник является параллелограммом, если: 1) противоположные стороны попарно равны; 2) две стороны равны и параллельны; 3) диагонали точкой пересечения делятся пополам." },
      { question: "Свойства параллелограмма (3 свойства)", answerType: "text", answer: "1) Противоположные стороны попарно равны; 2) Противоположные углы попарно равны; 3) Диагонали точкой пересечения делятся пополам." },
      { question: "Что такое ромб? Его признаки?", answerType: "text", answer: "Параллелограмм со всеми равными сторонами. Признаки: параллелограмм является ромбом, если 1) диагонали взаимно перпендикулярны; 2) диагонали — биссектрисы углов." },
      { question: "Свойства ромба", answerType: "text", answer: "1) Диагонали взаимно перпендикулярны; 2) Диагонали являются биссектрисами углов. Плюс все свойства параллелограмма." },
      { question: "Что такое прямоугольник? Его признаки?", answerType: "text", answer: "Параллелограмм с хотя бы одним прямым углом. Признаки: 1) все углы прямые; 2) у параллелограмма диагонали равны." },
      { question: "Свойство прямоугольника (про диагонали)", answerType: "text", answer: "Диагонали прямоугольника равны." },
      { question: "Что такое квадрат? Перечислите его свойства.", answerType: "text", answer: "Прямоугольник со всеми равными сторонами (= ромб с прямым углом). Свойства: все стороны равны, все углы прямые, диагонали делятся пополам, равны, перпендикулярны и делят углы пополам. Диагональ = a√2." },
      { question: "Свойство трапеции: сумма углов при боковой стороне", answerType: "text", answer: "∠A + ∠B = ∠C + ∠D = 180°" },
      { question: "Признаки и свойства равнобедренной трапеции", answerType: "text", answer: "Трапеция с равными боковыми сторонами. Признаки/свойства: 1) углы при основании равны; 2) диагонали равны." },
      { question: "Сумма внутренних углов выпуклого n-угольника", answerType: "text", answer: "(n − 2) · 180°" },
      { question: "Чему равен каждый угол правильного n-угольника?", answerType: "text", answer: "(n − 2) · 180° / n" },
      { question: "Правильный треугольник: углы, высота, площадь (через сторону a)", answerType: "text", answer: "Все углы = 60°. Высота = медиана = биссектриса = a√3/2. Площадь = a²√3/4." },
      { question: "Свойства правильного шестиугольника", answerType: "text", answer: "1) Большие диагонали делят его на 6 равносторонних треугольников; 2) Большая диагональ = 2a; 3) Центры вписанной и описанной окружностей совпадают; 4) Радиус описанной окружности = стороне." },
      // --- 5. Все о площадях ---
      { question: "Как относятся площади треугольников с общей стороной?", answerType: "text", answer: "Как высоты, проведённые к этой стороне: S₁/S₂ = h₁/h₂." },
      { question: "Как относятся площади треугольников с общим углом?", answerType: "text", answer: "Как произведения сторон, образующих этот угол: S(ABC)/S(AB′C′) = (AB·AC)/(AB′·AC′)." },
      { question: "Как относятся площади треугольников с общей высотой?", answerType: "text", answer: "Как основания, к которым эта высота проведена." },
      { question: "Площади треугольников между параллельными прямыми", answerType: "text", answer: "Если p ∥ q и вершины треугольников лежат на p, а общее основание на q, то площади равны." },
      { question: "Как относятся площади подобных треугольников?", answerType: "text", answer: "Как квадрат коэффициента подобия: S₁/S₂ = k². Периметры относятся как k." },
      { question: "Формула Герона площади треугольника", answerType: "text", answer: "S = √(p(p−a)(p−b)(p−c)), где p — полупериметр." },
      { question: "Площадь треугольника через основание и высоту", answerType: "text", answer: "S = a · hₐ / 2" },
      { question: "Площадь треугольника через две стороны и синус угла", answerType: "text", answer: "S = ½ · a · b · sin∠(a,b)" },
      { question: "Площадь треугольника через полупериметр и радиус вписанной окружности", answerType: "text", answer: "S = p · r, где p = (a+b+c)/2." },
      { question: "Площадь треугольника через стороны и радиус описанной окружности", answerType: "text", answer: "S = abc / (4R)" },
      { question: "Площадь выпуклого четырёхугольника через диагонали", answerType: "text", answer: "S = ½ · d₁ · d₂ · sin∠(d₁, d₂)" },
      { question: "Площадь параллелограмма (2 формулы)", answerType: "text", answer: "S = a · hₐ = a · b · sin∠(a,b)" },
      { question: "Площадь ромба через диагонали", answerType: "text", answer: "S = ½ · d₁ · d₂" },
      { question: "Площадь прямоугольника", answerType: "text", answer: "S = a · b" },
      { question: "Площадь квадрата (2 формулы)", answerType: "text", answer: "S = a² = ½ · d²" },
      { question: "Площадь трапеции", answerType: "text", answer: "S = (a + b) / 2 · h, где a и b — основания, h — высота." },
      
      // --- 6. Все про окружность и вписанные четырёхугольники ---
      { question: "Чему равен вписанный угол по отношению к центральному?", answerType: "text", answer: "Вписанный угол равен половине центрального угла, опирающегося на ту же дугу." },
      { question: "Свойство радиуса, проведённого к точке касания", answerType: "text", answer: "Радиус, проведённый к точке касания, перпендикулярен касательной." },
      { question: "Связь равных хорд и дуг", answerType: "text", answer: "Равные хорды стягивают равные дуги. И наоборот: равные дуги стягиваются равными хордами." },
      { question: "Угол между хордой и касательной", answerType: "text", answer: "Равен вписанному углу, опирающемуся на дугу, отсечённую хордой." },
      { question: "Квадрат касательной (свойство)", answerType: "text", answer: "Квадрат касательной равен произведению секущей на её внешнюю часть: OK² = OA · OB." },
      { question: "Произведение секущей на внешнюю часть — постоянная величина", answerType: "text", answer: "Для данной окружности и точки вне её: OA · OB = OC · OD (для любых двух секущих из точки O)." },
      { question: "Свойство отрезков касательных из одной точки", answerType: "text", answer: "Отрезки касательных, проведённых из одной точки к окружности, равны: OA = OB." },
      { question: "Произведения отрезков пересекающихся хорд", answerType: "text", answer: "AO · OC = BO · OD" },
      { question: "Угол между пересекающимися хордами окружности", answerType: "text", answer: "Равен полусумме дуг, заключённых между ними: α = ½(⌣AB + ⌣CD)." },
      { question: "Угол между секущими из одной точки", answerType: "text", answer: "Равен полуразности дуг, заключённых между ними: α = ½(⌣AB − ⌣CD)." },
      { question: "Свойство радиуса, перпендикулярного хорде", answerType: "text", answer: "Если радиус перпендикулярен хорде, то он делит её пополам. И наоборот." },
      { question: "Признаки вписанности четырёхугольника в окружность", answerType: "text", answer: "1) Углы, опирающиеся на одну сторону, равны; 2) Сумма противолежащих углов = 180°; 3) Угол = смежному с противолежащим; 4) OC·OD = OB·OA; 5) Найдена точка, равноудалённая от вершин." },
      { question: "Частный случай: два угла по 90° опираются на одну сторону", answerType: "text", answer: "Эта сторона является диаметром окружности, в которую вписан четырёхугольник." },
      // --- 7. Высота треугольника и ортоцентр ---
      { question: "Свойство 1 ортоцентра: вписанные четырёхугольники", answerType: "text", answer: "Четырёхугольники AC₁HB₁, BA₁HC₁, CB₁HA₁ являются вписанными (противолежащие углы по 90°, сумма 180°)." },
      { question: "Свойство 2 ортоцентра: ещё вписанные четырёхугольники", answerType: "text", answer: "Четырёхугольники ABA₁B₁, BCB₁C₁, CAC₁A₁ являются вписанными." },
      { question: "Свойство 3 ортоцентра и ортотреугольника", answerType: "text", answer: "Ортоцентр H является инцентром (центром вписанной окружности) ортотреугольника A₁B₁C₁." },
      { question: "Лемма об отражении ортоцентра 1", answerType: "text", answer: "Точка, симметричная ортоцентру относительно стороны треугольника, лежит на описанной окружности." },
      { question: "Лемма об отражении ортоцентра 2", answerType: "text", answer: "Точка, симметричная ортоцентру относительно середины стороны, лежит на описанной окружности и диаметрально противоположна соответствующей вершине." },
      { question: "Свойство BH = 2OM (ортоцентр и центр описанной окружности)", answerType: "text", answer: "Если O — центр описанной окружности, M — середина стороны AC, то BH = 2OM." },
      { question: "Свойство AH² + BC² = ?", answerType: "text", answer: "AH² + BC² = 4R² (в треугольнике с ортоцентром H и радиусом описанной окружности R)." },
      // --- 8. Биссектрисы и инцентр ---
      { question: "Основное свойство биссектрисы угла", answerType: "text", answer: "Каждая точка биссектрисы угла равноудалена от его сторон. Обратно: если точка равноудалена от сторон угла — она лежит на биссектрисе." },
      { question: "Свойство биссектрисы BL в треугольнике ABC (пропорция)", answerType: "text", answer: "AB/BC = AL/LC (биссектриса делит противоположную сторону в отношении прилежащих сторон)." },
      { question: "Биссектрисы односторонних углов при параллельных прямых", answerType: "text", answer: "Взаимно перпендикулярны." },
      { question: "Биссектрисы смежных углов", answerType: "text", answer: "Взаимно перпендикулярны." },
      { question: "Где лежит центр вписанной окружности треугольника?", answerType: "text", answer: "На пересечении биссектрис углов треугольника." },
      { question: "Где лежит центр вневписанной окружности треугольника?", answerType: "text", answer: "На пересечении внутренней биссектрисы угла, в который вписана окружность, и внешних биссектрис двух других углов." },
      { question: "Длина отрезка касания вписанной окружности (формула x = p − a)", answerType: "text", answer: "Если вписанная окружность касается стороны BC=a, то отрезки от вершины A до точек касания равны x = (b+c−a)/2 = p−a, где p — полупериметр." },
      { question: "Описанный четырёхугольник: условие вписанности окружности", answerType: "text", answer: "В четырёхугольник можно вписать окружность тогда и только тогда, когда суммы противоположных сторон равны: a + c = b + d." },
      // --- 9. Все о трапеции ---
      { question: "Средняя линия трапеции", answerType: "text", answer: "Отрезок, соединяющий середины боковых сторон. Параллелен основаниям и равен их полусумме: MN = (AD + BC)/2." },
      { question: "Замечательное свойство трапеции (4 точки на одной прямой)", answerType: "text", answer: "Середины оснований, точка пересечения диагоналей и точка пересечения продолжений боковых сторон лежат на одной прямой." },
      { question: "Отрезок, соединяющий середины диагоналей трапеции", answerType: "text", answer: "Равен полуразности оснований." },
      // --- 10. Метод координат ---
      { question: "Формула длины отрезка по координатам", answerType: "text", answer: "A₁A₂ = √((x₁−x₂)² + (y₁−y₂)²)" },
      { question: "Координаты середины отрезка", answerType: "text", answer: "O = ((x₁+x₂)/2; (y₁+y₂)/2)" },
      { question: "Координаты вектора AB по координатам точек", answerType: "text", answer: "AB = {x₂−x₁; y₂−y₁}" },
      { question: "Длина (модуль) вектора AB = {a, b}", answerType: "text", answer: "|AB| = √(a² + b²)" },
      { question: "Скалярное произведение векторов (2 формулы)", answerType: "text", answer: "1) (A₁A₂, B₁B₂) = |A₁A₂|·|B₁B₂|·cos∠ между ними; 2) (A₁A₂, B₁B₂) = x₁x₂ + y₁y₂." },
      // --- 11. Счётные теоремы планиметрии ---
      { question: "Теорема Менелая", answerType: "text", answer: "Если прямая пересекает стороны AB и BC в точках C₁ и A₁, а продолжение AC в точке B₁, то: (AC₁/C₁B)·(BA₁/A₁C)·(CB₁/B₁A) = 1." },
      { question: "Теорема Чевы", answerType: "text", answer: "Если AA₁, BB₁, CC₁ — чевианы, пересекающиеся в одной точке, то: (AC₁/C₁B)·(BA₁/A₁C)·(CB₁/B₁A) = 1." },
      { question: "Теорема Ван-Обеля", answerType: "text", answer: "Если чевианы AA₁, BB₁, CC₁ пересекаются в точке P, то: BP/PB₁ = BC₁/C₁A + BA₁/A₁C." },
      { question: "Теорема Стюарта", answerType: "text", answer: "p² = a²·x/(x+y) + b²·y/(x+y) − x·y, где p — чевиана, x и y — отрезки, на которые она делит сторону." },
      { question: "Теорема косинусов", answerType: "text", answer: "c² = a² + b² − 2ab·cos∠(a,b)" },
      { question: "Теорема синусов", answerType: "text", answer: "a/sin α = b/sin β = c/sin γ = 2R" },
      { question: "Теорема Птолемея", answerType: "text", answer: "Во вписанном четырёхугольнике произведение диагоналей равно сумме произведений противоположных сторон: d₁·d₂ = a·c + b·d." },
      
    ],
  },
];

// Вставьте сюда свои данные Telegram-бота.
// 1. Создайте бота через BotFather и получите токен.
// 2. Узнайте свой chat_id (например, написав боту и посмотрев getUpdates).
// ВАЖНО: токен будет находиться в коде страницы. Не храните здесь «боевого» бота,
// если безопасность критична. Для личных учебных задач обычно достаточно.

const TELEGRAM_BOT_TOKEN = "8624177421:AAHTIKopqKxu37ykvb4M9hgzH9a45n1eXT4";
const TELEGRAM_CHAT_ID = "883459713";

// --------- ОСНОВНАЯ ЛОГИКА ---------

const $ = (selector) => document.querySelector(selector);

const nameInput = $("#student-name");
const moduleSelect = $("#module-select");
const startBtn = $("#start-session-btn");

const studySection = $("#study-section");
const studyModuleTitle = $("#study-module-title");
const studyProgress = $("#study-progress");

const questionText = $("#question-text");
const answerContent = $("#answer-content");

const showAnswerBtn = $("#show-answer-btn");
const answerActions = $("#answer-actions");
const btnCorrect = $("#btn-correct");
const btnWrong = $("#btn-wrong");

const sessionFinishedBlock = $("#session-finished");
const restartBtn = $("#restart-btn");

// Элементы режима учителя
const teacherPanel = $("#teacher-panel");
const teacherModuleIdInput = $("#teacher-module-id");
const teacherModuleTitleInput = $("#teacher-module-title");
const teacherQuestionInput = $("#teacher-question");
const teacherAnswerInput = $("#teacher-answer");
const teacherAnswerFileInput = $("#teacher-answer-file");
const teacherAddCardBtn = $("#teacher-add-card-btn");
const teacherCardsCount = $("#teacher-cards-count");
const teacherOutput = $("#teacher-output");

let teacherCardsDraft = [];

let currentModule = null;
let currentIndex = 0;
let sessionStartTime = null;
let answersLog = [];
let reportSent = false;

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function initModuleSelect() {
  for (const module of MODULES) {
    const option = document.createElement("option");
    option.value = module.id;
    option.textContent = module.title;
    moduleSelect.appendChild(option);
  }
}

function updateStartButtonState() {
  const hasName = nameInput.value.trim().length > 0;
  const hasModule = moduleSelect.value !== "";
  startBtn.disabled = !(hasName && hasModule);
}

function startSession() {
  const moduleId = moduleSelect.value;
  const baseModule = MODULES.find((m) => m.id === moduleId) || null;

  if (!baseModule) {
    alert("Не найден выбранный модуль.");
    return;
  }

  currentModule = {
    ...baseModule,
    cards: shuffleArray(baseModule.cards),
  };

  currentIndex = 0;
  answersLog = [];
  reportSent = false;
  sessionStartTime = new Date();

  studyModuleTitle.textContent = currentModule.title;

  studySection.classList.remove("hidden");
  sessionFinishedBlock.classList.add("hidden");
  showAnswerBtn.disabled = false;
  answerActions.classList.add("hidden");

  nameInput.disabled = true;
  moduleSelect.disabled = true;
  startBtn.disabled = true;

  renderCurrentCard();
}

function renderCurrentCard() {
  const total = currentModule.cards.length;

  if (currentIndex >= total) {
    finishSession();
    return;
  }

  const card = currentModule.cards[currentIndex];

  studyProgress.textContent = `Карточка ${currentIndex + 1} из ${total}`;
  questionText.textContent = card.question;

  answerContent.innerHTML = "";

  const svgMarkup =
    typeof ILLUSTRATIONS !== "undefined" && ILLUSTRATIONS[card.question];
  if (svgMarkup) {
    const div = document.createElement("div");
    div.className = "card-illustration";
    div.innerHTML = svgMarkup;
    answerContent.appendChild(div);
  }

  if (card.answerType === "image") {
    const img = document.createElement("img");
    img.src = card.answer;
    img.alt = "Ответ";
    answerContent.appendChild(img);
  } else if (card.answerType === "mixed" && card.answer && typeof card.answer === "object") {
    if (card.answer.text) {
      const p = document.createElement("p");
      p.textContent = card.answer.text;
      answerContent.appendChild(p);
    }
    if (card.answer.image) {
      const img = document.createElement("img");
      img.src = card.answer.image;
      img.alt = "Ответ";
      answerContent.appendChild(img);
    }
  } else {
    const p = document.createElement("p");
    p.textContent = card.answer;
    answerContent.appendChild(p);
  }

  answerContent.style.visibility = "hidden";
  answerActions.classList.add("hidden");
  showAnswerBtn.classList.remove("hidden");
  showAnswerBtn.disabled = false;
}

function showAnswer() {
  answerContent.style.visibility = "visible";
  answerActions.classList.remove("hidden");
  showAnswerBtn.classList.add("hidden");
}

function markAnswer(isCorrect) {
  const card = currentModule.cards[currentIndex];

  answersLog.push({
    index: currentIndex,
    question: card.question,
    answer: card.answer,
    correct: isCorrect,
  });

  currentIndex += 1;
  renderCurrentCard();
}

function buildReport({ partial = false } = {}) {
  if (!currentModule || !sessionStartTime) return null;

  const endTime = new Date();
  const durationSec = Math.round((endTime - sessionStartTime) / 1000);
  const minutes = Math.floor(durationSec / 60);
  const seconds = durationSec % 60;

  const studentName = nameInput.value.trim() || "Без имени";
  const totalInModule = currentModule.cards.length;
  const answered = answersLog.length;
  const correctCount = answersLog.filter((a) => a.correct).length;
  const wrongCount = answered - correctCount;

  const statusLine = partial
    ? `⚠️ Занятие прервано (${answered} из ${totalInModule} карточек)`
    : `✅ Занятие завершено`;

  const lines = [
    `🧑‍🎓 Ученик: ${studentName}`,
    `📚 Модуль: ${currentModule.title}`,
    statusLine,
    `🕒 Начало: ${sessionStartTime.toLocaleString("ru-RU")}`,
    `⏳ Длительность: ${minutes} мин ${seconds} сек`,
    `✅ Правильных: ${correctCount} из ${answered}`,
    `❌ Ошибок: ${wrongCount}`,
  ];

  return lines.join("\n");
}

function sendReport({ partial = false, beacon = false } = {}) {
  if (reportSent) return;
  const text = buildReport({ partial });
  if (!text) return;
  reportSent = true;
  if (beacon) {
    sendToTelegramBeacon(text);
  } else {
    sendToTelegram(text);
  }
}

function finishSession() {
  sendReport({ partial: false });

  sessionFinishedBlock.classList.remove("hidden");
  answerActions.classList.add("hidden");
  showAnswerBtn.classList.add("hidden");
}

function restartSession() {
  currentModule = null;
  sessionStartTime = null;
  answersLog = [];
  reportSent = false;

  studySection.classList.add("hidden");
  sessionFinishedBlock.classList.add("hidden");

  nameInput.disabled = false;
  moduleSelect.disabled = false;
  nameInput.value = "";
  moduleSelect.value = "";
  studyModuleTitle.textContent = "";
  studyProgress.textContent = "";
  questionText.textContent = "";
  answerContent.innerHTML = "";

  updateStartButtonState();
}

// --------- РЕЖИМ УЧИТЕЛЯ (ГЕНЕРАЦИЯ МОДУЛЕЙ) ---------

function isTeacherMode() {
  const params = new URLSearchParams(window.location.search);
  return params.get("teacher") === "1";
}

function renderTeacherOutput() {
  const id = (teacherModuleIdInput?.value || "").trim() || "your-module-id";
  const title = (teacherModuleTitleInput?.value || "").trim() || "Название модуля";

  const cardsString = teacherCardsDraft
    .map((card) => {
      const safeQuestion = card.question.replace(/"/g, '\\"');
      if (card.answerType === "mixed" && card.answer && typeof card.answer === "object") {
        const safeText = (card.answer.text || "").replace(/"/g, '\\"');
        const safeImage = (card.answer.image || "").replace(/"/g, '\\"');
        return `      {
        question: "${safeQuestion}",
        answerType: "mixed",
        answer: {
          text: "${safeText}",
          image: "${safeImage}",
        },
      }`;
      } else {
        const safeAnswer = String(card.answer).replace(/"/g, '\\"');
        return `      {
        question: "${safeQuestion}",
        answerType: "${card.answerType}",
        answer: "${safeAnswer}",
      }`;
      }
    })
    .join(",\n");

  const block = `{
  id: "${id}",
  title: "${title}",
  cards: [
${cardsString || "    // добавьте хотя бы одну карточку через форму выше"}
  ],
},`;

  if (teacherOutput) {
    teacherOutput.value = block;
  }

  if (teacherCardsCount) {
    teacherCardsCount.textContent = `Карточек в модуле: ${teacherCardsDraft.length}`;
  }
}

function initTeacherMode() {
  if (!isTeacherMode() || !teacherPanel) {
    return;
  }

  teacherPanel.classList.remove("hidden");

  if (teacherAddCardBtn) {
    teacherAddCardBtn.addEventListener("click", () => {
      const q = (teacherQuestionInput?.value || "").trim();
      const a = (teacherAnswerInput?.value || "").trim();
      const file = teacherAnswerFileInput?.files?.[0] || null;

      if (!q) {
        alert("Введите вопрос перед добавлением карточки.");
        return;
      }

      if (!a && !file) {
        alert("Введите текст ответа и/или выберите файл картинки.");
        return;
      }

      // Если выбран файл и есть текст — смешанный ответ
      if (file && a) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result;
          if (!dataUrl || typeof dataUrl !== "string") {
            alert("Не удалось прочитать файл картинки.");
            return;
          }

          teacherCardsDraft.push({
            question: q,
            answerType: "mixed",
            answer: {
              text: a,
              image: dataUrl,
            },
          });

          if (teacherQuestionInput) teacherQuestionInput.value = "";
          if (teacherAnswerInput) teacherAnswerInput.value = "";
          if (teacherAnswerFileInput) teacherAnswerFileInput.value = "";

          renderTeacherOutput();
        };
        reader.readAsDataURL(file);
      } else if (file) {
        // Только картинка
        const reader = new FileReader();
        reader.onload = (e) => {
          const dataUrl = e.target?.result;
          if (!dataUrl || typeof dataUrl !== "string") {
            alert("Не удалось прочитать файл картинки.");
            return;
          }

          teacherCardsDraft.push({
            question: q,
            answerType: "image",
            answer: dataUrl,
          });

          if (teacherQuestionInput) teacherQuestionInput.value = "";
          if (teacherAnswerInput) teacherAnswerInput.value = "";
          if (teacherAnswerFileInput) teacherAnswerFileInput.value = "";

          renderTeacherOutput();
        };
        reader.readAsDataURL(file);
      } else {
        // Только текстовый ответ
        teacherCardsDraft.push({
          question: q,
          answerType: "text",
          answer: a,
        });

        if (teacherQuestionInput) teacherQuestionInput.value = "";
        if (teacherAnswerInput) teacherAnswerInput.value = "";

        renderTeacherOutput();
      }
    });
  }

  [teacherModuleIdInput, teacherModuleTitleInput].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", () => renderTeacherOutput());
  });

  renderTeacherOutput();
}

function sendToTelegram(text) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const body = new URLSearchParams({ chat_id: TELEGRAM_CHAT_ID, text });
  fetch(url, { method: "POST", body }).catch(() => {});
}

function sendToTelegramBeacon(text) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) return;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const body = new URLSearchParams({ chat_id: TELEGRAM_CHAT_ID, text });
  navigator.sendBeacon(url, body);
}

// --------- СВЯЗЫВАЕМ С UI ---------

document.addEventListener("DOMContentLoaded", () => {
  initModuleSelect();

  initTeacherMode();

  nameInput.addEventListener("input", updateStartButtonState);
  moduleSelect.addEventListener("change", updateStartButtonState);

  startBtn.addEventListener("click", () => {
    startSession();
  });

  showAnswerBtn.addEventListener("click", () => {
    showAnswer();
  });

  btnCorrect.addEventListener("click", () => {
    markAnswer(true);
  });

  btnWrong.addEventListener("click", () => {
    markAnswer(false);
  });

  restartBtn.addEventListener("click", () => {
    restartSession();
  });

  window.addEventListener("beforeunload", () => {
    if (currentModule && sessionStartTime && answersLog.length > 0) {
      sendReport({ partial: true, beacon: true });
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (
      document.visibilityState === "hidden" &&
      currentModule &&
      sessionStartTime &&
      answersLog.length > 0
    ) {
      sendReport({ partial: true, beacon: true });
    }
  });
});

