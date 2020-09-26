I just wanted to include a little bit about why I was unable to finish the coding challenge, and how I may have finished it under better circumstances.

To start off, I had an extremely busy week with 2 exams, a paper, a PA, and an internship interview. To make matters worse, my laptop stopped working on Tuesday, and so I had to work with a rental from the library for the remainder of the week while mine was in repair. Between having to reason with professors to get an extension on several assignments and nearly missing my interview due to connection/laptop issues, I had little time to devote to this challenge. I am super bummed, because I was excited to take on this fun task and see what I could do. 

Working over the past weekend on this challenge, I was able to successfully make my developer account and get my key/secretKey and token/secretToken. I then created a JSON object working with Node.js to work with the tweets, which were classififed using the open source 'Twit' object from GitHub. With more time, I would have also used the bearer token for the fetch command to get tweets from both accounts, and then filtered to not include replies, retweets, images, etc. 

The loop would have looked something like this:

load 3200 most recent tweets from the 2 users
choose a tweet by using Math.random() function to iterate certain amount through the tweets and choose one
display tweet
prompt user for guess
notify whether correct or not
ask if user wants to play again-> "(Y/N)?" and have a global var answers = "YyNn" and check if player's response is in that string and therefore valid
if not valid, prompt for another response
continue loop while answer is yes 
end when no
display results

of course, this could easily be expanded to any 2 users by first asking the players for their 2 preferred accounts and putting those strings in the fetch/get request

I hope you still consider me for a position because this is a cause I am passionate about, and I am eager to start using my knowledge and skills for the common good while getting experience along the way. If you have any more questions, feel free to let me know.