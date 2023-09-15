import { useFormik } from 'formik';

import ErrorMsg from './error-msg';
import { contactSchema } from './validation-schema';

const ContactForm = () => {
	// contact form
	const handleOnSubmit = (values, { resetForm }) => {
		alert(`${values.name + '\n' + values.email + '\n' + values.msg}`);
		resetForm();
	};
	// use formik
	const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
		useFormik({
			initialValues: {
				name: 'test',
				email: 'test@example.com',
				msg: 'test@example.comtest@example.comtest@example.com',
			},
			validationSchema: contactSchema,
			onSubmit: handleOnSubmit,
		});
	return (
		<>
			<form onSubmit={handleSubmit} id='contact-form'>
				<div className='row'>
					<div className='col-xl-12 col-lg-12'>
						<div className='contact__input'>
							<label>
								Name <span className='required'>*</span>
							</label>
							<input
								id='name'
								value={values.name}
								onChange={handleChange}
								onBlur={handleBlur}
								type='text'
							/>
							{touched.name && <ErrorMsg error={errors.name} />}
						</div>
					</div>
					<div className='col-xl-12 col-lg-12'>
						<div className='contact__input'>
							<label>
								Email <span className='required'>*</span>
							</label>
							<input
								id='email'
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
								type='email'
							/>
							{touched.email && <ErrorMsg error={errors.email} />}
						</div>
					</div>
				</div>
				{/* <div className='row'>
					<div className='col-xl-12'>
						<div className='contact__input'>
							<label>
								Subject <span className='required'>*</span>
							</label>
							<input
								id='msg'
								value={values.msg}
								onChange={handleChange}
								onBlur={handleBlur}
								type='text'
							/>
							{touched.msg && <ErrorMsg error={errors.msg} />}
						</div>
					</div>
				</div> */}
				<div className='row'>
					<div className='col-xl-12'>
						<div className='contact__input'>
							<label>Message</label>
							<textarea
								id='msg'
								cols='30'
								rows='10'
								value={values.msg}
								onChange={handleChange}
								onBlur={handleBlur}
								type='text'
							></textarea>
							{touched.email && <ErrorMsg error={errors.email} />}
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-xl-12'>
						<div className='contact__submit'>
							<button type='submit' className='os-btn os-btn-2'>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default ContactForm;
