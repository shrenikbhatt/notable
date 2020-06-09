const express = require('express')
const next = require('next')
const client = require('./database')

const auth = require('./routes/auth')
const notes = require('./routes/notes')


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000;

    
app.prepare()
.then(() => {
  const server = express()

  server.use(express.json())

  // Routes
  server.use('/api/auth', auth);
  server.use('/api/notes', notes)
    
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  
    
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:'+PORT)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})