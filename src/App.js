import {
  Container,
  Card,
  CardContent,
  makeStyles,
  Grid,
  TextField,
  Button,
} from '@material-ui/core'

import QRCode from 'qrcode'
import { useState } from 'react'
function App() {
  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const classes = useStyles()

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(text)
      setImageUrl(response)
      console.log('response', response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container className={classes.conatiner}>
      <Card>
        <h2 className={classes.title}>Generation QR code </h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label='Enter text here' onChange={(e) => setText(e.target.value)} />
              <Button
                onClick={() => generateQrCode()}
                className={classes.btn}
                variant='contained'
                color='primary'
              >
                Generate
              </Button>
              <br />
              {imageUrl && (
                <a href={imageUrl} download>
                  <img src={imageUrl} alt='img' />
                </a>
              )}
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}></Grid>
          </Grid>
        </CardContent>
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
    background: '#3f51b5',
    color: '#fff',
    padding: 20,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
  },
}))
export default App
