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
    						<li className="plr"><a href="#" className="d-flex w-100 align-items-center active">
    							<img src="/dashboard/images/icon/icon_6_active.svg" alt="" />
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
    						<h4 className="m0 d-none d-lg-block">My Properties</h4>
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


                    <h2 className="main-title d-block d-lg-none">My Properties</h2>
    				<div className="d-sm-flex align-items-center justify-content-between mb-25">
                        <div className="fs-16">Showing <span className="color-dark fw-500">1–5</span> of <span className="color-dark fw-500">40</span> results</div>
                        <div className="d-flex ms-auto xs-mt-30">
                            <div className="short-filter d-flex align-items-center ms-sm-auto">
                                <div className="fs-16 me-2">Short by:</div>
                                <select className="nice-select">
                                    <option value="0">Newest</option>
                                    <option value="1">Best Seller</option>
                                    <option value="2">Best Match</option>
                                    <option value="3">Price Low</option>
                                    <option value="4">Price High</option>
                                </select>
                            </div>
                        </div>
                    </div>

    				<div className="bg-white card-box p0 border-20">
                        <div className="table-responsive pt-25 pb-25 pe-4 ps-4">
                            <table className="table property-list-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">View</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="border-0"> 
                                    <tr>
                                        <td>
                                            <div className="d-lg-flex align-items-center position-relative">
                                                <img src="/dashboard/images/img_01.jpg" alt="" className="p-img" />
                                                <div className="ps-lg-4 md-pt-10">
                                                    <a href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">Galaxy Flat</a>
                                                    <div className="address">Mirpur 10, dhaka, BD</div>
                                                    <strong className="price color-dark">$32,800</strong>
                                                </div>
                                            </div>
                                        </td>
                                        <td>13 Jan, 2023</td>
                                        <td>1210</td>
                                        <td><div className="property-status">Active</div></td>
                                        <td>
                                            <div className="action-dots float-end">
                                                <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span></span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_18.svg" alt="" className="lazy-img" /> View</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_19.svg" alt="" className="lazy-img" /> Share</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_20.svg" alt="" className="lazy-img" /> Edit</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_21.svg" alt="" className="lazy-img" /> Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-lg-flex align-items-center position-relative">
                                                <img src="/dashboard/images/img_02.jpg" alt="" className="p-img" />
                                                <div className="ps-lg-4 md-pt-10">
                                                    <a href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">White House villa</a>
                                                    <div className="address">Ranchview, California, USA</div>
                                                    <strong className="price color-dark">$42,130</strong>
                                                </div>
                                            </div>
                                        </td>
                                        <td>09 Jan, 2023</td>
                                        <td>0</td>
                                        <td><div className="property-status pending">Pending</div></td>
                                        <td>
                                            <div className="action-dots float-end">
                                                <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span></span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_18.svg" alt="" className="lazy-img" /> View</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_19.svg" alt="" className="lazy-img" /> Share</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_20.svg" alt="" className="lazy-img" /> Edit</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_21.svg" alt="" className="lazy-img" /> Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-lg-flex align-items-center position-relative">
                                                <img src="/dashboard/images/img_03.jpg" alt="" className="p-img" />
                                                <div className="ps-lg-4 md-pt-10">
                                                    <a href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">Luxury villa in Dal lake</a>
                                                    <div className="address">Muza link road, ca, usa</div>
                                                    <strong className="price color-dark">$2,370/<sub>m</sub></strong>
                                                </div>
                                            </div>
                                        </td>
                                        <td>17 Oct, 2022</td>
                                        <td>0</td>
                                        <td><div className="property-status processing">Processing</div></td>
                                        <td>
                                            <div className="action-dots float-end">
                                                <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span></span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_18.svg" alt="" className="lazy-img" /> View</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_19.svg" alt="" className="lazy-img" /> Share</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_20.svg" alt="" className="lazy-img" /> Edit</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_21.svg" alt="" className="lazy-img" /> Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-lg-flex align-items-center position-relative">
                                                <img src="/dashboard/images/img_04.jpg" alt="" className="p-img" />
                                                <div className="ps-lg-4 md-pt-10">
                                                    <a href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">Wooden World</a>
                                                    <div className="address">Board Baxar, Califronia, USA</div>
                                                    <strong className="price color-dark">$63,300</strong>
                                                </div>
                                            </div>
                                        </td>
                                        <td>23 Sep, 2022</td>
                                        <td>970</td>
                                        <td><div className="property-status">Active</div></td>
                                        <td>
                                            <div className="action-dots float-end">
                                                <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span></span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_18.svg" alt="" className="lazy-img" /> View</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_19.svg" alt="" className="lazy-img" /> Share</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_20.svg" alt="" className="lazy-img" /> Edit</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_21.svg" alt="" className="lazy-img" /> Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="d-lg-flex align-items-center position-relative">
                                                <img src="/dashboard/images/img_05.jpg" alt="" className="p-img" />
                                                <div className="ps-lg-4 md-pt-10">
                                                    <a href="#" className="property-name tran3s color-dark fw-500 fs-20 stretched-link">Orkit Villa</a>
                                                    <div className="address">Green Road, Uttara, BD</div>
                                                    <strong className="price color-dark">$72,000</strong>
                                                </div>
                                            </div>
                                        </td>
                                        <td>15 Aug, 2022</td>
                                        <td>2320</td>
                                        <td><div className="property-status">Active</div></td>
                                        <td>
                                            <div className="action-dots float-end">
                                                <button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <span></span>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_18.svg" alt="" className="lazy-img" /> View</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_19.svg" alt="" className="lazy-img" /> Share</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_20.svg" alt="" className="lazy-img" /> Edit</a></li>
                                                  <li><a className="dropdown-item" href="#"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_21.svg" alt="" className="lazy-img" /> Delete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>                    
                    </div>



    				<ul className="pagination-one d-flex align-items-center justify-content-center style-none pt-40">
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
