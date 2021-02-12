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

updateProjectUI();
