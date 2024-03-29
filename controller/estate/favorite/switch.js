const Joi = require("joi");

const body_schema = Joi.object({
	favorite: Joi.boolean().required(),
});

const handler = async function (req)
{
	let { id } = req.params;
	let { favorite } = req.body;
	let user_id = req.user.id;

	// check estate
	let estate = await req.context.getEstate(id);

	return await req.context.switchFavoriteEstate(id, user_id, favorite);
};

module.exports = { handler, body_schema, auth: true };
