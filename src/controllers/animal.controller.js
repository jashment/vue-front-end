const Animal = require('../models/animal.model');


exports.test = function (req, res) {
    res.send('Greetings from the Test Controller!')
}

exports.animals_all = (req, res, next) => {
    Animal.find({})
    .then(allAnimals => {
        console.log(allAnimals)
        res.render('all-animals', {
            animals: allAnimals
        })
    })
    .catch(err => console.log(err))
}

exports.animal_create = (req, res, next) => {
    let animal = new Animal(
        {
            name: req.body.name,
            description: req.body.description,
            url: req.body.url
        }
    );

    animal.save(function (err) {
        if (err) {
            return next(err)
        }
        res.send('Animal Created successfully')
    })
};

exports.animal_details = (req, res, next) => {
    Animal.findById(req.params.id, function (err, animal) {
        if (err) return next(err)
        res.send(animal)
    })
}

exports.animal_update = function (req, res, next) {
    Animal.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, animal) {
        if (err) return next(err)
        res.send('Animal udpated.')
    })
}

exports.animal_delete = function (req, res, next) {
    Animal.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully')
    })
}