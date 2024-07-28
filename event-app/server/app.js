import express from 'express'
import cors from 'cors'
import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

const PORT = process.env.PORT || 8080
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type'],
}

const initDB = async () => {
  try {
    const db = await open({
      filename: './events.db',
      driver: sqlite3.Database,
    })
    if (!(await db.get('SELECT * from sqlite_master where name = "events"'))) {
      console.error('Database not found. Run "node server/init-db.js" first.')
      process.exit(1)
    }
    return db
  } catch (e) {
    console.error(
      'Something went wrong when trying to create connection with database\n',
      e,
    )
    process.exit(1)
  }
}

const app = express()
const db = await initDB()

app.get('/api/events', cors(corsOptions), async (_, res) => {
  try {
    const events = await db.all('SELECT * FROM events')
    res.send({ events })
  } catch (e) {
    console.error(
      'Something went wrong while fetching events from database!\n',
      e,
    )
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
