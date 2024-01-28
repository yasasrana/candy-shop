<template>
  <div className="bg-[#f2f5ff] flex flex-row w-full">
      <div className="bg-[#f2f5ff] overflow-hidden w-[1440px] h-[2768px]">
        <div className="relative w-[2036px] h-[3256px] left-[-564px]">
          <div className="absolute w-[1440px] h-[1349px] top-[1907px] left-[564px] [background:linear-gradient(180deg,rgb(198,238,253)_0%,rgba(230,111,175,0.41)_100%)]" />
          <img
            className="absolute w-[1440px] h-[1948px] top-[301px] left-[564px]"
            alt="Union"
            src="https://c.animaapp.com/twwqjW46/img/union.svg"
          />
          <img
            className="h-[327px] top-[590px] left-[564px] absolute w-[1440px]"
            alt="Vector"
            src="../assets/DesignArts/svg/vector4.svg"
          />
          <img
          className="absolute w-[1440px] h-[581px] top-0 left-[564px]"
          alt="Rectangle"
          src="https://c.animaapp.com/twwqjW46/img/rectangle-31.png"
          />
          <div className="absolute top-[110px] left-[1424px] [text-shadow:7px_7px_6px_#00000059] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-white text-[96px] tracking-[0] leading-[normal]">
            PRODUCTS
          </div>
          <div className="top-[176px] left-[1428px] text-[45px] text-right absolute [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] tracking-[0] leading-[normal]">
            Our Speciality Sweets
          </div>
          <div class="absolute top-[1100px] right-[300px] grid grid-cols-3 gap-7">
            <div v-for="(item, index) in paginatedItems" :key="item.id">
              <div className=" max-w-[320px]  h-[320px] bg-[#d9d9d9] rounded-[20px] shadow-[0px_4px_4px_#00000040]" />
              <button @click="handleProductButtonClick(item)" className="w-[295px]  text-[24px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  leading-[normal]">
                {{ item.title }}
              </button>
                <div className="w-[295px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#f4346c] text-[24px] tracking-[0] leading-[normal]">
                  Rs.{{ item.price }}
                </div>
            </div>
          </div>
            <img
            className="h-[366px] top-[618px] left-[564px] absolute w-[1440px]"
            alt="Vector"
            src="../assets/DesignArts/svg/vector5.svg"
          />
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
          


<nav className="absolute top-[2005px] left-[1594px] [font-family:'Boodle-Black-Regular',Helvetica]" aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-base h-10">
    <li>
      <button class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-primary bg-white border border-e-0 border-secondary-300 rounded-s-lg hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="goToPage(1)" :disabled="currentPage === 1">First</button>
    </li>
    <li>
      <button class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="prevPage" :disabled="currentPage === 1">Prev</button>
    </li>
    <li>
      <span class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Page {{ currentPage }} of {{ totalPages }}</span>
    </li>
    <li>
      <button class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </li>
    <li>
    <button class="flex items-center justify-center px-4 h-10 leading-tight text-primary bg-white border border-secondary-300 rounded-e-lg hover:bg-secondary-100 hover:text-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="goToPage(totalPages)" :disabled="currentPage === totalPages">Last</button>
    </li>
    
  </ul>
</nav>

            <!--   <div className="absolute top-[1905px] left-[1794px]">
          <button class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="goToPage(1)" :disabled="currentPage === 1">First</button>
          <button class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="prevPage" :disabled="currentPage === 1">Prev</button>

          <span>Page {{ currentPage }} of {{ totalPages }}</span>

          <button class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="nextPage" :disabled="currentPage === totalPages">Next</button>
          <button class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="goToPage(totalPages)" :disabled="currentPage === totalPages">Last</button>
        </div> -->
          <div className="absolute w-[2036px] h-[535px] top-[353px] left-0">
            <div className="relative w-[1440px] h-[276px] left-[564px] bg-[url(https://c.animaapp.com/twwqjW46/img/vector-3.svg)] bg-[100%_100%]">
              <img
                className="h-[268px] top-[8px] left-0 absolute w-[1440px]"
                alt="Vector"
                src="https://c.animaapp.com/twwqjW46/img/vector-2.svg"
              />
              <img
                className="h-[196px] top-[80px] left-0 absolute w-[1440px]"
                alt="Vector"
                src="https://c.animaapp.com/twwqjW46/img/vector-1.svg"
              />
            </div>
          </div>
          <p className="absolute w-[305px] top-[263px] left-[1526px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[12px] text-right tracking-[0] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id mauris vel ligula vulputate cursus. Sed
            nec felis nec orci vestibulum auctor. Fusce euismod est vel ipsum laoreet, non aliquam libero suscipit.
          </p>
          <div className="absolute top-[519px] left-[1162px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[45px] text-right tracking-[0] leading-[normal]">
            Categories
          </div>
          <img
            className="absolute w-[156px] h-[156px] top-[600px] left-[1308px] object-cover"
            alt="Rectangle"
            src="https://c.animaapp.com/twwqjW46/img/rectangle-20@2x.png"
          />
          <img
            className="absolute w-[156px] h-[156px] top-[600px] left-[1506px]"
            alt="Rectangle"
            src="https://c.animaapp.com/twwqjW46/img/rectangle-21@2x.png"
          />
          <img
            className="absolute w-[156px] h-[156px] top-[608px] left-[1110px]"
            alt="Rectangle"
            src="https://c.animaapp.com/twwqjW46/img/rectangle-18@2x.png"
          />
          <img
            className="absolute w-[145px] h-[116px] top-[628px] left-[912px] object-cover"
            alt="Candy"
            src="https://c.animaapp.com/twwqjW46/img/candy-shop7-1@2x.png"
          />
          <div class="absolute  top-[768px] left-[912px] grid grid-cols-4 gap-16">
            <div v-for="(item, index) in categories" :key="item.id">
              <button @click="handlecategoryButtonClick(item)"  className=" hover:text-[#f4346c] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                {{ item.title }}
              </button>  
            </div>
          </div>
         <!--  <div className="absolute w-[144px] top-[768px] left-[1110px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Candy
          </div>
          <div className="absolute w-[144px] top-[768px] left-[1314px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Jelly Beans
          </div>
          <div className="absolute w-[144px] top-[768px] left-[1512px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[24px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Licorice
          </div> -->
        </div>
      </div>
    </div>
</template>


<script>
import axios from 'axios';


export default {
  name: 'Products',
  components:{
   
  },
  data() {
    return {
      Allproducts: [],
      products: [],
      categories:[],
      currentPage: 1,
      itemsPerPage: 6 ,
   
    };
  },
  async mounted(){
    try {
      const response = await axios.get('http://localhost:3000/categories/');
      this.categories = response.data
    } catch (error) {
      console.log(error);
    }

    try {
      const response = await  axios.get('http://localhost:3000/products/');
      this.products = response.data
      this.Allproducts = response.data
    } catch (error) {
      console.log(error);
    }
    
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.products.slice(start, end);
    }
  },
  methods: {
    handleProductButtonClick(item) {
      const productId = item.id; 
      this.$router.push({ name: 'product-details', params: { productId}});
    },
    handlecategoryButtonClick(categ) {
      console.log('yes')
      const products = this.Allproducts; 
      const newproducts=products.filter(ite=> ite.category_id===categ.id)
      this.products=newproducts;
      console.log(this.products)
    },
    nextPage() {
      
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
      setTimeout(() => {
       
      }, 2000);
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  
  }
};
</script>