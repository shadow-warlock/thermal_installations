let books = {
    " 1": "ОБЩИЕ СВЕДЕНИЯ ИЗ ТЕПЛОТЕХНИКИ",
    " 2": "ПРАВИЛА ТЕХНИЧЕСКОЙ ЭКСПЛУАТАЦИИ ТЕПЛОВЫХ ЭНЕРГОУСТАНОВОК",
    " 2.2": "Требования к персоналу и его подготовка",
    " 2.3": "Организация эксплуатации тепловых энергоустановок",
    " 2.3.1": "Задачи персонала",
    " 2.3.2": "Приёмка и допуск в эксплуатацию тепловых энергоустановок",
    " 2.3.3": "Технический контроль за состоянием ТЭУ",
    " 2.3.4": "Контроль за эффективностью работы ТЭУ (режимно-наладочные работы)",
    " 2.3.5": "Техническое обслуживание, ремонт и консервация ТЭУ",
    " 2.3.6": "Метрологическое обеспечение",
    " 2.3.7": "Метрологическое обеспечение",
    " 2.3.8": "Обеспечение безопасной эксплуатации",
    " 2.3.9": "Соблюдение природоохранных требований",
    " 2.3.10": "Пожарная безопасность",
    " 2.4": "Территория, производственные здания и сооружения для размещения ТЭУ",
    " 2.5": "Требования к устройству и эксплуатации ТЭУ",
    " 3": "ОСНОВНЫЕ СВЕДЕНИЯ О КОТЕЛЬНЫХ",
    " 4": "ТРЕБОВАНИЯ ПРАВИЛ ТЕХНИЧЕСКОЙ ЭКСПЛУАТАЦИИ ТЭУ",
    " 4.2": "Вспомогательное оборудование котельных установок",
    " 4.3": "Трубопроводы и арматура",
    " 4.4": "Паровые и водогрейные котельные установки",
    " 4.5": "Тепловые насосы",
    " 4.6": "Тепловые сети",
    " 5": "ТЕПЛОПОТРЕБЛЯЮЩИЕ ЭНЕРГОУСТАНОВКИ (ТПУ)",
    " 5.1": "Общие требования",
    " 5.2": "Тепловые пункты",
    " 5.3": "Системы отопления, вентиляции, кондиционирования и ГВС.",
    " 5.3.1": "Системы отопления.",
    " 5.3.2": "Агрегаты систем воздушного отопления, вентиляции, кондиционирования",
    " 5.3.3": "Системы горячего водоснабжения",
    " 6": "ПОДГОТОВКА К ОТОПИТЕЛЬНОМУ ПЕРИОДУ",
    " 7": "ТЕХНОЛОГИЧЕСКИЕ УСТАНОВКИ",
    " 7.2": "Выпарные установки",
    " 7.3": "Установки для термовлажностной обработки железобетонных изделий",
    " 7.4": "Паровые молоты",
    " 8": "ВОДОПОДГОТОВКА И ВОДНО-ХИМИЧЕСКИЙ РЕЖИМ ТЭУ И СЕТЕЙ",
    " 9": "ТРЕБОВАНИЯ К МЕТАЛЛУ И ДРУГИМ КОНСТРУКЦИОННЫМ МАТЕРИАЛАМ, КОНТРОЛЬ ЗА ИХ СОСТОЯНИЕМ",
    " 10": "ЭНЕРГЕТИЧЕСКИЕ МАСЛА",
    " 11": "ОПЕРАТИВНО-ДИСПЕТЧЕРСКОЕ УПРАВЛЕНИЕ",
    " 11.2": "Управление режимом работы",
    " 11.3": "Управление оборудованием",
    " 11.4": "Предупреждение и ликвидация технологических нарушений",
    " 11.5": "Оперативно-диспетчерский персонал",
    " 11.6": "Переключение в тепловых схемах котельных и тепловых сетей",
    " 12": "ОРГАНИЗАЦИОННЫЕ МЕРОПРИЯТИЯ, ОБЕСПЕЧИВАЮЩИЕ БЕЗОПАСНОСТЬ РАБОТ ПРИ ЭКСПЛУАТАЦИИ ТЭУ",
    " 13": "ОБЕСПЕЧЕНИЕ БЕЗОПАСНОЙ ЭКСПЛУАТАЦИИ ТЭУ"
};
let page = findGetParameter('page') ?? Object.keys(books)[0].substr(1);
let contents = "<ul>";
for (let key in books){
    contents += '<li class="clearfix"><a href="?page='+key.substr(1)+'">'+key+'. '+books[key]+'</a></li>'
}
contents += "</ul>"

function drawContents(parentClass){
    document.getElementsByClassName(parentClass).item(0).innerHTML = contents;
}

async function drawContent(parentClass){
    // let resp = await fetch('content/' + page + '.html');
    document.getElementsByClassName(parentClass).item(0).innerHTML = content[page];
}

function findGetParameter(parameterName) {
    let result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}
