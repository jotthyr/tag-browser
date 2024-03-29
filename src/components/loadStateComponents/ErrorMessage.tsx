import { LoadingStatementWrapper } from "../TagsField.style"

const ErrorMessage = ({fontColor = "#000"}) => {
  
  return <LoadingStatementWrapper>
    <p style={{color: fontColor}}>Loading error! Sorry!</p>
  </LoadingStatementWrapper>

}

export default ErrorMessage