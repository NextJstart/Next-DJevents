const { events } = require('./data.json');

const handler = (req, res) => {
	const currentEvent = events.filter(ev => ev.slug === req.query.slug);

	if (req.method === 'GET') {
		res.status(200).json(currentEvent);
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).json({ message: `Method ${req.method} is not allowed` });
	}
};

export default handler;
