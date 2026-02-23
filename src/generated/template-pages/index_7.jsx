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
  "https://maps.google.com/maps/api/js",
  "/vendor/gmap.js",
  "/js/map-script.js",
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




    		<header className="theme-main-menu menu-overlay menu-style-one sticky-menu">
    			<div className="inner-content gap-one">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center justify-content-between">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
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
    										<a href="/dashboard/add-property" className="btn-two w-100" target="_blank" rel="noopener noreferrer"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="hero-banner-seven z-2 position-relative mt-120 lg-mt-100">
                <div id="google-map-area" className="h-100">
                    <div className="google-map-home" id="contact-google-map" data-map-lat="40.925372" data-map-lng="-74.276544" data-icon-path="images/home2/map-icon.png" data-map-title="Awesome Place" data-map-zoom="12"></div>
                </div>
    			<div className="search-wrapper-overlay z-3">
                    <div className="container container-large">
                        <div className="position-relative">
                            <div className="row">
                                <div className="col-12">
                                    <div className="search-wrapper-one layout-one position-relative">
                                        <nav className="search-filter-nav-one d-flex">
                                            <div className="nav nav-tabs border-0" role="tablist">
                                                <button className="nav-link active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">Buy</button>
                                                <button className="nav-link" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">Rent</button>
                                                <button className="nav-link" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">Sell</button>
                                            </div>
                                        </nav>
                                        <div className="bg-wrapper border-0">
                                            <div className="tab-content">
                                                <div className="tab-pane show active" id="buy" role="tabpanel" aria-labelledby="buy-tab" tabIndex="0">
                                                    <form action="#">
                                                        <div className="row gx-0 align-items-center">
                                                            <div className="col-xxl-2 col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
                                                                    <div className="label">I’m looking to...</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">Buy Apartments</option>
                                                                        <option value="2">Buy Condos</option>
                                                                        <option value="3">Buy Houses</option>
                                                                        <option value="4">Buy Industrial</option>
                                                                        <option value="6">Buy Villas</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
                                                                    <div className="label">Location</div>
                                                                    <select className="nice-select location fw-normal">
                                                                        <option value="1">Dhanmondi, Dhaka</option>
                                                                        <option value="2">Acapulco, Mexico</option>
                                                                        <option value="3">Berlin, Germany</option>
                                                                        <option value="4">Cannes, France</option>
                                                                        <option value="5">Delhi, India</option>
                                                                        <option value="6">Giza, Egypt </option>
                                                                        <option value="7">Havana, Cuba</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left border-lg-0">
                                                                    <div className="label">Price Range</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">$10,000 - $200,000</option>
                                                                        <option value="2">$200,000 - $300,000</option>
                                                                        <option value="2">$300,000 - $400,000</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xxl-4 col-xl-3">
                                                                <div className="input-box-one lg-mt-10">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center rounded-3 me-3">
                                                                            <span className="d-xl-none d-xxl-block">ADVANCE Search</span>
                                                                            <i className="fa-light fa-sliders-up"></i>
                                                                        </a>
                                                                        <button className="fw-500 text-uppercase tran3s search-btn-four rounded-3">
                                                                            <span>Search</span>
                                                                            <i className="fa-light fa-magnifying-glass"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane" id="rent" role="tabpanel" aria-labelledby="rent-tab" tabIndex="0">
                                                    <form action="#">
                                                        <div className="row gx-0 align-items-center">
                                                            <div className="col-xxl-2 col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
                                                                    <div className="label">I’m looking to...</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">Rent Apartments</option>
                                                                        <option value="2">Rent Condos</option>
                                                                        <option value="3">Rent Houses</option>
                                                                        <option value="4">Rent Industrial</option>
                                                                        <option value="6">Rent Villas</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
                                                                    <div className="label">Location</div>
                                                                    <select className="nice-select location fw-normal">
                                                                        <option value="1">Dhanmondi, Dhaka</option>
                                                                        <option value="2">Acapulco, Mexico</option>
                                                                        <option value="3">Berlin, Germany</option>
                                                                        <option value="4">Cannes, France</option>
                                                                        <option value="5">Delhi, India</option>
                                                                        <option value="6">Giza, Egypt </option>
                                                                        <option value="7">Havana, Cuba</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left border-lg-0">
                                                                    <div className="label">Price Range</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">$10,000 - $200,000</option>
                                                                        <option value="2">$200,000 - $300,000</option>
                                                                        <option value="2">$300,000 - $400,000</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xxl-4 col-xl-3">
                                                                <div className="input-box-one lg-mt-10">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center rounded-3 me-3">
                                                                            <span className="d-xl-none d-xxl-block">ADVANCE Search</span>
                                                                            <i className="fa-light fa-sliders-up"></i>
                                                                        </a>
                                                                        <button className="fw-500 text-uppercase tran3s search-btn-four rounded-3">
                                                                            <span>Search</span>
                                                                            <i className="fa-light fa-magnifying-glass"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="tab-pane" id="sell" role="tabpanel" aria-labelledby="sell-tab" tabIndex="0">
                                                    <form action="#">
                                                        <div className="row gx-0 align-items-center">
                                                            <div className="col-xxl-2 col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
                                                                    <div className="label">I’m looking to...</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">Sell Apartments</option>
                                                                        <option value="2">Sell Condos</option>
                                                                        <option value="3">Sell Houses</option>
                                                                        <option value="4">Sell Industrial</option>
                                                                        <option value="6">Sell Villas</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left">
                                                                    <div className="label">Location</div>
                                                                    <select className="nice-select location fw-normal">
                                                                        <option value="1">Dhanmondi, Dhaka</option>
                                                                        <option value="2">Acapulco, Mexico</option>
                                                                        <option value="3">Berlin, Germany</option>
                                                                        <option value="4">Cannes, France</option>
                                                                        <option value="5">Delhi, India</option>
                                                                        <option value="6">Giza, Egypt </option>
                                                                        <option value="7">Havana, Cuba</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xl-3 col-lg-4">
                                                                <div className="input-box-one border-left border-lg-0">
                                                                    <div className="label">Price Range</div>
                                                                    <select className="nice-select fw-normal">
                                                                        <option value="1">$10,000 - $200,000</option>
                                                                        <option value="2">$200,000 - $300,000</option>
                                                                        <option value="2">$300,000 - $400,000</option>
                                                                    </select>
                                                                </div>

                                                            </div>
                                                            <div className="col-xxl-4 col-xl-3">
                                                                <div className="input-box-one lg-mt-10">
                                                                    <div className="d-flex align-items-center justify-content-center">
                                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center rounded-3 me-3">
                                                                            <span className="d-xl-none d-xxl-block">ADVANCE Search</span>
                                                                            <i className="fa-light fa-sliders-up"></i>
                                                                        </a>
                                                                        <button className="fw-500 text-uppercase tran3s search-btn-four rounded-3">
                                                                            <span>Search</span>
                                                                            <i className="fa-light fa-magnifying-glass"></i>
                                                                        </button>
                                                                    </div>
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
                        </div>
                    </div>
                </div>
    		</div>





    		<div className="category-section-one grey-bg pt-130 pb-110 xl-pb-80">
    			<div className="container container-large">
                    <div className="position-relative z-1">
                        <h4 className="mb-50 xl-mb-30 text-center text-md-start">Popular Categories.</h4>
                        <div className="wrapper">
                            <ul className="d-flex flex-wrap justify-content-center justify-content-xxl-between style-none">
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_15.svg" alt="" className="lazy-img invert" />
                                        <span>Shopping Mall</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_16.svg" alt="" className="lazy-img invert" />
                                        <span>Apartments</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_17.svg" alt="" className="lazy-img invert" />
                                        <span>Villa</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_18.svg" alt="" className="lazy-img invert" />
                                        <span>Industry</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_19.svg" alt="" className="lazy-img invert" />
                                        <span>Office</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_20.svg" alt="" className="lazy-img invert" />
                                        <span>Medical</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_21.svg" alt="" className="lazy-img invert" />
                                        <span>House</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/listing_01" className="d-flex align-items-center fw-500 tran3s">
                                        <img src="/images/lazy.svg" data-src="/images/icon/icon_22.svg" alt="" className="lazy-img invert" />
                                        <span>Loft</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="section-btn text-center sm-mt-40">
                            <a href="/listing_01" className="btn-eleven"><span>See all categories</span> <i className="bi bi-chevron-right"></i></a>
                        </div>

                    </div>
                </div>
    		</div>





    		<div className="block-feature-one mt-150 xl-mt-120">
    			<div className="container">
    				<div className="title-one text-center mb-50 xl-mb-30 lg-mb-20 wow fadeInUp">
    					<h3>Unlock Home Real Estate's <span>advantages <img src="/images/lazy.svg" data-src="/images/shape/title_shape_01.svg" alt="" className="lazy-img" /></span></h3>
    					<p className="fs-24">Your trusted real estate partner in every transaction.</p>
    				</div>


    				<div className="row gx-xl-5">
    					<div className="col-md-4">
    						<div className="card-style-one text-center wow fadeInUp mt-40">
    							<img src="/images/lazy.svg" data-src="/images/icon/icon_01.svg" alt="" className="lazy-img m-auto icon" />
    							<div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Buy a home</div>
    							<p className="fs-24 ps-xxl-4 pe-xxl-4">Explore Home Real Estate’s 2 million+ homes and uncover your ideal living space.</p>
    						</div>

    					</div>
    					<div className="col-md-4">
    						<div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.1s">
    							<img src="/images/lazy.svg" data-src="/images/icon/icon_02.svg" alt="" className="lazy-img m-auto icon" />
    							<div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Rent a home</div>
    							<p className="fs-24 ps-xxl-3 pe-xxl-3">Discover a rental you'll love on Home Real Estate, thanks to 35+ filters and tailored keywords.</p>
    						</div>

    					</div>
    					<div className="col-md-4">
    						<div className="card-style-one text-center wow fadeInUp mt-40" data-wow-delay="0.2s">
    							<img src="/images/lazy.svg" data-src="/images/icon/icon_03.svg" alt="" className="lazy-img m-auto icon" />
    							<div className="fs-16 text-uppercase fw-500 fs-text mt-35 md-mt-30 mb-20">Sell property</div>
    							<p className="fs-24 ps-xxl-4 pe-xxl-4">List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.</p>
    						</div>

    					</div>
    				</div>
    			</div>
    		</div>





            <div className="video-banner-one mt-150 xl-mt-120 md-mt-80">
                <div className="container">
                    <div className="bg-wrapper position-relative z-1 overflow-hidden d-flex align-items-center justify-content-center" style={{ backgroundImage: "url(images/media/img_50.jpg)" }}>
                        <a className="fancybox video-icon d-flex align-items-center justify-content-center rounded-circle tran3s" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0" tabIndex="-1">
                            <i className="fa-solid fa-play"></i>
                        </a>
                    </div>

                </div>
            </div>






    		<div className="block-feature-three mt-150 xl-mt-120">
    			<div className="container">
    				<div className="position-relative z-1">
    					<div className="title-one text-center mb-75 xl-mb-50 md-mb-30 wow fadeInUp">
    						<h3>Explore Popular <span>Location <img src="/images/lazy.svg" data-src="/images/shape/title_shape_02.svg" alt="" className="lazy-img" /></span></h3>
    						<p className="fs-22">Explore the latest listings & projects in diverse areas</p>
    					</div>


    					<div className="property-location-slider-one">
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_05.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">Kelowna</h5>
    									<p className="text-white fw-light">1,230 Properties</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_06.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">California</h5>
    									<p className="text-white fw-light">1,190 Properties</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_07.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">New York</h5>
    									<p className="text-white fw-light">1,710 Properties</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_08.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">Miami</h5>
    									<p className="text-white fw-light">670 Properties</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    						<div className="item">
    							<div className="location-card-one position-relative z-1 d-flex align-items-end" style={{ backgroundImage: "url(images/media/img_09.jpg)" }}>
    								<div className="content text-center w-100 tran3s">
    									<h5 className="text-white fw-normal">Dhaka</h5>
    									<p className="text-white fw-light">1,670 Properties</p>
    								</div>
    								<a href="/listing_01" className="stretched-link"></a>
    							</div>

    						</div>
    					</div>
    					<ul className="slider-arrows slick-arrow-one d-flex justify-content-between style-none">
    						<li className="prev_a slick-arrow"><i className="fa-sharp fa-light fa-angle-left"></i></li>
    						<li className="next_a slick-arrow"><i className="fa-sharp fa-light fa-angle-right"></i></li>
    					</ul>
    				</div>
    			</div>
    		</div>





    		<div className="property-listing-four bg-pink-three position-relative z-1  pt-120 xl-pt-80 pb-110 xl-pb-60 mt-170 xl-mt-140 lg-mt-120">
    			<div className="container container-large">
    				<div className="position-relative z-1">
    					<div className="title-one mb-60 lg-mb-40 wow fadeInUp">
    						<h3>New <span>Listings <img src="/images/lazy.svg" data-src="/images/shape/title_shape_03.svg" alt="" className="lazy-img" /></span></h3>
    						<p className="fs-22 mt-xs">Explore latest & featured properties for sale.</p>
    					</div>


    					<div className="listing-slider-one vw-100">
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">FOR RENT</div>
    										<img src="/images/listing/img_13.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											03 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    											<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    											<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">Blueberry villa.</a>
    									<div className="address">Mirpur 10, Stadium dhaka 1208</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">1780</strong> sqft</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> bed</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">02</strong> bath</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$34,900</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    										<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											03 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img2" data-caption="White House villa"></a>
    											<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img2" data-caption="White House villa"></a>
    											<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img2" data-caption="White House villa"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">White House villa</a>
    									<div className="address">California link road, ca, usa</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">2340</strong> sqft</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">04</strong> bed</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> bath</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$28,100</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    										<img src="/images/listing/img_15.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											04 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Luxury villa in Dal lake."></a>
    											<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img3" data-caption="Luxury villa in Dal lake."></a>
    											<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img3" data-caption="Luxury villa in Dal lake."></a>
    											<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img3" data-caption="Luxury villa in Dal lake."></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">Luxury villa in Dal lake.</a>
    									<div className="address">Mirpur 10, Stadium</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">1857</strong> sqft</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> bed</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">01</strong> bath</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$42,500</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    										<img src="/images/listing/img_16.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											04 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img4" data-caption="South Sun House"></a>
    											<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img4" data-caption="South Sun House"></a>
    											<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img4" data-caption="South Sun House"></a>
    											<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img4" data-caption="South Sun House"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">South Sun House</a>
    									<div className="address">Mirpur 10, Stadium</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">2450</strong> sqft</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">04</strong> bed</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> bath</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$55,500</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    						<div className="item">
    							<div className="listing-card-one style-three border-30 mb-50">
    								<div className="img-gallery p-15">
    									<div className="position-relative border-20 overflow-hidden">
    										<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    										<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    										<a href="/listing_details_04" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    										<div className="img-slider-btn">
    											03 <i className="fa-regular fa-image"></i>
    											<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img5" data-caption="White House villa"></a>
    											<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img5" data-caption="White House villa"></a>
    											<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img5" data-caption="White House villa"></a>
    										</div>
    									</div>
    								</div>

    								<div className="property-info pe-4 ps-4">
    									<a href="/listing_details_04" className="title tran3s">White House villa</a>
    									<div className="address">California link road, ca, usa</div>
    									<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between">
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">2340</strong> sqft</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">04</strong> bed</span>
    										</li>
    										<li className="d-flex align-items-center">
    											<span className="fs-16"><strong className="fw-500 color-dark">03</strong> bath</span>
    										</li>
    									</ul>
    									<div className="pl-footer top-border d-flex align-items-center justify-content-between">
    										<strong className="price fw-500 color-dark">$28,100</strong>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>
    								</div>

    							</div>

    						</div>
    					</div>
    					<div className="section-btn text-center">
    						<a href="/listing_04" className="btn-eleven fst-italic"><span>See all properties</span></a>
    					</div>
    					<ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none md-mt-30">
    						<li className="prev_b slick-arrow"><i className="bi bi-arrow-left"></i></li>
    						<li className="next_b slick-arrow"><i className="bi bi-arrow-right"></i></li>
    					</ul>
    				</div>
    			</div>
    		</div>




    		<div className="fancy-banner-one position-relative z-1 pt-160 xl-pt-140 lg-pt-80 pb-140 xl-pb-120 lg-pb-100">
    			<div className="container">
    				<div className="row">
    					<div className="col-lg-6 wow fadeInLeft">
    						<div className="title-one mb-45 lg-mb-30">
    							<h3 className="text-white">Exclusive <span>Monthly <img src="/images/lazy.svg" data-src="/images/shape/title_shape_04.svg" alt="" className="lazy-img" /></span>Deal for you.</h3>
    							<p className="fs-24 text-white pe-xl-5 me-xxl-5">Don't miss out on this personalized monthly exclusive offer for you.</p>
    						</div>

    						<a href="/listing_details_02" className="btn-six">More Details</a>
    					</div>
    					<div className="col-lg-6 wow fadeInRight">
    						<div className="property-item md-mt-60 position-relative z-1">
    							<div className="row gx-0">
    								<div className="col-md-5 d-flex">
    									<div className="gutter border-right w-100 h-100">
    										<div className="tag mb-20">FOR SELL</div>
    										<h4 className="mb-70 sm-mb-40">Luxury fisa orkit villa.</h4>
    										<ul className="style-none d-flex action-icons">
    											<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    											<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    										</ul>
    									</div>

    								</div>
    								<div className="col-md-7 d-flex">
    									<div className="gutter w-100 h-100">
    										<p>Mirpur 10, National Stadium, 1210, Dhaka, BD</p>
    										<h2 className="price text-center">$28,100.00</h2>
    										<ul className="style-none d-flex feature">
    											<li>
    												<strong className="d-block color-dark fw-500 fs-20">2137</strong>
    												<span className="fs-16">sqft</span>
    											</li>
    											<li className="text-center">
    												<strong className="d-block color-dark fw-500 fs-20">03</strong>
    												<span className="fs-16">bed</span>
    											</li>
    											<li className="text-end">
    												<strong className="d-block color-dark fw-500 fs-20">02</strong>
    												<span className="fs-16">bath</span>
    											</li>
    										</ul>
    									</div>

    								</div>
    							</div>
    							<div className="button-group gutter d-flex justify-content-between align-items-center">
    								<a href="/listing_details_02" className="btn-three"><span>Check Full Details</span></a>
    								<a href="/listing_details_02" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    							</div>
    						</div>

    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="feedback-section-four position-relative overflow-hidden z-1 pt-150 lg-pt-120">
    			<div className="container">
    				<div className="position-relative z-1">
    					<div className="row">
    						<div className="col-xl-6 col-lg-8">
    							<div className="title-one pe-xxl-5 mb-75 xl-mb-50 wow fadeInUp">
    								<h3>Client <span>Feedback <img src="/images/lazy.svg" data-src="/images/shape/title_shape_01.svg" alt="" className="lazy-img" /></span></h3>
    						        <p className="fs-20 mt-xs">Client satisfaction speaks louder than our words. Hear from them.</p>
    							</div>

    						</div>
    					</div>

    					<div className="feedback-slider-two">
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Rashed Kabir</h6>
    										<span className="fs-16">Milan, Itlay</span>
    									</div>
    								</div>
    								<blockquote>"Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!"</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Jannat Ferdu.</h6>
    										<span className="fs-16">London, Uk</span>
    									</div>
    								</div>
    								<blockquote>"Found our dream home. Great Business with them. Thank you for excellent service."</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Jubayer Hasan</h6>
    										<span className="fs-16">Miami, USA</span>
    									</div>
    								</div>
    								<blockquote>"Efficient and friendly service, guided us perfectly. Satisfied with our new home. Thank you!"</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    						<div className="item">
    							<div className="feedback-block-four ps-lg-4 pe-lg-4">
    								<div className="d-flex align-items-center">
    									<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    									<div className="ps-3">
    										<h6 className="fs-20 m0">Jannat Ferdu.</h6>
    										<span className="fs-16">London, Uk</span>
    									</div>
    								</div>
    								<blockquote>"Found our dream home. Great Business with them. Thank you for excellent service."</blockquote>
    								<ul className="rating style-none d-flex">
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    									<li><i className="fa-sharp fa-solid fa-star"></i></li>
    								</ul>
    								<img src="/images/icon/icon_29.svg" alt="" className="icon" />
    							</div>

    						</div>
    					</div>
    					<ul className="slider-arrows slick-arrow-two d-flex justify-content-center style-none md-mt-30">
    						<li className="prev_c slick-arrow"><i className="bi bi-arrow-left"></i></li>
    						<li className="next_c slick-arrow"><i className="bi bi-arrow-right"></i></li>
    					</ul>
    					<div className="section-btn text-center md-mt-30">
    						<a href="#" className="btn-eleven fst-italic"><span>See all Feedback</span></a>
    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="blog-section-one mt-150 xl-mt-120">
    			<div className="container">
    				<div className="position-relative">
    					<div className="title-one mb-35 xl-mb-20 md-mb-10 wow fadeInUp">
    						<h3>Latest <span>News <img src="/images/lazy.svg" data-src="/images/shape/title_shape_01.svg" alt="" className="lazy-img" /></span></h3>
    						<p className="fs-20 mt-xs">Get the latest update, trips & tricks from our expert.</p>
    					</div>


    					<div className="row gx-xl-5">
    						<div className="col-md-6">
    							<article className="blog-meta-one mt-35 wow fadeInUp">
    								<figure className="post-img position-relative rounded-5 m0" style={{ backgroundImage: "url(images/blog/blog_img_01.jpg)" }}>
    									<a href="/blog_details" className="stretched-link date rounded-5 tran3s">09 FEB</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Rashed Ka .</a> 6 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Spending Habits, 13 Tips for grow Your Money.</h4></a>
    										<a href="/blog_details" className="read-btn d-flex align-items-center justify-content-center tran3s rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>
    							</article>

    						</div>
    						<div className="col-md-6">
    							<article className="blog-meta-one mt-35 wow fadeInUp" data-wow-delay="0.1s">
    								<figure className="post-img position-relative rounded-5 m0" style={{ backgroundImage: "url(images/blog/blog_img_02.jpg)" }}>
    									<a href="/blog_details" className="stretched-link date rounded-5 tran3s">12 aug</a>
    								</figure>
    								<div className="post-data">
    									<div className="post-info"><a href="/blog_details">Jubayer Hasan .</a> 7 min</div>
    									<div className="d-flex justify-content-between align-items-sm-center flex-wrap">
    										<a href="/blog_details" className="blog-title"><h4>Designer’s Checklist for Every UX/UI Project.</h4></a>
    										<a href="/blog_details" className="read-btn d-flex align-items-center justify-content-center tran3s rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>
    							</article>

    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/blog_03" className="btn-eight rounded-3"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-eight wow fadeInUp mt-160 xl-mt-100">
    			<div className="container container-large">
    				<div className="bg-wrapper border-30 bg-pink-two overflow-hidden position-relative z-1">
    					<div className="row align-items-end">
    						<div className="col-xl-6 col-lg-7 col-md-7">
    							<div className="pb-80 lg-pb-40">
    								<h3>Start your Journey as <span className="fw-normal fst-italic">A Retailer.</span></h3>
    								<div className="d-inline-flex flex-wrap align-items-center position-relative mt-15">
    									<a href="/agent" className="btn-eight mt-10 me-4"><span>Become an Agent</span></a>
    									<a href="/contact" className="btn-two rounded-0 border-0 mt-10"><span>Contact us</span></a>
    									<img src="/images/lazy.svg" data-src="/images/shape/shape_51.svg" alt="" className="lazy-img shapes shape_02 wow fadeInRight" />
    								</div>
    							</div>
    						</div>
    						<div className="col-xl-6 col-lg-5 col-md-5 text-center text-md-end">
    							<div className="media-wrapper position-relative z-1 d-inline-block">
    								<img src="/images/lazy.svg" data-src="/images/media/img_44.png" alt="" className="lazy-img" />
    								<img src="/images/lazy.svg" data-src="/images/shape/shape_50.svg" alt="" className="lazy-img shapes shape_01" />
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



            <div className="modal fade" id="advanceFilterModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 m-auto">
                                <div className="modal-content">
                                    <button type="button" className="btn-close ms-auto mt-20 me-4" data-bs-dismiss="modal" aria-label="Close"><i className="fa-regular fa-xmark"></i></button>
                                    <div className="advance-search-panel">
                                        <div className="main-bg border-0">
                                            <form action="#">
                                                <div className="row gx-lg-5">
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">I’m looking to...</div>
                                                            <select className="nice-select fw-normal">
                                                                <option value="1">Buy Apartments</option>
                                                                <option value="2">Rent Condos</option>
                                                                <option value="3">Sell Houses</option>
                                                                <option value="4">Rent Industrial</option>
                                                                <option value="6">Sell Villas</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">Location</div>
                                                            <select className="nice-select location fw-normal">
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
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">Keyword</div>
                                                            <input type="text" placeholder="buy, home, loft, apartment" className="type-input" />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="input-box-one mb-35">
                                                            <div className="label">Property ID</div>
                                                            <input type="text" placeholder="EM45203014" className="type-input" />
                                                        </div>

                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="input-box-one mb-40">
                                                            <div className="label">Bedroom</div>
                                                            <select className="nice-select fw-normal">
                                                                <option value="1">3+</option>
                                                                <option value="2">4+</option>
                                                                <option value="3">2+</option>
                                                                <option value="4">1+</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="input-box-one mb-40">
                                                            <div className="label">Bath</div>
                                                            <select className="nice-select fw-normal">
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
                                                    <div className="col-md-6">
                                                        <h6 className="block-title fw-bold mt-45 mb-20">Price range</h6>
                                                        <div className="price-ranger">
                                                            <div className="price-input d-flex align-items-center justify-content-between pt-5">
                                                                <div className="field d-flex align-items-center">
                                                                    <input type="number" className="input-min" value="2500" readonly />
                                                                </div>
                                                                <div className="divider-line"></div>
                                                                <div className="field d-flex align-items-center">
                                                                    <input type="number" className="input-max" value="35000" readonly />
                                                                </div>
                                                                <div className="currency ps-1">USD</div>
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
                                                    <div className="col-md-6">
                                                        <h6 className="block-title fw-bold mt-45 mb-20">SQFT</h6>
                                                        <div className="d-flex align-items-center sqf-ranger">
                                                            <input type="text" placeholder="Min" />
                                                            <div className="divider"></div>
                                                            <input type="text" placeholder="Max" />
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="fw-500 text-uppercase tran3s apply-search w-100 mt-40 mb-25">
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
                </div>
            </div>


    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>

































    	</div>
    </TemplatePageShell>
  );
}
