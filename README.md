Adopt a Dog - v.1.0
====================

A simple Angular single page web app that pulls adoptable dog info from the Petfinder API.

### Key Features:
* Search by location: zipcode or City, State
* Filter search by Age, Size, and Sex of dog
* Roulette option gives one random dog as an alternative to search
* Organized in cards with profile pic and important information at a glance
* Masonry "Pinterest" layout for easy navigation through hundreds of dogs
* Bookmark potential dogs for easy access (so you don't have to find them in the search results every time)
* Links to each dog's Petfinder page for detailed Adoption information for an easy handoff to individual rescue through PF for serious considerations

### How to use

Clone it down and serve it up locally:

1. Clone this directory
2. Go to cloned directory
3. Go to https://www.petfinder.com/developers/api-key and get your own API key
4. Fill in your API key in app/sample-config.js (don't forget to rename it to config.js!)
5. Type command `npm start` to run scripts and start server, then go to http://localhost:8000 in browser)

Optional --
#### How to make the Ng-routed SPA URI behave like a traditional multi-route URI

If you want to be able to access the ng-routed URL directly from the address bar,
create a `.htaccess` file and place it in the root folder, with the following code inside:

```
RewriteEngine On

  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
  RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
  RewriteRule ^ - [L]

  RewriteRule ^ /index.html
```
This will allow filepaths that exist to go through but will redirect the ng-routed paths to the root rather than give a 404.


### Why this App? Why this Way?

1. I love dogs and I buy everything online--- but Petfinder's website felt claustrophic. I felt couldn't search as freely as I wanted.
2. I wanted to make the initial search for a rescue dog at least as easy as walking into a pet store
3. Repetitive data pulled frequently from an external API in realtime and organized for easy sorting is a good use case for Angular.

_I read an article that rescue groups' poor websites drive people to pet stores and Craigslist (read: puppy mills and sub-standard breeding practices) when there are so many perfectly good dogs in Shelters._

Reference [Petfinder API Docs](https://www.petfinder.com/developers/api-docs) if you want to know more about the api calls made within this app

### Improvements TO-DO

* Refactor: Split up controller into individual skinny controllers
* Refactor: Unit-test data storage service (ng-storage) -- Currently facing $localstorage injection error
* Refactor: Eliminate bandaid css classes in html (classes that exist only to mark for easy testing in Protractor)
* Refactor: Enable "Any" text on select fields without breaking filter
* Layout: Style Buttons, Headers; Change Font?
* Layout: Live with design for a bit, tweak for better UX as appropriate
* Feature: Add Quiz -- best type of dog for xyz situation
* Feature: Individual Page for each dog (by id) with more photos, description

***

MAKE IT BETTER WITH A FORK.

Copyright (c) 2016 - House of Cakes

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
