

const testConnection = (_, res)  => {
    try {
        // call a service
        return res.send("running test")
    } catch (error) {
        return console.log(error)
    }
}

// TODO  create a schema for data validation
// TODO  create a service for process data
const createsTransaction = (_, res)  => {
    try {
        return res.send("running test")
    } catch (error) {
        return console.log(error)
    }
}

const deleteTransactions = (req, res) => {
    try {
        return console.log("Deleted transaction")
    } catch (error) {
        return console.log(error)
    }

}



module.exports = {
    testConnection
}
