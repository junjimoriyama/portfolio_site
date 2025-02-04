
// react
import { SwitchProvider } from '../context/switchProvider'
// components
import { FirstView } from './FirstView/FirstView';
import { Creation } from './Creation/Creation';
import { Switch } from './Switch/Switch';
import { Background } from './BackGround/BackGround';
import { Profile } from './Profile/Profile';

export const ContextPage = () => {
  return (
    <SwitchProvider>
      <Background />
      <FirstView />
      <Profile />
      <Creation />
      <Switch />
    </SwitchProvider>
  )
}
