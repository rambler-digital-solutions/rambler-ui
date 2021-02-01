import React from 'react'
import SvgIcon from '../../SvgIcon'

export default function SettingsIcon(props) {
  return (
    <SvgIcon
      viewBox={size => (size < 20 ? '0 0 15 15' : '0 0 20 20')}
      {...props}>
      {size =>
        size < 20 ? (
          <path
            d="M0 15V0m15 0v15M7.5 0c-.592 0-1.167.072-1.719.204C5.326.313 5 .717 5 1.186v.865c-.342.157-.666.344-.969.559l-.749-.432c-.407-.235-.922-.153-1.244.19C1.256 3.2.663 4.209.324 5.331c-.136.452.048.941.457 1.176l.747.432c-.017.185-.028.372-.028.561 0 .189.011.376.028.561l-.747.432c-.409.235-.593.724-.457 1.176.339 1.122.932 2.131 1.714 2.963.322.343.837.425 1.244.19l.749-.432c.303.215.627.402.969.559v.865c0 .469.326.873.781.982.552.132 1.127.204 1.719.204.592 0 1.167-.072 1.719-.204.455-.109.781-.513.781-.982v-.865c.342-.157.666-.344.969-.559l.749.432c.407.235.922.153 1.244-.19.782-.832 1.375-1.841 1.714-2.963.136-.452-.048-.941-.457-1.176l-.747-.432c.017-.185.028-.372.028-.561 0-.189-.011-.376-.028-.561l.747-.432c.409-.235.593-.724.457-1.176-.339-1.122-.932-2.131-1.714-2.963-.322-.343-.837-.425-1.244-.19l-.749.432c-.303-.215-.627-.402-.969-.559v-.865c0-.469-.326-.873-.781-.982C8.667.072 8.092 0 7.5 0m0 1.2c.434 0 .869.047 1.3.14v1.48l.699.321c.274.126.535.277.775.447l.628.447 1.282-.74c.585.652 1.029 1.421 1.301 2.251l-1.279.738.071.766c.014.148.023.298.023.45 0 .152-.009.302-.023.45l-.071.766 1.279.738c-.272.83-.716 1.599-1.301 2.251l-1.282-.74-.628.447c-.24.17-.501.321-.775.447l-.699.321v1.48c-.431.093-.866.14-1.3.14-.434 0-.869-.047-1.3-.14v-1.48l-.699-.321c-.274-.126-.535-.277-.775-.447l-.628-.447-1.282.74c-.585-.652-1.029-1.421-1.301-2.251l1.279-.738-.071-.766c-.014-.148-.023-.298-.023-.45 0-.152.009-.302.023-.45l.071-.766-1.279-.738c.272-.83.716-1.599 1.301-2.251l1.282.74.628-.447c.24-.17.501-.321.775-.447L6.2 2.82V1.34c.431-.093.866-.14 1.3-.14m0 4.3c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2m0 1.2c.441 0 .8.359.8.8 0 .441-.359.8-.8.8-.441 0-.8-.359-.8-.8 0-.441.359-.8.8-.8"
            fillRule="evenodd"
          />
        ) : (
          <path
            d="M0 20V0m20 0v20m-10-8.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5M10 2c-.786 0-1.571.115-2.33.346-.407.123-.67.521-.67.947v.94l-.495.286-.805-.465c-.393-.227-.884-.155-1.213.159C3.395 5.254 2.599 6.6 2.233 8.115c-.107.443.072.906.467 1.134l.813.47v.562l-.813.47c-.395.228-.574.691-.467 1.134.366 1.515 1.162 2.861 2.254 3.902.329.314.82.386 1.213.159l.805-.465.495.286v.94c0 .426.263.824.67.947.759.231 1.544.346 2.33.346s1.571-.115 2.33-.346c.407-.123.67-.521.67-.947v-.94l.495-.286.805.465c.393.227.884.155 1.213-.159 1.092-1.041 1.888-2.387 2.254-3.902.107-.443-.073-.906-.467-1.134l-.813-.47v-.562l.813-.47c.394-.228.574-.691.467-1.134-.366-1.515-1.162-2.861-2.254-3.902-.329-.314-.82-.386-1.213-.159l-.809.467L13 4.237v-.944c0-.426-.263-.824-.67-.947C11.571 2.115 10.786 2 10 2m0 11c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3m0-9.5c.51 0 1.011.059 1.5.174v1.14c0 .179.095.344.25.433l1.491.861c.155.09.346.09.5 0l.981-.566c.699.739 1.211 1.625 1.499 2.598l-.984.568c-.155.09-.25.255-.25.433v1.718c0 .178.095.343.25.433l.984.568c-.288.973-.8 1.859-1.499 2.598l-.977-.564c-.155-.09-.346-.09-.501 0l-1.494.863c-.155.089-.25.254-.25.432v1.137c-.489.115-.99.174-1.5.174s-1.011-.059-1.5-.174v-1.137c0-.178-.095-.343-.25-.432l-1.494-.863c-.155-.09-.346-.09-.501 0l-.977.564c-.699-.739-1.211-1.625-1.499-2.598l.984-.568c.155-.09.25-.255.25-.433V9.141c0-.178-.095-.343-.25-.433l-.984-.568c.288-.973.8-1.859 1.499-2.598l.977.564c.155.09.346.09.501 0l1.494-.863c.155-.089.25-.254.25-.433V3.674c.489-.115.99-.174 1.5-.174"
            fillRule="evenodd"
          />
        )
      }
    </SvgIcon>
  )
}

SettingsIcon.displayName = 'SettingsIcon'
