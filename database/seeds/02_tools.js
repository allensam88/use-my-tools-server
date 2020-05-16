exports.seed = function (knex) {
	return knex('tools').insert([
		{ name: 'Saw', toolImg: 'https://tinyurl.com/syhdc4b', price: 20, borrowed: 0, ownerId: 1 },
		{ name: 'Jackhammer', toolImg: 'https://tinyurl.com/u4yee2l', price: 20, borrowed: 0, ownerId: 1 },
		{ name: 'Torque Wrench', toolImg: 'https://tinyurl.com/vzcbm2m', price: 20, borrowed: 0, ownerId: 2 },
		{ name: '1/4 Socket Set', toolImg: 'https://tinyurl.com/vcnq2f9', price: 20, borrowed: 0, ownerId: 2 },
		{ name: 'Drill', toolImg: 'https://tinyurl.com/wvd5fmw', price: 20, borrowed: 0, ownerId: 3 },
		{ name: 'Table Saw', toolImg: 'https://tinyurl.com/wyngywd', price: 20, borrowed: 0, ownerId: 3 },
		{ name: 'Air Compressor', toolImg: 'https://tinyurl.com/uqolc5w', price: 20, borrowed: 0, ownerId: 4 },
		{ name: 'TIG Welder', toolImg: 'https://tinyurl.com/vw9uxqm', price: 20, borrowed: 0, ownerId: 4 },
		{ name: 'Breaker Bar', toolImg: 'https://tinyurl.com/t75qyuk', price: 20, borrowed: 0, ownerId: 5 },
		{ name: 'Nail Gun', toolImg: 'https://tinyurl.com/u62j4px', price: 20, borrowed: 0, ownerId: 5 }
	]);
};