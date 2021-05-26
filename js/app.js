const projects = document.getElementById("projects");

const projectPlace = projects.childNodes[3].childNodes[1].childNodes[1];

const getProjectElement = function (value) {
  const el = `<li class="col s12 m12 l12 secondary-bg">
    <div class="collapsible-header secondary-bg">
      <h5
        class="tooltipped"
        data-position="top"
        data-tooltip="Click to Know More"
      >
        ${value.name}
      </h5>
      <section class="section right prjct-head">
        <a href="${value.github}">GitHub</a> /
        <a href="${value.link}">web-Link</a>
      </section>
    </div>
    <div class="collapsible-body left secondary-bg project-element">
      <span>${value.description}</span>
    </div>
    </li>`;
  return el;
};

async function updateProjectUI() {
  const res = await fetch("./files/project-data.json");
  const data = await res.json();
  Object.values(data).forEach((e) => {
    let v = getProjectElement(e);
    projectPlace.insertAdjacentHTML("beforeend", v);
  });
}



const updateNameAnimation = ()=>{
  const myname = document.getElementById('myname');
  const myname_shuffle = document.getElementById('myname_shuffle');

  let inc = 0;
  let out = 0;
  const myName = 'Samar Anand';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';

  const nameAnimation = function() {
    inc++;
    if (inc % 7 === 0 && out < myName.length) {
      myname.appendChild(document.createTextNode(myName[out]));
      out++;
    } else if (out >= myName.length) {
      myname_shuffle.innerHTML = '';
      clearInterval(t);
    } else {
      myname_shuffle.innerHTML = chars[Math.floor(Math.random() * chars.length)];
    }
    
  };
  let t = setInterval(nameAnimation, 50);
  myname.innerHTML = '';
}


const typeAboutMe = ()=>{
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");

  const textArray = ["Student, JIS College Kalyani", "Intern @eloop.dev", "Competitive Programmer", "JS Developer"];
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 2000; // Delay between current and next text
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } 
    else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if(textArrayIndex>=textArray.length) textArrayIndex=0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  document.addEventListener("DOMContentLoaded", ()=> {
    if(textArray.length) setTimeout(type, 1250);
  });
}




// name animation
updateNameAnimation()

// typewriter effect about me
typeAboutMe()

// project using fetch
updateProjectUI();
