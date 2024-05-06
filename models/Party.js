const mongoose = require("mongoose");

const { Schema } = mongoose;

const {serviceSchema} = require("./Service")

const partySchema = new Schema(
	{
		title: {
			type: String,
			require: true,
		},
    author: {
			type: String,
			require: true,
		},
		description: {
			type: String,
			require: true,
		},
		budge: {
			type: String,
			require: true,
		},
		image: {
			type: String,
			require: true,
		},
    services: {
			type: [serviceSchema],
			require: true,
		},
	},
	{ timestamps: true }
);

const Service = mongoose.model("Service", partySchema);

module.exports = {
	Service
};
