import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Contact() {
    return (
        <div>
            <div style={{ height: 70 }}>

            </div>
            <div>
                <img style={{ height: "500px" }} src='https://www.fujitsu.com/us/imagesgig5/contactus_tcm127-6317963_tcm127-6286607-32.jpg' />
                <Box sx={{ flexGrow: 10 }}>
                    <div style={{ textAlign: "center", backgroundColor: "white", color: "black", height: "600px" }}>
                        <Grid container spacing={5}>
                            <Grid xs={12}>
                                <h2 style={{ marginTop: 50 }}>İletişim</h2>
                                <div>Bilimle iletişime geçebilirsiniz...</div>
                            </Grid>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                            <Grid xs={4}>
                                <Box
                                    component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '25ch' },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >

                                    <TextField style={{width:"500px"}} id="standard-basic" label="Ad" variant="standard" /><br/>
                                    <TextField style={{width:"500px"}} id="standard-basic" label="Soyad" variant="standard" /><br/>
                                    <TextField style={{width:"500px"}} id="standard-basic" label="Mail" variant="standard" /><br/>
                                    <TextField style={{width:"500px"}} id="standard-basic" label="Mesajınız" variant="standard" /><br/>
                                    <Button variant="outlined" href="#outlined-buttons">
                                        Mesaj Gönder
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid xs={4}>
                                <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.7759434337336!2d28.8304503!3d40.98638679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa36ed7fb21e5%3A0xfbb4e107f2408737!2zWWXFn2lsa8O2eSwgRMO8bnlhIFRpY2FyZXQgTXJrLiwgMzQxNDkgQmFrxLFya8O2eS_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1679649529293!5m2!1str!2str" style={{width:"600px", height:"300px", border:0,  loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>
                                </div>
                            </Grid>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Contact