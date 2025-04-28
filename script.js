document.querySelectorAll('.link').forEach(function(link){
link.addEventListener('click',function(e){
e.preventDefault();
document.body.classList.add('fade-out');
setTimeout(function(){
window.location.href = link.href;
},500);
});
});
