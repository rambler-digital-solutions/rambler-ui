import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChartAreaIcon(props) {
  return (
    <SvgIcon viewBox="0 0 15 15" {...props}>
      <path
        d="M14.063 1.687L10 9 4.423 6.212c-.237-.119-.526-.031-.658.199l-3.7 6.474c-.042.076-.065.161-.065.248V14.5c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V1.93c0-.516-.686-.694-.937-.243M15 0v15M0 15V0"
        fillRule="evenodd"
      />
    </SvgIcon>
  )
}

ChartAreaIcon.displayName = 'ChartAreaIcon'
