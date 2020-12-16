/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","1ab0965d6d7f8c1d61761d3df8c78a11"],["/archives/2019/index.html","1128036beaceaaef7602852fc78229d9"],["/archives/2020/01/index.html","41769587ca068bcd1dbf9c7f6e5c1ee6"],["/archives/2020/01/page/2/index.html","d542b0c3587380802c230caae6e6cb0b"],["/archives/2020/01/page/3/index.html","1ecb6e90e76845ddb0e7348789e8cd44"],["/archives/2020/01/page/4/index.html","4296eaad50af698b7b4db1b018f3ca6f"],["/archives/2020/01/page/5/index.html","4a6267a1db23bebd1ae2ccf49a076511"],["/archives/2020/01/page/6/index.html","8803621ebc183761a42c9027ec96ef0d"],["/archives/2020/02/index.html","c74186bd504fcee900f1b18af0963a06"],["/archives/2020/02/page/2/index.html","5c673eb0f9e9f108f5ad246f6a0e9dd5"],["/archives/2020/02/page/3/index.html","47cac100b6141b443ab308a37b08c46a"],["/archives/2020/03/index.html","e00f1c890b0fadeabaf910da75530f17"],["/archives/2020/03/page/2/index.html","a1008a2482f28460cecc8110bd9708f6"],["/archives/2020/04/index.html","df1a4fe7ed673c6063c133772ba8792d"],["/archives/2020/04/page/2/index.html","31d7602cac95a5f1e8bf311b722ab17c"],["/archives/2020/05/index.html","8de37f468f3efa2eff913893901f829b"],["/archives/2020/05/page/2/index.html","93744b5b356288702f5f26c0b3ef14ea"],["/archives/2020/06/index.html","10dbea3b5f487a3fe711b9c7114949bc"],["/archives/2020/07/index.html","8da441875f909dca367cc2fef5e1416c"],["/archives/2020/07/page/2/index.html","02da1381e7e9a59947a57284e8f70b70"],["/archives/2020/08/index.html","397320ae3725c061094708e4c970613a"],["/archives/2020/10/index.html","1321e36a78ce6c6049a864c065e8c43e"],["/archives/2020/11/index.html","9c1ae6311628f58a27c427049b77e210"],["/archives/2020/12/index.html","a0da94906e23bdce237f2aa145c60ac1"],["/archives/2020/index.html","cfd714ecccabf2fc55c2c3c3ebb5b25a"],["/archives/2020/page/10/index.html","ce405110ebb97ddb46a4639bf7b1fa8d"],["/archives/2020/page/11/index.html","daa379cb83b82b8d4821106a0192a3f9"],["/archives/2020/page/12/index.html","062b713dfac552d454b96d1ea739f324"],["/archives/2020/page/13/index.html","41ce58c861a11b3eb446ef70b3e5c384"],["/archives/2020/page/14/index.html","33b1e83769d2df294a43fd523f0dd385"],["/archives/2020/page/15/index.html","836062f89e3b709953c4b500c7d97b09"],["/archives/2020/page/16/index.html","dea4bc72f8d66ac08a3312cda4518431"],["/archives/2020/page/2/index.html","e887e8700bca48748e9eae4d883550ae"],["/archives/2020/page/3/index.html","18cb07d36abde337d7eec43fbf9d252e"],["/archives/2020/page/4/index.html","c54243f7b7c1e973556ba427eb65496c"],["/archives/2020/page/5/index.html","3fdc254efc74e5d079abea2c055d24ce"],["/archives/2020/page/6/index.html","11e1682b74d6a854390873da4cb425a5"],["/archives/2020/page/7/index.html","6187b018202233f0a75b90e88b95e804"],["/archives/2020/page/8/index.html","f6d375909cce8398aaa09023ad9eea69"],["/archives/2020/page/9/index.html","97209990a37c542c1e2291fef7079e24"],["/archives/index.html","87e487d78e3ab7c70edbf5bf02262a87"],["/archives/page/10/index.html","c33875a5e2b19af0e6e092a4a8d4f0aa"],["/archives/page/11/index.html","ad05433b019e5d22d8ba05c1b53421fc"],["/archives/page/12/index.html","41451a85256f43a676ac6bbba4284142"],["/archives/page/13/index.html","b383c33bd520f952690e4c6425b18c23"],["/archives/page/14/index.html","b90621358d004635b711235e69fb79ba"],["/archives/page/15/index.html","7e911061429a8a4bb856bb1e58b5b4e8"],["/archives/page/16/index.html","5f804aa2c23f95b058f03b832c658233"],["/archives/page/2/index.html","06c87edf5542107141a2288790617444"],["/archives/page/3/index.html","5e46e9dcbfdf87f0ded430d609f07463"],["/archives/page/4/index.html","82d08a2820749a68f7cd913216695342"],["/archives/page/5/index.html","50c211929abaff90325c16bafec0a6c8"],["/archives/page/6/index.html","dd9d2e7b2480d18804c8bcc4ec82cb18"],["/archives/page/7/index.html","350cade6499a9fc43e11ddfe0748d11e"],["/archives/page/8/index.html","44f652a69c8fd7600fc6766284d3d9e3"],["/archives/page/9/index.html","52ebedc237fa849be80ff7b14b349972"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","14e06de9b2c086a5b86129d7bbfcb2f5"],["/categories/Linux/page/2/index.html","e8b39dc376cfbeea15614cf2b04376a0"],["/categories/Python/index.html","d8fc5ad535b7ef087830287743d309af"],["/categories/c/index.html","ca46d981c74fb546ff1b5030f57ba3cc"],["/categories/index.html","41a6167c9e531bdec4a4b8ca010ebde2"],["/categories/java/index.html","ca598648ea175eda51aba2233621cf6a"],["/categories/java/page/2/index.html","5e92c8b0b8b9847f382446244fe2fdef"],["/categories/java/page/3/index.html","3990f0d1b0d8f28ca3a039dc49bcbc53"],["/categories/next/index.html","2a770e924273c16cf5c9a15a4c4d9982"],["/categories/stl/index.html","0cee001b185c0c0cea4418e57fd2e7bd"],["/categories/windows/index.html","033b9b733c384ac2f8e092f4fca4d558"],["/categories/基础/c/index.html","104038f54d9e78588c72ddae835f834e"],["/categories/基础/index.html","3e548308db3d69ce3ce6763be097d387"],["/categories/基础/page/2/index.html","55118badb80819c5406f403dc6bab890"],["/categories/数学/index.html","01077460aae69661e31ac6035e013a6a"],["/categories/数学/概率论/index.html","a8af4f9fb257eaeebcb469104175c43d"],["/categories/数据结构/index.html","f5c043647df7cf69d94479500b169f87"],["/categories/数据结构/算法/index.html","b473ce2002ba7b0476cb5f92b32ed704"],["/categories/机器学习/index.html","8a1065b15dc75c014a327b716f46508f"],["/categories/杂项/index.html","740c513e79aaf07895c52178d93db7c2"],["/categories/汇编/AT-T/index.html","22dffef032459ee2ade74ca5574df4bc"],["/categories/汇编/index.html","e1b34feac347e33887f816de82c92d28"],["/categories/汇编/page/2/index.html","dfb8915469e00a6f41abc8ffd01e1cd8"],["/categories/汇编/page/3/index.html","2cf23bd5f96c2abc2d1ff24b9aa98116"],["/categories/算法/index.html","c59a945334ed8d5c7fd18223894fbf39"],["/categories/算法/page/2/index.html","f0b428b0f511e09cff340de909e6220a"],["/categories/算法/page/3/index.html","6ccd8d76f875f1b93177c4912e9e7a52"],["/categories/计算机系统基础/index.html","f96e2f675daaf18176cd284ceeb7ace4"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","04f79a5c1ad443c39d4db685486059c3"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","39ad6fd6d8282f61af09a58344ffa2ca"],["/page/11/index.html","7cbbd8564eabc1b3ab65539298295dd2"],["/page/12/index.html","103e07f3a3481f1ef2349cb0325aba49"],["/page/13/index.html","c09619389a019da7a155b43ee9879d6e"],["/page/14/index.html","9c228335a2e9774713a9e54623c647b7"],["/page/15/index.html","47aaac015f557da16477147fae21f455"],["/page/16/index.html","74324d826f32426bc5f72400a99c0a9c"],["/page/2/index.html","a3474265e9241b634bcb6bb92ab79b20"],["/page/3/index.html","bf8afc93e8e6158f684faca3518e9c29"],["/page/4/index.html","ca91f77b0c21e4b7a912887f30609a24"],["/page/5/index.html","7bbadaf8325c1e86a5e6e83a6a172cbb"],["/page/6/index.html","e503dec4c77ff72ac913319ce93732e5"],["/page/7/index.html","1f49b159ba51fc74aa89b16169dff9e8"],["/page/8/index.html","c73d76de9df3eb78840995d78538a1a9"],["/page/9/index.html","59b9c49aac98cf3e82495ac39822b9f3"],["/post/10919.html","f14f822c2eb0b5cb0b6f15abc0b184dd"],["/post/11051.html","16a95e5d23ee03853f73a8f28ca16fb5"],["/post/11306.html","29cb6a62240e5b8db6478985c258c7c7"],["/post/11491.html","d68b91a6585c795003af606b50a376d4"],["/post/11799.html","4c7bbb49f316deebe1e46f42afaff6b0"],["/post/12334.html","4234e24b534f1dbd7c5cb2423eb1b847"],["/post/1326.html","a145ac8bc8e1ac4adced757cac4d87ea"],["/post/14379.html","52ab6968bd1c485f218af6cf465af58d"],["/post/14511.html","2558c0847e9996487e9af6692502574f"],["/post/15201.html","d40b0d0ba07fe7fb7d242aa50e9aecfe"],["/post/15425.html","95c695c772ec8072990b474ff43cd71d"],["/post/16107.html","c36971b4c3b6a955d5b3b56adeeb6d0a"],["/post/17862176.html","ac0e2779e2752c6b12639877cb74fd65"],["/post/18431.html","10225103fe6ec9a74ae51db2a513f2bf"],["/post/18912.html","7e3cebfeae4ac70c3ff0756c45fc5e51"],["/post/1b9c8662.html","79a4960820b7000a078552aa93cf5def"],["/post/20198.html","95fc3b7173209b3a5797dc635122148a"],["/post/20ff5ccb.html","8099cfaf24359d3b7675758792f332f6"],["/post/21624.html","4a551814592ed81c907b2b7342271e50"],["/post/2170659a.html","1c10198a19ae678cc4ad2308e9307b74"],["/post/22102.html","2fbf64d88d12c196d26a4c3903bc5b1c"],["/post/22493.html","86f75465e9307f523a6d1711314d9e79"],["/post/235252ea.html","7d0d2e9171e3ab86af93db30c2e7b4f8"],["/post/25699.html","184fb08c44a008ecd7f5aef2f7a98e7e"],["/post/2647.html","ae2fe7c12ba377495e1792bfa75321a3"],["/post/26477.html","ea8f5cbf95174b3ace2e23f82906377f"],["/post/26671.html","6b5e46fe7f7b7870faf1d42579fb6136"],["/post/26737.html","a24c194bbafd11cadc521be3d9bf7942"],["/post/27045.html","8bc57f03d08ea12d8cf0df92d216f127"],["/post/27621.html","a4f9ebfcb4a92956c7044d917ed40c3d"],["/post/27890.html","510736b48590328bc50c239fe6341924"],["/post/27980.html","b0d3c0a372e6b6ca1f581ddcf05f5063"],["/post/280b588e.html","69dea2d06693b9140a210f2a3ac02f02"],["/post/28579.html","f3990f6d7c827173b1aac629eff4afc6"],["/post/28877bf.html","6994030d521b3b826e10638c48a359a3"],["/post/28954.html","bf1eb814506aa42dc99b377550d7236d"],["/post/29378.html","5a287ebf55ace07d6b17058c6d848f15"],["/post/29949.html","d537c0899585035442f86ae86fc2aa3b"],["/post/2ae43b86.html","807d815181e536a7ca78e1568abfaffa"],["/post/2ba82a45.html","0465a1d76a181cfe8642c55c851b6f40"],["/post/30072.html","8be94e63ffac86ccc3bacecf0301e976"],["/post/30479.html","26234a867b7edfbb7c00839f7c447178"],["/post/31a6b40.html","7a1040c326f1b62284b3eda3133f6e2c"],["/post/325cdbf2.html","c4ac9eb15d3124950206004e56c9e207"],["/post/3319ed9a.html","e107dc237e8ca2dece23547eaee9ca22"],["/post/3320.html","665031d2012bc79cba5d0f674a4e38d4"],["/post/33cb1151.html","297d05bc01c0f4b2db70e6710d52b268"],["/post/34811d5f.html","c4e3e131235643c313dae9f1c8a4a4b6"],["/post/348d4e04.html","19940bd04b54514dcbf0e15654415928"],["/post/3526.html","6153a7523d87559f6678424f022a64bc"],["/post/35532.html","79345df29ea9595e3035e34a7adbcc44"],["/post/35848.html","fac8101849ef850a787987b9d0b9b88a"],["/post/37318.html","18816572a66c76fa71d19003950c4ce7"],["/post/37663.html","296c679f3329179968e6f1dcf342d24e"],["/post/38035.html","f2b84780afd3a05feb2dd0dca57aefdf"],["/post/38072.html","452c9b52f5b8ce443462517e86744341"],["/post/38145.html","388f4be70422d140335c3b2b23b9bcad"],["/post/39968.html","70578cec68eef61433278fbafac272b8"],["/post/3de4bc69.html","01a5bc185869aba91f8b3bfa4f1cf0a1"],["/post/40583.html","5ba8925ef0af342ad9a4681ed82aa139"],["/post/40997091.html","9eef882202078003f62547e45300b73f"],["/post/41129.html","1e8d2ce72faf63a7afb65d2895058525"],["/post/41763.html","2c9574391a6b044cb3ee6ba0e8b050ae"],["/post/41829.html","c2475e99d51eeb066787b295718e5fc8"],["/post/41840.html","294eafba1651a4ef732f971fa597383b"],["/post/43817.html","a18b35603634f1446e9017596f809f43"],["/post/43878.html","8a859e8ac89a7362e98aba0fca45cad9"],["/post/44250.html","ba2213166f19730fee46df2d3f1f2a92"],["/post/44336.html","244b4c194faa2f04c8b92394bf6d77df"],["/post/44454.html","5b4075aeb795ce2ebedbf45a89646d44"],["/post/44487.html","3cf62770d9dde2b4465d53c759d31d9e"],["/post/44914.html","32dbedb6fbb4b4c89783292d0efda183"],["/post/4551c130.html","771c74a06b5191fde18eb169ff401acc"],["/post/455a4c92.html","2882bf4de8ab6b70a519c84f41286d1d"],["/post/46466.html","8853ce1584344a76d88cb92c45530ce4"],["/post/46925.html","3a8ba36180f622d4b425cd4efb8892f3"],["/post/47075.html","bdf1353108d31692b0a57ddc0b5f58a9"],["/post/48220.html","e161907b21a2359793669669152cc878"],["/post/4b1879e3.html","65bd2671b4838c348f6abba29c4d4ac6"],["/post/4c720881.html","6afd0b8bb897f2376ee240cefa52ea75"],["/post/50daec4.html","8a529fb7275f59fae72eefdfce353b70"],["/post/51491.html","fbe1b90eaef50f915eb5ab6ad98e8a89"],["/post/51e63dcf.html","d651b6560adaf7b4518271cf10dd5af2"],["/post/52078.html","4f9134960b5ea7c21ca3e08238e574ae"],["/post/53677394.html","a05bdf90871f95ab185f6abb887883d8"],["/post/54300.html","00ca2edee9ead492342a7096b8277fa4"],["/post/54612.html","bf5aa9833ac973bbac34ab788104be0f"],["/post/54613.html","35e995448cc11ce988a20fc051f3cad0"],["/post/54708.html","c2d5255da7f1aed15a243774a1e7dda2"],["/post/54778.html","55aee0b6566af038e0fd211e64943f54"],["/post/5490.html","f5f0336a1a61438ea98b7decc78bdd96"],["/post/55046.html","90571266392d7dd40001a9d15240ad60"],["/post/56929.html","90f60d1809fa37b9514e23cbd119dc9d"],["/post/57339.html","30c5f5e6f940f902d1fb67557609097f"],["/post/57449.html","aafe8b08e6cf959bafd622e7e55fb48c"],["/post/57453.html","204b242ea408762cd88ce2a59a9a60e5"],["/post/57671.html","4dbcc1b443bd4156052c9244b9e6f09f"],["/post/58313.html","f880ead25fee9a049a3fb00d7d2396de"],["/post/58481.html","2b478aeffafe3afd27ad7601e5fe37df"],["/post/58986.html","8884e67e6eafed526ba7b578e298e7af"],["/post/59431.html","bb8c17d08cd68d623c229e33037d3981"],["/post/5951da65.html","3ab99c425ca46d953eda30084327cda9"],["/post/5be7e977.html","5ad360818ba0507a510f6356de524300"],["/post/5f9e4eff.html","12c612b010ee6e0d059909ed22b9d6ae"],["/post/604b49d0.html","88d2137d5d899aff39704167c7f01622"],["/post/61312.html","158d5def98d870d137d427743120c681"],["/post/61738.html","1a0101d8d6df3acf3439223739dcdf79"],["/post/61809.html","b1d7c035aa9afb32eab0af3413297943"],["/post/61eaf19a.html","b0ee2d7fac3c53d4b2984cdc8f760469"],["/post/63002.html","198f9eb14dbf1dc1acfedc4f8308027d"],["/post/63711.html","99fb31a0ff2702da3ea646c11c15462c"],["/post/6587.html","67cceb4a6086ae326edd145c6368cb2a"],["/post/6589.html","82c746e2161dd46578c8053cec771eda"],["/post/6880.html","81e22a32a6637220975eed26dd801591"],["/post/70263071.html","89bafac57ccabf7e0f0f81d2c967e5a5"],["/post/71038564.html","b7c26fe1ac01f7f1523646be8f02def6"],["/post/7119.html","a7f4d729e5c657a0df17417faa3f24b9"],["/post/74e7fdff.html","0f3e365ffa28cf9bdb1eb2b5d2995ac8"],["/post/7502.html","d1f6e03ef28f25d413447531b3677574"],["/post/7564.html","ae653bb60af8d996dddff31256e979d4"],["/post/766f9b60.html","705f73a9b16c3f689b790d6df5520411"],["/post/7ca31f7.html","026ec514986f2bbe453e59795411b9a0"],["/post/7d1c86da.html","96215701a03dcfb40a4319c19fc9ffd7"],["/post/7f3bcd7f.html","4499c3ba759a2c4395eb7649483bf85e"],["/post/8039.html","f3d430efb1af80ac6c5cb7339dc35519"],["/post/8050.html","aa75e1d7824244da7aafd76a9bb4fcb5"],["/post/8072.html","42fa26b3f4ece35c8965f2e6983e8465"],["/post/8274.html","453ad109549170810d9ffa2234d4cf58"],["/post/8372.html","c45c9308c8612f2a576863fbf044e393"],["/post/8498.html","be730d9e2c54eb39ee8dd6bae767c87a"],["/post/85b4e13b.html","7f98ae5095f39ebfea6cd95a50291bfb"],["/post/912b2566.html","b81dbcc269e9ac8d82c9bdcad3405e69"],["/post/9187.html","5c715d5e9c0a13c67a67a781ef5a9657"],["/post/9197.html","68fea44499dc6f600729956806d82202"],["/post/94ceb2fd.html","b278e2ab6509db1244ad156ff42767bc"],["/post/95495db.html","e0f6ec023629679f28459e518ddd636e"],["/post/97246020.html","f434ff1c6a030dfa6c25854175fd7c4e"],["/post/a3a786d6.html","066601c5c88084de9fd0bec15dbd6475"],["/post/a444b428.html","39733301a231f8197991c053aa36d7d6"],["/post/a50b8908.html","c150bb797886afc5735e93e15a1d7a4b"],["/post/aa1eade8.html","86e38a8fb36254d9b2f338f493d0ca68"],["/post/ade8c6d6.html","827236b77d8278f02a9ae40b8ee51b91"],["/post/ae8362df.html","cd077f0f6cd7f68592a0317dffcbada4"],["/post/b4c1d206.html","6679a1a1ff8fc5a054cec10a684743be"],["/post/d431fab4.html","d8d95c21de295438aa2887e5556ac47d"],["/post/d5381517.html","09148882724cb2d8297958bdab73ebac"],["/post/e058ffd8.html","10847435080f114194776a6de046676b"],["/post/e0f8cb74.html","67aecb54835cf64b81d05c90bbd24d61"],["/post/eefe591f.html","c9b4204f1cd529927436e5ed13e73c50"],["/post/ef296a07.html","9073350129c22f92afb6e533e1506496"],["/post/f201f9fd.html","d3eedd66f9e5fbbdcb394911a3bf132b"],["/post/f79e4123.html","e4f52ef7528717f4a8f82cd937083f6b"],["/post/f8648a1d.html","6c7ced71256b338a5589c551f22c5de8"],["/post/f89cb603.html","f07330f10bb9be066556ead51fc2407b"],["/post/fa288682.html","d1a5eb0e5a5f60b46f6a6de9dc3de872"],["/post/fb98053e.html","5fed9135cad96c2440132e38d1166f26"],["/sw-register.js","c0b04509c7f882ee4d16e724bd6bc025"],["/tags/AT-T/index.html","18bb7dab0cca583daee27ee93a0802cd"],["/tags/index.html","7b3c4f5a5c196d45489cc13749e5df02"],["/tags/动态规划/index.html","1de573c1a08fb9222f17965d4b2e730c"],["/tags/字符串/index.html","ec31d9f03643eba718dfe93647eba686"],["/tags/字符常量/index.html","c05e855c6b7849218e4a88a364d7366c"],["/tags/快排/index.html","9880226b5b38bf6675c1fc36d6f0e328"],["/tags/排序/index.html","99900bb325ecc34b5fda76f29a773519"]];
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
