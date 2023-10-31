import { useState, useEffect } from 'react';
import DonationBar from './DonationBar';

const DonationGraphic = () => {
	const [lanternMoney, setLanternMoney] = useState(0);
	const [dailyMoney, setDailyMoney] = useState(0);

	useEffect(() => {
		fetch('https://data.michigandaily.com/rivalry-edition-donations/2022.json')
			.then((response) => response.json())
			.then(({ lantern, daily }) => {
				setLanternMoney(Number(lantern));
				setDailyMoney(Number(daily));
			});
	}, []);

	return (
		<div className="graphic-container">
			<DonationBar organization="The Lantern" amount={lanternMoney} color="var(--color-lantern)" />
			<DonationBar
				organization="The Michigan Daily"
				amount={dailyMoney}
				color="var(--color-daily)"
			/>

			<div className="buttons-container">
				<div className="donation-button">
					<a href="https://buckeyefunder.osu.edu/project/34023" target="_blank" rel="noreferrer">
						<img
							src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2022/11/lantern-donate.jpg"
							alt="The Lantern logo"
							loading="lazy"
						/>
					</a>
				</div>
				<div className="donation-button">
					<a
						href="https://maizeraise.umich.edu/o/university-of-michigan/i/maizeraise/s/tmd-lantern-rivalry-2022"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2022/11/tmd-donate.jpg"
							alt="The Michigan Daily logo"
							loading="lazy"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default DonationGraphic;
