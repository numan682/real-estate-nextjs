/* eslint-disable */

export function LoginModal() {
  return (
    <div className="modal fade" id="loginModal" tabIndex={-1} aria-hidden="true">
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
  );
}
