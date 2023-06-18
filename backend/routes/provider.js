var express = require('express');
var router = express.Router();
const providerController = require('../controllers/provider._control')

/* GET list page. */
router.get('/', providerController.list)
router.get('/details/:id', providerController.details)
router.get('/edit/:id', providerController.edit)
router.post('/update/:id', providerController.update)
router.get('/add-page', providerController.addPage)
router.post('/add', providerController.add)
router.get('/delete/:id', providerController.delete)


module.exports = router;
// module.exports.provider=provider/details/{{id}}
