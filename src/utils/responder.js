
let Responder = {

  sendResponse: (response, statusCode, status, data, message) => {
    response.status(statusCode).json({
      status: status,
      data: data,
      message: message
    });
  }
};

module.exports = Responder;