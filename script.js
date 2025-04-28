document.querySelectorAll('.link').forEach(function(link){
link.addEventListener('click',function(e){
e.preventDefault();
document.body.classList.add('fade-out');
setTimeout(function(){
window.location.href = link.href;
},500);
});
});

const click1 = document.getElementById('click1');
const hid1 = document.getElementById('hid1');
hid1.title = "Copy text";
click1.addEventListener('click', () => {
hid1.classList.toggle('show');
});
hid1.addEventListener('click', () => {
const textToCopy = hid1.innerText;
navigator.clipboard.writeText(textToCopy)
.then(() => {
hid1.title = "Text copied to clipboard";
})
});

const click2 = document.getElementById('click2');
const hid2 = document.getElementById('hid2');
hid2.title = "Copy text";
click2.addEventListener('click', () => {
hid2.classList.toggle('show');
});
hid2.addEventListener('click', () => {
const textToCopy = hid2.innerText;
navigator.clipboard.writeText(textToCopy)
.then(() => {
hid2.title = "Text copied to clipboard";
})
});


const click3 = document.getElementById('click3');
const hid3 = document.getElementById('hid3');
hid3.title = "Redirect to Instagarm";
click3.addEventListener('click', () => {
hid3.classList.toggle('show');
});

const click4 = document.getElementById('click4');
const hid4 = document.getElementById('hid4');
hid4.title = "Redirect to Linkedin";
click4.addEventListener('click', () => {
hid4.classList.toggle('show');
});
