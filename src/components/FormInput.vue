<template>
  <div class="form-group">
    <label for="input">{{ label }}</label>
    <input
      :type="type"
      :class="[
        type === 'range' ? 'form-range' : 'form-control',
        this.modelValue == '' ? 'is-invalid' : '',
      ]"
      id="input"
      :aria-describedby="description"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="emitEvent($event)"
    />
    <small id="description" class="form-text text-muted">{{
      description
    }}</small>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    label: String,
    placeholder: String,
    type: String,
    modelValue: String,
    description: String,
    step: Number,
    min: Number,
    max: Number,
    id: String,
  },
  methods: {
    emitEvent(e) {
      let value = e.target.value;
      this.$emit("update:modelValue", value);
    },
  },
};
</script>

<style scoped>
.is-invalid {
  border-color: red;
}
</style>