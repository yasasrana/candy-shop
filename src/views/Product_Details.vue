<template>
  <div className="bg-[#f2f5ff] flex flex-row justify-center w-full">
      <div className="bg-[#f2f5ff] w-[1440px] h-[895px]">
        <div className="relative h-[663px] top-[90px]">
          <img
            className="absolute w-[1440px] h-[317px] top-[67px] left-0"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector.svg"
          />
          <img
            className="absolute w-[1440px] h-[272px] top-[339px] left-0"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector-1.svg"
          />
          <img
            className="absolute w-[1440px] h-[662px] top-0 left-0"
            alt="Union"
            src="https://c.animaapp.com/CY8cwYGc/img/union.svg"
          />
          <div className="left-[296px] absolute w-[127px] h-[122px] top-[541px] rounded-[20px] border border-solid border-black" />
          <div className="left-[442px] absolute w-[127px] h-[122px] top-[541px] rounded-[20px] border border-solid border-black" />
          <img
            className="absolute w-[375px] h-[476px] top-[22px] left-[213px] object-cover"
            alt="Element s"
            src="https://c.animaapp.com/CY8cwYGc/img/2201-i518-025-s-m005-c12-1@2x.png"
          />
          <p className="absolute top-[205px] left-[735px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a] text-[45px] text-right tracking-[0] leading-[normal]">
            {{product.title}}
          </p>
          <p className="absolute w-[540px] top-[283px] left-[741px] [font-family:'Actor',Helvetica] font-normal text-[#001f3eb0] text-[20px] tracking-[0] leading-[normal]">
            {{product.description}}
          </p>
          <div className="absolute w-[295px] top-[423px] left-[735px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#f4346c] text-[48px] tracking-[0] leading-[normal] whitespace-nowrap">
            Rs.{{product.price}}
          </div>
          <img
            className="absolute w-[40px] h-[50px] top-[495px] left-[1335px]"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector-4.svg"
          />
          <img
            className="absolute w-[45px] h-[46px] top-[568px] left-[626px]"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector-5.svg"
          />
          <img
            className="absolute w-[59px] h-[60px] top-[466px] left-[919px]"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector-6.svg"
          />
          <img
            className="absolute w-[59px] h-[60px] top-[71px] left-[1318px]"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector-7.svg"
          />
          <img
            className="absolute w-[38px] h-[48px] top-[153px] left-[132px]"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector-8.svg"
          />
          <img
            className="absolute w-[29px] h-[36px] top-[487px] left-[169px]"
            alt="Vector"
            src="https://c.animaapp.com/CY8cwYGc/img/vector-9.svg"
          />
          <img
            className="absolute w-[182px] h-[75px] top-[484px] left-[725px]"
            alt="Group"
            src="https://c.animaapp.com/CY8cwYGc/img/group-5@2x.png"
          />
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Product_Details',
  data() {
    return {
      product: {},
    };
  },
  props: ['productId'],
  async mounted() {
    try {
      const response = await axios.get(`http://localhost:3000/products/${this.productId}`);
      this.product = response.data;
     // console.error(response.data);
    } catch (error) {
      console.error(error);
    }
  },
  
  
}
</script>
