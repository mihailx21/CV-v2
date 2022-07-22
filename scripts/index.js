// main info 2 languages
let mainInfo_en =  {
    firstname: 'Myhailo',
    lastdName: 'Khrystych',
    age: 26,
    aboutMe:'Looking for a Front-end developer job at the Trainee or Junior level for development and growth in this direction'
};
let mainInfo_ukr = {
    firstname: 'Михайло',
    lastdName: 'Христич',
    age: 26,
    aboutMe: 'Шукаю роботу Front-end розробника на рівні Trainee або Junior для розвитку та зростання в цьому напрямку'
};
// skills 2 languages
let skills = {
    hardSkills: ['HTML', 'CSS', 'JavaScript (ES5/ES6)','HTML-in-JS' ,'CSS-in-JS', 'React.JS(Basic)/Redux', 'Git', 'Figma'],
    softSkills_en: ['Creativity', 'Communication', 'Problem-solving', 'Adaptability', 'Teamwork'],
    softSkills_ukr:['Креативність', 'Комунікативність', 'Рішення проблем', 'Адаптивність', 'Командна робота']
};
// projects list on EN
let projectsList = {
    first:{
        link:'khristich-mihail.netlify.app',
        usedTechology:['HTML','CSS', 'JS'],
        about:'My first cv project',
        about_ukr:'Перша версія мого резюме'
    },
    second:{
        link:'lucent-sable-94981b.netlify.app',
        usedTechology:['HTML', 'CSS'],
        about:'Responsive website for displaying blog with news',
        about_ukr:'Адаптивний сайт для ведення блогу новин'
    },
    third:{
        link:'github.com/mihailx21/darts-js',
        usedTechology:['HTML', 'JS'],
        about:'Funny target clicker with scores and running target',
        about_ukr:'Прикольний клікер по мішені з підсумком балів та "бігаючою" ціллю'
    },
    fourth:{
        link:'github.com/mihailx21/test-task-incode',
        usedTechology:['HTML', 'CSS', 'JS', 'React.JS'],
        about:'One of the test tasks giving me by companys to test my React.JS skills',
        about_ukr:'Одне з тестових завдань виданих мені для оцінки моїх здібностей у React.JS'
    }
}
// work experience 2 languages
let workExperience_en = {
    lastWork:{
        companyName:'Dataentry',
        position:'Dataentry',
        workTime:['November 2019','September 2021'],
        duties: [
            'Determining the document type',
            'Determination of the main participants of the document and their data',
            'Enter information from the document into the database',
            'Daily determination of your effectiveness'
        ]
    },
    secondWork: {
        companyName:'Yug-Contract',
        position:'Service manager',
        workTime:['November 2018', 'July 2019'],
        duties: [
            'Visual inspection of the products to determine the warranty case or non-warranty',
            'Delivery of warranty products to the certified service center',
            'Communication with the client about a non-warranty case and the possibility of paid repair',
            'Tracking the status of warranty products in the service center',
            'Communication with the service center regarding the overdue warranty period for repairs',
            'Delivery of warranty products from service centers to the office',
            'Issuance of products according to the accounting database',
            'Transfer of products to the manager for further shipment to the client',
            'Registration in the database of warranty products of one\'s own brand',
            'Sending own brand warranty products to a certified service center in Kiev',
            'Issue of own brand warranty products on an accounting basis and transfer it to the manager for further shipment to the client'
        ]
    },
    firstWork:{
        companyName:'NTU \"KhPI\"',
        position:'Computer operator',
        workTime:['April 2018', 'December 2018'],
        duties: [
            'Searching information',
            'Data processing',
            'Processing and design of scientific articles, patents, monographs'
        ]
    }
}
let workExperience_ukr = {
    lastWork:{
        companyName:'Dataentry',
        position:'Оператор набору',
        workTime:['Листопад 2019','Вересень 2021'],
        duties: [
            'Визначення типу документа',
            'Визначення основних положень документа та даних',
            'Внесення інформації з документа в базу даних',
            'Щоденний підрахунок своєї ефективності'
        ]
    },
    secondWork: {
        companyName:'ЮГ-Контракт',
        position:'Сервіс менеджер',
        workTime:['Листопад 2018', 'Липень 2019'],
        duties: [
            'Візуальний огляд продукції для визначення гарантійного або негарантійного випадку',
            'Доставка гарантійної продукції в сертифікований сервісний центр',
            'Спілкування з клієнтом про негарантійний випадок та можливість платного ремонту',
            'Відстеження стану гарантійних товарів в сервісному центрі',
            'Зв\'язок з сервісним центром щодо прострочення гарантійного терміну ремонту та сроків ремонту',
            'Доставка гарантійної продукції з сервісних центрів в офіс',
            'Видача продукції згідно з обліковою базою',
            'Передача продукції менеджеру для подальшої відправки клієнту',
            'Реєстрація в базу гарантійної продукції власної марки',
            'Відправка гарантійної продукції власного бренду в сертифікований сервісний центр в Києві',
            'Оформлення гарантійної продукції власної марки під бухгалтерський облік та передача її менеджеру для подальшої відправки клієнту'
        ]
    },
    firstWork:{
        companyName:'НТУ \"ХПІ\"',
        position:'Оператор ПК',
        workTime:['Квітень 2018', 'Грудень 2018'],
        duties: [
            'Пошук інформації',
            'Обробка інформації',
            'Опрацювання та оформлення наукових статей, патентів, монографій'
        ]
    }
}
// education 2 languages
let education_en = {
    place: 'NTU \"KhPI\"',
    degree: 'Master\'s degree in artificial intelligence systems',
    time: 'September 2013 - June 2018',
    country: 'Ukraine'
}
let education_ukr = {
    place: 'НТУ \"ХПІ\"',
    degree: 'Ступінь магістра систем штучного інтелекту',
    time: 'Вересень 2013 - Червень 2018',
    country: 'Україна'
}




function skillsList(groupNamrOfSkills, skills){
    let result = `<h2> ${groupNamrOfSkills}: </h2>`;
    for(let skill of skills){
        result += `<li> ${skill} </li>`;
    }
    return result;
}

function arraysLike(arr){
    let result = '[';
    for(let el of arr)
        result += `${el} ` 
    result.slice(-2)
    console.log(result);
    result += ']'
    return result
}

function projectList(list, name, flag){
    let result = `<h2> ${name} </h2><ol>`
    for(let number in list){
        let project = list[number]
        let technologys = project.usedTechology.join(", ")
        let projectAbout = flag ?  project.about: project.about_ukr
        result += `<li>
            <div class="link-and-technology-style">
                <a href = ${'https://' + project.link}>${project.link}</a>
                <span>[${technologys}]</span>
            </div>
            <div class="text-about-projects">
                <i>${projectAbout}</i>
            </div>
        </li>`
    }
    result += '</ol>'
    return result
    
}

function workList_en(node){
    for(let key in workExperience_en){
        let obj = workExperience_en[key] 

        // company names
        let companyName = document.createElement('h3')
        companyName.innerHTML = `${obj.companyName} <span class='work-position'>${obj.position}</span>`;
        node.appendChild(companyName);

        // work time for each work
        let workingTime = document.createElement('div');
        workingTime.innerText = obj.workTime[0] + ' | ' + obj.workTime[1];
        node.appendChild(workingTime);
        workingTime.classList.add('data-styling')

        // duties list
        let dutyList = document.createElement('ul');
        node.appendChild(dutyList);
        for(let duty of obj.duties){
            let pos = document.createElement('li');
            pos.innerText = duty;
            dutyList.appendChild(pos)
        }
    }
}

function workList_ukr(node){
    for(let key in workExperience_ukr){
        let obj = workExperience_ukr[key] 

        // company names
        let companyName = document.createElement('h3')
        companyName.innerHTML = `${obj.companyName} <span class='work-position'>${obj.position}</span>`;
        node.appendChild(companyName);

        // work time for each work
        let workingTime = document.createElement('div');
        workingTime.innerText = obj.workTime[0] + ' | ' + obj.workTime[1];
        node.appendChild(workingTime);
        workingTime.classList.add('data-styling')

        // duties list
        let dutyList = document.createElement('ul');
        node.appendChild(dutyList);
        for(let duty of obj.duties){
            let pos = document.createElement('li');
            pos.innerText = duty;
            dutyList.appendChild(pos)
        }
    }
}
function deleteNodesChilds(node){
    while (node.firstChild) {
        node.removeChild(node.firstChild);
      }
}
function education(node, data){
    let nameSection = data.country === "Ukraine" ? "Education":"Освіта";
    node.innerHTML = `
        <h2>${nameSection}</h2>
        <h3>${data.place}</h3>
        <div>${data.degree}</div>
        <div class="time-place-education">
            <div class="data-styling">${data.time}</div>
            <div>${data.country}</div>
        </div> `
}


// drawings =)
//language toogle
let languageToogle = document.getElementById('language-toogle');
let flagImage = document.getElementById('flag')
let labelLang = document.getElementById('language-label')

// getting node of my name
let myFullName = document.getElementById('my-name');
myFullName.innerText = `${mainInfo_en.lastdName} ${mainInfo_en.firstname}`;

//getting node of about me
let aboutMe = document.getElementById('short-about-me');
aboutMe.innerText = `${mainInfo_en.aboutMe}`;

//hard skills
let hardSkills = document.getElementById('my-hard-skills');
let hardSkillsText = 'Hard Skills';
hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);

//soft skills
let softSkills = document.getElementById('my-soft-skills');
softSkills.innerHTML = skillsList('Soft Skills', skills.softSkills_en);

//projects
let myProjects = document.getElementById('my-projects');
myProjects.innerHTML = projectList(projectsList, 'My Pet Projects', 1);

//work experience
let categoryName = document.createElement('h2');
let nodeCategoryName = document.getElementById('category-name-work');
categoryName.innerText = 'Work Experience';
nodeCategoryName.appendChild(categoryName);

let myWork = document.getElementById('my-work-exp');
workList_en(myWork)

// my education
let myEducation = document.getElementById('education')
education(myEducation, education_en)

// contact button on mobile version
let contactsButtonOnMobile = document.createElement('button');
let mainBody = document.getElementsByClassName('main')[0]

mainBody.appendChild(contactsButtonOnMobile)
contactsButtonOnMobile.innerHTML = '<i class="fa-solid fa-address-card"></i>';
contactsButtonOnMobile.classList.add('contacts-button')
contactsButtonOnMobile.style.width = '50px'
contactsButtonOnMobile.style.height = '50px'
contactsButtonOnMobile.style.fontSize = '30px'
contactsButtonOnMobile.style.position = 'fixed';
contactsButtonOnMobile.style.padding = '5px'
contactsButtonOnMobile.style.backgroundColor = '#fff'
contactsButtonOnMobile.style.border = '1px solid grey'
contactsButtonOnMobile.style.borderRadius = '6px'
contactsButtonOnMobile.style.top = '70px';
contactsButtonOnMobile.style.right = '20px';
contactsButtonOnMobile.style.boxShadow = '2px 2px 5px black'


contactsButtonOnMobile.onclick = (event)=>{
    event.stopPropagation();
    let asideInfo = document.getElementsByTagName('aside')[0];
    asideInfo.style.zIndex = 1;
    mainBody.classList.add('bluring');
    asideInfo.style.left = '10px';
    contactsButtonOnMobile.style.display = 'none';
    
    asideInfo.onclick = ()=>{
        asideInfo.style.left = '-400px';
        contactsButtonOnMobile.style.display = 'block';
        mainBody.classList.remove('bluring');
    }
    mainBody.onclick = ()=>{
        asideInfo.style.left = '-400px';
        contactsButtonOnMobile.style.display = 'block';
        mainBody.classList.remove('bluring');
    }
}


// language changer 
languageToogle.onchange = ()=>{
    
    //english
    if(languageToogle.value === 'en'){
        labelLang.innerText = 'Language: ';
        flagImage.src = 'src/flags/us.svg'
        myFullName.innerText = `${mainInfo_en.lastdName} ${mainInfo_en.firstname}`;
        aboutMe.innerText = `${mainInfo_en.aboutMe}`;
        hardSkillsText = 'Hard Skills';
        hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);
        softSkills.innerHTML = skillsList('Soft Skills', skills.softSkills_en);
        myProjects.innerHTML = projectList(projectsList, 'My Pet Projects', 1);
        categoryName.innerText = 'Work Experience';
        deleteNodesChilds(myWork);
        workList_en(myWork)
        education(myEducation, education_en)

    }
    //ukraine
    else if(languageToogle.value === 'ua'){
        labelLang.innerText = 'Мова: ';
        flagImage.src = 'src/flags/ua.svg'
        myFullName.innerText = `${mainInfo_ukr.lastdName} ${mainInfo_ukr.firstname}`;
        aboutMe.innerText = `${mainInfo_ukr.aboutMe}`;
        hardSkillsText = 'Жорсткі навички';
        hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);
        softSkills.innerHTML = skillsList('М\'які навички', skills.softSkills_ukr);
        myProjects.innerHTML = projectList(projectsList, 'Мої домашні проекти', 0);
        categoryName.innerText = 'Робочий досвід';
        deleteNodesChilds(myWork);
        workList_ukr(myWork);
        education(myEducation, education_ukr)
    }
};

