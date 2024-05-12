import Character from "../js/Character.js"

test('Character', () => {
	expect(new Character('Petr', 'Magician')).toEqual({
		name: 'Petr',
		type: 'Magician',
		health: 100,
		level: 1
	});
});


test('Character error name', () => {
	expect(new Character('P', 'Magician')).toThrowError(new Error('Неверная длина имени'));
});

test('Character error type', () => {
	expect(new Character('Petr', 'People')).toThrowError(new Error('Неверный тип персонажа'));
});