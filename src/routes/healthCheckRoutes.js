import express  from "express";
const router = express.Router({})
router.get('/', async (_req, res, _next) => {
	// optional: add further things to check (e.g. connecting to dababase)
	const healthcheck = {
		uptime: process.uptime(),
		message: 'OK',
		timestamp: Date.now()
	};
	try {
		return res.send(healthcheck);
	} catch (e) {
		healthcheck.message = e;
		return res.status(503).send();
	}
});
// export router with all routes included
export default router;
