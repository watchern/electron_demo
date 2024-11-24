module.exports = {
  packagerConfig: {
    asar: true,
    name: 'xxx客户端', // 产品名称 // 文件说明
    extraResource: ['./build/assets/readme.txt', './build/assets/img/a.png'], // 静态文件
    executableName: 'App', // 入口可执行文件名
    icon: './build/icons' // 不用加后缀，但是需要准备3个文件，win: icon.ico, mac: icon.icns, linux: icon.png，打包时自动识别，linux 在BrowserWindow构造参数中设置
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
