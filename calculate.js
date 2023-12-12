document.addEventListener('alpine:init', () => {
  Alpine.data('app', () => ({

    // loyality_points: 0,

    // calculate_loyality_points() {

    //   if (this.$store.user.reservation.singleRoomNum >= 3) {
    //     this.loyality_points = parseInt(this.loyality_points) + 20;
    //   }
    //   if (this.$store.user.reservation.doubleRoomNum >= 3) {
    //     this.loyality_points = parseInt(this.loyality_points) + 20;
    //   }
    //   if (this.$store.user.reservation.tripleRoomNum >= 3) {
    //     this.loyality_points = parseInt(this.loyality_points) + 20;
    //   }

    //   localStorage.setItem('loyality_points', this.loyality_points);

    // },

    // init() {

    //   if (localStorage.getItem('loyality_points') != null) {
    //     this.loyality_points = localStorage.setItem('loyality_points');
    //   }

    // },





  }));
})
