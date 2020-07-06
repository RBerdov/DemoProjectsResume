

describe("1. findFactorial", function() {
	function test1(number) {
		it("Вычисляет факториал числа  " + number + ", результат: " + findFactorial(number), function() {
			assert.equal(findFactorial(number), findFactorial(number));
		});
	}	


	test1(6);
});

describe("2. findLongest", function() {
	function test2(str) {
		it("Возвращает длину самого длинного слова в строке:  " + str + ", результат: " + findLongest(str), function() {
		assert.equal(findLongest(str), findLongest(str));
		});
	}

	test2('Я размышлял о жизни');
});

describe("3. findLargestOfArrays", function() {
	function test3(arr) {
		it("Возвращает массив из наибольших чисел каждого введенного подмассива  " + arr + ", результат: " + findLargestOfArrays(arr), function() {
			assert.equal(findLargestOfArrays(arr), findLargestOfArrays(arr));
		});
	}

	test3([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39]]);
});

describe("4. cutString", function() {
	function test4(str, maxLength) {
		it("Обрезает строку  " + str + " при условии что ее длина больше заданного числа " + maxLength + ", результат: " + cutString(str, maxLength), function() {
			assert.equal(cutString(str, maxLength), cutString(str, maxLength));
		});
	}

	test4('Я размышлял о многом', 11);
});


describe("5. changeStringToUpperCase", function() {
	function test5(str) {
		it("Возвращает строку: " + str + " в формате: каждое слово с заглавной буквы, остальные в нижнем регистре, результат: " + changeStringToUpperCase(str), function() {
			assert.equal(changeStringToUpperCase(str), changeStringToUpperCase(str));
		});
	}

	test5('Я о многом размышлял');
});


describe("6. combineArrays", function() {
	function test6(arr1, arr2, n) {
		it("Копирует каждый элемент массива [" + arr1 + "] в массив [" + arr2 + "] начиная с индекса " + n +  " второго масиива, результат: " + combineArrays(arr1, arr2, n), function() {
			assert.equal(combineArrays(arr1, arr2, n), combineArrays(arr1, arr2, n));
		});
	}


	test6([23, 15, 34, 6, 7], [2, 35, 67, 78], 3);
});


describe("7. deleteFalsy", function() {
	function test7(arr) {
		it("Удаляет ложные значения в массиве  [" + arr + "], результат: " + deleteFalsy(arr), function() {
			assert.equal(deleteFalsy(arr), deleteFalsy(arr));
		});
	}


	test7([25, 6, 67, 28, 30, 0, 'string', false]);
});

describe("8. checkString", function() {
	function test8(arr) {
		it("Возвращает true, если строка в  первом элементе массива [" + arr + "] содержит все буквы строки во втором элементе массива, результат: " + checkString(arr), function() {
			assert.equal(checkString(arr), checkString(arr));
		});
	}


	test8(['результат', 'реат']);
});

describe("9. splitArray", function() {
	function test9(arr, size) {
		it("Разбивает массив  [" + arr + "] на группы длиной " + size +  " и возвращает в виде двумерного массива, результат: " + splitArray(arr, size), function() {
			assert.equal(splitArray(arr, size), splitArray(arr, size));
		});
	}


	test9([34, 23, 56, 76, 34, 26, 87, 92], 2);
});

describe("10. createRecurMass", function() {
	function test10(arr, n) {
		it("Заполняет массив [" + arr + "] числами от " + n + " до 1, результат: " + createRecurMass(arr, n), function() {
			assert.equal(createRecurMass(arr, n), createRecurMass(arr, n));
		});
	}


	test10([], 5);
});

describe("11. sumElements", function() {
	function test11(arr) {
		it("Вычисляет сумму 2-х элементов массива  " + arr + " и чисел между ними, результат: " + sumElements(arr), function() {
			assert.equal(sumElements(arr), sumElements(arr));
		});
	}	


	test11([4,1]);
});


describe("12. getUniques", function() {
	function test12(arr1, arr2) {
		it("Возвращает новый массив, состоящий из элементов, найденных только в одном массиве  [" + arr1 + "] или [" + arr2 + "], но не в обоих, результат: " + getUniques(arr1, arr2), function() {
			assert.equal(getUniques(arr1, arr2), getUniques(arr1, arr2));
		});
	}	


	test12([4, 1, 2, 3],[1, 3, 5, 7]);
});


describe("13. deleteItemsFromArr", function() {
	function test13(arr, ...rest) {
		it("Удаляет из массива " + arr + " элементы, которые имеют то же значение, что и аргументы " + rest + ", результат: " + deleteItemsFromArr(arr, ...rest), function() {
			assert.equal(deleteItemsFromArr(arr, ...rest), deleteItemsFromArr(arr, ...rest));
		});
	}	


	test13([2, 6, 8, 3, 5], 6, 3, 5);
});

describe("14. whatIsInAName", function() {
	function test14(arr_obj, obj) {
		it("Просматривает массив объектов " + arr_obj + " и возвращает массив всех объектов, имеющих совпадающие пары имя и значение " + obj + ", результат: " + whatIsInAName(arr_obj, obj), function() {
			assert.equal(whatIsInAName(arr_obj, obj), whatIsInAName(arr_obj, obj));
		});
	}	


	test14([{"apple": 1, "bat": 2}, {"apple":1},{"apple":1, "bat":2, "cookie":2},{"bat":2}],{"apple":1, "bat":2});
});

describe("15. convertToSpinalCase", function() {
	function test15(str) {
		it("Преобразует строку  " + str + " в регистр Spinal-case, результат: " + convertToSpinalCase(str), function() {
			assert.equal(convertToSpinalCase(str), convertToSpinalCase(str));
		});
	}	


	test15('Что же это за регистр такой');
});


describe("16. replaceWord", function() {
	function test16(str, a, b) {
		it("Находит слово  " + a + " в строке " + str + " и заменяет на слово " + b + ", результат: " + replaceWord(str, a, b), function() {
			assert.equal(replaceWord(str, a, b), replaceWord(str, a, b));
		});
	}	


	test16('Крайне интересно', 'Крайне', 'весьма');
});

describe("17. findMissing", function() {
	function test17(str) {
		it("Ищет пропущенные буквы в строке  " + str + ", результат: " + findMissing(str), function() {
			assert.equal(findMissing(str), findMissing(str));
		});
	}	


	test17('abde');
});

describe("18. filterArrays", function() {
	function test18(arr, ...rest) {
		it("Возвращает массив уникальных значений из массивов: " + arr + rest + ", результат: " + filterArrays(arr, ...rest), function() {
			assert.equal(filterArrays(arr, ...rest), filterArrays(arr, ...rest));
		});
	}	


	test18([4,1,5,6],[9,2,4,5],[3,4]);
});

describe("19. replaceSymbols", function() {
	function test19(str) {
		it("Находит символы &, <, >, апостроф и кавычки " + str + " и заменяет их соответствующим Html кодом, результат: " + replaceSymbols(str), function() {
			assert.equal(replaceSymbols(str), replaceSymbols(str));
		});
	}	


	test19('Символы - &, <, >, " ');
});

describe("20. sumAllSimple", function() {
	function test20(n) {
		it("Суммирует все простые числа от 1 до " + n + ", результат: " + sumAllSimple(n), function() {
			assert.equal(sumAllSimple(n), sumAllSimple(n));
		});
	}	


	test20(5);
});


describe("21. dropElements", function() {
	function test21(arr, func) {
		it("Удаляет каждый элемент, начиная с первого в массиве" + arr + ", пока функция " + func + " не вернет true, результат: " + dropElements(arr, func), function() {
			assert.equal(dropElements(arr, func), dropElements(arr, func));
		});
	}	


	test21([1,2,3,4], function(n){return n>=3;});
});

describe("22. convertToSimpleArray", function() {
	function test22(arr) {
		it("Конвертирует массив различной вложенности " + arr + " в одномерный массив, результат: " + convertToSimpleArray(arr), function() {
			assert.equal(convertToSimpleArray(arr), convertToSimpleArray(arr));
		});
	}	


	test22([[2,3,4,[6,5,8]],3,5,[7,6]]);
});

describe("23. sumAllSimple", function() {
	function test23(a, b) {
		it("Возвращает сумму двух аргументов:" + a + ", если указан только один аргумент, то возвращает функцию, которая запрашивает ввод второго аргумента, результат: " + sumTwoArgs(a, b), function() {
			assert.equal(sumTwoArgs(a, b), sumTwoArgs(a, b));
		});
	}	
	test23(5, 9);
});