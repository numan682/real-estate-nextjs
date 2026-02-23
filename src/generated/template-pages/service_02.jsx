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





            <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="modal-content d-flex justify-content-center">
                        <form action="#">
                            <input type="text" placeholder="Buy Apartments, Rent Condos, Sell Houses" />
                            <button><i className="fa-light fa-arrow-right-long"></i></button>
                        </form>
                    </div>
                </div>
            </div>




    		<header className="theme-main-menu menu-overlay menu-style-six sticky-menu">
    			<div className="inner-content gap-two">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li className="d-none d-md-inline-block me-4">
                                        <a href="/dashboard/add-property" className="btn-ten rounded-0" target="_blank" rel="noopener noreferrer"><span>Add Listing</span> <i className="bi bi-arrow-up-right"></i></a>
                                    </li>
    								<li>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="login-btn-two rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="fa-regular fa-lock"></i></a>
                                    </li>
                                    <li>
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#searchModal" className="search-btn-one rounded-circle tran3s d-flex align-items-center justify-content-center"><i className="bi bi-search"></i></a>
                                    </li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
    							<button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse"
    								data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
    								aria-label="Toggle navigation">
    								<span></span>
    							</button>
    							<div className="collapse navbar-collapse ms-xl-5" id="navbarNav">
    								<ul className="navbar-nav align-items-lg-center">
    									<li className="d-block d-lg-none"><div className="logo"><a href="/" className="d-block"><img src="/images/logo/logo.svg" alt="" /></a></div></li>
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
    										<a href="/dashboard/add-property" className="btn-ten w-100 rounded-0" target="_blank" rel="noopener noreferrer"><span>Add Listing</span> <i className="bi bi-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="inner-banner-two inner-banner z-1 pt-160 lg-pt-130 pb-160 xl-pb-120 md-pb-80 position-relative" style={{ backgroundImage: "url(images/media/img_49.jpg)" }}>
    			<div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-35 xl-mb-20 pt-15">Our Services</h3>
                            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                                <li><a href="/">Home</a></li>
                                <li>/</li>
                                <li>Services</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <p className="sub-heading">Over 745,000 listings, apartments, lots and  plots available now!</p>
                        </div>
                    </div>
    			</div>
    		</div>






    		<div className="block-feature-eleven mt-150 xl-mt-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-lg-5">
    						<div className="title-one md-mb-40">
                                <h3>1,230+ <span>Companies <img src="/images/lazy.svg" data-src="/images/shape/title_shape_10.svg" alt="" className="lazy-img" /></span>Trust by us.</h3>
                            </div>

    					</div>
    					<div className="col-xxl-6 col-lg-7 ms-auto">
    						<p className="fs-24 lh-lg mb-30 color-dark">Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home.  745,000 apartments & home for sell, rent & mortgage.</p>
                            <div className="d-inline-flex flex-wrap align-items-center">
                                <a href="/about_us_02" className="btn-five md rounded-0 mt-20 me-5"><span>More Details</span></a>
                                <a href="/contact" className="btn-three mt-20"><span>Request a Callback</span> <i className="fa-light fa-arrow-right-long"></i></a>
                            </div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="partner-section-two mt-100 lg-mt-80">
    			<div className="container container-large">
    				<div className="wrapper bottom-border pb-55 lg-pb-40">
    					<div className="partner-logo-two">
                            <div className="item"><img src="/images/logo/p_logo_07.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_08.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_09.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_10.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_11.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_12.png" alt="" /></div>
                            <div className="item"><img src="/images/logo/p_logo_09.png" alt="" /></div>
                        </div>
    				</div>
    			</div>
    		</div>




    		<div className="block-feature-seven position-relative z-1 mt-150 xl-mt-120 lg-mt-100">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="text-center wow fadeInUp">
    						<div className="title-one">
                                <h3><span>We’r Here <img src="/images/lazy.svg" data-src="/images/shape/title_shape_10.svg" alt="" className="lazy-img" /></span>to help you</h3>
                                <p className="fs-22 mt-xs">Explore featured properties for sale.</p>
                            </div>

    					</div>

    					<div className="wrapper position-relative z-1 mt-45 lg-mt-20 mb-100 lg-mb-50">
    						<div className="row gx-xxl-5">
    							<div className="col-lg-4 col-md-6 wow fadeInUp">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_19.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
                                            <div className="btn-line tran3s fw-500 text-uppercase">BUY PROPERTY</div>
    										<h4 className="mt-15 mb-35">Explore Home & Buy</h4>
    										<a href="/listing_02" className="btn-four rounded-circle m-auto"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_20.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
                                            <div className="btn-line tran3s fw-500 text-uppercase">RENT PROPERTY</div>
    										<h4 className="mt-15 mb-35">List & Sell Quickly</h4>
    										<a href="/listing_02" className="btn-four rounded-circle m-auto"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
    								<div className="card-style-two overflow-hidden position-relative z-1 mt-30">
    									<img src="/images/lazy.svg" data-src="/images/media/img_21.jpg" alt="" className="lazy-img w-100 tran5s" />
    									<div className="content text-center">
                                            <div className="btn-line tran3s fw-500 text-uppercase">SELL PROPERTY</div>
    										<h4 className="mt-15 mb-35">Discover & get Rental</h4>
    										<a href="/listing_02" className="btn-four rounded-circle m-auto"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    						</div>
    					</div>

    				</div>
    			</div>
    		</div>





    		<div className="block-feature-seventeen dark-bg position-relative z-1 pt-120 xl-pt-80 pb-140 xl-pb-80">
    			<div className="container">
    				<div className="row">
    					<div className="col-xl-8 m-auto">
    						<div className="title-one text-center wow fadeInUp mb-40 lg-mb-20">
    							<h3 className="text-white">Core <span>Services<img src="/images/lazy.svg" data-src="/images/shape/title_shape_07.svg" alt="" className="lazy-img" /></span></h3>
    							<p className="fs-22 color-dark text-white">Over 745K listings of apartments, lots, plots - available today.</p>
    						</div>

    					</div>
    				</div>
    				<div className="row gx-xxl-5">
    					<div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_69.svg" alt="" className="lazy-img" /></div>
                                <h6>Buy a home</h6>
                                <p>Explore Home Real Estate’s 2 million+ homes and uncover your ideal living space.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Buy Home</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_70.svg" alt="" className="lazy-img" /></div>
                                <h6>Rent a Home</h6>
                                <p>Discover a rental you'll love on Home Real Estate, thanks to 35+ filters.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Rent Home</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_71.svg" alt="" className="lazy-img" /></div>
                                <h6>Sell Home</h6>
                                <p>List, sell, thrive – with our top-notch real estate agency.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Sell Home</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_69.svg" alt="" className="lazy-img" /></div>
                                <h6>Mortgage</h6>
                                <p>Explore Home Real Estate’s 2 million+ homes and uncover your ideal living space.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Buy Home</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_70.svg" alt="" className="lazy-img" /></div>
                                <h6>Consulting</h6>
                                <p>Discover a rental you'll love on Home Real Estate, thanks to 35+ filters.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Rent Home</a>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="card-style-ten rounded-0 d-flex align-items-start flex-column w-100 h-100">
                                <div className="icon d-flex align-items-center justify-content-center rounded-circle tran3s"><img src="/images/lazy.svg" data-src="/images/icon/icon_71.svg" alt="" className="lazy-img" /></div>
                                <h6>Property Managements</h6>
                                <p>List, sell, thrive – with our top-notch real estate agency.</p>
                                <a href="/service_details" className="btn-twelve sm mt-auto">Sell Home</a>
                            </div>

                        </div>
    				</div>
    			</div>
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_75.svg" alt="" className="lazy-img shapes shape_01" />
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_76.svg" alt="" className="lazy-img shapes shape_02" />
    		</div>





    		<div className="block-feature-ten mt-170 xl-mt-120 md-mt-100 mb-150 xl-mb-100">
    			<div className="container container-large">
    				<div className="row">
    					<div className="col-xxl-5 col-lg-6 ms-auto order-lg-last wow fadeInRight">
    						<div className="pb-45">
    							<div className="title-one mb-70 lg-mb-50">
                                    <div className="upper-title">Why US</div>
    								<h3>Find you Dream Home Easily.</h3>
    							</div>

                                <div className="accordion accordion-style-one top-bottom-line p0 mb-80 lg-mb-50" id="accordionOne">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                Advance Search
                                            </button>
                                          </h2>
                                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionOne">
                                            <div className="accordion-body">
                                                <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</p>
                                            </div>
                                          </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Exert Agents for any help
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                            <div className="accordion-body">
                                                <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                                Protected payments, every time
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionOne">
                                            <div className="accordion-body">
                                                <p>It only takes 5 minutes. Set-up is smooth & simple, with fully customisable filter to the right one.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    							<a href="/contact" className="btn-five rounded-0">Contact us</a>
    						</div>
    					</div>
    					<div className="col-lg-6">
    						<div className="media-gallery position-relative z-1 h-100 wow fadeInLeft">
    							<div className="bg" style={{ backgroundImage: "url(images/media/img_56.jpg)" }}>
    								<div className="card-style-three p0">
    									<div className="bg-wrapper text-center">
    										<h3>07+</h3>
    										<p>Years Experience <br />with proud.</p>
    									</div>
    								</div>
    								<img src="/images/lazy.svg" data-src="/images/assets/screen_05.jpg" alt="" className="lazy-img screen_01" />
    							</div>
    						</div>

    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-two position-relative z-1 pt-90 lg-pt-50 pb-90 lg-pb-50">
    			<div className="container">
    				<div className="row align-items-center">
    					<div className="col-lg-6">
    						<div className="title-one text-center text-lg-start md-mb-40 pe-xl-5">
    							<h3 className="text-white m0">Start your <span>Journey<img src="/images/lazy.svg" data-src="/images/shape/title_shape_06.svg" alt="" className="lazy-img" /></span> As a Retailer.</h3>
    						</div>

    					</div>
    					<div className="col-lg-6">
    						<div className="form-wrapper me-auto ms-auto me-lg-0">
    							<form action="#">
    								<input type="email" placeholder="Email address" className="rounded-0" />
    								<button className="rounded-0">Get Started</button>
    							</form>
    							<div className="fs-16 mt-10 text-white">Already a Agent? <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Sign in.</a></div>
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
    										<img src="/images/logo/logo.svg" alt="" />
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
