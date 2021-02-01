import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function ChartAreaIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M14.063 1.687L10 9 4.423 6.212c-.237-.119-.526-.031-.658.199l-3.7 6.474c-.042.076-.065.161-.065.248V14.5c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V1.93c0-.516-.686-.694-.937-.243M15 0v15M0 15V0"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M20 0v20M0 0v20M18 5.743V17c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1v-.713c0-.188.053-.371.152-.53l4.302-6.884c.299-.478.934-.614 1.403-.302L13 12l4.076-6.522c.266-.426.924-.237.924.265"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

ChartAreaIcon.displayName = 'ChartAreaIcon'
