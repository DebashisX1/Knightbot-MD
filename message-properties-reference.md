# WhatsApp Message Properties Reference

## Universal Properties (Can be used with ALL message types)

| Property | Type | Use/Outcome |
|----------|------|-------------|
| `quoted` | Object | Replies to a specific message. Shows the quoted message above your message |
| `contextInfo` | Object | Contains metadata about the message (forwarding info, mentions, etc.) |
| `edit` | String | Used to edit a previously sent message (specifies message ID) |

## ContextInfo Universal Properties

| Property | Type | Use/Outcome |
|----------|------|-------------|
| `forwardingScore` | Number | Number of times the message has been forwarded |
| `isForwarded` | Boolean | Marks the message as forwarded |
| `forwardedNewsletterMessageInfo` | Object | Newsletter forwarding information |
| `mentionedJid` | Array | List of user JIDs to mention in the message |
| `externalAdReply` | Object | External ad reply with thumbnail and link |

## Message Type Specific Properties

### TEXT Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `text` | String | **Required** - The text content of the message |
| `mentions` | Array | Mentions specific users using their JIDs |

### IMAGE Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `image` | Object/Buffer | **Required** - Image source (URL or Buffer) |
| `caption` | String | Text description below the image |
| `jpegThumbnail` | Buffer | Custom thumbnail for the image |
| `viewOnce` | Boolean | Message disappears after viewing (true/false) |
| `width` | Number | Image width in pixels |
| `height` | Number | Image height in pixels |
| `quality` | Number | Image quality (0-100) |

### VIDEO Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `video` | Object/Buffer | **Required** - Video source (URL or Buffer) |
| `caption` | String | Text description below the video |
| `jpegThumbnail` | Buffer | Custom thumbnail for the video |
| `viewOnce` | Boolean | Message disappears after viewing |
| `width` | Number | Video width in pixels |
| `height` | Number | Video height in pixels |
| `quality` | Number | Video quality (0-100) |
| `seconds` | Number | Video duration in seconds |
| `gifPlayback` | Boolean | Treat as GIF (loops automatically) |

### STICKER Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `sticker` | Buffer | **Required** - WebP format sticker buffer |
| `packname` | String | Sticker pack name |
| `author` | String | Sticker author name |

### AUDIO Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `audio` | Object/Buffer | **Required** - Audio source (URL or Buffer) |
| `mimetype` | String | Audio MIME type (audio/mp4, audio/mpeg, etc.) |
| `ptt` | Boolean | Push-to-talk (true = voice note, false = audio file) |
| `seconds` | Number | Audio duration in seconds |
| `waveform` | Array | Audio waveform data for visualization |

### DOCUMENT Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `document` | Object/Buffer | **Required** - Document source (URL or Buffer) |
| `fileName` | String | Display name of the file |
| `mimetype` | String | File MIME type |
| `caption` | String | Text description below the document |
| `pageCount` | Number | Number of pages (for PDFs) |
| `jpegThumbnail` | Buffer | Custom thumbnail for the document |
| `fileLength` | String | File size display text |

### LOCATION Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `location` | Object | **Required** - Location coordinates and info |
| `degreesLatitude` | Number | **Required** - Latitude coordinate |
| `degreesLongitude` | Number | **Required** - Longitude coordinate |
| `name` | String | Location name/title |
| `address` | String | Full address description |
| `url` | String | Google Maps URL for the location |

### CONTACT Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `contacts` | Object | **Required** - Contact information object |
| `displayName` | String | Display name for the contact group |
| `contacts` | Array | Array of contact objects with vCard data |

### REACTION Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `react` | Object | **Required** - Reaction object |
| `text` | String | **Required** - Emoji to react with |
| `key` | Object | **Required** - Message key to react to |

### POLL Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `poll` | Object | **Required** - Poll configuration |
| `name` | String | **Required** - Poll question/title |
| `values` | Array | **Required** - Array of poll options |
| `selectableCount` | Number | Number of options users can select |
| `toAnnouncementGroup` | Boolean | Send to announcement groups only |

### LIST/INTERACTIVE Messages
| Property | Type | Use/Outcome |
|----------|------|-------------|
| `text` | String | **Required** - Main message text |
| `buttonText` | String | **Required** - Button display text |
| `sections` | Array | **Required** - Array of section objects |
| `title` | String | Section title |
| `rows` | Array | Array of row options |
| `rowId` | String | Unique identifier for each option |
| `description` | String | Description for each option |

## Advanced ContextInfo Properties

| Property | Type | Use/Outcome |
|----------|------|-------------|
| `stanzaId` | String | Message stanza ID for context |
| `participant` | String | Participant JID who sent the message |
| `quotedMessage` | Object | The actual quoted message content |
| `remoteJid` | String | Remote chat JID |

## External Ad Reply Properties

| Property | Type | Use/Outcome |
|----------|------|-------------|
| `title` | String | Ad title |
| `body` | String | Ad body text |
| `mediaType` | Number | Media type (1=image, 2=video) |
| `thumbnailUrl` | String | Thumbnail image URL |
| `mediaUrl` | String | Media content URL |
| `sourceUrl` | String | Click-through URL |
| `containsAutoReply` | Boolean | Auto-reply flag |
| `renderLargerThumbnail` | Boolean | Show larger thumbnail |

## Newsletter Forwarding Properties

| Property | Type | Use/Outcome |
|----------|------|-------------|
| `newsletterJid` | String | Newsletter JID |
| `newsletterName` | String | Newsletter display name |
| `serverMessageId` | Number | Server message ID |

## Usage Examples

### Basic Text with Universal Properties
```javascript
await sock.sendMessage(chatId, {
    text: 'Hello @user!',
    mentions: ['1234567890@s.whatsapp.net'],
    contextInfo: {
        forwardingScore: 1,
        isForwarded: false,
        mentionedJid: ['1234567890@s.whatsapp.net']
    }
}, { quoted: message });
```

### Image with All Optional Properties
```javascript
await sock.sendMessage(chatId, {
    image: { url: 'https://example.com/image.jpg' },
    caption: 'Check out this image!',
    jpegThumbnail: thumbnailBuffer,
    viewOnce: false,
    width: 800,
    height: 600,
    quality: 90,
    contextInfo: {
        externalAdReply: {
            title: 'External Content',
            body: 'Click to view more',
            thumbnailUrl: 'https://example.com/thumb.jpg',
            sourceUrl: 'https://example.com'
        }
    }
}, { quoted: message });
```
