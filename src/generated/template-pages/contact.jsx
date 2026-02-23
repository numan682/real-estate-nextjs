/* eslint-disable */

import { TemplatePageShell } from "@/components/template-page-shell";

export const metadata = {
  title: "Home Real Estate Next.js Template & Dashboard",
  description: "Home Real Estate is a modern Next.js template designed for real estate agencies.",
  keywords: ["Real estate","Property sale","Property buy"],
};

const scripts = [
  "/vendor/jquery.min.js",
  "/vendor/bootstrap/js/bootstrap.bundle.min.js",
  "/vendor/wow/wow.min.js",
  "/vendor/slick/slick.min.js",
  "/vendor/fancybox/fancybox.umd.js",
  "/vendor/jquery.lazy.min.js",
  "/vendor/jquery.counterup.min.js",
  "/vendor/jquery.waypoints.min.js",
  "/vendor/nice-select/jquery.nice-select.min.js",
  "/vendor/validator.js",
  "/vendor/isotope.pkgd.min.js",
  "/js/theme.js"
];

export default function TemplatePage() {
  return (
    <TemplatePageShell scripts={scripts}>
    <div className="main-page-wrapper">

    		<div id="preloader">
    			<div id="ctn-preloader" className="ctn-preloader">
    				<div className="icon"><img src="/images/loader.gif" alt="" className="m-auto d-block" width="64" /></div>
    			</div>
    		</div>




    		<header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
    			<div className="inner-content gap-one">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center justify-content-between">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo_01.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li>
    									<a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="btn-one"><i className="fa-regular fa-lock"></i> <span>Login</span></a>
                                    </li>
    								<li className="d-none d-md-inline-block ms-3">
                                        <a href="/dashboard/add-property" className="btn-two" target="_blank" rel="noopener noreferrer"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></a>
                                    </li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 order-lg-2">
    							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
    								data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    								aria-label="Toggle navigation">
    								<span></span>
    							</button>
    							<div className="collapse navbar-collapse" id="navbarNav">
    								<ul className="navbar-nav align-items-lg-center">
    									<li className="d-block d-lg-none"><div className="logo"><a href="/" className="d-block"><img src="/images/logo/logo_01.svg" alt="" /></a></div></li>
    									<li className="nav-item dashboard-menu">
    										<a className="nav-link" href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Dashboard</a>
    									</li>
    									<li className="nav-item dropdown">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Home
    										</a>
    										<ul className="dropdown-menu">
    											<li><a href="/" className="dropdown-item"><span>Home 01</span></a></li>
    											<li><a href="/index-2" className="dropdown-item"><span>Home 02</span></a></li>
    											<li><a href="/index-3" className="dropdown-item"><span>Home 03</span></a></li>
    											<li><a href="/index-4" className="dropdown-item"><span>Home 04</span></a></li>
    											<li><a href="/index-5" className="dropdown-item"><span>Home 05</span></a></li>
    											<li><a href="/index-6" className="dropdown-item"><span>Home 06</span></a></li>
    											<li><a href="/index-7" className="dropdown-item"><span>Home 07</span></a></li>
    										</ul>
    									</li>
    									<li className="nav-item dropdown mega-dropdown-sm">
    							        	<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Listing
    										</a>
    						                <ul className="dropdown-menu">
    							                <li className="row gx-1">
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Listing Type</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_01" className="dropdown-item"><span>Grid Sidebar-1</span></a></li>
    															<li><a href="/listing_05" className="dropdown-item"><span>Grid Sidebar-2</span></a></li>
    															<li><a href="/listing_02" className="dropdown-item"><span>List Sidebar-1</span></a></li>
    															<li><a href="/listing_06" className="dropdown-item"><span>List Sidebar-2</span></a></li>
    															<li><a href="/listing_03" className="dropdown-item"><span>Grid Top Filter-1</span></a></li>
    															<li><a href="/listing_07" className="dropdown-item"><span>Grid Top Filter-2</span></a></li>
    															<li><a href="/listing_04" className="dropdown-item"><span>List Top Filter-1</span></a></li>
    															<li><a href="/listing_08" className="dropdown-item"><span>List Top Filter-2</span></a></li>
    															<li><a href="/listing_09" className="dropdown-item"><span>Grid Banner Filter-1</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Listing Type</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_11" className="dropdown-item"><span>Grid Banner Filter-2</span></a></li>
    															<li><a href="/listing_10" className="dropdown-item"><span>List Banner Filter-1</span></a></li>
    															<li><a href="/listing_12" className="dropdown-item"><span>List Banner Filter-2</span></a></li>
    															<li><a href="/listing_13" className="dropdown-item"><span>Grid Fullwidth</span></a></li>
    															<li><a href="/listing_14" className="dropdown-item"><span>Grid Fullwidth Map-1</span></a></li>
    															<li><a href="/listing_16" className="dropdown-item"><span>Grid Fullwidth Map-2</span></a></li>
    															<li><a href="/listing_15" className="dropdown-item"><span>List Fullwidth Map-1</span></a></li>
    															<li><a href="/listing_17" className="dropdown-item"><span>List Fullwidth Map-2</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Single Listing</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/listing_details_01" className="dropdown-item"><span>Listing Details-1</span></a></li>
    															<li><a href="/listing_details_02" className="dropdown-item"><span>Listing Details-2</span></a></li>
    															<li><a href="/listing_details_03" className="dropdown-item"><span>Listing Details-3</span></a></li>
    															<li><a href="/listing_details_04" className="dropdown-item"><span>Listing Details-4</span></a></li>
    															<li><a href="/listing_details_05" className="dropdown-item"><span>Listing Details-5</span></a></li>
    															<li><a href="/listing_details_06" className="dropdown-item"><span>Listing Details-6</span></a></li>
    														</ul>
    													</div> 
    												</div>
    											</li>
    						                </ul>
    						            </li>
    									<li className="nav-item dropdown mega-dropdown-sm">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Pages
    										</a>
    										<ul className="dropdown-menu">
    							                <li className="row gx-1">
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Essential</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/about_us_01" className="dropdown-item"><span>About us -1</span></a></li>
    															<li><a href="/about_us_02" className="dropdown-item"><span>About us -2</span></a></li>
    															<li><a href="/agency" className="dropdown-item"><span>Agency</span></a></li>
    															<li><a href="/agency_details" className="dropdown-item"><span>Agency Details</span></a></li>
    															<li><a href="/agent" className="dropdown-item"><span>Agent</span></a></li>
    															<li><a href="/agent_details" className="dropdown-item"><span>Agent Details</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Features</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/project_01" className="dropdown-item"><span>Project -1</span></a></li>
    															<li><a href="/project_02" className="dropdown-item"><span>Project -2</span></a></li>
    															<li><a href="/project_03" className="dropdown-item"><span>Project -3</span></a></li>
    															<li><a href="/project_04" className="dropdown-item"><span>Project -4</span></a></li>
    															<li><a href="/project_details_01" className="dropdown-item"><span>Project Details</span></a></li>
    															<li><a href="/service_01" className="dropdown-item"><span>Services -1</span></a></li>
    															<li><a href="/service_02" className="dropdown-item"><span>Services -2</span></a></li>
    															<li><a href="/service_details" className="dropdown-item"><span>Service Details</span></a></li>
    														</ul>
    													</div> 
    												</div>
    												<div className="col-lg-4">
    													<div className="menu-column">
    														<h6 className="mega-menu-title">Others</h6>
    														<ul className="style-none mega-dropdown-list">
    															<li><a href="/compare" className="dropdown-item"><span>Property Compare</span></a></li>
    															<li><a href="/pricing_01" className="dropdown-item"><span>Pricing -1</span></a></li>
    															<li><a href="/pricing_02" className="dropdown-item"><span>Pricing -2</span></a></li>
    															<li><a href="/contact" className="dropdown-item"><span>Contact Us</span></a></li>
    															<li><a href="/faq" className="dropdown-item"><span>FAQ's</span></a></li>
    															<li><a href="/404" className="dropdown-item"><span>404-Error</span></a></li>
    														</ul>
    													</div> 
    												</div>
    											</li>
    						                </ul>
    									</li>
    									<li className="nav-item dropdown">
    										<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
    											data-bs-auto-close="outside" aria-expanded="false">Blog
    										</a>
    										<ul className="dropdown-menu">
    											<li><a href="/blog_01" className="dropdown-item"><span>Blog Grid</span></a></li>
    											<li><a href="/blog_02" className="dropdown-item"><span>Blog List</span></a></li>
    											<li><a href="/blog_03" className="dropdown-item"><span>Blog 2 column</span></a></li>
    											<li><a href="/blog_details" className="dropdown-item"><span>Blog Details</span></a></li>
    										</ul>
    									</li>
    									<li className="d-md-none ps-2 pe-2 mt-20">
    										<a href="/dashboard/add-property" className="btn-two w-100" target="_blank" rel="noopener noreferrer"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="contact-us border-top mt-130 xl-mt-100 pt-80 lg-pt-60">
    			<div className="container">
                    <div className="row">
                        <div className="col-xxl-9 col-xl-8 col-lg-10 m-auto">
                            <div className="title-one text-center wow fadeInUp">
                                <h3>Questions? Feel Free to Reach Out Via Message.</h3>
                            </div>

                        </div>
                    </div>
    			</div>
                <div className="address-banner wow fadeInUp mt-60 lg-mt-40">
                    <div className="container">
                        <div className="d-flex flex-wrap justify-content-center justify-content-lg-between">
    						<div className="block position-relative z-1 mt-25">
    							<div className="d-xl-flex align-items-center">
    								<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/images/icon/icon_39.svg" alt="" className="lazy-img" /></div>
    								<div className="text">
    									<p className="fs-22">We’r always happy to help.</p>
    									<a href="#" className="tran3s">hello@homerealestate.com</a>
    								</div>

    							</div>
    						</div>

    						<div className="block position-relative skew-line z-1 mt-25">
    							<div className="d-xl-flex align-items-center">
    								<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/images/icon/icon_39.svg" alt="" className="lazy-img" /></div>
    								<div className="text">
    									<p className="fs-22">Our hotline number</p>
    									<a href="#" className="tran3s">+757 699 4478,</a>
    									<a href="#" className="tran3s">&nbsp; +991 377 9731</a>
    								</div>

    							</div>
    						</div>

    						<div className="block position-relative z-1 mt-25">
    							<div className="d-xl-flex align-items-center">
    								<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/images/icon/icon_39.svg" alt="" className="lazy-img" /></div>
    								<div className="text">
    									<p className="fs-22">Live chat</p>
    									<a href="#" className="tran3s">www.homerealestate.com/live-chat</a>
    								</div>

    							</div>
    						</div>

    					</div>
                    </div>
                </div>


                <div className="bg-pink mt-150 xl-mt-120 md-mt-80">
                    <div className="row">
                        <div className="col-xl-7 col-lg-6">
                            <div className="form-style-one wow fadeInUp">
                                <form action="/inc/contact.php" id="contact-form" data-toggle="validator">
                                    <h3>Send Message</h3>
                                    <div className="messages"></div>
                                    <div className="row controls">
                                        <div className="col-12">
                                            <div className="input-group-meta form-group mb-30">
                                                <label htmlFor="">Name*</label>
                                                <input type="text" placeholder="Your Name*" name="name" required="required" data-error="Name is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group-meta form-group mb-40">
                                                <label htmlFor="">Email*</label>
                                                <input type="email" placeholder="Email Address*" name="email" required="required" data-error="Valid email is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group-meta form-group mb-35">
                                                <textarea placeholder="Your message*" name="message" required="required" data-error="Please,leave us a message."></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-12"><button className="btn-nine text-uppercase rounded-3 fw-normal w-100">Send Message</button></div>
                                    </div>
                                </form>
                            </div> 
                        </div>
                        <div className="col-xl-5 col-lg-6 d-flex order-lg-first">
                            <div className="contact-map-banner w-100">
                                <div className="gmap_canvas h-100 w-100">
                                    <iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    		</div>





    		<div className="footer-four position-relative z-1">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1">
    					<div className="row">
    						<div className="col-xxl-3 col-lg-4 mb-60">
    							<div className="footer-intro">
    								<div className="logo mb-20">
    									<a href="/">
    										<img src="/images/logo/logo_06.svg" alt="" />
    									</a>
    								</div> 

    								<p className="mb-30 xs-mb-20">11910 Clyde Rapid Suite 210, Willyand, Virginia, United States</p>
    								<a href="#" className="email tran3s mb-60 md-mb-30">hello@homerealestate.com</a>
    								<ul className="style-none d-flex align-items-center social-icon">
    									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-sm-4 ms-auto mb-30">
    							<div className="footer-nav ps-xl-5">
    								<h5 className="footer-title">Links</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/">Home</a></li>
    									<li><a href="/dashboard/membership" target="_blank" rel="noopener noreferrer">Membership</a></li>
    									<li><a href="/about_us_01">About Company</a></li>
    									<li><a href="/blog_01">Blog</a></li>
    									<li><a href="/blog_02">Explore Careers</a></li>
    									<li><a href="/pricing_02">Pricing</a></li>
    									<li><a href="/dashboard/dashboard-index" target="_blank" rel="noopener noreferrer">Dashboard</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-3 col-sm-4 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">Legal</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/faq">Terms & conditions</a></li>
    									<li><a href="/faq">Cookie</a></li>
    									<li><a href="/faq">Privacy policy</a></li>
    									<li><a href="/faq">Faq’s</a></li>
    								</ul>
    							</div>
    						</div>
    						<div className="col-lg-2 col-sm-4 mb-30">
    							<div className="footer-nav">
    								<h5 className="footer-title">New Listing</h5>
    								<ul className="footer-nav-link style-none">
    									<li><a href="/listing_01">​Buy Apartments</a></li>
    									<li><a href="/listing_02">Buy Condos</a></li>
    									<li><a href="/listing_03">Rent Houses</a></li>
    									<li><a href="/listing_04">Rent Industrial</a></li>
    									<li><a href="/listing_05">Buy Villas</a></li>
    									<li><a href="/listing_06">Rent Office</a></li>
    								</ul>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div className="bottom-footer">
    					<p className="m0 text-center fs-16">Copyright @2024 Home Real Estate.</p>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/assets/ils_06.svg" alt="" className="lazy-img shapes shape_01" />
    		</div> 




            <div className="modal fade" id="loginModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="container">
                        <div className="user-data-form modal-content">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    						<div className="form-wrapper m-auto">
    							<ul className="nav nav-tabs w-100" role="tablist">
    								<li className="nav-item" role="presentation">
    									<button className="nav-link active" data-bs-toggle="tab" data-bs-target="#fc1" role="tab">Login</button>
    								</li>
    								<li className="nav-item" role="presentation">
    									<button className="nav-link" data-bs-toggle="tab" data-bs-target="#fc2" role="tab">Signup</button>
    								</li>
    							</ul>
    							<div className="tab-content mt-30">
    								<div className="tab-pane show active" role="tabpanel" id="fc1">
    									<div className="text-center mb-20">
    										<h2>Welcome Back!</h2>
    										<p className="fs-20 color-dark">Still don't have an account? <a href="#">Sign up</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Email*</label>
    													<input type="email" placeholder="Youremail@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Password*</label>
    													<input type="password" placeholder="Enter Password" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember" />
    														<label htmlFor="remember">Keep me logged in</label>
    													</div>
    													<a href="#">Forget Password?</a>
    												</div> 
    											</div>
    											<div className="col-12">
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Login</button>
    											</div>
    										</div>
    									</form>
    								</div>

    								<div className="tab-pane" role="tabpanel" id="fc2">
    									<div className="text-center mb-20">
    										<h2>Register</h2>
    										<p className="fs-20 color-dark">Already have an account? <a href="#">Login</a></p>
    									</div>
    									<form action="#">
    										<div className="row">
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Name*</label>
    													<input type="text" placeholder="Zubayer Hasan" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-25">
    													<label>Email*</label>
    													<input type="email" placeholder="zubayerhasan@gmail.com" />
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="input-group-meta position-relative mb-20">
    													<label>Password*</label>
    													<input type="password" placeholder="Enter Password" className="pass_log_id" />
    													<span className="placeholder_icon"><span className="passVicon"><img src="/images/icon/icon_68.svg" alt="" /></span></span>
    												</div>
    											</div>
    											<div className="col-12">
    												<div className="agreement-checkbox d-flex justify-content-between align-items-center">
    													<div>
    														<input type="checkbox" id="remember2" />
    														<label htmlFor="remember2">By hitting the "Register" button, you agree to the <a href="#">Terms conditions</a> & <a href="#">Privacy Policy</a></label>
    													</div>
    												</div> 
    											</div>
    											<div className="col-12">
    												<button className="btn-two w-100 text-uppercase d-block mt-20">Sign Up</button>
    											</div>
    										</div>
    									</form>
    								</div>

    							</div>

    							<div className="d-flex align-items-center mt-30 mb-10">
    								<div className="line"></div>
    								<span className="pe-3 ps-3 fs-6">OR</span>
    								<div className="line"></div>
    							</div>
    							<div className="row">
    								<div className="col-sm-6">
    									<a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
    										<img src="/images/icon/google.png" alt="" />
    										<span className="ps-3">Signup with Google</span>
    									</a>
    								</div>
    								<div className="col-sm-6">
    									<a href="#" className="social-use-btn d-flex align-items-center justify-content-center tran3s w-100 mt-10">
    										<img src="/images/icon/facebook.png" alt="" />
    										<span className="ps-3">Signup with Facebook</span>
    									</a>
    								</div>
    							</div>
    						</div>

                        </div>

                    </div>
                </div>
            </div>



    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>































    	</div>
    </TemplatePageShell>
  );
}
