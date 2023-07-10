const SubscribeArea = ({ df, h4 }) => {
	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<>
			<section
				className={`subscribe__area pb-100 ${df ? 'grey-bg box-m-15' : ''} ${
					h4 ? 'position-relative' : ''
				}`}
			>
				<div className={`container ${h4 ? 'custom-container' : ''}`}>
					<div
						className={`subscribe__inner ${
							df ? 'subscribe__inner-2 pt-120' : 'pt-95'
						}`}
					>
						<div className='row bg-dark py-4'>
							<div className='col-xl-8 offset-xl-2 col-lg-8 offset-lg-2'>
								<div className='subscribe__content text-center'>
									<h2 className='text-light'>Get Discount Info</h2>
									<p className='text-light'>
										Subscribe to the Ultimate Financial Advisor mailing list to
										receive updates on new arrivals, special offers and other
										discount information.
									</p>
									<div className='subscribe__form'>
										<form onSubmit={handleSubmit}>
											<input
												type='email'
												className='text-light'
												placeholder='Subscribe to our newsletter...'
											/>
											<button className='os-btn os-btn-2 os-btn-white'>
												subscribe
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SubscribeArea;
