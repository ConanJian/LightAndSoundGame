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
Random Patterns and Stopping
![](https://i.imgur.com/ZFEQn40.gif)

Really Fast Demo, the video goes too fast so you can't see it light up when I click it
![](https://i.imgur.com/LmKopoh.gif)

Proof Winning exist
![](https://i.imgur.com/XhtE1Pg.gif)

Proof Losing exists
![](https://i.imgur.com/cFwUf5h.gif)

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
[A challenge I encountered while creating this project, was the creation of the code for the game logic.
I had a difficult time figuring out what to put inside the logic because event activated code was so different from the code that I am used to.
In fact, I first envisioned the code as java code and began by writing a for-loop which would manage the whole game.
I quickly realized that a for-loop would be a problem for this code because the user would call the for loop every time they pressed a button which isn't what we want.
My confusion came from the fact that I thought that the code I was writing would govern the entire game, so I was using for-loops to call playClueSequence 8 times(Array size).
I realized that I don't know what to do because my understanding was insufficent, therefore I simulated the game playing in my mind.
By simulating the game, I was able to figure out what I wanted and how to make what I wanted become a reality using javascript.
So, I got to work making the game and when I thought I was done I went to test my code.
It didn't work(played the first two pattern, but ended at the third saying I guess wrong), so I started testing by using console.log to figure out if there was an issue with my if control structure.
I found that there was no problem, so I started simulating what my code did to manually find the problem.
It turns out that I was using pattern[progess] which was something I coded when I was still confused.
So, I quickly realized that progress is definitely the wrong variable to put in there and after a minute or so I realized that guessCounter would be the perfect variable to put in pattern[].
After I fixed that one mistake, my code ran fine and I checked my answer after testing my code again.
--Notes--Does this count as a challenge? because I couldn't think of anything else that was difficult and even then this isn't really considered challenging to me. 
I was able to write the answer in 27 minutes.]

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[How often do web developers use logic in the front-end? 
What about the back-end? 
For front-end developers, do we need to figure out which colors to choose as well as all the spacing in the website by ourselves?(because I'm under the impression that, that is someone elses job)
Is it true that it is difficult to get a job as a junior back-end developer and therefore I should start as a front-end developer if I wish to become a back-end developer?
I'm under the assumption that back-end developers use logic and alogrithms a lot more in their work. Is this true?
What kind of work do back-end web developers do?
As a front-end web developer do I only need to know HTML, CSS, and JavaScript?
How often do front-end web developers have to develop projects that require the developer to use logic and js?
This question is more of a general question:
When you guys asked in Q2, "What was a challenge you encountered in creating this submission", what did you mean by challenge?
Because for me a challenge is more like when you have a goal you don't know if you can accomplish and you try to do it anyways.
And that in the process of reaching your goal you have to come to several realizations before achieve that goal.
For example, research, complex math problems, making a complicated algorithm]

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
