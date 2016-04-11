module.exports = getShortMessages;

function getShortMessages(objects) {
	return objects.filter(object => object.message.length < 50).map(object => object.message);
}