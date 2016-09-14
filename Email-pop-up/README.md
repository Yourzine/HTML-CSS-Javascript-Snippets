## Pop-up box with Youtube-vid in e-mail

## Instructions

-  Add the css on the top between the style tags (Part I) to the head of the email.
-  Give id's to the a-elements that should make a youtube-vid pop-up, name them video1, video2, etc (see Part II as an example).
-  Remove the _target blank from the a-elements, so it won't open a new window everytime the pop-up opens.
-  Add a link to the online version + parameters to the censors in the a elements that make the video pop-up, like this: ~PROBE(0)~&popup=1, ~PROBE(0)~&popup=2. the a element of id video1 should have the parameter &popup=1, video2 should have &popup=2 etc
-  Add the youtube-vid id's to the array in the script on the bottom (Part III), the id is the part behind 'https://www.youtube.com/watch?v=', so for example 'psg83rsM53c'. You can add as many as you like, as long as you have the same amount of id's and parameters to correspond with them.
