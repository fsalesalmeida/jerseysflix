import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import BandcampPlayer from 'react-bandcamp';

function Page404() {
    return (
        <PageDefault>
          <center><h1>Parece que você se perdeu...Ouça um som para pensar ou retorne a <Link to="/">Página Inicial</Link></h1>
          <BandcampPlayer width="350px" height="440px" album="4222508507" size="large" bgcolor="333333" linkcol="e32c14" tracklist="false" /><br></br>
          </center>
        </PageDefault>
    )
}

export default Page404;