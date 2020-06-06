// Object.assign - это метод слияния обьектов по ключу
// Eсли первый аргумент пустой обьект то создается новый объект без мутаций сливаемых

const attrs = {
	title: '',
	slug: '',
	desc: '',
	prev: '',
	text: ''
};

const resAttrs = {
	title: 'Title',
	slug: 'slug title',
	text: 'text text text'
};

const cat = {
	head: 1,
	legs: 4
};

const dog = {
	head: 1,
	legs: 4,
	sound: 'yes'
};

const animal = Object.assign({}, cat, dog);

function ass(obj1, obj2){
	const newObj = {};
	
	for(let key in obj1){
		newObj[key] = obj2[key] || '';
	}
	
	return newObj;
}

const theadAttrs = Object.assign({}, resAttrs, attrs);

console.log('Object assign', animal);
console.log('Object assign resAttrs', ass(attrs, resAttrs));