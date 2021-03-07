const gender = require('../models').gender;

exports.read = async (req, res) => {
  try {
    
    return gender.findAll({})
              .then(gender => res.status(200).send(gender))
              .catch(error => res.status(400).send(error))
  } catch (err) {
    res.status(404).send(err)
  }
}
