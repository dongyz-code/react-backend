import React from 'react'
import RichEditor from '@/components/RichEditor'
import css from './index.module.less'

const Editor: React.FC = () => {
  return (
    <div className={css.editor}>
      <h2 className="editor-title">React Quill Editor</h2>
      <RichEditor className="editor-content" />
    </div>
  )
}

export default Editor
