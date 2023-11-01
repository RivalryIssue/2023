import '../../css/landing.scss';

const LandingPage = () => (
	<div id="landing">
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				gap: '0.25rem',
				position: 'relative'
			}}
		>
			<div id="left-flag" />
			<div
				id="hero"
				style={{
					backgroundColor: 'white',
					padding: '1rem'
				}}
			>
				<h1
					style={{
						margin: 0,
						textAlign: 'center'
					}}
				>
					The Rivalry Edition
				</h1>
			</div>
			<div id="right-flag" />
		</div>
		<div id="logos">
			<a
					href="https://michigandaily.com"
					target="_blank"
					rel="noreferrer"
					aria-label="The Michigan Daily"
				>
				<img
					src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2022/11/tmd-logo-white.png?w=500"
					alt="The Michigan Daily logo"
					width="200px"
					height="27px"
				/>
			</a>
			<span>&times;</span>
			<a href="https://thelantern.com" target="_blank" rel="noreferrer" aria-label="The Lantern">
				<img
					src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2022/11/lantern-logo-white.png?w=500"
					alt="The Lantern logo"
					width="200px"
					height="43px"
				/>
			</a>
		</div>
		<div id="lantern-icon">
			<img
				alt="Ohio State football player running"
				srcSet="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Rivalry_Logo_Sketches_3-copy.png?w=300 300w, https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Rivalry_Logo_Sketches_3-copy.png?w=500 500w"
				sizes="(max-width: 447px) 130px, (max-width: 560px) 200px, (max-width: 1200px) 250px, 300px"
				src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Rivalry_Logo_Sketches_3-copy.png?w=500"
			/>
		</div>
		<div id="daily-icon">
			<img
				alt="University of Michigan football player running"
				srcSet="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Rivalry_Logo_Sketches_3-1.png?w=300 300w, https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Rivalry_Logo_Sketches_3-1.png?w=500 500w"
				sizes="(max-width: 447px) 130px, (max-width: 560px) 200px, (max-width: 1200px) 250px, 300px"
				src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2023/10/Rivalry_Logo_Sketches_3-1.png?w=500"
			/>
		</div>
		<a href="#main" type="button" className="chevron" aria-label="Scroll down">
			<svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
				{/* Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}
				<path
					fill="currentColor"
					d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z"
				/>
			</svg>
		</a>
	</div>
);

export default LandingPage;
