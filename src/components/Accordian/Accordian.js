import React from 'react';
import './Accordian.css';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import priceList from '../../images/priceList.png';
import wellness from '../../images/wellness.png';
import tooth from '../../images/tooth.png';
import vaccine from '../../images/vaccine.png';
import xray from '../../images/xray.png';
import pills from '../../images/pills.png';
import surgery from '../../images/surgery.png';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 'auto',
    backgroundColor: '#ffffffe8',
    boxShadow: '0 0 10px 10px #ffffffe8;',
    padding: '20px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    flexBasis: '80%',
    flexShrink: 0,
    backgroundColor: "#f0f0f000",
    textAlign: 'left',
    display: 'inline',
    fontFamily: 'PT Sans Narrow, sans-serif',
  },
  accordian: {
    margin: '15px',
  },
  body: {
    fontSize: '15px',
    margin: 'auto',
  },
}));

function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.accordian} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><img className="heart" src={priceList} alt="heart" />Price list of Services</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <ul>
                        <li>Physical exam - $45</li>
                        <li>In-house blood work - $149</li>
                        <li>Nail Trim - $20</li>
                        <li>Anal Gland Expression - $15</li>
                        <li>Microchip - $30</li>
                        <li>Ultrasound - $350</li>
                        <p className="listItem">Radiographs:</p>
                        <li>First View - $100</li>
                        <li>Additional View - $45</li>
                        <p className="listItem">Vaccines:</p>
                        <li>DA2PP -$19</li>
                        <li>Corona - $19</li>
                        <li>Bordetella Booster - $19</li>
                        <li>FVRCP Booster - $19</li>
                        <li>FELV Booster - $22</li>
                        <li>Rabies Vaccine - $18</li>
                        <p className="listItem">Dental:</p>
                        <li>Starting at $199(not including extractions/special circumstances)</li>
                    </ul>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.accordian} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}><img className="heart" src={wellness} alt="wellness" />Wellness Programs</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.body}>At Broadway Pet Clinic, we promote a program of total animal health and wellness. 
                        This means that we are trying to lead our clients away from the reactive treatment 
                        that is a result of disease and help our patients stop the life-shortening diseases 
                        that are often realized too late in life. The solution is to provide yearly 
                        examinations and blood testing on all animals over seven years of age.</p>
                    <p className={classes.body}>In an examination, the doctor will assess the physical health of an animal; 
                        however, this is not the whole picture. There is a wealth of information 
                        that can be gathered from a simple blood profile. Providing annual vaccinations 
                        in addition to these examinations can significantly increase the chances of 
                        early detection of disease, and therefore increase the possibility of 
                        successful treatment of these maladies.</p>   
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.accordian} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}><img className="heart" src={tooth} alt="tooth" />Dental Care</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.body}>Dental Hygiene is a major concern for us in our lives. 
                        If we do not care for our mouths, they become infected 
                        and have diseases such as cavities and gingivitis. Imagine 
                        if we brushed only once a month, or never! How badly would 
                        our mouths smell? And when we get a cavity or fracture a 
                        tooth, we go to the dentist that day.</p>
                    <p className={classes.body}>On average, 85% of animals over age four have some form of 
                        periodontal disease. This is the most common type of 
                        disease in an animal's mouth, and the most painful in ours. 
                        However, there is a solution.</p>    
                    <p className={classes.body}>The solution is a yearly dental exam. Relax; this exam comes free 
                        when you come in for your pets yearly physical and/or vaccines. 
                        The dental exam is performed by one of our doctors who can explain 
                        the problems and risks associated with a neglected mouth. After the 
                        exam, the doctor will make a treatment recommendation based on the 
                        findings and a number of other factors that will affect your pet's health.</p>
                    <p className={classes.body}>Treatment recommendations may range from a simple brushing 
                        at home to a professional dental cleaning followed by 
                        aggressive in-home treatment.</p>    
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.accordian} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}><img className="heart" src={vaccine} alt="vaccine" />Vaccinations/Microchipping</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.body}>Regular vaccines make for a happy and healthy pet. We offer both vaccines 
                        and microchipping at our facility. Our microchip company of choice is Save 
                        This Life which doesn't require any annual fees for registration and also 
                        allows your pet to be Googled! </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.accordian} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><img className="heart" src={xray} alt="xray" />Radiology/Ultrasound</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.body}>From time to time it becomes necessary to see a picture of the inside 
                        of an animal. This could be for any number of reasons; a broken bone, 
                        foreign object in the stomach, labored breathing, etc.</p>
                    <p className={classes.body}>For this purpose, we feature a fully functional Board Certified radiology department including 
                        Digital Radiography and Ultrasound. These are very valuable diagnostic 
                        tools for any quality veterinary practice to use to immediately assess a situation.</p> 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.accordian} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><img className="heart" src={pills} alt="pills" />Internal Medicine</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.body}>Our very knowledgeable and experienced clinicians are competent in the prevention, 
                        diagnosis, and treatment of a variety of disorders and diseases that effect the body 
                        in numerous areas such as neurology, oncology and cardiology. Our innovative 
                        instrumentation and techniques along with current advances in veterinary care 
                        enable us to provide therapeutic treatment of your pet's specific condition.</p>
                    <p className={classes.body}>At our clinic, we take a different approach to healing. 
                        We provide the highest quality of service in medicine.</p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.accordian} expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}><img className="heart" src={surgery} alt="surgery" />Surgery</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <p className={classes.body}>Our Clinic is well equipped  to perform different surgical procedures on dogs, cats and rabbits. 
                        We tailor our anesthetic protocol and quality monitoring techniques to the 
                        individual animal need. So, your pet will not have a "one size fits all" surgery. We offer both 
                        elective and corrective procedures, anything from spay/neuter and dental to mass and stone removal.</p> 
                    <p className={classes.body}> Anesthesia - no matter how safe - does carry a risk of slowing the heart rate and respiration. 
                        This is a rare occurrence but it carries potentially fatal consequences. 
                        The key to preventing such an occurrence is early detection. At Broadway Pet Clinic, 
                        we use a six-parameter monitoring system as well as a vet tech whose sole purpose 
                        is to manually monitor the vital signs of every patient in our operating room. 
                        After surgery, each patient is carefully monitored until full recovery from the 
                        anesthesia. Due to our extensive anesthesia monitoring protocol, the staff at 
                        Broadway Pet Clinic can proudly say we have never had an anesthesia-related 
                        fatality in the seven years the practice has been open.</p>    
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default ControlledExpansionPanels;