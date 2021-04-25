const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.json('Wlcome to my App.com 777777777ooo')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})