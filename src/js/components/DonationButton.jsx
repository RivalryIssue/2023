import PropTypes from 'prop-types';
import DonationBar from './DonationBar';

const DonationButton = ({school, lanternMoney, dailyMoney, isMobile}) => {

    if (isMobile && school === '') {
        return <></>;
    }
    
    let color;
    let amount;
    if (school === "daily") {
        color = "var(--color-daily)"
        amount = dailyMoney;
    }
    else {
        color = "var(--color-lantern)"
        amount = lanternMoney;
    }

    return (
    <div style={{width: "80%", maxWidth: "900px"}}>
        <DonationBar organization='' amount={amount} color={color}/>
        {school === "daily" ?
        (<a
            href="https://myumi.ch/MrPDR"
            target="_blank"
            rel="noreferrer"
            className='donation-link'
            style={{color: color}}
        >
            <div className="donation-link-button">
                Click to Give
            </div>
        </a>)
        :
        (<a href="https://buckeyefunder.osu.edu/project/39889" target="_blank" rel="noreferrer"
        style={{color: color}} className='donation-link'>
            <div className="donation-link-button">
                Click to Give
            </div>
        </a>)
    }
    </div>
    );
};

DonationButton.propTypes = {
	school: PropTypes.string.isRequired,
    lanternMoney: PropTypes.number.isRequired,
    dailyMoney: PropTypes.number.isRequired,
    isMobile: PropTypes.bool.isRequired 
};


export default DonationButton;
