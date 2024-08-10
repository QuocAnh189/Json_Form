import { useState } from 'react'

import FormCustom from './forms/form_custom'
import FormMui from './forms/form_mui'
import FormAntd from './forms/form_antd'
import FormChakra from './forms/form_chakra'
import FormSematic from './forms/form_semantic'
import FormBootsrap from './forms/form_bootstrap'

const tabDefault: any = {
  form_custom: { title: 'Custom', active: false },
  form_mui: { title: 'Mui', active: false },
  form_antd: { title: 'Antd', active: false },
  form_chakra: { title: 'Chakra', active: false },
  // form_semantic: { title: 'Sematic', active: false },
  form_bootstrap: { title: 'Bootstrap', active: false }
}

const tabsFormContent: any = (name: string) => {
  return {
    form_custom: <FormCustom />,
    form_mui: <FormMui />,
    form_antd: <FormAntd />,
    form_chakra: <FormChakra />,
    form_semantic: <FormSematic />,
    form_bootstrap: <FormBootsrap />
  }
}

function App() {
  const [tabs, setTabs] = useState({ ...tabDefault, form_custom: { title: 'Custom', active: true } })

  const handleChangeTab = (name: string) => {
    setTabs({ ...tabDefault, [name]: { title: tabDefault[name].title, active: true } })
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='flex gap-8 mt-8'>
        {Object.keys(tabs).map((key) => (
          <Tab
            key={key}
            isSelect={tabs[key].active}
            name={key}
            handleChangeTab={handleChangeTab}
            title={tabs[key].title}
          />
        ))}
      </div>
      <div>
        {Object.keys(tabs).map((key) => {
          if (tabs[key].active) {
            return tabsFormContent(key)[key]
          }
        })}
      </div>
    </div>
  )
}

interface TabProps {
  isSelect: boolean
  name: string
  title: string
  handleChangeTab: (name: string) => void
}

const Tab = (props: TabProps) => {
  const { isSelect, name, title, handleChangeTab } = props

  return (
    <button
      className={`${isSelect ? 'bg-slate-400' : 'bg-slate-200'} px-6 py-2 rounded-md`}
      onClick={() => {
        handleChangeTab(name)
      }}
    >
      <img />
      <p>{title}</p>
    </button>
  )
}

export default App
