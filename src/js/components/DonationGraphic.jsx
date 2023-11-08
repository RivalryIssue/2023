import PropTypes from 'prop-types';

const DonationGraphic = ({ setSelectedSchool, isMobile }) => {

    if (!isMobile) {
        return <></>;
    }

	return (
		<div className="graphic-container">
			<b>Pick your team!</b>

			<div className="buttons-container">
				<div className="donation-button" onClick={() => setSelectedSchool('daily')}>
					<img
						src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2022/11/tmd-donate.jpg"
						alt="The Michigan Daily logo"
						loading="lazy"
					/>
				</div>
				<div className="donation-button" onClick={() => setSelectedSchool('lantern')}>
					<img
						src="https://i1.wp.com/www.michigandaily.com/wp-content/uploads/2022/11/lantern-donate.jpg"
						alt="The Lantern logo"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

DonationGraphic.propTypes = {
	setSelectedSchool: PropTypes.func.isRequired,
	isMobile: PropTypes.bool.isRequired
};

export default DonationGraphic;
