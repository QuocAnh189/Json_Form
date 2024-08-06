import { useState } from 'react'

import FormMui from './forms/form_mui'
import FormAntd from './forms/form_antd'
import FormChakra from './forms/form_chakra'
import FormSematic from './forms/form_semantic'
import FormBootsrap from './forms/form_bootstrap'

const selectDefault = {
  form_mui: false,
  form_antd: false,
  form_chakra: false,
  form_semantic: false,
  form_bootstrap: false,
}

function App() {
  const [select, setSelect] = useState({ ...selectDefault, form_mui: true })

  const handleChangeTab = (name: string) => {

    setSelect({ ...selectDefault, [name]: true })

  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div className='flex gap-8 mt-8'>
        <button className={`${select.form_mui ? 'bg-slate-400' : 'bg-slate-200'} px-6 py-2 rounded-md`} onClick={() => { handleChangeTab('form_mui') }}><img /><p>Mui</p></button>
        <button className={`${select.form_antd ? 'bg-slate-400' : 'bg-slate-200'} px-6 py-2 rounded-md`} onClick={() => { handleChangeTab('form_antd') }}><img /><p>Antd</p></button>
        <button className={`${select.form_chakra ? 'bg-slate-400' : 'bg-slate-200'} px-6 py-2 rounded-md`} onClick={() => { handleChangeTab('form_chakra') }}><img /><p>Chakra</p></button>
        <button className={`${select.form_semantic ? 'bg-slate-400' : 'bg-slate-200'} px-6 py-2 rounded-md`} onClick={() => { handleChangeTab('form_semantic') }}><img /><p>Sematic</p></button>
        <button className={`${select.form_bootstrap ? 'bg-slate-400' : 'bg-slate-200'} px-6 py-2 rounded-md`} onClick={() => { handleChangeTab('form_bootstrap') }}><img /><p>Bootstrap</p></button>
      </div>
      <div>
        { select.form_mui && <FormMui /> }
        { select.form_antd && <FormAntd /> }
        { select.form_chakra && <FormChakra /> }
        { select.form_semantic && <FormSematic /> }
        { select.form_bootstrap && <FormBootsrap /> }
      </div>
    </div>
  )
}

export default App
