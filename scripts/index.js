let mainInfo_en =  {
    firstname: 'Myhailo',
    lastdName: 'Khrystych',
    age: 26,
    aboutMe:'Looking for a Front-end developer job at the Trainee or Junior level for development and growth in this direction'
};

let projectsList = {
    first:{
        link:'khristich-mihail.netlify.app',
        usedTechology:['HTML','CSS', 'JS(for adapting for mobile device)'],
        about:'My first cv project'
    },
    second:{
        link:'github.com/mihailx21/darts-js',
        usedTechology:['HTML', 'JS'],
        about:'Funny target clicker with scores and running target'
    },
    third:{
        link:'github.com/mihailx21/test-task-incode',
        usedTechology:['HTML', 'CSS', 'JS', 'React.JS'],
        about:'One of the test tasks giving me by companys to test my React.JS skills'
    },
    fourth:{
        link:'github.com/mihailx21/test-task-itop1000',
        usedTechology:['HTML', 'CSS', 'TypeScript', 'Angular'],
        about:'One of the test tasks giving me by companys to test my Angular skills' 
    }
}

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
            'Registration on the basis of own brand warranty products',
            'Sending own brand warranty products to a certified service center in Kiev',
            'Issue of own brand warranty products on an accounting basis and transfer it to the manager for further shipment to the client'
        ]
    },
    firstWork:{
        companyName:'NTU \"KhPI\"',
        position:'Computer operator',
        workTime:['April 2018', 'Decembe 2018'],
        duties: [
            'Searching information',
            'Data processing',
            'Processing and design of scientific articles, patents, monographs'
        ]
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

// to do dotts correction !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! some problems with width that symbol takes
function projectList(list, name){
    let result = `<h2> ${name} </h2><ol>`
    for(let number in list){
        let project = list[number]
        let dots = project.link.padEnd(50, '.');
        dots = dots.replaceAll(project.link, '');
        console.log(dots);
        result += `<li>
            <a href = ${'https://'+project.link}>${project.link}</a>
            <span>${dots}</span><span>[${project.usedTechology}]
            </span><br><i>${project.about}</i>
        </li>`
    }
    result += '</ol>'
    return result
    
}

function workList_en(node){


    

    // let companyName = document.createElement('h3')
    // companyName.innerText = workExperience_en.lastWork.companyName + ' ' + workExperience_en.lastWork.position;
    // node.appendChild(companyName);

    // let workingTime = document.createElement('div');
    // workingTime.innerText = workExperience_en.lastWork.workTime[0] + ' | ' + workExperience_en.lastWork.workTime[1];
    // node.appendChild(workingTime);

    // let dutyList = document.createElement('ul');
    // node.appendChild(dutyList);

    // for(let duty of workExperience_en.lastWork.duties){
    //     let pos = document.createElement('li');
    //     pos.innerText = duty;
    //     dutyList.appendChild(pos)
    // }
}

function workList_ukr(node){
}


//change photo item
let photo = document.getElementById('my-photo')
let timerId = setInterval(() => {
    let src = photo.src
    photo.src = src.includes('src/photos/photo1.webp')? 
        src.replace('src/photos/photo1.webp','src/photos/photo2.webp') : src.replace('src/photos/photo2.webp','src/photos/photo1.webp');

    console.log('Interval', );
}, 10000);



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
myProjects.innerHTML = projectList(projectsList, 'My Pet Projects');

//work experience
let myWork = document.getElementById('my-work-exp');
let categoryName = document.createElement('h2');
categoryName.innerText = 'Work Experience';
myWork.appendChild(categoryName);

workList_en(myWork)



languageToogle.onchange = ()=>{
    
    //endlish
    if(languageToogle.value === 'en'){
        labelLang.innerText = 'Language: ';
        flagImage.src = 'src/flags/us.svg'
        myFullName.innerText = `${mainInfo_en.lastdName} ${mainInfo_en.firstname}`;
        aboutMe.innerText = `${mainInfo_en.aboutMe}`;
        hardSkillsText = 'Hard Skills';
        hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);
        softSkills.innerHTML = skillsList('Soft Skills', skills.softSkills_en);
        myProjects.innerHTML = projectList(projectsList, 'My Pet Projects');
        categoryName.innerText = 'Work Experience';

        

    }
    //ukraine
    else if(languageToogle.value === 'ua'){
        labelLang.innerText = 'Мова: ';
        flagImage.src = 'src/flags/ua.svg'
        myFullName.innerText = `${mainInfo_ukr.lastdName} ${mainInfo_ukr.firstname}`;
        aboutMe.innerText = `${mainInfo_ukr.aboutMe}`;
        hardSkillsText = '\"Жорсткі\" навички';
        hardSkills.innerHTML = skillsList(hardSkillsText, skills.hardSkills);
        softSkills.innerHTML = skillsList('М\'які навички', skills.softSkills_ukr);
        myProjects.innerHTML = projectList(projectsList, 'Мої домашні проекти');
        categoryName.innerText = 'Робочий досвід';
       
    }
};

