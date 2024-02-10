<template>
	<div className="w-full">
		<div className=" relative w-full">
			<div
				className="absolute w-full h-[1349px] top-[1907px] sm:top-[499px] md:top-[1082px] lg:top-[1221px]  [background:linear-gradient(180deg,rgb(198,238,253)_0%,rgba(230,111,175,0.41)_100%)]"
			/>
			<img
				className="absolute w-full max-h-[3464px] top-[301px] lg:top-[213px] 2xl:top-[-793px] "
				alt="Union"
				src="https://c.animaapp.com/twwqjW46/img/union.svg"
			/>
			<img
				className="absolute w-full h-[327px] top-[590px]  sm:top-[170px] md:top-[267px] lg:top-[406px]"
				alt="Vector"
				src="../assets/DesignArts/svg/vector4.svg"
			/>
			<img
				className="absolute w-full h-auto sm:object-cover sm:h-[250px] "
				alt="Rectangle"
				src="https://c.animaapp.com/twwqjW46/img/rectangle-31.png"
			/>
			<div
				className="absolute  top-[53px] sm:right-10   md:right-10 lg:right-20  xl:right-20 2xl:right-20  md:text-[70px] sm:text-[50px]  [text-shadow:7px_7px_6px_#00000059] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px]"
			>
				PRODUCTS
			</div>
			<div
				className="absolute sm:right-10   md:right-10  lg:right-[110px]  xl:right-[110px] 2xl:right-[110px] sm:top-[95px] md:top-[105px] top-[130px] sm:text-[25px]  md:text-[40px] text-[52px]  [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right tracking-[0] leading-[normal]"
			>
				Our Speciality Sweets
			</div>
			<div
				className="absolute w-[305px] sm:w-[270px]   sm:right-10   md:right-10  lg:right-[85px]  xl:right-[110px] 2xl:right-[110px] z-10  sm:text-[10px]  md:text-[13px] lg:text-[15px] text-[19px] sm:top-[150px] md:top-[190px] top-[250px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  text-right"
			>
				{{ jsonData.products.products_banner }}
			</div>
			<div class="w-full absolute flex flex-wrap justify-center">
				<div
					class="absolute top-[1100px] sm:top-[397px] md:top-[529px] lg:top-[706px] grid grid-cols-3 gap-7"
				>
					<div v-for="(item, index) in paginatedItems" :key="item.id">
						<Product :item="item" :productclick="handlecategoryButtonClick" />
					</div>
				</div>
			</div>

			<!--  <div className="absolute w-[76px] top-[1906px] left-[1729px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[24px] tracking-[0] leading-[normal]">
            1....10
          </div>
         
          <button
          >
            <img
              className="absolute w-[33px] h-[33px] top-[1905px] left-[1794px]"
              alt="Forward"
              src="../assets/DesignArts/svg/Forward.png"
            />
          </button> -->

			<nav
				className="absolute top-[2005px]  sm:top-[762px]   md:top-[1222px] lg:top-[1370px] sm:right-8 right-20 [font-family:'Boodle-Black-Regular',Helvetica]"
				aria-label="Page navigation example"
			>
				<ul class="inline-flex -space-x-px text-base h-10 sm:text-[10px]">
					<li>
						<button
							class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-primary bg-white border border-e-0 border-secondary-300 rounded-s-lg hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							@click="goToPage(1)"
							:disabled="currentPage === 1"
						>
							First
						</button>
					</li>
					<li>
						<button
							class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							@click="prevPage"
							:disabled="currentPage === 1"
						>
							Prev
						</button>
					</li>
					<li>
						<span
							class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							>Page {{ currentPage }} of {{ totalPages }}</span
						>
					</li>
					<li>
						<button
							class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							@click="nextPage"
							:disabled="currentPage === totalPages"
						>
							Next
						</button>
					</li>
					<li>
						<button
							class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 rounded-e-lg hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							@click="goToPage(totalPages)"
							:disabled="currentPage === totalPages"
						>
							Last
						</button>
					</li>
				</ul>
			</nav>
			<div
				className="absolute w-full top-[353px] sm:top-[179px]  md:top-[159px]  lg:top-[241px]"
			>
				<div
					className="relative w-full   max-h-[1676px]  bg-[url(https://c.animaapp.com/twwqjW46/img/vector-3.svg)] bg-[100%_100%]"
				>
					<img
						className="w-full max-h-[1676px] top-[8px]  absolute "
						alt="Vector"
						src="https://c.animaapp.com/twwqjW46/img/vector-2.svg"
					/>
					<img
						className="w-full max-h-[1676px]   sm:top-[32px] top-[80px]  absolute"
						alt="Vector"
						src="https://c.animaapp.com/twwqjW46/img/vector-1.svg"
					/>
					<img
						className="w-full max-h-[1676px] top-[365px] sm:top-[85px] md:top-[154px]  lg:top-[190px] xl:top-[235px] absolute"
						alt="Vector"
						src="../assets/DesignArts/svg/vector5.svg"
					/>
				</div>
			</div>
			<div
				class="absolute top-[519px] sm:top-[215px] md:top-[246px] lg:top-[339px] w-full flex flex-col"
			>
				<div class="absolute w-full flex flex-wrap justify-center">
					<div
						className=" [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  sm:text-[20px] md:text-[35px] text-[45px] "
					>
						Categories
					</div>
				</div>
				<div
					class="absolute top-20 sm:top-10 w-full flex flex-wrap justify-center gap-10"
				>
					<img
						className=" w-[145px] h-[116px] sm:w-[70px] sm:h-[60px]   md:w-[115px] md:h-[90px]  object-cover"
						alt="Candy"
						src="https://c.animaapp.com/twwqjW46/img/candy-shop7-1@2x.png"
					/>
					<img
						className="w-[156px] h-[156px] sm:w-[65px] sm:h-[65px] md:w-[110px] md:h-[110px]  object-cover"
						alt="Rectangle"
						src="https://c.animaapp.com/twwqjW46/img/rectangle-20@2x.png"
					/>
					<img
						className=" w-[156px] h-[156px] sm:w-[60px] sm:h-[60px] md:w-[110px] md:h-[110px] object-cover"
						alt="Rectangle"
						src="https://c.animaapp.com/twwqjW46/img/rectangle-21@2x.png"
					/>
				</div>
				<div
					class="absolute top-64 sm:top-24 md:top-48 w-full flex flex-wrap justify-center gap-20 sm:gap-12"
				>
					<div v-for="(item, index) in categories" :key="item.id">
						<button
							@click="handlecategoryButtonClick(item)"
							className=" hover:text-[#f4346c] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] sm:text-[12px] text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap"
						>
							{{ item.title }}
						</button>
					</div>
				</div>
			</div>
		</div>
		    
	</div>
	<!-- <Loading1 :isLoading="true" /> -->
</template>

<script>
import axios from 'axios'
import jsonData from '../../data/home.json'
import Product from '../components/product.vue'
import Loading1 from '../components/Loading.vue'
export default {
	name: 'Products',
	components: {Product, Loading1},
	data() {
		return {
			Allproducts: [],
			products: [],
			categories: [],
			currentPage: 1,
			itemsPerPage: 6,
			jsonData
		}
	},
	async mounted() {
		try {
			const response = await axios.get('http://localhost:3000/categories/')
			this.categories = response.data
		} catch (error) {
			console.log(error)
		}

		try {
			const response = await axios.get('http://localhost:3000/products/')
			this.products = response.data
			this.Allproducts = response.data
		} catch (error) {
			console.log(error)
		}
	},
	computed: {
		totalPages() {
			return Math.ceil(this.products.length / this.itemsPerPage)
		},
		paginatedItems() {
			const start = (this.currentPage - 1) * this.itemsPerPage
			const end = start + this.itemsPerPage
			console.log(this.products[0])
			return this.products.slice(start, end)
		}
	},
	methods: {
		handleProductButtonClick(item) {
			const productId = item.id
			this.$router.push({name: 'product-details', params: {productId}})
		},
		handlecategoryButtonClick(categ) {
			console.log('yes')
			const products = this.Allproducts
			const newproducts = products.filter(ite => ite.category_id === categ.id)
			this.products = newproducts
			console.log(this.products)
		},
		nextPage() {
			if (this.currentPage < this.totalPages) {
				this.currentPage++
			}
			setTimeout(() => {}, 2000)
		},
		prevPage() {
			if (this.currentPage > 1) {
				this.currentPage--
			}
		},
		goToPage(page) {
			if (page > 0 && page <= this.totalPages) {
				this.currentPage = page
			}
		},
		getImagePath(image) {
			// Use dynamic import to load the image path asynchronously
			const imagePath = import(`../assets/photos/products/${image}`)
			console.log(imagePath)
			return imagePath.default // Assuming the image path is the default export
		}
	}
}
</script>
