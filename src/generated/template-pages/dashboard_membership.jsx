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


    		<aside className="dash-aside-navbar">
    			<div className="position-relative">
    				<div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
    					<a href="/dashboard/dashboard-index">
    						<img src="/images/logo/logo_01.svg" alt="" />
    					</a>
    					<button className="close-btn d-block d-md-none"><i className="fa-light fa-circle-xmark"></i></button>
    				</div>
    				<nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
    					<ul className="style-none">
    						<li className="plr"><a href="/dashboard/dashboard-index" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_1.svg" alt="" />
    							<span>Dashboard</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/message" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_2.svg" alt="" />
    							<span>Message</span>
    						</a></li>
    						<li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
    						<li><div className="nav-title">Profile</div></li>
    						<li className="plr"><a href="/dashboard/profile" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_3.svg" alt="" />
    							<span>Profile</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/account-settings" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_4.svg" alt="" />
    							<span>Account Settings</span>
    						</a></li>
    						<li className="plr"><a href="#" className="d-flex w-100 align-items-center active">
    							<img src="/dashboard/images/icon/icon_5_active.svg" alt="" />
    							<span>Membership</span>
    						</a></li>
    						<li className="bottom-line pt-30 lg-pt-20 mb-40 lg-mb-30"></li>
    						<li><div className="nav-title">Listing</div></li>
    						<li className="plr"><a href="/dashboard/properties-list" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_6.svg" alt="" />
    							<span>My Properties</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/add-property" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_7.svg" alt="" />
    							<span>Add New Property</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/favourites" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_8.svg" alt="" />
    							<span>Favourites</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/saved-search" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_9.svg" alt="" />
    							<span>Saved Search</span>
    						</a></li>
    						<li className="plr"><a href="/dashboard/review" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_10.svg" alt="" />
    							<span>Reviews</span>
    						</a></li>
    					</ul>
    				</nav>

    				<div className="profile-complete-status bottom-line pb-35 plr">
    					<div className="progress-value fw-500">82%</div>
    					<div className="progress-line position-relative">
    						<div className="inner-line" style={{ width: "80%" }}></div>
    					</div>
    					<p>Profile Complete</p>
    				</div>


    				<div className="plr">
    					<a href="#" className="d-flex w-100 align-items-center logout-btn">
    						<div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle"><img src="/dashboard/images/icon/icon_41.svg" alt="" /></div>
    						<span>Logout</span>
    					</a>
    				</div>
    			</div>
    		</aside>



    		<div className="dashboard-body">
    			<div className="position-relative">

    				<header className="dashboard-header">
    					<div className="d-flex align-items-center justify-content-end">
    						<h4 className="m0 d-none d-lg-block">Membership</h4>
    						<button className="dash-mobile-nav-toggler d-block d-md-none me-auto">
    							<span></span>
    						</button>
    						<form action="#" className="search-form ms-auto">
    							<input type="text" placeholder="Search here.." />
    							<button><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_43.svg" alt="" className="lazy-img m-auto" /></button>
    						</form>
    						<div className="profile-notification position-relative dropdown-center ms-3 ms-md-5 me-4">
    							<button className="noti-btn dropdown-toggle" type="button" id="notification-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    								<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_11.svg" alt="" className="lazy-img" />
    								<div className="badge-pill"></div>
    							</button>
    							<ul className="dropdown-menu" aria-labelledby="notification-dropdown">
    								<li>
    									<h4>Notification</h4>
    									<ul className="style-none notify-list">
    										<li className="d-flex align-items-center unread">
    											<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_36.svg" alt="" className="lazy-img icon" />
    											<div className="flex-fill ps-2">
    												<h6>You have 3 new mails</h6>
    												<span className="time">3 hours ago</span>
    											</div>
    										</li>
    										<li className="d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_37.svg" alt="" className="lazy-img icon" />
    											<div className="flex-fill ps-2">
    												<h6>Your listing post has been approved</h6>
    												<span className="time">1 day ago</span>
    											</div>
    										</li>
    										<li className="d-flex align-items-center unread">
    											<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_38.svg" alt="" className="lazy-img icon" />
    											<div className="flex-fill ps-2">
    												<h6>Your meeting is cancelled</h6>
    												<span className="time">3 days ago</span>
    											</div>
    										</li>
    									</ul>
    								</li>
    							</ul>
    						</div>
    						<div className="d-none d-md-block me-3">
    							<a href="/dashboard/add-property" className="btn-two"><span>Add Listing</span> <i className="fa-thin fa-arrow-up-right"></i></a>
    						</div>
    						<div className="user-data position-relative">
    							<button className="user-avatar online position-relative rounded-circle dropdown-toggle" type="button" id="profile-dropdown" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
    								<img src="/images/lazy.svg" data-src="/dashboard/images/avatar_01.jpg" alt="" className="lazy-img" />
    							</button>

    							<div className="user-name-data">
    								<ul className="dropdown-menu" aria-labelledby="profile-dropdown">
    									<li>
    										<a className="dropdown-item d-flex align-items-center" href="/dashboard/profile"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_23.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Profile</span></a>
    									</li>
    									<li>
    										<a className="dropdown-item d-flex align-items-center" href="/dashboard/account-settings"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_24.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Account Settings</span></a>
    									</li>
    									<li>
    										<a className="dropdown-item d-flex align-items-center" href="#" data-bs-toggle="modal" data-bs-target="#deleteModal"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_25.svg" alt="" className="lazy-img" /><span className="ms-2 ps-1">Delete Account</span></a>
    									</li>
    								</ul>
    							</div>
    						</div>

    					</div>
    				</header>


    				<h2 className="main-title d-block d-lg-none">Membership</h2>

                    <div className="membership-plan-wrapper mb-20">
                        <div className="row gx-0">
                            <div className="col-xxl-7 col-lg-6 d-flex flex-column">
                                <div className="column w-100 h-100">
                                    <h4>Current Plan (Standard)</h4>
                                    <p>Unlimited access to our legal document library and online rental application tool, billed monthly.</p>
                                </div>
                            </div>
                            <div className="col-xxl-5 col-lg-6 d-flex flex-column">
                                <div className="column border-left w-100 h-100">
                                    <div className="d-flex">
                                        <h3 className="price m0">$29</h3>
                                        <div className="ps-4 flex-fill">
                                            <h6>Monthly Plan</h6>
                                            <span className="text1 d-block">Your subscription renews <span className="fw-500">July 12th, 2023</span></span>
                                            <a href="#" className="cancel-plan tran3s">Cancel Current Plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


    				<div className="pricing-section-two">
    					<div className="wrapper">
    						<div className="row gx-xxl-5">
    							<div className="col-xl-4 col-lg-6">
    								<div className="pr-column-wrapper bg-white rounded-5 border-0 mt-30">
    									<div className="pr-header text-center mb-55">
    										<div className="plan fw-500 text-uppercase color-dark">FREE PLAN</div>
    										<strong className="price fw-500">0</strong>
    										<p className="fs-24">per user/month</p>
    									</div>

    									<ul className="style-none text-center">
    										<li>60-day chat history</li>
    										<li>Basic widget customization</li>
    										<li className="disable">Ticketing system</li>
    										<li className="disable">Data security</li>
    									</ul>
    									<div className="pr-footer text-center mt-60">
    										<a href="#" className="btn-twelve w-100 sm">Choose Plan</a>
    									</div>
    								</div>
    							</div>
    							<div className="col-xl-4 col-lg-6">
    								<div className="pr-column-wrapper bg-white rounded-5 active mt-30">
    									<div className="pr-header text-center mb-55">
    										<div className="plan fw-500 text-uppercase color-dark">Standard</div>
    										<strong className="price fw-500">$12</strong>
    										<p className="fs-24">per user/month</p>
    									</div>

    									<ul className="style-none text-center">
    										<li>60-day chat history</li>
    										<li>Basic widget customization</li>
    										<li>Ticketing system</li>
    										<li className="disable">Data security</li>
    									</ul>
    									<div className="pr-footer text-center mt-60">
    										<a href="#" className="btn-twelve w-100 sm">Current Plan</a>
    									</div>
    								</div>
    							</div>
    							<div className="col-xl-4 col-lg-6">
    								<div className="pr-column-wrapper bg-white rounded-5 border-0 mt-30">
    									<div className="pr-header text-center mb-55">
    										<div className="plan fw-500 text-uppercase color-dark">BUSINESS</div>
    										<strong className="price fw-500">$39</strong>
    										<p className="fs-24">per user/month</p>
    									</div>

    									<ul className="style-none text-center">
    										<li>60-day chat history</li>
    										<li>Basic widget customization</li>
    										<li>Ticketing system</li>
    										<li>Data security</li>
    									</ul>
    									<div className="pr-footer text-center mt-60">
    										<a href="#" className="btn-twelve w-100 sm">Choose Plan</a>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    		</div>




            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                    <div className="container">
                        <div className="remove-account-popup text-center modal-content">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    						<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_22.svg" alt="" className="lazy-img m-auto" />
    						<h2>Are you sure?</h2>
    						<p>Are you sure to delete your account? All data will be lost.</p>
    						<div className="button-group d-inline-flex justify-content-center align-items-center pt-15">
    							<a href="#" className="confirm-btn fw-500 tran3s me-3">Yes</a>
    							<button type="button" className="btn-close fw-500 ms-3" data-bs-dismiss="modal" aria-label="Close">Cancel</button>
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
