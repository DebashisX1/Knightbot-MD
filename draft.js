
//syntax of text message
await sock.sendMessage(chatId, {
   text: 'Your message here',
   // Optional properties
   mentions: ['1234567890@s.whatsapp.net'], // For mentioning users
   contextInfo: {
      forwardingScore: 999,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
         newsletterJid: '120363161513685998@newsletter',
         newsletterName: 'KnightBot MD',
         serverMessageId: -1
      }
   }
}, { quoted: message });


//syntax of image message
await sock.sendMessage(chatId, {
   image: { url: 'https://example.com/image.jpg' }, // or Buffer
   caption: 'Image caption',
   // Optional properties
   jpegThumbnail: Buffer, // Thumbnail buffer
   viewOnce: false,
   width: 800,
   height: 600,
   quality: 90
}, { quoted: message });


//syntax of video message
await sock.sendMessage(chatId, {
   video: { url: 'https://example.com/video.mp4' }, // or Buffer
   caption: 'Video caption',
   // Optional properties
   jpegThumbnail: Buffer,
   viewOnce: false,
   width: 800,
   height: 600,
   quality: 90,
   seconds: 30 // Duration in seconds
}, { quoted: message });


//syntax of sticker message
await sock.sendMessage(chatId, {
   sticker: Buffer, // WebP buffer
   // Optional properties
   packname: 'Pack Name',
   author: 'Author Name'
}, { quoted: message });


//syntax of audio message
await sock.sendMessage(chatId, {
   audio: { url: 'https://example.com/audio.mp3' }, // or Buffer
   // Optional properties
   mimetype: 'audio/mp4', // or 'audio/mpeg'
   ptt: false, // Set to true for voice note
   seconds: 30 // Duration in seconds
}, { quoted: message });


//syntax of document message
await sock.sendMessage(chatId, {
   document: { url: 'https://example.com/document.pdf' }, // or Buffer
   fileName: 'document.pdf',
   mimetype: 'application/pdf',
   // Optional properties
   caption: 'Document caption',
   pageCount: 10, // For PDFs
   jpegThumbnail: Buffer
}, { quoted: message });


//syntax of location message
await sock.sendMessage(chatId, {
   location: {
      degreesLatitude: 37.7749,
      degreesLongitude: -122.4194,
      name: "Location Name",
      address: "Address details"
   }
}, { quoted: message });


//syntax of contacts message
await sock.sendMessage(chatId, {
   contacts: {
      displayName: 'Contact Name',
      contacts: [{
         vcard: 'BEGIN:VCARD\nVERSION:3.0\nFN:Contact Name\nTEL:+1234567890\nEND:VCARD'
      }]
   }
}, { quoted: message });


//syntax of react message
await sock.sendMessage(chatId, {
   react: {
      text: '🤖', // Emoji
      key: message.key
   }
});


//syntax of poll message
await sock.sendMessage(chatId, {
   poll: {
      name: 'Poll Question',
      values: ['Option 1', 'Option 2', 'Option 3'],
      selectableCount: 1 // Number of selectable options
   }
}, { quoted: message });


//syntax of list message
await sock.sendMessage(chatId, {
   text: 'Select an option:',
   buttonText: 'Menu',
   sections: [{
      title: 'Section Title',
      rows: [{
         title: 'Option 1',
         description: 'Description 1',
         rowId: 'option1'
      }, {
         title: 'Option 2',
         description: 'Description 2',
         rowId: 'option2'
      }]
   }]
}, { quoted: message });


