import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    console.log("TEMPLATE");
    return (
        <div>
            <header className="fullscreen">
                <div className="container fullscreen">
                    <div className="intro-text">
                        <div className="intro-lead-in">Where to next?</div>
                        <div className="intro-heading">Special needs, special times!</div>
                    </div>
                </div>
            </header>
            <section id="services" className="">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Why Us?</h2>
                            <div className="col-md-3 text-center"></div>
                            <div className="col-md-6 text-center">    
                                <h3 className="section-subheading text-muted">We know that your disability goes on vacation with you, but that doesn't mean you can't have an awesome time. <i>We can not make it easy, but we can make it easier.</i></h3>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <img className="fa fa-circle fa-stack-1x fa-inverse img-circle whyus" src="img/whyUs/dollar.png" alt="Money"></img>
                            </span>
                            <h4 className="service-heading">Expert advice doesn’t have to cost!</h4>
                            <p className="text-muted">There’s no extra charge. When you book with Trippin’ with Jamie, you can know that we have done our best to get you top value. Our commission comes from our suppliers, so booking with us doesn’t mean you pay more for our services.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <img className="fa fa-circle fa-stack-1x fa-inverse img-circle" src="img/whyUs/specialNeeds.jpg" alt="Special Needs"></img>
                            </span>
                            <h4 className="service-heading">We are certified in special needs travel!</h4>
                             
                            <p className="text-muted">We are trained and certified to best prepare for those needing <b>special diets</b>, on the <b>autism spectrum</b>, needing <b>low-sensory environments</b>, in a <b>wheelchair</b>, with a <b>service dog</b>, or needing <b>allergy friendly accommodations</b>.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <img className="fa fa-circle fa-stack-1x fa-inverse img-circle " src="img/whyUs/like3.jpg" alt="Money"></img>
                            </span>
                            <h4 className="service-heading">We tailor your experience!</h4>
                            <p className="text-muted"> You are not just a name and a number to us. We value getting to know our clients and helping you create a wonderful travel experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="deals" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Reason #47 why you should use a travel agent?</h2>
                            <h3 className="text-muted">We have access to deals that you might not otherwise be able to see. Click here to see a sample of what is available!</h3><br/>
                            <a href="http://20031638.travsearch.com/" className="page-scroll btn btn-xl">Let's Go!</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reviews">
                <div className="container"> 
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">What do our customers have to say?</h2>
                            <h3 className="text-muted">"Jamie, was a great help. I will not hesitate to recommend you or contact you again when I need help." Kathy, VA</h3>
                            <br/>
                            <hr/>
                            {/*
                            <h3>
                                <div id="fb-root"></div>
                                <script>(function(d, s, id) {  var js, fjs = d.getElementsByTagName(s)[0];  if (d.getElementById(id)) return;  js = d.createElement(s); js.id = id;  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3";  fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script>
                                <div className="fb-post" data-href="https://www.facebook.com/photo.php?fbid=10208495933259521&amp;set=o.547126288739360&amp;type=3" data-width="500">
                                    <div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/photo.php?fbid=10208495933259521&amp;set=o.547126288739360&amp;type=3">
                                        <p>Beautiful!!! Had an amazing time &#xfe332;&#xfe332;</p>
                                        Posted by <a href="https://www.facebook.com/michele.epps.71">Michele Epps</a> 
                                        on&nbsp;<a href="https://www.facebook.com/photo.php?fbid=10208495933259521&amp;set=o.547126288739360&amp;type=3">Friday, February 19, 2016</a>
                                        </blockquote>
                                    </div>
                                </div>
                            </h3>
                            */}
                        </div>
                    </div>
                </div>
            </section>

            <section id="portfolio" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Certifications</h2>
                            <h3 className="section-subheading text-muted">Yep! We’ve got ‘em!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/certifications/sng1.jpg" className="img-responsive cert" id="cert" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Special Needs Travel Advocate</h4>
                                <p className="text-muted">Special Needs Group</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/certifications/royal.jpg" className="img-responsive cert" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Royal Caribbean - Expert Plus</h4>
                                <p className="text-muted">Royal Caribbean Cruises, Ltd</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/certifications/disney.jpg" className="img-responsive cert" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Disney Certified</h4>
                                <p className="text-muted">College of Disney Knowledge</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">                                
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/certifications/princess.jpg" className="img-responsive cert" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Princess - Commodore</h4>
                                <p className="text-muted">Princess Cruises</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/certifications/avalon.jpg" className="img-responsive cert" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Avalon Waterways Specialist</h4>
                                <p className="text-muted">Globus</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-plus fa-3x"></i>
                                    </div>
                                </div>
                                <img src="img/certifications/special.jpg" className="img-responsive cert" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>Autism-Friendly Certified</h4>
                                <p className="text-muted">Royal Caribbean Cruises, Ltd</p>
                            </div>
                        </div>  
                    </div>
                </div>
            </section>

            <section id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Check out our Blog!</h2>
                            <h3 className="text-muted">Don’t miss a single tip or trick during your planning!</h3><br/>
                            <a href="http://trippinwithjamie.blogspot.com/" className="page-scroll btn btn-xl">Check it out!</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="team" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">The Crew!</h2>
                            <h3 className="section-subheading text-muted">You may or may not care who is behind Trippin’ with Jamie, but if you do, here we are!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img src="img/team/kylene1.jpg" className="img-responsive img-circle" alt="" id="portrait"/>
                                <h4>Kylene Boka</h4>
                                <p className="text-muted">Marketing Manager</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img src="img/team/jamie3.jpg" className="img-responsive img-circle" alt="" id="portrait"/>
                                <h4>Jamie Scheff</h4>
                                <p className="text-muted">Owner & Agent</p>
                                <ul className="list-inline social-buttons">
                                    <li><a href="https://www.facebook.com/trippinwithjamie?fref=ts"><i className="fa fa-facebook"></i></a>
                                    </li>
                                    <li><a href="https://www.linkedin.com/pub/jamie-scheff/5/283/756"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 text-center">
                            <p className="large text-muted">We are passionate about helping you find the best trip for your family and helping you make memories to last a lifetime.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="excursions">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Already have a Vacation Booked?</h2>
                            <h3 className="text-muted">Spice it up with an adventure! Excursions can be super-duper fun. Take a look at what our partners can offer!</h3><br/>
                            <a href="http://www.shoreexcursionsgroup.com/Default.asp?Click=130317" className="page-scroll btn btn-xl">Let me try that</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Book a Vacation!</h2>                   
                            <h3 className="text-muted"> Talk to us about how we can plan your next adventure. Email us at TrippinWithJamie@gmail.com</h3>
                            <br/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
  }
})
