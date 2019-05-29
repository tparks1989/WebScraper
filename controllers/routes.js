module.exports = function (router) {
    router.get("/", function (req, res) {
        res.render("home");
    });
    router.getg("/saved", function (req, res) {
        res.render("saved");
    });
}