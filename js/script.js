'use strict';

const formValidations = document.querySelector('.userForm');
const box1 = document.querySelector('.box-1');
const box2 = document.querySelector('.box-2');
// box-2 end here
const box3 = document.querySelector('.box-3'); // testing


function formValidation(){
	let userName = 'Najim vuiya';
	let emailAddress = 'najim@gmail.com';
	if(userName === 'Najim vuiya' && emailAddress === 'najim@gmail.com')
	{
		console.log('Your Registation has been sucessfully');
	}else 
	{
		console.log('Please try again');
	}
}
formValidation()
// Our form validation is end herer 

