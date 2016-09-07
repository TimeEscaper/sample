'use strict';
/**
* @see http://artsiom.mezin.eu/technofront/
*/

module.exports.hello = hello;
module.exports.plural = plural;

function onSubmit (form) {
	let data = {
		user: form.elements['user'].value,
		email: form.elements['email'].value
	};

	let result = request('/users', data);

	if (result === '100') {
		form.hidden = true;
		window.helloWorld.innerHTML = hello(data.user);

	}

	console.log(data, result);
}

function hello (text) {
	return 'Привет, ' + text;
}


/**
* Pluralization-функция
* @param {string} pluralForms Строка, содержащая различные формы множественного числа
*								Формы разделены точкой с запятой, в следующим порядке:
*								Окончание на 1; окончание на 2-4; остальные формы
* @param {number} number Число, длякоторого выбирается форма слова
*
*  @return {string} Подходящая форма слова
**/
function plural (pluralForms, number) {
	let formsArray = pluralForms.split(';');
	switch (number) {
		case 1:
			return formsArray[0];
		case 2:
		case 3:
		case 4:
			return formsArray[1];
		default:
			return formsArray[2];
	}
}

if (typeof exports === 'object') {
	exports.hello = hello;
}
