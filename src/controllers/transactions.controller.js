

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


const getTransaction = (req ,res)  => {
    try {
        console.log("Get a transaction")
    } catch (error) {
        return console.log("Get a transaction")
    }
}

const deleteTransaction = (req, res) => {
    try {
        return console.log("Deleted transaction")
    } catch (error) {
        return console.log(error)
    }

}



module.exports = {
    testConnection
}
