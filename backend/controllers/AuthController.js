const config = require("../config");

module.exports = function AuthController(app) {
        return [
                {
                        path: "/auth/login",
                        method: "post",
                        handler: async (req, res) => {
                                res.json("Login route");
                        }
                }
        ]
}