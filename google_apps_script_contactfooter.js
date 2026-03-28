// ============================================================
// Google Apps Script — ContactFooter Form Handler
// Deploy as: Web App → Execute as: Me → Access: Anyone
// ============================================================

const SHEET_ID = '1oAq3m3JMvec_BCkd5zSl74Q_JnLOCpxOnzFO352uwpM'; // ← Replace with your Sheet ID

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.sheetName || 'general_contact';

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(sheetName);

    // Create sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // ── Column Headers ──────────────────────────────────────
    // If sheet is empty, write the header row first
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'Phone Number',
        'Location',
        'Topic',
        'Background',
        'Source',          // ← was missing
        'Message',
        'Authorized'
      ]);

      // Style header row
      const headerRange = sheet.getRange(1, 1, 1, 10);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#520378');
      headerRange.setFontColor('#ffffff');
    }

    // ── Write Data Row ──────────────────────────────────────
    sheet.appendRow([
      new Date(),                          // Timestamp
      data.fullName   || '',               // Full Name
      data.email      || '',               // Email
      data.phoneNumber || '',              // Phone Number
      data.location   || '',              // Location
      data.topic      || '',               // Topic
      data.background || '',              // Background
      data.source     || '',               // Source  ← key fix
      data.message    || '',               // Message
      data.authorized ? 'Yes' : 'No'      // Authorized
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: handle GET (for testing the deployment is live)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'ContactFooter script is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
