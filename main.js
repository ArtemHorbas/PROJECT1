const naviBtn =  document.querySelector('.navi_button')
const mobileNavi = document.querySelector('.mobile-navi')
const scrollDown = document.querySelector('.title-scroll')

naviBtn.addEventListener('click', function() {
	mobileNavi.classList.toggle('mobile-navi-active')
	naviBtn.classList.toggle('navi_button_close')
	scrollDown.classList.toggle('scroll-of')
})

