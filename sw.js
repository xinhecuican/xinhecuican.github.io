/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","4043e6bcff01e4392a1d48303a1f7662"],["/archives/2019/index.html","cf363a118ad19999d466616015de1455"],["/archives/2020/01/index.html","213336b207a03283bc089a4b105cae55"],["/archives/2020/01/page/2/index.html","d82ff08279c16af4246aa82b1f2bf662"],["/archives/2020/01/page/3/index.html","6c7505fca99bfd6fda1d33a27681f2fb"],["/archives/2020/01/page/4/index.html","9f8f1ef1d383b71874dbff3a37494e88"],["/archives/2020/01/page/5/index.html","8b31fd5fd7b3b3000ce52e945b436e20"],["/archives/2020/01/page/6/index.html","ae6a335ddf5b8d133f8c503db41b01d5"],["/archives/2020/02/index.html","1f1a37616743d364447b641070ace89b"],["/archives/2020/02/page/2/index.html","c7cb046e56eca689aeaa0d9bcb82baaf"],["/archives/2020/02/page/3/index.html","9860214fe28b496eb9f030c32f456c75"],["/archives/2020/03/index.html","46f7ccba7176482b1e6fc7726bf1613c"],["/archives/2020/03/page/2/index.html","faa513006e38ee14ff0dcfd97f771bf0"],["/archives/2020/04/index.html","7591d6ee5b7d8d621a2bcfb46e26d130"],["/archives/2020/04/page/2/index.html","61f83a996d0bf95688fe8706f8d5e8dd"],["/archives/2020/05/index.html","713a05feb51f8767a6262c3fdb2972c1"],["/archives/2020/05/page/2/index.html","e84bba842cc09d6897a7ce53127ee25e"],["/archives/2020/06/index.html","dff793b714f6a423eebc71357f727875"],["/archives/2020/07/index.html","40a8c666c5d56f714fe9222010b42540"],["/archives/2020/07/page/2/index.html","154055df807ababb691cfb4099c15c90"],["/archives/2020/08/index.html","fee6b3c87e1bd65893365ca033a8e227"],["/archives/2020/10/index.html","5be0dadbf6f63c181566d5964c48bad7"],["/archives/2020/11/index.html","2c71c79eb8e453e31740e44315ca4a06"],["/archives/2020/12/index.html","add058af69e0b253da98d0c00b07b8bb"],["/archives/2020/index.html","039363880ab8d1afa91e2b79b93d22f7"],["/archives/2020/page/10/index.html","5792c7ba2a056a19f0c39e1f71fafbff"],["/archives/2020/page/11/index.html","90bfc4d0114f4e6679a0548b15a16f71"],["/archives/2020/page/12/index.html","172a3b143dc373e8d267ad9ab8a834e6"],["/archives/2020/page/13/index.html","27f237237170ae5b4f9f13d6d40bcb11"],["/archives/2020/page/14/index.html","21900d4ba0210098cd153fa0427f76ed"],["/archives/2020/page/15/index.html","b3f1c7e2a0afb22e6dc00815ef463722"],["/archives/2020/page/16/index.html","806ee18a0bc1ef762eda72dfadb3ce53"],["/archives/2020/page/2/index.html","034a5e0f3401961037a0c170a7335653"],["/archives/2020/page/3/index.html","933aeb422a4f0ea57a0108e47e1cb193"],["/archives/2020/page/4/index.html","42fde3194814b91f6cba9da3461d0d6b"],["/archives/2020/page/5/index.html","11b1af83a436ba6fab80e9b8fac8a1a1"],["/archives/2020/page/6/index.html","23995cce0a2c3dff297e010607b1a358"],["/archives/2020/page/7/index.html","402d0f3a66a0ef8ed4365f7c799d5a5c"],["/archives/2020/page/8/index.html","f9f987d9c04f7ea3f8d40c2db24f1f14"],["/archives/2020/page/9/index.html","6ebe6ffe132005a6cd071df01fcdb981"],["/archives/2021/01/index.html","2e8d388fff8489c1374f74a4d484154b"],["/archives/2021/02/index.html","da315e3eefb42051c00c6bd680b1932b"],["/archives/2021/index.html","31cd7ca54efa4b491ba06458ad78d2f7"],["/archives/index.html","74bf8197b49a83182335e716ca36952b"],["/archives/page/10/index.html","9a092fe783852a46eab877bf5437fc26"],["/archives/page/11/index.html","458f4d156259d6ff9f46e3f000c600a0"],["/archives/page/12/index.html","207f210dbf91847c1779db2c68365d30"],["/archives/page/13/index.html","44da16fa4a0785960f5ef37335f4bf6d"],["/archives/page/14/index.html","9a3b0f6d893b2453b49a761230e01914"],["/archives/page/15/index.html","058ca527b532e95ec9702ed1377c58ba"],["/archives/page/16/index.html","19f3efaa7d795dbe9c5503d112309abf"],["/archives/page/17/index.html","7a25a6557cfec3b84435050bc87eaae8"],["/archives/page/2/index.html","8ede2d6564a11d98778b6f0008c3c058"],["/archives/page/3/index.html","a1d87f36111e6034bd3e5b0ebd123eb7"],["/archives/page/4/index.html","57525cc49ef80db163d37850e14fcaca"],["/archives/page/5/index.html","0f6ccfac6a5b4adc5ece6babf4f354a6"],["/archives/page/6/index.html","5d9b0a46701ace2d47e9af9f88c15d2d"],["/archives/page/7/index.html","ba0727ffd007cf4a4ea6ab579d090afc"],["/archives/page/8/index.html","688291eadf8c3f20d0432a2c12d66df1"],["/archives/page/9/index.html","b0957335e12748190071c1849a4543c0"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","c7071f4a7e44e4ac0f04beb315667fa1"],["/categories/Linux/page/2/index.html","343e2facbbd87d87836e34c2145f8ab5"],["/categories/MySQL/index.html","d39d907654cedddfe5fff469e40bd081"],["/categories/Python/index.html","df921a5ffcebfa734bc94ddff871109c"],["/categories/c/index.html","b21a3c87f6d05a0e1ce59f447c0c8c7a"],["/categories/index.html","a1f504554e44de3b370d4f7a242c7a42"],["/categories/java/index.html","4fc28641e58efc7d94962c6876f65f5d"],["/categories/java/page/2/index.html","80b9a81dab8bd1bf4b80f410d7e07de9"],["/categories/java/page/3/index.html","aeac576d23e11c02f2ddd0a4164c9ced"],["/categories/next/index.html","54d5d8b4c03e8af57f6fb46d0bd4ef7c"],["/categories/stl/index.html","05ae4297e8314593e2f542dd23b54905"],["/categories/windows/index.html","28ef0583d60bbff21fade639dec18a28"],["/categories/基础/c/index.html","869d74fa578b0414976f540a7916d838"],["/categories/基础/index.html","7414dae5f64a6f75c445ccda6adc14b5"],["/categories/基础/page/2/index.html","e204b9ca741fd9b464909eee8027ce2b"],["/categories/数学/index.html","c35a08768cac9e0cd24ab9c854dceaa2"],["/categories/数学/概率论/index.html","e41aab03c531ff9c853d26f99e69128e"],["/categories/数据结构/index.html","e726b29aa1bba7941fa0a40d23fc2ef1"],["/categories/数据结构/算法/index.html","1dabb8452c4e8cb0ac897f5f5d941a57"],["/categories/机器学习/index.html","152d053f48d8c1f7a7162bc1da0d33a5"],["/categories/杂项/index.html","65e901b9c301a62350084f72f887e96f"],["/categories/汇编/AT-T/index.html","0a49be9c6131db21b129800cff8496f0"],["/categories/汇编/index.html","f373259fe17b785e27860dd8521a55a4"],["/categories/汇编/page/2/index.html","c4dbc8f6f772ebb737f9270ce701d8e5"],["/categories/汇编/page/3/index.html","6a1242ccf228b64a8b031990f9a44257"],["/categories/算法/index.html","8cd27cc067634505e2a14cbc208c97fc"],["/categories/算法/page/2/index.html","c0692e26069381174a09d472f0f9605d"],["/categories/算法/page/3/index.html","168893660ad21b584f8fd7f200a67840"],["/categories/网络/index.html","5b549700e783b26ef5fa29583e8b44d6"],["/categories/计算机系统基础/index.html","8231c295359bca10c099f1b5fa51a7fe"],["/categories/计算机系统基础/page/2/index.html","26279cc8c7bf4e63c679be3d20b31dd9"],["/categories/逆向/index.html","8f9322ac6de5e54d3c4e4f9019ddb3a3"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5be1e25e881adc235a059a44acc9df3e"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","43a1717c30e51d9546e205f97c4e7924"],["/page/11/index.html","b6785cc475056973419d6b5a6cd95f58"],["/page/12/index.html","209991116a9b37fb163a917d414f82c5"],["/page/13/index.html","aa03ac949f83e47373c5e770e0a9f738"],["/page/14/index.html","0d2d82a8e58b58e67234807c92f0102c"],["/page/15/index.html","c2637a683e72f42018ed00ac9734aa7a"],["/page/16/index.html","7cfc1b61052fae6a9dfddd7f604011e7"],["/page/17/index.html","ddc1e4e361663c7323a2be8635dc9446"],["/page/2/index.html","ed36932cd06d031fb22c82af1e42fe68"],["/page/3/index.html","2ec1b2bf82f5de2781dbe5c06d986702"],["/page/4/index.html","68702b4a5e595943b5e49bbc85d4b021"],["/page/5/index.html","d1ba5da1fcd36ec51d3ac8c70d667fa4"],["/page/6/index.html","75ff80a2487973a375fc1608d0adc1c2"],["/page/7/index.html","a2ae01b4175ea92e2ede5ba755ace9d2"],["/page/8/index.html","8128005bceb892efec22bb9d40b71703"],["/page/9/index.html","5f7c6e85cf7c891c84069335132c4804"],["/post/10919.html","f0c7e3f2db9e40c564c67f3458300c4d"],["/post/11051.html","995ccad96e43b326acc84803071f222f"],["/post/11306.html","9897072a63ac3c327cfb0922eac8f2d0"],["/post/11491.html","2bf36202716f67ea472441f419c3c007"],["/post/11799.html","09867f3d3a01394ef33900a60adff9a5"],["/post/12334.html","b24438861e6172c8084c699d9822c189"],["/post/1326.html","1354e1f49cedeedf42e926b95a99db08"],["/post/14379.html","6fb569bc41e9a4eb60fba8fd37a2aa02"],["/post/14511.html","17d3458bf6482055a85a3d2ab4dd6b05"],["/post/15201.html","20ef5ec306e98cc03f241653f959ac8f"],["/post/15425.html","0a7dda035649e6f3df1e1eed8dfbe4a2"],["/post/16107.html","6b52dfad6ee6109392b385d46293192e"],["/post/16e2846c.html","2b4e84a8cc6eebfaeb4d2b487772a5e0"],["/post/17862176.html","137caf6dab2473321d2e52bc35e33640"],["/post/18431.html","9e0b4945e6e079b347f6dad365d0ba2d"],["/post/18912.html","6dc02cd1edfef2a49a75fdeddab3c279"],["/post/1b9c8662.html","3402089edb7be9baaada6c7221eab854"],["/post/20198.html","72331696f8e1e14c781162b7a4f35521"],["/post/20ff5ccb.html","fc3dcc3c64ce458d3563c824a17146fd"],["/post/21624.html","1eaeed456bd439f97985a6c3ee6aa1cd"],["/post/2170659a.html","6cf41e40d76da9024fce5c29ea7c0111"],["/post/22102.html","9c5847c3fb505afa221b3e454d4291ee"],["/post/22493.html","fe8dbc8a47ba6e7f89d7ea83cae02e42"],["/post/235252ea.html","b79f52a0bb9ee7cf879e911ea4d563f5"],["/post/25699.html","85fa2354c34005469fd41372531fb11b"],["/post/2647.html","6d34bd06c18a2ba35c3ceae7ed5fd052"],["/post/26477.html","90986c2a7741ad2a1ced8d785c5206a9"],["/post/26671.html","49d2e34161be855f1f1b88aa4dd89e98"],["/post/26737.html","a925f07f9ebf73fe4e79753dfb2b17bf"],["/post/27045.html","c45b6d791b5e1b311feb373e8a310efa"],["/post/27621.html","8ccf647e02fe5667f5c175de94a1422b"],["/post/27890.html","932956580a775b74c275f03229a8f11f"],["/post/27980.html","85988f7141c620f8fca0fd0b90bb0e8b"],["/post/280b588e.html","6bd73775299fc279d157f3abfe9dca21"],["/post/28579.html","c98c0a464885d038b2233acbdea5412a"],["/post/28877bf.html","14bb87363851aa1593e6286628fb0a80"],["/post/28954.html","6aa6ffcba8e9540870d4a162af8a9b22"],["/post/29378.html","b097ffc96da7b776b0518e15663ea2bd"],["/post/29949.html","c144a28cf1a209c42533527f976ac0e6"],["/post/2ae43b86.html","0c60fc533fb7b43a2cb069458cea7285"],["/post/2ba82a45.html","4b2aa8d6ece009bcd35b567a32e95f78"],["/post/2cad8b04.html","92e6e70cc0507dd4a5a40b05685ad4c1"],["/post/30072.html","8648e8965a327be319cfadb8c9fc7962"],["/post/30479.html","28f92d742c150a0377b7fcba97ceb75a"],["/post/31a6b40.html","1b403575e17a42d3e325826e3038b32f"],["/post/325cdbf2.html","6d20c8f077b873796dc15d8dbd41da02"],["/post/3319ed9a.html","5842f1a0506ade7397af9bded6e60820"],["/post/3320.html","17a0c586cdfde05775a7ed5162a4f3ec"],["/post/33cb1151.html","d8fb2d12a313c0388d2cbabe556dde15"],["/post/34811d5f.html","980d3b3e2e0574275560cab5cced1013"],["/post/348d4e04.html","ab031d8b1d6578158224a1774e21680f"],["/post/3526.html","c9e834754b34dd9af07f26ef4cdbd35d"],["/post/35532.html","d7fca7494db9a6462e6c1413fcb9c673"],["/post/35848.html","9ba39328f9284bcef9257d96f4ac166d"],["/post/37318.html","44fab8d34a36ff51b788e37c9141481f"],["/post/37663.html","2ec5ed14a6246d693280a440e4f1c0db"],["/post/38035.html","7fe849dc76f7b243536408539995963d"],["/post/38072.html","d8ff0fceb753e22482b8a7c9165d6a27"],["/post/38145.html","40906fd27855b5697c9ec4371d5f7e18"],["/post/39968.html","e918c600eed87be4e74c1ebce7c28850"],["/post/3de4bc69.html","0ee98d2529e258c20d07f46b17e6cdaa"],["/post/40583.html","3e1e8adbd83d0da51fae93785abdf92a"],["/post/40997091.html","d69761e04b3eac0243ec91f50b1ad234"],["/post/41129.html","1d30344c39ca0a5d299494260aeebdfe"],["/post/41763.html","fd9d1edfcc54cf9ff778cf8017fd289f"],["/post/41829.html","abe0d0cd1c3880ff0c398f1c684b8172"],["/post/41840.html","0c5ac0ee946239166b32058ccefdd3f0"],["/post/41e39f2b.html","c77618a41b8e4f6d5262cd9ef8a86d47"],["/post/43817.html","dab34866bb05a1222df61ed024e4f500"],["/post/43878.html","c0d57ae4d2c99f29e57cf4ef678acfd9"],["/post/44250.html","dcd7c8edd9bc032f44dee3d33fc1d1bf"],["/post/44336.html","7bc6e1eb165fa97a118f93af024cfa2c"],["/post/44454.html","c68cab99c8e58e86b1f97e4d9598236d"],["/post/44487.html","fed4fead76315108abc611f7b043e3ba"],["/post/44914.html","cf31024bc4094243494803709a7f2d7a"],["/post/4551c130.html","4017495b6c3f4730b8299a8943f2eee3"],["/post/455a4c92.html","3b0ffd10485c68bc4bdc11afcac54761"],["/post/46466.html","aea8dd70f1df502f2200c65df9e23dd1"],["/post/46925.html","89c3ee61eceef7e2d46c4ada939dec95"],["/post/47075.html","c03e598e42012793fe17c2994cb15d59"],["/post/48220.html","e807efcbb1e0bc2aaada69717cd86c06"],["/post/4b1879e3.html","2336b60b9751864e9115799325de005b"],["/post/4c720881.html","46134cab3a82d766d34bd20fb00aca4c"],["/post/50daec4.html","3ccae3784f21731ea0451c027c10467d"],["/post/51491.html","c5e6bae4aeeb8e3b03b2e2bb16bcc895"],["/post/51e63dcf.html","78484b111afe6f95f1d0d7bf3cb59313"],["/post/52078.html","f8ef7d3fca3671d9f0764595711bb9bc"],["/post/53677394.html","c47193641af99659fd8d067976bcd887"],["/post/54300.html","630f531e56f9a6690c7ebcb9feabcc5a"],["/post/54612.html","31d42fbbe19be4b1b5f6a1f14d7a3277"],["/post/54613.html","434cd21aa85002e3c7b484573e60b47a"],["/post/54708.html","906e1d28d99b7ac7444da929d214d0a6"],["/post/54778.html","3223f5f4c78e8bfa81af2500c4195a64"],["/post/5490.html","037e8c83f123ffac6f385928f618e213"],["/post/55046.html","eb1bd3e538d0d2748acb55f79e74336e"],["/post/56929.html","78eeb0c5fdd3fe50cb625e1876407c58"],["/post/57339.html","7b918b398f540cd3f273b8207c202964"],["/post/57449.html","5a7fe5f6b86df2f2f54ed00ec2ac2372"],["/post/57453.html","9d995495818839febfff55ed02445b03"],["/post/57671.html","ba9f496a82cc8dba0b0838f9e5c8830f"],["/post/58313.html","ffa68843633c68f0a6b0808026b64463"],["/post/58481.html","2284bf25e9e2b8cbd010f6ba8e0df837"],["/post/58986.html","22a54dd5d9bee6047f7e078f9f13a560"],["/post/59431.html","97e52b66d23ed4a196d5c27d6372f687"],["/post/5951da65.html","5056fe007df74162a8f6cdbb7a926259"],["/post/5be7e977.html","39d43d3edd352b613bdfada03fbefdd1"],["/post/5f9e4eff.html","eba23bbc70bf38c65cd1b0591db1aea5"],["/post/604b49d0.html","887b9fa8e0baba3094f0165433340ec3"],["/post/61312.html","6751e49c03a4f4b0b9b7d761f88162ab"],["/post/61738.html","31676702272186e985e7910f8c8d3040"],["/post/61809.html","769bf86f8312768f83c39411f855604c"],["/post/61eaf19a.html","b935305042597d355f95f3510b3d0e47"],["/post/63002.html","33742133b6a7f2503475fe003703e47a"],["/post/63711.html","cd3515954bb6431eb7365348f0a17a04"],["/post/6587.html","06b5341d58c738d5f13f62771d7af649"],["/post/6589.html","bc527317f2aec915a5250be0420d8cd2"],["/post/67454659.html","f96df0dc918602175b5c494d73bd980a"],["/post/6880.html","274705411179ca1ecaf0b82296779974"],["/post/70263071.html","9639beba1146500d8dea0b00a9fbe24b"],["/post/71038564.html","fc933b94657699bc7786817bcc193430"],["/post/7119.html","16b62dce88203f539402f25a6acb8167"],["/post/74e7fdff.html","38be5f69c357d51bd2caada0f1a825c4"],["/post/7502.html","17aebb727646c0db51e0814e17677b41"],["/post/7564.html","2124aa58191d13d6fa641f201a7e629d"],["/post/766f9b60.html","de356d116e0cd90da334b10b56d8bdec"],["/post/769365ef.html","4433984ccbc3590e110061a44ba6ef4b"],["/post/7ca31f7.html","1685677ca337131a8e4edae513d95b9f"],["/post/7d1c86da.html","31c4dfc2fb6954aaadc520cf4a818840"],["/post/7f3bcd7f.html","c89a8268fab2c7cc82f74dbd99e30f49"],["/post/8039.html","679164d2fb66bc9a4ad6eeacbb465915"],["/post/8050.html","c10e01605878a4aaec3d9ac6424eef48"],["/post/8072.html","609c221583908a4aeea3b97e86147e84"],["/post/8274.html","b5d39697f6bcfde5ed76efb5bd2fb319"],["/post/8372.html","48551924eeea1f85aa323ebef324efb8"],["/post/8498.html","371f912253c1bc7a43e177131792521e"],["/post/85b4e13b.html","4402ef3144240c4891205e1032725fc5"],["/post/912b2566.html","e98960871c50b3a888038892e56c213a"],["/post/9187.html","d70483e56d985624c7f460dd90a8e952"],["/post/9197.html","45ec923dcb9c6309edd704033cc85f43"],["/post/94ceb2fd.html","4e9d8416bd84b5f0effae8bbb871cc9c"],["/post/95495db.html","318e7210a56d99a4c4bf487498cda804"],["/post/97246020.html","af199fbd14f2bc16d3a7ea96c7a2c874"],["/post/9954ba8e.html","65365601a78b4117edc8cfbe290bb3fa"],["/post/9d855db5.html","cc2bb2707a1489ee7f35dda8f1972eab"],["/post/a3a786d6.html","36501e8b3b42aabeabe37bbc6d49a7bb"],["/post/a444b428.html","e89044ae06bfd53ea7de4ed463fa12f5"],["/post/a50b8908.html","6efefcef42b3b7709c44443620a18583"],["/post/aa1eade8.html","ecad3e75ffc6703bbd76876e441e12fb"],["/post/ade8c6d6.html","db2bd8d56a09fddfb37d9282373bbb57"],["/post/ae8362df.html","58eb3166640edc32ece1b10f506cf160"],["/post/af3eed3c.html","cc509108494fa3be7f916563c468c1b6"],["/post/b4c1d206.html","788e6b9b02bf761c54b650f19b8cbc96"],["/post/c82a1c99.html","5400146991c968a61cd87c2411e04c2c"],["/post/d213fc7f.html","197b15690c3b9d91344c46d97095337f"],["/post/d431fab4.html","61bafa313d62909570913b31459943a7"],["/post/d5381517.html","7572731471c50355418a9d2c8a87a985"],["/post/d94f88de.html","af35a551c315e4c46f9948d1c71f8022"],["/post/e058ffd8.html","06cfadc924edfd40f76df57aabcbcf8f"],["/post/e0f8cb74.html","10dc9e87f71f0e3c99effd3a0da06214"],["/post/eefe591f.html","ebb58d0915f9ac1fe9b77f4678c373bb"],["/post/ef296a07.html","e5c14fe7290745a029822f00e120eda3"],["/post/ef3a3fcc.html","cfe590447854e633bf93333aca4aad72"],["/post/f201f9fd.html","a31e5c4a02f607c4152d29a21eb88e81"],["/post/f79e4123.html","6fd89870bf39bce76e2ae63bc45e739b"],["/post/f8648a1d.html","b222a3fbc606fb1478a45e0c4789ad10"],["/post/f89cb603.html","db032e938b701a1ea042ff6732dc0809"],["/post/fa288682.html","89419a70d128e6adf65a4dd092ceb945"],["/post/fb98053e.html","c041d745f0ed15b3c3c3477946cf5002"],["/sw-register.js","293c0d25ebfa1adbb9bff25929f068c9"],["/tags/AT-T/index.html","738bd49b2a3f2ab30c3e52c734c3574d"],["/tags/index.html","831c72095e2a5b68a56187646032a273"],["/tags/动态规划/index.html","90712ffea0e4c750af57ae9106a2bcab"],["/tags/字符串/index.html","3ed352b7b1cc261ae370197163c919a3"],["/tags/字符常量/index.html","3d83ac4e592a4114af7a369dbce3ac0f"],["/tags/快排/index.html","76aac4d008cd48b52bd8d27d5b859d35"],["/tags/排序/index.html","d2bc1a58b0740032961c2c17e1a97f28"]];
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
