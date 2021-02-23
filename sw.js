/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","4d4a7a2645703743814a16d1e9418e04"],["/archives/2019/index.html","bddbfafc9def147f85cc76a24219e39e"],["/archives/2020/01/index.html","351338824df869b8ba7c9f2a3c77e9cf"],["/archives/2020/01/page/2/index.html","65a6640e2bd7bcd53089c8a99a0eff9b"],["/archives/2020/01/page/3/index.html","6933ba2aa5ab80f5e7462066804be346"],["/archives/2020/01/page/4/index.html","7c685d242d1dd5c80c3d87fb002439c6"],["/archives/2020/01/page/5/index.html","b004716f80a988b5041233f863d9248b"],["/archives/2020/01/page/6/index.html","4807ef78be2691b48a1280ede0efba81"],["/archives/2020/02/index.html","4ed8de1a92235b12397c45b5e2142d51"],["/archives/2020/02/page/2/index.html","cf9951e9e86441a2ee5622f5880116bd"],["/archives/2020/02/page/3/index.html","4b1beded69475df05484d3d1a77a2c10"],["/archives/2020/03/index.html","d777198419e4ee242463fad5b872227b"],["/archives/2020/03/page/2/index.html","12ab63a719194fed9e32e0cf9bdd1395"],["/archives/2020/04/index.html","19e548e6974e3c608f617f688cbecb08"],["/archives/2020/04/page/2/index.html","fc30855001a0e88f9e6c827977c4c8be"],["/archives/2020/05/index.html","83d3756e4da1db92341c46c8e00a0c32"],["/archives/2020/05/page/2/index.html","fec2b07dc703e6bac5983e3d580c08db"],["/archives/2020/06/index.html","c20064976eba1cadd40e8e11d8f63d58"],["/archives/2020/07/index.html","8dc850716191053675f7054eb536dcb1"],["/archives/2020/07/page/2/index.html","f03b363407a01ea99fc2182f8b8f1124"],["/archives/2020/08/index.html","173095647a495d3402e3be907234580b"],["/archives/2020/10/index.html","62a73fa3d7032631f51fc29ecd0fff00"],["/archives/2020/11/index.html","afbe45a1cb754d503ed96a77640c3acf"],["/archives/2020/12/index.html","56795998ca19ca689b8b815c8c37a2c7"],["/archives/2020/index.html","42fdf53538a61c7ef055c7e57ebdbfc9"],["/archives/2020/page/10/index.html","ce10b0a2a7f862b4da22fd0bee7a24eb"],["/archives/2020/page/11/index.html","b30dac83cac16f61f942b0d4732d1e0f"],["/archives/2020/page/12/index.html","2de80ddeaa6836902bce3a35c9e867aa"],["/archives/2020/page/13/index.html","fd46977ed8028e9eb653c38f28fb334b"],["/archives/2020/page/14/index.html","2c715c8400e6e7bb513c522c1b55f266"],["/archives/2020/page/15/index.html","39a4eb31483a2349670d0bea8a747e80"],["/archives/2020/page/16/index.html","28bb82c57d7724dc6ff7bceb3b1fa05a"],["/archives/2020/page/2/index.html","d77635efa22a7c79634ff8a04b1b63a5"],["/archives/2020/page/3/index.html","e08df5f31ce33901e49081fefcd0e45b"],["/archives/2020/page/4/index.html","a9cf78a433f6ebd80cf35f193c93e472"],["/archives/2020/page/5/index.html","ebe871a8d3541c16cfbcabd79e0eee79"],["/archives/2020/page/6/index.html","0d3bdc530698e85f0a73afca3825caec"],["/archives/2020/page/7/index.html","781bdf68f264fc120c79394b760370d2"],["/archives/2020/page/8/index.html","73ecb67da5fbd678f15cceb18410eec2"],["/archives/2020/page/9/index.html","eeb391d1d279548ff2382efed8a83c65"],["/archives/2021/01/index.html","426f88a772256e52b42fd6dbad82529a"],["/archives/2021/02/index.html","c6bcad1211f46e00f213b5ac29c5ced8"],["/archives/2021/index.html","ffaadae44eac142a29036c36f163c96e"],["/archives/index.html","3042fd837c0e05e1af152167d20ea6d2"],["/archives/page/10/index.html","20239e707e9debb384db59fa5ce87b07"],["/archives/page/11/index.html","2374322a532cb1333aa44f6303aae442"],["/archives/page/12/index.html","f4eaa21db0375d563a36daac61a35439"],["/archives/page/13/index.html","7fc76a43f128dd375f4969fee30f67f5"],["/archives/page/14/index.html","19a4ce06fdd1497fdaf145dc9bbe2acd"],["/archives/page/15/index.html","8f561ffe4a6f5db4543a0e292063b4db"],["/archives/page/16/index.html","b06cd6f9a2633cb2bd17ba086b3f4859"],["/archives/page/17/index.html","2712f3a822e2bd67f976195284437930"],["/archives/page/2/index.html","72f678d5ed1d9b495c404e3102ff8528"],["/archives/page/3/index.html","825d29824efa0a1b623c47fe7e0830a3"],["/archives/page/4/index.html","0e78c2601ec86725a7b01ba8dc7e5b99"],["/archives/page/5/index.html","e9a3f3903fd45dc62c52d4f760762d84"],["/archives/page/6/index.html","e45aa657265ec044941394edd6b1e1aa"],["/archives/page/7/index.html","4f6c48bd3d78940fdc40c278df13c7f0"],["/archives/page/8/index.html","60ef44b4c449d32644b2b9ee614c12c2"],["/archives/page/9/index.html","5fab683f6e3864c945b294835ab19a8c"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e5220b3d083df2931cacb649f6526355"],["/categories/Linux/page/2/index.html","b8fefd4cf76aa45b606e3adc90f8116f"],["/categories/MySQL/index.html","8e8c6e3af53a72ca6b1577f674cc0608"],["/categories/Python/index.html","d559d1a03a0ffe7298bfbea3278d658d"],["/categories/c/index.html","0a2bb5890fce5584f7d211e39fc981d5"],["/categories/index.html","30a4755c9f696e3eeb146e7e0aad450f"],["/categories/java/index.html","231a8f410a9d824d933f9d0c65f2ee19"],["/categories/java/page/2/index.html","15afd20170059c56185b76257df57d69"],["/categories/java/page/3/index.html","e492c05875646fc9ea25a61529d3d382"],["/categories/next/index.html","41fe43da266d833a1f524fd163b83dd6"],["/categories/stl/index.html","7bb9fb0ee1b3151f2a4a9619c59ffa35"],["/categories/windows/index.html","c80da6a109fa3163863c4fae3b8f431c"],["/categories/基础/c/index.html","e615416a623a27c3891200958def4382"],["/categories/基础/index.html","10c036cd67dbe41ae43641e1c22cbbd4"],["/categories/基础/page/2/index.html","60455f9b41566766924237f2dc5104fb"],["/categories/数学/index.html","427e841d5aed615e37081ca420a8d026"],["/categories/数学/概率论/index.html","6213289a29d3bbc25f06d97b4ab0d054"],["/categories/数据结构/index.html","cdc8d4850a6ed0342e143757ede4174e"],["/categories/数据结构/算法/index.html","c70e73a648aa69c1218fac24cae85679"],["/categories/机器学习/index.html","784284a2ff4c78a7d11bfc8fc6a854cb"],["/categories/杂项/index.html","cb649a047c2a4363ac3cadc450098a63"],["/categories/汇编/AT-T/index.html","443033032e4abb9fc5748cf120ed301e"],["/categories/汇编/index.html","8b1d49b4fc3d1fc2f850e06551d3b82d"],["/categories/汇编/page/2/index.html","e5b97963c8e640656a961d83e643bf2a"],["/categories/汇编/page/3/index.html","0bef33ff0002de201f87c4ce4b7ceb86"],["/categories/算法/index.html","951208ccb7cf6fd46d1f39405ea2da2a"],["/categories/算法/page/2/index.html","17a7f35dbbfda240f7a5018ee7b288a8"],["/categories/算法/page/3/index.html","db0e3db25336d347cc6f5177733a76bd"],["/categories/网络/index.html","7041cbf9b0104f037d5cd5e3ae172750"],["/categories/计算机系统基础/index.html","a6ba92682e00e5fa05fb485eb3199809"],["/categories/计算机系统基础/page/2/index.html","b8b677fab1f0684e82d601f8f8709ec5"],["/categories/逆向/index.html","bccfca5b493510f6c11087c8f0e116b9"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f4e5b644d3e90dfa429ae989c7635b04"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","08163647a443c686ce052121d9f2e973"],["/page/11/index.html","fca3bad76b40123e1f1911681fc7ba52"],["/page/12/index.html","36d34c3f716458f0b257ef414a0bd027"],["/page/13/index.html","4ab6851bb7b118127300fe9a6cc3baae"],["/page/14/index.html","23c147896a5e79428213a66d7458099e"],["/page/15/index.html","48735b8fd7210d610da74eb613eac0c2"],["/page/16/index.html","a88e2086d1c7e6628d9e1041d772c0fc"],["/page/17/index.html","58584a503b8806cb40247bac89095100"],["/page/2/index.html","5c537e217e38f0bd27170ca26129a109"],["/page/3/index.html","b53b0a042f22952a780f7a81a2d9f135"],["/page/4/index.html","b2c5c4b656431339dd4a72a0bbaa52fa"],["/page/5/index.html","25a0b1e5910701e09bdd516e6284f67b"],["/page/6/index.html","05eae1a3387a218cd318d062bc898f2a"],["/page/7/index.html","22d8a378adcd302e418b16cf32ddf38c"],["/page/8/index.html","15cd3b245ab618b560cfd9765635409d"],["/page/9/index.html","3acaca5c64de90eb5b50510ce60d8d16"],["/post/10919.html","e28b20a88bfd73942c56d61506efe65f"],["/post/11051.html","39dca6c7db0a1780b106f37a81b893ac"],["/post/11306.html","306142961b7a7574d9cfe2682dcfd7bd"],["/post/11491.html","bc63d44d5535e45de96e5d0ef87d46c3"],["/post/11799.html","eeed304a8b1aab0c9308c01222515182"],["/post/12334.html","35059725e4b598ee4c2043cfcf86654f"],["/post/1326.html","f90fbbaac4d1a4643acfbd94874e96f8"],["/post/14379.html","b2b1ce21d96d9d24373d4a23216c36ce"],["/post/14511.html","ceda044b9a77d50e69e7c992c94f9782"],["/post/15201.html","552e05cc669242fd9c8a77c648cb8a36"],["/post/15425.html","f5e9e8cc79270b5abfba79ffda956051"],["/post/16107.html","7fa580385e8c9b6a410c8fa1fc0f109c"],["/post/16e2846c.html","7f40cd3583a4163c77b059d2d95acaa3"],["/post/17862176.html","81c1d8fb5ef459a174b4fbf439eb858d"],["/post/18431.html","a8afa6d8863939988c8806d5a5d4b1ab"],["/post/18912.html","73db9446d44029baaae862409682c3ca"],["/post/1b9c8662.html","170ca725f96d24ada5d818404742d6dc"],["/post/20198.html","29c64bc498dd91d258bc95fe6bd2cbb4"],["/post/20ff5ccb.html","b1c8880043cb2480b59255a1c356b525"],["/post/21624.html","90c78ed903ca6f60bb1f62bdb204fab2"],["/post/2170659a.html","280f7111bd60b46fffb8fac7eabaddbb"],["/post/22102.html","8c3f6ea707419fe318bd65f15987330e"],["/post/22493.html","2b32eaec85d4126d0afbfac41d46b779"],["/post/235252ea.html","9c214f4817fbde95e87246dbcfc278a3"],["/post/25699.html","377a8cb8a9c68951a44e53097ca6c11e"],["/post/2647.html","d84c44e4635cd1e28fc6e00a2e8377c1"],["/post/26477.html","6d80faa4cb81ec2e612011eecf3de225"],["/post/26671.html","e6e4e397f66f298450cabeb738992c77"],["/post/26737.html","58a2b3012520596867b83dcf5681d0da"],["/post/27045.html","fe126fab787ae15e6e0a9fa310104aaf"],["/post/27621.html","132838ec4dcc2c9a1677ed274e227584"],["/post/27890.html","2f62472e0499542514c3ccac4b152053"],["/post/27980.html","566f6a03b7bbb7fb4e68a86c70496899"],["/post/280b588e.html","2a1e520e6546fe12b06423d0cae70906"],["/post/28579.html","a2dbff234702da817a5c2eb7f590913a"],["/post/28877bf.html","5bf220c35e663a7cb05aa56fc59d2f07"],["/post/28954.html","41e920506e5ab82a039e36699c7acc32"],["/post/29378.html","b868f281d68a306653088e7af94a7954"],["/post/29949.html","1d03394db093a36960e29a207a497daf"],["/post/2ae43b86.html","4427cb07cec6c0e8deff26b59420b50a"],["/post/2ba82a45.html","60527a69d5e3d306faa6c3dfcbaafe3c"],["/post/2cad8b04.html","14be633a9fc56e32f663248e3e2bb95b"],["/post/30072.html","a4058dfb5a0c1db7dc42bb058de4a8e0"],["/post/30479.html","1dad13ae229fa642cc98ab578f095a02"],["/post/31a6b40.html","fe32edf3d2fccfd40e451bbb7f723113"],["/post/325cdbf2.html","405c1d3f76a7ecfc11ee1295ff04018d"],["/post/3319ed9a.html","00cb2e8d173705aa192d0d78892a0310"],["/post/3320.html","81121722101071b05196eb486146a4a4"],["/post/33cb1151.html","0cc9c0d37f7602e60e197c52ffd4d565"],["/post/34811d5f.html","985186171b1809fbb3ba140e763df893"],["/post/348d4e04.html","9c00c08177362ef8de5f386b1aac3d28"],["/post/3526.html","26c65c890ad0b662aac3b53d78fa9f17"],["/post/35532.html","4871d1d2bf50080e310753e6e5a8a213"],["/post/35848.html","c63f565362214e79dacff488f6c8b365"],["/post/37318.html","c0eb8e711e9d8313265424816c2e06b8"],["/post/37663.html","6f732028f6f22f8a4386a3a8fbb06c39"],["/post/38035.html","1815d74e7cb37f63f85b39babc5a87df"],["/post/38072.html","796939e9991991f5ea34dc1f192feb66"],["/post/38145.html","edea3b30d53d90151dccf1848af980f9"],["/post/39968.html","1b8af034ab115b6d8eb86d5cbaa2da04"],["/post/3de4bc69.html","cd770e74c17d362610fe691e5269b606"],["/post/40583.html","1bb07e68406abcb2104b8a8be0cba800"],["/post/40997091.html","dfaa16c9beaeab43ed1b97ba42e634fc"],["/post/41129.html","784b538838a43fb1df670b1178f041fd"],["/post/41763.html","4f2bf734337448bbb81c3146aa8263e3"],["/post/41829.html","275bfcfb5890469a4cb16b39b040c8e5"],["/post/41840.html","b80454cd3b7ba801390bb967b551905c"],["/post/41e39f2b.html","25618e8aab7b6c3605ce0aef3d4b42d6"],["/post/43817.html","f2e1bfb414890a1c22319310446b42d3"],["/post/43878.html","3ce01cebafc1bc00bfbd6f1b3f9c6c28"],["/post/44250.html","a52195a10af88424671866697cc4332e"],["/post/44336.html","c377a8fedab113a8fa4ec41c815687e3"],["/post/44454.html","eeb193314e1db858336ff6c4cab7cdfb"],["/post/44487.html","e026c9d4716e8db511134debb3a64055"],["/post/44914.html","df6fc723b1145a1962e14bb64112ef9a"],["/post/4551c130.html","4d284753a968428cf273c8e74e4a48ab"],["/post/455a4c92.html","a05df4e139efe590621a5239752b566a"],["/post/46466.html","a0796649afb89295261a3f5ef1a7e2d4"],["/post/46925.html","93f5453f7c17f2887ba892fb6f0968b5"],["/post/47075.html","b2c78ebcf9810ea63cd321b300094ef9"],["/post/48220.html","c3785016b83f21a4f30d5ac5bd3e0c5a"],["/post/4b1879e3.html","b61a28dfbc37eaa106f315756b2ab68e"],["/post/4c720881.html","2b4fca3e5d1dc0918c3c2026d5a671d9"],["/post/50daec4.html","d52cfdc8f370aa018eae618628492081"],["/post/51491.html","e43cc31c84575e2929db4afa34e7d159"],["/post/51e63dcf.html","1d2ad2eb69212ae0b19ef6ddaabf6c1c"],["/post/52078.html","6ce986e4ce5e79d4b63b23397d62b97d"],["/post/53677394.html","8c89ce3e20a7c16cfbc30b64d51cb5eb"],["/post/54300.html","26975b51981b0b67687d5ecf4f649ded"],["/post/54612.html","e2be3dfe5bd776457bdf6db0045975fb"],["/post/54613.html","90d906000c0e98e4503993e7640e4db7"],["/post/54708.html","325389b5bed2a58c8eeb59ba87fa63f2"],["/post/54778.html","b3c95e0af63f0ae5637b6662f01b3a2a"],["/post/5490.html","18e8b1f1893e66b729278df0c17f35e1"],["/post/55046.html","26e6ec9acc553c8ec2d319010efbacbb"],["/post/56929.html","7fd339460f9b3273bae0e13b419cbc56"],["/post/57339.html","6c38c8f7120e950fed82d8a172b10ecf"],["/post/57449.html","c574c740aa5daf21629ff8e47d784ea8"],["/post/57453.html","e029945d1fc798440b5a5ad0c3201f24"],["/post/57671.html","e26f21de7aa6edaeb94feccf6b09abd7"],["/post/58313.html","05db043733e912c020ced21c847b3d44"],["/post/58481.html","c839951b8f231f644d1305b6bf2a2f2d"],["/post/58986.html","d47542eba700152799af61915264e791"],["/post/59431.html","edbb59ba6eab6ef2b8ca3476bfd0bb1d"],["/post/5951da65.html","fac1c348226a58d6754a36bc63c630c7"],["/post/5be7e977.html","7d07110fdfab5c7a5fc82fd80e5f2d1b"],["/post/5f9e4eff.html","5a50d906e1f6e3a16855dfccd0c52bb1"],["/post/604b49d0.html","775bb2181dd70585e803ccc66f88df76"],["/post/61312.html","169547c07cc22ba8fc3980deb7e39ae2"],["/post/61738.html","57953ed73fc43d8c5cc3a598c8660a51"],["/post/61809.html","9791c161ad6cd27e891e5158a0462f32"],["/post/61eaf19a.html","c421e40c8348d59cd8ba38ce365a7f43"],["/post/63002.html","ad8301f51b0b7219411d1c4a88b47025"],["/post/63711.html","d66e41aa91fcb12444a5176b8a18e815"],["/post/6587.html","07e82d9b38ee289411d9c4f91b16c095"],["/post/6589.html","c956f9149624d09181c0f447c31b59b0"],["/post/67454659.html","8f747a988a546b3666e70e309443d923"],["/post/6880.html","04064e38c8223199ac1562c69647dd47"],["/post/70263071.html","77c9019522f33e8370358adbb896baa7"],["/post/71038564.html","967589fb26684001e0c0532ca3609369"],["/post/7119.html","543bfc6a6c0762957ae2280d98707551"],["/post/74e7fdff.html","67602546a2665ac307d98901a93841bf"],["/post/7502.html","e1218d5cd0544874af3963e7dbd3491b"],["/post/7564.html","c0e35607ce3b6388990784fd17d64a52"],["/post/766f9b60.html","363c993a15fb81988fae843895b6f97c"],["/post/769365ef.html","a89803287819cb628c3feb866eb93eff"],["/post/7ca31f7.html","89925f4e5f92d70201fc43ca9660a5f0"],["/post/7d1c86da.html","6b6e8c844f43a6186fdf6d2383716a0b"],["/post/7f3bcd7f.html","147347ba8a257646bbc2eab676329af3"],["/post/8039.html","fa025ecc043a17c97bfff44e5fc9aa28"],["/post/8050.html","35c360554a9d19c7a143023347314261"],["/post/8072.html","63282a198f6150cb7247d3bb6728f226"],["/post/8274.html","ef550c3f45712429aa873cf5d4a23367"],["/post/8372.html","073370eb36a17624de6ac826cf3ce0c8"],["/post/8498.html","df398cb7442acdf7d6e0fa6ab1cee38c"],["/post/85b4e13b.html","298f05820dd192d9cc318f90eddc1b8a"],["/post/912b2566.html","56a5c8cf5d84d6be2610ead729530d28"],["/post/9187.html","f0481c1f5fbf688f637a16055aa8bc76"],["/post/9197.html","9fa9e1b82e6a77a9328b2a303696fdb2"],["/post/94ceb2fd.html","59bcc0f9e781c13ca85c18840aec925d"],["/post/95495db.html","5a6dcec3d4bad31571d9e0ae7b057b41"],["/post/97246020.html","f1ca6e126467728ba0da69a5de96aedc"],["/post/9954ba8e.html","2926c9a2f200088aa99b68a844c18c21"],["/post/9d855db5.html","47533ae590426ea9f64151c13489d920"],["/post/a3a786d6.html","9d860e96c679ea4fdcf81b86ed4bfb99"],["/post/a444b428.html","f4c9fecfd620f8efe01e34046912cb46"],["/post/a50b8908.html","b551483c15c06ba49a66434751e4b90a"],["/post/aa1eade8.html","05daceeee1711162f5c2a22221e089d1"],["/post/ade8c6d6.html","6e39ea368081d11c5e2216310ef04575"],["/post/ae8362df.html","17ec8d6623ab3c2b445d16aa317957f3"],["/post/af3eed3c.html","9df6c906c02f4595695eebb3a59cf808"],["/post/b4c1d206.html","f4960e215a52e217a9aa7579193aa794"],["/post/bd608ff7.html","928a68c337cd78f042eb85d5a23bf8bf"],["/post/c82a1c99.html","ac3aed9866832c5daaee6eb8118b9e04"],["/post/d213fc7f.html","4fdf80fd5ce011b02b157a1b09c72251"],["/post/d431fab4.html","572bc9cfecff0b1e7396c52f14a14eb4"],["/post/d5381517.html","bbe9054498e8bc1801980c13184b9169"],["/post/d94f88de.html","0211ce9c235007bd3fc1eeafc6e76708"],["/post/e058ffd8.html","f75efdbd88dce05e959506d4d034373a"],["/post/e0f8cb74.html","2d4d14c35bd5f9a49d50bc3b53d8818b"],["/post/eefe591f.html","0d5a42d6e2377bece2ac0c4f95f21a74"],["/post/ef296a07.html","fa1839b42b11091531485e71a8f99eb2"],["/post/ef3a3fcc.html","dab8688729d269f749b6f70e42967b30"],["/post/f201f9fd.html","d6abff92c4b665a36550a946e3fd3035"],["/post/f79e4123.html","cdbdc5079d91ed388950158b83604913"],["/post/f8648a1d.html","5ef40958b79296ea6c5b5544149c8387"],["/post/f89cb603.html","a7fe159f40b8bbcbe6e3e8ce4462468c"],["/post/fa288682.html","ba47721cfe237d89edfafdff9a8156fd"],["/post/fb98053e.html","c2b89c76f671884ceb17037111d07511"],["/sw-register.js","3590b6aef7aaf2ce6bdfba56889231f4"],["/tags/AT-T/index.html","9fbc989d9cd04f56a96191909e26019f"],["/tags/index.html","9715d049eed9867e8f8c4ded06bed6d2"],["/tags/动态规划/index.html","e8c34d0e492cd0648945b9b86ab6ddeb"],["/tags/字符串/index.html","c28feda2f579247fea0b7d0308e48591"],["/tags/字符常量/index.html","a72e9f8496c5cfb76983bdb232fedb0f"],["/tags/快排/index.html","75a3346adf066c7214477641da70e372"],["/tags/排序/index.html","26f50ea68a6ccd3fbd24d332f85a9325"]];
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
