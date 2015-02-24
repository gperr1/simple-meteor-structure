// HTTP.methods({
//     'request': function(data) {
//         // check if we have saleforce user id on a previous request
//         data = JSON.parse(String.fromCharCode.apply(null, data));
//
//         var previousRequest = Requests.findOne({
//             idClient: data.idClient,
//             user_id: {
//                 $exists: true
//             }
//         });
//
//         if (previousRequest != null) {
//             data.tagCommanderData.user_id = previousRequest.tagCommanderData.user_id;
//             console.log(data);
//         }
//         Requests.insert(data);
//     }
// });