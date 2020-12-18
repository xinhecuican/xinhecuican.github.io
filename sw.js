/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","ccdf269b3fa4378ca4a67a4b368f8651"],["/archives/2019/index.html","e04919239e596750edb7e2dc4e54f8dc"],["/archives/2020/01/index.html","dd22dbe5c5a0b769b3434fa90523e885"],["/archives/2020/01/page/2/index.html","c8dc0f019f8f31533b6e3a968169869a"],["/archives/2020/01/page/3/index.html","dfc5b2441ab0bec784e28ff2e2f53b36"],["/archives/2020/01/page/4/index.html","de67215c7ea4ee05cd0d3d3e220069a2"],["/archives/2020/01/page/5/index.html","86f846548cf50e6a51b04dc5e2bbcdaf"],["/archives/2020/01/page/6/index.html","6c83383fed1f5e032ef87a612497d5e6"],["/archives/2020/02/index.html","6a328b83dd0b7d72412639a3224ab6d5"],["/archives/2020/02/page/2/index.html","d6d7c8b3744db63e358cbebfaf44cd30"],["/archives/2020/02/page/3/index.html","ff97d3feba809a70b28c03afdfdb9c99"],["/archives/2020/03/index.html","22b507a6c517c5858fdf967ee0928928"],["/archives/2020/03/page/2/index.html","dd34086ff7a71f3f2f04f96fe5c09382"],["/archives/2020/04/index.html","4e7ff8ec5f32c7101079773d7f063a43"],["/archives/2020/04/page/2/index.html","3cee242af260a81433b205cba5466a5b"],["/archives/2020/05/index.html","e23c7e5828b4308bc8503da9ea631ed5"],["/archives/2020/05/page/2/index.html","f9402d9afda001ebcef95e2a3aa95a29"],["/archives/2020/06/index.html","2a2ae9758a91fd3d14126dce3ec73cf4"],["/archives/2020/07/index.html","70c92c2834cb9d55b9056df35c2b166b"],["/archives/2020/07/page/2/index.html","f77f65b147677e06d31b4bdf37f9ffc3"],["/archives/2020/08/index.html","e0336bc1e93238c7a947f41ea47fcd08"],["/archives/2020/10/index.html","f6407eb0742323b2497fea6aa1e09f33"],["/archives/2020/11/index.html","e9cb6d96b1a997d944bb8514b5c81dfe"],["/archives/2020/12/index.html","e9090c7fd5e53b5a0ca5ea184321b3ac"],["/archives/2020/index.html","37cdd03846a555d7f926aa814bfcf7e9"],["/archives/2020/page/10/index.html","ac234fb813ddabf649a9b14b898f726a"],["/archives/2020/page/11/index.html","5cb54bfee9380944e04b1b59eee8eaec"],["/archives/2020/page/12/index.html","f5bd4c4782cb12d49aa5aca9cb2d1ee2"],["/archives/2020/page/13/index.html","2346f75e921a8a585b54f887d80a776a"],["/archives/2020/page/14/index.html","6eee72dac62dca1b255fd5296a2c150c"],["/archives/2020/page/15/index.html","edee628fa3ae49a5d6d3c702dc637044"],["/archives/2020/page/16/index.html","d8c4d6a0edfba991ee9744d9731fc4b8"],["/archives/2020/page/2/index.html","e43fd610b10b1dde1d592a2faeffd942"],["/archives/2020/page/3/index.html","ac3d9edbcf6db3836cc6c85235dd4eec"],["/archives/2020/page/4/index.html","b0f153fae66085c4938936614af8b1c8"],["/archives/2020/page/5/index.html","f9c92551090fbe7dae5d56f11422dea4"],["/archives/2020/page/6/index.html","ed638d4c4bab1d758c41d1dd47b98f4d"],["/archives/2020/page/7/index.html","6a270fa6c569b0247eaba3c11fa8370d"],["/archives/2020/page/8/index.html","47b30166c5f59840e8f3962873411060"],["/archives/2020/page/9/index.html","fe3efb535712b876af61e800fa9628e1"],["/archives/index.html","f8a0bbd214b379920b401527a555d5d9"],["/archives/page/10/index.html","ac332433b49e560b6b729d78a9660b7a"],["/archives/page/11/index.html","e9ec30020af3c0c617506135b7a03cf3"],["/archives/page/12/index.html","c8b866328794237188680b71470c4336"],["/archives/page/13/index.html","85d28190e70ed427cd70ee24df127f38"],["/archives/page/14/index.html","c30c22bbe8a116b4759e3cd18bd5f54e"],["/archives/page/15/index.html","9c6dd9ac4d3fdffdf393f828fbf014fc"],["/archives/page/16/index.html","7c1bc7c80e702b20a550f42bf48e0b31"],["/archives/page/2/index.html","7ba9edd80a7d321e28b95c123fabf0f9"],["/archives/page/3/index.html","7eb4da36847f7302c511bc7af3319cd7"],["/archives/page/4/index.html","8202d170dc99b39e59d18c5aedf2d662"],["/archives/page/5/index.html","fa1a08f0e0c1cc35d5233f1896925536"],["/archives/page/6/index.html","980e7bbcd8a287773a9bb59e2f6ab2d6"],["/archives/page/7/index.html","9f99a52a97903a4a155c813d055c6a68"],["/archives/page/8/index.html","4248816a2debfafd94f4b8331e46d834"],["/archives/page/9/index.html","4f6f0605c85293f3df7bda721b844855"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","886540c0e96aa0b4ddff702002dce08a"],["/categories/Linux/page/2/index.html","66fc1cb22d1684d4740248f99eae066c"],["/categories/MySQL/index.html","d82a488eb3741a6a2008bff8c83c233a"],["/categories/Python/index.html","a563eaa267130c932b156a4afa00b015"],["/categories/c/index.html","5d6af81ca3c290b5ebcc0521c81a0241"],["/categories/index.html","5a95b909d9f4b1873b87583330776547"],["/categories/java/index.html","b4c1336a24f54b2d52e81f36f3c2dc41"],["/categories/java/page/2/index.html","03ca99c727b9678197e4f298b076fb99"],["/categories/java/page/3/index.html","8e531be8af31a80949fe22f10260f37b"],["/categories/next/index.html","35f99bee896e7be3a7f956c1bd1bab7b"],["/categories/stl/index.html","10d3f0d12b4d9c7dbd26d590d45a2c29"],["/categories/windows/index.html","0dc0da8a4aa4563617c57c51bb5a846e"],["/categories/基础/c/index.html","e7295ea0249127d692ddf8213a47f577"],["/categories/基础/index.html","8f20223722325a2ca3d172016a8f646f"],["/categories/基础/page/2/index.html","b48148af7b87f92b9a90a4a8e65dba29"],["/categories/数学/index.html","ef1853fc43c2d799b8788aac3dd8f457"],["/categories/数学/概率论/index.html","4ebe60a7fda9c0ebf9b0c1ab51d90e37"],["/categories/数据结构/index.html","64bd5e2e378267192e8f82caa7bc4365"],["/categories/数据结构/算法/index.html","44be3109b5a6b464c30920a277ae9ed5"],["/categories/机器学习/index.html","06db8b10ecc1820c1e9c9d3448a92a90"],["/categories/杂项/index.html","7c6ad23d1c49f58d7f3bc7e10d8f0089"],["/categories/汇编/AT-T/index.html","3a06d2d15bae0c39c346f97f252e8b3a"],["/categories/汇编/index.html","aa25551ec56749417fbcbf89d0e98020"],["/categories/汇编/page/2/index.html","cbd812964b0cdf2eee3595109a4e9bf8"],["/categories/汇编/page/3/index.html","bc98ae037f0b74e728da481a5f04f2b2"],["/categories/算法/index.html","cde7518e3cf1e8628084055799ae6feb"],["/categories/算法/page/2/index.html","1c7edb3425a81797585cb08813d5b468"],["/categories/算法/page/3/index.html","282fedbd8167cf8d9f9627802fbbc468"],["/categories/计算机系统基础/index.html","4e9a3a56908f3117a10ceb293d2cd2ca"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/abc.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0474b9006a2604f0f826abc888596109"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","1dfaf402bb0896980e60538a06f8a634"],["/page/11/index.html","91f60b88bf4b482ee4920c2f585351a2"],["/page/12/index.html","0fe6cda292ace3aa4bf8b21ef02fe34b"],["/page/13/index.html","b64369c93433b5ff79906dbcb9aac196"],["/page/14/index.html","aa1c2ce244d7eef9423cf5843817eef3"],["/page/15/index.html","76e14d1914d11797300abbee503b43d3"],["/page/16/index.html","0280b4ae57acf79683594b80f5c8c6ba"],["/page/2/index.html","980100f3dbc67170dee7b87ef6f0b1bc"],["/page/3/index.html","a2cf92e09c99d1f541192110ccae8c7f"],["/page/4/index.html","2af4e6c4a5065c8d5691e32a5a5e828f"],["/page/5/index.html","35d436174a69d93f7e29d0c6286e571f"],["/page/6/index.html","080ca8bc27382c9c9e446b24d133251a"],["/page/7/index.html","6c288ec3eec5288caac2811ae183d9b0"],["/page/8/index.html","99a00974f9bd1c1be26a361b3c4e389e"],["/page/9/index.html","247d80fdce79dbc3e5b0bc083a0e8536"],["/post/10919.html","0584cd533bbbb2bf361f364b96db178f"],["/post/11051.html","c0293415550f02e670144862ad818274"],["/post/11306.html","0ba66604618843cfbb5d19e1af7da2d2"],["/post/11491.html","5110b20138073ef71a954372de104cde"],["/post/11799.html","ffd69f31f15e4496eae446fb675eb3ce"],["/post/12334.html","3ad8b59be73b59c06ad156d8ef0f0e83"],["/post/1326.html","cce84faa6fa7148ec99091f68a59ff79"],["/post/14379.html","efaf04d4918b51150ea4fdb718087580"],["/post/14511.html","04ed9fc1afbd6dc36171520c02c8250d"],["/post/15201.html","58df2e9b913f3adabac4f374424f4022"],["/post/15425.html","16a4da9a4f2075876414d02768d1d852"],["/post/16107.html","4b850b953c0eda3000c491ec0df28f79"],["/post/17862176.html","52894af86a3dcd9b7a5aa2567ab08dfa"],["/post/18431.html","6b22644212f92bb3779c4d119c5c4466"],["/post/18912.html","45e51595f6b5d81e4cfb8bc501c08514"],["/post/1b9c8662.html","f70b1649f09f1aa64feff2f982f9209b"],["/post/20198.html","0d2ef0e5d61dc3d0c0e96ee8f545f001"],["/post/20ff5ccb.html","890b6b246f4138588913ce200b01c19b"],["/post/21624.html","95c890da33b5f6a3537c42ca78ba8ae0"],["/post/2170659a.html","630b0973569027d8aff6827242365bce"],["/post/22102.html","9be4ae5725701e709459db1405a1be3f"],["/post/22493.html","a935a3ec53f833ee0192697c7030c191"],["/post/235252ea.html","be6463c8432cada05d1749f5449576d7"],["/post/25699.html","285469c800fa704d4e2f1d28ca002269"],["/post/2647.html","e4f25e0669524f951d2d24d6887b6690"],["/post/26477.html","9d49461874c19504ee75cbf69445c307"],["/post/26671.html","8fbb3b2cf13d1a2699b5a0d10e59259a"],["/post/26737.html","8dfa6f8445514fe23a08cb59015c84cf"],["/post/27045.html","d1a4bd5a6566637c0d6084735212a0cd"],["/post/27621.html","f047ceb74d74e4b2c352b7f43fdc1b2a"],["/post/27890.html","286cd0f8b48e869ff76ef56b4e7bfcbf"],["/post/27980.html","fdc882f73cc7db2a81176f2ad380ef2e"],["/post/280b588e.html","a2f547b3fcb9d18f836e8af12550f5c1"],["/post/28579.html","01f1bb3d4ac8af5fb3f8e0fb889cdfd1"],["/post/28877bf.html","351c494e3ff68456546c511625c45d07"],["/post/28954.html","3e3ece0cae6abebb69bdbad44e0fbfbe"],["/post/29378.html","544a4a1565be21f0199d83f8599823e4"],["/post/29949.html","33e1f637a15e831e8df0b928e7dc5502"],["/post/2ae43b86.html","2c149004521f0d4ac6b782fca0f1435e"],["/post/2ba82a45.html","84c701bce470d4a151bd4169fa126148"],["/post/30072.html","6f7938791e726fc2d9a430202196d41d"],["/post/30479.html","6370f64b1c4bf0a5235e5d063a200647"],["/post/31a6b40.html","d2cc3f0f893d9dcc4bc8c205ade2fa07"],["/post/325cdbf2.html","590b259a243e3824c22352c5b0e15d5b"],["/post/3319ed9a.html","3755cf2fe00e350fdea2d42bb78911b7"],["/post/3320.html","bf751ec1327e6ac365e6dca2fba9b472"],["/post/33cb1151.html","482002f7744aa10f68ab17c27a6774cd"],["/post/34811d5f.html","5e7445ad13d8d7ebc55a77da2f6d2388"],["/post/348d4e04.html","fb4fcf9c0a7b949d2b5c1a6304ae2d96"],["/post/3526.html","bb93407017d72a109bfe61538180872e"],["/post/35532.html","74c995d993d629de463662367abb9987"],["/post/35848.html","927f9a3fd55b0ed0e2ed5b1bdc2637a4"],["/post/37318.html","74fffc83a2d11d53ed1610a8114176ae"],["/post/37663.html","dcb6a22b776da87d25417836ad5d4fc3"],["/post/38035.html","856731a62a0ada1fd440004867c5c751"],["/post/38072.html","cc3604455713a2aa3939f3f52eed4a00"],["/post/38145.html","ef961619e25d4be8d6957ad9bccab85a"],["/post/39968.html","31e0981f4534af64d98660c83d380416"],["/post/3de4bc69.html","6b390b71d1246d755814dfdecc6d5624"],["/post/40583.html","69e0e2b2d212d7ea8cb5a8c565c9ae17"],["/post/40997091.html","01953110b893f381985aaf1f2257bc2a"],["/post/41129.html","ae48cdfe870dd0d244a78f2fe84115b4"],["/post/41763.html","17b9e06164a010689aefd4092793b2a6"],["/post/41829.html","1e5a68190933e2a77070d255e277ca54"],["/post/41840.html","54b5f3ccaa58278f69695c40fcb334fa"],["/post/43817.html","6bc20ada3ea136542b2e752066c42f91"],["/post/43878.html","31dd9df2954475d9360455cf1c9b3d86"],["/post/44250.html","f803a9ac7058b438d2fd369d5932632c"],["/post/44336.html","7743fce1a2d4caf9d3c7d1731158dcf2"],["/post/44454.html","ed6a6606c4033158522555a2934a708a"],["/post/44487.html","59d4171199a4146f786d021d15700a55"],["/post/44914.html","dcfefb5bb0e5f151739ea2e0ae800b70"],["/post/4551c130.html","b2a3b5395b4bc0b790127b2ab615ab39"],["/post/455a4c92.html","8d6cdb9e203d5b173bea0d07426fea78"],["/post/46466.html","c0975c33bea23432e257858d2c013818"],["/post/46925.html","d5353b654765bb5e4f8ea48676353e0d"],["/post/47075.html","b9e93d1c96bf29296cd43b3ab43d3d48"],["/post/48220.html","30d78d1d53ef8b6e80d39e596d8d2825"],["/post/4b1879e3.html","55192ede30e1c5d840118004945af526"],["/post/4c720881.html","fd504f8e14f6ecdd516043e01d19f67c"],["/post/50daec4.html","3a53c8d2b8356eb20cd9338e39416eb1"],["/post/51491.html","8acc7bcf6b572dce279122491a1b41be"],["/post/51e63dcf.html","125a27b4388810280ce35c62d02549fe"],["/post/52078.html","35ab2a8bc106371ba8396976c19725ab"],["/post/53677394.html","b0699807ee94abe7f067601035c07b38"],["/post/54300.html","7f10daca9d6b8b1a610905401ff45253"],["/post/54612.html","d62d04ec07d490cf31ce17e47efd2354"],["/post/54613.html","035de63007c652d0b2debf011f3ec8d5"],["/post/54708.html","31e545f6ebd403522eabd13cb0d6a6f1"],["/post/54778.html","b88f4318cbc854c201aa380eefc58998"],["/post/5490.html","d0bbd37daa037c9f1df1aacd37f4b590"],["/post/55046.html","4ff1723807704912e0b3c6b643a3e072"],["/post/56929.html","3db6b971bc0a70c4083e55b8e44f1206"],["/post/57339.html","04d7f8a3fb52e1733747aa548a6ef278"],["/post/57449.html","54adb0e8272e4143d824bfbea76d7156"],["/post/57453.html","e4a37b0dfc080593aa3b099068045806"],["/post/57671.html","ad5433857d05053f383855b72cae1ba8"],["/post/58313.html","f6d0e020e7935a6f34b86f0b47c99e41"],["/post/58481.html","53fbf299394bdda8d62a0844010fb1fc"],["/post/58986.html","fa5052cd324aa785be0154e8a152c6e3"],["/post/59431.html","06ae3ec3f56555a055aa1150e5868344"],["/post/5951da65.html","2cb318e9fa1c7fae8b83a7a1324c9abf"],["/post/5be7e977.html","2e46b71851a0416da7dcea7df46a4cff"],["/post/5f9e4eff.html","6a45102f17674372a83f042ed5058e39"],["/post/604b49d0.html","aa6088ecba4ec02ca1061ef54f48d995"],["/post/61312.html","45767addef1214ff5340e3a2384b455c"],["/post/61738.html","c172578d794fc03f638b94c85c55157e"],["/post/61809.html","250dd93699d68a44e96a6fcaf7031a8d"],["/post/61eaf19a.html","f51600d84d73a828c28336286d2822df"],["/post/63002.html","77873ac888050e36bdbe73abbeb94aba"],["/post/63711.html","0f45777effbf26456987b3d59d4ef237"],["/post/6587.html","d03c9b07f663fce4c52b6b35ec4fea41"],["/post/6589.html","3fea7c6dbeb8eec2ecfb4ae1e0c3104d"],["/post/6880.html","d67df5fe5dc4fd8038ae5d962b2d017e"],["/post/70263071.html","0cf8276c009c3d6bbeeea2cd42a7a67c"],["/post/71038564.html","2b3a2fd4c2b58b677ee77989b191c371"],["/post/7119.html","954d68d20c44f3fabbb8a960d298d3ce"],["/post/74e7fdff.html","0d09e0f99abf02cc9167b1d6b533f082"],["/post/7502.html","2e575677930f3548edd679fcb86f502c"],["/post/7564.html","ec71a6a53f1a5f9bf6f13e4114ce5184"],["/post/766f9b60.html","8fe78380f21a3c0c6302291e89384e7b"],["/post/7ca31f7.html","2c3a544292728f2e1c823b35db906e23"],["/post/7d1c86da.html","13b0da69f34a56450098adaf722ba896"],["/post/7f3bcd7f.html","2af56a8ab29ed563a4426bcc728db1f6"],["/post/8039.html","b24e1a97fa679e5213ad9a426727d629"],["/post/8050.html","8b50e452a540bfb35c5a5155bc5ff49b"],["/post/8072.html","f68a3aba2a64ead302ec206b574b5cc3"],["/post/8274.html","8cba99de270c9d908f582dbe9a32f7e6"],["/post/8372.html","4c3905af38543b3f1c865557f2d61ce8"],["/post/8498.html","d0b2808a4833c191530160441dbb5624"],["/post/85b4e13b.html","cb5df26ec967d8a1fbdb964a655ef434"],["/post/912b2566.html","b3f87cd2c5445dc4ae885ac26ec0817b"],["/post/9187.html","92339ec0c8ebcb3529df1077597abcb2"],["/post/9197.html","98afd975796f04fb78707511102ab7d5"],["/post/94ceb2fd.html","fad5f50af6c9f375beda37027333f81c"],["/post/95495db.html","a1fe5e82b3922b4f78753a7ede50e433"],["/post/97246020.html","efaeaf0c105cb9acf8265660c49f2122"],["/post/a3a786d6.html","faabc44195363a1768572c339f1267fd"],["/post/a444b428.html","02d8587a272a505e914462deee375775"],["/post/a50b8908.html","9a0a101f51881412301ab10871ae7e9d"],["/post/aa1eade8.html","505cea554fb27a6264e8802b6261433d"],["/post/ade8c6d6.html","3cefe0d357966adeb6b4063aeef2a97e"],["/post/ae8362df.html","b4341c34fab11d1056581552b3b4af5e"],["/post/b4c1d206.html","0ad33e15d09cab8790184e688fdc8399"],["/post/d213fc7f.html","496e934d27d892460e835586c5431f52"],["/post/d431fab4.html","ff7077092c394d4477d2728eb8f971f0"],["/post/d5381517.html","64b31812e1a144d3deecada313104048"],["/post/e058ffd8.html","3780664c501440e13f8a6b990fcf0129"],["/post/e0f8cb74.html","50957cc82c51a84d303bc609e140a47b"],["/post/eefe591f.html","2a4e5fbe2cb1c1768be3cd72adc77167"],["/post/ef296a07.html","71f32630b2ff01b3974bdb3e8f93660e"],["/post/f201f9fd.html","0ddc0b3e3bbb6e646336fb7a3c1ce786"],["/post/f79e4123.html","50480e667769a661c1ee4c387fb19ab5"],["/post/f8648a1d.html","42de630f7ac9271ebb017439a224464d"],["/post/f89cb603.html","b38c323b4fe0814cd5e8878c31715f65"],["/post/fa288682.html","cbee2ed205918ecfc27baaea3d1e7e59"],["/post/fb98053e.html","792e3e8f9ca271a6ba62c3e0c201fc77"],["/sw-register.js","5336695d3df413ef24462a95302d6119"],["/tags/AT-T/index.html","ad632b07c9a0847c6b7e034d868739cb"],["/tags/index.html","a92a0f45da92a023c508d553a46a103c"],["/tags/动态规划/index.html","b86c37bcfb77bf815918342c5ee375db"],["/tags/字符串/index.html","454ee6777c321b02631693631a58d8ba"],["/tags/字符常量/index.html","aff1811f3926a94077df9238f44964d4"],["/tags/快排/index.html","2dde2569268d3b694c0aea54c06d7322"],["/tags/排序/index.html","9ad90675d2cebfa056f6592cdef39d47"]];
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
