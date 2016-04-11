function countWords2(inputWords) {
  	return inputWords.reduce((acc, word) => {
  		if (!acc[word]) {
  			acc[word] = 1;
  		} else {
  			acc[word] +=1;
  		}
  		return acc;
  	}, {});
}

function countWords3(inputWords) {
  	return inputWords.reduce((acc, word) => {
		acc[word] = ++acc[word] || 1;
  		return acc;
  	}, {});
}

function countWords(inputWords) {
  	return inputWords.reduce((acc, word) => (acc[word] = ++acc[word] || 1, acc), {});
}


module.exports = countWords;