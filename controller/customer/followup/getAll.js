const Joi = require("joi");

const query_schema = Joi.object({});

const handler = async function (req)
{
	let user_id = req.user.id;
	if (req.user.admin)
		user_id = null;

	return await req.context.getAllCustomers(user_id);
}

module.exports = { handler, query_schema, auth: true, auth_consultant: true };
