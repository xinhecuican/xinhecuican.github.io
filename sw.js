/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","2c836b27c2a0c4af7d699e0e4e6af751"],["/archives/2019/index.html","c0bd5ccc82a646e9bac349b7576d5e3a"],["/archives/2020/01/index.html","e0af2f1628ea92526386c6a0fb6fe6c4"],["/archives/2020/01/page/2/index.html","2651918011908d1060c0d113c96cb097"],["/archives/2020/01/page/3/index.html","d1777bc1ac224d30ce4564ce9f6a7c71"],["/archives/2020/01/page/4/index.html","7ec8068ea5d876b6b29c7bb5f3e1ef0e"],["/archives/2020/01/page/5/index.html","b0679cada04001936c5888811cc45f51"],["/archives/2020/01/page/6/index.html","0389c7c91cb97fa0c6cdaf4914fddc6b"],["/archives/2020/02/index.html","cbc0b27b332b89eeb5e88d7901963c40"],["/archives/2020/02/page/2/index.html","1ceff489f3ffed723981afefdbe09538"],["/archives/2020/02/page/3/index.html","3a4ff2f6b0b30b93b234ebe2ea2e9909"],["/archives/2020/03/index.html","d1a9eabcab65209a026a82ffb8dd6b73"],["/archives/2020/03/page/2/index.html","cda7060b8302245efa3d074d51045f66"],["/archives/2020/04/index.html","31e2cd483ed84b1661dc18fa647dc429"],["/archives/2020/04/page/2/index.html","31638d3033e5fe97915451262e3f2824"],["/archives/2020/05/index.html","f472ad3d8d4486e41d3602ab1506f79c"],["/archives/2020/05/page/2/index.html","2065fba4f125e5d430c759a28ff6c892"],["/archives/2020/06/index.html","22bb53db498ba1b8ad1a587c2ba5f35e"],["/archives/2020/07/index.html","5a1c057c5996ffe972afbf5f4c929ece"],["/archives/2020/07/page/2/index.html","72756d2f26ed371eed45e3d59837e219"],["/archives/2020/08/index.html","b5b35dced66383104351fe2a6daef4f2"],["/archives/2020/10/index.html","39afb9c3d8b43c6289288756bcd7089f"],["/archives/2020/11/index.html","4009bc42a0f195cc486a770c54a9eebf"],["/archives/2020/12/index.html","0a871245b111de2a9c4d0871feeb6c3f"],["/archives/2020/index.html","539d728b2540b971c609dae29a9bee10"],["/archives/2020/page/10/index.html","aaf254e57a1ef79fe51b5cf13ceeb4d4"],["/archives/2020/page/11/index.html","45ff783c2b9a10a457469937d40a2d3e"],["/archives/2020/page/12/index.html","726bb41da07d35cab12d30329fe087ff"],["/archives/2020/page/13/index.html","3e5471debd59297d21360d1717033126"],["/archives/2020/page/14/index.html","8fdfb2ebb45debba892e9630c42eed2b"],["/archives/2020/page/15/index.html","5517383c6f50b6b690d59a556a5b71ec"],["/archives/2020/page/16/index.html","123606902afce3a50bb7e877a2d2d716"],["/archives/2020/page/2/index.html","02711a7758b1dce1ad26728e448b5804"],["/archives/2020/page/3/index.html","0a77994e5e1f0fd8976c6d91a7b3f47d"],["/archives/2020/page/4/index.html","8e1d4eb47f0910996b891ae57b13dbd1"],["/archives/2020/page/5/index.html","c71680d4059bc0a1d01b66ac6059cf34"],["/archives/2020/page/6/index.html","136a438d9cf624ed30e8a46f787f0380"],["/archives/2020/page/7/index.html","162ceb4eece7a530fcf22635c23e8a56"],["/archives/2020/page/8/index.html","2d2a8c87ef205007f87f68ea41211e24"],["/archives/2020/page/9/index.html","2ebe5b5bcdfea9d26fd86187780379cb"],["/archives/2021/01/index.html","c52d25797aee21e0b0c06c6d709a2461"],["/archives/2021/02/index.html","5e6b985669a6da8b1856719dd1e5528d"],["/archives/2021/index.html","16d8fd65720f1a41e21bd2c07785b0b9"],["/archives/index.html","ed91e314f5175d80336c49b5e014a526"],["/archives/page/10/index.html","076b3406d86a2c3c387720bc97311644"],["/archives/page/11/index.html","15ee9981bfdec95b0447b2bca4fd2c7c"],["/archives/page/12/index.html","f871a273f3eeb8ee809adc4340618639"],["/archives/page/13/index.html","d23ee93cdcbd2cdcdba144dd431f9f48"],["/archives/page/14/index.html","250c6ef2e57821b52e339bd8de6d5e48"],["/archives/page/15/index.html","9fc7881b50dbf48f4e76975f61ae8fd7"],["/archives/page/16/index.html","74bebb0e0ec4b5ef65e3807312b8e60a"],["/archives/page/17/index.html","11e7bad36442edb1d02dfc723dbdd574"],["/archives/page/2/index.html","3932f6e8082cf820a2483bfa66686de6"],["/archives/page/3/index.html","d250bad8e2a1fc1accee979dffe3abd7"],["/archives/page/4/index.html","39731f0f50f813783319464a5b578c06"],["/archives/page/5/index.html","e22569505928010fd146879ee6e5499e"],["/archives/page/6/index.html","0fe5c7f1e2999d4ca6bb46e2f5367326"],["/archives/page/7/index.html","2834a7bf0639815586452fd85271edac"],["/archives/page/8/index.html","a104c493b7a561432e1929ea95ea8bbf"],["/archives/page/9/index.html","e2676f009710d0abb0849935cc4f3ae8"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","93262bc1faf8ebd0dbc600dee2cf195e"],["/categories/Linux/page/2/index.html","8dee293fc2a62c5d72b38bc0ecedd00b"],["/categories/MySQL/index.html","00d9ed5b2d8814457091dbab4d69b586"],["/categories/Python/index.html","86b4ca3f64a237b95ea4eb4607263212"],["/categories/c/index.html","1f70e59761205c57c1f29a471163af86"],["/categories/index.html","f54f90cdec38e519b5bb794802bca283"],["/categories/java/index.html","55f7d2879d6d8edf6f986c6828763b6a"],["/categories/java/page/2/index.html","63d7198074bfd0d9d64565be045dc554"],["/categories/java/page/3/index.html","29dc09fa6df4382d920dceec855a6236"],["/categories/next/index.html","5e89b2ad0eefb79402c588c6f029ce32"],["/categories/stl/index.html","2b58b7b73a0561c2b978759f0f3649c1"],["/categories/windows/index.html","2a8c6ee4923eca9d3c42184d005eb15c"],["/categories/基础/c/index.html","522f9ca73d57773651b6e2a87c6e1891"],["/categories/基础/index.html","2d5ddb912fda4168d9de47ac3d41804c"],["/categories/基础/page/2/index.html","acdc2d28f2c01fa07de32b15acc9a54e"],["/categories/数学/index.html","d1ea5b6790c934092f8e97d4453067cc"],["/categories/数学/概率论/index.html","7903c9a7e084c8de70fc32c8f21b281a"],["/categories/数据结构/index.html","731967750bc22d1dae009460ad2de3df"],["/categories/数据结构/算法/index.html","d7f05cb596486b950c2426d77bd3f785"],["/categories/机器学习/index.html","a2017d710077c5962da48ee0bb27d162"],["/categories/杂项/index.html","b035e66c1f26e89c87366029832202a7"],["/categories/汇编/AT-T/index.html","e596067b66dee44a550f3e13b6dd78fe"],["/categories/汇编/index.html","709cc84a7165b970beabb85f76fba197"],["/categories/汇编/page/2/index.html","4d4c3e1c918e11352e4597b6e184f040"],["/categories/汇编/page/3/index.html","7e1e5b15ddb1c7011df675eb721aaf6e"],["/categories/算法/index.html","45e7f8c214716896131067d994abe343"],["/categories/算法/page/2/index.html","bb27ca4130d5caed78b36b459415e86d"],["/categories/算法/page/3/index.html","31e1c99df7f86405eb6cd1d813d1fbc4"],["/categories/网络/index.html","03fcf31202e46db8511e7b07b79e2540"],["/categories/计算机系统基础/index.html","e0531e10fc7487785e5493b52cdd6b1c"],["/categories/计算机系统基础/page/2/index.html","63d355bf12f5efa1f5ce0190534dcee8"],["/categories/逆向/index.html","5ed959cca4b0da44971c8a27257f33f6"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8cf4091a2c4955653d735cd7a38e548b"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","c8d5c061ea92a255f4aa413ba459dd69"],["/page/11/index.html","2c02223f95f6c56648b479cf156a7595"],["/page/12/index.html","c62080ff6cadf62d0ae4068d7f6544c7"],["/page/13/index.html","df3584bbef9d9db55885d56d0476d383"],["/page/14/index.html","ca027aeef8dafd6d6c6169c85802a594"],["/page/15/index.html","eb9c3e9afafc461dff37e0632a5b9e7f"],["/page/16/index.html","5ae41d159c3e92c0c2a39b8979d5b0ea"],["/page/17/index.html","fdbb86d6b16b71922a8f5899080ef760"],["/page/2/index.html","aa54e91714e1ea293f098f31f476b264"],["/page/3/index.html","19b4cd4fe1d0889345edc679b6977448"],["/page/4/index.html","3ee31066f03c3705d03e6b65c77e832e"],["/page/5/index.html","a9e8c4b59842ba7ac004d3e477e0890c"],["/page/6/index.html","ec6f0a9e0180edb30d35c411536941df"],["/page/7/index.html","9a397c05bcddbf0247a00f47e2d43c13"],["/page/8/index.html","0da29b32caa3e4718a7dd5fe4e547063"],["/page/9/index.html","ae1c86aadf1431e9e37639833806af87"],["/post/10919.html","7eb5a65baea76d189f7e225aa0a15605"],["/post/11051.html","02628a476ce636de4164f2895deba301"],["/post/11306.html","2e7c5add7fdbd18498e0e8b5261e9c57"],["/post/11491.html","6ad45cc067ef34a2e373bdd1f4919a30"],["/post/11799.html","e668595eb556ce82428604bf829a987d"],["/post/12334.html","0cce9bbbd97b8cd3797a4dbd66d6b119"],["/post/1326.html","3741d76055fcbec6a986419b9183df76"],["/post/14379.html","010dca0ada709487877f5b66dda7107d"],["/post/14511.html","7cc87385cf54f32d46258dfcb037dc57"],["/post/15201.html","f9a3a7790815ddc59882803985b2be2d"],["/post/15425.html","fdeba5d946d5fdda0f085f032307f0e3"],["/post/16107.html","61302852fed41fa5ea243a95f523380d"],["/post/16e2846c.html","0a5eb1e4fb563b7d69c17d22882611b8"],["/post/17862176.html","09707995160cac4abece906255bc6153"],["/post/18431.html","21c8ca352f63b66b07f03f53b1b2c1ce"],["/post/18912.html","90567b036ddf74cc2dc6c712a040d39e"],["/post/1b9c8662.html","8b53a0eb531929811f83b458ebae5947"],["/post/20198.html","d1235335948f9edeaf7cb2c0540f1205"],["/post/20ff5ccb.html","966d069b242e1bff8f2877a135c38a40"],["/post/21624.html","ce510f0ac49735d68dd185c07a157a03"],["/post/2170659a.html","43c8951f45067643ea81e443793f934a"],["/post/22102.html","1e67bfd7b1fdccd1197c6025671891f0"],["/post/22493.html","918a9ccd0969d4ad72267e7a51b78cc3"],["/post/235252ea.html","84f182954326089abe58ebbb400a1654"],["/post/25699.html","32aa2ace173e6d3218ccbbbca92ea486"],["/post/2647.html","b70920b79e894d26176d22de733db5cc"],["/post/26477.html","e5d5a0cdc48378ace36801b25888e62e"],["/post/26671.html","ceb56fe3ae4b8d5fc9105edba9b24ee3"],["/post/26737.html","046fc3569bd2d8f841d5446b46836925"],["/post/27045.html","4a67c17d7402aa7d87117d2cc7cd25f2"],["/post/27621.html","c8d2e932c6a80fd16738042c29481964"],["/post/27890.html","2c48273b89dd39832785a2765ea52d1c"],["/post/27980.html","9e15a6694627f83f44be7026ada7f8e9"],["/post/280b588e.html","fdd4f40f0a69c072fb0f2bb35dc8ee8e"],["/post/28579.html","14fa43e2e45b6556b45b1f9bc263cb83"],["/post/28877bf.html","e19c30b0546856aaef5100d6f2ffcdc7"],["/post/28954.html","6b74bfaf75954e9a594f3b3c1034a792"],["/post/29378.html","1f9d2ac255357fe21cd192c55f5209db"],["/post/29949.html","4d17b8edd50682c128244fe100cdc980"],["/post/2ae43b86.html","906ea9b7730b319832524101f771ca99"],["/post/2ba82a45.html","47fb93d95b65dd5aa6248f6dc7bc5a7f"],["/post/2cad8b04.html","82a58a6461eb3a429d69ef5a348da0e1"],["/post/30072.html","d2f246eed828e563a6013ff5f05da0a8"],["/post/30479.html","f965426695f75894514af14492768699"],["/post/31a6b40.html","5db18ea2f81d96d987835cf2529c6ab4"],["/post/325cdbf2.html","2b3d8ef4e3ce7dd837f43d23973191b4"],["/post/3319ed9a.html","7e457344ceeaa1471d5b6285cd816d3c"],["/post/3320.html","ea73494aab9de605ca9d114a6cddc6c2"],["/post/33cb1151.html","a204a8619f7cc1d4225766a3cead5398"],["/post/34811d5f.html","50e6e2ef94b13be7fcf1318ac7a3d04d"],["/post/348d4e04.html","5e79dadc0c8f5920b3cc94ad8f5cfc3a"],["/post/3526.html","3964f117ac29fc7593dc72c6e45f70c5"],["/post/35532.html","b06fbf52ddf8aeb9bc0d41e11a0db479"],["/post/35848.html","16ce26d08850d1bc277204050e78569e"],["/post/37318.html","9e6da5841ac2a7d441ff795e7e6a72d6"],["/post/37663.html","7e263143d1686f945dc5b386d9375475"],["/post/38035.html","1d9bb17ac5edf6dd634482049e1578c9"],["/post/38072.html","bba92eb68f6279890ef47c2547ec1507"],["/post/38145.html","f1e51d228df6b3dd808ffc96ee3acf4c"],["/post/39968.html","8727c903527ddb5ddc37280a1e806964"],["/post/3de4bc69.html","e4435bc4ccb39a389f0b29d40182c518"],["/post/40583.html","0d822eb9ca995adf1294303a4dfaa302"],["/post/40997091.html","bb8cdf2ec29a40fbfef6da6e491dbaf8"],["/post/41129.html","6fd498eb8f32542669bf18c3f52a6260"],["/post/41763.html","e280274d9fa4638eff7ac1f20155f836"],["/post/41829.html","10fcb682588d1529a63cf45b399f3910"],["/post/41840.html","316e6bd9d8c578857a047dd3608d5e88"],["/post/41e39f2b.html","365833c61ea618b491821d2be64e51b4"],["/post/43817.html","d4c5567a751933c8e916463e49b5b5fe"],["/post/43878.html","a7bb3245fa550232ca004a046f5e4681"],["/post/44250.html","5edecb67bb20d7ed19a25fd3e05f05c6"],["/post/44336.html","2d5c4f74b57a23c0fd26f2bac5a673c0"],["/post/44454.html","06e656f8d300fd07b45ce4b9b9022192"],["/post/44487.html","49d2dff97d60afa2163e4e55cd95f0e0"],["/post/44914.html","503a8c4e65bf824ebb95d8e2c3d397fc"],["/post/4551c130.html","cdc8765addd82ec2ebd59cfae48685ea"],["/post/455a4c92.html","32237a41c5d42b60416c0ca27c7b2b4e"],["/post/46466.html","1eaf03d6ecc8768653075a943d011e85"],["/post/46925.html","383653dc78a4533863d2dbefdd305720"],["/post/47075.html","bfa73f2daeebf3ed81f750448bee01bf"],["/post/48220.html","de5aca87c92f5b4b6be3c68a70dd869d"],["/post/4b1879e3.html","fdfda387b29337cb02f1844c408889a5"],["/post/4c720881.html","697231b7620bfc41a2eaa6e6445da738"],["/post/50daec4.html","71c007d16810c10efa42f3d76ffa61b1"],["/post/51491.html","8e168917d26981149c6237feeeb0e3ce"],["/post/51e63dcf.html","3d53713328bfb468f7bfd3748eeb8015"],["/post/52078.html","22d88d37b0a719357efc381305d585a2"],["/post/53677394.html","a8ae766b54aa48e33c844a0194cf61b6"],["/post/54300.html","733ac60919fc81e883cb564b847fc6ab"],["/post/54612.html","910ea4afcfe3c8f661d635c59745f85f"],["/post/54613.html","d2fe2b2d7bf7d33c3172436fbd1fcce6"],["/post/54708.html","df201616f69ce7ed26b7ab404f985351"],["/post/54778.html","d680ea3dc2735cef26f8db16484ba8d4"],["/post/5490.html","34d1c93e3929718c62d87782c7fb91ba"],["/post/55046.html","c4bef9c7d21ce635d2d256a7d185dd51"],["/post/56929.html","367a3f36b162cf5b1806a083b75bc3bf"],["/post/57339.html","54c6df309e86fc7d23e7cab26c69a5fd"],["/post/57449.html","df9300fa32f366eba8b219ac589b4faa"],["/post/57453.html","0c42c86a30d35c8dffa411ee6b4c9fa4"],["/post/57671.html","1d47ae0f2ab9a2d47ea634d2f63eaa0d"],["/post/58313.html","a9573ae3608b5b349636501cb3b31352"],["/post/58481.html","9c5da017739f7c11c41d429ffce0a3d8"],["/post/58986.html","1865a1621a68988417942f95cb6cedcf"],["/post/59431.html","caf00eee921595a33193cbfbd93747dd"],["/post/5951da65.html","55b2e21d4355a13ec02976cdcc5c1359"],["/post/5be7e977.html","5063698d82516b5a397b8a08ddd747c9"],["/post/5f9e4eff.html","6975c667560e25575e3972d06ebb4570"],["/post/604b49d0.html","ca00aafa9a692c9acd632bb378c6dfc5"],["/post/61312.html","9005a8f96c5d0317b6fa005c5769a4d5"],["/post/61738.html","c399147d973241f257f5b31e2a91e935"],["/post/61809.html","883e18aef42ff6b7d18b0d2b5f074c95"],["/post/61eaf19a.html","782d19e4ee525a88ce0dd85626faac1f"],["/post/63002.html","846a4c310ab535c57335d9899600b5ab"],["/post/63711.html","8ddb8b6b78afcae6e28f4da174f48cd1"],["/post/6587.html","20008d5ff789248b34c7c2df7a7920b1"],["/post/6589.html","fa2dd7fb61320206bb1b7ed14cae3010"],["/post/67454659.html","38da9783b425aeeb88d84c5969f6e614"],["/post/6880.html","ba56cf08915d514e012cd2bfe4e6e2f5"],["/post/70263071.html","665d9bf27bed107bbd7dc2ba62d90e09"],["/post/71038564.html","16f23cb1bbc34d464ab801eedc7aad03"],["/post/7119.html","71836954b34fddf1b1c445035aa440bf"],["/post/74e7fdff.html","a3a8a54b0fc5bf81e3707456fa9c0ad3"],["/post/7502.html","7abbee1ab83474b414a10f36046fdab7"],["/post/7564.html","b52b7e6cef8d2e6b5919c30f3f205acb"],["/post/766f9b60.html","9409045b71ca0c7015aead20d5eb9adb"],["/post/7ca31f7.html","4e957e1cff1e3be90340278ce0a2942d"],["/post/7d1c86da.html","7e8adff1a714960a552026c4bd003a7c"],["/post/7f3bcd7f.html","400f34388d21a6e897fc45519da5610c"],["/post/8039.html","7c36db912e835ca4f8266e25f0ffaf5a"],["/post/8050.html","7ad43736ad51d293d7badd7f997a4ac8"],["/post/8072.html","0c3b386049419355b1f145fa39e6a7f4"],["/post/8274.html","45198cf5a37e8e2d5a2258b628971bb0"],["/post/8372.html","8c076f47639cd068d7c7bdf6d1b43bd9"],["/post/8498.html","585e187419689e22d10c0605e33acdd2"],["/post/85b4e13b.html","e57e621508f23dcbbc7faaeda0f51c21"],["/post/912b2566.html","640bb890a0865ab5b163296df35c8577"],["/post/9187.html","b58cd0d710afe83c92b83ea4e4ec7bb9"],["/post/9197.html","ac1724b8d5dfbba0217d23b7cd0d3f37"],["/post/94ceb2fd.html","eb40d1df1c8cc55daca2e7c8a9e02085"],["/post/95495db.html","3678bcfd28bfecb8e24f094a82ed0d0d"],["/post/97246020.html","6bd7466409d5475807c2ed1121b41f5e"],["/post/9954ba8e.html","391f83d7ed10e26a3b0afe4853da296b"],["/post/9d855db5.html","3cf8a26a970b3e8bcc7c059584e4d23f"],["/post/a3a786d6.html","cc4f2945234794035a2532b05e9458d6"],["/post/a444b428.html","ddbf5ee4a7914155f4ff8ccc951b747a"],["/post/a50b8908.html","09590b0fa01ac58113e7f877376f0a44"],["/post/aa1eade8.html","31cfa2fb0d5d27e6318faa0f6c63e561"],["/post/ade8c6d6.html","36ec99778b72c39b3f1f2cc3d5e40b7c"],["/post/ae8362df.html","c92c8cbec5509c7907856618bbf229aa"],["/post/af3eed3c.html","af5510d74dde48ea492c98a9d7a96f38"],["/post/b4c1d206.html","8551ccd17c484e3f7a56117b470ba00f"],["/post/c82a1c99.html","86ba055bcc85718e84433a5e816019bd"],["/post/d213fc7f.html","daf79e55c66de6d3eefe99b27de1e04a"],["/post/d431fab4.html","75a102aab1ce8ce30dcd7c00f48bc8f1"],["/post/d5381517.html","49cf2b29f9c936b7702fe7e2e245dd86"],["/post/d94f88de.html","416e8cef4ef0d60c2ae5c038a45df0c1"],["/post/e058ffd8.html","470a80122bb90151ab0a6e0badf7da00"],["/post/e0f8cb74.html","f63a9eafb1f4b663757e95d6fa32ce37"],["/post/eefe591f.html","372f57b52b932352ee98e52fe8d3aed9"],["/post/ef296a07.html","9ee32e1f8d852d1cf45e444d3a759981"],["/post/ef3a3fcc.html","058390e082cf85a789889f047d0cb478"],["/post/f201f9fd.html","25c0cc19216c084f540d13498dc8bbba"],["/post/f79e4123.html","55df7dfbe3012ff78994ffc25717c552"],["/post/f8648a1d.html","65d11a5678689c806f3b8ffbd2cf9b7c"],["/post/f89cb603.html","3116742685cdaf819e03b7a07acd0bfd"],["/post/fa288682.html","90a8ac083f9034fae2061d2e87541b8a"],["/post/fb98053e.html","08f16ca7923da0cc9724050f77a08448"],["/sw-register.js","ca0bb49007c4ccc8e62a2f5c369b5c3c"],["/tags/AT-T/index.html","779a6a04c0310c9872f45762bdcf4a5b"],["/tags/index.html","cdc69e597107ed1a7b95d2f5f9425426"],["/tags/动态规划/index.html","821af48cc36e9e3744f68352a412d176"],["/tags/字符串/index.html","0f9d0da82f3a9797809bff3937bad89e"],["/tags/字符常量/index.html","403f2e87ffe857bed6856abf98948e34"],["/tags/快排/index.html","6a34f1067e6687246463cc687a5a44d4"],["/tags/排序/index.html","7cb07dd30a482bfc49fab5dee06d817c"]];
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
