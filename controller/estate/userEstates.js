const handler = async function (req) {
  let { user_id } = req.params;
  return await req.context.getEstates(user_id);
};

module.exports = { handler, auth: false };