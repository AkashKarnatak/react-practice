import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 8080
const corsOptions = {
  origin: '*',
}

async function initDB() {
  const db = await open({
    filename: './movies.db',
    driver: sqlite3.Database,
  })
  if (!(await db.get('SELECT * FROM sqlite_master WHERE name="movies"'))) {
    console.error('movies table not found! Run "node server/initDB.js"')
    process.exit(1)
  }
  return db
}

const app = express()
const db = await initDB()

app.get('/api/films', cors(corsOptions), (_, res) => {
  res.send({
    movies: [
      {
        id: 1,
        title: 'Some dummy title',
        openingText: 'This is some random opening text',
        releaseDate: '2022-12-11',
      },
      {
        id: 2,
        title: 'Some second dummy title',
        openingText: 'This is some second random opening text',
        releaseDate: '2022-12-14',
      },
    ],
  })
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
