Meteor.formValidator = {

    /************* FORMS SPECIFIC ERROR CHECKS *************/

    // validatePlayerForm: function(formdata) {
    //     var errorMessages = "";
    //     errorMessages += Meteor.formValidator.validatePresent("Nom", formdata.nom.value);
    //     errorMessages += Meteor.formValidator.validateInt("Numéro", formdata.numero.value);
    //     errorMessages += Meteor.formValidator.validateMinute("Temps de jeu", formdata.playtime.value);
    //     return errorMessages;
    // },


    /************* GENERIC ERROR CHECKS *************/

    // check that there is a value in the field
    validatePresent: function(field, value) {

        // check that there is a value in the field
        if (value != "undefined" && value != null && value != "") {
            return "";
        }
        return "Merci de remplir le champ " + field + "." + "<br/>";
    },

    // check that the value of the field is a valid integer
    validateInt: function(field, value) {
        // check that 
        // 1. there is a value
        // 2. the value is a number (isNaN function)
        // 3. it's an int ! (parseInt function)
        if (value != "undefined" && value != null && value != "" && !isNaN(value) && parseInt(Number(value)) == value) {
            return "";
        }
        return "Merci de remplir le champ " + field + " avec un nombre entier." + "<br/>";
    },

    // check that the value of the field is a valid minute (integer between 0 and 125)
    validateMinute: function(field, value) {
        // check that 
        // 1. it's an integer
        // 2. it's between 0 and 125
        var returnMessage = Meteor.formValidator.validateInt(field, value);
        if (returnMessage === "" && value >= 0 && value <= 125) {
            return "";
        }
        return "Merci de remplir le champ " + field + " avec un nombre entier compris entre 0 et 125" + "<br/>";
    },

    // checks that this is a valid date > 2013-12-12
    validateDate: function(field, value) {
        // try to create a moment date from value
        try {
            date = moment(value);

            // check that this date is > 2013-12-12
            if (date > moment("2013-12-12")) {
                return "";
            }
        } catch (exception) {
            // do nothing since we have a default return string.
        }
        return "Merci de remplir le champ " + field + " avec une date valide (>= 2014)." + "<br/>";
    }
}