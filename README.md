# Working Off the Main Thread

A talk I gave at MelbJS on Feb 10, 2016.
Inspired by [@henrikjoreteg](https://twitter.com/henrikjoreteg)'s [feather-app](https://github.com/HenrikJoreteg/feather-app)

--

This talk came out of watching Henrik Joreteg's pocket-sized JS presentation.  I highly recommend watching it.

Basically, he talked about how we should approach Mobile Web development and I'm going to give a quick recap and then look at a project he made called feather-app.

Number 1, actually test and develop on mobile devices.  Not just your iPhone 6s but your low-end Android phones too.

Don't do this, send HTML from the server.
This doesn't have to be all or nothing either, you don't need to make a completely universal application, just render something initially from the server.

Ship less code, he highlighted a few complex apps that achieved a lot without a huge amount of js.
Google Plus was redesigned recently and they set a target of 60kb of JavaScript.
Sound slice is an interesting app where sheet music follows audio, it weighs in at 94kb.
It may be hard but it's not impossible.

And we should use WebWorkers if we want to make fast web apps on mobile.

He was heavily inspired by Nolan Lawson's blog post detailing how he made pokedex.org, which uses ServiceWorker, IndexedDB and WebWorkers to make a progressive web app.

Nolan wrote "Ask any iOS or Android developer how we make our apps so fast, and most likely you'll hear about two major strategies. Eliminate network calls, and use background threads."
For us that means using things like ServiceWorker, persistent data stores like localStorage or IndexedDB and WebWorkers.

The key take out for me is this: "Anything unrelated to the UI should be offloaded to a background thread.".
This is very different to how I viewed WebWorkers previously.  We should be treating the Main Thread in JavaScript as the UI thread, responding to events, updating the DOM - Everything else belongs in a background thread.

feather-app is a proof of concept with these ideas, you can try it out at feather.surge.sh
It doesn't do much, it's a simple counter app with two pages.
It has server rendered HTML and all app state, logic and DOM diffing happens inside a worker.

Let's look at it.
