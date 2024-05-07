const { Service: ServiceModel } = require("../models/Service");

const serviceController = {
	create: async (req, res) => {
		try {
			const service = {
				name: req.body.name,
				descrition: req.body.descrition,
				price: req.body.price,
				image: req.body.image,
			};
      
			const response = await ServiceModel.create(service);

      res.status(201).json( {response, msg: "Service created"} )
		} catch (error) {
      console.error("Error creating service:", error);
			res.status(500).json({ error: "Internal server error" });
    }
	},
};

module.exports = serviceController;
