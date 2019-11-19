import './CSS/Upload.css';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
const util = require('util');

const uploadURL = util.format('%s/upload', process.env.REACT_APP_EXPRESS_BACKEND);

export default function Uploadpage() {
	return (
		<div className="main_upload">
			<React.Fragment>
				<CssBaseline />
				<Container fixed>
					<Typography component="div" style={{ backgroundColor: 'white', height: '60vh' }} id="container">
						{/* <IconButton aria-label="show 4 new mails" color="inherit" id="icon" size="medium">
                <MailIcon />
            </IconButton> */}
						<form id="uploadbanner" enctype="multipart/form-data" method="post" action={uploadURL}>
							<input id="fileupload" name="file" type="file" />
							<input id="submit" type="submit" value="submit" />
						</form>
						<div id="textToSynth">
							<input autofocus size="23" type="text" id="textEntry" value="It's very good to meet you." />
							<button class="btn default" onClick="speakText()">
								Synthesize
							</button>
							<p id="result">Enter text above then click Synthesize</p>
						</div>
						<audio id="audioPlayback" controls>
							<source id="audioSource" type="audio/mp3" src="" />
						</audio>
					</Typography>
				</Container>
			</React.Fragment>
		</div>
	);
}
