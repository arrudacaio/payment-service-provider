

const testConnection = (_, res)  => {
    try {
        // call a service
        return res.send("running test")
    } catch (error) {
        return console.log(error)
    }
}

module.exports = {
    testConnection
}