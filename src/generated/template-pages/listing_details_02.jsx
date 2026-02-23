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





    		<div className="listing-details-one theme-details-one bg-pink pt-120 lg-pt-100 pb-150 xl-pb-120">
                <div className="video-wrapper">
                    <video preload="" muted="muted" playsinline="" autoplay="" loop="">
                        <source src="https://creativegigstf.com/video/intro_4.mp4" type="video/mp4" />
                      </video>
                </div> 
    			<div className="container">
                    <div className="bg-white shadow4 border-20 p-40 mt-70 lg-mt-50 mb-60">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3 className="property-titlee">Luxury Apartments on California.</h3>
                                <div className="d-flex flex-wrap mt-10">
                                    <div className="list-type text-uppercase border-20 mt-15 me-3">FOR SELL</div>
                                    <div className="address mt-15"><i className="bi bi-geo-alt"></i> 3891 Ranchview Dr. Richardson, California</div>
                                </div>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <div className="d-inline-block md-mt-40">
                                    <div className="price color-dark fw-500">Price: $1,67,000</div>
                                    <div className="est-price fs-20 mt-25 mb-35 md-mb-30">Est. Payment <span className="fw-500 color-dark">$8,343/mo*</span></div>
                                    <ul className="style-none d-flex align-items-center action-btns">
                                        <li className="me-auto fw-500 color-dark"><i className="fa-sharp fa-regular fa-share-nodes me-2"></i> Share</li>
                                        <li><a href="#" className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i className="fa-light fa-heart"></i></a></li>
                                        <li><a href="#" className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i className="fa-light fa-bookmark"></i></a></li>
                                        <li><a href="#" className="d-flex align-items-center justify-content-center rounded-circle tran3s"><i className="fa-light fa-circle-plus"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="property-feature-list border-top mt-70 lg-mt-50 pt-60 lg-pt-30 pb-30 lg-pb-10">
                            <ul className="style-none d-flex flex-wrap align-items-center justify-content-between">
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_47.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Sqft . 3,720</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_48.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Bed . 03</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_49.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Bath . 2</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_50.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Kitchen . 01</span>
                                </li>
                                <li>
                                    <img src="/images/lazy.svg" data-src="/images/icon/icon_51.svg" alt="" className="lazy-img icon" />
                                    <span className="fs-20 color-dark">Type . Apartment</span>
                                </li>
                            </ul>
                        </div>

                    </div>


    				<div className="row">
    					<div className="col-xl-8">
    						<div className="property-overview bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Overview</h4>
    							<p className="fs-20 lh-lg">Lorem ipsum dolor sit amet consectetur. Et velit varius ipsum tempor vel dignissim tincidunt. Aliquam accumsan laoreet ultricies tincidunt faucibus fames augue in sociis. Nisl enim integer neque nec.</p>
    						</div>

    						<div className="property-feature-accordion bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Property Features</h4>
    							<p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats.</p>

    							<div className="accordion-style-two mt-45">
    								<div className="accordion" id="accordionTwo">
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneA" aria-expanded="false" aria-controls="collapseOneA">
    												Property Details
    											</button>
    										  </h2>
    										<div id="collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionTwo">
    											<div className="accordion-body">
    												<div className="feature-list-two">
    													<ul className="style-none d-flex flex-wrap justify-content-between">
    														<li><span>Bedrooms: </span> <span className="fw-500 color-dark">03</span></li>
    														<li><span>Furnishing: </span> <span className="fw-500 color-dark">Semi furnished</span></li>
    														<li><span>Bathrooms: </span> <span className="fw-500 color-dark">02</span></li>
    														<li><span>Year Built: </span> <span className="fw-500 color-dark">2010</span></li>
    														<li><span>Floor: </span> <span className="fw-500 color-dark">Ground</span></li>
    														<li><span>Garage: </span> <span className="fw-500 color-dark">03</span></li>
    														<li><span>Ceiling Height: </span> <span className="fw-500 color-dark">3.2m</span></li>
    														<li><span>Property Type: </span> <span className="fw-500 color-dark">Apartment</span></li>
    														<li><span>Renovation: </span> <span className="fw-500 color-dark">3.2m</span></li>
    														<li><span>Status: </span> <span className="fw-500 color-dark">For Sale</span></li>
    													</ul>
    												</div>

    											</div>
    										</div>
    									</div>
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoA" aria-expanded="false" aria-controls="collapseTwoA">
    												Utility Details
    											</button>
    										</h2>
    										<div id="collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
    											<div className="accordion-body">
    												<div className="feature-list-two">
    													<ul className="style-none d-flex flex-wrap justify-content-between">
    														<li><span>Heating: </span> <span className="fw-500 color-dark">Natural gas </span></li>
    														<li><span>Intercom: </span> <span className="fw-500 color-dark">Yes</span></li>
    														<li><span>Air Condition: </span> <span className="fw-500 color-dark">Yes</span></li>
    														<li><span>Window Type: </span> <span className="fw-500 color-dark">Aluminum frame </span></li>
    														<li><span>Fireplace: </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>Cable TV:  </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>Elevator: </span> <span className="fw-500 color-dark">Yes</span></li>
    														<li><span>WiFi: </span> <span className="fw-500 color-dark">Yes</span></li>
    														<li><span>Ventilation: </span> <span className="fw-500 color-dark">Yes</span></li>
    													</ul>
    												</div>

    											</div>
    										</div>
    									</div>
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeA" aria-expanded="true" aria-controls="collapseThreeA">
    												Outdoor Features
    											</button>
    										</h2>
    										<div id="collapseThreeA" className="accordion-collapse collapse" data-bs-parent="#accordionTwo">
    											<div className="accordion-body">
    												<div className="feature-list-two">
    													<ul className="style-none d-flex flex-wrap justify-content-between">
    														<li><span>Garage: </span> <span className="fw-500 color-dark">Yes</span></li>
    														<li><span>Parking: </span> <span className="fw-500 color-dark">Yes</span></li>
    														<li><span>Garden: </span> <span className="fw-500 color-dark">30m2</span></li>
    														<li><span>Disabled Access: </span> <span className="fw-500 color-dark">Ramp</span></li>
    														<li><span>Swimming Pool: </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>Fence: </span> <span className="fw-500 color-dark">--</span></li>
    														<li><span>Security: </span> <span className="fw-500 color-dark">3 Cameras</span></li>
    														<li><span>Pet Friendly: </span> <span className="fw-500 color-dark">Yes</span></li>
    													</ul>
    												</div>

    											</div>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>

    						<div className="property-amenities bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Amenities</h4>
    							<p className="fs-20 lh-lg pb-25">Risk management & compliance, when approached strategically, have the potential</p>
    							<ul className="style-none d-flex flex-wrap justify-content-between list-style-two">
    								<li>A/C & Heating</li>
    								<li>Garages</li>
    								<li>Swimming Pool</li>
    								<li>Parking</li>
    								<li>Garden</li>
    								<li>Disabled Access</li>
    								<li>Pet Friendly</li>
    								<li>Ceiling Height</li>
    								<li>Refrigerator</li>
    								<li>Fireplace</li>
    								<li>Elevator</li>
    								<li>Wifi</li>
    							</ul>

    						</div>


    						<div className="property-video-tour mb-50">
    							<h4 className="mb-40">Video Tour</h4>
    							<div className="bg-white shadow4 border-20 p-15">
    								<div className="position-relative border-15 image-bg overflow-hidden z-1">
    									<img src="/images/lazy.svg" data-src="/images/listing/img_47.jpg" alt="" className="lazy-img w-100" />
    									<a className="video-icon tran3s rounded-circle d-flex align-items-center justify-content-center" data-fancybox href="https://www.youtube.com/embed/aXFSJTjVjw0">
    										<i className="fa-thin fa-play"></i>
    									</a>
    								</div>
    							</div>
    						</div>


    						<div className="property-floor-plan mb-50">
    							<h4 className="mb-40">Floor Plans</h4>
    							<div className="bg-white shadow4 border-20 p-30">
    								<div id="floor-plan" className="carousel slide">
    									<div className="carousel-indicators">
    										<button type="button" data-bs-target="#floor-plan" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    									  	<button type="button" data-bs-target="#floor-plan" data-bs-slide-to="1" aria-label="Slide 2"></button>
    									  	<button type="button" data-bs-target="#floor-plan" data-bs-slide-to="2" aria-label="Slide 3"></button>
    									</div>
    									<div className="carousel-inner">
    										<div className="carousel-item active">
    											<img src="/images/listing/floor_1.jpg" alt="" className="w-100" />
    									  	</div>
    									  	<div className="carousel-item">
    											<img src="/images/listing/floor_2.jpg" alt="" className="w-100" />
    									  	</div>
    									  	<div className="carousel-item">
    											<img src="/images/listing/floor_1.jpg" alt="" className="w-100" />
    									 	</div>
    									</div>
    								</div>
    							</div>
    						</div>


    						<div className="property-nearby bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">What’s Nearby</h4>
    							<p className="fs-20 lh-lg pb-30">Risk management and compliance, when approached strategically, have th potential to go beyond mitigating threats.</p>
    							<ul className="style-none d-flex flex-wrap justify-content-between nearby-list-item">
    								<li>School & Collage: <span className="fw-500 color-dark">0.9km</span></li>
    								<li>Grocery Center: <span className="fw-500 color-dark">0.2km</span></li>
    								<li>Metro Station:  <span className="fw-500 color-dark">0.7km</span></li>
    								<li>Gym: <span className="fw-500 color-dark">2.3km</span></li>
    								<li>University: <span className="fw-500 color-dark">2.7km</span></li>
    								<li>Hospital: <span className="fw-500 color-dark">1.7km</span></li>
    								<li>Shopping Mall: <span className="fw-500 color-dark">1.1m</span></li>
    								<li>Police Station: <span className="fw-500 color-dark">1.2m</span></li>
    								<li>Bus Station:  <span className="fw-500 color-dark"> 1.1m</span></li>
    								<li>River: <span className="fw-500 color-dark">3.1km</span></li>
    								<li>Market: <span className="fw-500 color-dark">3.4m</span></li>
    							</ul>

    						</div>


    						<div className="similar-property">
    							<h4 className="mb-40">Similar Homes You May Like</h4>
    							<div className="similar-listing-slider-one">
    								<div className="item">
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">FOR RENT</div>
    												<img src="/images/listing/img_13.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    													<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">Blueberry villa.</a>
    											<div className="address m0 pb-5">Mirpur 10, Stadium dhaka</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
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
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    												<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img2" data-caption="White House villa"></a>
    													<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img2" data-caption="White House villa"></a>
    													<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img2" data-caption="White House villa"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">Blueberry villa.</a>
    											<div className="address m0 pb-5">California link road, ca, usa</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
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
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    												<img src="/images/listing/img_15.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
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
    											<a href="/listing_details_03" className="title tran3s">Blueberry villa.</a>
    											<div className="address m0 pb-5">Mirpur 10, Stadium</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
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
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    												<img src="/images/listing/img_16.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
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
    											<a href="/listing_details_03" className="title tran3s">South Sun House</a>
    											<div className="address m0 pb-5">Mirpur 10, Stadium</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
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
    									<div className="listing-card-one shadow4 style-three border-30 mb-50">
    										<div className="img-gallery p-15">
    											<div className="position-relative border-20 overflow-hidden">
    												<div className="tag bg-white text-dark fw-500 border-20">FOR SELL</div>
    												<img src="/images/listing/img_14.jpg" className="w-100 border-20" alt="..." />
    												<a href="/listing_details_03" className="btn-four inverse rounded-circle position-absolute"><i className="bi bi-arrow-up-right"></i></a>
    												<div className="img-slider-btn">
    													03 <i className="fa-regular fa-image"></i>
    													<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="img5" data-caption="White House villa"></a>
    													<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="img5" data-caption="White House villa"></a>
    													<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="img5" data-caption="White House villa"></a>
    												</div>
    											</div>
    										</div>

    										<div className="property-info pe-4 ps-4">
    											<a href="/listing_details_03" className="title tran3s">White House villa</a>
    											<div className="address m0 pb-5">California link road, ca, usa</div>
    											<div className="pl-footer m0 d-flex align-items-center justify-content-between">
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
    						</div>


    						<div className="property-score bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Walk Score</h4>
    							<p className="fs-20 lh-lg pb-30">Risk management and compliance, when approached strategically, have the potential</p>
    							<div className="row">
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-50 sm-mb-30">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_52.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>Transit Score</h6>
    											<p className="fs-16 m0"><span className="color-dark">63</span>/100 (Moderate Distance Walkable)</p>
    										</div>
    									</div>
    								</div>
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-50 sm-mb-30">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_53.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>School Score</h6>
    											<p className="fs-16 m0"><span className="color-dark">70</span>/100 (Short Distance Walkable)</p>
    										</div>
    									</div>
    								</div>
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-20 sm-mb-30">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_54.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>Medical Score</h6>
    											<p className="fs-16 m0"><span className="color-dark">77</span>/100 (Short Distance Walkable)</p>
    										</div>
    									</div>
    								</div>
    								<div className="col-md-6">
    									<div className="block d-flex align-items-center mb-20">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_55.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h6>Shopping Mall Score</h6>
    											<p className="fs-16 m0"><span className="color-dark">42</span>/100 (Long Distance Walkable)</p>
    										</div>
    									</div>
    								</div>
    							</div>
    						</div>


    						<div className="property-location mb-50">
    							<h4 className="mb-40">Location</h4>
    							<div className="bg-white shadow4 border-20 p-30">
    								<div className="map-banner overflow-hidden border-15">
    									<div className="gmap_canvas h-100 w-100">
    										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83088.3595592641!2d-105.54557276330914!3d39.29302101722867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874014749b1856b7%3A0xc75483314990a7ff!2sColorado%2C%20USA!5e0!3m2!1sen!2sbd!4v1699764452737!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-100 h-100"></iframe>
    									</div>
    								</div>
    							</div>
    						</div>


    						<div className="review-panel-one bg-white shadow4 border-20 p-40 mb-50">
    							<div className="position-relative z-1">
    								<div className="d-sm-flex justify-content-between align-items-center mb-10">
    									<h4 className="m0 xs-pb-30">Reviews</h4>
    									<select className="nice-select">
    										<option value="0">Newest</option>
    										<option value="1">Best Seller</option>
    										<option value="2">Best Match</option>
    									</select>
    								</div>
    								<div className="review-wrapper mb-35">
    									<div className="review">
    										<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Zubayer Al Hasan</h6>
    													<div className="time fs-16">17 Aug, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(4.7 Rating)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Helpful</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Flag</span></a>
    											</div>
    										</div>

    									</div>


    									<div className="review">
    										<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Rashed Kabir</h6>
    													<div className="time fs-16">13 Jun, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(4.9 Rating)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<ul className="style-none d-flex flex-wrap review-gallery pb-30">
    												<li><a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa"><img src="/images/listing/img_48.jpg" alt="" /></a></li>
    												<li><a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa"><img src="/images/listing/img_49.jpg" alt="" /></a></li>
    												<li><a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa"><img src="/images/listing/img_50.jpg" alt="" /></a></li>
    												<li>
    													<div className="position-relative more-img">
    														<img src="/images/listing/img_50.jpg" alt="" />
    														<span>13+</span>
    														<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa."></a>
    														<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa."></a>
    														<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="revImg" data-caption="Duplex orkit villa."></a>
    													</div>
    												</li>
    											</ul>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Helpful</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Flag</span></a>
    											</div>

    										</div>

    									</div>


    									<div className="review hide">
    										<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Perty Jinta</h6>
    													<div className="time fs-16">17 Aug, 23</div>
    												</div>
    												<ul className="rating style-none d-flex xs-mt-10">
    													<li><span className="fst-italic me-2">(4.7 Rating)</span> </li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    													<li><i className="fa-sharp fa-solid fa-star"></i></li>
    												</ul>
    											</div>
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Pellentesque sed nulla facili diam posuere aliquam suscipit quam.</p>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Helpful</span></a>
    												<a href="#"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Flag</span></a>
    											</div>
    										</div>

    									</div>

    								</div>

    								<div className="load-more-review text-uppercase w-100 border-15 tran3s">VIEW ALL 120 REVIEWS <i className="bi bi-arrow-up-right"></i></div>
    							</div>						
    						</div>


    						<div className="review-form bg-white shadow4 border-20 p-40 mb-50">
    							<h4 className="mb-20">Leave A Reply</h4>
    							<p className="fs-20 lh-lg pb-15"><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="color-dark fw-500 text-decoration-underline">Sign in</a> to post your comment or signup if you don't have any account.</p>

    							<form action="#">
    								<div className="row">
    									<div className="col-12">
    										<div className="input-box-two mb-30">
    											<div className="label">Title*</div>
    											<input type="text" placeholder="Rashed Kabir" className="type-input" />
    										</div>

    									</div>
    									<div className="col-lg-6">
    										<div className="input-box-two mb-30">
    											<div className="label">Email*</div>
    											<input type="email" placeholder="rshdkabir@gmail.com" className="type-input" />
    										</div>

    									</div>
    									<div className="col-lg-6">
    										<div className="input-box-two mb-30">
    											<div className="label">Ratings*</div>
    											<select className="nice-select">
    												<option value="0">Ratings</option>
    												<option value="1">Five Star</option>
    												<option value="1">Four Star</option>
    												<option value="1">Three Star</option>
    												<option value="1">Two Star</option>
    												<option value="1">One Star</option>
    											</select>
    										</div>

    									</div>
    									<div className="col-12">
    										<div className="input-box-two mb-30">
    											<textarea placeholder="Write your review here..."></textarea>
    										</div>

    									</div>
    								</div>
    								<button className="btn-five text-uppercase sm">Post Review</button>
    							</form>
    						</div>

    					</div>
    					<div className="col-xl-4 col-lg-8 me-auto ms-auto">
    						<div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 lg-mt-80">
    							<div className="agent-info bg-white border-20 p-30 mb-40">
    								<img src="/images/lazy.svg" data-src="/images/agent/img_06.jpg" alt="" className="lazy-img rounded-circle ms-auto me-auto mt-3 avatar" />
    								<div className="text-center mt-25">
    									<h6 className="name">Rashed Kabir</h6>
    									<p className="fs-16">Property Agent & Broker</p>
    									<ul className="style-none d-flex align-items-center justify-content-center social-icon">
    										<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    										<li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
    									</ul>
    								</div>
    								<div className="divider-line mt-40 mb-45 pt-20">
    									<ul className="style-none">
    										<li>Location: <span>Spain, Barcelona</span></li>
    										<li>Email: <span><a href="mailto:akabirr770@gmail.com">akabirr770@gmail.com</a></span></li>
    										<li>Phone: <span><a href="tel:+12347687565">+12347687565</a></span></li>
    									</ul>
    								</div>

    								<a href="/contact" className="btn-nine text-uppercase rounded-3 w-100 mb-10">CONTACT AGENT</a>
    							</div>


    							<div className="tour-schedule bg-white border-20 p-30 mb-40">
    								<h5 className="mb-40">Schedule Tour</h5>
    								<form action="#">
    									<div className="input-box-three mb-25">
    										<div className="label">Your Name*</div>
    										<input type="text" placeholder="Your full name" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Your Email*</div>
    										<input type="email" placeholder="Enter mail address" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Your Phone*</div>
    										<input type="tel" placeholder="Your phone number" className="type-input" />
    									</div>

    									<div className="input-box-three mb-15">
    										<div className="label">Message*</div>
    										<textarea placeholder="Hello, I am interested in [Califronia Apartments]"></textarea>
    									</div>

    									<button className="btn-nine text-uppercase rounded-3 w-100 mb-10">INQUIry</button>
    								</form>
    							</div>


    							<div className="mortgage-calculator bg-white border-20 p-30 mb-40">
    								<h5 className="mb-40">Mortgage Calculator</h5>
    								<form action="#">
    									<div className="input-box-three mb-25">
    										<div className="label">Home Price*</div>
    										<input type="tel" placeholder="1,32,789" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Down Payment*</div>
    										<input type="tel" placeholder="$" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Interest Rate*</div>
    										<input type="tel" placeholder="3.5%" className="type-input" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Loan Terms (Years)</div>
    										<input type="tel" placeholder="24" className="type-input" />
    									</div>

    									<button className="btn-five text-uppercase sm rounded-3 w-100 mb-10">CALCULATE</button>
    								</form>
    							</div>


    							<div className="feature-listing bg-white border-20 p-30">
    								<h5 className="mb-40">Featured Listing</h5>
    								<div id="F-listing" className="carousel slide">
    									<div className="carousel-indicators">
    										<button type="button" data-bs-target="#F-listing" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    									  	<button type="button" data-bs-target="#F-listing" data-bs-slide-to="1" aria-label="Slide 2"></button>
    									  	<button type="button" data-bs-target="#F-listing" data-bs-slide-to="2" aria-label="Slide 3"></button>
    									</div>
    									<div className="carousel-inner">
    										<div className="carousel-item active">
    											<div className="listing-card-one style-three border-10">
    												<div className="img-gallery">
    													<div className="position-relative border-10 overflow-hidden">
    														<div className="tag bg-white text-dark fw-500 border-20">FOR RENT</div>
    														<a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
    														<img src="/images/listing/img_13.jpg" className="w-100 border-10" alt="..." />
    														<div className="img-slider-btn">
    															03 <i className="fa-regular fa-image"></i>
    															<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="imgA" data-caption="Blueberry villa"></a>
    															<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="imgA" data-caption="Blueberry villa"></a>
    															<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="imgA" data-caption="Blueberry villa"></a>
    														</div>
    													</div>
    												</div>

    												<div className="property-info mt-15">
    													<div className="d-flex justify-content-between align-items-end">
    														<div>
    															<strong className="price fw-500 color-dark">$1,23,710</strong>
    															<div className="address m0 pt-5">120 Elgin St. Celina, Delaware </div>
    														</div>
    														<a href="#" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    													</div>
    												</div>

    											</div>

    									  	</div>
    									  	<div className="carousel-item">
    											<div className="listing-card-one style-three border-10">
    												<div className="img-gallery">
    													<div className="position-relative border-10 overflow-hidden">
    														<div className="tag bg-white text-dark fw-500 border-20">FOR RENT</div>
    														<a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
    														<img src="/images/listing/img_14.jpg" className="w-100 border-10" alt="..." />
    														<div className="img-slider-btn">
    															03 <i className="fa-regular fa-image"></i>
    															<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="imgB" data-caption="Blueberry villa"></a>
    															<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="imgB" data-caption="Blueberry villa"></a>
    															<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="imgB" data-caption="Blueberry villa"></a>
    														</div>
    													</div>
    												</div>

    												<div className="property-info mt-15">
    													<div className="d-flex justify-content-between align-items-end">
    														<div>
    															<strong className="price fw-500 color-dark">$2,11,536</strong>
    															<div className="address m0 pt-5">120 Elgin St. Celina, Delaware </div>
    														</div>
    														<a href="#" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
    													</div>
    												</div>

    											</div>

    									  	</div>
    									  	<div className="carousel-item">
    											<div className="listing-card-one style-three border-10">
    												<div className="img-gallery">
    													<div className="position-relative border-10 overflow-hidden">
    														<div className="tag bg-white text-dark fw-500 border-20">FOR RENT</div>
    														<a href="#" className="fav-btn tran3s"><i className="fa-light fa-heart"></i></a>
    														<img src="/images/listing/img_15.jpg" className="w-100 border-10" alt="..." />
    														<div className="img-slider-btn">
    															03 <i className="fa-regular fa-image"></i>
    															<a href="/images/listing/img_large_04.jpg" className="d-block" data-fancybox="imgC" data-caption="Blueberry villa"></a>
    															<a href="/images/listing/img_large_05.jpg" className="d-block" data-fancybox="imgC" data-caption="Blueberry villa"></a>
    															<a href="/images/listing/img_large_06.jpg" className="d-block" data-fancybox="imgC" data-caption="Blueberry villa"></a>
    														</div>
    													</div>
    												</div>

    												<div className="property-info mt-15">
    													<div className="d-flex justify-content-between align-items-end">
    														<div>
    															<strong className="price fw-500 color-dark">$3,05,958</strong>
    															<div className="address m0 pt-5">120 Elgin St. Celina, Delaware </div>
    														</div>
    														<a href="#" className="btn-four rounded-circle"><i className="bi bi-arrow-up-right"></i></a>
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
    								<input type="email" placeholder="Email address" />
    								<button>Get Started</button>
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
