import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Landing from './components/Landing';
import Intro from './components/Intro';
import DonationGraphic from './components/DonationGraphic';
import SchoolVideos from './components/SchoolVideos';
import ArticleGrid from './components/ArticleGrid';

import copy from '../data/copy.json';
import articles from '../data/data.csv';
import SchoolContainer from './components/SchoolContainer';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Landing data={copy} />
		<Intro description={copy.homepage.description} />
		<SchoolContainer />
		{/*  UNCOMMENT <ArticleGrid data={articles} /> */}
	</StrictMode>
);
