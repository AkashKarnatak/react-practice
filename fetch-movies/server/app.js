import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 8080
const corsOptions = {
  origin: '*',
  allowHeaders: ['Content-Type'],
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

app.get('/api/films', cors(corsOptions), async (_, res) => {
  try {
    const movies = await db.all('SELECT * from movies')
    res.send({ movies })
  } catch (e) {
    res.sendStatus(500)
  }
})

app.post('/api/films', cors(corsOptions), express.json(), async (req, res) => {
  try {
    await db.run(
      'INSERT INTO movies (title, openingText, releaseDate) VALUES (?, ?, ?)',
      req.body.title,
      req.body.openingText,
      req.body.releaseDate,
    )
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
