# Lab - Intro To Node.js

### Introduction

In this lab, you will choose from among 3 possible project ideas, creating a small Node.js app that can take in input on the command line and give the user the answer they're looking for.

### Goal

When you're done, you'll have a small command-line app that anyone can download and run.

### Resources

Here are two excellent articles quickly summarizing `process.argv`:

- [Access Command Line Arguments Using process.argv in Node.js](https://www.webmound.com/nodejs-command-line-arguments/)
- [NodeJS process.argv property explained](https://sebhastian.com/nodejs-process-argv/)

### Potential App Choices

You can choose any 1 of the 3 choices below.

#### Dog Age Calculator

It's not _actually_ true that 1 dog year is 7 human years. Nor is the calculation we'll follow _quite_ right—to get a truly accurate picture of a dog's age, you need to take their size into account as well.

But for the purposes of this assignment, you will calculate a dog's real age with the following rules:

- Year 1 of a dog's life is 15 dog years
- Year 2 is the equivalent of another 9 years.
- Every year after that is the equivalent of another 5 years.

Some ages to try to make sure your app works:

- 1 human year -> 15 dog years
- 2 human years -> 24 dog years
- 10 human years -> 64 dog years

Your app will work with a dog's name and age in human years, and return a sentence about their age in dog years. Running `node dog-age-calculator-.js Maisie 3` should output: "Your dog, Maisie, is 3 years old, but that's 29 years old in dog years!"

Similarly, `node dog-age-calculator.js Ralph 4` will output, "Your dog, Ralph, is 4 years old, but that's 34 years old in dog years!"

#### Seasons and Stones

**WARNING**: this app choice necessitates considerably more code than the other 2.

The user will tell this app what month and hemisphere they were born in, and it will tell them their birthstone and what season they were born in.

Here is the chart to use for birthstones:

- January - Garnet
- February - Amethyst
- March - Bloodstone
- April - Diamond
- May - Emerald
- June - Alexandrite
- July - Carnelian ruby
- August - Sardonyx
- September - Sapphire
- October - Tourmaline
- November - Citrine
- December - Tanzanite

For seasons the user was born in, you should follow these rules:

- December-February are Winter in the Northern Hemisphere and Summer in the Southern.
- March-May are Spring in the Northern Hemisphere and Fall in the Southern.
- June-August are Summer in the Northern Hemisphere and Winter in the Southern.
- September-November are Fall in the Northern Hemisphere and Spring in the Southern.

Here are some example inputs and outputs:

- `node personality.js october northern` -> "You are a Fall Tourmaline."
- `node personality.js october southern` -> "You are a Spring Tourmaline."
- `node personality.js january northern` -> "You are a Winter Garnet."
- `node personality.js august northern` -> "You are a Winter Sardonyx."
- `node personality.js august southern` -> "You are a Summer Sardonyx."

#### Ride Share Fare Calculator

This app will calculate how much it will cost to ride with our Annie Cannons Rideshare App, acGO, given the distance you'll travel and the time of day.

The cost of a ride will be its distance times the rate. But acGO charges surge prices at common commute times.

The user will run the app with a command following the format `node acgo.js 3 11`, where the first number is the distance the user will travel and the second is the time (on a 24-hour clock) they're booking for.

If the time is between 7 and 10 (which is the morning) or between 16 and 19 (4pm and 7pm in standard American 12-hour clocks), then the rate is $7 for every 1 mile. For every other time, the rate if $4 for every 1 mile.

Here are some example inputs and their expected outputs:

- `node acgo.js 3 11` -> "The price for your ride with acGO today will be $12." (The rate is $4 since 11 is off-peak, multiplied by 3 miles.)
- `node acgo.js 5 9` -> "The price for your ride with acGO today will be $35 due to surge pricing." (The rate is $7 since 9 is a peak time, multiplied by 5 miles.)
- `node acgo.js 2 17` -> "The price for your ride with acGO today will be $14 due to surge pricing." (The rate is $7 since 17 is a peak time, multiplied by 2 miles.)
- `node acgo.js 10 20` -> "The price for your ride with acGO today will be $40." (The rate is $4 since 20 is off-peak, multiplied by 10 miles.)

### Bonus: Your Own Idea

Small Node apps can be a great way to not only get more practice with the Node environment, but more practice with pure JavaScript.

Once you're done with this lab, feel free to make and then show us all your own ideas come to life on the command line!
