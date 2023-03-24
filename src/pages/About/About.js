import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { style } from '@mui/system';

function About() {
    return (
        <div>
            <div style={{ height: 70 }}>

            </div>
            <div>
                <img style={{ height: "500px" }} src='https://sitecore-cd.shangri-la.com/-/media/Shangri-La/istanbul_shangrila/settings/miscellaneous/SLIB_AboutHotel_1920x940.jpg' />
                <Box sx={{ flexGrow: 10 }}>
                    <div style={{ textAlign: "center", backgroundColor: "white", color: "black", height: "400px" }}>
                        <Grid container spacing={5}>
                            <Grid xs={12}>
                                <h2 style={{ marginTop: 50 }}>Boğaz'ın kıyısında</h2>
                                <div>zamansız Zarafet</div>
                            </Grid>
                            <Grid xs={3}>
                                <div></div>
                            </Grid>
                            <Grid xs={6}>
                                İstanbul Boğazı’nın Avrupa Yakası’nda Beşiktaş’ta 1930’lardan kalma tarihi bir binada hizmet veren Shangri-La Bosphorus, ikonik Dolmabahçe Sarayı’na sadece 15 dakikalık yürüme mesafesindedir. Osmanlı İmparatorluğu’nun ihtişamından ve Asya’ya özgü tasarım öğelerinden ilham alan otelin dinlendirici tonlarda tasarlanmış ve çarpıcı avizeler ile dekore edilmiş odaları ve süitleri konukları kendine hayran bırakacaktır.
                            </Grid>
                            <Grid xs={3}>
                                <div></div>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ textAlign: "center", backgroundColor: "white", color: "black", height: "400px" }}>
                        <Grid container spacing={5}>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                            <Grid xs={4}>
                                <h3 style={{ marginTop: 50 }}>Harita ve Yol Tarifi</h3>
                                <div>Beşiktaş’ın merkezinde yer alan Shangri-La Bosphorus, Istanbul, şehrin finans merkezine ve İstanbul Kongre Merkezi’ne çok yakındır. Otel, karayolu ile İstanbul Atatürk Uluslararası Havalimanı’ndan yaklaşık 45-60 dakika, Sabiha Gökçen Uluslararası Havalimanı’ndan ise 60-75...</div>
                                <br />
                                <Button variant="outlined" href="#outlined-buttons">
                                    Daha fazla bilgi edin
                                </Button>
                            </Grid>
                            <Grid xs={4}>
                                <img src='https://sitecore-cd.shangri-la.com/-/media/Shangri-La/abudhabi_shangrila/settings/about/SLAD-About_Maps-Directions.jpg' />
                            </Grid>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ textAlign: "center", backgroundColor: "white", color: "black", height: "400px" }}>
                        <Grid container spacing={5}>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                            <Grid xs={4}>
                                <img src='https://sitecore-cd.shangri-la.com/-/media/Shangri-La/istanbul_shangrila/settings/about/SLIB-About_ServicesFacilities.jpg' />
                            </Grid>
                            <Grid xs={4}>
                                <h3 style={{ marginTop: 50 }}>Hizmetler ve Servisler</h3>
                                <div>Shangri-La Bosphorus, Istanbul, deneyimli personeli ve geniş hizmet yelpazesi ile misafirlerin tüm gereksinimlerini karşılar. Aşağıda yer almayan alanlar haricinde bir hizmetten yararlanmak isterseniz, ihtiyaçlarınızı karşılamak üzere elimizden geleni yapacağız; lütfen...</div>
                                <br />
                                <Button variant="outlined" href="#outlined-buttons">
                                    Daha fazla bilgi edin
                                </Button>
                            </Grid>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ textAlign: "center", backgroundColor: "white", color: "black", height: "400px" }}>
                        <Grid container spacing={5}>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                            <Grid xs={4}>
                                <h3 style={{ marginTop: 50 }}>İstanbul’u Keşfedin</h3>
                                <div>Boğaz’ın romantizmi, Kapalıçarşı’nın hareketliliği, mimari yapıların görkemi ve enfes yemekler, İstanbul’u dünyanın en çekici şehirlerinden biri haline getiriyor. Daha fazlasını deneyimlemek için şehri bizimle keşfedin.</div>                          <br />
                                <Button variant="outlined" href="#outlined-buttons">
                                    Daha fazla bilgi edin
                                </Button>
                            </Grid>
                            <Grid xs={4}>
                                <img src='https://sitecore-cd.shangri-la.com/-/media/Shangri-La/istanbul_shangrila/settings/miscellaneous/SLIB_ExploreIstanbul_1920x940.jpg' />
                            </Grid>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ textAlign: "center", backgroundColor: "white", color: "black", height: "400px" }}>
                        <Grid container spacing={5}>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                            <Grid xs={4}>
                                <img src='https://sitecore-cd.shangri-la.com/-/media/Shangri-La/istanbul_shangrila/settings/miscellaneous/SLIB_Awards_1920x940.jpg' />
                            </Grid>
                            <Grid xs={4}>
                                <h3 style={{ marginTop: 50 }}>Ödüller</h3>
                                <div>James Hilton’un 1933 tarihli romanı Lost Horizon’da bahsi geçen efsanevi topraklardan ilham alan Shangri-La adı, resort ve otellerimizin dünya çapında tanınan hizmet kalitesini ve huzurlu atmosferini özetliyor. Shangri-La Bosphorus olarak ünlü Asya misafirperverliğimizle...</div>
                                <br />
                                <Button variant="outlined" href="#outlined-buttons">
                                    Daha fazla bilgi edin
                                </Button>
                            </Grid>
                            <Grid xs={2}>
                                <div></div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </div >
        </div >

    )
}

export default About;