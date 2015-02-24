#Simple scafolding for meteor app

## Directory Structure
```
- client/
	- compatibility/		<-- put compatibility libs here
	- lib/					<-- put your client libs here
		- subscriptions.js 	<-- add subscriptions here
		- validator.js 		<-- custom validator, add your stuff here (TODO : find a lib doing this stuff or package this thing ;) )
	- styles/				<-- css override stuff (you'll find the Stylish Portfolio css here by default)
	- views/				<-- put your new views / controlers here
		- common/			<-- common templates here (layout, loader,...)
			- layout.html 	
			- layout.js
			- loading.html
		- home/				<-- home template & controller. duplicate this dir to create a new "view"
			- home.html
			- home.js
	- client.js 			<-- put global client stuff here
	- routes.js 			<-- iron router file
- lib/						<-- shared (client/ server) libs 
	- collections.js 		<-- add collections declaration here
- private/					<-- private stuff (server only and no access from the outside)
- public/					<-- public ressources (robots.txt,images,fonts,...)
	- fonts/ 				
	- images/
	- robots.txt
- server/
	- lib/ 					<-- server libs here
	- API.js
	- publication.js 		<-- setup your meteor publications here
	- security.js 			<-- security checks (on collections & auth)
	- server.js 			<-- server methods
```

## essential packages
list of packages installed by default
```
accounts-base                 1.1.3  A user account system
accounts-google               1.0.3  Login service for Google accounts
cfs:http-methods              0.0.27  Adds HTTP.methods RESTful
chrismbeckett:toastr          2.1.0  Gnome / Growl type non-blocking notifications
cwohlman:bootboxjs            4.4.0  Programmatic dialog boxes using Twitter's bootstrap modals
fortawesome:fontawesome       4.2.0_2  Font Awesome (official): 470+ scalable vector icons, customizable via CSS, Retina fr...
http                          1.0.10  Make HTTP calls to remote servers
iron:router                   1.0.7  Routing specifically designed for Meteor
meteor-platform               1.2.1  Include a standard set of Meteor packages in your app
mizzao:bootstrap-3            3.3.1_1  HTML, CSS, and JS framework for developing responsive, mobile first projects on the ...
mrt:moment                    2.8.1  Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://moment...
mrt:moment-timezone           0.2.1  Timezone support for moment.js, packaged for Meteor. See http://momentjs.com/timezone.
natestrauser:select2          3.5.1  Select2 is a jQuery based replacement for select boxes.
npvn:accounts-ui-bootstrap-3  1.1.13  accounts-ui re-styled to play well with Material Design.
zimme:select2-bootstrap3-css  1.4.1  CSS to make Select2 fit in with Bootstrap 3
```

## Default theme
This meteor simple boilerplate comes by default with a single page layout from [Start Bootstrap](http://startbootstrap.com/) - [Stylish Portfolio](http://startbootstrap.com/template-overviews/stylish-portfolio/)

[Stylish Portfolio](http://startbootstrap.com/template-overviews/stylish-portfolio/) is a responsive, one page portfolio theme for [Bootstrap](http://getbootstrap.com/) created by [Start Bootstrap](http://startbootstrap.com/). The theme features multiple content sections with an off canvas navigation menu.

### Creator

Start Bootstrap was created by and is maintained by **David Miller**, Managing Parter at [Iron Summit Media Strategies](http://www.ironsummitmedia.com/).

* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

### Copyright and License

Copyright 2013-2015 Iron Summit Media Strategies, LLC. Code released under the [Apache 2.0](https://github.com/IronSummitMedia/startbootstrap-stylish-portfolio/blob/gh-pages/LICENSE) license.

