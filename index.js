var projectsList = `<ul style="list-style:none">`;

function githubProjs() {
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.github.com/users/keshavashiya/repos?per_page=100",
    method: "GET"
  };

  $.ajax(settings).done(function(response) {
    var res = response;
    for (var i = 0; i < res.length; i++) {
      if (!res[i].fork) {
        projectsList += `<li><a target="_blank" href="${res[i].html_url}">${
          res[i].full_name
        }</a> written in ${res[i].language}</li>`;
      }
    }
    projectsList += `</ul>`;
  });

  setTimeout(function() {
    data["projects"] = projectsList;
    //console.log(projectsList);
  }, 3000);
}

githubProjs();

var data = {
  social: `<ul style="list-style:none">
<li><a href="https://twitter.com/keshavashiya" target="_blank">Twitter - @keshavashiya</a>
</li><li><a href="https://www.facebook.com/keshavashiya" target="_blank">Facebook - keshavashiya</a>
</li><li><a href="https://github.com/keshavashiya" target="_blank">Github - keshavashiya</a>
</li><li><a href="https://medium.com/@keshavashiya" target="_blank">Medium - keshavashiya</a>
</li><li><a href="https://angle.co/keshavashiya" target="_blank">AngleList - keshavashiya</a>
</li><li><a href="https://keshavashiya.wordpress.com/" target="_blank">Wordpress Blog - keshavashiya</a>
</li><li><a href="https://behance.net/keshavashiya" target="_blank">Behance - keshavashiya</a>
</li><li><a href="https://www.instagram.com/keshavashiya/" target="_blank">Insta - keshavashiya</a>
</li><li><a href="https://www.linkedin.com/in/keshavashiya/" target="_blank">Linkedin - keshavashiya</a>
</li><li><a href="https://www.quora.com/profile/Keshav-Ashiya" target="_blank">Quora - keshavashiya</a>
</li><li><a href="https://dribbble.com/keshavashiya" target="_blank">Dribbble - keshavashiya</a></li></ul>`,
  help: `write any command from this list: social, cv, blog, github, mail, posts, picture, projects`,
  cv:
    '<a href="https://docs.google.com/document/d/1nXCGR_r7_ENs2udg_dljTWRmrki1g1bJXdOJMBEU6GE/edit?usp=sharing" target="_blank">myCV</a>',
  picture: `<img src="https://en.gravatar.com/userimage/95757799/a6ec9ce62ec9001f0b2a0febcb417ff5.jpeg" style="width:300">`,
  posts: `<ul style="list-style:none">`,
  blog:
    `<li><a href="http://keshavashiay.wordpress.com/" target="_blank">http://keshavashiya.wordpress.com/</a>
    </li><li><a href="https://medium.com/@keshavashiya" target="_blank">Medium - keshavashiya</a></li>
    <li><a href="https://keshavashiya.ml" target="_blank">Website - keshavashiya</a></li>`,
  github:
    '<a href="https://github.com/keshavashiya" target="_blank">https://github.com/keshavashiya</a>',
  mail:
    `<li><a href="keshavashiya@outlook.com" target="_blank">keshavashiya@outlook.com</a></li>
    <li><a href="charan@capdice.com" target="_blank">charan@capdice.com</a></li>`,
  hello:
    "hello visitor, i like you 😍. if you want to get help just write 'help'"
};

var x = "";
var iidd = "";
var lol = 40;
var ne = 600;
var bod = document.querySelector("body");

var ff = document.createElement("p");
ne++;
ff.setAttribute("id", ne.toString());
bod.appendChild(ff);
document.getElementById(ne.toString()).innerHTML = ">";

var inp = document.createElement("input");
bod.appendChild(inp);
iidd++;
inp.focus();
inp.setAttribute("id", iidd.toString());
window.addEventListener("keydown", clickHandler, false);
var x = document.getElementById(iidd.toString()).value;
x = x.toLowerCase();

function clickHandler(e) {
  if (e.keyCode == 13) {
    excute();
  }
}

function excute() {
  document.getElementById(iidd.toString()).disabled = true;
  var x = document.getElementById(iidd.toString()).value;
  x = x.toLowerCase();
  //console.log(x);
  var flag = true;
  if (data[x] != (undefined || null)) {
    var disp = document.createElement("p");
    disp.style.color = "00FF00";
    disp.setAttribute("id", lol.toString());
    bod.appendChild(disp);
    document.getElementById(lol.toString()).innerHTML = data[x];
    flag = false;
  }
  if (flag == true) {
    var disp = document.createElement("p");
    disp.setAttribute("id", lol.toString());
    bod.appendChild(disp);
    document.getElementById(lol.toString()).innerHTML =
      "Unknown command " +
      document.getElementById(iidd.toString()).value.toString();
  }
  lol++;
  //  delete inpp;
  var ff = document.createElement("p");
  ne++;
  ff.setAttribute("id", ne.toString());
  bod.appendChild(ff);
  document.getElementById(ne.toString()).innerHTML = ">";
  var inpp = document.createElement("input");
  iidd++;
  inpp.setAttribute("id", iidd.toString());
  bod.appendChild(inpp);
  inpp.focus();
  //  document.querySelector('inp').autofocus = true;
}
