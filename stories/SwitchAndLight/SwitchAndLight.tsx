// react
import { SwitchProvider } from '@/components/context/switchProvider'
// components
import { Light } from '@/components/ContextPage/FirstView/Light/Light'
import { Switch } from '@/components/ContextPage/Switch/Switch'

export const SwitchAndLight = () => {
  return (
    <SwitchProvider>
      <Light/>
      <Switch/>
    </SwitchProvider>
  )
}
