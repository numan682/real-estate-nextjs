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




            <div className="offcanvas offcanvas-end sidebar-nav" data-bs-backdrop="static" tabIndex="-1" id="sideNav" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                	<div className="logo order-lg-0">
    					<a href="/" className="d-flex align-items-center">
    						<img src="/images/logo/logo.svg" alt="" />
    					</a>
    				</div>
                	<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="wrapper mt-60">
    				<div className="d-flex flex-column h-100">
    					<div className="property-block">
    						<h4 className="title pb-25">Featured Listing </h4>
    						<div className="row">
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">FOR RENT</div>
    											<img src="/images/listing/img_69.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img1" data-caption="Blueberry villa"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$2,210/ <sub>m</sub></strong>
    											<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">FOR RENT</div>
    											<img src="/images/listing/img_70.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img2" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img2" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img2" data-caption="Blueberry villa"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$2,210/ <sub>m</sub></strong>
    											<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">FOR SELL</div>
    											<img src="/images/listing/img_71.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img3" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img3" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img3" data-caption="Blueberry villa"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$1,23,710</strong>
    											<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    							<div className="col-12">
    								<div className="listing-card-one shadow-none style-two mb-40">
    									<div className="img-gallery">
    										<div className="position-relative overflow-hidden">
    											<div className="tag bg-white text-dark fw-500">FOR SELL</div>
    											<img src="/images/listing/img_72.jpg" className="w-100" alt="..." />

    											<div className="img-slider-btn">
    												03 <i className="fa-regular fa-image"></i>
    												<a href="/images/listing/img_large_01.jpg" className="d-block" data-fancybox="img4" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_02.jpg" className="d-block" data-fancybox="img4" data-caption="Blueberry villa"></a>
    												<a href="/images/listing/img_large_03.jpg" className="d-block" data-fancybox="img4" data-caption="Blueberry villa"></a>
    											</div>
    										</div>
    									</div>

    									<div className="property-info d-flex justify-content-between align-items-end pt-30">
    										<div>
    											<strong className="price fw-500 color-dark fs-3">$78,420</strong>
    											<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    										</div>
    										<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    									</div>

    								</div>

    							</div>
    						</div>
    					</div>
    					<div className="address-block mt-50">
    						<h4 className="title pb-15">Our Address</h4>
    						<p>Chowrastar Mirpur- 1210, Sangu <br />River, Dhaka</p>
    						<p>Urgent issue? call us at <br /><a href="tel:310.841.5500">310.841.5500</a></p>
    					</div>
    					<ul className="style-none d-flex flex-wrap w-100 justify-content-between align-items-center social-icon pt-25 mt-auto">
    						<li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="#"><i className="fa-brands fa-viber"></i></a></li>
    					</ul>
    				</div>
                </div>
            </div>




    		<header className="theme-main-menu menu-overlay menu-style-three sticky-menu">
    			<div className="inner-content gap-one">
    				<div className="top-header position-relative">
    					<div className="d-flex align-items-center">
    						<div className="logo order-lg-0">
    							<a href="/" className="d-flex align-items-center">
    								<img src="/images/logo/logo.svg" alt="" />
    							</a>
    						</div>

    						<div className="right-widget ms-auto me-3 me-lg-0 order-lg-3">
    							<ul className="d-flex align-items-center style-none">
    								<li className="d-flex align-items-center login-btn-one">
                                        <i className="fa-regular fa-lock"></i> 
                                        <a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="fw-500 tran3s">Login <span className="d-none d-sm-inline-block">/ Sign up</span></a>
                                    </li>
    								<li className="d-none d-md-inline-block ms-3 ms-xl-4 me-xl-4">
                                        <a href="/dashboard/add-property" className="btn-ten" target="_blank" rel="noopener noreferrer"><span>Add Listing</span> <i className="bi bi-arrow-up-right"></i></a>
                                    </li>
                                    <li className="d-none d-xl-block"><button className="sidenavbtn rounded-circle tran3s" type="button" data-bs-toggle="offcanvas" data-bs-target="#sideNav" aria-controls="sideNav"><i className="fa-sharp fa-light fa-bars-filter"></i></button></li>
    							</ul>
    						</div>
    						<nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
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
    										<a href="/dashboard/add-property" className="btn-ten w-100" target="_blank" rel="noopener noreferrer"><span>Add Listing</span> <i className="bi bi-arrow-up-right"></i></a>
    									</li>
    								</ul>
    							</div>
    						</nav>
    					</div>
    				</div> 
    			</div> 
    		</header> 





    		<div className="inner-banner-three inner-banner text-center z-1 position-relative">
    			<div className="bg-wrapper overflow-hidden position-relative z-1" style={{ backgroundImage: "url(images/media/img_51.jpg)" }}>
                    <div className="container position-relative z-2">
                        <h2 className="mb-35 xl-mb-20 md-mb-10 pt-15 font-garamond text-white">About Agency</h2>
                        <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                            <li><a href="#">Home</a></li>
                            <li>/</li>
                            <li> About us</li>
                        </ul>
                    </div>
                    <img src="/images/lazy.svg" data-src="/images/shape/shape_35.svg" alt="" className="lazy-img shapes shape_01" />
                    <img src="/images/lazy.svg" data-src="/images/shape/shape_36.svg" alt="" className="lazy-img shapes shape_02" />
                </div>    
    		</div>






    		<div className="block-feature-fifteen mt-150 xl-mt-100 mb-140 xl-mb-80">
    			<div className="container">
    				<div className="row gx-xl-5">
    					<div className="col-xl-6 col-lg-7 order-lg-last wow fadeInRight">
    						<div className="ms-xxl-5 ps-xl-4 ps-lg-5 md-mb-50">
    							<div className="title-one mb-45 lg-mb-20">
    								<h2 className="font-garamond star-shape">Find Your Preferable Match Easily. <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    							</div>

    							<div className="accordion-style-three">
    								<div className="accordion" id="accordionThree">
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneA" aria-expanded="false" aria-controls="collapseOneA">
    												Who we are?
    											</button>
    										  </h2>
    										  <div id="collapseOneA" className="accordion-collapse collapse show" data-bs-parent="#accordionThree">
    											<div className="accordion-body">
    												<p className="fs-22">Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</p>
    											</div>
    										  </div>
    									</div>
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwoA" aria-expanded="false" aria-controls="collapseTwoA">
    												What’s our goal
    											</button>
    										</h2>
    										<div id="collapseTwoA" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
    											<div className="accordion-body">
    												<p className="fs-22">Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</p>
    											</div>
    										</div>
    									</div>
    									<div className="accordion-item">
    										<h2 className="accordion-header">
    											<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThreeA" aria-expanded="true" aria-controls="collapseThreeA">
    												Our vision
    											</button>
    										</h2>
    										<div id="collapseThreeA" className="accordion-collapse collapse" data-bs-parent="#accordionThree">
    											<div className="accordion-body">
    												<p className="fs-22">Our founders Dustin Moskovitz and Justin Rosenstein met while leading Engineering .</p>
    											</div>
    										</div>
    									</div>
    								</div>
    							</div>

    							<a href="/contact" className="btn-five mt-75 lg-mt-50">Contact us</a>
    						</div>
    					</div>
    					<div className="col-xl-6 col-lg-5 d-lg-flex wow fadeInLeft">
    						<div className="media-block h-100 w-100 pe-xl-5">
    							<div className="bg-img position-relative" style={{ backgroundImage: "url(images/media/img_52.jpg)" }}>
    								<img src="/images/lazy.svg" data-src="/images/assets/screen_10.png" alt="" className="lazy-img shapes screen_01" />
    							</div>
    						</div>

    					</div>
    				</div>
    				<div className="wrapper mt-90 lg-mt-40">
    					<div className="row justify-content-center">
    						<div className="col-md-4 col-sm-6">
    							<div className="counter-block-two text-center dark mt-30">
    								<div className="main-count sm font-garamond fw-500"><span className="counter">720</span>k+</div>
    								<p className="fs-20 mt-15 md-mt-10">Project handover</p>
    							</div>

    						</div>
    						<div className="col-md-4 col-sm-6">
    							<div className="counter-block-two text-center dark mt-30">
    								<div className="main-count sm font-garamond fw-500"><span className="counter">1.3</span>%</div>
    								<p className="fs-20 mt-15 md-mt-10">Low Interest</p>
    							</div>

    						</div>
    						<div className="col-md-4 col-sm-6">
    							<div className="counter-block-two text-center dark mt-30">
    								<div className="main-count sm font-garamond fw-500"><span className="counter">1.9</span>mil+</div>
    								<p className="fs-20 mt-15 md-mt-10">Happy customers</p>
    							</div>

    						</div>
    					</div>
    				</div>
    			</div>

    		</div>




            <div className="block-feature-sixteen">
                <div className="bg-pink-two position-relative z-1 pt-140 xl-pt-100 lg-pt-80 pb-150 xl-pb-120 lg-pb-100">
    				<div className="container">
    					<div className="title-one text-center mb-70 xl-mb-40 lg-mb-20">
    						<h2 className="font-garamond star-shape"><span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span> Buy, Rend & Sell</h2>
    						<p className="fs-22 mt-xs color-dark">Over 745K listings of apartments, lots, plots - available today.</p>
    					</div>

    					<div className="row justify-content-center gx-xxl-5">
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp">
    							<div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
    								<img src="/images/lazy.svg" data-src="/images/icon/icon_23.svg" alt="" className="lazy-img icon" />
    								<h5 className="mt-35 mb-20">Buy a home</h5>
    								<p className="fs-22 mb-50">Explore Home Real Estate’s 2 million+ homes and uncover your ideal living space.</p>
    								<a href="/listing_10" className="btn-twelve mt-auto">Find Home</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.1s">
    							<div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
    								<img src="/images/lazy.svg" data-src="/images/icon/icon_24.svg" alt="" className="lazy-img icon" />
    								<h5 className="mt-35 mb-20">Rent a home</h5>
    								<p className="fs-22 mb-50">Discover a rental you'll love on Home Real Estate, thanks to 35+ filters and tailored keywords.</p>
    								<a href="/listing_10" className="btn-twelve mt-auto">Rent Home</a>
    							</div>

    						</div>
    						<div className="col-lg-4 col-md-6 mt-30 d-flex wow fadeInUp" data-wow-delay="0.2s">
    							<div className="card-style-five text-center d-inline-flex flex-column align-items-center tran3s h-100 w-100">
    								<img src="/images/lazy.svg" data-src="/images/icon/icon_25.svg" alt="" className="lazy-img icon" />
    								<h5 className="mt-35 mb-20">Sell property</h5>
    								<p className="fs-22 mb-50">List, sell, thrive – with our top-notch real estate agency. It’s super easy & fun.</p>
    								<a href="/listing_10" className="btn-twelve mt-auto">Sell Property</a>
    							</div>

    						</div>
    					</div>
    				</div>
    				<img src="/images/lazy.svg" data-src="/images/shape/shape_71.svg" alt="" className="lazy-img shapes shape_01 wow fadeInDown" />
    				<img src="/images/lazy.svg" data-src="/images/shape/shape_39.svg" alt="" className="lazy-img shapes shape_02 wow fadeInUp" />
    			</div>
    			<div className="block-feature-fourteen pt-150 xl-pt-120 lg-pt-100 pb-150 xl-pb-120 lg-pb-80">
    				<div className="container">
    					<div className="row">
    						<div className="col-lg-6">
    							<div className="title-one md-mb-30 pe-xxl-4 wow fadeInLeft">
    								<h2 className="font-garamond text-white star-shape">Easily Purchase, Sell, or Lease listings. <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    							</div>

    						</div>
    						<div className="col-xxl-5 col-lg-6 ms-auto">
    							<p className="text-white fs-24 m0 lh-lg  wow fadeInRight">Your leading real estate advocate, transforming houses into dreams. Trust us to expertly guide you home</p>
    						</div>
    					</div>

    					<div className="wow fadeInUp mt-70 xl-mt-50">
    						<div className="row">
    							<div className="col-lg-4">
    								<div className="card-style-eight mt-45 wow fadeInUp">
    									<div className="d-flex pe-xxl-5">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_40.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h5 className="text-white">Property Insurance</h5>
    											<p>Elit esse cillum dol fug nulla tur nos ullamo.</p>
    										</div>
    									</div>
    								</div>

    							</div>
    							<div className="col-lg-4">
    								<div className="card-style-eight mt-45 wow fadeInUp">
    									<div className="d-flex pe-xxl-2 ps-xxl-2">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_41.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h5 className="text-white">Easy Payments</h5>
    											<p>quis nostrud exerct ulla security finibus ne derived.</p>
    										</div>
    									</div>
    								</div>

    							</div>
    							<div className="col-lg-4">
    								<div className="card-style-eight mt-45 wow fadeInUp">
    									<div className="d-flex ps-xxl-5">
    										<img src="/images/lazy.svg" data-src="/images/icon/icon_42.svg" alt="" className="lazy-img icon" />
    										<div className="text">
    											<h5 className="text-white">Quick Process</h5>
    											<p>Duis aute irure do reprehe de Cicero's voluptat velit.</p>
    										</div>
    									</div>
    								</div>

    							</div>
    						</div>
    					</div>
    				</div>
    			</div>

            </div>





    		<div className="feedback-section-seven mt-170 xl-mt-120 md-mt-80">
    			<div className="container container-large">
    				<div className="position-relative z-1">
    					<div className="row">
    						<div className="col-lg-5">
    							<div className="title-one mt-30 md-mb-50 pe-xxl-4 wow fadeInLeft">
    								<div className="upper-title">CLIENT Feedback</div>
    								<h3>Rely on Clients, Not Just Our Claims.</h3>
    							</div>

    						</div>
    						<div className="col-lg-7">
    							<div className="content-wrapper position-relative z-1 ms-xxl-3">
    								<div className="icon d-flex align-items-center justify-content-center rounded-circle mb-35"><img src="/images/lazy.svg" data-src="/images/icon/icon_38.svg" alt="" className="lazy-img" /></div>

    								<div className="feedback-slider-one">
    									<div className="item">
    										<div className="feedback-block-five">
    											<blockquote>Efficient and friendly service, guided us <span>perfectly</span> I am satisfied with our new home. Give a try. Thank you!</blockquote>
    											<div className="d-flex align-items-center justify-content-end ct-info">
    												<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    												<div className="ps-3">
    													<h6 className="fs-20 m0">Musa Delimuza</h6>
    													<span className="fs-16 opacity-50">Miami, USA</span>
    												</div>
    											</div>
    										</div>

    									</div>
    									<div className="item">
    										<div className="feedback-block-five">
    											<blockquote>Found our dream home. Great <span>Business</span> with them. To thank you for excellent service. Will take again sure.</blockquote>
    											<div className="d-flex align-items-center justify-content-end ct-info">
    												<img src="/images/media/img_02.jpg" alt="" className="rounded-circle avatar" />
    												<div className="ps-3">
    													<h6 className="fs-20 m0">Alina Cruse</h6>
    													<span className="fs-16 opacity-50">Miami, Italy</span>
    												</div>
    											</div>
    										</div>

    									</div>
    									<div className="item">
    										<div className="feedback-block-five">
    											<blockquote>Efficient and friendly service, guided us <span>perfectly</span> I am satisfied with our new home. Give a try. Thank you!</blockquote>
    											<div className="d-flex align-items-center justify-content-end ct-info">
    												<img src="/images/media/img_03.jpg" alt="" className="rounded-circle avatar" />
    												<div className="ps-3">
    													<h6 className="fs-20 m0">Rashed Ka.</h6>
    													<span className="fs-16 opacity-50">Miami, USA</span>
    												</div>
    											</div>
    										</div>

    									</div>
    								</div>
    							</div>

    						</div>
    					</div>
    					<div className="rating-box">
    						<img src="/images/lazy.svg" data-src="/images/shape/shape_62.svg" alt="" className="lazy-img" />
    						<div className="rate fw-500">9.3 <br /><span>Rating</span></div>
    					</div>
    				</div>
    			</div>
    		</div>




    		<div className="partner-section-two mt-90 lg-mt-50">
    			<div className="container container-large">
    				<div className="wrapper">
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




    		<div className="fancy-banner-eight wow fadeInUp mt-160 xl-mt-100 mb-120 xl-mb-100 lg-mb-80">
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





    		<div className="footer-two">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1">
    					<div className="news-letter-area">
    						<div className="row align-items-center">
    							<div className="col-lg-6">
    								<div className="text-center text-lg-start md-mb-20">
    									<h2>Our Newsletter</h2>
    									<p className="fs-20 m0">Get instant news by subscribe to our newsletter</p>
    								</div>
    							</div>
    							<div className="col-lg-6">
    								<div className="form-wrapper me-auto ms-auto me-lg-0">
    									<form action="#">
    										<input type="email" placeholder="Your email address" />
    										<button><i className="fa-light fa-arrow-right-long"></i></button>
    									</form>
    								</div>
    							</div>
    						</div>
    					</div>

    					<div className="row justify-content-between">
    						<div className="col-xl-3">
    							<div className="footer-intro position-relative z-1 pt-70 pb-150 lg-pb-20">
    								<div className="logo mb-15">
    									<a href="/">
    										<img src="/images/logo/logo.svg" alt="" />
    									</a>
    								</div> 

    								<p className="mb-45 lg-mb-30 pe-2 pe-lg-5">11910 Clyde Rapid Suite 210, Wil, Virginia, USA</p>
    								<ul className="style-none contact-info">
    									<li className="d-flex align-items-center">
    										<img src="/images/icon/icon_30.svg" alt="" width="20" />
    										<a href="#">hello@homerealestate.com</a>
    									</li>
    									<li className="d-flex align-items-center">
    										<img src="/images/icon/icon_31.svg" alt="" width="20" />
    										<a href="#">+757 699-4478</a>
    									</li>
    								</ul>
    								<ul className="style-none d-flex align-items-center social-icon">
    									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
    									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
    								</ul>
    								<img src="/images/lazy.svg" data-src="/images/shape/shape_46.svg" alt="" className="lazy-img shapes shape_01 d-none d-xl-block" />
    							</div>
    						</div>
    						<div className="col-xl-9">
    							<div className="ms-xxl-5 ps-xl-5 mt-200 lg-mt-20">
    								<div className="row justify-content-between">
    									<div className="col-lg-3 col-md-4">
    										<div className="footer-nav pt-30">
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
    									<div className="col-xxl-3 col-xl-4 col-lg-3 col-md-4">
    										<div className="footer-nav pt-30">
    											<h5 className="footer-title">Legal</h5>
    											<ul className="footer-nav-link style-none">
    												<li><a href="/faq">Terms & conditions</a></li>
    												<li><a href="/faq">Cookie</a></li>
    												<li><a href="/faq">Privacy policy</a></li>
    												<li><a href="/faq">Faq’s</a></li>
    											</ul>
    										</div>
    									</div>
    									<div className="col-lg-3 col-md-4">
    										<div className="footer-nav pt-30">
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
    									<div className="col-xxl-3 col-lg-2 d-none d-lg-block">
    										<img src="/images/lazy.svg" data-src="/images/shape/shape_47.svg" alt="" className="lazy-img mt-50" />
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>

    				<div className="bottom-footer">
    					<div className="d-md-flex justify-content-center justify-content-md-between align-items-center">
    						<ul className="style-none bottom-nav d-flex flex-wrap justify-content-center">
    							<li><a href="/faq">Privacy &amp; Terms</a></li>
    							<li><a href="/faq">Cookies</a></li>
    							<li><a href="/contact">Contact Us</a></li>
    						</ul>
    						<p className="mb-15 text-center text-lg-start order-md-first">Copyright @2024 Home Real Estate.</p>
    					</div>
    				</div>
    			</div>
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
