/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","b556cd46949718b902ab7f5f8f34fd0b"],["/archives/2019/index.html","e91f4070e85ac5acd4715e4cf6078ad8"],["/archives/2020/01/index.html","03bf8cf7ed9c5e96126d9f309fe46d3d"],["/archives/2020/01/page/2/index.html","a8b126fa0fc00382578a22ab7f018828"],["/archives/2020/01/page/3/index.html","531385f157097891fb0ed4289ca21430"],["/archives/2020/01/page/4/index.html","0e20f748481966dffefef8247de6df9d"],["/archives/2020/01/page/5/index.html","46397617093f74b9da98fce1726ca9f1"],["/archives/2020/01/page/6/index.html","3b8832130a147d98b068abc94bf81032"],["/archives/2020/02/index.html","62a1047f13973661be4faf34388ae3f3"],["/archives/2020/02/page/2/index.html","b45d7724ffa6725597b2b1425e3e8ed1"],["/archives/2020/02/page/3/index.html","75bded99112df4cecbb3a409095df977"],["/archives/2020/03/index.html","cbe07a8f8000f47c96335bd4a231167a"],["/archives/2020/03/page/2/index.html","a1204fe8ac99391ea5c410776c42e262"],["/archives/2020/04/index.html","eeab4e73bb97a118bb395634fa2d237a"],["/archives/2020/04/page/2/index.html","818ca8074f76b691199c4b9af10931e9"],["/archives/2020/05/index.html","110684879c417594df7285601a0d8a2e"],["/archives/2020/05/page/2/index.html","6e48a91ee6f29d14970f475f3a44c712"],["/archives/2020/06/index.html","5890ad19bdc6b4ed1c286b5bc9b74465"],["/archives/2020/07/index.html","8778321341d88d62cad466cc312dabbc"],["/archives/2020/07/page/2/index.html","dc3059da8c75b29d7e1aac5c6b0bf901"],["/archives/2020/08/index.html","2a0e0ceec893de9fcc3e5dde8af62ce5"],["/archives/2020/10/index.html","76d1a33a85c3b2177002e4fac86c2f84"],["/archives/2020/11/index.html","6bdf6c40ec9c6327d9fa371ba50e2e69"],["/archives/2020/12/index.html","10c2073e2b6edcb4a31260aaf9462b27"],["/archives/2020/index.html","13ceef1a185f2470047b508a14b45e17"],["/archives/2020/page/10/index.html","52fd95b5c78a7d97027e2241275922a7"],["/archives/2020/page/11/index.html","4f19317970e7a33607448ca4fcaf4dd8"],["/archives/2020/page/12/index.html","d6fd821935c0e6efdeb58e0e2e3506ca"],["/archives/2020/page/13/index.html","265ec25810c8fa00d8822403bad007d3"],["/archives/2020/page/14/index.html","277a4b4c00f182b821bb3f20f9457a29"],["/archives/2020/page/15/index.html","0f2df11c4ed0c4e97d5a429bed6b769d"],["/archives/2020/page/16/index.html","92566c75fcdbeeb35ec3678320064d7f"],["/archives/2020/page/2/index.html","3ebdefffbe37e07bfd590f90bd125700"],["/archives/2020/page/3/index.html","ed53bea0514fd06b989821b14ebdc0a3"],["/archives/2020/page/4/index.html","3a600b781f2d72df403bac1113d34f9f"],["/archives/2020/page/5/index.html","6fc9377b53e8563b0f42c06293f91fea"],["/archives/2020/page/6/index.html","33e764f47b78e2cca0af2bb9c795659c"],["/archives/2020/page/7/index.html","ce649abea0f18a1b476ef885d4935eec"],["/archives/2020/page/8/index.html","35320a8b1de9e483062601f42b105662"],["/archives/2020/page/9/index.html","e459c2f1a36a248165154a3851ee9da5"],["/archives/index.html","82994ae02237adccd6233ff480ff4a60"],["/archives/page/10/index.html","c2daf308970ea217098ed4dcaa04cad4"],["/archives/page/11/index.html","1aa2136077d43221f4b021f4acd86ad5"],["/archives/page/12/index.html","9c203a3449765c9420d350f252673ea2"],["/archives/page/13/index.html","08bf69182e806a01cf672edfb76a0d94"],["/archives/page/14/index.html","b5f56dd19ddfa0abe5e1162f49166c2b"],["/archives/page/15/index.html","e44b626b204d29d7279937fc0fb552f5"],["/archives/page/16/index.html","16fc84a75e45962bfaa9e4175908a07d"],["/archives/page/2/index.html","2c7a9535bf460eeb70300816dc2898ec"],["/archives/page/3/index.html","8a69b6be83de2c6b079f3e4ba5c794b0"],["/archives/page/4/index.html","672438c9380347b2b7df804e6e29e067"],["/archives/page/5/index.html","5d1e28767d4c5f435200d385884ee522"],["/archives/page/6/index.html","0e531021d57ad67a9dd4482aa7359ae9"],["/archives/page/7/index.html","014f79e84293ad5062f210c824beeb94"],["/archives/page/8/index.html","8b05a48288b7f0ffa8a801bf7bc52821"],["/archives/page/9/index.html","d86cfee49ff86745824d533910096a15"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","b542dcad62195bc4f92a2fed737aa189"],["/categories/Linux/page/2/index.html","0df568cd25285c3aaec82378f64e9fb3"],["/categories/MySQL/index.html","68c111732aaee67503a5126b00789c1f"],["/categories/Python/index.html","f3e832f492d095aedd577479ef9edbc1"],["/categories/c/index.html","0138c1619b855ae97aa2aa6a8d4a10c8"],["/categories/index.html","1cd3ab394f53847c8f18a4712fa39120"],["/categories/java/index.html","1d6dc5d13df42de7cc9fd48b4fd71d7f"],["/categories/java/page/2/index.html","2573cf8bde7008e180732320a1bd6d74"],["/categories/java/page/3/index.html","cb1c769faee8f45e1203c86b6f6e9674"],["/categories/next/index.html","792c4e0f55a23af4829872078152e94c"],["/categories/stl/index.html","309eadec61d46192a521d67ee698f869"],["/categories/windows/index.html","fea698de652e3168f5ea3f3f9cb0e4f6"],["/categories/基础/c/index.html","fbc9373817499fe466c996e63ed95e2f"],["/categories/基础/index.html","de57a5591a07183f8c873cff488bb5ec"],["/categories/基础/page/2/index.html","23dd0fa991ab67e0cff53b5d1e2e8b87"],["/categories/数学/index.html","9b64eb91df982efefb82a50169a1c95f"],["/categories/数学/概率论/index.html","3accf72d1fba406accca617d48a8e9c4"],["/categories/数据结构/index.html","9d9d8d5ada55c0b842ef719d50c716df"],["/categories/数据结构/算法/index.html","10c3ceecb062194fc1328d185c5a7e2d"],["/categories/机器学习/index.html","d8a03421a4b88d3b8f72f0e4b91013ca"],["/categories/杂项/index.html","2f48b2eae32c839c4e7e44c592cf7451"],["/categories/汇编/AT-T/index.html","dba8c6960b8baa1ef1a9a54744a01ca9"],["/categories/汇编/index.html","57357563d5607941ae662f964c248faa"],["/categories/汇编/page/2/index.html","b1cc05b1e758c38df0fbc4f1bc27664c"],["/categories/汇编/page/3/index.html","986e2dc9f106a9acc95a27db32a95ac6"],["/categories/算法/index.html","a447ec0552c2fde361f8fbcdd028332f"],["/categories/算法/page/2/index.html","e134931362b2ab3c2df83bc8e86cce37"],["/categories/算法/page/3/index.html","f59875039dc1ae73f9a8f7fe5bc865da"],["/categories/计算机系统基础/index.html","ce53af24d528ebc1fed7a08a429155f9"],["/categories/计算机系统基础/page/2/index.html","8dceae2a576202201d00ec0b34b0e405"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0e18c034041f0c33d3530a65159a0140"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","94a22729bba023161b6aef73c0e545c7"],["/page/11/index.html","8129d558c95f86fec2ecc7c363893deb"],["/page/12/index.html","f5e7c55bf2986807b0f9a1f3594bec64"],["/page/13/index.html","086d1b68919826e05c5756d722e723a7"],["/page/14/index.html","b130009a9c80029d0134a7780d3a365a"],["/page/15/index.html","be2de52aafb62f61abb61e8cb2e04a3d"],["/page/16/index.html","64beac492019552f542aba0c58f785fc"],["/page/2/index.html","8875ea30858b1c56d51a132c643e8ca2"],["/page/3/index.html","adcef11fa1247a7f44d3d2802104a96b"],["/page/4/index.html","8da0cb7b93248df7be7f02fd930c38b1"],["/page/5/index.html","f7b28afce6bf550659f7512d54790a0f"],["/page/6/index.html","7bd3b58fa33416245e8af7edb338b6cc"],["/page/7/index.html","2f35ba37aa97435cbc40982fea5efd7e"],["/page/8/index.html","2395ff14d30e2f1474d3a513314bf1df"],["/page/9/index.html","39327dea5fc9676fab9a33101f13d868"],["/post/10919.html","e8b4047f8bc6d844556afa9d69bb74b5"],["/post/11051.html","2d1c0c3e53d743081804f2ce77541fed"],["/post/11306.html","71976ed3d4d142505260314bdccb3ff7"],["/post/11491.html","a33bff181285e26db4d2698d8fe9812d"],["/post/11799.html","0657304694eadc2ddebcddd3ed09bae0"],["/post/12334.html","733f229de90a11914ba42f743a5048e4"],["/post/1326.html","aaf6a54c29d3e1beccbf6fafffd90652"],["/post/14379.html","0b1b8fef73529ccd7c7ba2961b1adc35"],["/post/14511.html","7bd4ea79f2eb5ccfe8617a9730a7dfee"],["/post/15201.html","309fbac889c221d7b6f757097484dc37"],["/post/15425.html","f5cf7768c42e4593241f990984f1b45d"],["/post/16107.html","4f501b4d0eb9b3cc04986aa9db84f819"],["/post/17862176.html","6f0e0fd1825230acd76de696a9cc4792"],["/post/18431.html","8c886ab2890b8f3e7f9bcdbde694941a"],["/post/18912.html","1a6eb6cd245896aeba68f6b8333d2675"],["/post/1b9c8662.html","16d7434c6ee61083e4b5100a841386cc"],["/post/20198.html","977bad346c7f06e3dc45f93366425195"],["/post/20ff5ccb.html","13a4cd63acba653ac2473b0a9d0e9311"],["/post/21624.html","d833489d8bf17a3b3ca60cbac3a169a9"],["/post/2170659a.html","0f9c23fd3bf1ae2ff695b4039d273651"],["/post/22102.html","05a4ccf1e11ae93124b31e480dfd39ca"],["/post/22493.html","d6c9c406227ae13201ea6b0b9f648e23"],["/post/235252ea.html","c7cff790df6681347694a7c66582fafe"],["/post/25699.html","6b99ea0aa0f3c537e7c121e7e9575d3c"],["/post/2647.html","2055b7f11862d256ccc696ecaa842ce2"],["/post/26477.html","64ffc1b00d75cbf3adba565df2c62abc"],["/post/26671.html","aca12af43dd1c3645063c4f90f42d6e9"],["/post/26737.html","fbc488fcb30453305cb78e9617ae566e"],["/post/27045.html","dc068ce6b77b2b5af8585d05f506eb81"],["/post/27621.html","ff02c3565f38a9e7174853a88a76cb8a"],["/post/27890.html","5defcab565f274c4aa63b58e8026fb39"],["/post/27980.html","acc36f74075a89176bffdf2535a0f852"],["/post/280b588e.html","74ebfb0b3e6e6fe27e3b76dbb6088f35"],["/post/28579.html","4489cbcff66b6a70ed982b6d36e45e20"],["/post/28877bf.html","3e339338a19e26defc6950c55eb9a595"],["/post/28954.html","ab74b9aef13cfe4877e4f482e5620b69"],["/post/29378.html","68a4f02361a4dcdd8283c7d5b6c19277"],["/post/29949.html","96cbae8e5b092386ea96529051a93db7"],["/post/2ae43b86.html","9147783434d04dad69286852899be530"],["/post/2ba82a45.html","118bcee6f41388f9a42a31d0d3d070ea"],["/post/30072.html","e955b5694c9e03600c0a1ef53c00f01f"],["/post/30479.html","fbca10eee39e45e956cb4abba5bb81f8"],["/post/31a6b40.html","29d2ea666d37334223f6aa6c9246fb3f"],["/post/325cdbf2.html","b419cf69ae859e7576a47f01d0f402a3"],["/post/3319ed9a.html","4488dcefb11160fe26917599e005ab41"],["/post/3320.html","8981f832802080d33a4717f14acbd55c"],["/post/33cb1151.html","6e788a941d2d6497c72a5a1e3d0b28f5"],["/post/34811d5f.html","48757fee7566ee870a8d736a68a6fc97"],["/post/348d4e04.html","e85cfd02b516bbcbe6039f8a4541cc08"],["/post/3526.html","906a3a9dc7c76b44b45b2d65a133d939"],["/post/35532.html","41ed2ad220a5313c313059c4bebb02cf"],["/post/35848.html","1f9b5c60cf8483bbb68cdd91fa743e54"],["/post/37318.html","7ae21282f40d3d1b809de683cd84a66c"],["/post/37663.html","028d393886f9c72d1611f7fc038f0d8d"],["/post/38035.html","bac6f0fb452402065a30f6c13ab67e26"],["/post/38072.html","8ec4fc7b6e1e6347fca5f22f8a61a65c"],["/post/38145.html","5b9aeb6973819dffd6164d890f18608d"],["/post/39968.html","be4514f5bb9fe1b0f5350505c4b75d15"],["/post/3de4bc69.html","d86e69ace63b8dac8b859eb50d1f1710"],["/post/40583.html","6dbdf30970a6746e889ef912f1604188"],["/post/40997091.html","334589a5dfa0b1b269aa9ebd54d086b0"],["/post/41129.html","f38d9eb9f54118f7cf3f41a9876ae8b8"],["/post/41763.html","53e462f52133e918870aded09971ce16"],["/post/41829.html","47232ddf176c85a0a9e3fdd1f3959b8e"],["/post/41840.html","5ab4b2222d0e06ed675e812f0b132d80"],["/post/41e39f2b.html","7c9018f66bd20723a28f725836f4eb97"],["/post/43817.html","669e857ec465983642b695a0d00cac02"],["/post/43878.html","9cccb5a37bf2e2bad31845a59e5705f2"],["/post/44250.html","014120bfb86cb9d3eb0ffcf9ab4b0ce2"],["/post/44336.html","ca341bed8a41f43f83c6697baf6f0cd1"],["/post/44454.html","4f7a09ba5e28b6e40bb427a588f4299b"],["/post/44487.html","3777d47b32e8ba7e7efcd660f4de4ef1"],["/post/44914.html","136d207d28b2a69f25fe32730456b47e"],["/post/4551c130.html","28b27d76b4d74ccdbcedabd9a84cf11a"],["/post/455a4c92.html","c721f7a9584cd6e5bb4f9db77837b463"],["/post/46466.html","dec001527eae6d91270a831b9cfc38d3"],["/post/46925.html","6116fb4af2c7f1074f4ee0f7f3957df5"],["/post/47075.html","0a89c36d12326bc35aa3d32807294adf"],["/post/48220.html","1b80f607791a078fc348502b2272f923"],["/post/4b1879e3.html","f41dbac47f229fc79fc56493d71ae819"],["/post/4c720881.html","ef34aed5911eb55c9a111555e266d205"],["/post/50daec4.html","412a2942fda4cee860294bcff96e0cb9"],["/post/51491.html","57ceee3c394032aee19523c6d52de554"],["/post/51e63dcf.html","f9de4b32961de66dcda6d902fe664b52"],["/post/52078.html","3e90c649b5f54d9ea47471bca07fc188"],["/post/53677394.html","90221f690a2ff9b132b51bd9ef10dcbb"],["/post/54300.html","a9d0fc4c98fe09113e967411dd9076e4"],["/post/54612.html","23365c9d648d89d730cdba8889fe035d"],["/post/54613.html","c45754dfcb669ea559329251ff2a04b0"],["/post/54708.html","aa5e4dc42326f34f92b90c45800c05e3"],["/post/54778.html","cafd74f26fde359ce57a356cabb912a3"],["/post/5490.html","84e378eaed27516f167e296a0176614d"],["/post/55046.html","960dbb70603efd88bdfb488fd13c7ce9"],["/post/56929.html","e8e19ced1c24ac26a8c3ba7fb86523ba"],["/post/57339.html","4d1e68e8db068493868c0e02af895fc4"],["/post/57449.html","003fc285a551ffc802d5ac70b5321b67"],["/post/57453.html","8373fd04f4f001e1c59ef36572341977"],["/post/57671.html","dd4fab5076c3757b99dd4bdfa9bacbf2"],["/post/58313.html","a643036a5d7baada5f0703e0a51d08df"],["/post/58481.html","6d6f658b77e944eaec09c84b58c8866f"],["/post/58986.html","e10bff52cef20a7941a8a194283677a5"],["/post/59431.html","c1739fbe4e5214ef5f6b00923ffce360"],["/post/5951da65.html","a3f0dff1673ee13b26622f6d1de64e78"],["/post/5be7e977.html","d48b0854f16645bf1ea729672ec8dee7"],["/post/5f9e4eff.html","e75cdd22198786d70a7918647a547358"],["/post/604b49d0.html","e332d4fd8e5791a3afb8f2cb59c61ce0"],["/post/61312.html","6d9372d4a17c91679330cf7b795ba74e"],["/post/61738.html","e73dc3414bff1beb4441bda8a0e948b6"],["/post/61809.html","6f6ee170e28daaeb51884e8fc7b29dda"],["/post/61eaf19a.html","3e7d18ba80abf4733861447832d0022a"],["/post/63002.html","e5ebcd018437932a98ac2705a79d8ae7"],["/post/63711.html","bd61f0657d1c318089409dd8b0d830e4"],["/post/6587.html","57ccd1e103ce183c69430a21bc17a74c"],["/post/6589.html","34a9c46119c29708da13575ab0e722a6"],["/post/6880.html","fbefe9f91ee7d7a01a72559c2fa9be18"],["/post/70263071.html","29f371baa1641594cdef6a5f1f8016d6"],["/post/71038564.html","f0d067d5a733abb7a318fbf147148654"],["/post/7119.html","0229513b62b0fb8bdbd5edd58423799b"],["/post/74e7fdff.html","5ed60b052c417870cf6a854375b0ee5c"],["/post/7502.html","3c9e7866658b6dcf869f077dafdfb558"],["/post/7564.html","6e00045e416a234e2094ef7f10cd4dd8"],["/post/766f9b60.html","6006dda46bf6252bbac9c880965efe83"],["/post/7ca31f7.html","3d378d34cbd2ce0109947e37bf4e8efb"],["/post/7d1c86da.html","d782ec75829bde78909faec0a33c7ef6"],["/post/7f3bcd7f.html","84241ad79821ebe8c33776f640bc33a3"],["/post/8039.html","e418aa18e0a6b6a5d0c86d28a037ae24"],["/post/8050.html","0b0bad1d07e6594b9d491cb3588f3e32"],["/post/8072.html","15c44147db2e20af40c4bb176e765f66"],["/post/8274.html","0eb7e4ff8c4dc76ba8f5f492a750fb42"],["/post/8372.html","b82c80b88a441996563b973eb34389cb"],["/post/8498.html","ef74ddcc4d0d2ee99f2d2e5581c6d5a9"],["/post/85b4e13b.html","9e413e6d5ad3d984e59c4a574623fd0c"],["/post/912b2566.html","bb65ea1b75bca49ce2df0b995d38767f"],["/post/9187.html","7524d4cd1f2b81e7d24d579284360ef0"],["/post/9197.html","46cddf39f00bfcb174d7e7fc90d3d97e"],["/post/94ceb2fd.html","ffa7bbcd34c235e75c700f261a1b2cd3"],["/post/95495db.html","5748bc1e89020265a9b116e4e3e4596e"],["/post/97246020.html","1bd14be70bb46f0f4cf2057c2610ced4"],["/post/9954ba8e.html","f4e8ca0bfe2575455af17553b2a199be"],["/post/a3a786d6.html","fc8ce352ed58eaeec285960727d3373e"],["/post/a444b428.html","0ecdee8d1d2d3935a885eeee8c90a6d3"],["/post/a50b8908.html","a88e52b5f3e76f78a76d36ba5057440a"],["/post/aa1eade8.html","92fda59ad3f1feeeb7de7ce72b7f36ba"],["/post/ade8c6d6.html","7a4dd2c8c4fb47dabc7392b3a4c971c6"],["/post/ae8362df.html","b587c2eef10b56eb4134d1494e1f9d39"],["/post/b4c1d206.html","221d514fdfecf031febe85caa59cc140"],["/post/d213fc7f.html","1131b92520cf803573c3f943cd9e5fe9"],["/post/d431fab4.html","d6c0de84b278209b0d038426dd502460"],["/post/d5381517.html","a8efdd14658ed98669d860b7f5285322"],["/post/e058ffd8.html","df70abda675a17981503ccdb2cb086b6"],["/post/e0f8cb74.html","d933f0f4198909ea874e815a546e4c3d"],["/post/eefe591f.html","cfa8cf1d7ba1940af9e8ed190c860a58"],["/post/ef296a07.html","a6a6d7b7d5b6429d5159b42b9097ae1b"],["/post/f201f9fd.html","8975ae147f2db7d8bd9e1e4c8b53e853"],["/post/f79e4123.html","9469667e3f16adc792996ba5df67fc16"],["/post/f8648a1d.html","6b9e38a1799fe5c59bfa50e7186d7874"],["/post/f89cb603.html","1716a06c825aa6e219da27c98ff31566"],["/post/fa288682.html","e322605c7a58083a2ada3e8ff87563dd"],["/post/fb98053e.html","742cadb3508338cc342e0a8fde2ca952"],["/sw-register.js","b01430b8dbbbb7eb2acca784680d8a86"],["/tags/AT-T/index.html","daaf647f79fcf9ba1a9259e876d6e0e5"],["/tags/index.html","c1a521daa0a70f334f76d97ff02724fe"],["/tags/动态规划/index.html","100aba699e4bbaa4c04d9cfac8c1b480"],["/tags/字符串/index.html","3408d4e2b6c6fc78e018afbae4304ca3"],["/tags/字符常量/index.html","483ea7a50249f40431c024d3898a189c"],["/tags/快排/index.html","7d2e397a8a5851ed57b7e4f76f2abc4e"],["/tags/排序/index.html","30340acf36bf439278fe20b8924c9956"]];
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
