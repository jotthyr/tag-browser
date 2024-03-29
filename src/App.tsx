import { Container, Paper, Typography} from "@mui/material"
import "./App.css"
import Content from "./components/Content"

function App() {

  return <Container disableGutters sx={{ display: "flex", justifyContent: "center", alignItems: "center",}}>
    <Paper sx={{ m: "128px", p: "32px", minWidth: "750px", minHeight: "850px", }} elevation={3}>
      <Typography variant="h2">Tag Browser</Typography>
      <Content/>
    </Paper>
  </Container>
}

export default App
