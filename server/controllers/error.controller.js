function handleError(req, res) {
    res.status(404).json({
        error: "There was an error."
    })
}

function getErrorMessage(errMsg) {
    console.log(errMsg)
}

//Export the controller function
export default {
    handleError: handleError,
    getErrorMessage: getErrorMessage
};