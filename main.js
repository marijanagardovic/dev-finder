const searchbar = document.querySelector('.search-bar');
const profilecontainer = document.querySelector('.card');
const root = document.documentElement.style;
const get = (param)=> document.getElementById(`${param}`);
const url = 'https://docs.github.com/en/rest/reference/users#get-a-user';
const noresults = get('no-results')
const btnmode = get('btn-change')
const modetext = get('btn-text')
const modeicon =get('icon')
const btnsubmit = get('btn-search')
const input = get('input')
const avatar = get('avatar')
const userName = get('name')
const user = get('username')
const date = get('date')
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const bio = get('about')
const repos = get('repos')
const followers = get('followers')
const following = get('following')
const user_location = get('location')
const page = get('page')
const twitter = get('twitter')
const company = get('company')
let darkMode = false;


btnmode.addEventListener('click', function(){
    if(darkMode == false){
        darkModeProperties()
    }else if (darkMode == true){
        lightModeProperties()
    }
})

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) 
    darkModeProperties()
    else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
        lightModeProperties();
    }
    

function darkModeProperties(){
    root.setProperty('--light-gray', '#141D2F')
    root.setProperty('--white', '#1E2A47')
    root.setProperty('--devfinder', '#fefefe')
    root.setProperty('--light-blue', 'white')
    root.setProperty('--dark-blue', 'white')
    root.setProperty('--shadow', 'rgba(70,88,109,0.15)')
    modetext.innerText = "LIGHT"
    modeicon.src = "assets/icon-sun.svg"
    darkMode = true
}
function lightModeProperties(){
    root.setProperty('--light-gray', '#F6F8FF')
    root.setProperty('--white', '#FEFEFE')
    root.setProperty('--devfinder', '#222731')
    root.setProperty('--light-blue', '#4B6A9B')
    root.setProperty('--dark-blue', '#2B3442')
    root.setProperty('--shadow', 'rgba(70, 88, 109, 0.25)')
    modetext.innerText = "DARK"
    modeicon.src = "assets/icon-moon.svg"
    darkMode = false
}
profilecontainer.classList.toggle('active')
searchbar.classList.toggle('active')
