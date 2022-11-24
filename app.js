const exp = require('express')
const app = exp()
app.use(exp.json())
const port = 3000
require('dotenv').config()
let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

//ADD
app.get('/v1/add/card/attch/:cardID&:url', (req, res) => {
    console.log(`Se consulta servicio que inserta un link en una tarjeta`);
    try {
        if (process.env.TOKEN && process.env.KEY){
            if(req.params.boardID.length = 24){
                trello.addAttachmentToCard(req.params.cardID, req.params.url,
                    function (error, trelloCard) {
                        if (error) {
                            console.log('Could not add card:', error);
                        }
                        else {
                            console.log('Added card:', trelloCard);
                            res.status(200).json(trelloCard)
                        }
                    }
                );
            }
        }else{
            console.log('Fallo');
            res.status(400).json(`Falta llave para acceso a trello`)
        }
    }catch(error){
        console.log('Fallo');
        res.status(400).json(`Error durante ejecucion ${error}`)
    }
})

app.get('/v1/add/board/:name&:description&:organizationID?', (req, res) => {
    console.log(`Se consulta servicio que crea un tablero`);
    try {
        if (process.env.TOKEN && process.env.KEY){
            if(req.params.boardID.length = 24){
                trello.addBoard(req.params.name, req.params.description, (req.params.descriptionID ? req.params.descriptionID : ''),
                    function (error, trelloCard) {
                        if (error) {
                            console.log('Could not add card:', error);
                        }
                        else {
                            console.log('Added card:', trelloCard);
                            res.status(200).json(trelloCard)
                        }
                    }
                );
            }
        }else{
            console.log('Fallo');
            res.status(400).json(`Falta llave para acceso a trello`)
        }
    }catch(error){
        console.log('Fallo');
        res.status(400).json(`Error durante ejecucion ${error}`)
    }
})

app.get('/v1/add/card/:cardTitle&:cardDescription&:boardID', (req, res) => {
    console.log(`Se consulta servicio que crea una tarjeta`);
    try {
        if (process.env.TOKEN && process.env.KEY){
            if(req.params.boardID.length = 24){
                trello.addCard(req.params.cardTitle, req.params.cardDescription, req.params.boardID,
                    function (error, trelloCard) {
                        if (error) {
                            console.log('Could not add card:', error);
                        }
                        else {
                            console.log('Added card:', trelloCard);
                            res.status(200).json(trelloCard)
                        }
                    }
                );
            }
        }else{
            console.log('Fallo');
            res.status(400).json(`Falta llave para acceso a trello`)
        }
    }catch(error){
        console.log('Fallo');
        res.status(400).json(`Error durante ejecucion ${error}`)
    }
})

app.get('/v1/add/card/extaparams/:nombre&:extraParams&:listID', (req, res) => {
    console.log(`Se consulta servicio que crea una tarjeta con paramtros extras`);
    try {
        if (process.env.TOKEN && process.env.KEY){
            if(req.params.boardID.length = 24){
                trello.addCardWithExtraParams(req.params.nombre, req.params.extraParams, req.params.listID,
                    function (error, trelloCard) {
                        if (error) {
                            console.log('Could not add card:', error);
                        }
                        else {
                            console.log('Added card:', trelloCard);
                            res.status(200).json(trelloCard)
                        }
                    }
                );
            }
        }else{
            console.log('Fallo');
            res.status(400).json(`Falta llave para acceso a trello`)
        }
    }catch(error){
        console.log('Fallo');
        res.status(400).json(`Error durante ejecucion ${error}`)
    }
})

app.get('/v1/add/card/checklist/:cardID&:name', (req, res) => {
    console.log(`Se consulta servicio que crea un checklist en una tarjeta `);
    try {
        if (process.env.TOKEN && process.env.KEY){
            if(req.params.boardID.length = 24){
                trello.addChecklistToCard(req.params.cardID, req.params.name,
                    function (error, trelloCard) {
                        if (error) {
                            console.log('Could not add card:', error);
                        }
                        else {
                            console.log('Added card:', trelloCard);
                            res.status(200).json(trelloCard)
                        }
                    }
                );
            }
        }else{
            console.log('Fallo');
            res.status(400).json(`Falta llave para acceso a trello`)
        }
    }catch(error){
        console.log('Fallo');
        res.status(400).json(`Error durante ejecucion ${error}`)
    }
})

//DELETE
app.get('/v1/delete/:cardID', (req, res) => {
    console.log(`Se consulta servicio que elimina una card`);

    try {
        if (process.env.TOKEN && process.env.KEY){
            if(req.params.cardID.length = 24){
                trello.deleteCard(req.params.cardID,
                    function (error, trelloCard) {
                        if (error) {
                            console.log('Could not delete card:', error);
                        }
                        else {
                            console.log('Delete card:', trelloCard);
                            res.status(200).json('Se elimino correctamente')
                        }
                    }
                );
            }
        }else{
            console.log('Fallo');
            res.status(400).json(`Falta llave para acceso a trello`)
        }
    }catch(error){
        console.log('Fallo');
        res.status(400).json(`Error durante ejecucion ${error}`)
    }
})

app.listen(port, () => {
    console.log(`Servicio de modificacion de tableros en Trello`);
})