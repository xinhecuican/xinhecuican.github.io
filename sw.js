/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","79fe67b29653ce9479d090aafd392abd"],["/archives/2019/index.html","da3a61082c1cb28cdfb0e6e3eb853358"],["/archives/2020/01/index.html","60e33036d4719bf684c7a822718f1718"],["/archives/2020/01/page/2/index.html","811c1e5be7f71e6f9649e59fc8086f94"],["/archives/2020/01/page/3/index.html","757b3939277306cf3b44f60801d29c1e"],["/archives/2020/01/page/4/index.html","f9fa3d3b48a1fd8fc2b53931908aca18"],["/archives/2020/01/page/5/index.html","d54fb3f31d87c98e81a5a25d56592c8f"],["/archives/2020/01/page/6/index.html","c583582fbd633af4af2ce7178c2d8c23"],["/archives/2020/02/index.html","4bc9fe39450748ef8895cd698679dbef"],["/archives/2020/02/page/2/index.html","dd0aa28eab3beb7f9466c85f5b0c04ed"],["/archives/2020/02/page/3/index.html","689e21a106c4e5692374f4373ff95477"],["/archives/2020/03/index.html","8ce44a9a1544f763223e04b0821ed714"],["/archives/2020/03/page/2/index.html","da24e90229a3152e7d6b50fdd64f7b00"],["/archives/2020/04/index.html","42782f256b11c4158da39684244ba8a3"],["/archives/2020/04/page/2/index.html","f07eaeb8304a3cecc889137e3f5f703a"],["/archives/2020/05/index.html","b02e2d4e15b363d3d927b96a5aaac813"],["/archives/2020/05/page/2/index.html","985bf515eadce79457a20757252cd90f"],["/archives/2020/06/index.html","79f2670912ec10295cb12bfe3208b10c"],["/archives/2020/07/index.html","6caddc1eaccf108ee772b7b6421fad63"],["/archives/2020/07/page/2/index.html","a7b1d31002f288ba4f1b4714710f7dd7"],["/archives/2020/08/index.html","f7bda3a24814da34d93802749adc4098"],["/archives/2020/10/index.html","96c2c540da99404d27b05d2bfc5e5b67"],["/archives/2020/11/index.html","7bdd606a0df72f45ac25beb2748cfda6"],["/archives/2020/12/index.html","3b93713d1c4a8b958c6db406e03560b5"],["/archives/2020/index.html","428d1c388b940e6c2df637d66bfec23e"],["/archives/2020/page/10/index.html","6f3d2c27916a9ba229cb8d1a3ca3de44"],["/archives/2020/page/11/index.html","e979ccb355a777d8461b1a4c1aed68d8"],["/archives/2020/page/12/index.html","58e33cbd42df4f8a3af8790836cf0aaa"],["/archives/2020/page/13/index.html","a853b5b74c488cac1034cbd173da8321"],["/archives/2020/page/14/index.html","ebed069d676e2ca8b81ab5d442a805f0"],["/archives/2020/page/15/index.html","73e62f633f7d0d74cdfaaaa83062712f"],["/archives/2020/page/16/index.html","dfaa712563d5b2d80f0e321a212815cf"],["/archives/2020/page/2/index.html","1f0dc8d705ffa94ffa77880f248f424b"],["/archives/2020/page/3/index.html","8e9b67542fc9953798d5689913b523d2"],["/archives/2020/page/4/index.html","9bbc987d314d72eb27e880f62719aa76"],["/archives/2020/page/5/index.html","85bbbc7abf31051558ab42da36171319"],["/archives/2020/page/6/index.html","bd111d2fee100766551ad43aed051985"],["/archives/2020/page/7/index.html","937c7d3525f71437947c4ae74267cbcd"],["/archives/2020/page/8/index.html","4f05ccbd3ca44c55d5eed6cfe1cbd7f8"],["/archives/2020/page/9/index.html","caf5976f681bc0ba1ece4e10e4a958ea"],["/archives/index.html","3ef2a33ea19a9f04bafd596cb2d4542f"],["/archives/page/10/index.html","e3d307a1c4489bc33015eb8d491d0955"],["/archives/page/11/index.html","8acc27111ec81241db59883eb957312a"],["/archives/page/12/index.html","bcb6479368cc5b603a14b6863c432ea6"],["/archives/page/13/index.html","ac1ca7ff7c78fa67272af4a8f584a469"],["/archives/page/14/index.html","fd3564ac6156f027a86152881e32e5d2"],["/archives/page/15/index.html","35effaf46eea55e48ff6ae4e90ff5eee"],["/archives/page/16/index.html","16dbeeeb5b895d1e216bd295e7833985"],["/archives/page/2/index.html","c931fbed31859c500deb07f17d772146"],["/archives/page/3/index.html","aa5db6d9b6888ca116ae4de58e33cec3"],["/archives/page/4/index.html","e365e26989aebca029c95305bb240c1a"],["/archives/page/5/index.html","67e9f8d2b1dc60922f80fb04be567f32"],["/archives/page/6/index.html","71250e385fee29f44403299788a34ad6"],["/archives/page/7/index.html","d93f473f0b87eb9e74ebed86f5c292b0"],["/archives/page/8/index.html","852884d8f20892d815de55cfa44848a2"],["/archives/page/9/index.html","afa4762ad201e077936f470f1523efe1"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","62a7d7d313d7b1438cf4c8afa2567045"],["/categories/Linux/page/2/index.html","c8ae8f3f29000fa04a0753f0eb8d3e16"],["/categories/Python/index.html","7c0cfb475dc10fc72faa2d6d224d084d"],["/categories/c/index.html","d3ab0ec35e9b677fe794ce92d6d667c1"],["/categories/index.html","9e271c9ffb2b9b55ddae4d56f9fe3de3"],["/categories/java/index.html","c44b85a73c3926056997a3e18c4ec98c"],["/categories/java/page/2/index.html","a62021fc915cdcd96efd3f1ade3de5af"],["/categories/java/page/3/index.html","a2cd28737026c70b3d8b8d9857d17abc"],["/categories/next/index.html","6e983c9019c958985599c7065902d4e2"],["/categories/stl/index.html","1512c6cfc5bb4843e60bb199741c0b8a"],["/categories/windows/index.html","5d3456021e4e554fd2c3f85f468e9f29"],["/categories/基础/c/index.html","377b100c036df6308902a4700f9bffba"],["/categories/基础/index.html","0ab55f9be27e4f6a0edbf04ba32eb9b5"],["/categories/基础/page/2/index.html","b0025ee60c898f98fd161152306dab77"],["/categories/数学/index.html","c89f55bef96808bcc7664f18ae019f6c"],["/categories/数学/概率论/index.html","3f88d808ca54f8e869c5f801df6acf86"],["/categories/数据结构/index.html","585efaf7f22d5b2e135cdb18448f88fc"],["/categories/数据结构/算法/index.html","f35231007fe22e7082b33a2b378a80c6"],["/categories/机器学习/index.html","d531334df46c68b95d95dcb5e43910ad"],["/categories/杂项/index.html","4a1a485d03ff072f8e702ea1b365e47b"],["/categories/汇编/AT-T/index.html","9c80c6ded8ea8330e26ed4fbb6422170"],["/categories/汇编/index.html","7419bf611ae6a2e8beae0770e25c0e5d"],["/categories/汇编/page/2/index.html","b19202557040ec4857dcb88b23c22687"],["/categories/汇编/page/3/index.html","7d57f1da2a7c3b4bf9d21ccca23dda00"],["/categories/算法/index.html","abf7597c64aef00e25100b65caa90caa"],["/categories/算法/page/2/index.html","b354f5089e2774c5239bde7196a5108f"],["/categories/算法/page/3/index.html","b6a9b0263247e3fdfe54ada4cc5b0d4b"],["/categories/计算机系统基础/index.html","da48bfcf528561331e179a9610f87fac"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","c5e184f6ef3e1d529083c65ecb2ce826"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b1452fbebd4b7524f2171b066a65f400"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","ad8ee7a10d18e4961696a8235c810df5"],["/page/11/index.html","c2283caab6d16ca449aeb44d6ad1f105"],["/page/12/index.html","d0d1244dc71df27d891aae11396784ac"],["/page/13/index.html","b4a5ab2c6fb4194c5cb56f191911303e"],["/page/14/index.html","f774f654da015fac155fce2d374d5762"],["/page/15/index.html","3c183ff7b2adaa89a57238a5b2c3bb37"],["/page/16/index.html","07e5e68bb1ef97ee9b9f8232acf2ceee"],["/page/2/index.html","fbe82954c4191616cd8002dc017ab5d8"],["/page/3/index.html","117893af3b1034e9ccc0f3bc5da38dde"],["/page/4/index.html","d39cb2e763dff4d6d697dfb618f7beef"],["/page/5/index.html","24261ddc3e7fc67da253834fe1975a14"],["/page/6/index.html","7276eeecebed1b3426a414b43019792e"],["/page/7/index.html","bb2f87248d16c557deca72a0d5081a35"],["/page/8/index.html","6fc670c1c6904ea2b4875f022f3b63a0"],["/page/9/index.html","3249adf9fbd7bfe12a17ca1fee7014c3"],["/post/10919.html","7b2b8b1de9a2d7c235d0a34a947188e3"],["/post/11051.html","bb9ee50e2ef51824aad5fc2b0ff6c8ef"],["/post/11306.html","e5b0c45e24d1acd188a7252ce3627379"],["/post/11491.html","0a1a2e2467ee88c9da5d72b542db35ba"],["/post/11799.html","95fc65f74ef235f1de27e5f05e061a18"],["/post/12334.html","eada778f266ac7a0e83456202cdeabde"],["/post/1326.html","90fc2cca1f972bcfee21983faafd455d"],["/post/14379.html","855ade270a9cbf7d2cc86ee5708e44ce"],["/post/14511.html","f6cbc3860f21b87f09be07a432b19195"],["/post/15201.html","dbc17f4b10287824a5218b5fddcef4d4"],["/post/15425.html","2273e5665a7614327fd09a283329ab1d"],["/post/16107.html","4c1d766f381b1a6c56d699e2f5ce55b3"],["/post/17862176.html","2f84800f1d2eaec8670ad0fbec47a649"],["/post/18431.html","5034ff6f075eb048f5939fa3062de455"],["/post/18912.html","f7e07e6d681024d9c664d699ff919df0"],["/post/1b9c8662.html","e8538098d38a653067b0f64a43f38c57"],["/post/20198.html","8954b5f4e97b094f1d0a76b9ac276eb4"],["/post/20ff5ccb.html","13925b5d619a53d32e57c61766a5e8da"],["/post/21624.html","addaa2797cc688f0fc4a0161a9eef861"],["/post/2170659a.html","69de5cff68b56cd6e529a2cbe7e6794e"],["/post/22102.html","59410dcd0037b7e58d9901c8aa151fac"],["/post/22493.html","d1065150a456919bc9badd912fccdcd0"],["/post/235252ea.html","13381939d7f74d1c10d4d91b796144a8"],["/post/25699.html","a8ba95a99ad03118241a2473ddefeeeb"],["/post/2647.html","5f66113f9c0e04542219c38d78b35f8c"],["/post/26477.html","212309da991927640414e9587c3ada6d"],["/post/26671.html","f43ef6895edd39d26b418382f9ca18c1"],["/post/26737.html","5cb90a990e57c6d1a19388d4ad9975d1"],["/post/27045.html","7377ec1a9102eeef05bef3da710c8db9"],["/post/27621.html","7e822c24ae96bd1fa913c69a2e0fdf60"],["/post/27890.html","0c4279484bb134d4ae3fb4dda8d5abb3"],["/post/27980.html","a901054e978af0d294a11bc5a892cc1a"],["/post/280b588e.html","9d79cdfd72155f66ea2847d55bca14f4"],["/post/28579.html","033a50ef0f53b60bdad076e751ae137e"],["/post/28877bf.html","03385d16fcbb7fc2a33f7729904e3e8b"],["/post/28954.html","a987f53c7f2d944a32b201a46604748d"],["/post/29378.html","960dc98106f97607db0e630301fbefb4"],["/post/29949.html","e6e0149c345a18f3b96dc7c2431730e2"],["/post/2ae43b86.html","73dce30e4f34b68b2805bbb6e2cb309f"],["/post/2ba82a45.html","a7b57795acd086b440c1699f0586695d"],["/post/30072.html","df4c5d7d994e79341a2c355340ffe253"],["/post/30479.html","996301a102670eb9468b4987654d573b"],["/post/31a6b40.html","06ba89cd3dfc9c35177d0c3bc9654c2d"],["/post/325cdbf2.html","4a08651a5580a69acc91d813ccc38435"],["/post/3319ed9a.html","844af02c59252148584ee7da8a13c217"],["/post/3320.html","e05311c7fdcd55b8a9cad1bcca24e392"],["/post/33cb1151.html","5e83a8e7cd8b2e605d20e3d3bc89d2c5"],["/post/34811d5f.html","1fab055d1afa7380c0d79dbc5fe32f84"],["/post/348d4e04.html","8a441875a218bdaaf41518d671afeddf"],["/post/3526.html","e19f3ac79a263903bd7c4020f6c2c289"],["/post/35532.html","b839f43d0438821d72c6fd4e9a3a0167"],["/post/35848.html","b5e41631dd6bc6d8ae90f2fe34ab4040"],["/post/37318.html","cd4b1bb4a3c536af402481e9cd2108a9"],["/post/37663.html","b158a5a25c36563be312c3abe5db6a4a"],["/post/38035.html","224f4dac1e8ca8e8839bd165279736dd"],["/post/38072.html","b47202b6867f43db5fed62b77a39fae5"],["/post/38145.html","ede8a4dbf834db688fb386166d61d90f"],["/post/39968.html","a8c149762ba5abd9b87f5fa285a41154"],["/post/3de4bc69.html","318883be44e23a057d725c30e0baa083"],["/post/40583.html","15f4cedbb8bb2ff20b03a80f53687703"],["/post/40997091.html","11cd411b33248f0d7771d0a3f8a041f3"],["/post/41129.html","c465e2e906ba84ff6689310e6e007d1e"],["/post/41763.html","a52dab7568bcc6107c97fac2c9c08bb2"],["/post/41829.html","a3233e9c0d534a28c60edbda626f1d4c"],["/post/41840.html","c095b1a5077af5616a0ad41ba58b0299"],["/post/43817.html","0411ad193fbf78495b3ff0d253329d1c"],["/post/43878.html","c6ab9c3bad44d04b01e3fb761082294f"],["/post/44250.html","68d3bb3ecc08ff9c0d943459a34e6681"],["/post/44336.html","ee57051c4947aa0f00404f6aa1f7ecd3"],["/post/44454.html","92fe5c5ae3348057e7a348b2bb157963"],["/post/44487.html","56b5b146cfcca20aef3744ea8fa1e8fa"],["/post/44914.html","5c0ecc79e86ec7e7405bda2548839d7c"],["/post/4551c130.html","e0a7c454e1a6c40f6f466c2d13c47206"],["/post/455a4c92.html","e7e3e4943e73ef5c325d901d5b940e2b"],["/post/46466.html","74b43f7fdf92cb224836e07985643223"],["/post/46925.html","6bc6ce1eb43d8db03d1bef0a9843ef81"],["/post/47075.html","bbd1dcee69955baf9bc0cfa37a7fc358"],["/post/48220.html","1d949101792d3a994eba8a2bd92b6b79"],["/post/4b1879e3.html","f24107b9bdb13e4d55dc5f62221f4ac3"],["/post/4c720881.html","0abcf2ad17eb8a2270d9c38a93f15142"],["/post/50daec4.html","8cff54754ae0f40a8244d1ff808a94a6"],["/post/51491.html","8afc3a2f31e4f824c4bbfaa420f036b7"],["/post/51e63dcf.html","535c221f86d35fc76e7d9fd0e8fee1a5"],["/post/52078.html","c302fd673e928cf4f35f2ed1795e2147"],["/post/53677394.html","affe5df854db0c310a8fde069432d8b9"],["/post/54300.html","6d192c935c727a6ec98dff99ed69d191"],["/post/54612.html","358d10b94e0e8c928baa0d0ca5fbf656"],["/post/54613.html","ef19bb90dbb26c18a7eb8b4bccd12b80"],["/post/54708.html","76c4050c33a7aaa6f38423ffd05ef253"],["/post/54778.html","a2eb35d1f5cd045f9cd3eee530d16dc2"],["/post/5490.html","3d991d63ed53d10c707133dfb6a1212a"],["/post/55046.html","09a339c6ef8cd1446d8c6d8d7c4635e6"],["/post/56929.html","1c83388ae9cc81817ebc71693f149de8"],["/post/57339.html","79ac81079a0a80e16a68ef05c688829b"],["/post/57449.html","78cf3e8de68e15431feac3d15244e008"],["/post/57453.html","26078887066049d06b521796c352e027"],["/post/57671.html","04ed5148862f40e8af8358dae65dbda7"],["/post/58313.html","f96edfadacbf6cdf97a3fcd67fc4ef6c"],["/post/58481.html","7e6a7e8e35af005356d2ff1729607ca8"],["/post/58986.html","01a091bb4bfd27d8d39a3141b6ea00ab"],["/post/59431.html","375bbb8a96db29b59895d72f8efaa86e"],["/post/5951da65.html","ea81fd30a763785da8dd9a95e42282cb"],["/post/5be7e977.html","d09f7d4a9dbce6b451127a6f3a031298"],["/post/5f9e4eff.html","62897178fa364289f76056b0d13bebcb"],["/post/604b49d0.html","be3d4805dc90283d69f58f157c410a55"],["/post/61312.html","32ef85fd00e9a3f005b976298ab640d5"],["/post/61738.html","cf27eb5d056bd2249f6e8ead1344e44d"],["/post/61809.html","8d0e82105fc813050a05e902629cd70b"],["/post/61eaf19a.html","245f5e063c2bfac8ed8efee874f9a5a8"],["/post/63002.html","93a5ea1ddd0bebe03ab7f545750303d6"],["/post/63711.html","9bedc83c2ea9f40d881a713e2bd6c942"],["/post/6587.html","c0cbe430de43ada3cb6c5d43b0b7b2fa"],["/post/6589.html","64d32cc21339674b6e06de2e59acbd52"],["/post/6880.html","47f6e3e31258ce054513de54c568a98c"],["/post/70263071.html","57f7cfd362870c9b755a49635adafc3d"],["/post/71038564.html","be44dccc7befba59afe0117d251b5ba5"],["/post/7119.html","7f6bee593618e385b82909e72e578608"],["/post/74e7fdff.html","7ea47acd2b270286f986a7732304b928"],["/post/7502.html","000fe7d92bf404d3134fb43fb195d38a"],["/post/7564.html","d67204e1318ffb329c1ac2704d40732c"],["/post/766f9b60.html","37534df22084090f757709cb3a272f27"],["/post/7ca31f7.html","cc81e76fb7a46519b8c8d014208cf64d"],["/post/7d1c86da.html","5b33eb2f395b1d43845ee2859bf76623"],["/post/7f3bcd7f.html","66d69abf330d3832a1e6fdc2d5969702"],["/post/8039.html","04fe701de923e45528393b6997eaf237"],["/post/8050.html","f70ca1ac19478f04001f9d55513c9c8d"],["/post/8072.html","23290b89743a78b0b9f5179dd7a3df5e"],["/post/8274.html","e01f1bcde499f907e299b228a6889252"],["/post/8372.html","a01d82f4fbea30ed36ea4cc8ba4a3623"],["/post/8498.html","b00dd26149332d3838227e1372a5628e"],["/post/85b4e13b.html","2b4889e8c1d6744878ee49981b895f02"],["/post/912b2566.html","51ac145df85efecdfa6919fac3585ec0"],["/post/9187.html","0c4b6cdbf1043c84de95b7a7ec95c876"],["/post/9197.html","8505d69c4a7fd65285e8d0eee8be66aa"],["/post/94ceb2fd.html","312c5401b9ad0aa53fd9f148b2f89b6f"],["/post/95495db.html","efe981b3773d61f4bdb822c9b372f2a2"],["/post/97246020.html","049010d92dada52eda25263a19106aee"],["/post/a3a786d6.html","e6e1331d177f3ac8def1e53a69682ee9"],["/post/a444b428.html","425b56202ac925f2033c1a93ff78c5a9"],["/post/a50b8908.html","bf4ad4e0b03a88278b8cc567cc1a6b45"],["/post/aa1eade8.html","d43cf20a018744d1332e72c169284143"],["/post/ade8c6d6.html","181c916cecd1d3bfd39edb89f7616e66"],["/post/ae8362df.html","0936694cbe1dec05b029bae125136e65"],["/post/b4c1d206.html","3f7a076db9976620b52444c27c1710ae"],["/post/d431fab4.html","2e2f8c02522bcc4fe7c8235f0e9fd56a"],["/post/d5381517.html","2b8111ddcbec73f813aa290f958dcb24"],["/post/e058ffd8.html","1f29c1efe4b29d21ba09a1bed6fd0a08"],["/post/e0f8cb74.html","7bf4af6067b32dda791085b57f0ba103"],["/post/eefe591f.html","7d689d5cc4cb4e1919fedb160f7a0a59"],["/post/ef296a07.html","44cb4d495954189655b0c700c8598e11"],["/post/f201f9fd.html","71d49528f836969359dd7a4879c0a033"],["/post/f79e4123.html","4a1b2253dbea4493f13bb92972cfa7cf"],["/post/f8648a1d.html","a1384705a66a713e39af25451c7059ea"],["/post/f89cb603.html","d003c5f87f6f279f50bde9158c361269"],["/post/fa288682.html","23592629cd1692a208e88d6d4eda855a"],["/post/fb98053e.html","65df6f739d33ee14ca58dff27d9270d9"],["/sw-register.js","8bf776e873691b7c05557997d09ff9a5"],["/tags/AT-T/index.html","a0244341da583a72c71501eeb211664f"],["/tags/index.html","7ef0c7cae85d656dde85a0ec301899e4"],["/tags/动态规划/index.html","66f30c601d321dd7698943074dd00b53"],["/tags/字符串/index.html","36de4c77a6172e2fa2714ba393686141"],["/tags/字符常量/index.html","3cd3d687015979de10abb9b95394390c"],["/tags/快排/index.html","8f7e0027f1c1db66252fada3d4d826a0"],["/tags/排序/index.html","f65386446f72aaf6c7568af2dd377bd3"]];
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
