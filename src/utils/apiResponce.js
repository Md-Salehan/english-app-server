class ApiResponse {
    constructor(statusCode, result=null, message = "Success"){
        this.statusCode = statusCode
        this.result = result
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }