function checkUsersValid2(goodUsers) {
	'use strict';
	let goodUsersStrings = goodUsers.map(goodUser => JSON.stringify(goodUser));
    return function allUsersValid(submittedUsers) {
        // return submittedUsers.reduce((acc, subUser) => (acc && subUser.),false)
        return submittedUsers.every(subUser => goodUsersStrings.some(gUS => gUS == JSON.stringify(subUser)));
    };
}

function checkUsersValid(goodUsers) {
	'use strict';
    return function allUsersValid(submittedUsers) {
        // return submittedUsers.reduce((acc, subUser) => (acc && subUser.),false)
        return submittedUsers.every(subUser => goodUsers.some(goodUser => goodUser.id == subUser.id));
    };
}

module.exports = checkUsersValid;


