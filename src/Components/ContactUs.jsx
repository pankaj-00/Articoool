import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./contactUs.css"


export default function contactUs() {
    return (
        <Card className='Card'>
        <div className='contactUsFollowUs'>
            <div className='contactUsContainer'>
                <div className='contactUs'>
                Contact Us
                </div>
                <input className='Name' placeholder='&#xf007; Your Name..'  />
                <input className='Email' placeholder='&#xf0e0; Your E-mail'/>
                <textarea className='Message' placeholder='&#xf27a; Message'/>
                <Button className="SendButton" variant="outline-info">
                Send Message
                </Button>
                 
            </div>

            <div className='FollowUsConatainer'>
                <div className='FollowUs'>
                Follow Us
                </div>
                <div className='Socials'>
                    <div className='EmailId'>
                    <span className="fas fa-envelope fa"></span>
                    <span className="text"> Mail</span>
                    </div>

                    <div className='Instagram'>
                    <span className="fab fa-instagram"></span>
                    <span className="text"> Instagram</span>
                    </div>

                    <div className='Twitter'>
                    <span className="fab fa-twitter"></span>
                    <span className="text"> Twitter</span>
                    </div>

                    <div className='Facebook'>
                    <span className="fab fa-facebook"></span>
                    <span className="text"> Facebook </span>
                    </div>
                </div>
            </div>
            
        </div>
        </Card>
    )
}
