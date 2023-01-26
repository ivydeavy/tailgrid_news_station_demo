<template>
    <!-- ====== Cards Section Start -->
<section class="bg-[#F3F4F6] lg:pt-[40px] lg:pb-10" >
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            :src="data_1.urlToImage"
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
              :href="data_1.url"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {{ data_1.title }}
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              {{ data_1.description }}
            </p>
            <a
              :href="data_1.url"
              class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            :src="data_2.urlToImage"
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
              :href="data_2.url"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {{ data_2.title }}
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              {{ data_2.description }}
            </p>
            <a
              :href="data_2.url"
              class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
      <div class="w-full px-4 md:w-1/2 xl:w-1/3">
        <div class="mb-10 overflow-hidden rounded-lg bg-white">
          <img
            :src="data_3.urlToImage"
            alt="image"
            class="w-full"
          />
          <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <h3>
              <a
              :href="data_3.url"
                class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
              >
                {{ data_3.title }}
              </a>
            </h3>
            <p class="text-body-color mb-7 text-base leading-relaxed">
              {{ data_3.description }}
            </p>
            <a
              :href="data_3.url"
              class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ====== Cards Section End -->

</template>

<script>
export default{
  props:['NewsData'],
  computed:{
    data_1(){
      return this.NewsData[0]
    },          
    data_2(){
      return this.NewsData[1]
    },
    data_3(){
      return this.NewsData[2]
    }
  }
}
</script>
