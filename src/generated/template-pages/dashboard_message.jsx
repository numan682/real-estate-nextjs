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
    						<li className="plr"><a href="#" className="d-flex w-100 align-items-center active">
    							<img src="/dashboard/images/icon/icon_2_active.svg" alt="" />
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
    						<h4 className="m0 d-none d-lg-block">Message</h4>
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


    				<div className="row gx-0 align-items-center">
    					<div className="offcanvas compose-mail-offcanvas" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    						<div className="compose-new-email-container">
    							<div className="new-email-header position-relative">
    								<div className="btn-group">
    									<a data-bs-toggle="collapse" href="#CC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Cc</a>
    									<a data-bs-toggle="collapse" href="#BCC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Bcc</a>
    								</div>
    								<div className="input-group d-flex align-items-center">
    									<div className="text-center" style={{ width: "60px" }}>To</div>
    									<input type="email" className="flex-fill" placeholder="payoneer@inquiry.com" />
    								</div>
    								<div className="collapse" id="CC-input">
    									<div className="input-group d-flex align-items-center">
    										<div className="text-center" style={{ width: "60px" }}>Cc</div>
    										<input type="email" className="flex-fill" placeholder="payoneer@inquiry.com" />
    									</div>
    								</div>
    								<div className="collapse" id="BCC-input">
    									<div className="input-group d-flex align-items-center">
    										<div className="text-center" style={{ width: "60px" }}>Bcc</div>
    										<input type="email" className="flex-fill" placeholder="payoneer@inquiry.com" />
    									</div>
    								</div>
    							</div>

    							<div className="compose-body">
    								<textarea>Hi, Mary Cooper! 
    Thanks for your invitation for the account manager position for you company. I Will back to you soon with all the require documents.</textarea>
    							</div>


    							<div className="compose-email-footer d-flex justify-content-between">
    								<div className="d-flex align-items-center">
    									<div className="insert-file position-relative me-3">
    										<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_32.svg" alt="" className="lazy-img" />
    										<input type="file" name="uploadImg" placeholder="" title="Insert File" />
    									</div>
    									<button className="insert-emoji me-3"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_33.svg" alt="" className="lazy-img" /></button>
    									<div className="insert-file position-relative me-3">
    										<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_34.svg" alt="" className="lazy-img" />
    										<input type="file" name="uploadImg" placeholder="" title="Insert Image" />
    									</div>
    								</div>

    								<div className="d-flex align-items-center">
    									<a href="#" className="delete-mail me-3"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_35.svg" alt="" className="lazy-img" /></a>
    									<a href="#" className="reply-btn tran3s">Reply</a>
    								</div>
    							</div>

    						</div>

    						<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    					</div>
                        <div className="col-lg-4">
                            <div className="d-flex align-items-center justify-content-between">
    							<h2 className="main-title d-block d-lg-none m0">Messages</h2>
                                <a className="new-message-compose rounded-circle" data-bs-toggle="offcanvas" href="#offcanvasScrolling" role="button" aria-controls="offcanvasScrolling">+</a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="message-pagination ps-lg-4 ps-xxl-5 d-flex align-items-center justify-content-between md-mt-40">
                                <a href="javascript:void()" className="prev-msg"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_26.svg" alt="" className="lazy-img" /></a>
                                <div className="d-flex align-items-center">
    								<a href="#"><i className="bi bi-chevron-left"></i></a>
    								<span>1-5 of 120</span>
    								<a href="#"><i className="bi bi-chevron-right"></i></a>
                                </div>
                                <a href="javascript:void()" className="next-msg"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_27.svg" alt="" className="lazy-img" /></a>
                            </div>

                        </div>
                    </div>

    				<div className="bg-white card-box border-20 p0 mt-30">
                        <div className="message-wrapper">
    						<div className="row gx-0">
    							<div className="col-lg-4">
    								<div className="message-sidebar pt-20">
    									<div className="ps-3 pe-3 ps-xxl-4 pe-xxl-4">
    										<div className="d-flex align-items-center justify-content-between">
    											<div className="page-title fw-500">Inbox</div>
    											<div className="action-dots float-end">
    												<button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    													<span></span>
    												</button>
    												<ul className="dropdown-menu dropdown-menu-end">
    												<li><a className="dropdown-item" href="#">Sent</a></li>
    												<li><a className="dropdown-item" href="#">Important</a></li>
    												<li><a className="dropdown-item" href="#">Draft</a></li>
    												<li><a className="dropdown-item" href="#">Trash</a></li>
    												</ul>
    											</div>
    										</div>
    										<form action="#" className="search-form mt-20 mb-20">
    											<input type="text" placeholder="Search contacts" />
    											<button><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_43.svg" alt="" className="lazy-img m-auto" /></button>
    										</form>

    										<div className="message_filter d-flex align-items-center justify-content-between mb-20" id="module_btns">
    											<button className="filter_btn active">All</button>
    											<button className="filter_btn"><span style={{ background: "#FF4545" }}></span> Read</button>
    											<button className="filter_btn"><span style={{ background: "#3BDA84" }}></span> Unread</button>
    											<button className="filter_btn"><span style={{ background: "#50C0FF" }}></span> Primary</button>
    										</div>
    									</div>
    									<div className="email-read-panel">
    										<div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Jenny Rio.</div>
    													<div className="date">Aug 22</div>
    												</div>
    												<div className="mail-sub">Work inquiry from google.</div>
    												<div className="mail-text">Hello, This is Jenny from google. We’r the largest online platform offer...</div>
    												<div className="attached-file-preview d-flex align-items-center mt-15">
    													<div className="file d-flex align-items-center me-2">
    														<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_28.svg" alt="" className="lazy-img me-2" />
    														<span>details.pdf</span>
    													</div>
    												</div>

    											</div>

    										</div>


    										<div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 primary selected">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Hasan Islam.</div>
    													<div className="date">May 22</div>
    												</div>
    												<div className="mail-sub">Account Manager</div>
    												<div className="mail-text">Hello, Greeting from Uber. Hope you doing great. I am approcing to you for..</div>
    												<div className="attached-file-preview d-flex align-items-center mt-15">
    													<div className="file d-flex align-items-center me-2">
    														<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_28.svg" alt="" className="lazy-img me-2" />
    														<span>details.pdf</span>
    													</div>
    													<div className="file d-flex align-items-center me-2">
    														<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_28.svg" alt="" className="lazy-img me-2" />
    														<span>form.pdf</span>
    													</div>
    												</div>

    											</div>

    										</div>


    										<div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Jannatul Ferdaus.</div>
    													<div className="date">Jun 22</div>
    												</div>
    												<div className="mail-sub">Product Designer Opportunities</div>
    												<div className="mail-text">Hello, This is Jannat from HuntX. We offer business solution to our client..</div>
    											</div>

    										</div>



    										<div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Jakie Chan</div>
    													<div className="date">NOV 22</div>
    												</div>
    												<div className="mail-sub">Hunting Marketing Specialist</div>
    												<div className="mail-text">Hello, We’r the well known Real Estate Inc provide best interior/exterior solut...</div>
    											</div>

    										</div>


    										<div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Jakie Chan</div>
    													<div className="date">NOV 22</div>
    												</div>
    												<div className="mail-sub">Hunting Marketing Specialist</div>
    												<div className="mail-text">Hello, We’r the well known Real Estate Inc provide best interior/exterior solut...</div>
    											</div>

    										</div>


    										<div className="email-list-item ps-3 pe-3 ps-xxl-4 pe-xxl-4 read">
    											<div className="email-short-preview position-relative">
    												<div className="d-flex align-items-center justify-content-between">
    													<div className="sender-name">Jakie Chan</div>
    													<div className="date">NOV 22</div>
    												</div>
    												<div className="mail-sub">Hunting Marketing Specialist</div>
    												<div className="mail-text">Hello, We’r the well known Real Estate Inc provide best interior/exterior solut...</div>
    											</div>

    										</div>

    									</div>


    								</div>

    							</div>
    							<div className="col-lg-8">
    								<div className="open-email-container pb-40">
    									<div className="email-header divider d-flex justify-content-between ps-4 pe-4 ps-xxl-5 pe-xxl-5">
    										<div className="sender-info d-flex align-items-center">
    											<img src="/images/lazy.svg" data-src="/dashboard/images/logo_02.png" alt="" className="lazy-img logo" />
    											<div className="ps-3">
    												<div className="sender-name">Killwake</div>
    												<div className="sender-email">kilwakesales@inquiry.com</div>
    											</div>
    										</div>
    										<div className="email-info">
    											<div className="time">4:45AM (3 hours ago)</div>
    											<div className="d-flex align-items-center justify-content-end">
    												<button className="delete-email"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_29.svg" alt="" className="lazy-img" /></button>
    												<button className="reply-email ms-3 me-3"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_30.svg" alt="" className="lazy-img" /></button>
    												<div className="action-dots float-end">
    													<button className="action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    														<span></span>
    													</button>
    													<ul className="dropdown-menu dropdown-menu-end">
    													  <li><a className="dropdown-item" href="#">Reply</a></li>
    													  <li><a className="dropdown-item" href="#">Fowrward</a></li>
    													  <li><a className="dropdown-item" href="#">Block</a></li>
    													  <li><a className="dropdown-item" href="#">Delete</a></li>
    													</ul>
    												</div>
    											</div>
    										</div>
    									</div>


    									<div className="email-body divider">
    										<div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
    											<h2>Payment Verification</h2>
    											<p>Hello, Greeting from Uber. Hope you doing great. I am approaching to you for as our company need a great & talented account manager. </p>
    											<p>What we need from you to start:</p>
    											<ul className="style-none mb-30">
    												<li>- Your CV</li>
    												<li>- Verified Gov ID</li>
    											</ul>
    											<p>After that we need to redesign our landing page because the current one doesn't carry any information. If you have any question don’t hesitate to contact us.</p>
    											<p>Our Telegram <a href="#" className="fw-500">@rainbow</a> <br />Thank you!</p>
    										</div>
    									</div>


    									<div className="email-footer">
    										<div className="ps-4 pe-4 ps-xxl-5 pe-xxl-5">
    											<div className="attachments mb-30">
    												<div className="d-flex justify-content-between mb-5">
    													<h6 className="m0">2 Attachment</h6>
    													<a href="#" className="all-download">Download All</a>
    												</div>
    												<div className="d-flex">
    													<a href="#" className="file tran3s d-flex align-items-center mt-10" download>
    														<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_31.svg" alt="" className="lazy-img" /></div>
    														<div className="ps-2">
    															<div className="file-name">project-details.pdf</div>
    															<div className="file-size">2.3mb</div>
    														</div>
    													</a>
    													<a href="#" className="file tran3s d-flex align-items-center mt-10" download>
    														<div className="icon rounded-circle d-flex align-items-center justify-content-center"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_31.svg" alt="" className="lazy-img" /></div>
    														<div className="ps-2">
    															<div className="file-name">form.pdf</div>
    															<div className="file-size">1.3mb</div>
    														</div>
    													</a>
    												</div>
    											</div>

    											<div className="compose-new-email-container">
    												<div className="new-email-header position-relative">
    													<div className="btn-group">
    														<a data-bs-toggle="collapse" href="#CC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Cc</a>
    														<a data-bs-toggle="collapse" href="#BCC-input" role="button" aria-expanded="false" aria-controls="collapseExample">Bcc</a>
    													</div>
    													<div className="input-group d-flex align-items-center">
    														<div className="text-center" style={{ width: "60px" }}>To</div>
    														<input type="email" className="flex-fill" placeholder="rainbowsales@inquiry.com" />
    													</div>
    													<div className="collapse" id="CC-input">
    														<div className="input-group d-flex align-items-center">
    															<div className="text-center" style={{ width: "60px" }}>Cc</div>
    															<input type="email" className="flex-fill" placeholder="zoonwala@inquiry.com" />
    														</div>
    													</div>
    													<div className="collapse" id="BCC-input">
    														<div className="input-group d-flex align-items-center">
    															<div className="text-center" style={{ width: "60px" }}>Bcc</div>
    															<input type="email" className="flex-fill" placeholder="mojobdltd@inquiry.com" />
    														</div>
    													</div>
    												</div>

    												<div className="compose-body">
    													<textarea>Hi, Mary Cooper! 

    Thanks for your invitation for the account manager position for you company. I Will back to you soon with all the require documents.</textarea>
    												</div>


    												<div className="compose-email-footer d-flex justify-content-between">
    													<div className="d-flex align-items-center">
    														<div className="insert-file position-relative me-3">
    															<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_32.svg" alt="" className="lazy-img" />
    															<input type="file" name="uploadImg" placeholder="" title="Insert File" />
    														</div>
    														<button className="insert-emoji me-3"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_33.svg" alt="" className="lazy-img" /></button>
    														<div className="insert-file position-relative me-3">
    															<img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_34.svg" alt="" className="lazy-img" />
    															<input type="file" name="uploadImg" placeholder="" title="Insert Image" />
    														</div>
    													</div>

    													<div className="d-flex align-items-center">
    														<a href="#" className="delete-mail me-3"><img src="/images/lazy.svg" data-src="/dashboard/images/icon/icon_35.svg" alt="" className="lazy-img" /></a>
    														<a href="#" className="reply-btn tran3s">Reply</a>
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
