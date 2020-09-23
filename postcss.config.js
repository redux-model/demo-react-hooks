module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-aspect-ratio-mini': {},
    'postcss-write-svg': { utf8: false },
    'postcss-cssnext': {},
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 转换的单位, 默认是px
      viewportWidth: 750, // 视窗的宽度，对应设计稿的宽度，一般是750
      viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      propList: ['*'], // 指定要转换的属性, 通配符'*'表示匹配所有属性
      viewportUnit: 'vw', // 指定单位，建议使用vw
      fontViewportUnit: 'vw', // 指定字体的单位，建议使用vw
      selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换的类名，可以自定义，可以无限添加, 建议定义一至两个通用的类名
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
      replace: true, // 替换包含vw单位
      exclude: /(\/|\\)(node_modules)(\/|\\)/, // 排除目录
      landscape: false, // 当添加了媒体查询 @media (orientation: landscape) 后通过landscapeWidth作为视窗宽度
      landscapeUnit: 'vw', // @media (orientation: landscape) 中的转换单位
      landscapeWidth: 1334 // @media (orientation: landscape) 中的设计宽度
    },
    // 'postcss-viewport-units': {}, // 不引用Polyfill可以不需要postcss-viewport-units以及去除对应的viewport-units-buggyfill
    'cssnano': {
      'preset': ['advanced', {
        autoprefixer: false,
        reduceIdents: false, // 禁止将 keyframes 自动更名
        mergeIdents: false, // 禁止自动合并 keyframes
        discardUnused: false, // 禁止移除掉未使用的 keyframes
        zindex: false, // 禁止自动转换 z-index
        discardComments: {
          removeAll: true
        }
      }]
    }
  }
}
