//
// Articles.allow({
//   'insert': function () {
//     return true;
//   },
//   'update': function () {
//     return true;
//   },
//   'remove': function () {
//     return true;
//   }
// });

// Accounts.validateNewUser(function (user) {
//     if(user.services.google.email.match(/@TODO/)) {
//         return true;
//     }
//     throw new Meteor.Error(403, "Erreur, Vous devez utiliser une adresse email @TODO.com");
// });