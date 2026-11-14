'use strict';
document.documentElement.classList.add('js');
const $ = (selector, scope=document) => scope.querySelector(selector);
const $$ = (selector, scope=document) => [...scope.querySelectorAll(selector)];
const username = 'SebasLoadJs';
const repositoryBase = `https://github.com/${username}/`;
const projectData = {
  nyxlink: {
    name: 'NyxLink', image: './assets/nyxlink-feature.svg', category: 'LIBRARY / AUDIO CLIENT', version: '0.1.0-dev.2 · development', number: '001',
    tags: ['TYPESCRIPT', 'LAVALINK V4', 'NODELINK', 'AUDIO'], repo: 'NyxLink',
    description: {
      en: 'A TypeScript audio-client project for Discord bots. The repository includes source, tests, examples and backend integration work.',
      es: 'Cliente de audio en TypeScript para bots de Discord. El repositorio contiene código fuente, pruebas, ejemplos e integraciones con backends.'
    }
  },
  oguri: {
    name: 'OguriCap Bot', image: './assets/oguri-feature.svg', category: 'APP / MESSAGING AUTOMATION', version: '2.1.0 · repository version', number: '002',
    tags: ['NODE.JS', 'WHATSAPP', 'PLUGINS', 'FRONTEND'], repo: 'OguriCap-Bot',
    description: {
      en: 'A WhatsApp automation bot repository with plugins, backend services, an independent frontend and deployment configuration.',
      es: 'Proyecto de automatización para WhatsApp con plugins, servicios, frontend independiente y configuración de despliegue.'
    }
  },
  konmi: {
    name: 'KONMI BOT', image: './assets/konmi-feature.svg', category: 'PROJECT / BOT DEVELOPMENT', version: 'experimental repository', number: '003',
    tags: ['BOT DEVELOPMENT', 'EXPERIMENTAL'], repo: 'KONMI-BOT-',
    description: {
      en: 'An additional bot-development project. Follow the source repository for its current implementation and status.',
      es: 'Otro proyecto de desarrollo de bots. El repositorio contiene el código y permite consultar su estado actual.'
    }
  }
};
const translations = {
  en: {
    navAbout: 'About', navProjects: 'Projects', navLab: 'Lab', navContact: 'Contact',
    heroDesc: "I write software for the parts you don't always see — audio systems, Discord applications, APIs and the tools that connect them.",
    explore: 'Explore selected work',
    aboutLead: "I'm Sebas, a developer who enjoys making complicated systems feel understandable. I explore audio infrastructure, bot ecosystems, automation and developer tools.",
    aboutBody: 'My work is shaped by curiosity: reading source code, experimenting with architecture and improving projects one iteration at a time. This portfolio is a window into that process.',
    workIntro: 'Not just project names. Explore the architecture, code structure and problems behind each repository.',
    source: 'Source repository', architecture: 'Architecture notes',
    labIntro: "A simplified model of the NyxLink audio stack. The diagram explains component responsibilities; it isn't a claim about live traffic or deployment.",
    labOne: 'Modular responsibilities, predictable interfaces, and code that stays understandable as features evolve.',
    labTwo: 'Source organization, tests, documentation and deployment matter beyond a working demo.',
    labThree: 'New ideas are research questions first, implementation decisions second.',
    toolkitIntro: 'Technologies that appear in my projects and current areas of exploration — not an invented proficiency score.',
    githubIntro: 'Public information fetched from GitHub when possible. No inflated activity charts or imaginary numbers.',
    contactIntro: 'Interested in software, open source or audio systems? Explore the work and start a conversation through GitHub.'
  },
  es: {
    navAbout: 'Sobre mí', navProjects: 'Proyectos', navLab: 'Laboratorio', navContact: 'Contacto',
    heroDesc: 'Desarrollo software para lo que no siempre se ve: sistemas de audio, aplicaciones de Discord, API y las herramientas que los conectan.',
    explore: 'Explorar proyectos',
    aboutLead: 'Soy Sebas, un desarrollador interesado en hacer comprensibles los sistemas complejos. Exploro infraestructura de audio, bots, automatización y herramientas para desarrolladores.',
    aboutBody: 'La curiosidad guía mi trabajo: estudiar código, experimentar con arquitectura y mejorar proyectos en cada iteración. Este portafolio muestra parte de ese proceso.',
    workIntro: 'Mucho más que nombres de proyectos: explorá la arquitectura, organización del código y los problemas que aborda cada repositorio.',
    source: 'Ver repositorio', architecture: 'Ver arquitectura',
    labIntro: 'Modelo simplificado de la arquitectura de audio de NyxLink. El esquema explica responsabilidades; no representa tráfico real ni un despliegue activo.',
    labOne: 'Responsabilidades modulares, interfaces predecibles y código comprensible a medida que crecen las funciones.',
    labTwo: 'La estructura, las pruebas, la documentación y el despliegue importan tanto como una demostración funcional.',
    labThree: 'Las nuevas ideas empiezan como preguntas de investigación y luego se convierten en decisiones de implementación.',
    toolkitIntro: 'Tecnologías presentes en mis proyectos e intereses actuales, sin atribuirme puntuaciones inventadas.',
    githubIntro: 'Datos públicos obtenidos de GitHub cuando están disponibles, sin estadísticas ni gráficos ficticios.',
    contactIntro: '¿Te interesan el software, el código abierto o los sistemas de audio? Explorá los proyectos y contactame por GitHub.'
  }
};
const cacheLang = (()=>{try {return localStorage.getItem('sebas_site_lang')} catch {return null}})();
let lang = cacheLang === 'es' ? 'es' : 'en';
let selectedProject = 'nyxlink';
function translate(){
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(node=>{const message=translations[lang][node.dataset.i18n]; if(message)node.textContent=message});
  $('#lang-switch').textContent = lang === 'en' ? 'EN / ES' : 'ES / EN';
  showProject(selectedProject);
}
$('#lang-switch').addEventListener('click',()=>{lang=lang==='en'?'es':'en';try{localStorage.setItem('sebas_site_lang',lang)}catch{}translate()});
function showProject(key, focus=false){
  const info=projectData[key]; if(!info)return; selectedProject=key;
  $$('.project-tab').forEach(tab=>{
    const active=tab.dataset.project===key; tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;
  });
  const stage=$('#project-stage');stage.setAttribute('aria-labelledby',`tab-${key}`);
  $('#stage-title').textContent=info.name;$('#stage-category').textContent=info.category;$('#stage-version').textContent=info.version;
  $('#stage-number').textContent=`PROJECT ${info.number} — 003`;$('#stage-description').textContent=info.description[lang];
  const image=$('#stage-image');image.src=info.image;image.alt=`${info.name} — graphic project illustration`;
  const tags=$('#stage-chips'); tags.replaceChildren();info.tags.forEach(value=>{const span=document.createElement('span');span.textContent=value;tags.appendChild(span)});
  $('#stage-repo').href=repositoryBase+info.repo;
  if(focus)stage.focus({preventScroll:true});
}
$$('.project-tab').forEach(tab=>{
  tab.addEventListener('click',()=>showProject(tab.dataset.project));
  tab.addEventListener('keydown',event=>{
    const order=Object.keys(projectData);const index=order.indexOf(tab.dataset.project);
    let next;
    if(event.key==='ArrowDown'||event.key==='ArrowRight')next=order[(index+1)%order.length];
    if(event.key==='ArrowUp'||event.key==='ArrowLeft')next=order[(index+order.length-1)%order.length];
    if(event.key==='Home')next=order[0];if(event.key==='End')next=order[order.length-1];
    if(next){event.preventDefault();showProject(next);$(`#tab-${next}`).focus()}
  });
});
$('#project-stage').tabIndex=0;
translate();
// Accessible mobile navigation.
const menu=$('#menu-button'),nav=$('#main-nav');
menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});
$$('a',nav).forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
// Palette: real destinations, keyboard-first interaction.
const commands=[
  {name:'Home / overview',link:'#top'}, {name:'About / Sebas',link:'#about'},
  {name:'Projects / project explorer',link:'#work'}, {name:'NyxLink · GitHub',link:repositoryBase+'NyxLink'},
  {name:'OguriCap Bot · GitHub',link:repositoryBase+'OguriCap-Bot'},
  {name:'KONMI BOT · GitHub',link:repositoryBase+'KONMI-BOT-'},
  {name:'Architecture / NyxLink',link:'#lab'}, {name:'Technology / toolkit',link:'#toolkit'},
  {name:'GitHub signal / activity',link:'#github'}, {name:'Connect',link:'#connect'}
];
const dialog=$('#command-dialog'),commandQuery=$('#command-query'),commandResults=$('#command-results');
let activeResult=0,filteredCommands=[];
function go(url){dialog.close();if(url.startsWith('http'))window.open(url,'_blank','noopener,noreferrer');else location.hash=url}
function renderCommands(){const query=commandQuery.value.trim().toLowerCase();filteredCommands=commands.filter(command=>command.name.toLowerCase().includes(query));activeResult=0;commandResults.replaceChildren();if(!filteredCommands.length){const item=document.createElement('div');item.className='command-result';item.textContent='No results';commandResults.append(item);return}filteredCommands.forEach((command,i)=>{const button=document.createElement('button');button.type='button';button.className='command-result'+(i===0?' selected':'');const prefix=document.createElement('span');prefix.textContent=String(i+1).padStart(2,'0');button.append(prefix,document.createTextNode(command.name+' ↗'));button.addEventListener('click',()=>go(command.link));commandResults.appendChild(button)})}
function highlightResult(){ $$('.command-result',commandResults).forEach((button,index)=>button.classList.toggle('selected',index===activeResult));$$('.command-result',commandResults)[activeResult]?.scrollIntoView({block:'nearest'}) }
function openPalette(){renderCommands();dialog.showModal();commandQuery.focus()}
$('#palette-open').addEventListener('click',openPalette);$('#command-close').addEventListener('click',()=>dialog.close());
commandQuery.addEventListener('input',renderCommands);commandQuery.addEventListener('keydown',event=>{if(event.key==='ArrowDown'){event.preventDefault();activeResult=Math.min(activeResult+1,filteredCommands.length-1);highlightResult()}if(event.key==='ArrowUp'){event.preventDefault();activeResult=Math.max(activeResult-1,0);highlightResult()}if(event.key==='Enter'&&filteredCommands[activeResult]){event.preventDefault();go(filteredCommands[activeResult].link)}});
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
document.addEventListener('keydown',event=>{if((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'){event.preventDefault();dialog.open?dialog.close():openPalette()}});
// Scroll depth and reduced-motion-friendly reveals.
let ticking=false;function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;$('#reading-progress').style.width=(max>0?Math.min(100,Math.max(0,scrollY/max*100)):0)+'%';ticking=false}
window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateProgress);ticking=true}},{passive:true});updateProgress();
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduced&&'IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}})},{threshold:.08,rootMargin:'0px 0px -35px 0px'});$$('[data-reveal]').forEach(el=>observer.observe(el))}else $$('[data-reveal]').forEach(el=>el.classList.add('revealed'));
// GitHub public counts: never display invented values and handle API failures.
const numbers={repos:$('#stat-repos'),followers:$('#stat-followers'),following:$('#stat-following'),stars:$('#stat-stars')};
async function updateGitHub(){
  try{
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),9000);
    const options={headers:{Accept:'application/vnd.github+json'},signal:controller.signal};
    const [userResponse,reposResponse]=await Promise.all([fetch(`https://api.github.com/users/${username}`,options),fetch(`https://api.github.com/users/${username}/repos?per_page=100&type=owner`,options)]);
    clearTimeout(timeout);
    if(!userResponse.ok||!reposResponse.ok)throw new Error('GitHub API returned an error');
    const [user,repos]=await Promise.all([userResponse.json(),reposResponse.json()]);if(!Array.isArray(repos)||!Number.isFinite(user.public_repos))throw new Error('GitHub API returned an unexpected response');
    numbers.repos.textContent=String(user.public_repos);numbers.followers.textContent=String(user.followers);numbers.following.textContent=String(user.following);
    const stars=repos.reduce((total,repo)=>total+(repo.stargazers_count||0),0);
    numbers.stars.textContent=repos.length<100?String(stars):'—';
    $('#stat-repos-note').textContent='PUBLIC / GITHUB API';$('#stat-stars-note').textContent=repos.length<100?'PUBLIC REPOSITORIES':'PARTIAL API RESULTS';
  }catch{
    $('#stat-repos-note').textContent='GITHUB API UNAVAILABLE';$('#stat-stars-note').textContent='TRY AGAIN LATER';
  }
}
updateGitHub();