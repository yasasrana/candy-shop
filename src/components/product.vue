<template>
	<div>
		<img
			:src="item.image"
			className=" max-w-[320px] sm:w-[100px]  sm:h-[100px] md:w-[180px]  md:h-[180px] lg:w-[200px]  lg:h-[200px] h-[320px] bg-[#d9d9d9] rounded-[20px] shadow-[0px_4px_4px_#00000040]"
		/>
		<button
			@click="pclick"
			className="max-w-[295px]  sm:w-[100px] md:w-[150px] lg:w-[220px]  sm:text-[12px] text-[24px] [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#0a2d6a]  leading-[normal]"
		>
			{{ item.title }}
		</button>
		<div
			className="max-w-[295px]  sm:w-[100px]  lg:w-[220px] lg:text-[20px]  sm:text-[12px]  [font-family:'Boodle-Black-Regular',Helvetica] font-normal text-[#f4346c] text-[24px] tracking-[0] leading-[normal]"
		>
			Rs.{{ item.price }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'Product',

	props: ['item', 'productclick'],
	methods: {
		pclick() {
			this.productclick(item)
		}
	}
}
</script>
