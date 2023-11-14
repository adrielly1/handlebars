const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

//configurando o handlebars como templates engine
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"))

// os arquivos públicos ficarão na porta public
app.get('/', (requisicao, resposta) => {
    resposta.render("Home")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000!")
})