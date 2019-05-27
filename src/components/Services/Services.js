import { Component } from "react";
import React from 'react';
import './Services.css';
import next from '../../images/next.png';


class Services extends Component {
    render() {
        return(
            <div>
                <div className="servicesContainer">
                    <p className="services">OUR SERVICES</p>
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Price list of Services</p>
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
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Wellness Programs</p>
                    <p>At Broadway Pet Clinic, we promote a program of total animal health and wellness. 
                        This means that we are trying to lead our clients away from the reactive treatment 
                        that is a result of disease and help our patients stop the life-shortening diseases 
                        that are often realized too late in life. The solution is to provide yearly 
                        examinations and blood testing on all animals over seven years of age.</p>
                    <p>In an examination, the doctor will assess the physical health of an animal; 
                        however, this is not the whole picture. There is a wealth of information 
                        that can be gathered from a simple blood profile. Providing annual vaccinations 
                        in addition to these examinations can significantly increase the chances of 
                        early detection of disease, and therefore increase the possibility of 
                        successful treatment of these maladies.</p>    
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Dental Care</p>
                    <p>Dental Hygiene is a major concern for us in our lives. 
                        If we do not care for our mouths, they become infected 
                        and have diseases such as cavities and gingivitis. Imagine 
                        if we brushed only once a month, or never! How badly would 
                        our mouths smell? And when we get a cavity or fracture a 
                        tooth, we go to the dentist that day.</p>
                    <p>On average, 85% of animals over age four have some form of 
                        periodontal disease. This is the most common type of 
                        disease in an animal's mouth, and the most painful in ours. 
                        However, there is a solution.</p>    
                    <p>The solution is a yearly dental exam. Relax; this exam comes free 
                        when you come in for your pets yearly physical and/or vaccines. 
                        The dental exam is performed by one of our doctors who can explain 
                        the problems and risks associated with a neglected mouth. After the 
                        exam, the doctor will make a treatment recommendation based on the 
                        findings and a number of other factors that will affect your pet's health.</p>
                    <p>Treatment recommendations may range from a simple brushing 
                        at home to a professional dental cleaning followed by 
                        aggressive in-home treatment.</p>    
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Vaccinations & Microchipping</p>
                    <p>Regular vaccines make for a happy and healthy pet. We offer both vaccines 
                        and microchipping at our facility. Our microchip company of choice is Save 
                        This Life which doesn't require any annual fees for registration and also 
                        allows your pet to be Googled! </p>
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Radiology & Ultrasound</p>
                    <p>From time to time it becomes necessary to see a picture of the inside 
                        of an animal. This could be for any number of reasons; a broken bone, 
                        foreign object in the stomach, labored breathing, etc.</p>
                    <p>For this purpose, we feature a fully functional Board Certified radiology department including 
                        Digital Radiography and Ultrasound. These are very valuable diagnostic 
                        tools for any quality veterinary practice to use to immediately assess a situation.</p>    
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Internal Medicine</p>
                    <p>Our very knowledgeable and experienced clinicians are competent in the prevention, 
                        diagnosis, and treatment of a variety of disorders and diseases that effect the body 
                        in numerous areas such as neurology, oncology and cardiology. Our innovative 
                        instrumentation and techniques along with current advances in veterinary care 
                        enable us to provide therapeutic treatment of your pet's specific condition.</p>
                    <p>At our clinic, we take a different approach to healing. 
                        We provide the highest quality of service in medicine.</p>    
                </div>

                <div className="pricesCont">
                    <p className="serviceTitle"><img className="next" src={next} alt="next" />Surgery</p>
                    <p>Our Clinic is well equipped  to perform different surgical procedures on dogs, cats and rabbits. 
                        We tailor our anesthetic protocol and quality monitoring techniques to the 
                        individual animal need. So, your pet will not have a "one size fits all" surgery. We offer both 
                        elective and corrective procedures, anything from spay/neuter and dental to mass and stone removal.</p> 
                    <p>Anesthesia - no matter how safe - does carry a risk of slowing the heart rate and respiration. 
                        This is a rare occurrence but it carries potentially fatal consequences. 
                        The key to preventing such an occurrence is early detection. At Broadway Pet Clinic, 
                        we use a six-parameter monitoring system as well as a vet tech whose sole purpose 
                        is to manually monitor the vital signs of every patient in our operating room. 
                        After surgery, each patient is carefully monitored until full recovery from the 
                        anesthesia. Due to our extensive anesthesia monitoring protocol, the staff at 
                        Broadway Pet Clinic can proudly say we have never had an anesthesia-related 
                        fatality in the seven years the practice has been open.</p>    
                </div>

            </div>
        )
    }
}

export default Services;