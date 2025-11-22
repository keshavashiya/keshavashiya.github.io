var postsList = `<ul style="list-style:none; padding-left:16px">`;

function getPosts() {
  var settings = {
    // async: true,
    // crossDomain: true,
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@keshavashiya",
    // method: "GET"
  };

  $.ajax(settings).done(function (response) {
    var res = response;
    for (var i = 0; i < res.items.length; i++) {
      postsList += `<li><a target="_blank" href="${res.items[i].link}">${res.items[i].title}</a></li>`;
    }
    postsList += `</ul>`;
  });

  setTimeout(function () {
    data["posts"] = postsList;
    // console.log(posts);
  }, 3000);
}

getPosts();

var projectsList = `<ul style="list-style:none; padding-left:16px">`;

function githubProjs() {
  var settings = {
    async: true,
    crossDomain: true,
    url: "https://api.github.com/users/keshavashiya/repos?per_page=100",
    method: "GET",
  };

  $.ajax(settings).done(function (response) {
    var res = response;
    for (var i = 0; i < res.length; i++) {
      if (!res[i].fork) {
        projectsList += `<li><a target="_blank" href="${res[i].html_url}">${res[i].full_name}</a> written in ${res[i].language}</li>`;
      }
    }
    projectsList += `</ul>`;
  });

  setTimeout(function () {
    data["projects"] = projectsList;
    //console.log(projectsList);
  }, 3000);
}

githubProjs();

var data = {
  intro: `Hello. I'm <a href="https://keshavashiya.github.io/" target="_blank">Keshav Ashiya</a>, just another one in million trying
  to understand 01101011 better than any thing.</br>
I was an Engineering student of <a href="http://jietjodhpur.ac.in/" target="_blank">Jodhpur Institute of Engineering and Technology, Jodhpur</a>
and a Senior Software Engineer @ <a href="https://www.populardigital.ai/" target="_blank">Popular Digital AI</a> building
 applications for various devices with some awesome people.</br>
As a Software Engineer, I enjoy bridging the gap between engineering and design — combining my
technical knowledge with my keen eye for design to create beautiful products. My goal is to always build applications that are scalable
 and efficient under the hood while providing engaging, pixel-perfect user experiences.
Although I'm mostly in front of my Laptop. While I'm not working, I’m probably watching a television series
 or a movie, listening to music, watching random stuff on youtube, writting some hip-hop stuff are on my bucket list.
 `,
  social: `<ul style="list-style:none; padding-left:16px">
<li><a href="https://twitter.com/keshavashiya" target="_blank">Twitter - @keshavashiya</a>
</li><li><a href="https://www.facebook.com/keshavashiya" target="_blank">Facebook - keshavashiya</a>
</li><li><a href="https://github.com/keshavashiya" target="_blank">Github - keshavashiya</a>
</li><li><a href="https://medium.com/@keshavashiya" target="_blank">Medium - keshavashiya</a>
</li><li><a href="https://angel.co/keshavashiya" target="_blank">AngelList - keshavashiya</a>
</li><li><a href="https://keshavashiya.wordpress.com/" target="_blank">Wordpress Blog - keshavashiya</a>
</li><li><a href="https://behance.net/keshavashiya" target="_blank">Behance - keshavashiya</a>
</li><li><a href="https://www.instagram.com/keshavashiya/" target="_blank">Insta - keshavashiya</a>
</li><li><a href="https://www.linkedin.com/in/keshavashiya/" target="_blank">Linkedin - keshavashiya</a>
</li><li><a href="https://www.quora.com/profile/Keshav-Ashiya" target="_blank">Quora - keshavashiya</a>
</li><li><a href="https://dribbble.com/keshavashiya" target="_blank">Dribbble - keshavashiya</a></li></ul>`,
  help: `write any command from this list: intro, social, cv, blog, github, mail, posts, picture, projects`,
  cv: '<ul style="list-style:none; padding-left:16px"><li><a href="https://docs.google.com/document/d/1TylqIi6DqpCyvsFDweYk_kIKEE7HCDRx1r1_UqBx4jA/edit?usp=sharing" target="_blank">myCV</a></li></ul>',
  picture: `<ul style="list-style:none; padding-left:16px"><li><img src="https://pbs.twimg.com/profile_images/1296671028240777216/-gKg4gmh_400x400.jpg" style="width:300"></li></ul>`,

  blog: `<ul style="list-style:none; padding-left:16px"><li><a href="http://keshavashiya.wordpress.com/" target="_blank">http://keshavashiya.wordpress.com/</a>
    </li><li><a href="https://medium.com/@keshavashiya" target="_blank">Medium - keshavashiya</a></li>
    <li><a href="https://keshavashiya.ml" target="_blank">Website - keshavashiya</a></li></ul>`,
  github:
    '<ul style="list-style:none; padding-left:16px"><li><a href="https://github.com/keshavashiya" target="_blank">https://github.com/keshavashiya</a></li></ul>',
  mail: `<ul style="list-style:none; padding-left:16px"><li><a href="mailto:keshavashiya@outlook.com" target="_blank">keshavashiya@outlook.com</a></li></ul>`,
  hello:
    "hello visitor, i like you 😍. if you want to get help just write 'help'",
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
document.getElementById(ne.toString()).innerHTML = "~";

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
  document.getElementById(ne.toString()).innerHTML = "~";
  var inpp = document.createElement("input");
  iidd++;
  inpp.setAttribute("id", iidd.toString());
  bod.appendChild(inpp);
  inpp.focus();
  //  document.querySelector('inp').autofocus = true;
}
