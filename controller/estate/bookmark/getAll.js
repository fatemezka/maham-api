const Joi = require("joi");

const query_schema = Joi.object({});

const handler = async function (req)
{
	let user_id = req.user.id;

	return await req.context.getUserBookmarkEstates(user_id);
};

module.exports = { handler, query_schema, auth: true };
