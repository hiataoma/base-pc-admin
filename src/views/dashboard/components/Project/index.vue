<template>
  <div class="component-container">
    <el-card class="project-card">
      <template #header>
        <span class="fw-b">正常项目</span>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts">
export default {
  name: 'index',
};
</script>

<style lang="scss" scoped>
.component-container {
  .project-card {
    font-size: 14px;

    &__main {
      line-height: 28px;
      height: 320px;
      overflow-y: auto;
      overflow-x: hidden;
    }
  }

  .fw-b {
    font-weight: bold;
  }
}
</style>
