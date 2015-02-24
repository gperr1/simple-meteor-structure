Template.home.rendered = function() {
	// page loaded stuff 
}

// list of stuff used in views
Template.home.helpers({
    // currentMatch: function() {
    //     return Matchs.findOne(Session.get("currentMatchId"));
    // }
});

Template.composition.events({
    "click #menu-close #menu-toggle" : function(e) {
    	// event stuff there
    	e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        return false;
    },
    "click a[href*=#]:not([href=#])" : function(e){
    	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
    },
});