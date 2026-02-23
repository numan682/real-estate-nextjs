/* eslint-disable */

export function HeroBannerOneSection() {
  return (
    <div className="hero-banner-one bg-pink z-1 pt-225 xl-pt-200 pb-250 xl-pb-150 lg-pb-100 position-relative">
        			<div className="container position-relative">
        				<div className="row">
        					<div className="col-xxl-10 col-xl-9 col-lg-10 col-md-10 m-auto">
        						<h1 className="hero-heading text-center wow fadeInUp">Get the ideal home for your <span className="d-inline-block position-relative">family <img src="/images/lazy.svg" data-src="/images/shape/shape_01.svg" alt="" className="lazy-img" /></span></h1>
        						<p className="fs-24 color-dark text-center pt-35 pb-35 wow fadeInUp" data-wow-delay="0.1s">We’ve more than 745,000 apartments, place & plot.</p>
        					</div>
        				</div>
        				<div className="row">
        					<div className="col-xxl-10 m-auto">
        						<div className="search-wrapper-one layout-one bg position-relative">
        							<div className="bg-wrapper">
        								<form action="/listing_01">
        									<div className="row gx-0 align-items-center">
        										<div className="col-xl-3 col-lg-4">
        											<div className="input-box-one border-left">
        												<div className="label">I’m looking to...</div>
        												<select className="nice-select">
        													<option value="1">Buy Apartments</option>
        													<option value="2">Rent Condos</option>
        													<option value="3">Sell Houses</option>
        													<option value="4">Rent Industrial</option>
        													<option value="6">Sell Villas</option>
        												</select>
        											</div>

        										</div>
        										<div className="col-xl-4 col-lg-4">
        											<div className="input-box-one border-left">
        												<div className="label">Location</div>
        												<select className="nice-select location">
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
        												<select className="nice-select">
        													<option value="1">$10,000 - $200,000</option>
        													<option value="2">$200,000 - $300,000</option>
        													<option value="2">$300,000 - $400,000</option>
        												</select>
        											</div>

        										</div>
        										<div className="col-xl-2">
        											<div className="input-box-one lg-mt-10">
        												<button className="fw-500 text-uppercase tran3s search-btn">Search</button>
        											</div>

        										</div>
        									</div>
        								</form>
        							</div>
        						</div>

        					</div>
        				</div>
        			</div>
        			<img src="/images/lazy.svg" data-src="/images/assets/ils_01.svg" alt="" className="lazy-img shapes w-100 illustration" />
        		</div>
  );
}
