import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

async function initDB() {
  const db = await open({
    filename: './movies.db',
    driver: sqlite3.Database,
  })
  try {
    if (await db.get('SELECT * FROM sqlite_master WHERE name="movies"')) {
      console.error('movies table already exist')
      await db.close()
      process.exit(0)
    }
    await db.exec(
      'CREATE TABLE movies (id INTEGER PRIMARY KEY, title TEXT NOT NULL, openingText TEXT NOT NULL, releaseDate TEXT NOT NULL)',
    )
    console.log('Created movies table')
  } catch (e) {
    console.error('Failed to create movies table')
    await db.close()
    process.exit(0)
  }
  return db
}

const db = await initDB()

const dummyData = [
  {
    id: 4,
    title: 'A New Hope',
    openingText:
      "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
    releaseDate: '1977-05-25',
  },
  {
    id: 5,
    title: 'The Empire Strikes Back',
    openingText:
      'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
    releaseDate: '1980-05-17',
  },
  {
    id: 6,
    title: 'Return of the Jedi',
    openingText:
      'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
    releaseDate: '1983-05-25',
  },
  {
    id: 1,
    title: 'The Phantom Menace',
    openingText:
      'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
    releaseDate: '1999-05-19',
  },
  {
    id: 2,
    title: 'Attack of the Clones',
    openingText:
      'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....',
    releaseDate: '2002-05-16',
  },
  {
    id: 3,
    title: 'Revenge of the Sith',
    openingText:
      'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....',
    releaseDate: '2005-05-19',
  },
]

try {
  await db.run('BEGIN TRANSACTION')
  const stmt = await db.prepare(
    'INSERT INTO movies (title, openingText, releaseDate) VALUES (?, ?, ?)',
  )

  dummyData.forEach(async (x) => {
    await stmt.run(x.title, x.openingText, x.releaseDate)
  })

  await stmt.finalize()
  await db.run('COMMIT')

  console.log(`${dummyData.length} movies inserted successfully.`)
} catch (err) {
  await db.run('ROLLBACK')
  console.error('Error inserting movies:', err.message)
} finally {
  await db.close()
}
