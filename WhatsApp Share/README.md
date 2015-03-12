Share on Whatsapp with e-mail (super easy)
============================

Delen via Whatsapp waarbij de applicatie automatisch opent met een vooraf ingestelde tekst.

Ik heb een quick-fix workaround gemaakt om het delen via Whatsapp voor alle e-mailclients mogelijk te maken.
Omdat niet alle clients (alleen iOS) direct de Whatsapp functie ondersteunen heb ik een pagina aangemaakt waar alleen het scriptje uit WhatsappShare.html op runt. 

Met een probe en een flow-level link kan vervolgens naar deze pagina worden verwezen.
Deze opent, verwijst de gebruiker naar Whatsapp en sluit zichzelf vervolgens weer. 

Achter text= komt de tekst en eventueel link naar het Whatsapp bericht. Meer is het niet!

Dan moet je er alleen zelf nog voor zorgen dat de button alleen getoond wordt op mobiel.
Hierbij kan mijn andere commit over Gmail hide ook van pas komen.
