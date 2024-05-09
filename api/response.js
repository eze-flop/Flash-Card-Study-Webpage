module.exports = {
    success: function(result) {
      return {
        status: "success",
        result
      }
    },
    error: function(message) {
      return {
        status: "error",
        message
      }
    },
    UpdateError: function(message) {
        return {
          UpdateError: "Unsuccessful",
          message
        }
    }
  }
  