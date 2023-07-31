// import { withSessionRoute } from "pages/lib/config/withSession";
import { withSessionRoute } from "../../lib/config/withSession";
import { findUser } from "../../lib/prismaHelpers";

const VALID_EMAIL = "test@gmail.com";
const VALID_PASSWORD = "password";

export default withSessionRoute(createSessionRoute);

async function createSessionRoute(req, res) {
    if (req.method === "POST") {
        const { email, password } = req.body;

        const user = await findUser(email, password);

        if (user !== null) {
            req.session.user = {
                id: user.id,
                username: user.username,
                isDesigner: user.designer,
            };
            await req.session.save();
            res.send({ ok: true });
        }
        return res.status(403).send("");
    }
    return res.status(404).send("");
}