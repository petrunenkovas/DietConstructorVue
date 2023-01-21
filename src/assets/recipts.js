const recipes = [
    {id: 1,
    title:"Спагетти болоньезе", 
    meal:'lunch', 
    calories: 549, 
    ingredients: [
        {name:'Куриное филе', quantity: 120, measure:'г'},
        {name:'Томатная паста', quantity: 75, measure:'г'},
        {name:'Сладкий перец', quantity: 50, measure:'г'},
        {name:'Лук', quantity: 50, measure:'г'},
        {name:'Цельнозерновые макароны', quantity: 50, measure:'г'}], 
    recipt: `
    1. Из филе сделать фарш. Нарезать овощи. Обжарить на масле филе и овощи. Потушить в небольшом количестве воды, добавить томатный соус и тушить до готовности.<br>
    2. Макароны отварить и смешать с соусом.`},
    
    {id: 2,
    title:"Мини-оладушки", 
    meal:'breakfast', 
    calories: 433, 
    ingredients: [
        {name:'Любимые фрукты или ягоды', quantity: 130, measure:'г'},
        {name:'Мягкий творог 5%', quantity: 100, measure:'г'},
        {name:'Рисовая мука', quantity: 50, measure:'г'},
        {name:'Большое яйцо', quantity: 1, measure:'штук(а)'},
        {name:'Разрыхлитель', quantity: 0.5, measure:'ч.л'},
        {name:'Подсластитель', quantity: 0, measure:'по вкусу'}], 
    recipt: `
    1. Смешиваем все ингридиенты для теста, оно должно получиться немного густым.<br>
    2. Выкладваем тесто на разогретую сковородку и чайной ложкой формируем маленькие оладушки. Готовим их по 2 минуты с каждои стороны, под крышкой.<br>
    3. Фрукты и ягоды нарезаем. Выкладваем их в тарелку вместе с оладушками.`},
    
    {id: 3,
    title:"Курица со стручковой фасолью", 
    meal:'dinner', 
    calories: 332, 
    ingredients: [
        {name:'Стручковая фасоль', quantity: 100, measure:'г'},
        {name:'Куриное филе', quantity: 120, measure:'г'},
        {name:'Сладкий перец', quantity: 100, measure:'г'},
        {name:'Соевый соус', quantity: 1, measure:'ст.л'},], 
    recipt: `
    1. Отварить фасоль в подсоленной воде пару минут (она должна оставаться немного твердой) и слить воду.<br>
    2. Куриное филе промыть, обсушить и нарезать полосками.<br>
    3. Обжарить филе в горячей сковороде на масле до готовности.<br>
    4. Перец почистить и нарезать полосками. В сковороду от мяса добавить еще масла и обжарить лук и перец, добавить фасоль и жарить минут 5 на небольшом огне до готовности овощей. Добавить курицу к овощам.<br>
    5. Чеснок мелко нарезать, смешать с соевым соусом и добавить в сковороду. Прогреть ещё 1-2 минуты.`},

    {id: 4,
    title:"Шоколадный ролл с творогом", 
    meal:'breakfast', 
    calories: 285, 
    ingredients: [
        {name:'Молоко 1,5%', quantity: 70, measure:'мл'},
        {name:'Клубника', quantity: 50, measure:'г'},
        {name:'Мягкий творог 5%', quantity: 50, measure:'г'},
        {name:'Банан', quantity: 50, measure:'г'},
        {name:'Мука', quantity: 20, measure:'г'},
        {name:'Большое яйцо', quantity: 1, measure:'штук(а)'},
        {name:'Какао', quantity: 1, measure:'ч.л'},
        {name:'Подсластитель', quantity: 0, measure:'по вкусу'},], 
    recipt: `
    1. Для приготовления блина, смешайте муку, молоко, яйцо, како и подсластитель и перемешаете. Обжарьте блин с двух сторон под крышкой.<br>
    2. Мягкий творог смешайте с подсластителем и намажьте его на блин.<br>
    3. Выложите фрукты и заверните в рулет.<br>
    4. Поставьте на 5 минут в холодильник, а затем нарежьте блины на роллы.`},

    
    {id: 5,
    title:"Чечевичный суп", 
    meal:'dinner', 
    calories: 296, 
    ingredients: [
        {name:'Помидор', quantity: 80, measure:'г'},
        {name:'Чечевица (в готовом виде)', quantity: 80, measure:'г'},
        {name:'Морковь', quantity: 80, measure:'г'},
        {name:'Лук', quantity: 80, measure:'г'},
        {name:'Чеснок', quantity: 5, measure:'г'},], 
    recipt: `
    1. Обжариваем на оливковом масле чеснок на медленном огне.<br>
    2. Затем к нему добавляем лук, режем не мелко, обжариваем минуту.<br>
    3. Натираем на терке морковь и обжариваем 1 минуту.<br>
    4. Затем выкладываем помидоры, порезанные на кубики.<br>
    5. В это же время наливаем в кастрюлю 1 л воды, когда закипит - высыпаем   чечевицу, варим 15 минут.<br>
    6. Спустя время выкладываем нашу заготовку и еще варим 5 минут.<br>
    7. Снимаем с огня. Можно взбить в блендре и будет крем-суп.`},
    
    {id: 6,
    title:"Котлеты куриные с броколли", 
    meal:'lunch', 
    calories: 353, 
    ingredients: [
        {name:'Гречка', quantity: 30, measure:'г'},
        {name:'Куриное филе', quantity: 100, measure:'г'},
        {name:'Брокколи', quantity: 20, measure:'г'},
        {name:'Большое яйцо', quantity: 1, measure:'штук(а)'},], 
    recipt: `
    1. Смешиваем все ингредиенты в блендере до однородной массы.<br>
    2. На хорошо разогретой антипригарной сковороде формируем котлетки и обжариваем с двух сторон.<br>
    3. Посыпаем специями и по желанию можно добавить сметану или творожный сыр.`},
    
    {id: 7,
    title:"Яйца в лаваше", 
    meal:'breakfast', 
    calories: 276, 
    ingredients: [
        {name:'Помидор', quantity: 50, measure:'г'},
        {name:'Лаваш', quantity: 40, measure:'г'},
        {name:'Большое яйцо', quantity: 2, measure:'штук(а)'},
        {name:'Зелень', quantity: 0, measure:'по вкусу'},], 
    recipt: `
    1. Яйца взбить в тарелке, посолить, вылить на сковороду, накрыть сверху лавашом, накрыть крышкой и готовить на медленном огне 3-5 мин.<br>
    2. Переложить на тарелку, выложить порезанный помидор и зелень, свернуть рулетом.`},
    
    {id: 8,
    title:"Суп лапша с курицей", 
    meal:'lunch', 
    calories: 402, 
    ingredients: [
        {name:'Картошка', quantity: 50, measure:'г'},
        {name:'Куриное филе', quantity: 100, measure:'г'},
        {name:'Лапша', quantity: 30, measure:'г'},
        {name:'Морковь', quantity: 30, measure:'г'},
        {name:'Цельнозерновой хлеб (30 г.)', quantity: 1, measure:'ломтик(а)'},], 
    recipt: `
    1. Положите курицу в кастрюлю, налейте воду в кастрюлю так, чтобы она покрыла курицу на 1.5-2 пальца. Доведите курицу до кипения.<br>
    2. После закипания нужно снизить огонь, снять пену, добавить нарезанные овощи, лапшу.<br>
    3. В процессе варки вода будет выкипать, и потому восполнить нужное вам количество жидкости можно, добавив горячей воды столько, сколько вам надо. Поперчите и посолите бульон по вкусу.<br>
    4. Варить до готовности и подавать с хлебом.`},
    
    {id: 9,
    title:"Пицца на творожном тесте", 
    meal:'dinner', 
    calories: 457, 
    ingredients: [
        {name:'Творог', quantity: 100, measure:'г'},
        {name:'Куриное филе', quantity: 60, measure:'г'},
        {name:'Сыр лёгкий 16%', quantity: 30, measure:'г'},
        {name:'Сладкий перец', quantity: 30, measure:'г'},
        {name:'Рисовая мука', quantity: 25, measure:'г'},
        {name:'Большое яйцо', quantity: 1, measure:'штук(а)'},], 
    recipt: `
    1. Отвариваем куриную грудку.
    2. Яйцо смешиваем с творогом.
    3. В полученную смесь добавляем муку и перемешиваем до однородной массы.<br>
    4. Выкладываем на противень в виде кружочка и отправляем в разогретую духовку на 20 минут до румяной корочки.<br>
    5. Достаем из духовки и добавляем начинку (перец, грудку, сыр). Отправляем в духовку на 15 минут, чтобы сыр хорошо расплавился.`},
    
    {id: 10,
    title:"Овсяноблин с творожным сыром и клубникой", 
    meal:'breakfast', 
    calories: 439, 
    ingredients: [
        {name:'Творожный сыр', quantity: 60, measure:'г'},
        {name:'Овсяные хлопья долгой варки', quantity: 50, measure:'г'},
        {name:'Клубника', quantity: 50, measure:'г'},
        {name:'Молоко 1,5%', quantity: 1.5, measure:'ст.л'},
        {name:'Большое яйцо', quantity: 1, measure:'штук(а)'},
        {name:'Подсластитель', quantity: 0, measure:'по вкусу'},], 
    recipt: `
    1. Смешиваем все ингредиенты для теста.<br>
    2. Готовим блинчик на хорошо разогретои антипригарнои сковороде, под закрытой крышкой, примерно по 2-3 минутки с каждои стороны.<br>
    3. Выкладываем начинку: нарезанную клубнику и творожный сыр. Сворачиваем блинчик пополам.`},
    
    {id: 11,
    title:"Кесадильи с курицей", 
    meal:'lunch', 
    calories: 261, 
    ingredients: [
        {name:'Куриное филе', quantity: 60, measure:'г'},
        {name:'Шампиньоны', quantity: 50, measure:'г'},
        {name:'Лаваш', quantity: 40, measure:'г'},
        {name:'Помидор', quantity: 24, measure:'г'},
        {name:'Сыр лёгкий 16%', quantity: 14, measure:'г'},], 
    recipt: `
    1. Куриное филе и грибы очень мелко нарезаем. Обжариваем их на сковороде.<br>
    2. Помидоры и сыр нарезаем. На лепешку выкладываем сыр, помидоры, курицу и грибы, сворачиваем пополам.<br>
    3. Обжариваем на сухой сковороде, по 2 минуты с каждои стороны и разрезаем на 2 части.`},
    
    {id: 12,
    title:"Спагетти с томатной пастой", 
    meal:'dinner', 
    calories: 427, 
    ingredients: [
        {name:'Помидор', quantity: 100, measure:'г'},
        {name:'Шпинат', quantity: 100, measure:'г'},
        {name:'Лимская фасоль (в готовом виде)', quantity: 100, measure:'г'},
        {name:'Цельнозерновые макароны', quantity: 60, measure:'г'},
        {name:'Смешанные травы', quantity: 0, measure:'по вкусу'},], 
    recipt: `
    1. Сварите спагетти согласно инструкции на упаковке.<br>
    2. Обжарьте фасоль, шпинат, травы на оливковом масле. Добавьте к ингредиентам томаты. Посолите и поперчите по вкусу.<br>
    3. Соедините спагетти с ингредиентами со сковороды. Блюдо можете украсить измельченной петрушкой.`},
    
    {id: 13,
    title:"Гранола с йогуртом", 
    meal:'breakfast', 
    calories: 435, 
    ingredients: [
        {name:'Греческий йогурт 2%', quantity: 280, measure:'г'},
        {name:'Любимые фрукты или ягоды', quantity: 100, measure:'г'},
        {name:'Овсяные хлопья', quantity: 30, measure:'г'},
        {name:'Мёд', quantity: 10, measure:'г'},
        {name:'Орехи', quantity: 8, measure:'г'},], 
    recipt: `
    1. На сковородку выкладываем овсянку, мёд и орехи, все хорошо перемешиваем.<br>
    2. Готовим гранолу  на  небольшом  огне, до золотистого цвета, примерно 5 минут. Постоянно помешивая её.<br>
    3. Выкладваем гранолу на тарелку и даем ей немного остыть. После остывания она станет очень хрустящеи.<br>
    4. Подаем гранолу с натуральным  йогуртом и нарезанными фруктами.`},
    
    {id: 14,
    title:"Греческий салат", 
    meal:'lunch', 
    calories: 498, 
    ingredients: [
        {name:'Томаты черри', quantity: 150, measure:'г'},
        {name:'Листья салата', quantity: 100, measure:'г'},
        {name:'Сыр фета', quantity: 80, measure:'г'},
        {name:'Нут (варёный или консервированный)', quantity: 60, measure:'г'},
        {name:'Огурец', quantity: 50, measure:'г'},
        {name:'Зелёные оливки', quantity: 40, measure:'г'},
        {name:'Бальзамический уксус', quantity: 2, measure:'ст.л'},], 
    recipt: `
    1. Обжарьте нут на сковороде (4-5 минут).<br>
    2. Нарежьте огурец и листья салата. Добавьте к ним оливки, томаты черри и жареный нут.<br>
    3. Полейте салат бальзамическим уксусом и украсьте сыром фета.`},
    
    {id: 15,
    title:"Тефтели в томате с гарниром", 
    meal:'dinner', 
    calories: 282, 
    ingredients: [
        {name:'Куриное филе', quantity: 50, measure:'г'},
        {name:'Морковь', quantity: 25, measure:'г'},
        {name:'Лук', quantity: 25, measure:'г'},
        {name:'Цельнозерновые макароны', quantity: 25, measure:'г'},
        {name:'Томатная паста', quantity: 10, measure:'г'},
        {name:'Мука', quantity: 0.5, measure:'ст.л'},], 
    recipt: `
    1. Филе перемолоть в фарш, посолить, поперчить, добавить яйцо и мелко порезанный лук. Скатать шарики среднего размера. Слегка обжарить на масле, кинуть туда поджариваться натертую на мелкой тёрке морковку.<br>
    2. В отдельном стакане смешать воду с томатным соусом и мукой, слегка подсолить.<br>
    3. Вылить подливу к тефтелям с морковью и тушить на медленном огне до готовности.<br>
    4. Макароны сварить в подсоленной воде.<br>
    5. Смешать тефтели с гарниром.`},
    
    {id: 16,
    title:"Спред из тунца", 
    meal:'breakfast', 
    calories: 273, 
    ingredients: [
        {name:'Тунец консервиро­ванный', quantity: 60, measure:'г'},
        {name:'Нут (варёный или консервированный)', quantity: 50, measure:'г'},
        {name:'Лук', quantity: 30, measure:'г'},
        {name:'Цельнозерновой хлеб (30 г.)', quantity: 2, measure:'ломтик(а)'},], 
    recipt: `
    1. Положите тунец (вместе с заливочной жидкостью из консервов) в блендер, добавьте к тунцу нут, соль по вкусу и измельчите до получения однородной массы.<br>
    2. Затем намажьте получившийся спред на хлеб из цельнозерновой муки.<br>
    3. В конце, посыпьте бутерброд нарезанным луком`},
    
    {id: 17,
    title:"Крошка-картошка с курицей и грибами", 
    meal:'lunch', 
    calories: 322, 
    ingredients: [
        {name:'Средняя картошка', quantity: 1, measure:'штук(а)'},
        {name:'Куриное филе', quantity: 50, measure:'г'},
        {name:'Шампиньоны', quantity: 80, measure:'г'},
        {name:'Греческий йогурт 2%', quantity: 30, measure:'г'},
        {name:'Сыр лёгкий 16%', quantity: 15, measure:'г'},], 
    recipt: `
    1. Картофель солим и заворачиваем в фольгу. Отправляем выпекаться в духовку на 40-50 минут при 180С.<br>
    2. Для начинки курицу и грибы нарезаем и обжариваем на сковороде. Для соуса смешиваем йогурт, чеснок, соль и специи.<br>
    3. Готовый картофель разворачиваем и из фольги формируем лодочку. Разрезаем его пополам, но не дорезаем до конца. Вынимаем из картошки серединку и превращаем вилкои её в пюре.<br>
    4. Для начинки смешиваем курицу, картофельное пюре, соус и шампиньоны. Сыр натираем на мелкой терке. Выкладываем начинку в картошку и сверху посыпаем тертым сыром.<br>
    5. Отправляем выпекаться в духовку на 10- 15 минут, при 180С`},
    
    {id: 18,
    title:"Курица в азиатском стиле", 
    meal:'dinner', 
    calories: 445, 
    ingredients: [
        {name:'Рис', quantity: 40, measure:'г'},
        {name:'Куриное филе', quantity: 130, measure:'г'},
        {name:'Карри', quantity: 1, measure:'ч.л'},
        {name:'Соевый соус', quantity: 3, measure:'ст.л'},
        {name:'Мёд', quantity: 0.5, measure:'ст.л'},
        {name:'Чеснок', quantity: 0, measure:'по вкусу'},], 
    recipt: `
    1. Для соуса разведи мёд в горячей воде 50 мл, добавь 3 ст.л соевого соуса, затем перец, чеснок, приправу карри.<br>
    2. Куриное филе отбей задней стороной нож а, порежь на кусочки, положи их в соус на 20 минут.<br>
    3. Возьми рукав для запекания и сложи туда кусочки, полей сверху нашим соусом. Закрой рукав с двух сторон и отправь в духовку на 30 минут на 180 градусов.<br>
    4. Начни готовить рис: залей 40 гр риса 200 мл воды, поставь на огонь, после выкипания воды сними с огня.<br>
    5. Выложи курочку сверху на рис, полей нашим соусом, сверху положи порезанный зелёный лук и кинзу.`},
    
    {id: 19,
    title:"Шакшука", 
    meal:'breakfast', 
    calories: 316, 
    ingredients: [
        {name:'Помидор', quantity: 50, measure:'г'},
        {name:'Большое яйцо', quantity: 2, measure:'штук(а)'},
        {name:'Сладкий перец', quantity: 50, measure:'г'},
        {name:'Лук', quantity: 40, measure:'г'},
        {name:'Цельнозерновой хлеб (30 г.)', quantity: 1, measure:'ломтик(а)'},], 
    recipt: `
    1. Лук нарезать небольшими кусочками, чеснок натереть на терке. Обжарить на масле луки и чеснок около 5 минут.<br>
    2. Мелко порезать помидоры и перец. Добавить на сковороду к луку и чесноку помидоры и перец. Тушить 10 минут. Соль и специи по вкусу.<br>
    3. Сделать 2 углубления в смеси овощей и разбить туда яйца. Можно еще раз посолить и готовить, пока белок не схватится.<br>
    4. По окончании готовки посыпать яичницу зеленью.`},
    
    {id: 20,
    title:"Курино-овощные котлеты", 
    meal:'lunch', 
    calories: 459, 
    ingredients: [
        {name:'Цукини или кабачок', quantity: 200, measure:'г'},
        {name:'Куриное филе', quantity: 100, measure:'г'},
        {name:'Морковь', quantity: 50, measure:'г'},
        {name:'Лук', quantity: 40, measure:'г'},
        {name:'Мука', quantity: 40, measure:'г'},
        {name:'Большое яйцо', quantity: 1, measure:'штук(а)'},], 
    recipt: `
    1. Отварить фасоль в подсоленной воде пару минут (она должна оставаться немного твердой) и слить воду.<br>
    2. Куриное филе промыть, обсушить и нарезать полосками.<br>
    3. Обжарить филе в горячей сковороде на масле до готовности.<br>
    4. Перец почистить и нарезать полосками. В сковороду от мяса добавить еще масла и обжарить лук и перец, добавить фасоль и жарить минут 5 на небольшом огне до готовности овощей. Добавить курицу к овощам.<br>
    5. Чеснок мелко нарезать, смешать с соевым соусом и добавить в сковороду. Прогреть ещё 1-2 минуты.`},
    
    {id: 21,
    title:"Запеченная курица с картофелем и овощами", 
    meal:'dinner', 
    calories: 400, 
    ingredients: [
        {name:'Картошка', quantity: 200, measure:'г'},
        {name:'Куриное филе', quantity: 120, measure:'г'},
        {name:'Сладкий перец', quantity: 100, measure:'г'},
        {name:'Морковь', quantity: 50, measure:'г'},], 
    recipt: `
    1. Порезать грудку, картофель дольками, перец соломкой и кружочками морковь.<br>
    2. Смешать со специями, посолить и поперчить по вкусу, запекать в духовке.`},

];

export { recipes };