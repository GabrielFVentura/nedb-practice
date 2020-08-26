module.exports = {

    user:(app, req, res)=>{

        req.assert('name', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'O e-mail está inválido.').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }

    },

    product:(app, req, res)=>{

        req.assert('name', 'O nome é obrigatório.').notEmpty();
        // req.assert('valor', 'O valor tem que conter $.').contains("$");
        // req.assert('valor', 'O valor tem que ser divisivel por 2.').isDivisibleBy(2);


        let errors = req.validationErrors();

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        } else {

            return true;

        }

    }
    
};