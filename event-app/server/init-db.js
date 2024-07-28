import events from '../src/assets/events.js'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function initDB() {
  try {
    const db = await open({
      filename: './events.db',
      driver: sqlite3.Database,
    })
    await db.exec(
      'CREATE TABLE events (id INTEGER PRIMARY KEY, title TEXT NOT NULL, image TEXT NOT NULL, date TEXT NOT NULL, desc TEXT NOT NULL)',
    )
    return db
  } catch (e) {
    console.error('Unable to initialize database\n', e)
    return process.exit(1)
  }
}

const db = await initDB()

try {
  await db.exec('BEGIN TRANSACTION')

  const stmt = await db.prepare(
    'INSERT INTO events (title, image, date, desc) VALUES (?, ?, ?, ?)',
  )
  events.map(async (x) => await stmt.run(x.title, x.image, x.date, x.desc))
  await stmt.finalize()

  await db.exec('COMMIT')
  console.log(`${events.length} events inserted into database successfully!`)
} catch (e) {
  await db.exec('ROLLBACK')
  console.error('Error inserting event:', e)
} finally {
  await db.close()
}
