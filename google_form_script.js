/**
 * Google Form Automatisches Erstellungsskript
 * Erstellt den Time Balance Diagnose-Fragebogen in 1 Klick in deinem Google Drive.
 * 
 * Anleitung:
 * 1. Gehe auf https://script.google.com
 * 2. Klicke auf "Neues Projekt"
 * 3. Füge diesen Code ein und klicke auf "Ausführen" (Run)
 * 4. Das fertige Google Formular liegt sofort in deinem Google Drive!
 */

function createTimeBalanceForm() {
  var form = FormApp.create('Time Balance – Diagnose-Fragebogen (Julia Geneberg)');
  form.setDescription('Herzlich willkommen! Dieser Fragebogen dient als Standortbestimmung (Punkt A) für dein Time Balance Mentoring. Bitte beantworte die Fragen ehrlich.');
  
  // Kontaktdaten
  form.addTextItem().setTitle('Dein Vor- und Nachname').setRequired(true);
  form.addTextItem().setTitle('Deine E-Mail-Adresse').setRequired(true);
  
  // Baustein 1: Energiemanagement
  form.addPageBreakItem().setTitle('Baustein 01: Energiemanagement').setHelpText('Analyse deiner physischen & mentalen Ressourcen');
  form.addMultipleChoiceItem().setTitle('1. Wachst du morgens gewöhnlich leicht und erholt auf?').setChoiceTitles(['Ja', 'Teilweise', 'Nein']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('2. Reicht deine Energie für den gesamten Tag aus?').setChoiceTitles(['Ja', 'Oft Nachmittagstief', 'Nein, oft erschöpft']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('3. Weißt du, wie du deine Energie im Laufe des Tages wiederherstellst?').setChoiceTitles(['Ja', 'Unsicher', 'Nein']).setRequired(true);
  form.addTextItem().setTitle('4. Wie viele Stunden schläfst du durchschnittlich & ist dein Schlaf erholsam?');
  form.addMultipleChoiceItem().setTitle('5. Hast du feste Wochenend-Tage, an denen du überhaupt nicht arbeitest?').setChoiceTitles(['Ja, regelmäßig', 'Selten', 'Nein, arbeite durch']).setRequired(true);
  form.addScaleItem().setTitle('6. Bewerte dein aktuelles Energielevel (0 = völlig erschöpft, 10 = voller Kraft)').setBounds(0, 10).setRequired(true);
  
  // Baustein 2: Klarheit im Kopf
  form.addPageBreakItem().setTitle('Baustein 02: Klarheit im Kopf').setHelpText('Wertesystem, Ausrichtung & Traum - Ziel - Plan (TZP)');
  form.addMultipleChoiceItem().setTitle('1. Kennst du deine Grundwerte und weißt, was dich wirklich erfüllt?').setChoiceTitles(['Ja, genau', 'Teilweise', 'Nein']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('2. Fällt es dir leicht, Wünsche und Träume zu formulieren?').setChoiceTitles(['Ja', 'Schwer']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('3. Kannst du ein großes Ziel in konkrete Schritte herunterbrechen (TZP-Kette)?').setChoiceTitles(['Ja', 'Manchmal', 'Nein, verzettele mich']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('4. Lobst du dich regelmäßig selbst für erreichte Erfolge?').setChoiceTitles(['Ja, regelmäßig', 'Selten / Vergesse es']).setRequired(true);
  
  // Baustein 3: Ordnung im Alltag
  form.addPageBreakItem().setTitle('Baustein 03: Ordnung im Alltag').setHelpText('GTD-Planung, Organisation & Routinen');
  form.addMultipleChoiceItem().setTitle('1. Planst du deinen Tag und deine Woche im Voraus (z.B. GTD)?').setChoiceTitles(['Ja, strukturiert', 'Unregelmäßig', 'Nein, nach Zurufe']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('2. Reicht dir deine verfügbare Zeit im Alltag für alles Wichtige?').setChoiceTitles(['Ja', 'Nein, ständiger Zeitmangel']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('3. Ist dein Arbeitsumfeld so organisiert, dass du mühelos Ordnung hältst?').setChoiceTitles(['Ja', 'Ausbaufähig', 'Nein, Chaos']).setRequired(true);
  
  // Baustein 4: Balance
  form.addPageBreakItem().setTitle('Baustein 04: Balance').setHelpText('Lebensrad, Aktivitäts-Peaks & Lebensfreude');
  form.addMultipleChoiceItem().setTitle('1. Kennst du deine persönlichen Aktivitäts-Peaks am Tag und richtest deinen Plan danach aus?').setChoiceTitles(['Ja', 'Nein']).setRequired(true);
  form.addMultipleChoiceItem().setTitle('2. Wie häufig befindest du dich in einem Zustand der Ruhe und Ausgeglichenheit?').setChoiceTitles(['Fast täglich', 'Gelegentlich', 'Selten bis nie']).setRequired(true);
  form.addParagraphTextItem().setTitle('3. Was ist aktuell deine allergrößte Herausforderung im Alltag?');
  
  Logger.log('Formular-Link zum Bearbeiten: ' + form.getEditUrl());
  Logger.log('Formular-Link für Kunden: ' + form.getPublishedUrl());
}
