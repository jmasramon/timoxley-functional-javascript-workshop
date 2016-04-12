var slice = Array.prototype.slice;

function logger2(namespace) {
  	return  function () {
  		var args = slice.call(arguments);
  		args.unshift(namespace);
  		console.log.apply(null, args);
  	};
}

function logger(namespace) {
	return function () {
		console.log.apply(null, [namespace].concat(slice.call(arguments)));
	};
}

module.exports = logger;