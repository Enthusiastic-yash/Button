<template>
  <component
    :is="computedButton"
    :primary="primary"
    :success="success"
    :critical="critical"
    :warning="warning"
    :small="small"
    :block="block"
    :disabled="disabled"
    :disclosure="disclosure"
  >
    <slot name="icon"></slot>

    <template v-for="slot in Object.keys($slots)" #[slot]="scope">
      <span v-if="$slots.icon" class="inline-grid mr-3">
        <slot name="icon" />
      </span>

      <slot :name="slot" v-bind="scope" />
    </template>
  </component>
</template>

<script setup>
import { computed } from "vue";
import SolidButton from "../components/solidButton.vue";
import OutlineButton from "../components/outlineButton.vue";
import PlainButton from "../components/plainButton.vue";

const buttonList = {
  SolidButton,
  OutlineButton,
  PlainButton,
};

// const emit = defineEmits(["handleEvent"]);

// const handleButtonClick = () => {
//   emit("handleEvent");
// };

const props = defineProps({
  primary: {
    type: Boolean,
    default: false,
  },
  success: {
    type: Boolean,
    default: false,
  },
  critical: {
    type: Boolean,
    default: false,
  },
  warning: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  solid: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  disclosure: {
    type: Boolean,
    default: false,
  },
});

const computedButton = computed(() => {
  if (props.solid) {
    return buttonList["SolidButton"];
  } else if (props.outline) {
    return buttonList["OutlineButton"];
  } else return buttonList["PlainButton"];
});
</script>
