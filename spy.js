function Spy(target, method) {
	var originalMethod = target[method];
	var res = {
		count: 0,
	};

	target[method] = function () {
		res.count++;
		// console.log(method, 'being called for', counter, 'time with:', [].slice.call(arguments));
		return originalMethod.apply(target, [].slice.call(arguments));
	};

	return res;
}

module.exports = Spy;

// var logger = Spy(console, 'log');

// console.log('hola');
// console.log('lola');
// console.log('hola','lola');
// console.log(logger.count);
