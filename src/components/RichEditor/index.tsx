import React, { useState, useMemo } from 'react'
import ReactQuill, { ReactQuillProps, Quill } from 'react-quill'
import css from './index.module.less'
import 'react-quill/dist/quill.snow.css'

type props = ReactQuillProps

const fontFamilies = [
  'SimSun',
  'SimHei',
  'Microsoft-YaHei',
  'KaiTi',
  'FangSong',
  'Arial',
  'Times-New-Roman',
  'sans-serif'
]
const Font = Quill.import('formats/font')
Font.whitelist = fontFamilies
Quill.register(Font)

const RichEditor: React.FC<props> = ({ className, ...rst }) => {
  const [value, setValue] = useState('')
  const modules = useMemo<ReactQuillProps['modules']>(() => {
    return {
      toolbar: [
        [{ size: ['small', false, 'large', 'huge'] }], // 大小
        [{ font: ['', ...fontFamilies] }], // font family
        ['bold', 'italic', 'underline', 'strike'], // 加粗、斜体、下划线、删除线
        ['blockquote', 'code-block'], // 引用、代码块
        // [{ header: [1, 2, 3, 4, 5, 6, false] }], // 标题
        [{ script: 'super' }, { script: 'sub' }], // 上下标
        [{ color: [] }, { background: [] }], // 颜色、背景色
        [{ align: [] }], // 对齐
        ['clean'], // 清除样式
        ['link', 'image'] // 链接，上传视频
      ]
    }
  }, [])
  console.log('value', value)
  return (
    <ReactQuill
      className={`${className} ${css.rich_editor}`}
      modules={modules}
      theme="snow"
      value={value}
      onChange={setValue}
      placeholder="place input..."
    />
  )
}

export default RichEditor
