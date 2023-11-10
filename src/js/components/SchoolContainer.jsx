import { useEffect, useState } from 'react';
import getWindowDimensions from '../hooks/getWindowDimensions';
import DonationGraphic from './DonationGraphic';
import SchoolVideos from './SchoolVideos';

const SchoolContainer = () => {

    const {width, height} = getWindowDimensions();
    const isMobile = width >= 550 ? false : true;

    const [selectedSchool, setSelectedSchool] = useState('');
    const [lanternMoney, setLanternMoney] = useState(0);
	const [dailyMoney, setDailyMoney] = useState(0);

	useEffect(() => {
		fetch('https://data.michigandaily.com/rivalry-edition-donations/2023.json')
			.then((response) => response.json())
			.then(({ lantern, daily }) => {
				setLanternMoney(Number(lantern));
				setDailyMoney(Number(daily));
			});
	}, []);

    return (
        <div className='school-container'>
            <DonationGraphic setSelectedSchool={setSelectedSchool} isMobile={isMobile}/>
            <SchoolVideos school={selectedSchool} isMobile={isMobile} lanternMoney={lanternMoney} dailyMoney={dailyMoney} />
            {/* <DonationButton school={selectedSchool} lanternMoney={lanternMoney} dailyMoney={dailyMoney} /> */}
        </div>
    )
};


export default SchoolContainer;
