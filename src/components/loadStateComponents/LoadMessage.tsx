import { CircularProgress } from "@mui/material"
import { LoadingStatementWrapper } from "../TagsField.style"

const LoadMessage = (props?: {color: "string", fontColor: "string"}) => {
  
  return <LoadingStatementWrapper>
    <p style={{color: `${props !== undefined ? props.fontColor : "black" }`}}>Loading tags...</p>
    <CircularProgress sx={{color: `${props !== undefined ? props.color : "blue" }`}}/>
  </LoadingStatementWrapper>

}

export default LoadMessage
