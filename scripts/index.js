let mainInfo_en =  {
    firstname: 'Myhailo',
    lastdName: 'Khrystych',
    age: 26,
    aboutMe:'Looking for a Front-end developer job at the Trainee or Junior level for development and growth in this direction'
};
let skills = {
    hardSkills: ['HTML', 'CSS', 'JavaScript (ES5/ES6)', 'CSS-in-JS', 'React.JS(Basic)', 'Git', 'Figma'],
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

