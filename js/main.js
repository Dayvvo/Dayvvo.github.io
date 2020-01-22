let  throttle= document.querySelectorAll('.ham');
for (let index = 0; index <throttle.length; index++) {    
throttle[index].addEventListener('click',function () {
    let rightbar=document.querySelector('#navbar');
    rightbar.classList.toggle('slide');    
    throttle.classList.toggle('changecol');

})

}