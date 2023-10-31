import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import '../../css/article.scss';

const ArticleGrid = ({ data }) => {
	const interweave = (a, b) => {
		const min = Math.min(a.length, b.length);
		return Array(...Array(min))
			.reduce((result, _, index) => {
				result.push(a[index], b[index]);
				return result;
			}, [])
			.concat((a.length > min ? a : b).slice(min));
	};

	const getAllData = () => {
		const articles = data.filter((d) => d['Story Link']);
		const um = articles.filter((d) => d.Publication === 'The Michigan Daily');
		const osu = articles.filter((d) => d.Publication === 'The Lantern');
		return interweave(um, osu);
	};

	return (
		<div className="container">
			<div className="article-grid">
				{getAllData().map((d, i) => (
					<ArticleCard key={`${d.Publication}-${d['Story Link']}`} data={d} count={i} />
				))}
			</div>
		</div>
	);
};

ArticleGrid.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default ArticleGrid;
