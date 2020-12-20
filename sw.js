/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","ea64b31c3a981ad203d7aadbb4725752"],["/archives/2019/index.html","80e2d5a0170d2527b8e981bc871bbfa6"],["/archives/2020/01/index.html","831bfc19ffb39f6a602f73c2a6b6ee5a"],["/archives/2020/01/page/2/index.html","6186c5392bdc67d371f7c0fa09fc86ab"],["/archives/2020/01/page/3/index.html","5844d8f89c005eba4bcebba43bb37621"],["/archives/2020/01/page/4/index.html","9995c7d5c9d33dfc1888e20cf87263bc"],["/archives/2020/01/page/5/index.html","a3530362bbd1d6910ba60e3d867590c8"],["/archives/2020/01/page/6/index.html","83c292d05ebcd4d95887e5a44aa7a580"],["/archives/2020/02/index.html","091ad234981bed8ea69207e6c923701e"],["/archives/2020/02/page/2/index.html","05d16ef1fefde9a7dcbfdf6b1e88af42"],["/archives/2020/02/page/3/index.html","f0d623d34a7c7ab0e5cf372990fcd72e"],["/archives/2020/03/index.html","9b74a5d6a5bae63251d538c696060dea"],["/archives/2020/03/page/2/index.html","0499f20e5e3ebc284d0b9c38698efe98"],["/archives/2020/04/index.html","2c2c336d6012339ccec08ac8525a5a96"],["/archives/2020/04/page/2/index.html","715ae7bdd4f55a4088287dd3f805ca45"],["/archives/2020/05/index.html","efbd2b74f22b33b37c184769506861fd"],["/archives/2020/05/page/2/index.html","9d3694f9c5fa782c588e45978b9a60d0"],["/archives/2020/06/index.html","abecc170f1fac15cd89bbd725ff7a298"],["/archives/2020/07/index.html","fd9db5c4bef5f4859f39ebdd6d8ae853"],["/archives/2020/07/page/2/index.html","f536335e4addfba71bc17511fa36cab4"],["/archives/2020/08/index.html","169425c49304aaeb97c7c342c4024236"],["/archives/2020/10/index.html","eb62d601383302bc74ee867f865fec1d"],["/archives/2020/11/index.html","13635a5a010a44c13ca721ded683ee2d"],["/archives/2020/12/index.html","a15b41fb0da3b3c7dee3034f681c5daa"],["/archives/2020/index.html","48d8b0f55b5df9543dafc85f8b7ed9bf"],["/archives/2020/page/10/index.html","be26cf8a44ec48fe90f1c867b8b97349"],["/archives/2020/page/11/index.html","77d4025692c8da8cf6d9cefe9aaf6ee5"],["/archives/2020/page/12/index.html","022558c6231953ac7fa3d0d905f4b5c9"],["/archives/2020/page/13/index.html","f55cb6b8e98afa96bc674fbfc04d8c64"],["/archives/2020/page/14/index.html","cc6f84fc8b43e027e20b1e0229747d66"],["/archives/2020/page/15/index.html","fffda89c7a8e09f21dea13de72f45e6d"],["/archives/2020/page/16/index.html","7896d7bc9f0af89254a43d7dde0fdcaa"],["/archives/2020/page/2/index.html","4f92c971f3266f41dab97326f5b01bc3"],["/archives/2020/page/3/index.html","91a3b5182cfb73258b9516240bf98117"],["/archives/2020/page/4/index.html","a5228474a4d3d26ba61b5f6ba6e71223"],["/archives/2020/page/5/index.html","4ab7da61287dbc3df4291f55152541a1"],["/archives/2020/page/6/index.html","812448cc79ae16e68f5b50f73002369a"],["/archives/2020/page/7/index.html","82f7afb56894d0b9aacf74d8f5dfba47"],["/archives/2020/page/8/index.html","45a0691ef36b09fd8e91cb423edf2ea6"],["/archives/2020/page/9/index.html","d93519cd53d264328377c3ed8164ff54"],["/archives/index.html","99d81e3387ec9405e318077aa1dba519"],["/archives/page/10/index.html","b3fb9d14be69d38ee50d8fa2881ae0c2"],["/archives/page/11/index.html","205de6d3dfbddbce0018bc9605136c20"],["/archives/page/12/index.html","9aef08b70076836120f2a392f1eb5b0d"],["/archives/page/13/index.html","4877e769a2662826a0c9e17810ecc075"],["/archives/page/14/index.html","1f03b317f193474ad0d22e4012387eed"],["/archives/page/15/index.html","53711190e9f2256ed6937b7d01f41cba"],["/archives/page/16/index.html","dae509a9eb0589fc1dfadc0710bdc138"],["/archives/page/2/index.html","6530783bd92135595fbb185752167d53"],["/archives/page/3/index.html","21e24b41c555014b4775606a2de32b9f"],["/archives/page/4/index.html","62ca7e83d5beeb5e20fcffbe1d03bec5"],["/archives/page/5/index.html","b1ef0ebaafdef697a1301580154117bd"],["/archives/page/6/index.html","065929920d7b8893e5eb3d418b6f977a"],["/archives/page/7/index.html","518cb39f10c83e17857c39b77f870c23"],["/archives/page/8/index.html","d24c82375402ae6ffcb5a096fd3ff889"],["/archives/page/9/index.html","edb3a11cdeb9dbf3966a02fbc793427f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","6524dc826044671d8480bb8960112496"],["/categories/Linux/page/2/index.html","549f9cac931694f31fa55a793040db6b"],["/categories/MySQL/index.html","511d0a0b8785af5df1c306c2ac479ae5"],["/categories/Python/index.html","1d6e3a8597bd5c578ead3eff4576c1a7"],["/categories/c/index.html","f806e7e6df09ccca95602521a70b8083"],["/categories/index.html","288dec2d03b917e91574dd9c5bc672d4"],["/categories/java/index.html","ce83f3aa565398bcdceca2e4d1382ec6"],["/categories/java/page/2/index.html","f880f0117561e71217db3a613170735c"],["/categories/java/page/3/index.html","69d40c45e0740a0664b4fe1b9570a7fa"],["/categories/next/index.html","2928f2fdc6049eba609a0a8f4a4d543a"],["/categories/stl/index.html","a14ec471a583024394388da59fa5c6a0"],["/categories/windows/index.html","80d54ab1a68386c30ee60dee1f589379"],["/categories/基础/c/index.html","0a14fe1ee2339e7a821c97e6dbf6bc27"],["/categories/基础/index.html","eb1d33ee219266be32eef9de6975281e"],["/categories/基础/page/2/index.html","d32d677d98ae1d8a51aea6bb094bb3c4"],["/categories/数学/index.html","684ffd466ff4a25f6a2d64390c0c53dc"],["/categories/数学/概率论/index.html","d8be1c77af2147ad8d17fbe8433ca9b9"],["/categories/数据结构/index.html","89882aab976127d9118cf2e30b8625ef"],["/categories/数据结构/算法/index.html","b010b9211a9eb6fcf5c9fa5554b90a66"],["/categories/机器学习/index.html","5a344ea8f421fbef8c376ab7ec28801b"],["/categories/杂项/index.html","83d2c0705558ad75118a62c32be67a6a"],["/categories/汇编/AT-T/index.html","f435b2de2ba52b3eed0b991761d8498a"],["/categories/汇编/index.html","de30b9401f2c74ff6e5cf177ee7ed3ff"],["/categories/汇编/page/2/index.html","cb4801e935310a52c8b4069c40930bfd"],["/categories/汇编/page/3/index.html","0f076d2791e9143f1997d3f2b5a5247d"],["/categories/算法/index.html","0084b6775da42d86612f56fad79fc0c8"],["/categories/算法/page/2/index.html","f7cfb5fe66fd18928ee5e6932b429d98"],["/categories/算法/page/3/index.html","e8f51abb43c02e3f284fdde6bf43ffdf"],["/categories/计算机系统基础/index.html","7eb704472a2775aeac34740d4b232866"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","aeb4369d255545eb9ce1c5e00db51a08"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","55556712198c01e86fbbdc76c08df06e"],["/page/11/index.html","66a182218f51faf4791b946bfcad30a4"],["/page/12/index.html","5f4bf6a7876d4004d065569c5f6042cb"],["/page/13/index.html","af149ec84b2d668ae3362a8d6b46ae12"],["/page/14/index.html","c58248eea3fa149105df0e8da6e09929"],["/page/15/index.html","12685762e9cf61ca9a3aece817caa07d"],["/page/16/index.html","f382c04da20d884ff70d03fbd71ff1dc"],["/page/2/index.html","e2071ffcf145356fc1f391839093c9d4"],["/page/3/index.html","6fb1ea09c24cedb20a940f8e69b25352"],["/page/4/index.html","18e9cfabb80ac09c5c3f902517237418"],["/page/5/index.html","1a73423dffa6e2e5c48232da5bc31d81"],["/page/6/index.html","8d5e97b793e6ffc212238ca4b39c4f4d"],["/page/7/index.html","585d33a0a993c6983e7ddc8e676e1b9b"],["/page/8/index.html","32db52788b3ce84991e1df6474a6d848"],["/page/9/index.html","828fdb861cea26a1ed74ae045e26b12c"],["/post/10919.html","ce400968dd36c264e626a0c8082ae5d9"],["/post/11051.html","c75b52991795ce2e8b0ce09f69f2c6eb"],["/post/11306.html","098d789d62178ab36af5065fb9447634"],["/post/11491.html","8a2d771416050fef95f12c1d366e9a67"],["/post/11799.html","1ab851ca3e96716cc1819c3706db0a6b"],["/post/12334.html","ea27766885fe696ce394ce8651193606"],["/post/1326.html","e16c2f132f15a57e0eadcbb5e82219a3"],["/post/14379.html","edc75a2ece437633f4ceec4b6b42bbd4"],["/post/14511.html","ebd349ad1e5fd8c34d6db1720e92a1c9"],["/post/15201.html","a9a0a60363a2f08aa941f22ec90de632"],["/post/15425.html","c074886fad14968949f6bdd150366603"],["/post/16107.html","f8ce25c406b870a4ec79bb493b05a462"],["/post/17862176.html","d22a5beda68553ba013c305b71396bbf"],["/post/18431.html","cdc83c054b27ce680c32748004db23c1"],["/post/18912.html","fc81445b0690f03a9c1598c2574cfb21"],["/post/1b9c8662.html","bae8d9d1aa3a82ec900256373d3a5b89"],["/post/20198.html","b454af9e5cc2c492b742989139dc29c2"],["/post/20ff5ccb.html","0a38c276d289c59b4c16b24d82301141"],["/post/21624.html","193805a490408d4c20244927465d2a4a"],["/post/2170659a.html","0707193477338ed6059ef3962c172eca"],["/post/22102.html","97023c6a03a6ae01a7ea1162473a62d1"],["/post/22493.html","e29e20ed717aed5a43ffb84112ee8aa0"],["/post/235252ea.html","7fb5439fd6b0ba83c6c193b8f3999e4b"],["/post/25699.html","a20c7d36a5644e6d6f286964a2c558b7"],["/post/2647.html","02f0abc9aca1bd5bc9cb8f9418c172ef"],["/post/26477.html","edc441fd6d67b101c09e581530900bdc"],["/post/26671.html","9a5fdc24323dabf65067cd5b522f6c93"],["/post/26737.html","b926760b44efe8cf4e448e5e3c76ef86"],["/post/27045.html","e33d710674573cd1c6b0421f9f0677fa"],["/post/27621.html","668ef8ced6502979376b03541ba1b3b8"],["/post/27890.html","3c690548ca556e0d6f31cce56ad299bc"],["/post/27980.html","b86e08817bb6dca8e21e238054d01a43"],["/post/280b588e.html","8fdac7e4dee7c102cff715845b125100"],["/post/28579.html","c800abd9f5a389325fd42597e15be5df"],["/post/28877bf.html","5a77f74b9642d857410e2830866f9f61"],["/post/28954.html","278e5cae15857ef159cf7f80148b75a1"],["/post/29378.html","4c82ed0da8f9ff7ce27cd05c5673eb2c"],["/post/29949.html","b1fe69b5852bdf2b14e57eb30d1679b0"],["/post/2ae43b86.html","1dcb12aded59dcbbee377a33b700b0b0"],["/post/2ba82a45.html","c97a28112652f7f90689fd4ad160b60e"],["/post/30072.html","848aed31423665c06ac8276745d585a8"],["/post/30479.html","2779561a1859eba425376d9a061ec18d"],["/post/31a6b40.html","9421c05e5f7c4aa7e56a22d6c0cd5bd6"],["/post/325cdbf2.html","97dcfe9d6a81688124879bbf86de95bb"],["/post/3319ed9a.html","7b9af15e975b7b7ac7bfec561ccd659a"],["/post/3320.html","d961c8d4ab808869b6e89a7cb72f2730"],["/post/33cb1151.html","e4bd1d23ee290cbd67dc5ec321f9de23"],["/post/34811d5f.html","15c2f94b3cf9e873a87c2891260f0af8"],["/post/348d4e04.html","61f023a2612037047164d8e3d9b1ae04"],["/post/3526.html","ff4548c67f80653cb4e5114576bb195e"],["/post/35532.html","246783f8d633df392ce1644a80fce485"],["/post/35848.html","591c82229d3c9050173d6a098276c976"],["/post/37318.html","b9547b1a638146c94d4f7a234c562042"],["/post/37663.html","0d31fd26000d9375a56eab2ab0e4f53d"],["/post/38035.html","37901fe3a3f80c48f1e39a862269d131"],["/post/38072.html","269e46803322680205cb44d65ce4af73"],["/post/38145.html","0d763d31fb96e5d24d29f3161776f55d"],["/post/39968.html","f5b73b7f3d49dc34ceecb9322d0411f4"],["/post/3de4bc69.html","0be0abd05f566408ca16abfe8a225996"],["/post/40583.html","1bbaf32bdb1494408d1ad3dd7ceabded"],["/post/40997091.html","e6c0ac07768a32693435a8687867fed5"],["/post/41129.html","0b13b30c79f035c452b5f56ef78419ae"],["/post/41763.html","dc543f52244d081e753d44dd01be4b06"],["/post/41829.html","ef2f9da227fd99feec7d7da2a0bc780b"],["/post/41840.html","f9664b12dbf19ebe9f6942ffa0d601a9"],["/post/43817.html","0cb2372c8e03a4ccd71fbe87ff5a1cc3"],["/post/43878.html","7900619f79c3d1d7f9d23fcd968cd70c"],["/post/44250.html","dd592912ee5df40cea81ab448a665a14"],["/post/44336.html","d8a720676a4f2e039a6b9c7842a17930"],["/post/44454.html","974964a1383ca9a9819d3b814bf46e3a"],["/post/44487.html","9e6abae5feee69cac35841d3a7b9793d"],["/post/44914.html","1c27fae0f830d2a92a7b616fd8507f0d"],["/post/4551c130.html","2535f53ccb8bc675590fb56bd1093fad"],["/post/455a4c92.html","22f5fff702efebc317c2a1c8ab85262c"],["/post/46466.html","4fc593eda50322fd0507a2c78de28fdf"],["/post/46925.html","e553f8bb473a45e00a77d090ab8769e9"],["/post/47075.html","574d34dc6829c6c6a4087922d3789081"],["/post/48220.html","e536e40765be8b7b5f6956909010d65b"],["/post/4b1879e3.html","95d24498c9f7f013fa0660ada98855b5"],["/post/4c720881.html","523fef3db8f6a56a4944e1f912640498"],["/post/50daec4.html","4d8ee1cde03e1cd347f9851cc12af697"],["/post/51491.html","033897ae8272ff9c0d14393b3a9c0b99"],["/post/51e63dcf.html","6879d5887cfb58eaeeff7b415bc0e119"],["/post/52078.html","cddb3884219e5bffb815f185641b007c"],["/post/53677394.html","b15285c94964fe6a40e9cd90a4ff508a"],["/post/54300.html","fc355c1631a378056b354df146f293b1"],["/post/54612.html","e617ab8cec86917c469a3f3075a930ae"],["/post/54613.html","650d69ea9111335955b0ff460040de78"],["/post/54708.html","c7da0e1bdcebb4768c874ce8eb0dcfc9"],["/post/54778.html","06409bd82fce93645d7130bd57c5d87d"],["/post/5490.html","c31be20604a1e70755ffc831f58e75f4"],["/post/55046.html","b2d0f35a27b95806a49a824b412ee7b6"],["/post/56929.html","fae15f03f635d3185d2b0db4bbaaf0d0"],["/post/57339.html","332a0508640a9d5e950ab15d6d5c9590"],["/post/57449.html","0f90951e2aab046e299fc5bd025a90b2"],["/post/57453.html","63feca5d3938e372a058d4f7ada604ea"],["/post/57671.html","2dd205110fa0f730e9b7f1a5e77b6bfc"],["/post/58313.html","1167015b5217ea9c884c8888fcd6cdfa"],["/post/58481.html","1d824b6506a332e883a41dd840552478"],["/post/58986.html","312bdda72c8e39a41043ea15f1e36150"],["/post/59431.html","ffb3c2e7a7ccd901d9b8845a60814cf2"],["/post/5951da65.html","784700b57a84ea7da6468cb576d27941"],["/post/5be7e977.html","3e81a95be3a0cd97dc736c169f4b9faa"],["/post/5f9e4eff.html","9e614c5817b8acc919b793109013b3d5"],["/post/604b49d0.html","3f0d9cdca60e659788b2075d96329d57"],["/post/61312.html","99d190f6b605766cc379f28583eb6e29"],["/post/61738.html","076a15ba6875f6a0d58eec9928f4b574"],["/post/61809.html","d349f0698991d220b6c3698e90778b2d"],["/post/61eaf19a.html","91be84b686f1ee1388cc36df1656c478"],["/post/63002.html","24ea53989e684126c6f312d00e37205e"],["/post/63711.html","8ce913976a1b4b346b40f8182c6a0000"],["/post/6587.html","51af48a160b9a2508594196e9e05ce77"],["/post/6589.html","83ee55a2e9a5021c10d46c0039e04678"],["/post/6880.html","19d3ff9753c3a38b34fabd0030ec5c75"],["/post/70263071.html","a7166f542a4a42b84e1a10fd87dd8bf4"],["/post/71038564.html","0b023a752948fa3e145f13406a521dda"],["/post/7119.html","98e5fd6332903112316c8678ff34673c"],["/post/74e7fdff.html","4bcfb92f884ca7815142813401586b99"],["/post/7502.html","508c8730da4b0792f753d2e6a5ae5c29"],["/post/7564.html","20cb59f725317ebecfaa004ae971c575"],["/post/766f9b60.html","eb450c247cfd51686c29cbdb0fbd989d"],["/post/7ca31f7.html","111799b0aad235684e6ee072927bc074"],["/post/7d1c86da.html","f4445952a847002738bb395e77f51af3"],["/post/7f3bcd7f.html","8359c5f7f0c8ab5dc404c8f34b7082f8"],["/post/8039.html","83d7cade795a1660a2daa5f432e183c4"],["/post/8050.html","1196c6ec82cbf42730510b1753855931"],["/post/8072.html","ac2b63c8c7334a638eedc518c9d15257"],["/post/8274.html","f4875409517d26c1e5304eeabddcb135"],["/post/8372.html","65a9d3216edb5e61398219b0e23b38d6"],["/post/8498.html","575912e2b1864ee67c7b57e3be682349"],["/post/85b4e13b.html","4a0f59c78661a377210fc069423334af"],["/post/912b2566.html","6a8794e65e8c0321c4c68c918df44486"],["/post/9187.html","136a6c63ebae4cad5bc59ddbd292a4bc"],["/post/9197.html","79662ea9f8a39a6f08aab6e5fc05288b"],["/post/94ceb2fd.html","10bc1ab4d903d01353a0a73598572be3"],["/post/95495db.html","99881deb73956745103a57aac3cc2b40"],["/post/97246020.html","b0e27ada7f33ba971a00d858ab0b2487"],["/post/a3a786d6.html","3983a7ffda8dfbffab500ccc9a0ce89e"],["/post/a444b428.html","57ec02effb33f61c503457fc02585ca8"],["/post/a50b8908.html","b6034bb542de8667ca8117e0ef51dd1b"],["/post/aa1eade8.html","a9508a8d7f3ee735843f1b22fb7c1c2e"],["/post/ade8c6d6.html","fd45aeeb9229fa7abcb1c7a35a589b0f"],["/post/ae8362df.html","89113eb186b2d8914fdfa2e5f8c0ce39"],["/post/b4c1d206.html","bc472f9b47328de322605a6b03200311"],["/post/d213fc7f.html","d22916fdbc5585bccb7941a7326960d7"],["/post/d431fab4.html","9ecae5a5b38634276133b97523f48be3"],["/post/d5381517.html","5df0c558e94955d5bfaea8187410a317"],["/post/e058ffd8.html","6c036faf44902e60f10ad024308a8b51"],["/post/e0f8cb74.html","b6e8dd7191189b42fd6a3b755ab71b40"],["/post/eefe591f.html","091dfa3bf0c78cd489d23f6f802fafd4"],["/post/ef296a07.html","c8a8d5baa35f2054855454404e2bb0e8"],["/post/f201f9fd.html","e0d0bb2b85cecb9a9bd373ca51b812c8"],["/post/f79e4123.html","4469d8902b27b454f191690ce874d599"],["/post/f8648a1d.html","31541e9086210ee30bdefe43f35d3139"],["/post/f89cb603.html","ab6c39be07249ea73d1926ffc90a5b0b"],["/post/fa288682.html","03b19b0fa9f889c9564f6be2f45d3958"],["/post/fb98053e.html","dc57c68cf1c036874acf096c34fccb97"],["/sw-register.js","2ded8fb5ba3b03dd564d865f722bc14e"],["/tags/AT-T/index.html","45a6c48d9aa9fd90011ed78ac28973d4"],["/tags/index.html","391d7831c6e35170a973ad1c8a5fb201"],["/tags/动态规划/index.html","926e12ee189bdf8cb58deab86f5f5f20"],["/tags/字符串/index.html","a45e97ac07249cce26703e35178b0242"],["/tags/字符常量/index.html","6ba097ad215f952ac09d5511481fd0f1"],["/tags/快排/index.html","80f048b11773abb674784d8265bcd344"],["/tags/排序/index.html","14a01e40016276e7b393183e4a385e41"]];
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
