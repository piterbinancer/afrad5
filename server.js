const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.json(`<h1>سلام دنیای جدید من</h1>`)
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})