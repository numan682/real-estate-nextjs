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





    		<div className="inner-banner-two inner-banner z-1 pt-170 xl-pt-150 md-pt-130 pb-100 xl-pb-80 md-pb-50 position-relative" style={{ backgroundImage: "url(images/media/img_49.jpg)" }}>
    			<div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="title-one mb-30 md-mb-20">
                                <h3>Find Your <span>Home <img src="/images/lazy.svg" data-src="/images/shape/title_shape_02.svg" alt="" className="lazy-img" /></span></h3>
                            </div>

                            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                                <li><a href="/">Home</a></li>
                                <li>/</li>
                                <li><a href="#">Pages</a></li>
                                <li>/</li>
                                <li>Listing</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <p className="sub-heading">Over 745,000 listings, apartments, lots and  plots available now!</p>
                        </div>
                    </div>
                    <div className="search-wrapper-one layout-one position-relative mt-80 xl-mt-50">
                        <nav className="search-filter-nav-one d-flex">
                            <div className="nav nav-tabs border-0" role="tablist">
                                <button className="nav-link m0 active" id="buy-tab" data-bs-toggle="tab" data-bs-target="#buy" type="button" role="tab" aria-controls="buy" aria-selected="true">Buy</button>
                                <button className="nav-link m0" id="rent-tab" data-bs-toggle="tab" data-bs-target="#rent" type="button" role="tab" aria-controls="rent" aria-selected="false">Rent</button>
                                <button className="nav-link m0" id="sell-tab" data-bs-toggle="tab" data-bs-target="#sell" type="button" role="tab" aria-controls="sell" aria-selected="false">Sell</button>
                            </div>
                        </nav>
                        <div className="bg-wrapper border-0 rounded-0">
                            <div className="tab-content">
                                <div className="tab-pane show active" id="buy" role="tabpanel" aria-labelledby="buy-tab" tabIndex="0">
                                    <form action="#">
                                        <div className="row gx-0 align-items-center">
                                            <div className="col-lg-3">
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
                                            <div className="col-lg-4">
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
                                            <div className="col-lg-5">
                                                <div className="input-box-one">
                                                    <div className="d-flex align-items-center justify-content-center justify-content-lg-end md-mt-10">
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                                            <span>ADVANCE Search</span>
                                                            <i className="fa-light fa-sliders-up"></i>
                                                        </a>
                                                        <button className="fw-500 text-uppercase tran3s search-btn-four w-auto">
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
                                            <div className="col-lg-3">
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
                                            <div className="col-lg-4">
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
                                            <div className="col-lg-5">
                                                <div className="input-box-one">
                                                    <div className="d-flex align-items-center justify-content-center justify-content-lg-end md-mt-10">
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                                            <span>ADVANCE Search</span>
                                                            <i className="fa-light fa-sliders-up"></i>
                                                        </a>
                                                        <button className="fw-500 text-uppercase tran3s search-btn-four w-auto">
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
                                            <div className="col-lg-3">
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
                                            <div className="col-lg-4">
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
                                            <div className="col-lg-5">
                                                <div className="input-box-one">
                                                    <div className="d-flex align-items-center justify-content-center justify-content-lg-end md-mt-10">
                                                        <a href="#" data-bs-toggle="modal" data-bs-target="#advanceFilterModal" className="search-modal-btn tran3s text-uppercase fw-500 d-inline-flex align-items-center me-3">
                                                            <span>ADVANCE Search</span>
                                                            <i className="fa-light fa-sliders-up"></i>
                                                        </a>
                                                        <button className="fw-500 text-uppercase tran3s search-btn-four w-auto">
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





    		<div className="property-listing-six pt-120 xl-pt-100 pb-200 xl-pb-120">
    			<div className="container container-large">
                    <div className="listing-header-filter d-sm-flex justify-content-between align-items-center mb-50 lg-mb-30">
                        <div>Showing <span className="color-dark fw-500">1–6</span> of <span className="color-dark fw-500">1,230</span> results</div>
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
                            <a href="/listing_09" className="tran3s layout-change rounded-circle ms-auto ms-sm-3" data-bs-toggle="tooltip" title="Switch To Grid View"><i className="fa-regular fa-grid-2"></i></a>
                        </div>
                    </div>


    				<div className="listing-card-seven grey-bg mb-50 wow fadeInUp">
                        <div className="d-flex flex-wrap layout-two">
                            <div className="img-gallery position-relative z-1 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_28.jpg)" }}>
                                <div className="tag bg-white rounded-0 text-dark fw-500">FOR SELL</div>
                                <div className="img-slider-btn">
                                    03 <i className="fa-regular fa-image"></i>
                                    <a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img1" data-caption="Marbel Apartments"></a>
                                    <a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img1" data-caption="Marbel Apartments"></a>
                                    <a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Marbel Apartments"></a>
                                </div>
                            </div>

                            <div className="property-info">
                                <a href="/listing_details_01" className="title tran3s mb-15">Marbel Apartments</a>
                                <div className="address">Mirpur 10, National Stadium, 1210, Dhaka, BD</div>
                                <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                        <li><strong>2137</strong> sqft</li>
                                        <li><strong>03</strong> bed</li>
                                        <li><strong>02</strong> bath</li>
                                        <li><strong>01</strong> Kitchen</li>
                                        <li><strong>01</strong> Parking Lot</li>
                                        <li><strong>02</strong> Garden</li>
                                    </ul>
                                </div>
                                <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">$24,000</strong>
                                    <ul className="style-none d-flex action-icons on-top">
                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                    <a href="/listing_details_01" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="listing-card-seven grey-bg mb-50 wow fadeInUp">
                        <div className="d-flex flex-wrap layout-two">
                            <div className="img-gallery position-relative z-1 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_29.jpg)" }}>
                                <div className="tag bg-white rounded-0 text-dark fw-500">FOR RENT</div>
                                <div className="img-slider-btn">
                                    03 <i className="fa-regular fa-image"></i>
                                    <a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img2" data-caption="Duplex orkit villa."></a>
                                    <a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img2" data-caption="Duplex orkit villa."></a>
                                    <a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img2" data-caption="Duplex orkit villa."></a>
                                </div>
                            </div>

                            <div className="property-info">
                                <a href="/listing_details_01" className="title tran3s mb-15">Duplex orkit villa.</a>
                                <div className="address">Mirpur 10, National Stadium, 1210, Dhaka, BD</div>
                                <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                        <li><strong>2137</strong> sqft</li>
                                        <li><strong>03</strong> bed</li>
                                        <li><strong>02</strong> bath</li>
                                        <li><strong>01</strong> Kitchen</li>
                                        <li><strong>01</strong> Parking Lot</li>
                                        <li><strong>02</strong> Garden</li>
                                    </ul>
                                </div>
                                <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">$2,370/<sub>m</sub></strong>
                                    <ul className="style-none d-flex action-icons on-top">
                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                    <a href="/listing_details_01" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="listing-card-seven grey-bg mb-50 wow fadeInUp">
                        <div className="d-flex flex-wrap layout-two">
                            <div className="img-gallery position-relative z-1 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_37.jpg)" }}>
                                <div className="tag bg-white rounded-0 text-dark fw-500">FOR SELL</div>
                                <div className="img-slider-btn">
                                    03 <i className="fa-regular fa-image"></i>
                                    <a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img3" data-caption="Oepn Villa"></a>
                                    <a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img3" data-caption="Oepn Villa"></a>
                                    <a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Oepn Villa"></a>
                                </div>
                            </div>

                            <div className="property-info">
                                <a href="/listing_details_01" className="title tran3s mb-15">Oepn Villa</a>
                                <div className="address">Mirpur 10, National Stadium, 1210, Dhaka, BD</div>
                                <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                        <li><strong>2137</strong> sqft</li>
                                        <li><strong>03</strong> bed</li>
                                        <li><strong>02</strong> bath</li>
                                        <li><strong>01</strong> Kitchen</li>
                                        <li><strong>01</strong> Parking Lot</li>
                                        <li><strong>02</strong> Garden</li>
                                    </ul>
                                </div>
                                <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">$43,000</strong>
                                    <ul className="style-none d-flex action-icons on-top">
                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                    <a href="/listing_details_01" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="listing-card-seven grey-bg mb-50 wow fadeInUp">
                        <div className="d-flex flex-wrap layout-two">
                            <div className="img-gallery position-relative z-1 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_36.jpg)" }}>
                                <div className="tag bg-white rounded-0 text-dark fw-500">FOR RENT</div>
                                <div className="img-slider-btn">
                                    03 <i className="fa-regular fa-image"></i>
                                    <a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img4" data-caption="Shite House"></a>
                                    <a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img4" data-caption="Shite House"></a>
                                    <a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img4" data-caption="Shite House"></a>
                                </div>
                            </div>

                            <div className="property-info">
                                <a href="/listing_details_01" className="title tran3s mb-15">Shite House</a>
                                <div className="address">Mirpur 10, National Stadium, 1210, Dhaka, BD</div>
                                <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                        <li><strong>2137</strong> sqft</li>
                                        <li><strong>03</strong> bed</li>
                                        <li><strong>02</strong> bath</li>
                                        <li><strong>01</strong> Kitchen</li>
                                        <li><strong>01</strong> Parking Lot</li>
                                        <li><strong>02</strong> Garden</li>
                                    </ul>
                                </div>
                                <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">$1,820/<sub>m</sub></strong>
                                    <ul className="style-none d-flex action-icons on-top">
                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                    <a href="/listing_details_01" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="listing-card-seven grey-bg mb-50 wow fadeInUp">
                        <div className="d-flex flex-wrap layout-two">
                            <div className="img-gallery position-relative z-1 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_35.jpg)" }}>
                                <div className="tag bg-white rounded-0 text-dark fw-500">FOR SELL</div>
                                <div className="img-slider-btn">
                                    03 <i className="fa-regular fa-image"></i>
                                    <a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img5" data-caption="Modern Flat"></a>
                                    <a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img5" data-caption="Modern Flat"></a>
                                    <a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img5" data-caption="Modern Flat"></a>
                                </div>
                            </div>

                            <div className="property-info">
                                <a href="/listing_details_01" className="title tran3s mb-15">Modern Flat</a>
                                <div className="address">Mirpur 10, National Stadium, 1210, Dhaka, BD</div>
                                <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                        <li><strong>2137</strong> sqft</li>
                                        <li><strong>03</strong> bed</li>
                                        <li><strong>02</strong> bath</li>
                                        <li><strong>01</strong> Kitchen</li>
                                        <li><strong>01</strong> Parking Lot</li>
                                        <li><strong>02</strong> Garden</li>
                                    </ul>
                                </div>
                                <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">$27,100</strong>
                                    <ul className="style-none d-flex action-icons on-top">
                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                    <a href="/listing_details_01" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="listing-card-seven grey-bg mb-50 wow fadeInUp">
                        <div className="d-flex flex-wrap layout-two">
                            <div className="img-gallery position-relative z-1 overflow-hidden" style={{ backgroundImage: "url(images/listing/img_38.jpg)" }}>
                                <div className="tag bg-white rounded-0 text-dark fw-500">FOR SELL</div>
                                <div className="img-slider-btn">
                                    03 <i className="fa-regular fa-image"></i>
                                    <a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img6" data-caption="Duplex orkit villa"></a>
                                    <a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img6" data-caption="Duplex orkit villa"></a>
                                    <a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img6" data-caption="Duplex orkit villa"></a>
                                </div>
                            </div>

                            <div className="property-info">
                                <a href="/listing_details_01" className="title tran3s mb-15">Duplex orkit villa</a>
                                <div className="address">Mirpur 10, National Stadium, 1210, Dhaka, BD</div>
                                <div className="feature border-0 mt-55 md-mt-40 mb-35 md-mb-20">
                                    <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                        <li><strong>2137</strong> sqft</li>
                                        <li><strong>03</strong> bed</li>
                                        <li><strong>02</strong> bath</li>
                                        <li><strong>01</strong> Kitchen</li>
                                        <li><strong>01</strong> Parking Lot</li>
                                        <li><strong>02</strong> Garden</li>
                                    </ul>
                                </div>
                                <div className="pl-footer pb-15 d-flex flex-wrap align-items-center justify-content-between">
                                    <strong className="price fw-500 color-dark me-auto">$$24,000</strong>
                                    <ul className="style-none d-flex action-icons on-top">
                                        <li><a href="#"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                    <a href="/listing_details_01" className="btn-four"><i className="bi bi-arrow-up-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <ul className="pagination-one square d-flex align-items-center justify-content-center style-none pt-60 lg-pt-20">
                        <li><a href="#">1</a></li>
                        <li className="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li>....</li>
                        <li className="ms-2"><a href="#" className="d-flex align-items-center">Last <img src="/images/icon/icon_46.svg" alt="" className="ms-2" /></a></li>
                    </ul>
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
                </div>
            </div>



    		<button className="scroll-top">
    			<i className="bi bi-arrow-up-short"></i>
    		</button>































    	</div>
    </TemplatePageShell>
  );
}
