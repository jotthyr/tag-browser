import { CircularProgress } from "@mui/material"
import { LoadingStatementWrapper } from "../TagsField.style"

const LoadMessage = ({color = "#4375ff", fontColor = "#000", size = 40, thickness = 3.6}) => {
  
  return <LoadingStatementWrapper>
    <p style={{color: fontColor}}>Loading tags...</p>
    <CircularProgress size={size} thickness={thickness} sx={{color: color}}/>
  </LoadingStatementWrapper>

}

export default LoadMessage
