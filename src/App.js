import { Container, Card, CardContent, makeStyles } from '@material-ui/core'

function App() {
  const classes = useStyles()

  return (
    <Container className={classes.conatiner}>
      <Card>
        <h2 className={classes.title}>Generation QR code </h2>
        <CardContent></CardContent>
      </Card>
    </Container>
  )
}
const useStyles = makeStyles((theme) => ({
  conatiner: {
    marginTop: 10,
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))
export default App
