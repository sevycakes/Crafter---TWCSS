/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        bsblue: "#0d6efd",
        bsindigo: "#6610f2",
        bspurple: "#6f42c1",
        bspink: "#d63384",
        bsred: "#dc3545",
        bsorange: "#fd7e14",
        bsyellow: "#ffc107",
        bslyellow: "#ffd541",
        bsgreen: "#198754",
        bsteal: "#20c997",
        bscyan: "#0dcaf0",
        bswhite: "#fff",
        bsdwhite: "#f3f3f3",
        bsgray: "#6c757d",
        bsgraydark: "#343a40",
        bsbrown: "#434240",
        bslbrown: "#454545",
        bsbrowndark: "#0c1115",
      },
      backgroundImage: {
        'banner1': "url(../dist/img/swiper-slide-1.jpg)",
        'banner2': "url(../dist/img/swiper-slide-2.jpg)",
        'timer': "url(../dist/img/timer-bg.jpg)",
        'brown': "url(../dist/img/brown-bg.jpg)",
        'brown2': "url(../dist/img/brown-bg2.jpg)",
        'user1': "url(../dist/img/user-1-60x60.jpg)",
        'user2': "url(../dist/img/user-2-60x60.jpg)",
        'user3': "url(../dist/img/user-3-60x60.jpg)",
        'user4': "url(../dist/img/user-4-60x60.jpg)",
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

