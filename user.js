document.addEventListener('alpine:init', () => {
  Alpine.store('user', {
      profile: {
        title:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        address:'',
      },

      reservation: {
        hotel_name: '',
        check_in:'',
        check_out:'',
        type_of_room:'',
        singleRoomNum:'',
        doubleRoomNum:'',
        tripleRoomNum:'',
        adults:'',
        children:'',
        extra_bed:'',
        promo_code:'',
        kids:'',

        //final calculation
        total_cost:'',
        final_accomadation_cost:'',
        discount_percentage:'',
        total_discount:'',
        final_adventure_cost:'',
        final_total:'',

      },

      Adventure: {
        type_of_adventure:'',
        check_in:'',
        local_adult:'',
        local_children:'',
        forign_adult:'',
        forign_children:'',
        tour_guide_children:'',
        tour_guide_adult:'',
      },

      payment: {
        card_no:'',
        card_holder_name:'',
        card_ex_year:'',
        card_ex_month:'',
        card_ex_date:'',
        security_code:'',
      },



      updateUser() {
        localStorage.setItem(
          "user_profile",
          JSON.stringify(this.$store.user.profile)
        );
        localStorage.setItem(
          "user_reservation",
          JSON.stringify(this.$store.user.reservation)
        );
        localStorage.setItem(
          "user_Adventure",
          JSON.stringify(this.$store.user.Adventure)
        );
        localStorage.setItem(
          "user_payment",
          JSON.stringify(this.$store.user.payment)
        );

      },

      init() {
        this.profile =
          JSON.parse(localStorage.getItem("user_profile")) || this.profile;
        this.reservation = 
          JSON.parse(localStorage.getItem("user_reservation")) || this.reservation;
        this.Adventure =
          JSON.parse(localStorage.getItem("user_Adventure")) || this.Adventure;
        this.payment =
          JSON.parse(localStorage.getItem("user_payment")) || this.payment;
      },


  })

})



