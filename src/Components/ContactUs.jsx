import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./contactUs.css"


export default function contactUs() {
    return (
        
        <div className='mt-10 flex-col sm:flex-row sm:border-l-2 sm:border-solid sm:border-black contactUsFollowUs'>
            <div className='sm:ml-8 w-full sm:w-1/2 contactUsContainer'>
                <div className='contactUs'>
                Contact Us
                </div>
                <input className='Name' placeholder='&#xf007; Your Name..'  />
                <input className='Email' placeholder='&#xf0e0; Your E-mail'/>
                <textarea className='Message' placeholder='&#xf27a; Message'/>
                <Button className="!mb-5 SendButton" variant="outline-info">
                Send Message
                </Button>
                 
            </div>

            <div className='sm:mr-8 w-full sm:w-1/2 sm:border-l-2 sm:border-solid sm:border-black FollowUsContainer'>
                <div className='FollowUs'>
                Follow Us
                </div>
                <div className='Socials'>
                    <div className='EmailId'>
                    <span className="Emaillogo fas fa-envelope fa"></span>
                    <span className="Emailtext"> Mail</span>
                    </div>

                    <div className='Instagram'>
                    <span className="Instagramlogo fab fa-instagram"></span>
                    <span className="Instagramtext"> Instagram</span>
                    </div>

                    <div className='Twitter'>
                    <span className="Twitterlogo fab fa-twitter"></span>
                    <span className="Twittertext"> Twitter</span>
                    </div>

                    <div className='Facebook'>
                    <span className="Facebooklogo fab fa-facebook"></span>
                    <span className="Facebooktext"> Facebook </span>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}
