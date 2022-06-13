let mainInfo_en =  {
    firstname: 'Myhailo',
    lastdName: 'Khrystych',
    age: 26,
    aboutMe:'Looking for a Front-end developer job at the Trainee or Junior level for development and growth in this direction'
};

let projectsList = {
    first:{
        links:'https://khristich-mihail.netlify.app',
        usedTechology:['HTML','CSS', 'JS(for adapting for mobile device)'],
        about:'My first cv project'
    },
    second:{
        links:'https://github.com/mihailx21/darts-js',
        usedTechology:['HTML', 'JS'],
        about:'Funny target clicker with scores and running target'
    },
    third:{
        links:'https://github.com/mihailx21/test-task-incode',
        usedTechology:['HTML', 'CSS', 'JS', 'React.JS'],
        about:'One of the test tasks giving me by companys to test my React.JS skills'
    },
    fourth:{
        links:'https://github.com/mihailx21/test-task-itop1000',
        usedTechology:['HTML', 'CSS', 'TypeScript', 'Angular'],
        about:'One of the test tasks giving me by companys to test my Angular skills' 
    }
}

let workExperience_en ={
    lastWork:{
        companyName:'Dataentry',
        position:'Dataentry',
        workTime:['November 2019','September 2021'],
        duties: ['Determining the document type',
                'Determination of the main participants of the document and their data',
                'Enter information from the document into the database',
                'Daily determination of your effectiveness']
    },
    secondWork: {
        companyName:'',
        position:'',
        workTime:'',
        duties: []
    },
    firstWork:{
        companyName:'',
        position:'',
        workTime:'',
        duties: []
    }
}
let skills = {
    hardSkills: ['HTML', 'CSS', 'JavaScript (ES5/ES6)','HTML-in-JS' ,'CSS-in-JS', 'React.JS(Basic)', 'Git', 'Figma'],
    softSkills_en: ['Creativity', 'Communication', 'Problem-solving', 'Adaptability', 'Teamwork'],
    softSkills_ukr:['Креативність', 'Комунікативність', 'Рішення проблем', 'Адаптивність', 'Командна робота']
};
let mainInfo_ukr = {
    firstname: 'Михайло',
    lastdName: 'Христич',
    age: 26,
    aboutMe: 'Шукаю роботу Front-end розробника на рівні Trainee або Junior для розвитку та зростання в цьому напрямку'
};

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

function projectList(list){
    let result = '<h2> My pet projects</h2>';
    result += '<ul>' 
    var {links, usedTechology, about} = list.first;
    newLink = links.padEnd(50,'.')
    result += `<li><a href = "${links}">${newLink}</a> ${arraysLike(usedTechology)} <br> ${about}</li>`
    var {links, usedTechology, about} = list.second;
    result += `<li><a href = "${links}">${links}</a> ${usedTechology} <br> ${about}</li>`
    var {links, usedTechology, about} = list.third;
    result += `<li><a href = "${links}">${links}</a> ${usedTechology} <br> ${about}</li>`
    var {links, usedTechology, about} = list.fourth;
    result += `<li><a href = "${links}">${links}</a> ${usedTechology} <br> ${about}</li>`
        
    result += '</ul>'
    return result
}


//language toogle
let languageToogle = document.getElementById('language-toogle');
let flagImage = document.getElementById('flag')
console.log('Default language: ', languageToogle.value);


// getting node of my name
let myFullName = document.getElementById('my-name');
myFullName.innerText = `${mainInfo_en.lastdName} ${mainInfo_en.firstname}`;

//getting node of about me
let aboutMe = document.getElementById('short-about-me');
aboutMe.innerText = `${mainInfo_en.aboutMe}`;

let hardSkills = document.getElementById('my-hard-skills');
let hardSkillsText = 'Hard Skills';
hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);

let softSkills = document.getElementById('my-soft-skills');
softSkills.innerHTML = skillsList('Soft Skills', skills.softSkills_en);

let myProjects = document.getElementById('my-projects')
myProjects.innerHTML = projectList(projectsList)

languageToogle.onchange = ()=>{
    console.log('Language change to: ', languageToogle.value);
    
    if(languageToogle.value === 'en'){
        flagImage.src = 'src/flags/us.svg'
        myFullName.innerText = `${mainInfo_en.lastdName} ${mainInfo_en.firstname}`;
        aboutMe.innerText = `${mainInfo_en.aboutMe}`;
        hardSkillsText = 'Hard Skills';
        hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);
        softSkills.innerHTML = skillsList('Soft Skills', skills.softSkills_en)

    }
    else if(languageToogle.value === 'ua'){
        flagImage.src = 'src/flags/ua.svg'
        myFullName.innerText = `${mainInfo_ukr.lastdName} ${mainInfo_ukr.firstname}`;
        aboutMe.innerText = `${mainInfo_ukr.aboutMe}`;
        hardSkillsText = '\"Жорсткі\" навички';
        hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);
        softSkills.innerHTML = skillsList('М\'які навички', skills.softSkills_ukr)
    }
};

