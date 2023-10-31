import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ArticleCard = ({ data }) => {
	let divClassName = 'article-card';
	let school;
	let logoSrc = 'https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2022/11/';
	let logoAlt;
	let imgWidth;
	let imgHeight;

	if (data.Publication === 'The Michigan Daily') {
		divClassName += '-right';
		school = 'michigan-card';
		logoSrc += 'tmd-logo-black.png?w=500';
		logoAlt = 'The Michigan Daily logo';
		imgWidth = '200px';
		imgHeight = '27.19px';
	} else {
		divClassName += '-left';
		school = 'osu-card';
		logoSrc += 'lantern-logo-color.png';
		logoAlt = 'The Lantern logo';
		imgWidth = '150px';
		imgHeight = '21.98px';
	}

	const ref = useRef(null);

	const [source, setSource] = useState('none');

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '200px',
			threshold: 0
		};

		const callback = (entries, observer) => {
			const [entry] = entries;
			if (entry.isIntersecting) {
				setSource(`url(${data['Image Link']})`);
				observer.unobserve(ref.current);
			}
		};

		const observer = new IntersectionObserver(callback, options);
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, [data]);

	return (
		<div className="article-card-wrapper">
			<div
				ref={ref}
				style={{ backgroundImage: source }}
				className={`article-card ${divClassName} ${school}`}
			>
				<div className="article-text">
					<a href={data['Story Link']} className="text-link" rel="noreferrer" target="_blank">
						<h2 className="article-title">{data['Story Title']}</h2>
					</a>
					<div className="article-author">{data.Author}</div>
					<img
						className="card-news-logo"
						width={imgWidth}
						height={imgHeight}
						src={logoSrc}
						alt={logoAlt}
						loading="lazy"
					/>
					<br />
					<a href={data['Story Link']} rel="noreferrer" target="_blank">
						<button type="button" className="article-card-button" title={data['Story Link']}>
							Read Article
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

ArticleCard.propTypes = {
	data: PropTypes.shape({
		Publication: PropTypes.string.isRequired,
		'Story Title': PropTypes.string.isRequired,
		Author: PropTypes.string.isRequired,
		'Image Link': PropTypes.string.isRequired,
		'Story Link': PropTypes.string.isRequired
	}).isRequired
};

export default ArticleCard;
