var express = require('express');
var router = express.Router();
var controllers = require('../controllers');


router.get('/:resource', function(req, res, next){
	var resource = req.params.resource;
	var controller = controllers[resource];	
	console.log(controller);

	if(controller == undefined){
		res.json({
			conf: 'failed',
			message: 'Invalid resource request: ' +resource
		})
		return;
	}

	controller.find(req.query, function(err, results){

		if(err){
			res.json({
				conf:'failed',
				message: err
			})
			return;
		}

		res.json({
			conf: 'success',
			results: results
		})
	})
	

});

router.get('/:resource/:id', function(req,res, next){
	var resource = req.params.resource;
	var id = req.params.id;

	var controller = controllers[resource];	
	if(controller == undefined){
		res.json({
			conf: 'failed',
			message: 'invail resource request: ' +resource
		})
		return;
	}


	
	controller.findById(id, function(err, result){
		if(err){
			res.json({
				conf:'fail',
				message:err
			});
			return;
		}

		res.json({
			conf: 'success',
			result: result
		})
	});
	
});

router.post('/:resource',function(req, res, next){
	
	var resource = req.params.resource;

	var controller = controllers[resource];	
	if(controller == undefined){
		res.json({
			conf: 'failed',
			message: 'invail resource request: ' +resource
		})
		return;
	}

	
	controller.create(req.body, function(err, result){
		if(err){
			res.json({
				conf:'fail',
				message:err
			});
			return;
		}

		res.json({
			conf: 'success',
			result: result
		})

	});	
});

router.put('/:resource/:id',function(req, res, next){
	
	var resource = req.params.resource;
	var id = req.params.id;

	var controller = controllers[resource];	
	if(controller == undefined){
		res.json({
			conf: 'failed',
			message: 'invail resource request: ' +resource
		})
		return;
	}

	
	controller.update(id, req.body, function(err, result){
		if(err){
			res.json({
				conf:'fail',
				message:err
			});
			return;
		}

		res.json({
			conf: 'success',
			result: result
		})

	});	
});

router.delete('/:resource/:id',function(req, res, next){
	
	var resource = req.params.resource;
	var id = req.params.id;

	var controller = controllers[resource];	
	if(controller == undefined){
		res.json({
			conf: 'failed',
			message: 'invail resource request: ' +resource
		})
		return;
	}

	
	controller.delete(id, function(err, result){
		if(err){
			res.json({
				conf:'fail',
				message:err
			});
			return;
		}

		res.json({
			conf: 'success',
			result: result
		})

	});	
});

module.exports = router;