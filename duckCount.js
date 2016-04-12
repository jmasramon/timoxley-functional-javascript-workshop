function duckCount2() {
	var args = [].slice.call(arguments);
	function recDuckCount(acc, objs) {
		if (objs.length == 0) {
			return acc;
		}
		return recDuckCount(Object.hasOwnProperty.call(objs[0], 'quack')? ++acc : acc, objs.slice(1));
	} 
	return recDuckCount(0, args);
}

function duckCount() {
	return [].slice.call(arguments).filter(obj => Object.hasOwnProperty.call(obj, 'quack')).length;
}

module.exports = duckCount;