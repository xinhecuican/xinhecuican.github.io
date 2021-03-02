/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","1aaf2195e283930d964ca4138241f962"],["/archives/2019/index.html","855c3a27e5e9df0b3c473ecbf9fe9aca"],["/archives/2020/01/index.html","d4068cefd1a66c8ad9217d1438cc4c10"],["/archives/2020/01/page/2/index.html","5e661f4910d6a33933483d8e6656d04d"],["/archives/2020/01/page/3/index.html","36a6c617e915e2dc49e389368a97cdd0"],["/archives/2020/01/page/4/index.html","2b244d63fae0f240e114c2acb42f1a0b"],["/archives/2020/01/page/5/index.html","ab57d0d1835dbd0259581c62165630a0"],["/archives/2020/01/page/6/index.html","59e3d604b39b69f566ac2ec19c7ff52c"],["/archives/2020/02/index.html","231045a981bc70a64fc671f5b9cb2e33"],["/archives/2020/02/page/2/index.html","eb3962ca7c36ed0772be1bdc6e09d6ce"],["/archives/2020/02/page/3/index.html","1535bee3f6a0b078bfa663f53afc0266"],["/archives/2020/03/index.html","00a9371d0bfb3c8799cca7af78d78153"],["/archives/2020/03/page/2/index.html","3886e7328b8a3d6c6242f840a5244a90"],["/archives/2020/04/index.html","fa0556dfcde0a8b96d966122f0815dc2"],["/archives/2020/04/page/2/index.html","7abd2ed6ed69e3f78121fada2569e8ab"],["/archives/2020/05/index.html","260aff27f0136f31bef29e36a34cb4d6"],["/archives/2020/05/page/2/index.html","4f2f81bb6e44b4a6f395324432869ce7"],["/archives/2020/06/index.html","12e9a09ade369071cb1366c12fce5bf1"],["/archives/2020/07/index.html","16d11736dfd2ef3d55d91cc259908ee5"],["/archives/2020/07/page/2/index.html","7bc0b7bd1e653c63556b9842b46e98ef"],["/archives/2020/08/index.html","c12ef547d7528016422bcca92af316ef"],["/archives/2020/10/index.html","27792a56c5eb9953c7aa6adeab5a656f"],["/archives/2020/11/index.html","22136d8576ac5eebab458e9b12e741e5"],["/archives/2020/12/index.html","b6f5ec18b22b2ad5ff22d160cb23c4f7"],["/archives/2020/index.html","ad9f5acfb91d8eec602ec149e81b0c84"],["/archives/2020/page/10/index.html","4786131ac557f46b81704fba42949593"],["/archives/2020/page/11/index.html","962b8618b5de2ca985729bc1d2c60653"],["/archives/2020/page/12/index.html","35be9390d40fddcb0a301f6890267285"],["/archives/2020/page/13/index.html","151fef91afe4288ce5cbeebb56e8f6b8"],["/archives/2020/page/14/index.html","dc1f836c5d83e78bd6b74b2eb35bd747"],["/archives/2020/page/15/index.html","aebb686577afb802adb83e39547f4cd8"],["/archives/2020/page/16/index.html","b867d49c3845260682a6d4fc6ec4165d"],["/archives/2020/page/2/index.html","8c4e2398e5ebf1c21c2cd768fe6c7207"],["/archives/2020/page/3/index.html","adac2b541f9bfedf2bbf2661b6aaf7cf"],["/archives/2020/page/4/index.html","9afa7b11a3238fe9ad74949e254b03f4"],["/archives/2020/page/5/index.html","cf52c11ff46e03d02fdf40d20767f054"],["/archives/2020/page/6/index.html","51741217509a60d9cec10959d4822ec1"],["/archives/2020/page/7/index.html","38dc255b3e2c71aa2f94cc894eb1f519"],["/archives/2020/page/8/index.html","613b38a83639c1dd30186a8c20322fc1"],["/archives/2020/page/9/index.html","77c0fe2c84ed2e9b349e4d56e434212c"],["/archives/2021/01/index.html","239819cdb94324a46fb9236faa1ff14f"],["/archives/2021/02/index.html","cbcc757d2f21e0968501914f8ff1a0d8"],["/archives/2021/03/index.html","8975b49cfa261315e7cebec4f4afa9f7"],["/archives/2021/index.html","41373056a3e7c6898ea3bf03e024efe0"],["/archives/index.html","b735d2b8b09240d8d7b0c2c5b087b42c"],["/archives/page/10/index.html","8dcef47b74736dfc8083d21c27bb4c3a"],["/archives/page/11/index.html","094c5891d48fe4f0732cdaa1f6b529da"],["/archives/page/12/index.html","1fccc1b0adae2dfad364909462891c12"],["/archives/page/13/index.html","7b8898bde577a7ca0738ad662ce5ae9d"],["/archives/page/14/index.html","8d590f5a00cfb52883c15887319d9bf3"],["/archives/page/15/index.html","da1bbaf1ee4b7fc2761e0415c56cd393"],["/archives/page/16/index.html","36a1e03a967aa6fc53b8deed2161bd19"],["/archives/page/17/index.html","0efcb5228e6cd751a57c351492645459"],["/archives/page/2/index.html","9c217e50f6eaf71ea23ad8fe083f7d77"],["/archives/page/3/index.html","921fe04825d864efec030136800de650"],["/archives/page/4/index.html","16d0f0a6b05244adfc340142c4ed22eb"],["/archives/page/5/index.html","5ed261bdf76dead2205564d711d0fa2c"],["/archives/page/6/index.html","ace7254612bd27ca09772cc91d462953"],["/archives/page/7/index.html","5ae482fad59f6732e927ccca37acd957"],["/archives/page/8/index.html","81b7401601e54cf1042afbd4dffeed27"],["/archives/page/9/index.html","6e23e8cadf015f16185fa98003e755f9"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","0bf8ab1b9937a8692bae7bde4f1eb178"],["/categories/Linux/page/2/index.html","4faba7d0ed3994e22312bd850004c094"],["/categories/MySQL/index.html","d593b1bb42d4f9927cda01ae3ba40c51"],["/categories/Python/index.html","45e39d105fa3ed4e08e51a675bde693c"],["/categories/c/index.html","a0fae7be92b7b288e9a2ace8703d8f59"],["/categories/index.html","a949a770d099b1485f16b54e1afb47e2"],["/categories/java/index.html","6ef58312c2f9ca4bd9f4a1f8e90c624b"],["/categories/java/page/2/index.html","230ad0b1ab1b67422953ce60b37e2c48"],["/categories/java/page/3/index.html","7c97468299dca7e1e77023c1af2540e9"],["/categories/next/index.html","23bee0e3c18b4208df244dfb116b216f"],["/categories/stl/index.html","62e01e62401aceba5eddebb663a4530e"],["/categories/windows/index.html","313d54f231dc0439de529296413635e0"],["/categories/基础/c/index.html","8147a0b67c32a00550ba1a271ebcd5d1"],["/categories/基础/index.html","5a658c34a3b1a6de1f164e884814ca56"],["/categories/基础/page/2/index.html","c9c59c3a3343e15a9c4823579fecdcf4"],["/categories/数学/index.html","846d6463b88373717d9d54c3fae94c34"],["/categories/数学/概率论/index.html","7be695ec2e58b82bda99339f47dcbac1"],["/categories/数据结构/index.html","d2687b905d413a9be7a5085927241050"],["/categories/数据结构/算法/index.html","24fbb8d9250daf1bf2740e1f694609bb"],["/categories/机器学习/index.html","749b15daccece940d13454b7313c7d4f"],["/categories/杂项/index.html","e6cf17272d89eeaa3bc9797cf0e4c336"],["/categories/汇编/AT-T/index.html","274749ee2139d1beb4d3a55c2bcc877a"],["/categories/汇编/index.html","a40c97ac3f7771fae2d923245b91e937"],["/categories/汇编/page/2/index.html","272e9c120939584977319c46cd525fe3"],["/categories/汇编/page/3/index.html","f1d57e8a0e5549957c47f1b65a767b83"],["/categories/算法/index.html","ae537ddff10ca5c30cc8f7f432c38789"],["/categories/算法/page/2/index.html","b6d677abc679233c96fa88d702af9113"],["/categories/算法/page/3/index.html","06d7c580332b8df84b688a433fe96783"],["/categories/网络/index.html","8d46887e5bc5aaa64a483a3bcf13e5d5"],["/categories/计算机系统基础/index.html","2ecb575d0b26ea62c2e509f986097d60"],["/categories/计算机系统基础/page/2/index.html","78681102189bb3e240c0cb50873c34ae"],["/categories/逆向/index.html","8537f7ec48b57a8459f8b8b85453fd43"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/无线网络1.png","8ae03216e1d41f3fa5116ccec5014077"],["/images/无线网络2.jpg","de2fc3016d85c8bcd272dd8bbc91e794"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/链路层1.jpg","2f8c7cb102f9eccf14fcacf870e143f0"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","64bea66a0f353d79d9f4443aa6a3f568"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","ec75c816803e8c75f1b5f0c4101b9e88"],["/page/11/index.html","c7aef3daa5fef012c76680a4a32568e4"],["/page/12/index.html","443b0ea36cbe6bcf5f26cabb4018f625"],["/page/13/index.html","3b35028bf88127e70c79584b8adbf683"],["/page/14/index.html","7478f39e22d775a0767803ba2a1ccf44"],["/page/15/index.html","b96951be30b96667afce5adbc8bb3a79"],["/page/16/index.html","a6785d46bf2030dce1c2808bbbe60e90"],["/page/17/index.html","222ed6fd23fe8555c3bad4ebf96cc3c6"],["/page/2/index.html","8441755e0e822c0012227210529c5345"],["/page/3/index.html","c5c2e12a160b1815d569b7733a9ee546"],["/page/4/index.html","2b95f4c3347ad96516ed1064f7c9a9fc"],["/page/5/index.html","284cd74c477bca71d41fe388c7cb7301"],["/page/6/index.html","723975a47a6ec2a875f8a809b7c8ce24"],["/page/7/index.html","126f00ee20de9f4eda9bab63ba28c55b"],["/page/8/index.html","6c79f4ed97bdccc5c78a453b9b27110c"],["/page/9/index.html","fa3f7857ad04c97b9d32480333379a43"],["/post/10919.html","1a5e939e9e4a7827d540caca75811b07"],["/post/11051.html","75b102828547798d83b76c31022790eb"],["/post/11306.html","198b48288ed4243f6df022b9760c84d8"],["/post/11491.html","a2a5520366675beb0a6abe7344099d5d"],["/post/11799.html","f9ae89046d96393db5825af18e4b60cd"],["/post/12334.html","3b037524202a5502a7800129ec25047a"],["/post/1326.html","418838edfe37ddd40e8e143d19590fd7"],["/post/14379.html","e03117c296263da719d46d59413fab6c"],["/post/14511.html","860dcc53e3f5b9cc89be1112f874e2bf"],["/post/15201.html","7ed4ba21c51560d79fec4c93f8322ba1"],["/post/15425.html","2c37c6460a946c60a1566237f181b269"],["/post/16107.html","1628cd9172b38ff25751878b9fd959c5"],["/post/16e2846c.html","ccf0c4b8500889f38deaca6183a3f701"],["/post/17862176.html","bc896a4c8d88f65db271dd5bf98df608"],["/post/18431.html","d848a70b54a7bc6b22b4d73cefdf79a5"],["/post/18912.html","10ddcf4fa46e8ef5c1ef12bf6f1e56b0"],["/post/1b9c8662.html","400bde9375802684573f6ab2d58f008e"],["/post/20198.html","f540c2c04ed5527553abb79ff3d92551"],["/post/20ff5ccb.html","1978f4c1ec180062fa11671cdd3276d8"],["/post/21624.html","482ecb773dc5e6da6e45894a3ce1c28f"],["/post/2170659a.html","32bab90aaa5274e6baed9e54ee91b912"],["/post/22102.html","ae78f64f644655243090a664e2baa537"],["/post/22493.html","948805354378e6e494337a3c1e51828c"],["/post/235252ea.html","7592153774b043d1b9fe8c3d24844be4"],["/post/25699.html","d691ef7bf1faf94f68e61916cdc4795f"],["/post/2647.html","2b306cc4031185ad39a6902666d703b5"],["/post/26477.html","efff8471bb077e8cae283f3d73f1c151"],["/post/26671.html","448ea2f4c129be9942b692e8a2c9b158"],["/post/26737.html","097bd3a91f364f0f0f89ba2976c03e24"],["/post/27045.html","792931351228a296d47ad27813a4e055"],["/post/27621.html","6a392b14366b593076df3af49f87cf6b"],["/post/27890.html","f6359864236a753264f45425954885bc"],["/post/27980.html","4da95bfde9a3cdb36336dec483c50d18"],["/post/280b588e.html","3f9d2c281f180859db00434e8d5817b1"],["/post/28579.html","f2a7fd95e556359be8d14f3221caea64"],["/post/28877bf.html","8ad49e10d0f2fa36188748412642c2ae"],["/post/28954.html","e9a3e4185c3291c1c0e585a416743a70"],["/post/29378.html","cc102e500966f9f6b2a7d3deab74b96d"],["/post/29949.html","7d5cd9af8585e237a4a4868b21227687"],["/post/2ae43b86.html","0b0be3578c8abff6aecf03c74294e470"],["/post/2ba82a45.html","3fc64afb1d9dcfcc74ec35717dc07a51"],["/post/2cad8b04.html","31c128673e8bfd80dd489a7bcb90b679"],["/post/30072.html","b5c329be8927a64018f74b01b096cc01"],["/post/30479.html","b83709c5845c2472d707de42bea65aa4"],["/post/31a6b40.html","ddc8e7d34a7fe5afb53f63e6a9740196"],["/post/325cdbf2.html","10b31fe728bbae2c31e2b3a9da2df776"],["/post/3319ed9a.html","0d52e6e42aaa42263c42f7c81d3959f2"],["/post/3320.html","5563e799217b72d7dd55b162e1f3e4cc"],["/post/33cb1151.html","52132eb9f1b14f1885c1e268eb9f8a61"],["/post/34811d5f.html","0a8d2fcc3cc6f848abfa119dea14cba7"],["/post/348d4e04.html","b11fd6ef4ff7aef43e07bc567c635f5d"],["/post/3526.html","32b82de4e22980dbb0e2a0561f9c3a16"],["/post/35532.html","e83bff17a9ab4405cb326dece919f072"],["/post/35848.html","a0d506548aeff84445f15084c5eecc87"],["/post/37318.html","03725af2aeb78f920314e7dacd438848"],["/post/37663.html","6b3ce9ade192de6be7910d4267702251"],["/post/38035.html","305c1dfce355f9eba6d221d8788c964f"],["/post/38072.html","a2566dc76d036926cbc8a1fc302f42ae"],["/post/38145.html","f563e359ac409f29b646aecd32ed3e9c"],["/post/39968.html","d0d59f092c082bd7897fc5c051b8a7b7"],["/post/3de4bc69.html","9a28f7af3d8634a6f80c015723584e28"],["/post/40583.html","cca3fc2f75eb68299001babf8dfd1ade"],["/post/40997091.html","0cfb2c5924e059387f35598c299c44fe"],["/post/41129.html","64a5b9ddd0d79abee97e1bc35e4611ff"],["/post/41763.html","0560621e3df8a1dbfbb78e925bd9a6be"],["/post/41829.html","175e37ee06afcb935debdd699f4465a7"],["/post/41840.html","23f44e40d731fa883376a79304d4248c"],["/post/41e39f2b.html","1f99692d5d73186a2a47b74e0eebbb87"],["/post/43817.html","cf73c86087ff29f756b5cede0e6eba6c"],["/post/43878.html","f64379041a4545ae3f783d6ad93d00d4"],["/post/44250.html","02125822935c3523a41b3569e1fdd2d0"],["/post/44336.html","ac129ed7749e70c891d2012fc1aa130e"],["/post/44454.html","072c6554a29921b42fc9ca1386e94dea"],["/post/44487.html","f3ba72b9a7b6385cc3e9eafe5b6c4a7d"],["/post/44914.html","502de9204d193645a71d2003ecc5e8c6"],["/post/4551c130.html","a0c813b483af2a6239dc5f9e30ec4d54"],["/post/455a4c92.html","032b25d31d48dd3e1b327dde246a60ed"],["/post/46466.html","1ea1a87b4048e8aeb87470d746ca7e85"],["/post/46925.html","83c592683afea23f559fc093708e47ca"],["/post/47075.html","465c70b8f19ff2e2770dd86cd005245a"],["/post/48220.html","7911b6dcf07ccaafc1b43d73279262b9"],["/post/4b1879e3.html","83cbce983e8a0669a31dee39b7cd6ba3"],["/post/4c720881.html","95c35221e16024ae593e25c4f26b943e"],["/post/4f4fc0a1.html","a2c3e4eec87239b5663dd3ea4c22b55f"],["/post/50daec4.html","5bd7945b712fd677ba4212d6190f6129"],["/post/51491.html","88dedfecf9dd4777bcc424d95b26190a"],["/post/51e63dcf.html","ca8f9b051d411e84fe59767bbc83e849"],["/post/52078.html","e65bb10f894982b9cba5669f55f9f131"],["/post/53677394.html","51ba1424fdb0874ec5ac27a8640e940f"],["/post/54300.html","210d160b6c589a3d380605f6284ebca0"],["/post/54612.html","a9c15d5294876bc903a79baee836a23f"],["/post/54613.html","89d24baf687558967b5663f22681dde6"],["/post/54708.html","d602dadd81b70d0f92675ca974f244dd"],["/post/54778.html","6d8d41f125536a4785b7e3387243c833"],["/post/5490.html","1580b0986402ae23916b8330887f149f"],["/post/55046.html","f5d175dcfc6c5bb13cba62196121c20a"],["/post/56929.html","939c29974722c85601caabaca9957841"],["/post/57339.html","a69aa14828c56e66e2f59bd5fa0dcf12"],["/post/57449.html","e16b8f1776dd406169a99bbab0531173"],["/post/57453.html","e9cca8b2993b7e2d6cf0b17f00c409e0"],["/post/57671.html","0f0d8b77b11a268bacf6c48792de9d38"],["/post/58313.html","36400f37ec6bcd91488c49a2a197b619"],["/post/58481.html","e844f091ea4fc791650b7ebcf3ee374b"],["/post/58986.html","e0c210b2ecfdc9635a541188b1c0686f"],["/post/59431.html","7e463299b8ea9170377ad81cb907c6ca"],["/post/5951da65.html","8f761a1b648e265e015ef1a7c5d16877"],["/post/5be7e977.html","59e0380ece49a6be893a4dd6d1597301"],["/post/5f9e4eff.html","c99d0965963e68fb7ee929abb4fa3ad8"],["/post/604b49d0.html","a293859cf66ff71024c03505e5143aa4"],["/post/61312.html","d14a24a4109de69ca1b37226f5353061"],["/post/61738.html","67a0df47ea7803014a6334d00502776c"],["/post/61809.html","565364695f7616073d6a634a69342b56"],["/post/61eaf19a.html","01f398ad946bdd7129ce1f3411ee6c56"],["/post/63002.html","04cac2870096ea86ab0c33aaf9e826d2"],["/post/63711.html","642713a7d561ddd9be938d86dbcd9ae9"],["/post/6587.html","8fc277b31bd2a80c01e31167d13b7115"],["/post/6589.html","48ad65fd89383b77d1a97c1c1f5cf4fc"],["/post/67454659.html","ac77d65670d80e41bef82c4428de71c6"],["/post/6880.html","04f91ef20b42b836071b4d3a1fd9d0a2"],["/post/70263071.html","055d7d18f5b556412676b8b68b924792"],["/post/71038564.html","050935bd109df870637b12facc243154"],["/post/7119.html","65e9c499e53bae6f42e101c7b7fd9678"],["/post/74e7fdff.html","8f856dbce9099ba35c2ffbfef9d63f1f"],["/post/7502.html","920c295f0a8ab68797c0ea561ce9b66b"],["/post/7564.html","860593c092914ddc86a5fd98c22b65fc"],["/post/766f9b60.html","ec34322b693c684ef2457f606e0b719b"],["/post/769365ef.html","48b08b38c9aacab2280ee27c3628f4da"],["/post/7ca31f7.html","19acbc08a3cb00bf5d128cfb3a5b2e73"],["/post/7d1c86da.html","301f4ec13e66b20b30b831c59d618c1f"],["/post/7f3bcd7f.html","735525ff066d4f322f59ee02e846e6f3"],["/post/8039.html","629a20fb36271ea88887013268eadf69"],["/post/8050.html","3e189670fbf45df71fc9ef01e2c72ac6"],["/post/8072.html","53b4041ea2b90194cd9ba5a22ce01e79"],["/post/8274.html","cb52b221f441bfba82dab6f20587e20b"],["/post/8372.html","c1fe84d884aabf53c1a8d2db0ea852f6"],["/post/8498.html","5cd1f210faec462b8b73896f5ea7ad8b"],["/post/85b4e13b.html","44567abcf8de89e7b8f20d0e709f5569"],["/post/912b2566.html","48d577cdbaa465dae954b10c2e0872f9"],["/post/9187.html","0672f3e0a655272f8c64032eb3ba8d53"],["/post/9197.html","7c6bec6b37c55368b8e9db3d0387e741"],["/post/94ceb2fd.html","e45f1a20e5209be716b4ce604f290dbd"],["/post/95495db.html","166c8d7faac2b7d02c4a639bb8fcdebf"],["/post/97246020.html","63b98422a5986da41257b99fd8e486e4"],["/post/9954ba8e.html","54085035a4a483bf0f6d462028cef5a5"],["/post/9d855db5.html","016e7e9c8f38bbf29d687f224ffde99f"],["/post/a3a786d6.html","307310e7dcf0fc270b0fc7da632841d9"],["/post/a444b428.html","8a82cacfe2f107da277ff637c950de32"],["/post/a50b8908.html","b13a0f7a8bf4916b5a2aa8b9becc4659"],["/post/aa1eade8.html","15bf61f22dfe5ebcd1daadefe3ce8aaf"],["/post/ade8c6d6.html","16a8213d631aaa9e727dd1fdc360dcea"],["/post/ae8362df.html","55960cc31307937f5b1f23436caad7b4"],["/post/af3eed3c.html","18b0c5c9507c8e746b184efa115ffa6a"],["/post/b4c1d206.html","cdca1ecee8cc55cd9d0944c3b40cbab8"],["/post/bd608ff7.html","e153bf53c5c9f6bad702c976e2a26933"],["/post/c82a1c99.html","a16b7f57c3b38ecdf1690350ae4c021a"],["/post/d213fc7f.html","d59ce57b94bf7ab0bb645b60c325eacb"],["/post/d431fab4.html","b2091afd3a007b45f0eede945321f6b4"],["/post/d5381517.html","9695575b3a22fcb3e3437376126c4def"],["/post/d94f88de.html","63941ce7326f10822c01c9f99b7a9c79"],["/post/e058ffd8.html","ba0ad4b05ce5eadc8e0c36cbc2877faf"],["/post/e0f8cb74.html","4ed84f27a164ad7ec18916fc314610d8"],["/post/eefe591f.html","f4e37d87fd2586b94cf301e3bc737e3c"],["/post/ef296a07.html","1ff964df85fb1923587e98dfb2371b11"],["/post/ef3a3fcc.html","a37b4298a1d028728bb235d501d4a093"],["/post/f201f9fd.html","b0d8b4efa5809b4e2320cf7b28d59762"],["/post/f79e4123.html","08fb046e44529ec3712911db11ac18db"],["/post/f8648a1d.html","5b060e5eadb63e5e75cd1faf2cbb245d"],["/post/f89cb603.html","063bfed1c3c4f49bc66fd0deb0308e6f"],["/post/fa288682.html","b0019288139ee44704ddf6a9c5d22f3d"],["/post/fb98053e.html","eb83d69e36f28878fe046d91265560b7"],["/sw-register.js","9062d0fc2b5220573864f657f14bccab"],["/tags/AT-T/index.html","6827c2e286c9ff9f0afd4e58d911eb74"],["/tags/index.html","1cb564aa88211f6c3d5f69a4fa74e285"],["/tags/动态规划/index.html","198d29f2301002ada6a7fbe85b6cb3d6"],["/tags/字符串/index.html","7fb09be007f27b3fec912a1c33f506ab"],["/tags/字符常量/index.html","6d53e3ad7b0b46887a5cac4696718528"],["/tags/快排/index.html","2b5af59d88e417682844c9508c6fff9b"],["/tags/排序/index.html","96d548955b5a257b6a67e6e7625a990f"]];
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
