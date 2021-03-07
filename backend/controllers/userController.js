const user = require('../models').user;

exports.read = async (req, res) => {
  try {
    
    return user.findAll({})
              .then(user => res.status(200).send(user))
              .catch(error => res.status(400).send(error))
  } catch (err) {
    res.status(404).send(err)
  }
}

exports.readById = async (req, res) => {
  try {
    
    return user.findAll({
      where: {
            name: req.body.name,
      }
    })
    .then(user => res.status(200).send(user))
    .catch(error => res.status(400).send(error))
  } catch (err) {
    res.status(404).send(err)
  }
}

exports.create = async (req, res) => {
  try {
    
    user.create ({
                    name: req.body.name,
                    description: req.body.description,
                    status: req.body.status
              })
              .then(user => res.status(200).send(user))
              .catch(error => res.status(400).send(error))
  } catch (err) {
    res.status(404).send(err)
  }
}

exports.edit = async (req, res) => {
  try {
    
    res.status().send()
  } catch (err) {
    res.status(404).send(err)
  }
}

exports.remove = async (req, res) => {
  try {
    
    res.status().send()
  } catch (err) {
    res.status(404).send(err)
  }
}
