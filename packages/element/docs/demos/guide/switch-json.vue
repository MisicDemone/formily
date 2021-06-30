<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema"> </SchemaField>
    <FormButtonGroup>
      <Submit @submit="log">提交</Submit>
      <Reset>重置</Reset>
    </FormButtonGroup>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { Submit, components, Reset, FormButtonGroup } from '@formily/element'

const fields = createSchemaField({ components })
const schema = {
  type: 'object',
  properties: {
    switch: {
      type: 'number',
      title: '开关',
      required: true,
      'x-decorator': 'FormItem',
      'x-component': 'Switch',
    },
  },
}
export default {
  components: { FormProvider, ...fields, Submit, Reset, FormButtonGroup },
  data() {
    const form = createForm({ initialValues: { switch: false } })
    return {
      form,
      schema,
    }
  },
  methods: {
    log(...v) {
      console.log(...v)
    },
  },
}
</script>
