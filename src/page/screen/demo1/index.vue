<template>
  <div class="container flex-group col">
    <div class="flex-item flex-group col center screen-header" style="height: 100px;">
      <p class="title">页面标题</p>
      <p class="sub-title">页面小标题</p>
    </div>
    <div class="flex-item grow flex-group row" style="padding: 5px;">
      <!-- L -->
      <div class="flex-item grow flex-group col">
        <div class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
        <div class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
      </div>
      <!-- R -->
      <div class="flex-item grow flex-group col">
        <div class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
        <div class="flex-item grow hov" style="margin: 5px;">
          <ChartLineDemo></ChartLineDemo>
        </div>
      </div>
    </div>
  </div>
</template>
