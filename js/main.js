
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  spaceBetween: 30,

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  navigation: {
    nextEl: '.slide-button-next',
    prevEl: '.slide-button-prev',
  },

  // And if we need scrollbar
 
});
// всё что касается урока
const singInBTN = document.getElementById('singInBTN');
const singOutBTN = document.getElementById('singOutBTN');
const modalLogin = document.getElementById('modalLogin');
const closeModalBTN = document.getElementById('closeModalBTN');
const LoginForm = document.getElementById('LoginForm');
const authLoginInput = document.getElementById('auth-login');
const authPassInput = document.getElementById('auth-pass');
const authUsername = document.querySelector('.user-name');

const toggleAuthClass= ()=>{
 
  authUsername.classList.toggle('--is-logIn');
  singInBTN.classList.toggle('--is-logIn');
  singOutBTN.classList.toggle('--is-logIn');
  
}

const singIn= (User)=>{
  toggleAuthClass();
  authUsername.textContent = User.userName;
  //  modalLogin.classList.remove('--open');

 
  
}
const singOut= ()=>{
  authUsername.textContent = '';
  localStorage.removeItem('UserDATA');
  toggleAuthClass();
}

modalLogin.addEventListener('click',(e)=>{
  if ((e.target == modalLogin)||(e.eventPhase == closeModalBTN)) {
   
    modalLogin.classList.remove('--open')
  } 
});
if (localStorage.getItem('UserDATA')) {
  singIn( JSON.parse( localStorage.getItem('UserDATA') ) )
  localStorage.getItem('UserDATA')
}

singInBTN.addEventListener('click',()=>{
  modalLogin.classList.add('--open');
});
LoginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let user ={
      userName: authLoginInput.value,
      userPass: authPassInput.value
    }
    singIn(user);
    localStorage.setItem('UserDATA',JSON.stringify(user));
    authLoginInput.value='';
    authPassInput.value='';
    modalLogin.classList.remove('--open');
  });
  singOutBTN.addEventListener('click',()=>{
    singOut();
});

