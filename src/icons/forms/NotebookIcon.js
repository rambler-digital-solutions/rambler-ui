import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function NotebookIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M0 15V0m15 0v15M2 1v2.9H.5c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5H3.2V1.2h9.6v12.6H3.2V12H2v2c0 .552.448 1 1 1h10c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1m2.5 8.9H3.2V9H2v.9H.5c-.276 0-.5.224-.5.5v.2c0 .276.224.5.5.5h4c.276 0 .5-.224.5-.5v-.2c0-.276-.224-.5-.5-.5m0-1.8h-4c-.276 0-.5-.224-.5-.5v-.2c0-.276.224-.5.5-.5H2V6h1.2v.9h1.3c.276 0 .5.224.5.5v.2c0 .276-.224.5-.5.5"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

NotebookIcon.displayName = 'NotebookIcon'
