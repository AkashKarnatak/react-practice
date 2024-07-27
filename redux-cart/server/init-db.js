import products from '../src/assets/products.js'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function initDB() {
  try {
    const db = await open({
      filename: './products.db',
      driver: sqlite3.Database,
    })
    await db.exec(
      'CREATE TABLE products (id INTEGER PRIMARY KEY, name TEXT NOT NULL, desc TEXT NOT NULL, price INTEGER NOT NULL)',
    )
    // await db.exec(
    //   'CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, firstName TEXT NOT NULL, lastName TEXT NOT NULL, email TEXT NOT NULL, address TEXT NOT NULL)',
    // )
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
    'INSERT INTO products (name, desc, price) VALUES (?, ?, ?)',
  )
  products.map(async (x) => await stmt.run(x.name, x.desc, x.price))
  await stmt.finalize()

  await db.exec('COMMIT')
  console.log(
    `${products.length} products inserted into database successfully!`,
  )
} catch (e) {
  await db.exec('ROLLBACK')
  console.error('Error inserting movies:', e)
} finally {
  await db.close()
}
