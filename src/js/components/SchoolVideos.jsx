import 'lite-youtube-embed/src/lite-yt-embed';
import 'lite-youtube-embed/src/lite-yt-embed.css';

const SchoolVideos = () => (
	<div className="container">
		<div className="schoolVideoContainer">
			<div className="schoolVideo">
				<p className="schoolName">The Lantern</p>
				<div className="player-wrapper">
					<lite-youtube
						videoid="7S7mrNkKfnI"
						playlabel="The Lantern vs. Michigan Daily Rivalry 2022"
					/>
				</div>
			</div>
			<div className="schoolVideo">
				<p className="schoolName">The Michigan Daily</p>
				<div className="player-wrapper">
					<lite-youtube videoid="92hbzgzqRqo" playlabel="Michigan Daily Rivalry Edition 2022" />
				</div>
			</div>
		</div>
	</div>
);

export default SchoolVideos;
