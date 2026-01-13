
/*let image1 = document.getElementById('gitbash');
let image2 = document.getElementById('portfolio');
let image3 = document.getElementById('form-a-story');
let image4 = document.getElementById('web-design');
let image5 = document.getElementById('calc');
let button1 = document.getElementById('button1');
let project = document.getElementsByClassName('project-div');
let info = document.getElementsByClassName('info');

function seeMore() {
    button1.innerHTML === 'See Less'? button1.innerHTML = 'See More Projects' : button1.innerHTML = 'See Less' ;
    image1.hidden === false? image1.hidden = true : image1.hidden = false;
    image2.hidden === false? image2.hidden = true : image2.hidden = false;
    image3.hidden === false? image3.hidden = true : image3.hidden = false;
    image4.hidden === false? image4.hidden = true : image4.hidden = false;
    image5.hidden === false? image5.hidden = true : image5.hidden = false;
}

function buttonEvents(button1) {
  button1.addEventListener('click', seeMore);
} 

const projectEvents = () => {
  for (let i = 0; i < project.length; i++) {
        project[i].addEventListener('mouseenter', function showLinks() {
          //setTimeout(() => {
            
            info[i].style.display = 'flex';
            info[i].style.transition = 'all 2s ease-in-out';
          //}, 180);
         } )
    }     
  }
        

const projectNonEvents = () => {
  for (let i = 0; i < project.length; i++) {
        project[i].addEventListener('mouseleave', function dontShowLinks() {
        info[i].style.display = 'none';
        });
    }
}


projectEvents();
projectNonEvents();
buttonEvents(button1);*/

// Force download for resume link by fetching as blob
const resumeLink = document.getElementById('resumeLink');
if (resumeLink) {
  resumeLink.addEventListener('click', function (e) {
    e.preventDefault();
    const url = resumeLink.href;
    fetch(url)
      .then(resp => {
        if (!resp.ok) throw new Error('Network response was not ok');
        return resp.blob();
      })
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = resumeLink.getAttribute('download') || 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(blobUrl);
      })
      .catch(err => {
        console.error('Download failed:', err);
        // fallback: navigate to the file (lets browser handle it)
        window.location.href = url;
      });
  });
}