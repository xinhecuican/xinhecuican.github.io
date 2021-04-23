/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","59a55566a061e72906e45806bbbe6b90"],["/archives/2019/index.html","930102d4be733d6327892cb28a7b50e4"],["/archives/2020/01/index.html","79d53764b14d2a60e285232fa20f8a74"],["/archives/2020/01/page/2/index.html","b87c0a069611bbd94716f001d2a775f9"],["/archives/2020/01/page/3/index.html","a0a3af91e90b3434f008137fd9a93554"],["/archives/2020/01/page/4/index.html","b835de74a35b376f0bb828d18bb9ebdf"],["/archives/2020/01/page/5/index.html","50ed497072d57879ef7cbf152898b6a1"],["/archives/2020/01/page/6/index.html","0ebfd51bcef4c2d03d36a484d190f4dd"],["/archives/2020/02/index.html","a7a312d605be3381650627aa4fce028b"],["/archives/2020/02/page/2/index.html","871e5804f75a0cff82084b6182d657a9"],["/archives/2020/02/page/3/index.html","cd4b492439e21418e2f7b307c24751bc"],["/archives/2020/03/index.html","2a77480d600a53782b4e64065d9783df"],["/archives/2020/03/page/2/index.html","e8883bc13320604e340c06c70a253bcf"],["/archives/2020/04/index.html","429a724479cf09ead17c7dc01a603ab6"],["/archives/2020/04/page/2/index.html","36c14d07a24a9287ebf04694a06b3271"],["/archives/2020/05/index.html","acfc0b6fc7685ce251bda88b6bac83e3"],["/archives/2020/05/page/2/index.html","de46a2e2b6f169f07cfdbc98cad1cc5f"],["/archives/2020/06/index.html","d18220a3a8aa69d70fe18e528839c954"],["/archives/2020/07/index.html","af5b7f845d2a2eb6e3965f93ee024d2b"],["/archives/2020/07/page/2/index.html","45f51f1f4f4af884ff5c04ee681828d2"],["/archives/2020/08/index.html","09604f21b65c922be5e05fa4ae24ebce"],["/archives/2020/10/index.html","e8edda20ed8acfa2aeb84d5f4dbb7a67"],["/archives/2020/11/index.html","8cec5aea4c5a8661352a6a35bd01406e"],["/archives/2020/12/index.html","a7e8cbba6fe3d2a00f34ae250e75081a"],["/archives/2020/index.html","171efe634110cf04ebce38221ff7cf69"],["/archives/2020/page/10/index.html","c0ccec8ba5830ca45e33c487602cf596"],["/archives/2020/page/11/index.html","9182370abbb8bd97424049a45e8a77f0"],["/archives/2020/page/12/index.html","2e5205f661772c1cc09f3ff46d8ef5ca"],["/archives/2020/page/13/index.html","bc1844ecb2318276cea6efdf8241e71b"],["/archives/2020/page/14/index.html","f305dcbf5a9da8091cfb78b02278e286"],["/archives/2020/page/15/index.html","990d05534e4da822a24aa515b1262dc8"],["/archives/2020/page/16/index.html","89ca9cc47101be60c1f726168ac2eb0e"],["/archives/2020/page/2/index.html","b77d2c4c1dbda0256237bbd03ecac7d9"],["/archives/2020/page/3/index.html","79b38da1c4a81fd4bd76f20948eddb95"],["/archives/2020/page/4/index.html","494900f621a85b4016c5499fe55bd933"],["/archives/2020/page/5/index.html","8895fdee74d7c2f097a179bc42b19fbc"],["/archives/2020/page/6/index.html","c4d73092629d617faa095401840d9444"],["/archives/2020/page/7/index.html","c9fca2fb3bb20af26d0c70d4341a19b7"],["/archives/2020/page/8/index.html","c0e92fe6cb3fab161cba246d8b43d722"],["/archives/2020/page/9/index.html","342df26316b9388641fe9ddccfb6aec6"],["/archives/2021/01/index.html","4a4817c5c263919cf2bacec08c2c1fcf"],["/archives/2021/02/index.html","de45d6557b4fabccaa7339a556479aac"],["/archives/2021/03/index.html","fcbc0379f12e324319c1ef82c0ee42ca"],["/archives/2021/04/index.html","dd02556c0c3977c6f3a365443296f6ae"],["/archives/2021/index.html","7b55bc665ecc0c2f117fff3d00aa72f3"],["/archives/2021/page/2/index.html","05ae8815da2adf5e7dd96d9913063c23"],["/archives/2021/page/3/index.html","7c4d9943bfe83d544c806f8179d98a1c"],["/archives/index.html","aa7013cfbe30965027cf89cadae3e5f4"],["/archives/page/10/index.html","777eb04ce59bb8cdfe6b268777b6aba6"],["/archives/page/11/index.html","7c33979a748f0a56735a6c206ac5e3de"],["/archives/page/12/index.html","b450e452ccb855db5d273a07b59b2609"],["/archives/page/13/index.html","0edc439647d36ce8bd7fe87c7ce8104d"],["/archives/page/14/index.html","134530b585191eeddb04f381b81300a1"],["/archives/page/15/index.html","1e357893f00da1612c2c662269a3a993"],["/archives/page/16/index.html","35bf4a0bce65fc2fb58d5116b07ed79f"],["/archives/page/17/index.html","d5c5a3b9cf47a3d14116fb01a7272462"],["/archives/page/18/index.html","541737efc8b370298ae1ab02dab2872d"],["/archives/page/19/index.html","5307de92059056976882d363f82399e9"],["/archives/page/2/index.html","75d4a2e0d341baaa597780294a8a1567"],["/archives/page/3/index.html","137bb7da306e882564023476bc6f88c5"],["/archives/page/4/index.html","dc389bd62cea513a988402bd8ba3d766"],["/archives/page/5/index.html","0b0de0d08e05824b640f8b732a96f0a2"],["/archives/page/6/index.html","dbf9b5c1c3c7ae5db9d944f8767e73b6"],["/archives/page/7/index.html","7dd5e18072299f743140002407378584"],["/archives/page/8/index.html","9eb9b786668ef1013504e4d23f2b6ff0"],["/archives/page/9/index.html","bc6d49e4a4678a2b5ebb4500f44bfdd2"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","2d2c469af56bce7355eb2eaa82252d22"],["/categories/Linux/page/2/index.html","26bb2b528449b40f02c54fc5adbcc4de"],["/categories/Python/index.html","b56e8c2b1a63bbe6d54879445ba99999"],["/categories/Unity/index.html","7f9ffa6377947e9239c6ad631f555e84"],["/categories/c/index.html","0c99101fdf3390897f50da658e8a2e38"],["/categories/html/index.html","7285adbf9f2fdad47af005b02c03d7bc"],["/categories/index.html","f90cc28d9d3442f89f874dfc34b17863"],["/categories/java/index.html","052546d0349a27da14684881efa94502"],["/categories/java/page/2/index.html","977f1aeeef1836e385872777cc241837"],["/categories/java/page/3/index.html","55762a7b24dc4ee151fa67f5ad8f7316"],["/categories/js/index.html","f16195dd79604c93c085e6cdbd7b810b"],["/categories/next/index.html","7f00ae8d8e8f440fd9cfbb8b7f5a75b9"],["/categories/stl/index.html","6129a1139df5eaf4b4524e7aed030e81"],["/categories/windows/index.html","adcbddc2c353f26a79e09325f2e997ad"],["/categories/基础/c/index.html","a9222e3d133db5fdc6b7bbed64f70802"],["/categories/基础/index.html","4a8fc523134eecf7b041822d26194b32"],["/categories/基础/page/2/index.html","d7240b2def9ab8c0df8220becb6cf55f"],["/categories/并行/index.html","7c9921db154514a0c8063d2dd0745f2d"],["/categories/并行计算/index.html","91489b93abdf47b192b3e51e5e1539de"],["/categories/数学/index.html","ec7f0343a9fb53478ffb85b03db7ec1a"],["/categories/数学/概率论/index.html","96312d23ebcfe41d7ae12b83dbdcc0f7"],["/categories/数据库/MySQL/index.html","4b081e5c2a3b7a8a30874c349a4d981c"],["/categories/数据库/index.html","6a23930d912408e6aa8a5401f0848aa1"],["/categories/数据结构/index.html","1b13443e166a458f57cdec7b2e1d83b2"],["/categories/数据结构/算法/index.html","568c0929e55021777958c49758f463f2"],["/categories/机器学习/index.html","9f5c419e854a346d6ad829edec0de4d6"],["/categories/杂项/index.html","786e2ecf3dc120969b50e964a557dd2a"],["/categories/汇编/AT-T/index.html","e421823f9ab34dc9697ffe5024527cc8"],["/categories/汇编/index.html","6632a47bed376be18eba2f6e1da8e38a"],["/categories/汇编/page/2/index.html","2a44ba55d8e30130280b14137e7c6153"],["/categories/汇编/page/3/index.html","1d8c5330ffa1ecea11ffab6db67fce3a"],["/categories/算法/index.html","9f61205a5001d6fe45cbba1da8156f0f"],["/categories/算法/page/2/index.html","1991d4418d10a5ff9d528cbc116a2e61"],["/categories/算法/page/3/index.html","97478611b637b8da429ecfc4e677ffba"],["/categories/网络/index.html","6d112078dcc7b5162f8b51373693507e"],["/categories/计算机系统基础/index.html","e6f5cfe37374d2b1d0ace8f77df73d51"],["/categories/计算机系统基础/page/2/index.html","30ec5394af69dc6fb1b9b0dff96212db"],["/categories/逆向/index.html","e018a31685ccd78df2467ee10300181a"],["/categories/逻辑电路/index.html","1175d7249a55fa520e9dc6156c761724"],["/css/background.css","2c8612158e42088b891f59480ae6d785"],["/css/index.css","779f61c8c1b448225e33a0a30297c4c0"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Snell-Roundhand字体.ttf","2ec54ef3411fd027522c5f1b8b6fe726"],["/fonts/漂亮行楷字体.ttf","2d252f361cb5bfe1f0b607c07143b506"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/Hadoop1.jpg","18b1041a29f02839281a1cd61c0a542e"],["/images/InkedInked组合逻辑设计15_LI.jpg","20358d0724cbb38cf7ad4897cd252a4d"],["/images/Inked组合逻辑电路13_LI.jpg","b3be5fab7d61b73a3fea5e2692d7de5e"],["/images/Inked组合逻辑设计14_LI.jpg","e05debbb516b45c1bf251c25ece469f0"],["/images/Inked组合逻辑设计15_LI.jpg","1da4e28a4cd3fc4c11e7ab716709c210"],["/images/MPI编程1.png","ed530f67b0e7e0f33df20577b39d7247"],["/images/MPI通信2.png","ce919e1ba147cb367745fc829c2e7fac"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/RNN8.jpg","d0a7f6b9ccef6c87b259b60e8af4cfed"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/dadoop2.png","80332f4c9dc01e3deb00675a60bc5d78"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/hadoop3.jpg","ce9820e347660721fb4dc8a068407777"],["/images/hadoop4.jpg","5710682f4f0e6f4cb50a1bb5842282f2"],["/images/hadoop6.png","9654ec71e75a28d0426d858b9fb03cb2"],["/images/javascript1.png","dd3499b8d6e5e01904c1e8b3f50e45aa"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/java集合_列表_队列_映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-19.png","c944df9f2f13e0cab40c3c2e64bbaff6"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-20.png","e150eef87d8433c63edc61fa43d1f981"],["/images/pasted-21.png","f22837165193588f27a249a02eea4524"],["/images/pasted-22.png","73dd827209b5bc51cbdaf6be23e073d1"],["/images/pasted-23.png","3858fa45b7a7c0f6c41e238dae035da9"],["/images/pasted-24.png","12dce347bf4f7677e495cde27b048c89"],["/images/pasted-25.png","22416169052b69aa6bd62720d0d8d3a2"],["/images/pasted-26.png","f1a8c482811b2e822841100f69681455"],["/images/pasted-27.png","17984ab0385473e02430061c5832fc19"],["/images/pasted-28.png","44e682ad4bfbf2b20343ce55ed877d8a"],["/images/pasted-29.png","a60a4fc7812f20078e4e6b5bb6b07721"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-30.png","ee101ea21972b3ab71b3e8cbd62fedcd"],["/images/pasted-31.png","4759294af3a90a1a857124f247a4d777"],["/images/pasted-32.png","805ca0a1863b73f5ed92f042c12df61a"],["/images/pasted-33.png","730864390853bf56ccb93a40adf61026"],["/images/pasted-34.png","7a49f9e559140600426520aeb28ec206"],["/images/pasted-35.png","29c1357596235d6bfd7f42bd809d7e39"],["/images/pasted-36.png","f84229b3658edd6fbc1054af9f409cd7"],["/images/pasted-37.png","bcd95f06c4879b597118a2eef82a63b3"],["/images/pasted-38.png","869d087e64b3af39a3782c82263f2ab3"],["/images/pasted-39.png","163762097154056aef2aab69be0cb57f"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-40.png","ef974e633e6529c0fef054ba0040e62f"],["/images/pasted-41.png","91c939f5991ecdf3981be7af94d4403f"],["/images/pasted-42.png","29b1481876fbe1b1326095fd092a98ad"],["/images/pasted-43.png","58b98d4645fcfbb023c2c312ab67d1f1"],["/images/pasted-44.png","086c1d8ff6cde02cfdd23ec81a475da0"],["/images/pasted-45.png","aa7d2deb56c2c3fdbeefc8865c670e81"],["/images/pasted-46.png","0e239518ed6cd922814d0fc70e39ab66"],["/images/pasted-47.png","af0c5ad28140305a6240fbec7c396d4c"],["/images/pasted-48.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-49.png","93fcba3560d940d48448135a02dcbb13"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-50.png","4072cb3b9bfa4f91f35539faa74f2c6a"],["/images/pasted-51.png","3a195c159e35be6babd48aac5bf2de2b"],["/images/pasted-52.png","21346633be28fb02dd3d04da0e464d0b"],["/images/pasted-53.png","d522b3a69437b1a6a6eb2a21fc0fe9fe"],["/images/pasted-54.png","33eba22b1ccef5f0fa21c742ce6ebfa1"],["/images/pasted-55.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-56.png","f755a395df963b7bf6fa9cc0fb7ba40c"],["/images/pasted-57.png","c9a60834fbae840ea37440adc6c21af1"],["/images/pasted-58.png","38a77ba94510e9dd232a216180203a5c"],["/images/pasted-59.png","9c7af8544f1c33032032a46937456458"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-60.png","a2c19835599a9e7057611117f40505fd"],["/images/pasted-61.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-62.png","45ce34e736699e3f0ccab20d84de1ec5"],["/images/pasted-63.png","ca5dfdd8338d587c32537ef631051a1f"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/spark1.png","74e891699488b94886cfc28b98ecb199"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/关系数据库模型1.jpg","2b0899e613f5771fc03a5397e513d4de"],["/images/关系数据库模型2.jpg","e41af0d63cba09871ef13f23f87b758c"],["/images/关系数据库模型3.jpg","e908ef253ca12548f359a3cb2206ef68"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/时序电路10.png","a1c552571987118b7be43072d06698cc"],["/images/时序电路11.png","f48e512d2ffb7fe905c14eff4419c3b1"],["/images/时序电路2.png","a97ce56f602f5ebdc40ded148829ee53"],["/images/时序电路3.png","4a44556ede70ac3247a7a6302babdd48"],["/images/时序电路4.png","dd3a9b392604b1a4eef3a50e9e3c5529"],["/images/时序电路5.png","e504561f49f83e4c5901b087b62ab800"],["/images/时序电路6.png","2929c1e70186d9a9fed5d3e869bfa72a"],["/images/时序电路7.png","3a1bebaf06949581fdadd35ebae31777"],["/images/时序电路8.png","743b216b1a976f6c4e3b829db61919e6"],["/images/时序电路9.png","d799f6b0fe3bb272d0519b3cb1f2c7a0"],["/images/时序逻辑设计1.png","606b96f849348c83941fccb8864833c3"],["/images/硬件描述语言6.png","52e2a10422fba145bda8ceb7b160e12c"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/组合逻辑电路13.jpg","7faf9b4790ee7c7c34d9ade4baa2b220"],["/images/组合逻辑设计1.jpg","bfe7e1b6ccb75263fb30888483d68101"],["/images/组合逻辑设计10.jpg","052ca3cdf73cdf7c48f6556b59d2f4a1"],["/images/组合逻辑设计11.jpg","eedf7e7aae5c80eb37b78ad557f436ba"],["/images/组合逻辑设计12.jpg","dcdb202455ad340039025a839b592abb"],["/images/组合逻辑设计15.png","0ba1c8f1302cd5d6f449fedcc5c20dc4"],["/images/组合逻辑设计19.png","0e52bc0b16115886ba8de1aa4eec1949"],["/images/组合逻辑设计2.jpg","08d768b88a5013165266a00253dc3e9c"],["/images/组合逻辑设计22.png","d18576769cc62d450b2f0268343c9e93"],["/images/组合逻辑设计3.jpg","b4529ada409ecf161ab2dea9071361b2"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/逻辑门1.jpg","756745dfdf1368dbdb3f03f308a79e1f"],["/images/逻辑门2.jpg","6f66eb9c805b6a8a53368d6f6a01c218"],["/images/逻辑门3.jpg","7b86be428d777d6a77261aaf98f601e1"],["/images/逻辑门4.jpg","765361cad7db7efe40550d357a1c29ea"],["/images/逻辑门5.jpg","e2f487511c4187e76376444309e87adc"],["/images/逻辑门6.jpg","7addfa1723cba8a5b0799af8ee29f3fb"],["/images/逻辑门7.jpg","7db86a615fdb929ba55aa75172957824"],["/images/逻辑门8.jpg","70f5e2d4b12d871a36e843755204fc03"],["/images/逻辑门9.jpg","e05912c381732bb5e7537d744f599f96"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fe02dd6812f762722559c55d843ff56c"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","824ebe97d4450653e930dc36dd48d80b"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","8f729fb2d428f635587bd566072c444c"],["/page/11/index.html","2ccda5fe7b5874de115376162cf211b6"],["/page/12/index.html","680ca9c51cd9287c5afe97af76131a39"],["/page/13/index.html","73a2becc2575d4309a42a644d8764dcd"],["/page/14/index.html","ec3061cf695ab5f75632757662a50983"],["/page/15/index.html","54ff971d56a728a6341c2e55f807ff8a"],["/page/16/index.html","1c3af91bb6c63f3e583cb6c19d0692ed"],["/page/17/index.html","7134f09384e8c070547bd4bccfcc5185"],["/page/18/index.html","f91c36a0495e6129dbb3d3131170ec09"],["/page/19/index.html","e54b8d06fcc1eb165ab7e75b5037a305"],["/page/2/index.html","58f132b712ffb967b7e7c5f820313acb"],["/page/3/index.html","c4cfc7ba55e2cc9e9b39d07996e69179"],["/page/4/index.html","38d3abc74b7a9721e80979d6969932a3"],["/page/5/index.html","a881554c677fb8576ee2d23e0017d334"],["/page/6/index.html","34755c635f1c8a08a2c19db08bab3afd"],["/page/7/index.html","c1570cf15b3a38ed97b158fbef1feb88"],["/page/8/index.html","ce899b39c2fc5b0372ead7015782cc6b"],["/page/9/index.html","cdf14ecb6227c594f98e9e3f8c28ab8c"],["/post/10919.html","03c9520b6df9df28149ee3921ac081f4"],["/post/11051.html","3d56f1388382a84505ed26226183d5db"],["/post/11306.html","52135b6e749832fc09ff6c3d31b10b2a"],["/post/11491.html","bcff194f4a6930a2cadbcfb509e8ff3d"],["/post/11799.html","ce2aec5855c50d4d687819fab827af95"],["/post/12334.html","9335bfa8bfc713bad258a36e67c3f5d0"],["/post/1326.html","fe30bbcbb8775959f3278d1df3282f03"],["/post/14379.html","f1078b383d0d4877d77dd2d85639fe52"],["/post/14511.html","f5dcbd517b35b3015077468493c64a46"],["/post/15201.html","db3a0784e233a08602b59fcd47a02c78"],["/post/15425.html","066b7c70f7c219736d93414aa6bff5b7"],["/post/16107.html","b07c9382e8b1f964b054e74f2ee71dc5"],["/post/16e2846c.html","8f854501f934a9c6db597bc43b4809f3"],["/post/17862176.html","e86d1c5ae316b55117ee24c6731de852"],["/post/17ad67a8.html","23cb12da31f0582f6e0c096de1329a81"],["/post/18431.html","542cf8a7d675628b7157252956f88b3d"],["/post/18912.html","05da462b7561fd4185b423ad17e16fed"],["/post/1b9c8662.html","447821d1ad0e41e21b3aed66645211ed"],["/post/20198.html","f25ad59a23d848fbc091b9ec24b8937e"],["/post/20ff5ccb.html","12e7e403a7681f2da4f277a0b58f9afe"],["/post/21624.html","c2667065d44ce1fe829ffd3def608548"],["/post/2170659a.html","28a81d21f8f919a9e81149f38cbd4695"],["/post/22102.html","6f76175a6d084138367b24ff78b68e06"],["/post/22493.html","992a8aeb59079ce1597470ad11bebc4a"],["/post/235252ea.html","244dfebf3dba3933270964f23937d591"],["/post/25699.html","0dda3fe8512a54cf4dff399cad5cd7ac"],["/post/2647.html","e2cdbaed1eed53e74b760bbe63f0aa6f"],["/post/26477.html","446572eb23b9287e890013b18d208f88"],["/post/26671.html","0105d45efc331c04f9613dbfb30f9b1d"],["/post/26737.html","2140b3d4a31969c108b6161cb0b93575"],["/post/27045.html","c16961154b10e6224bcebfeb13af416a"],["/post/27621.html","34287b16eaa05f6db274fb3cc7bb9f8b"],["/post/27890.html","f576df484d74cda50c86e41e05a7fb2a"],["/post/27980.html","539d4fac697699837a426751687f1d83"],["/post/280b588e.html","aeaf24e8aed7922fa948c4d59fb08fa2"],["/post/28579.html","d578e17596ca243db70ce4810c4eea46"],["/post/28877bf.html","1f8a3c0e6d2ddb1d3a77d704633e2ddd"],["/post/28954.html","6a88e303cfe919636fc4be13461a89e1"],["/post/29378.html","cba253096e4404c14e6c2eb443b00624"],["/post/29949.html","5c46e0ef2727817b34d01d1b677ed847"],["/post/2ae43b86.html","8c4437b6c97d15ce47215cfeb6955642"],["/post/2ba82a45.html","1b1a66ec82f0414a702dfc71df7f784b"],["/post/2cad8b04.html","1f0c0542e8ae8f294682f99506db0403"],["/post/30072.html","a41d2b9c857347d209c113ee60b96c8d"],["/post/30479.html","85f954ee3728be495c7666e7e6495aed"],["/post/30a5dc7e.html","41ae67dfe0b4ab69d041f0e25e4fd68c"],["/post/31a6b40.html","b58c468e3d6096ae984842ac562e5026"],["/post/325cdbf2.html","9ea5aa3c8b92ba047332da943c5a5710"],["/post/3319ed9a.html","be25ee424a093f964ce1f88c1e5ade13"],["/post/3320.html","93888759cf5d8cb50fdbc0985eb59e8f"],["/post/33cb1151.html","da935a1e238e6a2de394453635cacf70"],["/post/34811d5f.html","501b93f1c998908014fc1f9dbf52ee9d"],["/post/348d4e04.html","244590bccfdcbeb710702033a0488633"],["/post/3526.html","2e795bc14ba0a75c734af1e327d59fe8"],["/post/35532.html","88188644eebfd3bd88f9caa3ee57e8d9"],["/post/35848.html","d7984ce3a27fa4f5371031008603b57f"],["/post/37318.html","06b1178be93e059577ac0cfa4b34d865"],["/post/37663.html","2064a1ae441cc317d82735aeefe4c87f"],["/post/38035.html","3a931986025b88434aaeac6d6735dbed"],["/post/38072.html","62a0b927070786c435ea3c1fb01c2758"],["/post/38145.html","433dd8c933ceaaa42128eac034801974"],["/post/39968.html","ec3f5be4c9d33c46d673b102162eebba"],["/post/3de4bc69.html","f97d6be2d9a6d1dbb0d242c55c62762b"],["/post/40583.html","cfefe1065b621aad7687c2e5648fdda9"],["/post/40997091.html","9d91ad51c9fbe54a2d62a0c2faea78c7"],["/post/41129.html","d203472e44e21d0d4959b09309b81e52"],["/post/41763.html","c67f1a72c57d1539ad089afcf39a9d3f"],["/post/41829.html","418debac9f7da0879478982f7d7b0d17"],["/post/41840.html","609e12713b799493c6cb09a121182aac"],["/post/41e39f2b.html","721be9d39fa273ca62246f7c57427d2e"],["/post/43003.html","f120af7358a029d06e51260850096e66"],["/post/43817.html","38f6f7dfd3ab6abc9b6ae8d5c05f2634"],["/post/43878.html","60a8e7a93083cb4c4ce0e41dd8eedb0b"],["/post/44250.html","048383cad6db8ae2e1fb1c128d8faf78"],["/post/44336.html","2156087256893b7c86f05b431c8ed7c7"],["/post/44454.html","766717019e1b41e2d2d2df66454b07f6"],["/post/44487.html","cf4a42f22e1c7a21202a7c5931111301"],["/post/44914.html","398242dcd87937ca613529c885cfbac5"],["/post/4551c130.html","857907ff999a9a3522fe3bf56acf0a2e"],["/post/455a4c92.html","7aadf1d3a87dad273a9ea3375972e426"],["/post/46390b34.html","ba0d4e8c3d0ca3c11e4f142391b74c98"],["/post/46466.html","8c14be96dcfe1c4f239ef4a4a0992904"],["/post/46925.html","f13c89e2ea71aaa3488d9ebb24109d2b"],["/post/47075.html","62e054e5b2f038e813c6010a42e637f5"],["/post/48220.html","2bfc26bb305b42f6a7a0e75dc5523ffe"],["/post/4b1879e3.html","da0980b58d871cdd42e47189efa0f23c"],["/post/4c720881.html","f15b1b58e4853dd361a9a1944130a0de"],["/post/4f4fc0a1.html","a55af642736ab3302221fff2971b0aa7"],["/post/50daec4.html","38aaf0fcc346c5e6213e6ac77e24ef8c"],["/post/51491.html","8d83f83a001a3e07a22630712c832aa9"],["/post/51e63dcf.html","6161730c508b8706b6599fccdaaf62e4"],["/post/52078.html","838a3402975412beed1fb77ebed9f12a"],["/post/53677394.html","9475b4030dfe9a82b619afa93b4f65ac"],["/post/54300.html","4a7a764ab67c181a345010673584924b"],["/post/54612.html","6cafd67ed8e9fa60a482ee8ad2a84187"],["/post/54613.html","33bf61fefe223ecf1e459c5fce69ce31"],["/post/54708.html","7a28e0aa785cccd0e16e13bb6f0f3f93"],["/post/54778.html","cf72083d633503341694b041c72e4000"],["/post/5490.html","496b8dbe1d9f3595dcc19c5c091dca76"],["/post/55046.html","7a88a87b527f81e2f350692360e7cdd4"],["/post/56929.html","fab93c7131ea6bb86599b282e6ce6655"],["/post/57339.html","2a74f7721d9b232098bc8041bf6bba2d"],["/post/57449.html","89e0cb90457104bee53c06a74407c785"],["/post/57453.html","1e8159f6e2847a1ed28ebc934637359a"],["/post/57671.html","bd15171119941775529cb5fd743ddc80"],["/post/58313.html","6a904dd7b738d078d44bd19766116768"],["/post/58481.html","bf4088ad493b51c9a19a48e8858b0512"],["/post/58986.html","f3742952be1018ed437dd79e0f884e02"],["/post/59431.html","d64296fee56c62bdb3e5fe7ae57b0153"],["/post/5951da65.html","04c63601f829bfe187ee9f2a3b3b41cc"],["/post/5be7e977.html","a5b885144782359e074988613f17ef3b"],["/post/5f9e4eff.html","03ae16611d4168751e5cd6b45b8747fe"],["/post/604b49d0.html","4be78a737c71dbabd247c03f3e17b3b0"],["/post/61312.html","70b218fb707644e721135c90a489aadc"],["/post/61738.html","eb5c2a65775f3dedc8da95b458e056fa"],["/post/61809.html","75e3910342d30ab8c37935d1448f44b3"],["/post/61eaf19a.html","c0d5c7e8e2bf0ff584c823bb42b16af9"],["/post/63002.html","0216e951d74f331573eed3c0041bfa0d"],["/post/63711.html","d0e09b9f8ed691c55acd434408ce4ffc"],["/post/6587.html","cce8faff0359b1f9d492cebfe9a78484"],["/post/6589.html","eab389372299c97ffc4766fbf8870ec6"],["/post/67454659.html","530ee9331aac8a65e934b5b7982e63a5"],["/post/6880.html","0ec75ecc7d1e3112bcb1c9e65e8d1432"],["/post/6ee50502.html","99ddcd8db75fb748af349cf30f6f7c3e"],["/post/70263071.html","ae1d6d85d1ed9aee3e1d41586fc17312"],["/post/70d4f4af.html","cde8c49be17648ff74e509c85b10b930"],["/post/71038564.html","4270088cdc1b211ec50b844eda03d515"],["/post/7119.html","0b86b162fd6d96a05857b9ce2fec5614"],["/post/74e7fdff.html","53c2939ab7824e875f103e8aa15e4fd1"],["/post/7502.html","ffbad5867b5e0984ffe43d7a82934487"],["/post/75223936.html","cfc68c1ade3d3f3ea74213e5ef2ec786"],["/post/7564.html","23772704db1d243470eb9b1b98cf0c95"],["/post/766f9b60.html","14b03136b032a705654659ed22580626"],["/post/769365ef.html","f2ea11d2a1786a69638037f2efdb97bf"],["/post/7ca31f7.html","72de9e3c14c95ea59360a82b91673392"],["/post/7d1c86da.html","df83e63ac7f6161c316e2beb0726ae67"],["/post/7f3bcd7f.html","3438076ccc470563ad69b827f9e09b42"],["/post/8039.html","30c5207e201edfeb9cac80215f91d829"],["/post/8050.html","65faf0713549c16fc2c1ce8414957989"],["/post/8072.html","46db613cce940d0c32fd72b328dd3478"],["/post/8274.html","971eb083ca74b98b45bd4107abdf8ef2"],["/post/8372.html","acbb6fdcc79bbee900b2b55206f8283e"],["/post/8498.html","1addf206e9032b081e3933e4e13e0b3d"],["/post/84ea90f7.html","4bc2013c2135a9c795f5c3a862a9fe5a"],["/post/85b4e13b.html","38ce1671b5a5d132e4d126ccebad2dfc"],["/post/8e75958d.html","43a49613229e026603a94ab4430a3fb8"],["/post/8ecb5fd.html","a04e6f577a251c21466a263f48e5b442"],["/post/912b2566.html","825c3a40c9d57667bcf7f78a61428a3a"],["/post/9187.html","110abe0546c8abf6ff00a9404f183a83"],["/post/9197.html","65c757eba9db358c99bd55b87dc28e1f"],["/post/94ceb2fd.html","0a035273a45dd3b403c8c080dd8a80b2"],["/post/95495db.html","32c7bbc1ac68fa01e500db7d3ef60690"],["/post/97246020.html","1cbfc93dc2e67379e0dcc3cdde0528ba"],["/post/9954ba8e.html","157905e838a69ba071c0b93547bbc88a"],["/post/9d855db5.html","970f4b1760699e1126669e938efc3052"],["/post/a3a786d6.html","906e01f9151e2cf8303e11dd90d79981"],["/post/a444b428.html","4b967539532377b73bdd1ee4e22768a8"],["/post/a50b8908.html","09b9d2ba03a1408e64b690ca0c7d7ebd"],["/post/aa1eade8.html","341e7528608c4a147f870fa91603d2c9"],["/post/ade8c6d6.html","f2da5e358dc023b02384c739fa2b92b3"],["/post/ae8362df.html","e00e5892f7b58fc263512a9a9dfaa9f0"],["/post/af3eed3c.html","d2d14ced2772d9b3c344ea80409ad734"],["/post/b4c1d206.html","8c1f399b97c851beffd6ba50258e8dc1"],["/post/b75632a1.html","7fbccd6b20be4618178d57baddb1c70b"],["/post/bb25e9a9.html","0a15403c2ee79fb2ab6a342d25e1dd4c"],["/post/bcc68732.html","4d6f9921dcd51ddcc58143c09b64babd"],["/post/bcf345af.html","16d160abc2e1b8318795b092bba9ba0b"],["/post/bd608ff7.html","c1d8c16cbb337894bb7527c0383d9715"],["/post/c82a1c99.html","90214a3119bb4bd03253958d3f850ba7"],["/post/d213fc7f.html","a7f63c5555c06d2bc2e526fd9f3b533e"],["/post/d431fab4.html","fc91b6e859319cf4d00c2d1c329ec6c9"],["/post/d5381517.html","4899b2283fa5fa0fba26c7684bfad36d"],["/post/d94f88de.html","4f61f6e664dd2119e82a25d8951dfc0a"],["/post/e058ffd8.html","5cb4b55e27cd3fec7fb17e357f5d4167"],["/post/e0f8cb74.html","94b0206cdaaf62de880be21c7a6f00e6"],["/post/eefe591f.html","63aa1469c615aa106dac0bbc34f9d487"],["/post/ef296a07.html","18363712d7896fb2df0cf16f537e6aff"],["/post/ef3a3fcc.html","04478d0696a548f10954b6a4e1da0081"],["/post/f201f9fd.html","8258d210bb6a4949238b4c8c785c3a3d"],["/post/f79e4123.html","01ec0160de3113706a83d1965ed54b46"],["/post/f8648a1d.html","7e96f0c76ab58b051fb9f7886d096abf"],["/post/f89cb603.html","12fe3cfd85cf90ad747a7e0f1af0dd1a"],["/post/fa288682.html","08492326ea34fde436825c6c63c5e913"],["/post/fb98053e.html","2d1cf3a897b406c4c080350b7cfc4b8d"],["/sw-register.js","fb820922e71a8b35e6bbb5c1d6f8c10b"],["/tags/AT-T/index.html","92efdaad433613b0548b844647314063"],["/tags/index.html","ccb369df53b7192dec5713edf73e76a7"],["/tags/动态规划/index.html","6098c11afdbc5ef45e728d798dcfbb44"],["/tags/字符串/index.html","b20019af6eafb2d9f9890cfdec08e26a"],["/tags/字符常量/index.html","3bc97a7cd580549305dae98264f0e70f"],["/tags/快排/index.html","9c290dcfe3b4d39c8a4e7410a25f3fab"],["/tags/排序/index.html","987779d888dd0af57d1eb08dac977913"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.bootcdn.net"});





/* eslint-enable */
