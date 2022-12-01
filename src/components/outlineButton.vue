<template>
  <button
    :disabled="disabled"
    class="flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2"
    :class="[regularClasses, disabledClasses, PaddingClasses]"
    @click="handleClick"
  >
    <slot></slot>
    <span v-if="isDisclosure()" :class="{ 'pl-3': true }">
      <font-awesome-icon :icon="['fa-solid', `${isDisclosure()}`]" />
    </span>
  </button>
</template>
<script setup>
import { useSlots, computed } from "vue";

const slots = useSlots();

/*Event Listener*/
const emit = defineEmits(["actionCaptured"]);
const handleClick = (event) => {
  emit("actionCaptured", event);
};

const props = defineProps({
  warning: {
    type: Boolean,
    default: false,
  },
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
  disclosure: {
    type: Boolean,
    default: false,
  },
});

const PaddingClasses = computed(() => {
  return {
    "p-2": slots.icon && props.small && props.disclosure,
    "p-2": !slots.name && props.small && slots.icon,
    "p-4": slots.icon && slots.name && props.small,
    "p-2": slots.icon && props.disclosure && props.small,
    "p-2": slots.icon,
    "p-3 ": slots.icon && !props.small && !slots.name && !props.disclosure,
    "p-4": !slots.icon && slots.name,
  };
});

//Disclosure

const isDisclosure = () => {
  if (props.disclosure) {
    return "fa-chevron-down";
  }
};

const regularClasses = computed(() => {
  return {
    /* default*/
    "box-border outline-none text-sm font-semibold": true,
    " active:bg-neutral-200 hover:bg-neutral-100 hover:drop-shadow-sm  border border-neutral-300":
      !props.primary && !props.success && !props.warning && !props.critical,

    /*primary*/
    "text-blue-500 border-blue-500  hover:bg-blue-600 active:bg-blue-700 hover:text-white hover:drop-shadow-md  border border-blue-500 ":
      props.primary && !props.success && !props.warning && !props.critical,

    /*success*/
    "text-green-500 border-green-500  hover:bg-green-600 active:bg-green-700 hover:text-white hover:drop-shadow-md  border border-success-500 ":
      props.success && !props.warning && !props.critical,
    /*Warning*/
    "text-amber-500 border-amber-500  hover:bg-amber-600 active:bg-amber-700 hover:text-white hover:drop-shadow-md  border border-warning-500 ":
      props.warning && !props.critical,
    /*Critical*/
    "text-rose-500  border-rose-500  hover:bg-rose-600 active:bg-rose-700  hover:text-white hover:drop-shadow-md  border border-rose-500 ":
      props.critical,
    /*Block*/
    "w-full": props.block,
    /*size*/
    "h-9 p-4 rounded-lg": props.small,
    "h-11  p-5 rounded-xl ": !props.small,
  };
});

const disabledClasses = computed(() => {
  return {
    /*default disabled*/
    "cursor-not-allowed disabled:text-neutral-300 disabled:hover:bg-inherit disabled:active:bg-inherit border disabled:border-neutral-300 disabled:drop-shadow-sm":
      props.disabled &&
      !props.primary &&
      !props.success &&
      !props.warning &&
      !props.critical,

    /*primary disabled*/
    "cursor-not-allowed disabled:border-blue-200 disabled:text-blue-200 disabled:active:bg-inherit disabled:hover:bg-inherit   disabled:drop-shadow-sm ":
      props.primary && props.disabled,
    /*success disabled*/
    "cursor-not-allowed disabled:border-green-200 disabled:text-green-200 disabled:active:bg-inherit disabled:hover:bg-inherit disabled:drop-shadow-sm ":
      props.success && props.disabled,
    /*warning disabled*/
    "cursor-not-allowed disabled:border-amber-200 disabled:text-amber-200 disabled:active:bg-inherit disabled:hover:bg-inherit disabled:drop-shadow-sm ":
      props.warning && props.disabled,
    /*critical disabled*/
    "cursor-not-allowed disabled:border-rose-200 disabled:text-rose-200 disabled:active:bg-inherit disabled:hover:bg-inherit disabled:drop-shadow-sm ":
      props.critical && props.disabled,
  };
});
</script>
