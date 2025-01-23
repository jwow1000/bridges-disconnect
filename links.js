import { link } from "d3";

// object of group ids, with liks
export const links = {
  "shri-atal": {
    link: "https://www.google.com/maps/@18.979868,72.9919792,3a,75y,144.33h,98.26t/data=!3m8!1e1!3m6!1sAF1QipNQl4Ud1rWIKj1Y8ci9p9h53yWs4QpmXbGiHftP!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipNQl4Ud1rWIKj1Y8ci9p9h53yWs4QpmXbGiHftP%3Dw900-h600-k-no-pi-8.260000000000005-ya198.45127685546882-ro0-fo100!7i4096!8i2048?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
  },

  "saket": {
    link: "https://www.google.com/maps/search/saket+bridge+thabe/@19.209124,72.9948264,3a,75y,289.68h,73.25t/data=!3m7!1e1!3m5!1slCLoxXymiv1_XycEukYQRA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DlCLoxXymiv1_XycEukYQRA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D104.899765%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=tts"
  },
  
  "mankhurd": {
    link: "https://www.google.com/maps/place/Vashi+bridge+gateway/@19.0586014,72.957685,17z/data=!4m6!3m5!1s0x3be7c76dc4d9eddd:0x78b51058fbd1ad4b!8m2!3d19.0583497!4d72.9616883!16s%2Fg%2F11ty243htq?entry=tts"
  },

  "vashi-2": {
    link: "https://www.google.com/maps/place/Vitawa+to+Kopri+Sky+Walk/@19.060915,72.9677929,3a,75y,256.25h,77.45t/data=!3m8!1e1!3m6!1sAF1QipPwd5x_jV1IBu4Wzb43sMo2G_h0fCMNbitWOpE7!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPwd5x_jV1IBu4Wzb43sMo2G_h0fCMNbitWOpE7%3Dw203-h100-k-no-pi-3.3651142-ya115.779686-ro-10.588126-fo100!7i5376!8i2688!4m6!3m5!1s0x3be7b90900aaa4dd:0x9a60407590f084f!8m2!3d19.1875678!4d72.9821784!16s%2Fg%2F11str9tfgn?entry=tts"
  },

  "vashi-1": {
    link: "https://www.google.com/maps/place/Vitawa+to+Kopri+Sky+Walk/@19.0605305,72.9643117,3a,75y,324.22h,73.42t/data=!3m8!1e1!3m6!1sAF1QipP8XkHvhF_PNy4dFqpF1IKOyo1aud8iMVyznkJy!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipP8XkHvhF_PNy4dFqpF1IKOyo1aud8iMVyznkJy%3Dw203-h100-k-no-pi-0-ya54.81088-ro-0-fo100!7i6080!8i3040!4m6!3m5!1s0x3be7b90900aaa4dd:0x9a60407590f084f!8m2!3d19.1875678!4d72.9821784!16s%2Fg%2F11str9tfgn?entry=tts"
  },

  "old-vashi": {
    link: "https://www.google.com/maps/@19.0638535,72.9790188,3a,75y,286.7h,75.5t/data=!3m7!1e1!3m5!1s0BD9N_LUI4Pzj4-8_GZEog!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.500058811297436%26panoid%3D0BD9N_LUI4Pzj4-8_GZEog%26yaw%3D286.69964622245254!7i13312!8i6656?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
  },

  // this one broke the naming convention pattern, but its ok
  "Airoli_Bridge": {
    link: "https://www.google.com/maps/place/Vitawa+to+Thane+East+Sky+Walk/@19.1507639,72.9809273,3a,90y,14.07h,72.36t/data=!3m7!1e1!3m5!1sx9kW8veYtu7w6ykmg6_Eyw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D17.64%26panoid%3Dx9kW8veYtu7w6ykmg6_Eyw%26yaw%3D14.07!7i13312!8i6656!4m7!3m6!1s0x3be7b90900aaa4dd:0x9a60407590f084f!8m2!3d19.1875678!4d72.9821774!10e5!16s%2Fg%2F11str9tfgn?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
  },
  
  "vitava": {
    link: "https://www.google.com/maps/place/Vitawa+to+Thane+East+Sky+Walk/@19.1507639,72.9809273,3a,90y,14.07h,72.36t/data=!3m7!1e1!3m5!1sx9kW8veYtu7w6ykmg6_Eyw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D17.64%26panoid%3Dx9kW8veYtu7w6ykmg6_Eyw%26yaw%3D14.07!7i13312!8i6656!4m7!3m6!1s0x3be7b90900aaa4dd:0x9a60407590f084f!8m2!3d19.1875678!4d72.9821774!10e5!16s%2Fg%2F11str9tfgn?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
  },

  "railway": {
    link: "https://www.google.com/maps/place/Vitawa+to+Thane+East+Sky+Walk/@19.1875254,72.9819642,3a,75y,8.23h,74.53t/data=!3m8!1e1!3m6!1sAF1QipOSKG85FFfo5ZsnGl2Xi9wn6Bxe2_FmCMvr_FM8!2e10!3e11!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipOSKG85FFfo5ZsnGl2Xi9wn6Bxe2_FmCMvr_FM8%3Dw900-h600-k-no-pi15.473696060935026-ya133.2328190337152-ro0-fo100!7i10240!8i5120!4m7!3m6!1s0x3be7b90900aaa4dd:0x9a60407590f084f!8m2!3d19.1875678!4d72.9821774!10e5!16s%2Fg%2F11str9tfgn?entry=ttu&g_ep=EgoyMDI1MDEyMC4wIKXMDSoASAFQAw%3D%3D"
  },

  "kalwa-1": {
    link: "https://www.google.com/maps/place/THANE-+KALWA+BRIDGE+OLD/@19.196948,72.9834949,18z/data=!4m6!3m5!1s0x3be7b92c16774617:0x3c65980921cb6bf5!8m2!3d19.1969479!4d72.9851792!16s%2Fg%2F11qbj2t1rp?entry=tts"
  },

  "kalwa-2": {
    link: "https://www.google.com/maps/place/Kalwa+New+Bridge/@19.1969334,72.9861481,3a,75y,355.84h,83.57t/data=!3m7!1e1!3m5!1szU-XUUsCRab3GGe-6Nxbjg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DzU-XUUsCRab3GGe-6Nxbjg%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D337.74753%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656!4m6!3m5!1s0x3be7b9c30e52fa07:0xfc4b3f2a1f518366!8m2!3d19.1993455!4d72.9869893!16s%2Fg%2F11jzrc29cb?entry=tts"
  },

  "kalwa-3": {
    link: "https://www.google.com/maps/place/Kalwa+New+Bridge/@19.1993452,72.982226,17z/data=!4m6!3m5!1s0x3be7b9c30e52fa07:0xfc4b3f2a1f518366!8m2!3d19.1993455!4d72.9869893!16s%2Fg%2F11jzrc29cb?entry=tts"
  },

  "water-2": {
    link: "https://www.google.com/maps/place/Pipeline+and+public+bridge./@19.2046761,72.9909585,18z/data=!4m6!3m5!1s0x3be7b933b554256d:0x2882d19a88f9c42d!8m2!3d19.2042557!4d72.9918095!16s%2Fg%2F11mtrxt895?entry=tts"
  },

  "water-1": {
    link: "https://www.google.com/maps/search/saket+bridge+thabe/@19.209124,72.9948264,3a,75y,289.68h,73.25t/data=!3m7!1e1!3m5!1slCLoxXymiv1_XycEukYQRA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DlCLoxXymiv1_XycEukYQRA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D104.899765%26pitch%3D0%26thumbfov%3D100!7i13312!8i6656?entry=tts"
  }, 

  

}