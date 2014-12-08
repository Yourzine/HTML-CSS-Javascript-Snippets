function sendReservation() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('reservation').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Yourzine Reservation Test',
    htmlBody: htmlBody,
  });
}

function sendParcelDelivery() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('ParcelDelivery').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Yourzine Parcel Test',
    htmlBody: htmlBody,
  });
}

function sendReviewRequest() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('Reviews').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Yourzine Review Test',
    htmlBody: htmlBody,
  });
}

function sendKomJijOok() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('KomJijOok').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Yourzine RSVP Test',
    htmlBody: htmlBody,
  });
}

function sendDirectPrint() {
  var htmlBody = HtmlService.createHtmlOutputFromFile('DirectPrint').getContent();

  MailApp.sendEmail({
    to: Session.getActiveUser().getEmail(),
    subject: 'Yourzine Directe Print Test',
    htmlBody: htmlBody,
  });
}