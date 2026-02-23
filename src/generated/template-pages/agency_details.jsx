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





    		<div className="inner-banner-two inner-banner z-1 pt-170 xl-pt-150 md-pt-130 pb-140 xl-pb-100 md-pb-80 position-relative" style={{ backgroundImage: "url(images/media/img_49.jpg)" }}>
    			<div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="mb-45 xl-mb-30 md-mb-20">Agency Details</h3>
                            <ul className="theme-breadcrumb style-none d-inline-flex align-items-center justify-content-center position-relative z-1 bottom-line">
                                <li><a href="/">Home</a></li>
                                <li>/</li>
                                <li><a href="/agency">Agency</a></li>
                                <li>/</li>
                                <li>Rainbow Housing</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <p className="sub-heading">Over 745,000 listings, apartments, lots and  plots available now!</p>
                        </div>
                    </div>
    			</div>
    		</div>






    		<div className="agency-details theme-details-one mt-130 xl-mt-100 pb-150 xl-pb-100">
    			<div className="container">
    				<div className="row">
    					<div className="col-lg-8">
                            <div className="info-pack-one p-20 mb-80 xl-mb-50">
                                <div className="row">
                                    <div className="col-xl-6 d-flex">
                                        <div className="media p-20 d-flex align-items-center justify-content-center bg-white position-relative z-1 w-100 me-xl-4">
                                            <div className="tag top-0 bg-dark text-white position-absolute text-uppercase">27 Listing</div>
                                            <img src="/images/lazy.svg" data-src="/images/logo/p_logo_22.png" alt="" className="lazy-img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="ps-xxl-3 pe-xxl-3 pt-40 lg-pt-30 pb-45 lg-pb-10">
                                            <h4>Rainbow Housing</h4>
                                            <div className="designation fs-16">8210 Preston Rd. Inglewood</div>
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td>Location: </td>
                                                            <td>Maine, USA </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Phone: </td>
                                                            <td>+21 456 987 330</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Email:</td>
                                                            <td>rainbowhousing@demo.com  </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Website:</td>
                                                            <td>www.rainbowinc.com</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <ul className="style-none d-flex align-items-center social-icon">
                                                <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fa-brands fa-viber"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

    						<div className="agency-overview bottom-line-dark pb-40 mb-80 xl-mb-50">
    							<h4 className="mb-20">Overview</h4>
    							<p className="fs-20 lh-lg pb-15">Before establishing Beratung in 2001, Mathew founded Silicon Valley internet companies and later held management roles at Salomon in New York.</p>
                                <p className="fs-20 lh-lg">Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations & reputation.They can actually generate value and create opportunities. </p>
    						</div>



    						<div className="agent-property-listing bottom-line-dark pb-20 mb-80 xl-mb-50">
    							<div className="d-sm-flex justify-content-between align-items-center mb-40 xs-mb-20">
                                    <h4 className="mb-10">Listings</h4>
                                    <div className="filter-nav-one xs-mt-40">
                                        <ul className="style-none d-flex justify-content-center flex-wrap isotop-menu-wrapper">
                                            <li className="is-checked" data-filter="*">All</li>
                                            <li data-filter=".sell">Sell</li>
                                            <li data-filter=".rent">Rent</li>
                                        </ul>
                                    </div>
                                </div>
                                <div id="isotop-gallery-wrapper" className="grid-2column">
                                    <div className="grid-sizer"></div>
                                    <div className="isotop-item rent">
                                        <div className="listing-card-one shadow-none style-two mb-50">
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
    												<strong className="price fw-500 color-dark">$2,210/ <sub>m</sub></strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                    <div className="isotop-item sell">
                                        <div className="listing-card-one shadow-none style-two mb-50">
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
    												<strong className="price fw-500 color-dark">$2,210/ <sub>m</sub></strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                    <div className="isotop-item sell">
                                        <div className="listing-card-one shadow-none style-two mb-50">
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
    												<strong className="price fw-500 color-dark">$1,23,710</strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                    <div className="isotop-item rent">
                                        <div className="listing-card-one shadow-none style-two mb-50">
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
    												<strong className="price fw-500 color-dark">$78,420</strong>
    												<div className="address pt-5 m0">6391 Elgin St. Celina</div>
    											</div>
    											<a href="#" className="btn-four mb-5"><i className="bi bi-arrow-up-right"></i></a>
    										</div>

    									</div>

                                    </div>
                                </div>
    						</div>


    						<div className="review-panel-one bottom-line-dark pb-40 mb-80 xl-mb-50">
    							<div className="position-relative z-1">
    								<div className="d-sm-flex justify-content-between align-items-center mb-10">
    									<h4 className="m0 xs-pb-30">All Reviews (4.7 Rating)</h4>
    									<select className="nice-select rounded-0">
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

    								<div className="load-more-review text-uppercase fw-500 w-100 inverse rounded-0 tran3s">VIEW ALL 120 REVIEWS <i className="bi bi-arrow-up-right"></i></div>
    							</div>						
    						</div>


    						<div className="review-form">
    							<h4 className="mb-20">Leave A Reply</h4>
    							<p className="fs-20 lh-lg pb-15"><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal" className="color-dark fw-500 text-decoration-underline">Sign in</a> to post your comment or signup if you don't have any account.</p>

    							<div className="bg-dot p-30">
    								<form action="#" className="bg-white p-40">
    									<div className="row">
    										<div className="col-12">
    											<div className="input-box-two mb-30">
    												<div className="label">Title*</div>
    												<input type="text" placeholder="Rashed Kabir" className="type-input rounded-0" />
    											</div>

    										</div>
    										<div className="col-lg-6">
    											<div className="input-box-two mb-30">
    												<div className="label">Email*</div>
    												<input type="email" placeholder="rshdkabir@gmail.com" className="type-input rounded-0" />
    											</div>

    										</div>
    										<div className="col-lg-6">
    											<div className="input-box-two mb-30">
    												<div className="label">Ratings*</div>
    												<select className="nice-select rounded-0">
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
    												<textarea placeholder="Write your review here..." className="rounded-0"></textarea>
    											</div>

    										</div>
    									</div>
    									<button className="btn-five text-uppercase rounded-0 sm">Post Review</button>
    								</form>
    							</div>
    						</div>

    					</div>
    					<div className="col-lg-4">
    						<div className="theme-sidebar-one dot-bg p-30 ms-xxl-3 md-mt-60">
    							<div className="tour-schedule bg-white p-30 mb-40">
    								<h5 className="mb-40">Contact Form</h5>
    								<form action="#">
    									<div className="input-box-three mb-25">
    										<div className="label">Your Email*</div>
    										<input type="email" placeholder="Enter mail address" className="type-input rounded-0" />
    									</div>

    									<div className="input-box-three mb-25">
    										<div className="label">Your Phone*</div>
    										<input type="tel" placeholder="Your phone number" className="type-input rounded-0" />
    									</div>

    									<div className="input-box-three mb-15">
    										<div className="label">Message*</div>
    										<textarea placeholder="Hello, I am interested in [Califronia Apartments]" className="rounded-0"></textarea>
    									</div>

    									<button className="btn-nine text-uppercase w-100 mb-20">INQUIry</button>
    								</form>
                                    <a href="tel:+548842445" className="btn-eight sm text-uppercase w-100 rounded-0 tran3s">CALL NOW</a>
    							</div>


    							<div className="agent-finder bg-white p-30">
    								<h5 className="mb-40">Search Agency</h5>
    								<form action="#">
    									<div className="input-box-one mb-25">
                                            <div className="label">Agency Name</div>
                                            <input type="text" placeholder="Type Agency Name" className="type-input" />
                                        </div>

    									<div className="input-box-one mb-25">
                                            <div className="label">Keyword</div>
                                            <input type="text" placeholder="Apartments, Villa" className="type-input" />
                                        </div>

    									<div className="input-box-one mb-25">
                                            <div className="label">Location</div>
                                            <select className="nice-select fw-normal">
                                                <option value="1">Dhanmondi, Dhaka</option>
                                                <option value="2">Acapulco, Mexico</option>
                                                <option value="3">Berlin, Germany</option>
                                                <option value="4">Cannes, France</option>
                                                <option value="5">Delhi, India</option>
                                                <option value="6">Giza, Egypt </option>
                                                <option value="7">Havana, Cuba</option>
                                            </select>
                                        </div>

    									<button className="btn-nine text-uppercase w-100 mb-10">SEARCH</button>
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
