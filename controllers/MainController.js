class MainController {
    static serverApp(req, res, next) {
        try {
            res.status(200).json({ message: `server is running...` })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = MainController