const pgformat = require('pg-format')
const data = [
  {
    "id": 1,
    "aku": "vidi",
    "kamu": "digidaw",
    "ticket": {
      "sampe": "sana",
      "sini": "sono"
    }
  },
  {
    "id": 2,
    "aku": "vini",
    "kamu": "dodo",
    "ticket": {
      "sampe": "sana",
      "sini": "sono"
    }
  },
  {
    "id": 3,
    "aku": "vici",
    "kamu": "lollo",
    "ticket": {
      "sampe": "sana",
      "sini": "sono"
    }
  },
  {
    "id": 4,
    "aku": "lope",
    "kamu": "asw",
    "ticket": {
      "sampe": "sana",
      "sini": "sono"
    }
  },
  {
    "id": 5,
    "aku": "frt",
    "kamu": "tuy",
    "ticket": {
      "sampe": "sana",
      "sini": "sono"
    }
  },
  {
    "id": 6,
    "aku": "iuop",
    "kamu": "opil",
    "ticket": {
      "sampe": "sana",
      "sini": "sono"
    }
  },
  {
    "id": 7,
    "aku": "loku",
    "kamu": "mui",
    "ticket": {
      "sampe": "sana",
      "sini": "sono"
    }
  },
]
const mapData = data.map(values => {
  // console.log(values)
  const format = [`${Number(values.id)}, '${values.aku}', '${values.kamu}', '${JSON.stringify(values.ticket)}', '${values.ticket.sampe}'`]
  return format
})
console.log(mapData)

const format = pgformat("INSERT INTO tbldata (id, nama, keterangan, data, posisi) VALUES %s", mapData)
console.log('format >> ', format);