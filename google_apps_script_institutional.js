// ============================================================
// Google Apps Script — InstitutionalContact Form Handler
// Handles 4 form types → each goes to its own sheet tab:
//   - Corporate-EAP     → sheet: "corporate-eap"
//   - School-Based      → sheet: "school-based"
//   - College-Based     → sheet: "college-based"
//   - Career-Counselling→ sheet: "career-counselling"
//
// Deploy as: Web App → Execute as: Me → Access: Anyone
// ============================================================

const SHEET_ID = '18oDI4WvdAJr1yO8eYt9UT8cRITWAAddaRsgdvOO0DeY';

// Column definitions per sheet type
const SHEET_CONFIGS = {
  'corporate-eap': {
    headers: [
      'Timestamp', 'Full Name', 'Work Email', 'Phone Number',
      'Designation', 'Organization Name', 'No. of Employees',
      'Interested In', 'Message', 'Authorized'
    ],
    mapper: (d) => [
      new Date(),
      d.fullName        || '',
      d.workEmail       || '',
      d.phoneNumber     || '',
      d.designation     || '',
      d.institutionName || '',
      d.numberOfEmployees || '',
      d.interestedIn    || '',
      d.message         || '',
      d.authorized ? 'Yes' : 'No'
    ]
  },
  'school-based': {
    headers: [
      'Timestamp', 'Full Name', 'Work Email', 'Phone Number',
      'Institution Name', 'Designation', 'Board', 'Location',
      'Interested In', 'Message', 'Authorized'
    ],
    mapper: (d) => [
      new Date(),
      d.fullName        || '',
      d.workEmail       || '',
      d.phoneNumber     || '',
      d.institutionName || '',
      d.designation     || '',
      d.board           || '',
      d.location        || '',
      d.interestedIn    || '',
      d.message         || '',
      d.authorized ? 'Yes' : 'No'
    ]
  },
  'college-based': {
    headers: [
      'Timestamp', 'Full Name', 'Work Email', 'Phone Number',
      'Institution Name', 'Designation', 'Location',
      'Interested In', 'Message', 'Authorized'
    ],
    mapper: (d) => [
      new Date(),
      d.fullName        || '',
      d.workEmail       || '',
      d.phoneNumber     || '',
      d.institutionName || '',
      d.designation     || '',
      d.location        || '',
      d.interestedIn    || '',
      d.message         || '',
      d.authorized ? 'Yes' : 'No'
    ]
  },
  'career-counselling': {
    headers: [
      'Timestamp', 'Full Name', 'Work Email', 'Phone Number',
      'Institution Name', 'Designation', 'Location',
      'Interested In', 'Message', 'Authorized'
    ],
    mapper: (d) => [
      new Date(),
      d.fullName        || '',
      d.workEmail       || '',
      d.phoneNumber     || '',
      d.institutionName || '',
      d.designation     || '',
      d.location        || '',
      d.interestedIn    || '',
      d.message         || '',
      d.authorized ? 'Yes' : 'No'
    ]
  }
};

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.sheetName || 'corporate-eap';

    const config = SHEET_CONFIGS[sheetName];
    if (!config) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'error', message: 'Unknown sheetName: ' + sheetName }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(sheetName);

    // Create sheet tab if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }

    // Write headers on first use
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(config.headers);

      // Style header row
      const headerRange = sheet.getRange(1, 1, 1, config.headers.length);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#520378');
      headerRange.setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    // Write the data row
    sheet.appendRow(config.mapper(data));

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'InstitutionalContact script is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
