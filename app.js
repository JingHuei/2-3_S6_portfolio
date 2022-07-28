
const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')



// 定義要使用的樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// 告訴 Express 靜態檔案是放在名為 public 的資料夾中
app.use(express.static('public'))

app.get('/', (req, res) => {res.render('index')})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})
