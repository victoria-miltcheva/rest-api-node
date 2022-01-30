enum Message {
  Success = 'Success',

  ValidationErrorMissingBody = 'Error: Invalid syntax for this request was provided. Please include a request body.',
  ValidationErrorMissingStartDate = 'Error: Invalid syntax for this request was provided. Please include a startDate in the request body.',
  ValidationErrorMissingEndDate = 'Error: Invalid syntax for this request was provided. Please include an endDate in the request body.',
  ValidationErrorMissingMinCount = 'Error: Invalid syntax for this request was provided. Please include a minCount in the request body.',
  ValidationErrorMissingMaxCount = 'Error: Invalid syntax for this request was provided. Please include a maxCount in the request body.',

  ValidationErrorWrongFormatStartDate = 'Error: Invalid syntax for this request was provided. Please format startDate as YYYY-MM-DD.',
  ValidationErrorWrongFormatEndDate = 'Error: Invalid syntax for this request was provided. Please format endDate as YYYY-MM-DD.',
  ValidationErrorWrongFormatMinCount = 'Error: Invalid syntax for this request was provided. Please format minCount as a valid number.',
  ValidationErrorWrongFormatMaxCount = 'Error: Invalid syntax for this request was provided. Please format minCount as a valid number.',

  ValidationStartLTEndDate = 'Error: startDate must occur before endDate.',
  ValidateMinCountLTEMaxCount = 'Error: minCount must be less than or equal to maxCount.',

  InternalError = 'Error: Unexpected internal server error.',
  NotFoundError = 'Error: The requested URL was not found on this server.'
}

export default Message;
