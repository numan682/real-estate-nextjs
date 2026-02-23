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
    						<img src="/images/logo/logo.svg" alt="" />
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
    						<li className="plr"><a href="/dashboard/membership" className="d-flex w-100 align-items-center">
    							<img src="/dashboard/images/icon/icon_5.svg" alt="" />
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
    						<li className="plr"><a href="/dashboard/review" className="d-flex w-100 align-items-center active">
    							<img src="/dashboard/images/icon/icon_10_active.svg" alt="" />
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
    						<h4 className="m0 d-none d-lg-block">Reviews</h4>
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


    				<h2 className="main-title d-block d-lg-none">Reviews</h2>

                    <div className="d-sm-flex align-items-center justify-content-between mb-25">
                        <div className="fs-16">Showing <span className="color-dark fw-500">1–5</span> of <span className="color-dark fw-500">40</span> results</div>
                        <div className="d-flex ms-auto xs-mt-30">
                            <div className="short-filter d-flex align-items-center ms-sm-auto">
                                <div className="fs-16 me-2">Short by:</div>
                                <select className="nice-select">
                                    <option value="0">Newest</option>
                                    <option value="1">Best Rating</option>
                                    <option value="3">Rating Low</option>
                                    <option value="4">Rating High</option>
                                </select>
                            </div>
                        </div>
                    </div>

    				<div className="bg-white card-box pt-0 border-20">
                        <div className="theme-details-one">
                            <div className="review-panel-one">
    							<div className="position-relative z-1">
    								<div className="review-wrapper">
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
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Flag</span></a>
                                                    <a href="#"><i className="fa-sharp fa-regular fa-reply"></i> <span>Reply</span></a>
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
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Flag</span></a>
                                                    <a href="#"><i className="fa-sharp fa-regular fa-reply"></i> <span>Reply</span></a>
    											</div>

    										</div>

    									</div>


    									<div className="review">
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
    											<p className="fs-20 mt-20 mb-30">Lorem ipsum dolor sit amet consectetur. Amet amet id cursus dignissim. Eget vitae amet tempus sit mattis. Semper integer condimentum nunc augue aliquet quam a tincidunt.</p>
    											<div className="d-flex review-help-btn">
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-thumbs-up"></i> <span>Helpful</span></a>
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Flag</span></a>
                                                    <a href="#"><i className="fa-sharp fa-regular fa-reply"></i> <span>Reply</span></a>
    											</div>
    										</div>

    									</div>


                                        <div className="review border-0 pb-0">
    										<img src="/images/media/img_01.jpg" alt="" className="rounded-circle avatar" />
    										<div className="text">
    											<div className="d-sm-flex justify-content-between">
    												<div>
    													<h6 className="name">Milon Ahmed</h6>
    													<div className="time fs-16">7 Jan, 23</div>
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
    												<a href="#" className="me-5"><i className="fa-sharp fa-regular fa-flag-swallowtail"></i> <span>Flag</span></a>
                                                    <a href="#"><i className="fa-sharp fa-regular fa-reply"></i> <span>Reply</span></a>
    											</div>
    										</div>

    									</div>

    								</div>

    							</div>						
    						</div>

                        </div>                    
                    </div>


    				<ul className="pagination-one d-flex align-items-center style-none pt-40">
                        <li><a href="#">1</a></li>
                        <li className="active"><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li>....</li>
                        <li className="ms-2"><a href="#" className="d-flex align-items-center">Last <img src="/images/icon/icon_46.svg" alt="" className="ms-2" /></a></li>
                    </ul>	
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
