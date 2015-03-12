Display none in Gmail
============================

Maar display:none; is toch niet mogelijk in Gmail? 
Klopt, maar in combinatie met wat andere CSS is het toch voor elkaar te krijgen om een element te verstoppen in Gmail. 

De snippet laat zien hoe het werkt. Ik heb veel andere methoden geprobeerd maar vooralsnog geen succes.

De media queries zorgen er voor dat in de clients die wel CSS accepteren en met een scherm kleiner van 480px het element wel getoond word.

Om ook te zorgen dat de oudere Outlook versies het element verstoppen zijn de <!--[if !mso 9]><!--> tags toegevoegd. 



Helaas is dit niet de oplossing om het mobiel wel te tonen en anders niet in Gmail. 
Maar wel om te zorgen dat mobiele content in ieder geval niet getoond word in de desktop versie van Gmail. Helaas sluit je Gmail mobiel dan ook uit.