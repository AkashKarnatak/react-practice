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
    setTimeout(() => {
      res.send({ events })
    }, 1000)
  } catch (e) {
    console.error(
      'Something went wrong while fetching events from database!\n',
      e,
    )
    res.sendStatus(500)
  }
})

app.get('/api/events/:id', cors(corsOptions), async (req, res) => {
  try {
    const event = await db.get(
      'SELECT * FROM events where id = ?',
      req.params.id,
    )
    setTimeout(() => {
      res.send({ event })
    }, 1000)
  } catch (e) {
    console.error(
      'Something went wrong while fetching event from database!\n',
      e,
    )
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
