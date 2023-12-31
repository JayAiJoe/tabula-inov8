import { withSessionRoute } from "../../lib/config/withSession";

export default withSessionRoute(logout);

async function logout(req, res, session) {
    req.session.destroy();
    res.status(200).send({ok: true})
}