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
    						<img src="/images/logo/logo_02.svg" alt="" />
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
    								<img src="/images/logo/logo_04.svg" alt="" />
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
    									<li className="d-block d-lg-none"><div className="logo"><a href="/" className="d-block"><img src="/images/logo/logo_04.svg" alt="" /></a></div></li>
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





    		<div className="hero-banner-three position-relative z-1 pt-130 lg-pt-100 pb-170 xl-pb-130 lg-pb-100">
    			<div className="hero-slider-one m0">
    				<div className="item m0"><div className="hero-img" style={{ backgroundImage: "url(images/media/img_26.jpg)" }}></div></div>
    				<div className="item m0"><div className="hero-img" style={{ backgroundImage: "url(images/media/img_27.jpg)" }}></div></div>
    				<div className="item m0"><div className="hero-img" style={{ backgroundImage: "url(images/media/img_28.jpg)" }}></div></div>
    			</div>

    			<div className="container position-relative z-2">
    				<div className="row">
    					<div className="col-lg-10 m-auto">
    						<h1 className="hero-heading text-center text-white font-garamond fw-500 wow fadeInUp"><span><img src="/images/lazy.svg" data-src="/images/shape/shape_34.svg" alt="" className="lazy-img" /> Find the Right</span> <br /> Home for Your Family</h1>
    						<p className="fs-24 text-white text-center pt-35 md-pt-20 pb-55 lg-pb-40 wow fadeInUp" data-wow-delay="0.1s">We’ve more than 745,000 apartments, place & plot.</p>
    					</div>
    				</div>
    				<div className="row">
    					<div className="col-xxl-10 m-auto">
    						<div className="search-wrapper-one layout-one position-relative wow fadeInUp" data-wow-delay="0.2s">
    							<div className="bg-wrapper">
    								<form action="/listing_07">
    									<div className="row gx-0 align-items-center">
    										<div className="col-xl-3 col-lg-4">
    											<div className="input-box-one border-left">
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
    										<div className="col-xl-3">
    											<div className="input-box-one lg-mt-10">
    												<button className="fw-500 w-100 tran3s search-btn-three">Search Now</button>
    											</div>

    										</div>
    									</div>
    								</form>
    							</div>
    						</div>

    					</div>
    				</div>
    			</div>
                <img src="/images/lazy.svg" data-src="/images/shape/shape_35.svg" alt="" className="lazy-img shapes shape_01" />
                <img src="/images/lazy.svg" data-src="/images/shape/shape_36.svg" alt="" className="lazy-img shapes shape_02" />
    		</div>





    		<div className="category-section-one mt-65">
    			<div className="container container-large">
                    <div className="position-relative border-bottom pb-65 xl-pb-40 z-1">
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
                            <a href="/listing_08" className="btn-eleven"><span>See all categories</span> <i className="bi bi-chevron-right"></i></a>
                        </div>

                    </div>
                </div>
    		</div>





    		<div className="block-feature-seven position-relative z-1 mt-120 xl-mt-100">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="text-center mb-30 wow fadeInUp">
    						<div className="title-one mb-30 lg-mb-20">
    							<h2 className="font-garamond star-shape">How our clients get <em>benefited</em> by us <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    							<p className="fs-24 mt-xs">“Outstanding service, bought my dream home quickly!”</p>
    						</div>

    						<ul className="rating style-none d-flex justify-content-center">
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><i className="fa-sharp fa-solid fa-star"></i></li>
    							<li><span className="color-dark fw-500">4.7</span> (18k Reviews)</li>
    						</ul>
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
    			</div>
    		</div>






    		<div className="property-listing-three position-relative z-1 mt-170 xl-mt-140 lg-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="title-one mb-60 lg-mb-40 wow fadeInUp">
    						<h2 className="font-garamond star-shape">Featured <em>Listing</em> <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    						<p className="fs-22 m0">Explore featured properties for sale.</p>
    					</div>


    					<div className="row gx-xxl-5">
    						<div className="col-lg-8 d-flex">
    							<div className="listing-card-three w-100 h-100 position-relative z-1 wow fadeInUp" style={{ backgroundImage: "url(images/listing/img_12.jpg)" }}>
    								<div className="w-100 h-100 d-flex flex-column">
    									<div className="tag fw-500 text-uppercase">FOR SELL</div>
    									<div className="mt-100 mt-sm-auto wrapper d-flex flex-wrap justify-content-between align-items-center">
    										<div className="property-name h-100">
    											<h5 className="text-white mb-15">Super luxury duplex orkit villa.</h5>
    											<p className="m0 text-white">Mirpur 10, Stadium dhaka 1210</p>
    										</div>

    										<div className="property-info h-100">
    											<ul className="style-none feature d-flex flex-wrap align-items-center justify-content-between pb-5">
    												<li className="d-flex align-items-center">
    													<div className="fs-16"><span>2137</span> sqft</div>
    												</li>
    												<li className="d-flex align-items-center">
    													<div className="fs-16"><span>03</span> beds</div>
    												</li>
    												<li className="d-flex align-items-center">
    													<div className="fs-16"><span>01</span> kitchen</div>
    												</li>
    												<li className="d-flex align-items-center">
    													<div className="fs-16"><span>02</span> baths</div>
    												</li>
    											</ul>
    											<div className="d-sm-flex justify-content-between align-items-center mt-10">
    												<ul className="style-none d-flex action-icons">
    													<li><a href="#"><i className="fa-light fa-heart"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-bookmark"></i></a></li>
    													<li><a href="#"><i className="fa-light fa-circle-plus"></i></a></li>
    												</ul>
    												<a href="/listing_details_05" className="btn-ten xs-mt-20"><span>Full Details</span> <i className="bi bi-arrow-up-right"></i></a>
    											</div>
    										</div>

    									</div>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-4 d-flex">
    							<div className="w-100 h-100">
    								<div className="row h-100">
    									<div className="col-lg-12 col-md-6">
    										<div className="listing-card-two w-100 position-relative z-1 md-mt-40 wow fadeInUp" style={{ backgroundImage: "url(images/listing/img_10.jpg)" }}>
    											<div className="w-100 h-100 d-flex flex-column">
    												<div className="tag fw-500 text-uppercase">FOR SELL</div>
    												<div className="mt-auto d-lg-flex justify-content-between align-items-center">
    													<div className="md-mb-20">
    														<h5 className="text-white">Swimming Pool Villa</h5>
    														<p className="m0 text-white">127 green road, California, USA</p>
    													</div>
    													<a href="/listing_details_05" className="btn-four rounded-circle inverse stretched-link"><i className="bi bi-arrow-up-right"></i></a>
    												</div>
    											</div>
    										</div>

    									</div>
    									<div className="col-lg-12 col-md-6">
    										<div className="listing-card-two w-100 position-relative z-1 mt-40 wow fadeInUp" style={{ backgroundImage: "url(images/listing/img_11.jpg)" }}>
    											<div className="w-100 h-100 d-flex flex-column">
    												<div className="tag fw-500 text-uppercase">FOR RENT</div>
    												<div className="mt-auto d-lg-flex justify-content-between align-items-center">
    													<div className="md-mb-20">
    														<h5 className="text-white">Modern Duplex</h5>
    														<p className="m0 text-white">Twin tower, 32 street, Florida</p>
    													</div>
    													<a href="/listing_details_05" className="btn-four rounded-circle inverse stretched-link"><i className="bi bi-arrow-up-right"></i></a>
    												</div>
    											</div>
    										</div>

    									</div>
    								</div>
    							</div>
    						</div>
    					</div>

    					<div className="section-btn text-center md-mt-60">
    						<a href="/listing_04" className="btn-five md"><span>Explore All</span> <i className="bi bi-arrow-up-right"></i></a>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="property-listing-four bg-pink-three position-relative z-1 overflow-hidden pt-120 xl-pt-80 pb-110 xl-pb-60 mt-170 xl-mt-140 lg-mt-120">
    			<div className="container container-large">
    				<div className="position-relative z-1">
    					<div className="title-one mb-60 lg-mb-40 wow fadeInUp">
    						<h2 className="font-garamond">New <em>Listings</em> <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    						<p className="fs-22 m0">Explore latest & featured properties for sale.</p>
    					</div>


    					<div className="listing-slider-one">
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
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_38.svg" alt="" className="lazy-img shapes shape_01 wow fadeInDown" />
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_39.svg" alt="" className="lazy-img shapes shape_02 wow fadeInUp" />
    		</div>





    		<div className="block-feature-eight position-relative z-1 mt-170 xl-mt-140 lg-mt-120">
    			<div className="container container-large">
    				<div className="position-relative">
    					<div className="row align-items-xl-end">
    						<div className="col-xl-7 col-lg-6">
    							<div className="pe-xl-5 me-xxl-3 wow fadeInLeft">
    								<div className="title-one pe-xl-5">
    									<h2 className="font-garamond">Explore & Find your <em>Dream</em> home <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    								</div>


    								<div className="row gx-xl-4 align-items-end">
    									<div className="col-7">
    										<div className="media-block position-relative z-1">
    											<img src="/images/lazy.svg" data-src="/images/media/img_29.jpg" alt="" className="lazy-img main-img w-100" />
    											<img src="/images/lazy.svg" data-src="/images/assets/screen_03.jpg" alt="" className="lazy-img shapes screen_01" />
    											<img src="/images/lazy.svg" data-src="/images/shape/shape_40.svg" alt="" className="lazy-img shapes shape_01" />
    										</div>

    									</div>
    									<div className="col-5">
    										<div className="media-block position-relative z-1">
    											<img src="/images/lazy.svg" data-src="/images/media/img_30.jpg" alt="" className="lazy-img main-img w-100" />
    											<img src="/images/lazy.svg" data-src="/images/assets/screen_04.png" alt="" className="lazy-img shapes screen_02" />
    										</div>

    									</div>
    								</div>
    							</div>
    						</div>
    						<div className="col-xl-5 col-lg-6">
    							<div className="block-two ps-xxl-5 md-mt-100">
    								<div className="bg-wrapper wow fadeInRight">
    									<p className="fs-24 fst-italic pe-xl-5">“Your premier partner in real estate. Transforming properties into dreams. Let us guide you home with expertise.”</p>
    									<div className="counter-wrapper pb-40 mt-45 lg-mt-20 mb-60 lg-mb-20">
    										<div className="row">
    											<div className="col-6">
    												<div className="counter-block-one mt-20">
    													<div className="main-count fw-500 color-dark">$<span className="counter">7</span>bil+</div>
    													<span>Project Handover</span>
    												</div>

    											</div>
    											<div className="col-6">
    												<div className="counter-block-one mt-20">
    													<div className="main-count fw-500 color-dark"><span className="counter">1.9</span>mil+</div>
    													<span>Happy Customers</span>
    												</div>

    											</div>
    										</div>
    									</div>
    									<ul className="list-style-one fs-22 color-dark style-none">
    										<li>Loan &amp; low Interest facility</li>
    										<li>100k+ Property Listing  added & updated</li>
    										<li>Expert agent consultation</li>
    									</ul>
    									<div className="mt-70 lg-mt-50">
    										<a href="/about_us_02" className="btn-five md"><span>Learn More</span> <i className="bi bi-arrow-up-right"></i></a>
    									</div>
    								</div>

    							</div>
    						</div>
    					</div>
    					<div className="row gx-lg-5 align-items-center mt-120 lg-mt-50">
    						<div className="col-lg-3">
    							<div className="card-style-three border-20 mt-40 wow fadeInUp">
    								<div className="bg-wrapper text-center">
    									<h3>07+</h3>
    									<p>Years Experience <br />with proud.</p>
    								</div>
    							</div>

    						</div>
    						<div className="col-lg-9 ps-xl-5">
    							<div className="row gx-xl-5">
    								<div className="col-md-4">
    									<div className="card-style-four mt-40 wow fadeInUp">
    										<div className="icon style-two rounded-circle d-flex align-items-center justify-content-center position-relative">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_26.svg" alt="" className="lazy-img" />
    										</div>
    										<h5 className="mt-35 mb-15">Property Insurance</h5>
    										<p>Elit esse cillum dolo fugiat nulla tur nos ullamo.</p>
    									</div>

    								</div>
    								<div className="col-md-4">
    									<div className="card-style-four mt-40 wow fadeInUp">
    										<div className="icon style-two rounded-circle d-flex align-items-center justify-content-center position-relative">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_27.svg" alt="" className="lazy-img" />
    										</div>
    										<h5 className="mt-35 mb-15">Easy Payments</h5>
    										<p>quis nostrud exerct ullamo sucirity finibus ne derived.</p>
    									</div>

    								</div>
    								<div className="col-md-4">
    									<div className="card-style-four mt-40 wow fadeInUp">
    										<div className="icon style-two rounded-circle d-flex align-items-center justify-content-center position-relative">
    											<img src="/images/lazy.svg" data-src="/images/icon/icon_28.svg" alt="" className="lazy-img" />
    										</div>
    										<h5 className="mt-35 mb-15">Quick Process</h5>
    										<p>Duis aute irure dolor reprehe de Cicero's voluptat velit.</p>
    									</div>

    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>





    		<div className="fancy-banner-six wow fadeInUp mt-160 xl-mt-140 lg-mt-100">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1 pt-85 md-pt-50 pb-140 md-pb-100 ps-4 pe-4">
    					<div className="row">
    						<div className="col-xl-7 col-lg-8 m-auto">
    							<div className="title-one text-center pe-xxl-2 ps-xxl-2">
    								<h2 className="font-garamond text-white">Where you are, You will find us every <em>where <span>easily</span></em> <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    							</div>

    						</div>
    					</div>
    					<div className="map-wrapper position-relative me-auto ms-auto mt-100 xl-mt-50 mb-50">
    						<img src="/images/lazy.svg" data-src="/images/assets/map_01.svg" alt="" className="lazy-img w-100" />
    						<div className="location-pin">
    							<div className="dot-marker rounded-circle"></div>
    							<div className="map-info tran3s d-flex">
    								<img src="/images/lazy.svg" data-src="/images/logo/flag_01.png" alt="" className="lazy-img flag" />
    								<div className="info">
    									<h6>United States</h6>
    									<span>32 link road, Mega Mall. California, USA</span>
    								</div>

    							</div>
    						</div>

    						<div className="location-pin">
    							<div className="dot-marker rounded-circle"></div>
    							<div className="map-info tran3s d-flex">
    								<img src="/images/lazy.svg" data-src="/images/logo/flag_02.png" alt="" className="lazy-img flag" />
    								<div className="info">
    									<h6>Brazil</h6>
    									<span>32 link road, Mega Mall. California, USA</span>
    								</div>

    							</div>
    						</div>

    						<div className="location-pin">
    							<div className="dot-marker rounded-circle"></div>
    							<div className="map-info tran3s d-flex">
    								<img src="/images/lazy.svg" data-src="/images/logo/flag_03.png" alt="" className="lazy-img flag" />
    								<div className="info">
    									<h6>Russia</h6>
    									<span>32 link road, Mega Mall. California, USA</span>
    								</div>

    							</div>
    						</div>

    						<div className="location-pin">
    							<div className="dot-marker rounded-circle"></div>
    							<div className="map-info tran3s d-flex">
    								<img src="/images/lazy.svg" data-src="/images/logo/flag_04.png" alt="" className="lazy-img flag" />
    								<div className="info">
    									<h6>Congo</h6>
    									<span>32 link road, Mega Mall. California, USA</span>
    								</div>

    							</div>
    						</div>

    						<div className="location-pin">
    							<div className="dot-marker rounded-circle"></div>
    							<div className="map-info tran3s d-flex">
    								<img src="/images/lazy.svg" data-src="/images/logo/flag_05.png" alt="" className="lazy-img flag" />
    								<div className="info">
    									<h6>India</h6>
    									<span>32 link road, Mega Mall. California, USA</span>
    								</div>

    							</div>
    						</div>

    						<div className="location-pin">
    							<div className="dot-marker rounded-circle"></div>
    							<div className="map-info tran3s d-flex">
    								<img src="/images/lazy.svg" data-src="/images/logo/flag_06.png" alt="" className="lazy-img flag" />
    								<div className="info">
    									<h6>Australia</h6>
    									<span>32 link road, Mega Mall. California, USA</span>
    								</div>

    							</div>
    						</div>

    					</div>

    					<div className="country-list d-flex flex-wrap">
    						<div className="list-block">
    							<div className="title">Asia Pacific</div>
    							<ul className="style-none d-flex flex-wrap">
    								<li>Australia</li>
    								<li>Dubai</li>
    								<li>India</li>
    								<li>Singapore</li>
    								<li>Hong Kong</li>
    							</ul>
    						</div>

    						<div className="list-block">
    							<div className="title">South America</div>
    							<ul className="style-none">
    								<li>United States</li>
    								<li>Canada</li>
    								<li>Argentina</li>
    							</ul>
    						</div>

    						<div className="list-block">
    							<div className="title">European</div>
    							<ul className="style-none d-flex flex-wrap">
    								<li>Germany</li>
    								<li>France</li>
    								<li>Italy</li>
    								<li>Netherlands</li>
    								<li>Switzerland</li>
    								<li>Spain</li>
    							</ul>
    						</div>

    						<div className="list-block">
    							<div className="title">Africa</div>
    							<ul className="style-none">
    								<li>Morocco</li>
    								<li>South Africa</li>
    							</ul>
    						</div>

    					</div>

    					<div className="text-slide-wrapper">
    						<div className="marquee">
    						  <p>
    							Dubai . America . Canada .
    						  </p>
    						  <p>
    							Dubai . America . Canada .
    						  </p>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>






    		<div className="feedback-section-four position-relative overflow-hidden z-1 pt-150 lg-pt-120 pb-110 lg-pb-80">
    			<div className="container container-large">
    				<div className="position-relative z-1">
    					<div className="row">
    						<div className="col-xl-6 col-lg-8">
    							<div className="title-one pe-xxl-5 mb-75 xl-mb-50 wow fadeInUp">
    								<h2 className="font-garamond">Don’t Trust Us, Trust <em>our clients</em> <span className="star-shape"><img src="/images/lazy.svg" data-src="/images/shape/shape_37.svg" alt="" className="lazy-img" /></span></h2>
    								<p className="fs-20 m0">Client satisfaction speaks louder than our words. Hear from them.</p>
    							</div>

    						</div>
    					</div>

    					<div className="feedback-slider-two">
    						<div className="item">
    							<div className="feedback-block-four">
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
    							<div className="feedback-block-four">
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
    							<div className="feedback-block-four">
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
    							<div className="feedback-block-four">
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
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_42.svg" alt="" className="lazy-img shapes shape_01 wow fadeInDown" data-wow-delay="0.2s" />
    			<img src="/images/lazy.svg" data-src="/images/shape/shape_43.svg" alt="" className="lazy-img shapes shape_02 wow fadeInUp" />
    		</div>





    		<div className="partner-section-one mt-45">
    			<div className="container">
    				<h6 className="text-center fs-20 mb-50 lg-mb-30">100+ Company trusted by us.</h6>
    			</div>
    			<div className="bg-wrapper bg-white">
    				<div className="container">
    					<div className="partner-logo-one">
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




    		<div className="fancy-banner-seven mt-110 xl-mt-80 mb-130 xl-mb-100 lg-mb-80">
    			<div className="container container-large">
    				<div className="bg-wrapper position-relative z-1 pt-85 lg-pt-70 pb-100 xl-pb-80 lg-pb-70">
    					<div className="row">
    						<div className="col-xl-7 col-lg-8 col-md-10 m-auto text-center">
    							<h2 className="font-garamond text-white">Find the right home for your family</h2>
    							<p className="fs-24 text-white mt-30 mb-45 lg-mb-30">We’ve more than 745,000 apartments, place & plot.</p>
    							<a href="/about_us_01" className="btn-two"><span>Get Started</span></a>
    						</div>
    					</div>
    					<img src="/images/lazy.svg" data-src="/images/shape/shape_44.svg" alt="" className="lazy-img shapes shape_01 wow fadeInLeft" data-wow-delay="0.2s" />
    					<img src="/images/lazy.svg" data-src="/images/shape/shape_45.svg" alt="" className="lazy-img shapes shape_02 wow fadeInRight" />
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
    										<img src="/images/logo/logo_05.svg" alt="" />
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
