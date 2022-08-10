// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

// copy all static images under ../img to the output folder,
// and you can reference them with <%= image_pack_tag 'media/img/abc.png' %>
const images = require.context('../img', true)
const imagePath = (name) => images(name, true)

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import '../vendor/bootstrap-icons/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.min.css'
import '../css/application.scss'

// JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'aos/dist/aos.js'
import 'glightbox/dist/js/glightbox.min.js'
import 'isotope-layout/dist/isotope.pkgd.min.js'
import 'swiper/swiper-bundle.min.js'
import '../vendor/php-email-form/validate.js'
import '../js/main.js'
