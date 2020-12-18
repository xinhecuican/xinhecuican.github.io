/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","5fc8250742437d7346a45c83eaaa934b"],["/archives/2019/index.html","2b37feca8bee86f637db03442fa07852"],["/archives/2020/01/index.html","82e0ac118e8f7fc7f3117d19b35eca20"],["/archives/2020/01/page/2/index.html","88fab495f62d3d4e154eaf1cd7722529"],["/archives/2020/01/page/3/index.html","a4c3b876c6dacc9af2a1d762bada92ec"],["/archives/2020/01/page/4/index.html","948d53a1cb0e193179d9d62e87b3e3c8"],["/archives/2020/01/page/5/index.html","babc24616a423d73f22810d6ee46015d"],["/archives/2020/01/page/6/index.html","13699657309032ddf81afa3ad75baff7"],["/archives/2020/02/index.html","30502a2dd2c96fbf510944c1522acd11"],["/archives/2020/02/page/2/index.html","7e87847a90d22d73a7d3cd5fca0c6104"],["/archives/2020/02/page/3/index.html","9d4feeb760b0503e642c90ed02b3772d"],["/archives/2020/03/index.html","70f154a9d7fdc50b79d9a4a5b6d6fe7f"],["/archives/2020/03/page/2/index.html","7542cc3bf981faba4f53f9c045c10758"],["/archives/2020/04/index.html","78ef17bf737a5a5dd161fb0a44488a7e"],["/archives/2020/04/page/2/index.html","baeca71d86d6436f91d574f23a17ca99"],["/archives/2020/05/index.html","032217160918e224e5e80d6a10b5b4ae"],["/archives/2020/05/page/2/index.html","7ee64f4f483692912f9add4c6c386c0f"],["/archives/2020/06/index.html","8373274b1b4c55005a2bd44a5ce98bb2"],["/archives/2020/07/index.html","a034bb4d46208562e2138e204c291791"],["/archives/2020/07/page/2/index.html","1385021f13b708edd030588635711308"],["/archives/2020/08/index.html","0a2231e416c7b60f325525cbe74e6e46"],["/archives/2020/10/index.html","f81257d6ae4380bb8f01a66a39ffa99f"],["/archives/2020/11/index.html","83c2c5430257fb7d6bc0dbdaf8a533ba"],["/archives/2020/12/index.html","057fa4b5f9ba21d7e9bac0b8313dd31e"],["/archives/2020/index.html","97211bc65a441dd1540cb5a3a82805d2"],["/archives/2020/page/10/index.html","9e2e52dc725255407a297ee95b456c6a"],["/archives/2020/page/11/index.html","6c6b7813201542c0ecc286ce2ab768ad"],["/archives/2020/page/12/index.html","98a99a458494c9d65ff62b7bf5170638"],["/archives/2020/page/13/index.html","b5d87afd6a174c66f630ecdd5e60f6e6"],["/archives/2020/page/14/index.html","3736450c44aed295048ef83e7b7c14d7"],["/archives/2020/page/15/index.html","950f358e287c5cd501428f1ff89fa46b"],["/archives/2020/page/16/index.html","508d7959c3c71441eb5a46bb84185590"],["/archives/2020/page/2/index.html","bf355adfd2b2805cbe276cebe4ae3dcc"],["/archives/2020/page/3/index.html","2b911b25735667542f3b2c41bd217a81"],["/archives/2020/page/4/index.html","7869d6968895b53aaffb72409b6c4193"],["/archives/2020/page/5/index.html","d34543fec2dc8576027f495dd4007a38"],["/archives/2020/page/6/index.html","26e00f8d6232678fc256ec096c9d6d04"],["/archives/2020/page/7/index.html","1aa599b13506f74e25e3a3d72c1bcff8"],["/archives/2020/page/8/index.html","1f1b80211eef6f85b8674b3231f1f6e3"],["/archives/2020/page/9/index.html","fcfa0640e4fb6cfbc0824f7f00f42829"],["/archives/index.html","9bcf21a4e11df7d9c813a78910e154f0"],["/archives/page/10/index.html","f74b009aeeea66eede6dbfad48f8be36"],["/archives/page/11/index.html","888cf054eb90423797b9ac5cee831eb8"],["/archives/page/12/index.html","8588ee650a74a6949d118a801922e02b"],["/archives/page/13/index.html","d5872d9cad8ed344ec923e3e72746d6e"],["/archives/page/14/index.html","bc8d07a28222d9a95f80ec4520ded9c9"],["/archives/page/15/index.html","6198ca040758366722fb57f55b3a1037"],["/archives/page/16/index.html","08c017094ad28d9926519784baec4172"],["/archives/page/2/index.html","d5e26ef54568afc6b418a63e8f9b23ce"],["/archives/page/3/index.html","8b5e6a9020fceb7d47d1e3ac076b51c7"],["/archives/page/4/index.html","dca8cdf27a53ccae5ae0321a4af84b33"],["/archives/page/5/index.html","fcc699e8bc02dec4805a024a033dfc9e"],["/archives/page/6/index.html","5c8e964c2a0fcff86ff3b5f7c5287761"],["/archives/page/7/index.html","38e9e429dbfc15d57e6a460d08f9ba28"],["/archives/page/8/index.html","cfa4d5fb996bfbb28f07f4e4410ac816"],["/archives/page/9/index.html","c49793f549b7155c4c3902d52ec35a32"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","15a52a3557fdfb6ad0ff3964f933163c"],["/categories/Linux/page/2/index.html","0ec3348b9fbd515cfd946f2283b3ed2a"],["/categories/MySQL/index.html","adad23f0746aae9cbc961f728ddcc4e4"],["/categories/Python/index.html","fd18f0a1c9767935340d0b41f0ab0920"],["/categories/c/index.html","bcb3914eca7a5ad6176a44c1edb877a1"],["/categories/index.html","2d86b9e569e142292dfb090f8618c688"],["/categories/java/index.html","e5a06c1c4d48bfb4b3e9b92b3ab48df6"],["/categories/java/page/2/index.html","f5721068ab519d51eb4eeb085d815a9b"],["/categories/java/page/3/index.html","33d73e54bc20783c62c7ea57ad75d0f3"],["/categories/next/index.html","f779091190d0dcac91fb4627c7efde9e"],["/categories/stl/index.html","ccc7f7ad783d82d1239d701b33e44b32"],["/categories/windows/index.html","2e5291032a2e4c9f4721dcb09170daef"],["/categories/基础/c/index.html","927aa1c78e97ed2ea99ceedbe7e1c25e"],["/categories/基础/index.html","8914589431310a0792baa3137d3402b5"],["/categories/基础/page/2/index.html","56a27237057d097672ea9a8cec6022fa"],["/categories/数学/index.html","0e38882e16189a24019b2020ef8b685c"],["/categories/数学/概率论/index.html","4cab43d69484b6774383f858b23f699a"],["/categories/数据结构/index.html","329e5dc9f14188192007a4763d54c702"],["/categories/数据结构/算法/index.html","b22b145d355a38ad269bdb08c9a84711"],["/categories/机器学习/index.html","4b24d49ea213887b1cfbc6ecb8ac8836"],["/categories/杂项/index.html","168f390f54f0414f0c754a3334edc62a"],["/categories/汇编/AT-T/index.html","9e04fd33a6dd287996b84683644c61a3"],["/categories/汇编/index.html","3e8b11aa6b8f913836fc22d1604cf031"],["/categories/汇编/page/2/index.html","9d3fd8b9c22ff9b5729f8101919a50f5"],["/categories/汇编/page/3/index.html","654c44be221272a752e403f0e44b1dce"],["/categories/算法/index.html","e4dacefe04c0b1fe180e6f1ae3dd7824"],["/categories/算法/page/2/index.html","63eb6d1039474e2382b3066640697f8d"],["/categories/算法/page/3/index.html","73d313ba1506eda63f58100f000473e0"],["/categories/计算机系统基础/index.html","156115b1e2da31dffb1e0480fe7689c1"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","512565cc3d29d8561f42d829997ac907"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","cbf295680167a17aa8c918be8f067df0"],["/page/11/index.html","5476fec9f3af692d0046d7e9086ec1aa"],["/page/12/index.html","b0e8b554688ec9ae44c5e0a9a0db3c8e"],["/page/13/index.html","37154a4eca5bce0ce2d555f5f06f8e70"],["/page/14/index.html","5b0df4827629733b6c8a5a2301f64cc2"],["/page/15/index.html","e7499106412090311ef006febfce3c7c"],["/page/16/index.html","53bf7b55b18e13053415dcbbb7d3f9bb"],["/page/2/index.html","1725f8a966eccf648f9e48726be40f29"],["/page/3/index.html","33347f836250fe723cf30aeac576adc8"],["/page/4/index.html","ca0b31ad7ad5191cd3cc38800ea7c2bc"],["/page/5/index.html","ecc066393ec125c0d20de07dae670d42"],["/page/6/index.html","b95c9c62d5a5c4c21ceae8806e6a1609"],["/page/7/index.html","34bc49f5c13075ef81e216deade8b8f9"],["/page/8/index.html","9fcd1101291bbd720814382349b1f354"],["/page/9/index.html","26b731534f37828f9e945adf58dcbc8c"],["/post/10919.html","a744cccff12f1f794d5c0e530029e8f7"],["/post/11051.html","e464ae61f26dc331c2607c652eac707d"],["/post/11306.html","a7f7863fdc7240f30f93a393d6edc851"],["/post/11491.html","04587e5198132b26e1ba48e064bf6880"],["/post/11799.html","a3bbbc1035017615cb8c4c91daf54b3d"],["/post/12334.html","3b4cee831241d013d4794d511cf18744"],["/post/1326.html","56294f03fe3760819818831e45c0c331"],["/post/14379.html","9e526a44e2b00451794cd06d06644ab7"],["/post/14511.html","a8735f7e4191085519894d2e326169d5"],["/post/15201.html","bd4d063074260a44f55b193782f7d3e8"],["/post/15425.html","cfca0149fadcefbccdc0943ef1060d30"],["/post/16107.html","d537e0778d38129b75a439d01666db5e"],["/post/17862176.html","82d786f05f6d5c7bcd10688f71c02e1e"],["/post/18431.html","ddca3a6c81fb710f190f0487b817afab"],["/post/18912.html","30d1e7ca58c915ef1b4ff907fa45ad59"],["/post/1b9c8662.html","f71f7936e91b906073faa352551b6cbb"],["/post/20198.html","443bc0313dce4c48b9a5c3338f49d374"],["/post/20ff5ccb.html","2fd4ea54cebab21b617c8db656fa3229"],["/post/21624.html","cda3392485b0f1be463d44a24fa08b9c"],["/post/2170659a.html","a8901b056852614f5a48c0645dba34ea"],["/post/22102.html","aa378e22baab9ceceb5f0ad041966fb5"],["/post/22493.html","b3baa526421f46667fb06a82a52b0c57"],["/post/235252ea.html","4166ef4a35a7a51f73c013100a8c2462"],["/post/25699.html","799a06e011117aa016af328c297be400"],["/post/2647.html","1f25bebe7c8cec9f17dab015cfbff111"],["/post/26477.html","62414dcb1e991ea52a0156cf2ee5b525"],["/post/26671.html","bcfa3b2e1b738e9494125bb3b135efa0"],["/post/26737.html","ac708a9b98e941d7be1ed3b2b155750d"],["/post/27045.html","f0dd87361892ae5f11299bade33b2f6c"],["/post/27621.html","ede3f439dbb3888ff6ca3cc130a60908"],["/post/27890.html","59739d1d2a31231e3bc0da9e7704e065"],["/post/27980.html","fbd3fddbbfc2819aa11f094d686b58ed"],["/post/280b588e.html","e60a321082a67d318362337deb4ed56f"],["/post/28579.html","82236157400cfcfb407517ff6533b726"],["/post/28877bf.html","418c86c74717bc07b812c239300ac2de"],["/post/28954.html","1ae68afec2cb2ca2260265cbf4525d03"],["/post/29378.html","2499ea2ac69eaab19ccf1ecc909deb66"],["/post/29949.html","7950821cb84d95c65d2de481944ac4f1"],["/post/2ae43b86.html","8b65ac3cfd4487d02684223fff8add79"],["/post/2ba82a45.html","7458f65e53d04b33402060b5d2c14540"],["/post/30072.html","4ffb36f46be2e43555f108a7253a56bd"],["/post/30479.html","5df00eb0ab180a19d33523cc402b3d59"],["/post/31a6b40.html","c793afe9647efcb4fbca76b921a42f63"],["/post/325cdbf2.html","5fdd68f0da2b482dd590f9a72ca59332"],["/post/3319ed9a.html","a9923cb572f969ee682ccafbfc3a92ad"],["/post/3320.html","c86ba700b6c0662ed997d7e22100b85f"],["/post/33cb1151.html","13f3e626fa68e91f4428b28f02707897"],["/post/34811d5f.html","7f3124b8da887dff5cd1072e2aeba979"],["/post/348d4e04.html","a172d81ac8c79f3b6510df60b7cecebf"],["/post/3526.html","a352a1802b37c571ac72126a6a041b2b"],["/post/35532.html","cca05f3e4160d86514a1368c5ebc24c7"],["/post/35848.html","8bf6cc222e72b9f819c55d1b68e9dcfd"],["/post/37318.html","51b5b0ded8db069e80e14758c82c56eb"],["/post/37663.html","f42f1352f2949677982fe376c2e2865f"],["/post/38035.html","e2cb6891f84a1e738c679a94e492484e"],["/post/38072.html","acafac09990493feeb69bf95be07723e"],["/post/38145.html","41b19421d3af96bb685402d3d57abf78"],["/post/39968.html","d6de2d0b6864622f3edd029bd1945513"],["/post/3de4bc69.html","c6ab601bde6882d5ac9c1e6584db19cc"],["/post/40583.html","9de2a7ebe8890cc0ec038e99e79a794a"],["/post/40997091.html","071e77484986ff3fbadb5a7f148188ef"],["/post/41129.html","9ea7f507ba472956825f7dfc1468cf89"],["/post/41763.html","3d4e114895783119c9d5dc665ba99803"],["/post/41829.html","e38ebac9c32570289dfec7803428ef4f"],["/post/41840.html","448b2dc06cbd746ca5534d63978eece1"],["/post/43817.html","c712656c055ed8291d050d0012fb804d"],["/post/43878.html","2577eabce4604b4c037764da8666db72"],["/post/44250.html","08d6c9ae65cf8b31104830701e26b991"],["/post/44336.html","e02ba40f5532988f4812e32a1b40a2d1"],["/post/44454.html","786727bdc06f71416cc07ac4ac1202d8"],["/post/44487.html","dd036300761e4ace3efa90c5dfc59360"],["/post/44914.html","ec9517d04670b151aa1790757b23bdfb"],["/post/4551c130.html","02cdfb7dba427b48d8c1996fa72d2925"],["/post/455a4c92.html","6fe99d0f4b22f7d6a343ab610bcc161d"],["/post/46466.html","eda6b2eb1f44764c071dba0dc6060897"],["/post/46925.html","667afaa1eff3061cbdc21dc5f70aed0e"],["/post/47075.html","50a9182797436583123fd9bb3d886ea8"],["/post/48220.html","0e13095441be83925aed9d3220381b56"],["/post/4b1879e3.html","cb089ece2b36907aa777cbda7ff5e3d8"],["/post/4c720881.html","367321c642d368646247680e2bc4ee9a"],["/post/50daec4.html","35366049480d00e02033797c48cf530b"],["/post/51491.html","24c5cef82f838c21da4555dd47309b1f"],["/post/51e63dcf.html","8766c00012dea61df349ed14666648eb"],["/post/52078.html","0b851f33eb37a1394424ad0ce8bceba2"],["/post/53677394.html","3b2d843685ccc379c59f1069e6eab0e6"],["/post/54300.html","0480ea8fb7a702b09a9e8d63d728926a"],["/post/54612.html","f99f383a8d46f48ab1a95d52d0590ca3"],["/post/54613.html","fca04a84fca5a0fae5ef4f7acb5a055a"],["/post/54708.html","eb9b841c081cf9ff23b0f0b26e7531b6"],["/post/54778.html","89e1efaa6d6bd302da925086baa629e0"],["/post/5490.html","f72ec7fc65e1bc74e8553c8bae7e4299"],["/post/55046.html","b4c52363feb84fb34da4ff48eee1f116"],["/post/56929.html","47c77ae8c38821ead8a88665e48a322c"],["/post/57339.html","dd545e90f2abf1251f5e559b24240271"],["/post/57449.html","77726bdf454f1c77474e9d67832f7733"],["/post/57453.html","c8a67fa3d56780d3403017c05b235a87"],["/post/57671.html","ca5801e79b2594384069c29840f00ecb"],["/post/58313.html","8e47868e02fcd297372bbaeb08815cf9"],["/post/58481.html","f739ff6a5c6c733b04afac07e22f2620"],["/post/58986.html","3f4834646caa369d807222dc7fce0272"],["/post/59431.html","414154108f439175dd4afa87b39699b7"],["/post/5951da65.html","0796e0559d800c65deb8c8a34b74f5c6"],["/post/5be7e977.html","7b1d91be3be895c9d1fd6a5268bf61bb"],["/post/5f9e4eff.html","5bb0760919b70c6e27e79a46c9d50fd9"],["/post/604b49d0.html","f33cebdb34573d47dc0045981ef6f460"],["/post/61312.html","e831aec78474cc58a1c6e46f98bf8a8a"],["/post/61738.html","e37452120fdd712e3221b15ca3705272"],["/post/61809.html","d18738dcda1f72119c147a01c5485774"],["/post/61eaf19a.html","13d5a28666bba001ba0a87f3a4096501"],["/post/63002.html","ba8d051b392bebdcf7b46b9bdc38407f"],["/post/63711.html","0dc66813486d0e0eafc68d7659b665e3"],["/post/6587.html","4220790992786d58a9b535f0068cb42c"],["/post/6589.html","d5515022109e3765addc143409151570"],["/post/6880.html","9814e0d16c6106b62972cdfcf7fc771c"],["/post/70263071.html","283d66bac7767359fce6032c5f75e80e"],["/post/71038564.html","2f1b2295813c1256285be61f0043db50"],["/post/7119.html","073d60aac599514611d5aa518fc92aea"],["/post/74e7fdff.html","7210e1d2813d1d8313047ab642a92cee"],["/post/7502.html","242ade161ab124b07fec1a7b7ce8e297"],["/post/7564.html","f1e1a7d9e6363c25924d1d012134750c"],["/post/766f9b60.html","eb6605afd1f4a5251f48cbbaa69ea366"],["/post/7ca31f7.html","e42d9883bf5068403c5c65519b457743"],["/post/7d1c86da.html","49c8108978b542094f2dd266001005d3"],["/post/7f3bcd7f.html","87e3d3c107db46a4dccef7dfc3f45a6e"],["/post/8039.html","60782f76f1dbbdc1370423c2f3196a71"],["/post/8050.html","687e6806442a2f024bb2d6fa218eb724"],["/post/8072.html","f68a3aba2a64ead302ec206b574b5cc3"],["/post/8274.html","ee3bfb20be9a433b9597839a54677573"],["/post/8372.html","0553b1f159c1d2a1b7e76f095c78d5e4"],["/post/8498.html","5cfc5e8aac897d35c0a038b005f8fb80"],["/post/85b4e13b.html","aae44d363bfb4d5140e1a08ebee35316"],["/post/912b2566.html","0bb1672e295bd79dca5347bccb181855"],["/post/9187.html","57860659493c492949fa827011cae787"],["/post/9197.html","f523e2f3ff1d2fefcfae5be390f149df"],["/post/94ceb2fd.html","dea57c95557350547263e501e72393e0"],["/post/95495db.html","a71d026c7d280e113fc5cdc1dfe46701"],["/post/97246020.html","39792833493bf02b291478f1b6cd58eb"],["/post/a3a786d6.html","2ac97a9834218de623bc4f5b40b3109e"],["/post/a444b428.html","650ab715ca4b7dfa5745a77e257cc434"],["/post/a50b8908.html","50e9f82bb95de3341940c65a47a1ed5c"],["/post/aa1eade8.html","105c861bbe55b43d0706671dac496644"],["/post/ade8c6d6.html","5f15c16b6a7f63a9f1a6c9b9be015204"],["/post/ae8362df.html","b19c3fb4a86b22bc0f58914f2b48faba"],["/post/b4c1d206.html","ac3683401b4705041a09d0922cbebfc8"],["/post/d213fc7f.html","15c8ad5528d199175ccbb48dde91091c"],["/post/d431fab4.html","3f931576ffbe19fdda20f8ec7b6e467c"],["/post/d5381517.html","b238e71a3228d51216ae31b2c6139eaa"],["/post/e058ffd8.html","8ea7a821f41c44f8cbd26365acfca5a2"],["/post/e0f8cb74.html","68759e3025d706dfd48e697849aa5cbd"],["/post/eefe591f.html","059ee6c0ee7c5632de74ace2eda133f1"],["/post/ef296a07.html","e41218b5b13946b889c5caba2d52deb2"],["/post/f201f9fd.html","ebd0ff99ad6b0b4321ac903c0969afb3"],["/post/f79e4123.html","a39abffe54afa6aa642198da199560f8"],["/post/f8648a1d.html","dfbc196a7aad803686a67d72db723761"],["/post/f89cb603.html","3afd9c2d19f554048d71feb6fda5f6c4"],["/post/fa288682.html","72fa230f5cc711dbeee65b2b212f3f2e"],["/post/fb98053e.html","1c71c6d5cd22f0ead92c065114d7f6dc"],["/sw-register.js","52e5c2d9a93da77b0041d77483f9cccd"],["/tags/AT-T/index.html","f64b1e257c998495f0d709662050c9ea"],["/tags/index.html","d4de4dfa337740eed7bae0893067e055"],["/tags/动态规划/index.html","aaaee60dff772f6f7c1046a55dc11468"],["/tags/字符串/index.html","07b1bc4f1231cd5a6236d42922d89b74"],["/tags/字符常量/index.html","d18e9da15c14601aa61d4c98d279a2f9"],["/tags/快排/index.html","cc4e68441eaebf129acae5f7368e67c2"],["/tags/排序/index.html","d86b8d8e61517c3c20466025bbd0a1e9"]];
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
