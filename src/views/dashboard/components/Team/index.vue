<!-- 团队介绍 -->
<template>
  <div class="component-container">
    <el-card class="team-card">
      <template #header>
        <span class="fw-b">有来开源组织</span>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, reactive, ref, toRefs, watchEffect } from 'vue';
import BScroll from 'better-scroll';

const state = reactive({
  teamActiveName: '1',
  developers: [
    {
      imgUrl: 'https://s2.loli.net/2022/04/06/yRx8uzj4emA5QVr.jpg',
      nickname: '郝先瑞',
      positions: ['后端', '前端', '文档'],
      homepage: 'https://www.cnblogs.com/haoxianrui/'
    },
    {
      imgUrl: 'https://s2.loli.net/2022/04/06/cQihGv9uPsTjXk1.jpg',
      nickname: '张川',
      positions: ['后端', '前端'],
      homepage: 'https://blog.csdn.net/qq_41595149'
    },
    {
      imgUrl: 'https://s2.loli.net/2022/04/07/2IiOYBHnRGKgCSd.jpg',
      nickname: '张加林',
      positions: ['DevOps'],
      homepage: 'https://gitee.com/ximy'
    }
  ],
  colors: ['', 'success', 'warning', 'danger'],
  indicatorImgUrl: new URL(
    `../../../../assets/index/indicator.png`,
    import.meta.url
  ).href
});

const { teamActiveName, developers, colors, indicatorImgUrl } = toRefs(state);

let bScroll = reactive({});

const dev_wrapper = ref<HTMLElement | any>(null);

onMounted(() => {
  bScroll = new BScroll(dev_wrapper.value, {
    mouseWheel: true, //开启鼠标滚轮
    disableMouse: false, //启用鼠标拖动
    scrollX: true //X轴滚动启用
  });
});

watchEffect(() => {
  nextTick(() => {
    bScroll && (bScroll as any).refresh();
  });
});

</script>

<style lang="scss" scoped>
.component-container {
  .team-card {
    font-size: 14px;

    .el-tabs__content {
      .el-tab-pane {
        height: 265px;
      }
    }

    .developer {
      width: 100%;
      overflow: hidden;

      &__container {
        display: inline-flex;
        overflow: hidden;
        justify-content: flex-start;
        padding: 10px;

        .developer__item {
          &:not(:first-child) {
            margin-left: 20px;
          }

          align-items: center;
          list-style: none;
          width: 180px;
          min-width: 180px;

          .developer__inner {
            border: 1px solid #cccccc;
            border-radius: 5px;
            box-shadow: 6px 6px 6px #aaa;
            padding: 8px;
            text-align: center;

            .developer__img {
              height: 100px;
              width: 100px;
            }

            .developer__info {
              padding: 6px;
              font-size: 14px;

              .developer__position {
                margin-top: 10px;
              }

              .developer__homepage {
                margin-top: 16px;

                a {
                  display: inline-block;
                  padding: 4px 10px;
                  color: #409eff;
                  border: 1px solid #409eff;
                  border-radius: 5px;
                  background: #ecf5ff;

                  &:hover {
                    background: #409eff;
                    color: #ffffff;
                  }
                }
              }
            }
          }
        }
      }

      &__indicator {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 120px;
        height: 100px;
      }
    }

    .join {
      overflow: hidden;
      p {
        font-weight: bold;
      }

      &__desc {
        margin-top: 20px;
        color: #409eff;
        font-weight: bold;
      }
    }

    .group {
      &-img {
        height: 200px;
        width: 200px;
      }
    }
  }

  .fw-b {
    font-weight: bold;
  }

  .f-ml {
    margin-left: 5px;
  }
}
</style>
