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
    						<li className="plr"><a href="#" className="d-flex w-100 align-items-center active">
    							<img src="/dashboard/images/icon/icon_3_active.svg" alt="" />
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
    						<h4 className="m0 d-none d-lg-block">Profile</h4>
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


    				<h2 className="main-title d-block d-lg-none">Profile</h2>

    				<div className="bg-white card-box border-20">
                        <div className="user-avatar-setting d-flex align-items-center mb-30">
                            <img src="/images/lazy.svg" data-src="/dashboard/images/avatar_02.jpg" alt="" className="lazy-img user-img" />
                            <div className="upload-btn position-relative tran3s ms-4 me-3">
                                Upload new photo
                                <input type="file" id="uploadImg" name="uploadImg" placeholder="" />
                            </div>
                            <button className="delete-btn tran3s">Delete</button>
                        </div>

    					<div className="row">
    						<div className="col-12">
    							<div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Username*</label>
    								<input type="text" placeholder="JonyRio" />
    							</div>

    						</div>
    						<div className="col-sm-6">
    							<div className="dash-input-wrapper mb-30">
    								<label htmlFor="">First Name*</label>
    								<input type="text" placeholder="Mr Johny" />
    							</div>

    						</div>
    						<div className="col-sm-6">
    							<div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Last Name*</label>
    								<input type="text" placeholder="Riolek" />
    							</div>

    						</div>
    						<div className="col-sm-6">
    							<div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Email*</label>
    								<input type="email" placeholder="companyinc@mail.com" />
    							</div>

    						</div>
    						<div className="col-sm-6">
    							<div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Position*</label>
    								<select className="nice-select">
    									<option>Agent</option>
    									<option>Agency</option>
    								</select>
    							</div>

    						</div>
    						<div className="col-sm-6">
    							<div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Phone Number*</label>
    								<input type="tel" placeholder="+880 01723801729" />
    							</div>

    						</div>
    						<div className="col-sm-6">
    							<div className="dash-input-wrapper mb-30">
    								<label htmlFor="">Website*</label>
    								<input type="text" placeholder="http://somename.com" />
    							</div>

    						</div>
    						<div className="col-12">
    							<div className="dash-input-wrapper">
    								<label htmlFor="">About*</label>
    								<textarea className="size-lg" placeholder="I am working for the last 4 years as a web designer, graphics designer and well as UI/UX designer............."></textarea>
    								<div className="alert-text">Brief description for your profile. URLs are hyperlinked.</div>
    							</div>

    						</div>
    					</div>


                    </div>


    				<div className="bg-white card-box border-20 mt-40">
                        <h4 className="dash-title-three">Social Media</h4>

                        <div className="dash-input-wrapper mb-20">
                            <label htmlFor="">Network 1</label>
                            <input type="text" placeholder="https://www.facebook.com/zubayer0145" />
                        </div>

                        <div className="dash-input-wrapper mb-20">
                            <label htmlFor="">Network 2</label>
                            <input type="text" placeholder="https://twitter.com/FIFAcom" />
                        </div>

    					<a href="#" className="dash-btn-one"><i className="bi bi-plus"></i> Add more link</a>
                    </div>


    				<div className="bg-white card-box border-20 mt-40">
                        <h4 className="dash-title-three">Address & Location</h4>
    					<div className="row">
    						<div className="col-12">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Address*</label>
    								<input type="text" placeholder="19 Yawkey Way" />
    							</div>

    						</div>
    						<div className="col-lg-3">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Country*</label>
    								<select className="nice-select">
    									<option>Afghanistan</option>
    									<option>Albania</option>
    									<option>Algeria</option>
    									<option>Andorra</option>
    									<option>Angola</option>
    									<option>Antigua and Barbuda</option>
    									<option>Argentina</option>
    									<option>Armenia</option>
    									<option>Australia</option>
    									<option>Austria</option>
    									<option>Azerbaijan</option>
    									<option>Bahamas</option>
    									<option>Bahrain</option>
    									<option>Bangladesh</option>
    									<option>Barbados</option>
    									<option>Belarus</option>
    									<option>Belgium</option>
    									<option>Belize</option>
    									<option>Benin</option>
    									<option>Bhutan</option>
    								</select>
    							</div>

    						</div>
    						<div className="col-lg-3">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">City*</label>
    								<select className="nice-select">
    									<option>Boston</option>
    									<option>Tokyo</option>
    									<option>Delhi</option>
    									<option>Shanghai</option>
    									<option>Mumbai</option>
    									<option>Bangalore</option>
    								</select>
    							</div>

    						</div>
    						<div className="col-lg-3">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Zip Code*</label>
    								<input type="number" placeholder="1708" />
    							</div>

    						</div>
    						<div className="col-lg-3">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">State*</label>
    								<select className="nice-select">
    									<option>Maine</option>
    									<option>Tokyo</option>
    									<option>Delhi</option>
    									<option>Shanghai</option>
    									<option>Mumbai</option>
    									<option>Bangalore</option>
    								</select>
    							</div>

    						</div>
    						<div className="col-12">
    							<div className="dash-input-wrapper mb-25">
    								<label htmlFor="">Map Location*</label>
    								<div className="position-relative">
    									<input type="text" placeholder="XC23+6XC, Moiran, N105" />
    									<button className="location-pin tran3s"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_16.svg" alt="" className="lazy-img m-auto" /></button>
    								</div>
    								<div className="map-frame mt-30">
    									<div className="gmap_canvas h-100 w-100">
    										<iframe className="gmap_iframe h-100 w-100" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=dhaka collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    									</div>
    								</div>
    							</div>

    						</div>
    					</div>
                    </div>


    				<div className="button-group d-inline-flex align-items-center mt-30">
    					<a href="#" className="dash-btn-two tran3s me-3">Save</a>
    					<a href="#" className="dash-cancel-btn tran3s">Cancel</a>
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
