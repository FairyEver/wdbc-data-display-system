<template>
  <div class="container flex-group col">
    <div class="flex-item flex-group col center screen-header" style="height: 100px;">
      <p class="title">页面标题</p>
      <p class="sub-title">页面小标题</p>
    </div>
    <div class="flex-item flex-group row" style="height: 120px;">
      <div class="flex-item grow hov">1</div>
      <div class="flex-item grow hov">1</div>
      <div class="flex-item grow hov">1</div>
      <div class="flex-item grow hov">1</div>
    </div>
    <div class="flex-item grow flex-group row">
      <!-- L -->
      <div class="flex-item grow flex-group col">
        <div class="flex-item grow hov">
          <ChartLineDemo></ChartLineDemo>
        </div>
        <div class="flex-item grow hov">
          <ChartLineDemo></ChartLineDemo>
        </div>
      </div>
      <!-- R -->
      <div class="flex-item grow flex-group col">
        <div class="flex-item grow hov">
          <ChartLineDemo></ChartLineDemo>
        </div>
        <div class="flex-item grow hov">
          <ChartLineDemo></ChartLineDemo>
        </div>
      </div>
    </div>
  </div>
</template>
