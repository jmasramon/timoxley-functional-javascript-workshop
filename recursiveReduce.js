// TODO: make a tail recursive version

function reduce(arr, fn, initial) {
	if (arr.length == 1){
    	return fn(initial, arr[0], 0, arr);
    } else {
    	return fn(reduce(arr.slice(1, arr.length), fn, initial), arr[0], 0, arr);
    }
}

module.exports = reduce;
