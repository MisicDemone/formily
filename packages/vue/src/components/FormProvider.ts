import { provide, defineComponent, watch } from 'vue-demi'
import { FormSymbol } from '../shared/context'
import { IProviderProps } from '../types'
import { useAttach } from '../hooks/useAttach'
import h from '../shared/h'
import { Fragment } from '../shared/fragment'

import type { DefineComponent } from '../types'

export default defineComponent<IProviderProps>({
  name: 'FormProvider',
  inheritAttrs: false,
  props: {
    form: {
      type: Object,
      required: true,
    },
  },
  setup(props: IProviderProps, { attrs, slots }) {
    const createForm = () => props.form
    const [formRef] = useAttach(createForm())
    watch(
      () => props.form,
      (v) => (formRef.value = v)
    )

    provide(FormSymbol, formRef)

    return () => h(Fragment, { attrs }, slots)
  },
}) as unknown as DefineComponent<IProviderProps>
