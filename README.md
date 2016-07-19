# learning application

To get going:

* Ensure you have `Node.js` and `NPM` installed.  You can install both at the same time [from the node.js website](https://nodejs.org/en/)
* Install all of the dependencies for our project (mysql library, web server library, socket library, etc)
* run the app

---

Node.js is what is going to run all of your code.  NPM is what is going to manage your
code's dependencies.  We use dependencies to keep us from re-writing the wheel.  Much of our work has nothing to do with the specific business application of our code, but much more generic purposes.  Connection to MySQL and handing it queries for instance is a generic process, therefor we use the [MySQL Node library](https://github.com/mysqljs/mysql) that already wrote all of that code to save us a lot of work (and probably do it of better quality).

NPM uses a file called `package.json` to declare what dependencies our app needs, and which versions of each dependency we require.  On command, it will then download those dependencies and make them available for our use.  If you open up the file `package.json` you will see which dependencies I have already declared for this project.  To actually **install** those dependencies, we need to tell NPM to download them for us by running `npm install` in our project folder.  After they are installed, we can simply `require('some_dependency')` or in ES6 `import SomeDependency from 'some_dependency'`

`package.json` is ALWAYS a great place to start when picking up a new node project.  As it has a bunch of useful information for us.  There is a `main` property in the file... this tells us what the main (entry) file for the module is.  `scripts` lists a bunch of commands that we can use to either work with and develop this app, or maybe run it in production, or run tests, etc.  `dependencies` lists what dependencies this app requires to run.  `devDependencies` lists what dependencies are actually required to *develop* this application.  There are many more properties of use in this file, but just note it is always a good starting point to get acclimated to a new codebase.

---

Since Node.js is all javascript, and so is your web application... it can at first be confusing to see the same language in such different areas of your codebase.  It is always important to pay attention to **where your code is going to be executed**... a webpage running an HTML application, actually reads/parses/processes the HTML/CSS/JS in the actual browser.  Your server code is **ONLY** executed on the *server*... the results of this execution are *typically* just then sent to the client (web browser) to be dealt with by your aforementioned *client-side* code.  So pay attention...

Web Sockets get tricky to think about at first, because they in a sense... blur the above distinctions.  Think of a web-socket like a string-can-phone... its a direct line between the 2 cans, no one else can interfere or listen.  Each side of the conversation can simply send very basic communication between each other, and deal with that info as they would like to.  Either side of the communication can sever the connection at any time.

So with a websocket... we are just notifying the other side of the conversation, that some event just occured, and optionally pass it some additional information related to that event.  The other side can subscribe to any events by that name, and do some set of logic whenever that event occurs.  For example:

`client-side:`
```js
socket.on('myCustomEvent', function(eventData){
	// i am a callback function... anytime the socket emits and event called `myCustomEvent` this function will be run, and be passed any data sent by the server along with this event.
})
```

`server-side`
```js
socket.emit('myCustomEvent', {
	foo: "bar"
})
```

With the above example, the syntax could literally be swapped between client and server, where the client was emitting an event, and the server was listening.  Both sides of the protocol function VERY similarly for most use cases.

---

### ES6

We are writing our code using ES6... this is *optional*.  We could just write normal javascript here.  ES6 is the new-age transformation of javascript, bringing some cleaner syntax and more "mature" functionality.  HOWEVER ES6 is NOT supported *just yet*... so we have to use a tool that actually *transpiles* this ES6 code down into old-school javscript that Node.js and the browser actually know how to read.  For this we use a combination of `babel` and `webpack`

---

### React

We are using React for our client-side application.  React is designed around being a "realtime" application.  Since you need your app to update as things change in your backend, React is an ideal choice here.