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
      filename: './meals.db',
      driver: sqlite3.Database,
    })
    if (!(await db.get('SELECT * from sqlite_master where name = "meals"'))) {
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

app.get('/api/meals', cors(corsOptions), async (_, res) => {
  try {
    const meals = await db.all('SELECT * FROM meals')
    res.send({ meals })
  } catch (e) {
    console.error(
      'Something went wrong while fetching meals from database!\n',
      e,
    )
    res.sendStatus(500)
  }
})

app.options('/api/orders', cors(corsOptions))

app.post('/api/orders', cors(corsOptions), express.json(), async (req, res) => {
  try {
    await db.run(
      'INSERT INTO orders (firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.address,
    )
    res.sendStatus(200)
  } catch (e) {
    console.error(
      'Something went wrong while inserting meals into database!\n',
      e,
    )
    res.sendStatus(500)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
