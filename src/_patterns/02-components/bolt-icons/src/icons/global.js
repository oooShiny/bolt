// import { Preact, h } from '@bolt/core';
const Global = ({ color, size, ...otherProps }) => {
  color = color || 'currentColor';
  size = size || '24';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...otherProps}>
      <title>Icon/utility/Indigo/24px/Global</title>
      <g fill="currentColor" fill-rule="evenodd">
        <path />
        <path
          d="M12 1c1.996 0 3.836.492 5.521 1.475a10.95 10.95 0 0 1 4.004 4.004C22.508 8.164 23 10.004 23 12s-.492 3.836-1.475 5.521a10.95 10.95 0 0 1-4.004 4.004C15.836 22.508 13.996 23 12 23s-3.836-.492-5.521-1.475a10.95 10.95 0 0 1-4.004-4.004C1.492 15.836 1 13.996 1 12s.492-3.836 1.475-5.521A10.95 10.95 0 0 1 6.48 2.475C8.164 1.492 10.004 1 12 1zm3.924 7.462a.81.81 0 0 0-.136.136c-.071.081-.136.127-.193.136.02 0 .04-.023.065-.071.023-.048.047-.1.071-.158a.44.44 0 0 1 .05-.1c.058-.067.163-.139.315-.215.134-.057.382-.114.745-.172.325-.076.568-.024.73.158-.018-.02.027-.081.137-.186.11-.105.179-.163.207-.172.029-.02.1-.04.215-.065.115-.024.186-.06.215-.107l.029-.315c-.115.01-.198-.024-.251-.1a.606.606 0 0 1-.093-.301c0 .019-.029.057-.086.114 0-.067-.021-.105-.064-.114a.344.344 0 0 0-.165.014c-.067.02-.11.024-.13.014a.562.562 0 0 1-.214-.107.472.472 0 0 1-.114-.236 4.073 4.073 0 0 0-.058-.215.428.428 0 0 0-.136-.158.508.508 0 0 1-.136-.143 1.553 1.553 0 0 1-.036-.079 1.75 1.75 0 0 0-.043-.093.302.302 0 0 0-.057-.079.11.11 0 0 0-.079-.035c-.028 0-.062.023-.1.071a2.798 2.798 0 0 0-.107.143c-.034.048-.055.072-.065.072a.117.117 0 0 0-.086-.022.456.456 0 0 0-.064.015.241.241 0 0 0-.065.043.4.4 0 0 1-.193.093.936.936 0 0 0-.122.029c.143-.048.139-.1-.014-.158a.452.452 0 0 0-.23-.043c.087-.038.122-.095.108-.172a.345.345 0 0 0-.122-.2h.072c-.01-.039-.05-.08-.122-.122a1.756 1.756 0 0 0-.25-.122 1.233 1.233 0 0 1-.187-.086c-.076-.048-.238-.093-.487-.136-.248-.043-.405-.045-.472-.007-.048.057-.07.107-.065.15a.97.97 0 0 0 .058.2c.033.092.05.151.05.18.01.057-.017.12-.08.186-.061.067-.092.124-.092.172 0 .067.067.14.2.222.134.081.182.184.144.308-.03.076-.105.153-.23.23a.96.96 0 0 0-.229.17.3.3 0 0 0-.021.266c.033.1.083.179.15.236.02.02.026.038.022.058-.005.019-.022.04-.05.064a.641.641 0 0 1-.08.057 1.425 1.425 0 0 1-.092.05l-.043.03c-.105.047-.203.018-.294-.087a.926.926 0 0 1-.193-.372c-.067-.239-.144-.382-.23-.43-.22-.076-.358-.072-.415.014-.048-.124-.243-.248-.587-.372-.239-.086-.516-.105-.83-.057.056-.01.056-.081 0-.215-.068-.143-.158-.2-.273-.172a.72.72 0 0 0 .057-.25c.01-.11.015-.175.015-.194a.73.73 0 0 1 .172-.33 2.746 2.746 0 0 0 .236-.315c.033-.057.036-.086.007-.086.334.039.573-.014.716-.157.048-.048.103-.129.165-.244.062-.114.112-.195.15-.243.086-.057.153-.084.2-.079a.641.641 0 0 1 .208.079c.091.048.16.072.208.072.134.01.208-.043.222-.158a.31.31 0 0 0-.107-.286c.114.01.129-.072.043-.244a.311.311 0 0 0-.115-.129c-.114-.038-.243-.014-.387.072-.076.038-.066.076.03.114-.01-.01-.056.04-.137.15-.081.11-.16.194-.236.251-.077.058-.153.034-.23-.071a1.156 1.156 0 0 1-.078-.194c-.043-.119-.089-.183-.136-.193-.077 0-.153.072-.23.215.03-.076-.023-.148-.157-.215a1.03 1.03 0 0 0-.344-.115c.182-.114.143-.243-.114-.386a.711.711 0 0 0-.294-.072c-.129-.01-.222.01-.28.057a.385.385 0 0 0-.078.165c-.005.043.019.081.072.115.052.033.102.06.15.079.048.019.103.038.165.057.062.019.102.033.121.043.134.095.172.162.115.2-.02.01-.06.027-.122.05l-.165.065c-.047.019-.076.038-.085.057-.03.038-.03.105 0 .2.028.096.019.163-.03.201a.634.634 0 0 1-.128-.25.913.913 0 0 0-.1-.237c.067.086-.053.115-.358.086l-.144-.014c-.038 0-.114.01-.229.028-.114.02-.212.024-.293.015a.266.266 0 0 1-.194-.115c-.038-.076-.038-.172 0-.286.01-.038.029-.048.058-.029a2.146 2.146 0 0 1-.158-.136 1.398 1.398 0 0 0-.143-.122c-.44.144-.888.34-1.347.588.058.01.115.004.172-.015.048-.019.11-.05.187-.093a4.83 4.83 0 0 1 .143-.079c.324-.133.525-.167.601-.1l.072-.072c.134.153.23.273.286.359-.066-.039-.21-.043-.43-.015-.19.058-.295.115-.314.172.066.115.09.2.071.258a2.237 2.237 0 0 1-.165-.143 1.136 1.136 0 0 0-.207-.158.572.572 0 0 0-.215-.071c-.153 0-.258.004-.315.014a9.038 9.038 0 0 0-3.366 3.18c.067.066.124.105.172.114.038.01.062.053.071.129.01.076.022.129.036.158.015.028.07.014.165-.043.086.076.1.167.043.272.01-.01.22.12.63.386.182.163.282.263.3.301.03.105-.018.191-.142.258a.732.732 0 0 0-.13-.129c-.076-.067-.119-.086-.128-.057-.029.048-.026.136.007.265s.084.188.15.179c-.066 0-.112.076-.136.229a3.308 3.308 0 0 0-.035.508c0 .187-.005.299-.015.337l.029.014c-.029.115-.002.28.079.495.08.214.183.307.308.279-.125.028-.029.234.286.616.057.076.096.12.115.129.028.019.086.055.172.107.085.053.157.1.214.143a.61.61 0 0 1 .144.15c.038.048.086.156.143.323.057.167.124.28.2.337-.019.057.027.152.136.286.11.134.16.243.15.33a.07.07 0 0 0-.035.014.07.07 0 0 1-.036.014c.029.067.103.134.222.2.12.067.194.13.222.187.01.028.02.076.029.143.01.067.024.12.043.158.019.038.057.047.114.028.02-.19-.095-.487-.343-.888a11.768 11.768 0 0 1-.244-.415.823.823 0 0 1-.079-.222c-.023-.1-.045-.17-.064-.208.019 0 .048.007.086.022.038.014.079.03.122.05a.73.73 0 0 1 .107.057c.029.02.038.033.029.043-.029.067-.02.15.028.25s.105.19.172.266a19.643 19.643 0 0 0 .416.458c.057.057.124.15.2.28.076.128.076.193 0 .193.086 0 .182.05.287.15.105.1.186.193.243.28.048.076.086.2.115.372.028.172.052.286.071.343.02.067.06.132.122.194a.71.71 0 0 0 .179.136l.23.114c.095.048.157.082.185.1.048.02.136.07.265.151.13.081.232.136.308.165a.66.66 0 0 0 .23.057.757.757 0 0 0 .207-.036c.081-.024.146-.04.194-.05.143-.019.281.053.415.215.134.162.234.263.3.3.344.182.607.235.788.158-.019.01-.016.046.008.108.023.062.062.136.114.222a14.04 14.04 0 0 0 .208.33c.048.057.134.128.258.214s.21.158.257.215c.058-.038.091-.081.1-.129-.028.076.006.172.101.286.095.115.181.163.258.144.133-.029.2-.182.2-.459-.296.144-.53.058-.701-.257a.28.28 0 0 0-.036-.08.913.913 0 0 1-.093-.243.203.203 0 0 1 0-.107c.01-.029.033-.043.071-.043.086 0 .134-.017.143-.05.01-.034 0-.093-.028-.18a2.887 2.887 0 0 1-.057-.185c-.01-.077-.063-.172-.158-.287a3.817 3.817 0 0 1-.172-.215c-.048.086-.124.124-.23.115-.104-.01-.18-.053-.228-.13 0 .01-.007.037-.022.08a.34.34 0 0 0-.021.093.817.817 0 0 1-.215-.015c.01-.028.021-.112.036-.25.014-.139.03-.246.05-.322a.796.796 0 0 1 .079-.172c.043-.077.078-.146.107-.208a.706.706 0 0 0 .057-.18c.01-.056-.012-.102-.064-.135-.053-.034-.136-.045-.25-.036-.182.01-.306.105-.373.287-.01.028-.024.078-.043.15a.485.485 0 0 1-.072.165.357.357 0 0 1-.129.1c-.066.029-.181.038-.343.029-.163-.01-.277-.034-.344-.072-.124-.076-.232-.215-.322-.415-.091-.201-.136-.378-.136-.53 0-.096.011-.222.035-.38.024-.158.039-.277.043-.358a.94.94 0 0 0-.078-.35.727.727 0 0 0 .128-.137.89.89 0 0 1 .144-.15c.019-.01.04-.017.064-.022a.146.146 0 0 1 .065 0c.019.005.038-.002.057-.021a.182.182 0 0 0 .043-.086.427.427 0 0 0-.057-.043c-.03-.029-.048-.043-.058-.043.067.028.203.021.408-.022.206-.043.337-.036.394.022.144.105.249.095.315-.029 0-.01-.011-.055-.035-.136-.024-.081-.027-.146-.008-.193.048.258.187.3.416.129.028.028.102.052.222.071.12.02.203.043.25.072.03.019.063.045.1.079a.966.966 0 0 0 .08.064c.014.01.038.007.071-.007a.432.432 0 0 0 .122-.093.954.954 0 0 1 .172.344c.105.381.196.592.272.63.067.028.12.038.157.028.039-.01.06-.055.065-.136a1.39 1.39 0 0 0 0-.2 3.56 3.56 0 0 0-.022-.18l-.014-.114v-.258l-.014-.114c-.143-.029-.232-.086-.265-.172a.307.307 0 0 1 .021-.265.972.972 0 0 1 .215-.265.468.468 0 0 1 .115-.05c.067-.024.14-.055.222-.093a.644.644 0 0 0 .179-.115c.2-.181.272-.348.215-.501.066 0 .119-.043.157-.13-.01 0-.033-.013-.071-.042a1.047 1.047 0 0 0-.108-.072.194.194 0 0 0-.064-.028c.086-.048.095-.124.028-.23.048-.028.084-.08.108-.157.024-.076.06-.124.107-.143.086.114.186.124.3.028.077-.076.082-.152.015-.229.048-.067.146-.117.294-.15.148-.034.236-.079.265-.136.067.019.105.01.114-.029a.763.763 0 0 0 .015-.172c0-.076.014-.133.043-.172a.488.488 0 0 1 .215-.129c.105-.038.167-.062.186-.071l.243-.158c.029-.038.029-.057 0-.057.172.02.32-.033.444-.158.096-.105.067-.2-.086-.286.029-.057.015-.103-.043-.136a.75.75 0 0 0-.214-.079.52.52 0 0 1 .164-.007c.081.005.132-.002.15-.021.144-.096.11-.172-.1-.23-.162-.047-.367.01-.616.172zM13.59 21.023c1.967-.343 3.643-1.246 5.027-2.707-.028-.028-.088-.05-.179-.064a.515.515 0 0 1-.179-.05 2.253 2.253 0 0 0-.344-.115.28.28 0 0 0-.035-.186.382.382 0 0 0-.115-.129 7.66 7.66 0 0 0-.18-.114 7.54 7.54 0 0 1-.157-.1 4.81 4.81 0 0 0-.2-.165 1.016 1.016 0 0 0-.108-.065c-.052-.029-.093-.038-.121-.029a.503.503 0 0 1-.144.015l-.043.014a.396.396 0 0 0-.078.036c-.024.014-.05.029-.08.043a.148.148 0 0 0-.056.043c-.01.014-.01.026 0 .036-.2-.163-.373-.268-.516-.315a.405.405 0 0 1-.158-.08 1.36 1.36 0 0 0-.15-.1.21.21 0 0 0-.143-.02.327.327 0 0 0-.165.1.342.342 0 0 0-.086.214c-.01.096-.019.158-.028.186-.067-.047-.067-.13 0-.25.066-.12.076-.208.028-.265-.028-.058-.079-.079-.15-.065a.48.48 0 0 0-.172.065c-.043.028-.098.069-.165.121-.067.053-.11.084-.129.094-.019.01-.06.035-.121.078a.482.482 0 0 0-.122.108.711.711 0 0 0-.086.172.867.867 0 0 1-.072.157c-.019-.038-.074-.069-.164-.093-.091-.024-.136-.05-.136-.079.019.096.038.263.057.502.019.238.043.42.071.544.067.296.01.525-.171.687-.258.24-.397.43-.416.573-.038.21.02.335.172.373 0 .067-.038.164-.115.293-.076.13-.11.232-.1.308 0 .058.01.134.029.23z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};
export default Global;
