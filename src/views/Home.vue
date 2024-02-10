<template>
	<div class="home">
		<div class="firstlyr bg-[#f2f5ff] w-full">
			<div className="relative w-full">
				<div
					className="h-[970px] w-full top-[2164px] sm:top-[1681px] md:top-[1511px] [background:linear-gradient(180deg,rgb(198,238,253)_0%,rgba(230,111,175,0.41)_100%)] absolute left-0"
				/>
				<img
					className=" "
					alt="Union"
					src="../assets/DesignArts/svg/union.svg"
				/>
				<img
					className="absolute sm:object-cover w-full max-h-[5000px]  sm:h-[1554px] lg:top-[1033px] xl:top-[404px] 2xl:top-[-983px] left-[0px]"
					alt="Union"
					src="https://c.animaapp.com/twwqjW46/img/union.svg"
				/>
				<img
					className="max-h-[1024px] w-full top-0  object-cover absolute left-0"
					alt="Rectangle"
					src="../assets/photos/Home.jpg"
				/>
				<div
					className="absolute  top-[53px] sm:right-10   md:right-10 lg:right-20  xl:right-20 2xl:right-20  md:text-[70px] sm:text-[50px]  [text-shadow:7px_7px_6px_#00000059] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px] "
				>
					SALLY SWEETS
				</div>
				<p
					className="absolute sm:right-10   md:right-10  lg:right-[110px]  xl:right-[110px] 2xl:right-[110px] sm:top-[95px] md:top-[105px] top-[130px] sm:text-[25px]  md:text-[40px] text-[52px]  [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right tracking-[0] leading-[normal]"
				>
					Welcome To Candy Shop
				</p>
				<p
					className="absolute w-[305px] sm:w-[270px]   sm:right-10   md:right-10  lg:right-[85px]  xl:right-[110px] 2xl:right-[110px] z-10  sm:text-[10px]  md:text-[13px] lg:text-[15px] text-[19px] sm:top-[150px] md:top-[190px] top-[250px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right "
				>
					{{ jsonData.home.home_banner }}
				</p>
				<img
					className="absolute w-full max-h-[3466px]  top-[1274px] sm:top-[600px] md:top-[825px] left-0.5"
					alt="Vector"
					src="../assets/DesignArts/svg/vector1.svg"
				/>
				<img
					className="vector2 w-full absolute  max-h-[1676px] sm:top-[223px] lg:top-[419px] md:top-[291px] xl:top-[419px] 2xl:top-[419px] "
					alt="Vector"
					src="../assets/DesignArts/svg/vector2.svg"
				/>
				<p
					className="w-[585px] sm:top-[390px]   md:top-[550px] top-[874px] sm:left-5  md:left-10  lg:left-20  xl:left-40 2xl:left-40   md:text-[13px] sm:text-[10px] md:w-96 sm:w-56 text-[#69696b] text-[17px] absolute [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
				>
					{{ jsonData.home.our_story }}
				</p>
				<p
					className="w-[585px] top-[989px]   md:left-40  lg:left-40  xl:left-40 2xl:left-40 text-[#696a6b] text-[15px] absolute [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
				>
					{{ jsonData.home.our_story_2 }}
				</p>
				<div
					className="absolute md:top-[400px] top-[654px] sm:top-[307px]  sm:left-5  md:left-10  lg:left-20  xl:left-40 2xl:left-40  sm:text-[32px] md:text-[60px] lg:text-[70px] xl:text-[96px] 2xl:text-[96px] [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white   "
				>
					OUR&nbsp;&nbsp;STORY
				</div>
				<div
					className="absolute sm:top-[350px] md:top-[490px] top-[782px]  sm:left-5  md:left-10  lg:left-20  xl:left-40 2xl:left-40  md:text-[23px] lg:text-[45px] xl:text-[45px] 2xl:text-[45px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right  "
				>
					Established in 1967
				</div>
				<div
					class="absolute top-[1595px] sm:top-[689px] md:top-[1000px] w-full flex flex-wrap justify-center"
				>
					<div
						className=" [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px] sm:text-[45px] md:text-[70px] "
					>
						SERVICES
					</div>
					<div
						className="absolute top-20 sm:top-10  md:top-16 [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[45px]  sm:text-[25px] md:text-[30px] text-right tracking-[0] leading-[normal]"
					>
						What We Offer
					</div>
				</div>

				<img
					className="absolute max-h-[500px] sm:h-[220px] md:h-[350px]  max-w-full  sm:top-[380px] md:top-[420px] top-[675px] right-32 sm:right-5 md:right-10 lg:right-20 "
					alt="Candy shop"
					src="../assets/photos/candy shop.png"
				/>

				<div
					className="absolute w-full top-[2388px] sm:top-[1881px]  md:top-[1647px] flex flex-wrap justify-center "
				>
					<div
						className=" [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px]  sm:text-[50px] md:text-[70px]  "
					>
						COME VISIT US!
					</div>

					<div
						className="  absolute top-20 sm:top-10  md:top-14 [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[45px] sm:text-[30px] md:text-[30px] text-center"
					>
						Taste The Delicious
					</div>
				</div>
				<div
					className="absolute w-full top-[2554px] sm:top-[1976px] md:top-[1773px] flex flex-wrap justify-center "
				>
					<div
						className=" max-w-[960px] [text-shadow:7px_7px_10px_#00000026] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white sm:w-[300px] md:w-[600px] lg:w-[800px] text-[22px] md:text-[19px] text-center"
					>
						{{ jsonData.home.visitus }}
					</div>
				</div>
				<div
					className="w-full  absolute top-[2709px] sm:top-[2331px] md:top-[1935px] flex flex-wrap gap-28 sm:gap-10 md:gap-14 justify-center text-[25px] md:text-[19px] "
				>
					<div
						className=" [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-center tracking-[0] leading-[normal]"
					>
						{{ jsonData.home.Telephone }}
						<br />
						{{ jsonData.home.email }}
					</div>
					<div
						className="[font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-center tracking-[0] leading-[normal]"
					>
						{{ jsonData.home.openhours }}
						<br />
						{{ jsonData.home.closeon }}
					</div>
					<div
						className=" w-[191px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-center tracking-[0] leading-[normal]"
					>
						{{ jsonData.home.address }}
					</div>
				</div>
				<div
					className="w-full absolute top-[2864px]  sm:top-[2262px] md:top-[2049px] flex flex-wrap  justify-center"
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

				<div
					class="absolute w-full top-[1756px] sm:top-[728px] md:top-[1068px] flex flex-wrap justify-center mt-10 gap-1"
				>
					<div class="p-4">
						<div class="flex h-full bg-transperent flex-col items-center">
							<img
								class="realtive md:w-[340px] h-auto lg:h-[250px] md:h-[221px]"
								alt="Vector"
								src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
							/>
							<div class="absolute top-10 flex flex-col items-center mb-3">
								<img
									className="sm:w-[150px] md:w-[150px] lg:w-[150px] xl:w-[150px] 2xl:w-[150px] h-auto"
									alt="Candy"
									src="../assets/photos/candy shop8.png"
								/>
								<button
									@click="handleShopButtonClick"
									className="border-0 [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[20px] text-right hover:text-[#f4346c] leading-[normal]"
								>
									Sweet Shop
								</button>
								<p
									class="w-full sm:w-[150px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] text-[#69696b] text-[15px] text-center [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
								>
									{{ jsonData.home.sweetshop }}
								</p>
							</div>
						</div>
					</div>
					<div class="p-4">
						<div class="flex h-full bg-transperent flex-col items-center">
							<img
								class="realtive md:w-[340px] h-auto lg:h-[250px] md:h-[221px]"
								alt="Vector"
								src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
							/>
							<div class="absolute sm:top-96 flex flex-col items-center mb-3">
								<img
									className="sm:w-[85px] md:w-[85px] lg:w-[85px] xl:w-[85px] 2xl:w-[85px]  h-auto"
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
									class="w-full sm:w-[150px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] text-[#69696b] text-[15px] text-center [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
								>
									{{ jsonData.home.birthday }}
								</p>
							</div>
						</div>
					</div>
					<div class="p-4">
						<div class="flex h-full bg-transperent flex-col items-center">
							<div class="relative">
								<img
									class="md:w-[340px] h-auto lg:h-[250px] md:h-[221px]"
									alt="Vector"
									src="https://c.animaapp.com/PPRW07mB/img/vector-1.svg"
								/>
							</div>
							<div
								class="flex absolute bottom-12 xl:bottom-24 flex-col items-center mb-3"
							>
								<img
									className="sm:w-[85px] md:w-[85px] lg:w-[85px] xl:w-[85px] 2xl:w-[85px]  h-auto  "
									alt="Candy"
									src="../assets/photos/candy2.png"
								/>
								<button
									@click="handlefunctionButtonClick"
									className="border-0 [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[20px] text-right hover:text-[#f4346c] leading-[normal]"
								>
									Private Functions
								</button>
								<p
									class="w-full sm:w-[150px] md:w-[200px] lg:w-[200px] xl:w-[200px] 2xl:w-[200px] text-[#69696b] text-[15px] text-center [font-family:'Actor',Helvetica] font-normal tracking-[0] leading-[normal]"
								>
									{{ jsonData.home.functions }}
								</p>
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
import {onMounted, ref} from 'vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import {useRouter} from 'vue-router'
import jsonData from '../../data/home.json'

export default {
	name: 'Home',
	setup() {
		const isLoggedIn = ref(false)
		let auth
		let username
		const router = useRouter()

		onMounted(() => {
			auth = getAuth()
			onAuthStateChanged(auth, user => {
				if (user) {
					console.log(user)

					isLoggedIn.value = true
				} else {
					isLoggedIn.value = false
				}
			})
		})

		return {
			isLoggedIn,
			username,
			jsonData,
			handleShopButtonClick() {
				router.push('/products')
			},
			handlefunctionButtonClick() {
				router.push('/functions')
			}
		}
	}
}
</script>
