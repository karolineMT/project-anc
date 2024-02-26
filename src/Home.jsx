import React from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import AssessmentIcon from '@mui/icons-material/Assessment';

function Home() {
    return (

        <main className='main-container'>
            <div className='main-title'>
                <h3>DASHBOARD</h3>
            </div>

            <div className='main-cards'>
                <Link to="/register" className='link-no-highlight'>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>Registration</h3>
                            <AppRegistrationIcon className='card_icon' />
                        </div>
                        <h3>Add New Client</h3>

                    </div>
                </Link>


                <div className='card'>
                    <Link to="/clients" className='link-no-highlight'>
                        <div className='card-inner'>
                            <h3>CLIENTS</h3>
                            <PregnantWomanIcon className='card_icon' />
                        </div>
                        <h3>Search Pregnant Women</h3>
                    </Link>
                </div>
                <div className='card'>
                    <Link to="/medical" className='link-no-highlight'>
                        <div className='card-inner'>
                            <h3>MEDICAL CHECK</h3>
                            <MedicalInformationIcon className='card_icon' />
                        </div>
                        <h3>Quick Check</h3>
                    </Link>
                </div>
                <div className='card'>
                    <Link to="/reports" className='link-no-highlight'>
                        <div className='card-inner'>
                            <h3>REPORTS</h3>
                            <AssessmentIcon className='card_icon' />
                        </div>
                        <h3>Find Reports Here</h3>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home
