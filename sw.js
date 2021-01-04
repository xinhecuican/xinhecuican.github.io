/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","629ccb2cfa8445ca5be4eef45e01a3e4"],["/archives/2019/index.html","5a48247f87334dd142a7c8a3398c485b"],["/archives/2020/01/index.html","13b98eb9dc43cfb19db28c2355023bcd"],["/archives/2020/01/page/2/index.html","d171b6e5f4684b18a85cc00d667bfc61"],["/archives/2020/01/page/3/index.html","a05ed74eba55bd3c8f237847c5250260"],["/archives/2020/01/page/4/index.html","c5daf58a2e987040aecf384efcbd1c74"],["/archives/2020/01/page/5/index.html","a25215bc0c11ff234f667dcb5f05da14"],["/archives/2020/01/page/6/index.html","ba230238ad2acc7f89375bf37ede6c42"],["/archives/2020/02/index.html","b543f21f9bcff2e9a1cdd9110fa4ddc4"],["/archives/2020/02/page/2/index.html","a29ec03e5b1dbac780a12703f7f96651"],["/archives/2020/02/page/3/index.html","907edc18bc20cced83939d21c0ad57b7"],["/archives/2020/03/index.html","cbc9b7e67fac33e5d5945ab795de414c"],["/archives/2020/03/page/2/index.html","86509e5dc5318fc3dd2975612a37283c"],["/archives/2020/04/index.html","950e0c810bfc33b8eadb560edb8a413b"],["/archives/2020/04/page/2/index.html","5136a10587e9371bc58ba43f340b82f8"],["/archives/2020/05/index.html","3beac4fc8b09d28b9913b342baa05b26"],["/archives/2020/05/page/2/index.html","3d7128d3ee64693ac835507bc41b4f75"],["/archives/2020/06/index.html","28afd54be0b08040e8cb2e0739c167f6"],["/archives/2020/07/index.html","4eb1932e38a9c0e867acb62a21e41d0c"],["/archives/2020/07/page/2/index.html","4f0306fb6f1350ed36d7d60212f120af"],["/archives/2020/08/index.html","e19b57e547a51f4b78f2d7adb92f9132"],["/archives/2020/10/index.html","9f21380b25490c332f4f0b1a33343735"],["/archives/2020/11/index.html","9fa49eb5e17a1ec6dc38b505ce41de1d"],["/archives/2020/12/index.html","22e607705e6eea2e22adb493ce986538"],["/archives/2020/index.html","5ae2ec128413dc4a0aa09eb11f8b6ee2"],["/archives/2020/page/10/index.html","0defe2733215ce51c5310a641a695108"],["/archives/2020/page/11/index.html","11066dcf58f904f9cc571043bc43711e"],["/archives/2020/page/12/index.html","555d8c711c3e039965b6689ad24a603a"],["/archives/2020/page/13/index.html","a7844529a2a0ae317451e9a7339c8a6a"],["/archives/2020/page/14/index.html","6605f59b3f5a9a044c8319d0616e4b5a"],["/archives/2020/page/15/index.html","e4d60ca8a244c80ec1c25d3263c643dc"],["/archives/2020/page/16/index.html","6117d394e1473a74ecfa694b9536b29c"],["/archives/2020/page/2/index.html","abeb3591214ced1195954c2f94c0021e"],["/archives/2020/page/3/index.html","035c4df161412be0b4dee4292f0c09d7"],["/archives/2020/page/4/index.html","e88c7ff659da2f278ff45decc0998d8d"],["/archives/2020/page/5/index.html","bb600142b6a784e23432af3f395315a4"],["/archives/2020/page/6/index.html","cd5d803e2130cab657ed13172ff9e5a0"],["/archives/2020/page/7/index.html","56cd8e6aff5a4449086a5a593f92cd41"],["/archives/2020/page/8/index.html","4d9e33aa3777a81f99f66426fda6e157"],["/archives/2020/page/9/index.html","c61d21db25b4649488f762530b382faf"],["/archives/index.html","dbb8c2c92ac3cf686c3f3a6945c3d955"],["/archives/page/10/index.html","63b3671001138b806ed82def5ba5e12f"],["/archives/page/11/index.html","a360fc4d7421157d895011843018d983"],["/archives/page/12/index.html","b0025fdf98b8ae933fe7c6f41760d7e5"],["/archives/page/13/index.html","2d541eb9e93a4b7e90ce50e49094744a"],["/archives/page/14/index.html","0788494e344ea3bea4cb41a705ec92cb"],["/archives/page/15/index.html","9b69b219fe6a194183fbefefe9add44a"],["/archives/page/16/index.html","3cb9f322b531ad09871be24ca49bb6ac"],["/archives/page/2/index.html","e7f07378c362cc9ceac7f89ce51befe1"],["/archives/page/3/index.html","60ff092e9ad9d786a4de4d7a2615a5aa"],["/archives/page/4/index.html","c5a2963f586e4b9cd606e310f26a6b59"],["/archives/page/5/index.html","bef0ec647451bd28cffa78b7c1dc437c"],["/archives/page/6/index.html","c938cb273ecdcfc41b692588ce08baff"],["/archives/page/7/index.html","339ff537017387f66421208952680612"],["/archives/page/8/index.html","78360b4905c1a2f0a8bd36471f5ea632"],["/archives/page/9/index.html","2c381eddede9c601c85b83e91ba5163e"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","f84c3cd0a53396cb6950f6e110efe4c5"],["/categories/Linux/page/2/index.html","f6b16059a350c5c6d335402aa48966f9"],["/categories/MySQL/index.html","b2b8ea86681331ab6a759cc17acdf61b"],["/categories/Python/index.html","80f68926f0db0e53b902fc0a05908e43"],["/categories/c/index.html","7f30fbf3ac5874e0a91eb57894ee9494"],["/categories/index.html","b9210c2d03334d7cfa28eb648451ed60"],["/categories/java/index.html","67877ad275ed7b70194d94486bee92ae"],["/categories/java/page/2/index.html","8691a537e7435516bca09b82e2aa5828"],["/categories/java/page/3/index.html","2ec92a93f425e59cd15510b1fbe7ddad"],["/categories/next/index.html","8e3e8ba4ceaf72245828e88c19a52d18"],["/categories/stl/index.html","4d768f7b1d524f4d3530fb66c100c5e3"],["/categories/windows/index.html","ad36675bd836c0ef2a1fee122fcfe93b"],["/categories/基础/c/index.html","6eb4bca5fc81b74ffb12ecc54477344a"],["/categories/基础/index.html","71f196c2a452019b5e34462bcc282c48"],["/categories/基础/page/2/index.html","d7f9d89b39aa8c3ef3904ce8e2f9199c"],["/categories/数学/index.html","e0ac96e553e05a2e855b65605eb802ba"],["/categories/数学/概率论/index.html","7cecea0cda96532bc0b04d11790e0bac"],["/categories/数据结构/index.html","3a8303d678d4d8dbc5b49e5f23ca8c58"],["/categories/数据结构/算法/index.html","318dc0c43895ac351e022ca32374b80f"],["/categories/机器学习/index.html","2569001e7c6b975f1cf8e563e8e32098"],["/categories/杂项/index.html","5aa67526700bf50a076e12d0c36f8ac3"],["/categories/汇编/AT-T/index.html","791e951029e308942851807742f66393"],["/categories/汇编/index.html","37ff26c26797684db2ec6e6f6131daf6"],["/categories/汇编/page/2/index.html","61bc510304509538a7c38658885e41be"],["/categories/汇编/page/3/index.html","fe00a267134cbcbe7115c2a4d15d0fe4"],["/categories/算法/index.html","a4308296ad1a832e01f1a27a2dc25a29"],["/categories/算法/page/2/index.html","6d132d02412c1d3c9bdbf39bb293d426"],["/categories/算法/page/3/index.html","27ebc9dd30cbfdfaa5037f8b51023ac8"],["/categories/计算机系统基础/index.html","4f44c00eb2c2d682868c27d4a1b543f1"],["/categories/计算机系统基础/page/2/index.html","e0ec6622299814b4594c52955b2c6174"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f22e370e320ea938d46edd84610f6e74"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","50ef914082bbc2592c898a047353c0ff"],["/page/11/index.html","c113c59c3543073a5762456fc12581ff"],["/page/12/index.html","6819e2056edc1ca8f44fc075f90346ce"],["/page/13/index.html","002c8f4f770dbf8854e1336d5785d493"],["/page/14/index.html","9b07e84ce4f7bd65f8e2105e05d8abc8"],["/page/15/index.html","0a3044a4834bef5fb841c6f8459484e5"],["/page/16/index.html","af995f089df3f58742f6fd3f49cc2ba5"],["/page/2/index.html","09dc4f90837a11ce23732f20c0bfd7ea"],["/page/3/index.html","65a7b22df93ce43f61f9c9f916f41221"],["/page/4/index.html","5a263f01790c73f0a490e6453f0a15b5"],["/page/5/index.html","98cb9a4f4b2aa0ed7a77df45ef6e86df"],["/page/6/index.html","0045417666f21f2bd47a0fa2c060a8dc"],["/page/7/index.html","0749fdd9602c289220ca9b431362c484"],["/page/8/index.html","2654f69def5a0217e5feeca5d85f0051"],["/page/9/index.html","50ddc4ae6a0d1a8a89f1851392ba5ba1"],["/post/10919.html","b448632be06e061f308a6cffc442ecbe"],["/post/11051.html","4522044c4fbb3ba1700778610b0ee413"],["/post/11306.html","07d332714b4bc7f8ea62e6bc52768f03"],["/post/11491.html","d2da005c9bd64e33ba8f4c3ec2b474ee"],["/post/11799.html","e35f1a6243b8e509167efe7d56c11a79"],["/post/12334.html","f7fa88e7cdf4cbeef5970a5a8607e382"],["/post/1326.html","c99b15f0fb06519c727af9d4de16dfe2"],["/post/14379.html","5706de9f60416f5da2929296f8e0e126"],["/post/14511.html","bf5010cc85a1533b9eebcef68e8fb0a8"],["/post/15201.html","23f538d6590c8bc6693ac1e3cd0e8eb3"],["/post/15425.html","7c508e49bf634cb60ca35b8f2d159bf1"],["/post/16107.html","ba4c777308be3e6f24b5bfb37c2074fc"],["/post/17862176.html","5581918629b2939946ce361a04b875fa"],["/post/18431.html","eca098eef12bd1fe093565bbd9983413"],["/post/18912.html","105ced8c8b659425fad4d30db6a093aa"],["/post/1b9c8662.html","a0fdec4dd652f9ba34aecd89ecd15ce9"],["/post/20198.html","74243e78a9366cd27516c7a80835c833"],["/post/20ff5ccb.html","483d4bbc30faeceaa7c043a713f0c810"],["/post/21624.html","d9cf7e8bb00aa877e47a3dc68b9eb80f"],["/post/2170659a.html","591d53e3fc34c357fb0d61bbd98f9097"],["/post/22102.html","78802659a637cd7acacfa1c077068d25"],["/post/22493.html","101d893bed27ae9ce566ac473bb2a47c"],["/post/235252ea.html","386eb190cd8a2d9cbfaac0c6a0859606"],["/post/25699.html","39ab16f3573663efcdc7a45be992e101"],["/post/2647.html","99b3306cea387a22d2e969a3dc1611ee"],["/post/26477.html","4d29a02a3f6a1452a3b1b7351f45c7f7"],["/post/26671.html","f6dfd569d6c22d90c89bd9405fbe0d63"],["/post/26737.html","182ed0cfc74f258877459dabc59cd739"],["/post/27045.html","917fe27dfea271477436326524dd7fc8"],["/post/27621.html","53adcc46ecf9006b27d48e1fc1b66d64"],["/post/27890.html","ceadf4938d2a8a1e54d515ae17a7c3f9"],["/post/27980.html","d05b1bd57a76fb502bfc0f6c68f6f955"],["/post/280b588e.html","bc852b0cc56b3fda4b2ff169062fc332"],["/post/28579.html","966932d742d9f5dd7009321bf174d875"],["/post/28877bf.html","2f2577264539002ba900690d449f05b9"],["/post/28954.html","6bb141d9aac2a74fe31cbf107d57a86a"],["/post/29378.html","ad4f8b3981c97cb252fd85b5e79e8fc2"],["/post/29949.html","331484a63847e5cd0dacb37425694300"],["/post/2ae43b86.html","040448ddddac443536b3fda060e1dc5d"],["/post/2ba82a45.html","2a1d4c07bcf56c5fe52fe8858bc5691f"],["/post/30072.html","8ecc9f9330f38cbe22d3ec83b0dfd293"],["/post/30479.html","45dce624214d408147b7fb18f3fd9f87"],["/post/31a6b40.html","f54c4e3a8ee2c98ab0af5b86ebb69993"],["/post/325cdbf2.html","c44fa3354492fb9a6a11546e24dcf1ab"],["/post/3319ed9a.html","f655e91075096a427ad04d5a0ac08cbf"],["/post/3320.html","2635d547859c9b2c572f0fb29c219477"],["/post/33cb1151.html","e8376b7f4db7b4c34eff7ffa800bbb26"],["/post/34811d5f.html","d4e4f76f4d88b718076465874056c175"],["/post/348d4e04.html","d9e61517759987ad9f251d08f1f4a073"],["/post/3526.html","2e384ac423ca0d215938279c79db1504"],["/post/35532.html","1f45f56129aa13bd4730b53c02c66a54"],["/post/35848.html","d5854ebd66308ec9240bb0b6c603bf60"],["/post/37318.html","2d5a21d24fd3fb37a3c36eb7da08e272"],["/post/37663.html","c90841d9d67ae35b5bd11b2c1caa3de6"],["/post/38035.html","b606c274eae8ed23f9daaa9eb58acda3"],["/post/38072.html","7d614376f2f87bd0154bb5fad12d1cff"],["/post/38145.html","18c2b46759de983960ed75bd54bd6422"],["/post/39968.html","73b7cd2a64eb49ceed8443c27884e819"],["/post/3de4bc69.html","b8a5e047fc5a6fbc4c984bb632c3a8da"],["/post/40583.html","47da5c0fb36c3aff6a2198f290305283"],["/post/40997091.html","c850b7d8f151ddc553a61e6c016f51c5"],["/post/41129.html","8a455ada1e2bbec68a62a649421906e0"],["/post/41763.html","1eb622497bd474784189f6ba573fe8ff"],["/post/41829.html","f9faa5d94ef52634cc763ab85cd320a8"],["/post/41840.html","f0c4a57160731b9c6790314d5e2898bc"],["/post/41e39f2b.html","5912da89534d08e34371018d9b536c3d"],["/post/43817.html","c24b90fda45b6284a797d5a880de3853"],["/post/43878.html","fea66ef65b4f3742357869f83938fe07"],["/post/44250.html","db48d99435ca8f4d9887ac1af7cacc55"],["/post/44336.html","eac139bbae8b383392a0fb83b79a4dab"],["/post/44454.html","ca0316bdcf025eee4b7ef7aa4ca66c6c"],["/post/44487.html","f6ee9e3f953a0716aa36ca18e079b150"],["/post/44914.html","e4fba94f070649eb75221e7965401062"],["/post/4551c130.html","c872841a88e147cb951bbb811b281328"],["/post/455a4c92.html","e7a4ca81ff31a8871a0e75ed99c09f5c"],["/post/46466.html","537ff3d64e069c5c2d7f0ed3bd968bc9"],["/post/46925.html","c8b89f7ff199403d61a252fc347a3864"],["/post/47075.html","05ed4d0b0ab9d9b7594469d836f62486"],["/post/48220.html","eb3387dae196d3b79488165781a6bab2"],["/post/4b1879e3.html","38efb6fe5dc22a15b2ebfedaa37118d9"],["/post/4c720881.html","33f5ebf51bb1bbee2f120bcba7a8adf2"],["/post/50daec4.html","54d5f710318f52252406d14c595a18ca"],["/post/51491.html","1f0a9522a77854028124b127f11d0227"],["/post/51e63dcf.html","ee480ef1d978b5cda5de7ca773b0fb08"],["/post/52078.html","6b74dc2a90c63c1cb8e5366095254cd0"],["/post/53677394.html","62202ddbbfd4f7329d574eb43d00b3c7"],["/post/54300.html","3dd9056d52bc840aea936d96a6474b9b"],["/post/54612.html","a7d576cb0aabdffc856e9fda5c290534"],["/post/54613.html","89fb832be94d9f3a05d9fe4bae9c5ffd"],["/post/54708.html","1a4864021708c54dd1e4f9f922a54dca"],["/post/54778.html","58882a5f7b427c829e27c76f8044bf98"],["/post/5490.html","de57e04be82694329858d65b4c848daf"],["/post/55046.html","25a64c027a09dd0227d7974faa6d2f29"],["/post/56929.html","1ae4c061ec2d2a36bd6b0f3dad89d397"],["/post/57339.html","d71e166e815532057bdd699ccc8ba874"],["/post/57449.html","055c767dea0f5f61ff67976b95b008bb"],["/post/57453.html","bbf61e8c809074d6c040774da17e5f6d"],["/post/57671.html","8ad37003d98e922f8b7e1090f5b078c3"],["/post/58313.html","34bfc5b720485105146835006ddc0c6e"],["/post/58481.html","0cccbe82eb5aee1273bda332b087e220"],["/post/58986.html","a4bdd57904e4dff08e50b86f5170f647"],["/post/59431.html","b264950ff99683b4af5bee19c16e71bb"],["/post/5951da65.html","cd75435598e0169ffd86012850f42c0f"],["/post/5be7e977.html","abe484c543bcd9478ade15c2aaf196e9"],["/post/5f9e4eff.html","dbe1a0b772ae9b1d0beb97418b41663f"],["/post/604b49d0.html","4bdbaa2312e2eb4c153aabfb439b7697"],["/post/61312.html","9920382ecfaf56c43dd4175718bfa239"],["/post/61738.html","94e813828e1b2f1d88879a05bfad855a"],["/post/61809.html","80b8e79bc2555e5c75fd5615a83b1ff7"],["/post/61eaf19a.html","510f15e5a30223351183dc62a9d410f0"],["/post/63002.html","1833ab269a1c6f737677e9ebaf9fc713"],["/post/63711.html","101b866ea7e1974d637d2d4fa5df0e87"],["/post/6587.html","157d134f6d8ae96156ab75e0b94c0369"],["/post/6589.html","b35539ae4868ebb473dc43b6de99aab4"],["/post/6880.html","07f8bb6f85abfcaef10fa3600da99fcc"],["/post/70263071.html","9aa20166d6c9b193309e3618cb0b0b8f"],["/post/71038564.html","1eb0f0e14ec437131ac1773bdb4025a8"],["/post/7119.html","e6cc0d7431b45b993aead71360ac80cd"],["/post/74e7fdff.html","44e505ba87ea22faa173fde31cc6e14f"],["/post/7502.html","6bec2d0f4f8b90ff4a1d4c62b393d49a"],["/post/7564.html","3eb8c16d2d9d1eae27e10a8439cf4661"],["/post/766f9b60.html","62a7a6381c9781a2442641192395a801"],["/post/7ca31f7.html","a6bf1280fe255cdfc62c735e5e30c1ca"],["/post/7d1c86da.html","a89d7db550f280e3957aa68b1886267e"],["/post/7f3bcd7f.html","437d3b8e74fa030693e71631f4b5cc59"],["/post/8039.html","29882bce9eaa233274735b0347e87119"],["/post/8050.html","79a2a727c4bb549c9d137128323f9c39"],["/post/8072.html","fbac6e5213380b5dd5466e2a7fbd1990"],["/post/8274.html","950332492329416b6864daaab3201f04"],["/post/8372.html","6c7f6232d5e9902212cfd65e90633177"],["/post/8498.html","f82cd7ca59a399494e25c4c380dd16c8"],["/post/85b4e13b.html","cfb661c407f75af3c15334bddd157317"],["/post/912b2566.html","f995db6e3894abd8cb529c673f625b5c"],["/post/9187.html","9ae0ce735bdf8dec10f8234181fda068"],["/post/9197.html","f62a9d3436902c34d7c3c260576786eb"],["/post/94ceb2fd.html","3a73b9523dcfb78b1de64ed3f2dae0b1"],["/post/95495db.html","8e87dc00b73bb76b53bde164b2ecf505"],["/post/97246020.html","5a7e045994aeeeaa729f6312e21ad4f4"],["/post/9954ba8e.html","c651731fd5c2fd8f069a05d364a726da"],["/post/a3a786d6.html","15470419d8b6501161272b58794c32df"],["/post/a444b428.html","7040a6c652d1a7ffad70ded1f932c9b7"],["/post/a50b8908.html","f3ef02093b41fc02e4a8a212c0284d38"],["/post/aa1eade8.html","fab3041029bef1a9439a721e483fc8a7"],["/post/ade8c6d6.html","6b746c280591d672fe174eb71f4c9ca3"],["/post/ae8362df.html","26a691ac20f519444691e4f7b1d4051a"],["/post/b4c1d206.html","329c4141b0840703ff106d088a27adec"],["/post/d213fc7f.html","17d218e88fb6d0c17325585efc14bc9e"],["/post/d431fab4.html","31e127fe0d6665867f51ff32b46b6b07"],["/post/d5381517.html","f00926a2d5ccaee129a2efe3ff190c34"],["/post/d94f88de.html","321aa2c1d7be937eb65b37b41b0805eb"],["/post/e058ffd8.html","23f51063821901815517ac7da8c099af"],["/post/e0f8cb74.html","a01d4e6995cde2dd922d2f917301cf10"],["/post/eefe591f.html","34096853ba062c99f2bd0a4e3a3ceb6d"],["/post/ef296a07.html","3ff3b0e17758b16a6c8b26737841f12d"],["/post/f201f9fd.html","f87271c7e69f625eb36f0492c43c9357"],["/post/f79e4123.html","4244877e224f0362cbcdc4fb928b488a"],["/post/f8648a1d.html","42107b1a73bdcd918c3ec1e75ac7fef1"],["/post/f89cb603.html","001f6d466c4c6b86c1ed88096fa4ec78"],["/post/fa288682.html","468a2a19becfce4c839a2417de601612"],["/post/fb98053e.html","3f94b4cb2120013cbbe25c98380ec485"],["/sw-register.js","61cbf5820dfcb1a1266c069ff4816db4"],["/tags/AT-T/index.html","25bea0cd6c476a70bdbf318e3b9a8f35"],["/tags/index.html","deccad5b90c64d85788e3330d09bb292"],["/tags/动态规划/index.html","22bc0bd405f9fb2b2e4c828faa1162a8"],["/tags/字符串/index.html","b34753dcc33357d3b227b4f9ba79c845"],["/tags/字符常量/index.html","8e4fb29da0663989ad45a3d01aa2ca2c"],["/tags/快排/index.html","f6daf87b1bc21477e23eec12086eac4c"],["/tags/排序/index.html","e09b2d51de91cd232854bd5a198167ec"]];
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
