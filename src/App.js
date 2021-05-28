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
import { useRef, useState } from 'react'
import QrReader from 'react-qr-reader'
function App() {
  const [text, setText] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [scanResultfFile, setScanResultFile] = useState('')
  const [scanResultWebCam, setResultWebCam] = useState('')
  const qrRef = useRef(null)
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

  const handleErrorFile = (error) => {
    console.log(error)
  }

  const handleScanFile = (result) => {
    if (result) {
      setScanResultFile(result)
    }
  }

  const onScanFile = () => {
    qrRef.current.openImageDialog()
  }

  const handleErrorWebCam = (error) => {
    console.log(error)
  }
  const handleScanWepCam = (result) => {
    if (result) {
      setResultWebCam(result)
    }
  }
  return (
    <Container className={classes.conatiner}>
      <Card>
        <h2 className={classes.title}>Генератор QR code </h2>
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
                Згенерировать
              </Button>
              <br />
              {imageUrl && (
                <a href={imageUrl} download>
                  <img src={imageUrl} alt='img' />
                </a>
              )}
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <Button
                className={classes.btn}
                variant='contained'
                color='secondary'
                onClick={onScanFile}
              >
                Сканировать QR code
              </Button>
              <QrReader
                ref={qrRef}
                style={{ width: '100%' }}
                onError={handleErrorFile}
                legacyMode
                onScan={handleScanFile}
              />
              <h3>Сканированный код:{scanResultfFile}</h3>
            </Grid>
            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
              <h3> QR Code By Wep Cam</h3>
              <QrReader
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorWebCam}
                onScan={handleScanWepCam}
              />
              <h3>Scaned QR code Web Cam code:{scanResultWebCam}</h3>
            </Grid>
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
