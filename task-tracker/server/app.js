import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 8080
const corsOptions = {
  origin: '*',
  allowedHeaders: ['Content-Type'],
}

const initDB = async () => {
  try {
    const db = await open({
      filename: './tasks.db',
      driver: sqlite3.Database,
    })
    await db.exec(
      'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY, task TEXT NOT NULL)',
    )
    return db
  } catch (e) {
    console.error('Unable to connect to DB\n', e)
    process.exit(1)
  }
}

const db = await initDB()

const app = express()

app.get('/api/tasks', cors(corsOptions), async (_, res) => {
  try {
    const tasks = await db.all('SELECT * FROM tasks')
    res.send(tasks)
  } catch (e) {
    console.error('Unable to fetch tasks from db\n', e)
    res.sendStatus(500)
  }
})

app.options('/api/tasks', cors(corsOptions))

app.post('/api/tasks', cors(corsOptions), express.json(), async (req, res) => {
  try {
    await db.run('INSERT INTO tasks (task) VALUES (?)', req.body.task)
    res.sendStatus(200)
  } catch (e) {
    console.error('Unable to insert task into db\n', e)
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.error(`Listening on port ${PORT}`)
})
