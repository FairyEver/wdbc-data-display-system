<template>
  <div class="container flex-group col abs-full">
    <div class="flex-item flex-group col center screen-header" style="height: 80px;">
      <p class="title">智慧蛋鸡大数据平台 生产规模</p>
    </div>
    <!-- row -->
    <div class="flex-item flex-group row" style="height: 180px; padding: 5px; margin-top: -10px;">
      <div class="flex-item grow flex-group row">
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">年产蛋规模</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">纯系</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">祖代</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">父母代</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
      </div>
      <div class="flex-item grow flex-group row">
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">年孵化能力</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">孵化基地</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">孵化厅</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
        <div class="flex-item grow flex-group col hov" style="margin: 5px;">
          <div class="flex-item cell-title">单厅孵化能力</div>
          <div class="flex-item grow">394</div>
          <div class="flex-item cell-unit">万套</div>
        </div>
      </div>
    </div>
    <!-- row -->
    <div class="flex-item grow flex-group row" style="padding: 5px; margin-top: -10px;">
      <!-- 左 -->
      <div class="flex-item flex-group col" style="width: 500px;">
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <div class="flex-item grow hov" style="margin: 5px;"></div>
      </div>
      <!-- 中 -->
      <div class="flex-item grow flex-group col">
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <div class="flex-item flex-group row" style="height: 240px;">
          <div class="flex-item grow hov" style="margin: 5px;">1</div>
          <div class="flex-item grow hov" style="margin: 5px;">2</div>
          <div class="flex-item grow hov" style="margin: 5px;">3</div>
        </div>
      </div>
      <!-- 右 -->
      <div class="flex-item flex-group col" style="width: 500px;">
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <div class="flex-item grow hov" style="margin: 5px;"></div>
        <div class="flex-item grow hov" style="margin: 5px;"></div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin from '../mixin'
// import _get from 'lodash.get'
export default {
  mixins: [
    mixin
  ]
}
</script>

<style lang="scss">
.cell-title {
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 30px;
  color: '#FFF';
  font-weight: bold;
}
.cell-unit {
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 16px;
  color: '#FFF';
}
</style>

