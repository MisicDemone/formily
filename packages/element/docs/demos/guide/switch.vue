<template>
  <FormProvider :form="form">
    <SchemaField>
      <SchemaNumberField
        name="switch"
        x-decorator="FormItem"
        title="开关"
        :required="true"
        x-component="Switch"
      />
    </SchemaField>
    <FormButtonGroup>
      <Submit @submit="log">提交</Submit>
      <Reset>重置</Reset>
    </FormButtonGroup>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily/core'
import { createSchemaField, FormProvider } from '@formily/vue'
import { components, Submit, Reset, FormButtonGroup } from '@formily/element'

const fields = createSchemaField({ components })

export default {
  components: { FormProvider, ...fields, Submit, Reset, FormButtonGroup },
  data() {
    const form = createForm({ initialValues: { switch: false } })
    return {
      form,
    }
  },
  methods: {
    log(...v) {
      console.log(...v)
    },
  },
}
</script>
