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
    								<img src="/images/logo/logo_06.svg" alt="" />
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
    									<li className="d-block d-lg-none"><div className="logo"><a href="/" className="d-block"><img src="/images/logo/logo_06.svg" alt="" /></a></div></li>
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






    		<div className="property-listing-seven pt-120 lg-pt-100">

                <div className="listing-type-filter">
                    <div className="wrapper">
                        <ul className="style-none d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
                            <li>Select Type:</li>
                            <li><a href="#" className="active">All</a></li>
                            <li><a href="#">Apartments</a></li>
                            <li><a href="#">Villa</a></li>
                            <li><a href="#">Mortgage</a></li>
                            <li><a href="#">Loft</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Flat</a></li>
                            <li><a href="#">Building</a></li>
                            <li><a href="#">Office</a></li>
                            <li><a href="#">Factory</a></li>
                            <li><a href="#">Industry</a></li>
                        </ul>
                    </div>

                </div>

    			<div className="wrapper">
    				<div className="row gx-0">
                        <div className="col-xxl-9 col-lg-8">
                            <div className="ps-3 pe-3 ps-md-4 pe-md-4 ps-xxl-5 pe-xxl-5 pt-50 pb-200 xl-pb-120 md-pb-80">
                                <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-40 lg-mb-30">
    								<div>Showing <span className="color-dark fw-500">1–9</span> of <span className="color-dark fw-500">1,230</span> results</div>
    								<div className="d-flex align-items-center xs-mt-20">
    									<div className="short-filter d-flex align-items-center">
    										<div className="fs-16 me-2">Short by:</div>
    										<select className="nice-select rounded-0">
    											<option value="0">Newest</option>
    											<option value="1">Best Seller</option>
    											<option value="2">Best Match</option>
                                                <option value="3">Price Low</option>
                                                <option value="4">Price High</option>
    										</select>
    									</div>
    									<a href="#" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To List View"><i className="fa-regular fa-bars"></i></a>
    								</div>
    							</div>


                                <div className="row gx-xxl-5">
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR RENT</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel1" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">Blueberry villa</a>
                                                <div className="address">Mirpur 10, Stadium dhaka 1208</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1370</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">03</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$1,710/<sub>m</sub></strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR SELL</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel2" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">White House villa</a>
                                                <div className="address">Muza link road, ca, usa</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1270</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$37,200</strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR SELL</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel3" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">Blueberry villa</a>
                                                <div className="address">Mirpur 10, Stadium</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1270</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16">02 bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$28,300</strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR RENT</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel4" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel4" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel4" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel4" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_32.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">White House villa</a>
                                                <div className="address">Muza link road, ca, usa</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1270</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16">02 bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$2,370/<sub>m</sub></strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR RENT</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel5" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel5" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_33.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">Blueberry villa</a>
                                                <div className="address">Mirpur 10, Stadium</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1270</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16">02 bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$1,329/<sub>m</sub></strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR SELL</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel6" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel6" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel6" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel6" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_34.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">White House villa</a>
                                                <div className="address">Muza link road, ca, usa</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1270</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16">02 bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$28,100</strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR RENT</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel7" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel7" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel7" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel7" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">Blueberry villa</a>
                                                <div className="address">Mirpur 10, Stadium dhaka 1208</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1370</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">03</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$1,710/<sub>m</sub></strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR SELL</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel8" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel8" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel8" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel8" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">White House villa</a>
                                                <div className="address">Muza link road, ca, usa</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1270</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$37,200</strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="col-xxl-4 col-md-6 d-flex mb-80 lg-mb-50 wow fadeInUp" data-wow-delay="0.2s">
                                        <div className="listing-card-one style-two shadow-none h-100 w-100">
                                            <div className="img-gallery">
                                                <div className="position-relative overflow-hidden">
                                                    <div className="tag fw-500">FOR SELL</div>
                                                    <a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
                                                    <div id="carousel9" className="carousel slide">
                                                        <div className="carousel-indicators">
                                                            <button type="button" data-bs-target="#carousel9" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                            <button type="button" data-bs-target="#carousel9" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                            <button type="button" data-bs-target="#carousel9" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        </div>
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_19.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_18.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                            <div className="carousel-item" data-bs-interval="1000000">
                                                                <a href="#" className="d-block"><img src="/images/listing/img_17.jpg" className="w-100" alt="..." /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="property-info pt-20">
                                                <a href="#" className="title tran3s">Blueberry villa</a>
                                                <div className="address">Mirpur 10, Stadium</div>
                                                <ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-15 pt-5">
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_32.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">1270</span> sqft</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_33.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16"><span className="color-dark">02</span> bed</span>
                                                    </li>
                                                    <li className="d-flex align-items-center">
                                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_34.svg" alt="" className="lazy-img icon me-2" />
                                                        <span className="fs-16">02 bath</span>
                                                    </li>
                                                </ul>
                                                <div className="pl-footer top-border bottom-border d-flex align-items-center justify-content-between">
                                                    <strong className="price fw-500 color-dark">$28,300</strong>
                                                    <a href="#" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="pt-5">
                                    <ul className="pagination-two d-inline-flex align-items-center justify-content-center style-none">
                                        <li><a href="#"><i className="fa-regular fa-chevron-left"></i></a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><span>...</span></li>
                                        <li><a href="#">13</a></li>
                                        <li><a href="#"><i className="fa-regular fa-chevron-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 order-lg-first">
                            <div className="advance-search-panel h-100 border-end">
                                <div className="main-bg grey-bg h-100">
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="input-box-one border-0 mb-15">
    												<div className="label2">Type</div>
    												<select className="nice-select fw-normal box-style">
    													<option value="1">Buy Apartments</option>
    													<option value="2">Rent Condos</option>
    													<option value="3">Sell Houses</option>
    													<option value="4">Rent Industrial</option>
    													<option value="6">Sell Villas</option>
    												</select>
    											</div>

                                            </div>
                                            <div className="col-12">
                                                <div className="input-box-one border-0 mb-15">
                                                    <div className="label2">Keyword</div>
                                                    <input type="text" placeholder="Ex: home, villa" className="type-input box-style" />
                                                </div>

                                            </div>
                                            <div className="col-12">
                                                <div className="input-box-one border-0 mb-15">
                                                    <div className="label2">Location</div>
                                                    <select className="nice-select location fw-normal box-style">
                                                        <option value="1">Washington DC</option>
                                                        <option value="2">Acapulco, Mexico</option>
                                                        <option value="3">Berlin, Germany</option>
                                                        <option value="4">Cannes, France</option>
                                                        <option value="5">Delhi, India</option>
                                                        <option value="6">Giza, Egypt </option>
                                                        <option value="7">Havana, Cuba</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-box-one border-0 mb-40 sm-mb-20">
                                                    <div className="label2">Bed</div>
                                                    <select className="nice-select fw-normal box-style">
                                                        <option value="0">Any</option>
                                                        <option value="1">3+</option>
                                                        <option value="2">4+</option>
                                                        <option value="3">2+</option>
                                                        <option value="4">1+</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-sm-6">
                                                <div className="input-box-one border-0 mb-40 sm-mb-20">
                                                    <div className="label2">Bath</div>
                                                    <select className="nice-select fw-normal box-style">
                                                        <option value="0">Any</option>
                                                        <option value="1">2+</option>
                                                        <option value="2">4+</option>
                                                        <option value="3">3+</option>
                                                        <option value="4">1+</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="col-12">
                                                <h6 className="block-title fw-bold mb-30">Amenities</h6>
                                                <ul className="style-none d-flex flex-wrap justify-content-between filter-input">
    												<li>
    													<input type="checkbox" name="Amenities" value="01" />
    													<label>A/C & Heating</label>
    												</li>
    												<li>
    													<input type="checkbox" name="Amenities" value="02" />
    													<label>Garages</label>
    												</li>
    												<li>
    													<input type="checkbox" name="Amenities" value="03" />
    													<label>Garden</label>
    												</li>
    												<li>
    													<input type="checkbox" name="Amenities" value="04" />
    													<label>Disabled Access</label>
    												</li>
    												<li>
    													<input type="checkbox" name="Amenities" value="05" />
    													<label>Swimming Pool</label>
    												</li>
                                                    <li>
    													<input type="checkbox" name="Amenities" value="06" />
    													<label>Parking</label>
    												</li>
                                                    <li>
    													<input type="checkbox" name="Amenities" value="07" />
    													<label>Wifi</label>
    												</li>
                                                    <li>
    													<input type="checkbox" name="Amenities" value="08" />
    													<label>Pet Friendly</label>
    												</li>
                                                    <li>
    													<input type="checkbox" name="Amenities" value="09" />
    													<label>Ceiling Height</label>
    												</li>
                                                    <li>
    													<input type="checkbox" name="Amenities" value="10" />
    													<label>Fireplace</label>
    												</li>
                                                    <li>
    													<input type="checkbox" name="Amenities" value="11" />
    													<label>Play Ground</label>
    												</li>
                                                    <li>
    													<input type="checkbox" name="Amenities" value="12" />
    													<label>Elevator</label>
    												</li>
    											</ul>
                                            </div>
                                            <div className="col-12">
                                                <h6 className="block-title fw-bold mt-40 mb-15">Price range</h6>
                                                <div className="price-ranger">
    												<div className="price-input style-two d-flex align-items-center justify-content-end pt-5">
                                                        <div className="fs-16 opacity-50 me-auto">Slide</div>
    													<div className="field position-relative d-flex align-items-center">
    														<input type="number" className="input-min" value="2500" readonly />
    													</div>
    													<div className="pe-3">-</div>
    													<div className="field position-relative d-flex align-items-center">
    														<input type="number" className="input-max text-start" value="35000" readonly />
    													</div>
    												</div>
    												<div className="slider">
    													<div className="progress"></div>
    												</div>
    												<div className="range-input mb-10">
    													<input type="range" className="range-min" min="1000" max="80000" value="2500" step="500" />
    													<input type="range" className="range-max" min="0" max="100000" value="35000" step="500" />
    												</div>
    											</div>

                                            </div>
                                            <div className="col-12">
                                                <div className="input-box-one border-0 mb-35 mt-35">
    												<div className="label2">Min Year Built</div>
    												<select className="nice-select fw-normal box-style">
    													<option value="1">2020</option>
    													<option value="2">2019</option>
    													<option value="3">2018</option>
    													<option value="4">2017</option>
    													<option value="6">2016</option>
    												</select>
    											</div>

                                            </div>
                                            <div className="col-12">
                                                <h6 className="block-title fw-bold mb-20">SQFT</h6>
                                                <div className="d-flex align-items-center sqf-ranger">
                                                    <input type="text" placeholder="Min" className="rounded-0" />
                                                    <div className="divider"></div>
                                                    <input type="text" placeholder="Max" className="rounded-0" />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <button className="fw-500 text-uppercase tran3s apply-search w-100 rounded-0 mt-40 mb-25">
                                                    <i className="fa-light fa-magnifying-glass"></i>
                                                    <span>Search</span>
                                                </button>
                                            </div>
                                            <div className="col-12">
                                                <div className="d-flex justify-content-between form-widget">
                                                    <a href="#" className="tran3s">
                                                        <i className="fa-regular fa-arrows-rotate"></i>
                                                        <span>Reset Filter</span>
                                                    </a>
                                                    <a href="#" className="tran3s">
                                                        <i className="fa-regular fa-star"></i>
                                                        <span>Save Search</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
