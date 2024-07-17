import express from 'express'
import cors from 'cors'

const PORT = process.env.PORT || 8080

const app = express()

const corsOptions = {
  origin: '*'
}

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
