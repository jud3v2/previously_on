module.exports = function HomeController(app) {
        return [
                {
                        path: "/",
                        method: "get",
                        handler: async (req, res) => {
                                res.json("Welcome to the PreviouslyOn API");
                        }
                }
        ]
}