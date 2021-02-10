# Objectives

* Create a simple quiz of 5 questions, each of which have three possible answers. Each answer has a score of 5, 10 or 15 points.
* Show one question at a time with active class / button navigation
* Store result in local storage
* On submission show redirect to results page with:
  * Total score as a percentage
  * Their rating: 0 - 33% = below average, 34% - 66% = average, 67% - 10% = above average
  * A simple bar chart showing their score per answer
  * Output their score and rating to a PDF

# Notes
* I presumed that you wanted to shuffle the order of the correct questions rather than giving the third answer the maximum points each time, but if not this is an easy change to rectify. 
* I assumed that 67% - 10% = above average was a typo and you meant 67 - 100%

# Possible Improvements
* Add progress bar showing current position and completed/incomplete questions. Make clickable as navigation.
