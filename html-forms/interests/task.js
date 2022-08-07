addEventListener('change', e => {
	const target = e.target

	if ( target.classList.contains('interest__check') ) {
		const interest = target.closest('.interest')
		const interests = interest.querySelector('.interests')

		if ( interests ) {
			const interestArray = interests.querySelectorAll('input[type=checkbox]')

			Array.from(interestArray).forEach(checkbox => checkbox.checked = target.checked)
		}
	}
})