const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'UP!'})

});

app.get('/calculadora', (req, res) => {
    const{action, num1, num2} = req.query;

    if (action != 'soma' || action != 'subtracao' || action != 'multiplicacao' || action != 'divisao') 
    return res.status(422).json({error: 'Por favor, insira uma ação valida.'})

    if (!action) return res.status(422).json({
        error: 'Por favor, informe uma  das ações: soma, subtracao, multiplicacao ou divisao.'
        
    })

    if (!num1) return res.status(422).json({
        error: 'Por favor, informe todos os valores.'
        
    })
    if (!num2) return res.status(422).json({
        error: 'Por favor, informe todos os valores.'
        
    })

    if (action == 'soma'){
        return res.status(200).json({result: parseInt(num1)+parseInt(num2)})
    }

    if (action == 'subtracao'){
        return res.status(200).json({result: parseInt(num1)-parseInt(num2)})
    }

    if (action == 'multiplicacao'){
        return res.status(200).json({result: parseInt(num1)*parseInt(num2)})
    }

    if (action == 'divisao'){
        return res.status(200).json({result: parseInt(num1)/parseInt(num2)})
    }


});


app.listen(3000);