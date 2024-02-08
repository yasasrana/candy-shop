<template>
  <div class="home">
    <div class="firstlyr bg-[#f2f5ff] w-full">
      <div className="relative w-full">
        <div
          className="h-[970px] w-full top-[2164px] [background:linear-gradient(180deg,rgb(198,238,253)_0%,rgba(230,111,175,0.41)_100%)] absolute left-0"
        />
        <img
          className=" "
          alt="Union"
          src="../assets/DesignArts/svg/union.svg"
        />
        <img
          className="absolute w-full max-h-[3466px] xl:top-[404px] 2xl:top-[-983px] left-[0px]"
          alt="Union"
          src="https://c.animaapp.com/twwqjW46/img/union.svg"
        />
        <img
          className="max-h-[1024px] w-full top-0  object-cover absolute left-0"
          alt="Rectangle"
          src="../assets/photos/Home.jpg"
        />
        <div
          className="absolute  top-[53px] md:right-20  lg:right-20  xl:right-20 2xl:right-20 [text-shadow:7px_7px_6px_#00000059] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px] "
        >
          SALLY SWEETS
        </div>
        <p
          className="absolute md:right-[110px]  lg:right-[110px]  xl:right-[110px] 2xl:right-[110px] top-[130px]  text-[52px]  [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right tracking-[0] leading-[normal]"
        >
          Welcome To Candy Shop
        </p>
        <p
          className="absolute w-[305px]   md:right-[110px]  lg:right-[110px]  xl:right-[110px] 2xl:right-[110px] z-10 text-[19px] top-[250px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right "
        >
          {{ jsonData.home.home_banner }}
        </p>
        <img
          className="absolute w-full max-h-[3466px] h-[366px] top-[1274px] left-0"
          alt="Vector"
          src="../assets/DesignArts/svg/vector1.svg"
        />
        <img
          className="vector2 w-full absolute  max-h-[1676px] lg:top-[419px] md:top-[291px] "
          alt="Vector"
          src="../assets/DesignArts/svg/vector2.svg"
        />
        <p
          className="w-[585px] top-[874px]   md:left-40  lg:left-40  xl:left-40 2xl:left-40 text-[#69696b] text-[17px] absolute [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
        >
          {{ jsonData.home.our_story }}
        </p>
        <p
          className="w-[585px] top-[989px]   md:left-40  lg:left-40  xl:left-40 2xl:left-40 text-[#696a6b] text-[15px] absolute [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
        >
          {{ jsonData.home.our_story_2 }}
        </p>
        <div
          className="absolute top-[654px]  md:left-40  lg:left-40  xl:left-40 2xl:left-40 [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white  md:text-[60px] lg:text-[70px] "
        >
          OUR&nbsp;&nbsp;STORY
        </div>
        <div
          className="absolute top-[782px]   md:left-40  lg:left-40  xl:left-40 2xl:left-40 [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right  md:text-[20px] lg:text-[60px]"
        >
          Established in 1967
        </div>
        <div
          className="absolute top-[1595px]  md:left-[35%]  lg:left-[35%]   xl:left-[35%] 2xl: [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px] "
        >
          SERVICES
        </div>
        <div
          className="absolute top-[1670px]  md:left-[35%]  lg:left-[35%]   xl:left-[38%] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[45px] text-right tracking-[0] leading-[normal]"
        >
          What We Offer
        </div>

        <img
          className="absolute max-h-[500px] max-w-full top-[675px] right-32 "
          alt="Candy shop"
          src="../assets/photos/candy shop.png"
        />

        <div
          className="absolute w-full top-[2388px] flex flex-wrap justify-center "
        >
          <div
            className=" [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px]  "
          >
            COME VISIT US!
          </div>
        </div>
        <div
          className="absolute w-full top-[2463px] flex flex-wrap justify-center "
        >
          <div
            className="[font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[45px] text-right tracking-[0] leading-[normal]"
          >
            Taste The Delicious
          </div>
        </div>
        <div
          className="absolute w-full top-[2554px] flex flex-wrap justify-center "
        >
          <div
            className=" max-w-[960px] [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[22px] text-center"
          >
            {{ jsonData.home.visitus }}
          </div>
        </div>
        <div
          className="w-full absolute top-[2709px] flex flex-wrap gap-28 justify-center"
        >
          <div
            className=" [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[25px] text-center tracking-[0] leading-[normal]"
          >
            {{ jsonData.home.Telephone }}
            <br />
            {{ jsonData.home.email }}
          </div>
          <div
            className="[font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[25px] text-center tracking-[0] leading-[normal]"
          >
            {{ jsonData.home.openhours }}
            <br />
            {{ jsonData.home.closeon }}
          </div>
          <div
            className=" w-[191px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[25px] text-center tracking-[0] leading-[normal]"
          >
            {{ jsonData.home.address }}
          </div>
        </div>
        <div
          className="w-full absolute top-[2864px] flex flex-wrap  justify-center"
        >
          <button
            @click="handleShopButtonClick"
            className=" w-56 h-9  bg-gradient-to-b from-pink-500 to-rose-500 rounded-2xl shadoww-[290px] "
          >
            <h1
              className="text-white  text-lg [font-family:'Boodle-Black-Regular',Helvetica]"
            >
              BROWSE THE SHOP
            </h1>
          </button>
        </div>

        <div class="lg:mx-[100px] container mx-auto">
          <div
            class="absolute top-[1756px] flex flex-wrap justify-center mt-10"
          >
            <div class="p-4 max-w-sm">
              <div
                alt="Vector"
                src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
                class="flex rounded-lg h-full dark:bg-gray-800 bg-transperent p-8 flex-col"
              >
                <img
                  class="w-full absolute max-h-[911px]"
                  alt="Vector"
                  src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
                />
                <div class="absolute top-20 flex flex-col items-center mb-3">
                  <img
                    class="sm:w-[200px] md:w-[120px] h-auto"
                    alt="Candy"
                    src="../assets/photos/candy shop8.png"
                  />
                  <button
                    @click="handleShopButtonClick"
                    class="[font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[20px] text-center border-0 hover:text-[#f4346c]"
                  >
                    Sweet Shop
                  </button>
                  <p
                    class="w-full md:w-[247px] text-[#69696b] text-[15px] text-center [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
                  >
                    {{ jsonData.home.sweetshop }}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 max-w-sm">
              <div
                alt="Vector"
                src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
                class="flex rounded-lg h-full dark:bg-gray-800 bg-transperent p-8 flex-col"
              >
                <img
                  class="w-full md:w-[340px] h-auto lg:h-[250px] md:h-[221px]"
                  alt="Vector"
                  src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
                />
                <div class="absolute top-20 flex flex-col items-center mb-3">
                  <img
                    className="sm:w-[200px] md:w-[85px] h-auto"
                    alt="Candy"
                    src="../assets/photos/candy1.png"
                  />
                  <button
                    @click="handlefunctionButtonClick"
                    className="border-0 [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[20px] text-right hover:text-[#f4346c] leading-[normal]"
                  >
                    Birthday Parties
                  </button>
                  <p
                    class="w-full md:w-[247px] text-[#69696b] text-[15px] text-center [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
                  >
                    {{ jsonData.home.birthday }}
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4 max-w-sm">
              <div
                alt="Vector"
                src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
                class="flex rounded-lg h-full dark:bg-gray-800 bg-transperent p-8 flex-col"
              >
                <img
                  class="w-full md:w-[340px] h-auto lg:h-[250px] md:h-[221px]"
                  alt="Vector"
                  src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
                />
                <div class="absolute top-20 flex flex-col items-center mb-3">
                  <img
                    className="sm:w-[200px] md:w-[85px] h-auto"
                    alt="Candy"
                    src="../assets/photos/candy2.png"
                  />
                  <button
                    button
                    @click="handlefunctionButtonClick"
                    className="border-0 left-[1018px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[20px] text-right hover:text-[#f4346c] leading-[normal]"
                  >
                    Private Functions
                  </button>
                  <p
                    class="w-full md:w-[247px] text-[#69696b] text-[15px] text-center [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
                  >
                    {{ jsonData.home.functions }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!--  <img
            className="absolute w-[109px] h-[122px] top-[1801px] left-[639px] object-cover"
            alt="Candy"
            src="../assets/photos/candy1.png"
          /> -->
        <!--  <img
            className="absolute w-[113px] h-[144px] top-[1790px] left-[1018px] object-cover"
            alt="Candy"
            src="../assets/photos/candy2.png"
          /> -->
        <!--  <img
            className="absolute w-[37px] h-[47px] top-[2792px] left-[1072px]"
            alt="Vector"
            src="https://c.animaapp.com/PPRW07mB/img/vector-8.svg"
          /> -->
        <!--   <img
          className="absolute w-[49px] h-[39px] top-[2834px] left-[296px]"
          alt="Vector"
          src="https://c.animaapp.com/PPRW07mB/img/vector-11.svg"
        />
        <img
          className="absolute w-[25px] h-[33px] top-[2431px] left-[222px]"
          alt="Vector"
          src="https://c.animaapp.com/PPRW07mB/img/vector-9.svg"
        /> -->
        <!-- <img
            className="absolute w-[27px] h-[25px] top-[2335px] left-[1119px]"
            alt="Vector"
            src="https://c.animaapp.com/PPRW07mB/img/vector-10.svg"
          /> -->
        <!--   <img
          className="absolute w-[27px] h-[25px] top-[2512px] left-[924px]"
          alt="Vector"
          src="https://c.animaapp.com/PPRW07mB/img/vector-12.svg"
        />
        <img
          className="absolute w-[25px] h-[27px] top-[2669px] left-[516px]"
          alt="Vector"
          src="https://c.animaapp.com/PPRW07mB/img/vector-13.svg"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "vue-router";
import jsonData from "../../data/home.json";

export default {
  name: "Home",
  setup() {
    const isLoggedIn = ref(false);
    let auth;
    let username;
    const router = useRouter();

    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);

          isLoggedIn.value = true;
        } else {
          isLoggedIn.value = false;
        }
      });
    });

    return {
      isLoggedIn,
      username,
      jsonData,
      handleShopButtonClick() {
        router.push("/products");
      },
      handlefunctionButtonClick() {
        router.push("/functions");
      },
    };
  },
};
</script>
