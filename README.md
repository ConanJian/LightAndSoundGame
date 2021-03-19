# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Conan Jian**

Time spent: **1.87** hours spent in total
(only the time it took to make the required functionality as well as a few comments)

Time for optional functions: 26minutes


Link to project: https://glitch.com/edit/#!/code-path-lightandsound?path=README.md%3A9%3A17

## Required Functionality

The following **required** functionality is complete:

* [done] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [done] "Start" button toggles between "Start" and "Stop" when clicked. 
* [done] Game buttons each light up and play a sound when clicked. 
* [done] Computer plays back sequence of clues including sound and visual cue for each button
* [done] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [done] User wins the game after guessing a complete pattern
* [done] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Done] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Button4 sounds different, the others sound great by default so I left them] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Done] More than 4 functional game buttons
* [Done] Playback speeds up on each turn
* [Done] Computer picks a different pattern each time the game is played
* [Done] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
[For all the required functionality:
-I googled how to get the length of an array. This website, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
, was the first thing that popped up.
-I also use your prework website: https://courses.codepath.org/snippets/summer_internship_for_tech_excellence/prework]

[For all optional features:
How Math.random() works: https://www.w3schools.com/jsref/jsref_random.asp
Need round up for Math.random(): https://www.w3schools.com/jsref/jsref_ceil.asp


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
[I would say that developing the game logic was probably the most difficult. I know that the tutorial practically gave me with that
flow diagram, but that doesn't mean I understand why the flow chart was made like that. Which is why I gave the code a little bit of thought
to better understand what was happening. When I have a vague idea of what to do, I started coding. This ended up with the code not working, but it
gave me a better grasp of the problem that I needed to solve. Then, I get out of my chair and start thinking while walking about.
After I thought about how to make the code(I was basically simulating what I wanted the code to do in my head), I wrote the program.
Then, I tested the program for bugs and then I'm done. That was the basic idea of what I did to figure out how to make the game logic.
However, I can get a lot more specific on my thinking process.
When I code, I usually do it in this order: simulate what I want to do, figure out how to do it, and then figure out how to code that.
]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[How often do web developers use logic in the front-end? 
What about the back-end? 
For front-end developers, do we need to figure out which colors to choose as well as all the spacing in the website by ourselves?(because I'm under the impression that, that is someone elses job)
Is it true that it is difficult to get a job as a junior back-end developer and therefore I should start as a front-end developer if I wish to become a back-end developer?
I'm under the assumption that back-end developers use logic and alogrithms a lot more in their work. Is this true?
What kind of work do back-end web developers do?
As a front-end web developer do I only need to know HTML, CSS, and JavaScript?
How often do front-end web developers have to develop projects that require the developer to use logic and js?
I heard that one interview I might get asked is something like, "Describe a diff"]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[I would probably make multiple different modes for the game. 
I would keep the current mode as original and use something like a drop down box to select the other modes.
(The start button will call startGame() and startGame will determine what game to start by calling the functions of those games)
Other modes I would implement would be: 
speed mode, where the holdClueTime variable would be very small constant.
(make function speedGame() where all the logic is the same just that playClueSequence doesn't change the holdClueTime)
; weird mode, where each button's size shift randomly every sequence making the pattern even harder to memorize
I will make a function that takes a button's id number as an arguement and use the button id to change the button's size.
I will call the function at the beginning of playClueSequence using a for loop currently iterate 5 times for 5 buttons
; endless mode, original mode but with an endless pattern (I would just keep adding to the arrays)
I would just make a call a function whenever a stage is finished that will do:
pattern.length++;
pattern[pattern.length-1]=5*Math.random();
]



## License

    Copyright [Your Name]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.