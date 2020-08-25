let NeDB = require('nedb');
let db = new NeDB({
    filename:'products.db',
    autoload:true
});

module.exports = app => {

    let route = app.route('/products');

    route.get((req, res) => {

        db.find({}).sort({name:1}).exec((err, products)=>{

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    products
                });

        });

    });

    route.post((req, res) => {
        
        db.insert(req.body, (err, product)=>{

            res.status(200).json(product);

        });

    });

    let routeId = app.route('/products/:id');

    routeId.get((req, res) => {

        db.findOne({_id:req.params.id}).exec((err, product)=>{

            res.status(200).json(product);

        });

    });

    routeId.put((req, res) => {
        
        db.update({ _id: req.params.id }, req.body, err => {

            res.status(200).json(Object.assign(req.params, req.body));

        });

    });
    
    routeId.delete((req, res)=>{

        db.remove({ _id: req.params.id }, {}, err=>{

            res.status(200).json(req.params);

        });

    });

};