/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","38f06052df114487673029bbcf9164a5"],["/archives/2019/index.html","b249cb1a823e55143e9051a1eb726f00"],["/archives/2020/01/index.html","dfbfb2f7be42b6885f16260c21c09991"],["/archives/2020/01/page/2/index.html","4b9adc773b0103fa2f7d1cb40d2f65cd"],["/archives/2020/01/page/3/index.html","bce9e5c1c162bd11f25448eba0bee68a"],["/archives/2020/01/page/4/index.html","0e36f14c464dfe67614c72cd44a984d6"],["/archives/2020/01/page/5/index.html","1b9ce964c2b5058df6061199afda589f"],["/archives/2020/01/page/6/index.html","4540955ea9ad6f6f143822f6b91bf787"],["/archives/2020/02/index.html","c0988c84653ab7a388d498aaef044f3f"],["/archives/2020/02/page/2/index.html","85cd5c284a50936b8a0c31623262773b"],["/archives/2020/02/page/3/index.html","0453e33188e59a066ae6086a16503a67"],["/archives/2020/03/index.html","b30110e24f1bb9c22c5c457e45e0a109"],["/archives/2020/03/page/2/index.html","750c8f09632bbe7270593ba94e395e42"],["/archives/2020/04/index.html","e938f36c096a4dd8ea6a86604863685e"],["/archives/2020/04/page/2/index.html","5797d089c47bc46249a27a2156fd7f17"],["/archives/2020/05/index.html","4023e1033a355ef1ec848445000da081"],["/archives/2020/05/page/2/index.html","5cd746a4e7d45a39626cd79d1c0891f9"],["/archives/2020/06/index.html","435fcd06a07c65890e24cc6e947cdc2d"],["/archives/2020/07/index.html","10ba95874f904df46839bc6f53a1732e"],["/archives/2020/07/page/2/index.html","ca4d8e3f5b7582add43c0df91c1a716e"],["/archives/2020/08/index.html","2388a6217f769578f5b927d9fe06d592"],["/archives/2020/10/index.html","d8a435d2fdaee7c75d207ba8cc0cff02"],["/archives/2020/11/index.html","cbb1f8b52091d6254c5eb48a560c751a"],["/archives/2020/12/index.html","acb0cb529b95ba9df8886535b1d7b4fd"],["/archives/2020/index.html","4d2f3772594d32db11dd277a551e81f3"],["/archives/2020/page/10/index.html","a3e1b793ea1735fe1a10fb47c7eba8fd"],["/archives/2020/page/11/index.html","1cc7a0feceb3e2d13ec3f52f1236e1aa"],["/archives/2020/page/12/index.html","994e44f22e712d5a8fd4159def4e3761"],["/archives/2020/page/13/index.html","88883a69dd139e11466d571e2c1c87ac"],["/archives/2020/page/14/index.html","e3d25837b426f50edc9e7970ebfc4e7d"],["/archives/2020/page/15/index.html","83e81e428c53cc1b33b8d72ac08b1157"],["/archives/2020/page/16/index.html","91ea292540587795b51bb5a7c78411f6"],["/archives/2020/page/2/index.html","671bac5d066f9201afafbe8311184ed6"],["/archives/2020/page/3/index.html","9d9914a95cfffb0133ff221ed667c28f"],["/archives/2020/page/4/index.html","2e6d9135a2e296acb4f0e908ec05c006"],["/archives/2020/page/5/index.html","97d8f6525ae61b8bcfd467e08faa60c5"],["/archives/2020/page/6/index.html","21b02652ad0b4de3337daaa318f6748b"],["/archives/2020/page/7/index.html","71f46c00dc7e4478183964443e9fdb95"],["/archives/2020/page/8/index.html","7382a4d6bf21dcb6f67979e572342faf"],["/archives/2020/page/9/index.html","c4d14ffed78bf7f2f14f9d2c8e3533c7"],["/archives/2021/01/index.html","993c0d270b0d7e90009cf6f902d908b5"],["/archives/2021/02/index.html","e57f4700dd66c18f3a86dce974bf91d8"],["/archives/2021/index.html","4063a82d8f2fbf0d67ae7e85d54afda4"],["/archives/index.html","84c5e625304431f0d2a3f6bea0f8d334"],["/archives/page/10/index.html","c5841a7811072329617eea80c04e0795"],["/archives/page/11/index.html","f2badc7ff845c3a942f11af12de36517"],["/archives/page/12/index.html","2975ff9114c1dc0bfd4c204c613b9c51"],["/archives/page/13/index.html","dabf4f6173b1f4a4e9baa974d3f10397"],["/archives/page/14/index.html","758ae32b57b292a7128b0f66e4fcc0d3"],["/archives/page/15/index.html","63b3424b69eae63f9913d0ec09acefb6"],["/archives/page/16/index.html","3b4af29a6f5e5ab5f5c49badd007d73c"],["/archives/page/17/index.html","a2bf3da8edd0abce0c90c476c7d7c2c4"],["/archives/page/2/index.html","b074d83076db6f916dc70fa7d0196ede"],["/archives/page/3/index.html","b5e7f696610bc1f03972cf5f6482871b"],["/archives/page/4/index.html","44b06ddc2f844fd19ec8b67403deaba2"],["/archives/page/5/index.html","addc72e2e637412daddf82012bc6a81c"],["/archives/page/6/index.html","02e437a8ded5edc11f1845cdad2565f4"],["/archives/page/7/index.html","078ed9d0aeebd182326dab004c8c0b94"],["/archives/page/8/index.html","6f2aaf0b8ea418be98e643b7973a9032"],["/archives/page/9/index.html","5f1cb344847e14a52bc3e4971d218f0d"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e0adc12310b8b8cdde385fa28f5e68a2"],["/categories/Linux/page/2/index.html","d5ca6dde52f1175a041477a28505a2eb"],["/categories/MySQL/index.html","77aefbefd4e31d756e81261677ef1c7d"],["/categories/Python/index.html","4c5d55e0a2549101ecafa66e22dfb913"],["/categories/c/index.html","60179a2fbe5891e6bb4a582276fe75c4"],["/categories/index.html","2eeade584d36a49ea4633665eecafe40"],["/categories/java/index.html","8f3271bcfb41dd3683bcf4f75a79caaf"],["/categories/java/page/2/index.html","d0b86c1fcea9095b13cd1314d98086ba"],["/categories/java/page/3/index.html","1a4d87b90e70cbcf886a268a599dd34b"],["/categories/next/index.html","d52113cb63793e5f8a4e4d6c15c3df12"],["/categories/stl/index.html","4ffa892bddbc78e06162f0c4ef92419a"],["/categories/windows/index.html","1fb785ef48ed2ad807572e21fa593330"],["/categories/基础/c/index.html","c50126f472990de67e4ae6ecd6540e90"],["/categories/基础/index.html","659556d5948a42c9ff52891915b3bfd6"],["/categories/基础/page/2/index.html","fee758fca676c5ff3e1787702b9c0520"],["/categories/数学/index.html","8f735fd1961dfea13a12163fd0d9ee29"],["/categories/数学/概率论/index.html","5c3cd3a1787fb91c332cc8575ac63f89"],["/categories/数据结构/index.html","6bc0aa2c5823ffdca3129a20ddb72a6c"],["/categories/数据结构/算法/index.html","c309c263a06e267e48604ad66160cb64"],["/categories/机器学习/index.html","b3e8c2ec7af648ac69879d2bc8cf42b0"],["/categories/杂项/index.html","f7be5cee60454ee3147ba1059b1967c6"],["/categories/汇编/AT-T/index.html","d25ea531c79d4efdda2e508c3a1d1e2c"],["/categories/汇编/index.html","307bce9c4c1a32d24620dab262e3a48f"],["/categories/汇编/page/2/index.html","f1565d3e4c32a933f6560a5b671bae8f"],["/categories/汇编/page/3/index.html","90677221adc3ba26134ff230f9b19522"],["/categories/算法/index.html","dfd29fc628a0de69af62f6f0b08c23e1"],["/categories/算法/page/2/index.html","fd44a5271ba83abc151be31bec7e7689"],["/categories/算法/page/3/index.html","e3f11d15795704a1056834cc524fa539"],["/categories/网络/index.html","ed4a71dc86511ded8e2d39fd60f12c2f"],["/categories/计算机系统基础/index.html","998c6a5cc68aff6986528c6586d09a78"],["/categories/计算机系统基础/page/2/index.html","8d6a5d963862541df51f2b371958161c"],["/categories/逆向/index.html","59f23a85304f680b715d4b16b4f39151"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","99d2e05805dce9ae2f36041643c299bc"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","ccd3f4dc7e1a0ce62fd3f8dd76fded08"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","26c99b0158afd184251c02b390f9856b"],["/js/main.js","284b95d3ba335fd99e07ea05d0602eb7"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/page/10/index.html","ca033b28db8908ecfe420e5fd4d5887e"],["/page/11/index.html","b53674979a0929de450ac116fa8455f2"],["/page/12/index.html","3b3c76b79b4e176aefec40f5303fb0f1"],["/page/13/index.html","a3b627db02f80459f6e9c16a2fe1a1eb"],["/page/14/index.html","b3560a3f8c548c7f4a9135beff056c4a"],["/page/15/index.html","d054645cabd2b1d084a460b6995fa08a"],["/page/16/index.html","c500ff890926c566335400797e697914"],["/page/17/index.html","2f0eac5b267b0756039a81b03d3e4845"],["/page/2/index.html","bd56a51f0601e35f077da3527fd6d03d"],["/page/3/index.html","f067996f4855b87b17bcb266dfa4343f"],["/page/4/index.html","f1a32c066d155411622ce509d290f1da"],["/page/5/index.html","5b75a6c6de95a6241513cc64adc38198"],["/page/6/index.html","29b7740f1d74c58501879a211f011ee9"],["/page/7/index.html","fbd208e720062739cb857994c62dd32a"],["/page/8/index.html","62f5a4ed0b5bc6879d841dd56ed6cc5e"],["/page/9/index.html","61867d4d51740f3fe9029b94678c00a4"],["/post/10919.html","b3af2926c216ac934b4bdf1d8a85a788"],["/post/11051.html","6923f26ad8a279232284d0ded867a52d"],["/post/11306.html","467705f5bc99ece02368e7705f8f2c20"],["/post/11491.html","dbecd42dab3ec304f79af1fa4d6751af"],["/post/11799.html","ef506a1ab30e98ef487e185dae783949"],["/post/12334.html","624bae19d8b41f8cdd7d0af11c4e2d45"],["/post/1326.html","89e33aa5374ecc8a82a2095d834c57e7"],["/post/14379.html","92a3de8b48d2ef0fd16c21a5816e15b4"],["/post/14511.html","00515cec0d11d3123e5039064fa1740d"],["/post/15201.html","f6c088e212d9790b0fb0e123158df77d"],["/post/15425.html","5a561f107963289f08b4373624e2dce0"],["/post/16107.html","54b44c8ba4d1cd69fd51e47e5a568448"],["/post/16e2846c.html","c033357f8b5cbedf7453853d856804df"],["/post/17862176.html","8647d1fb89c889ba4c93802d94fb4233"],["/post/18431.html","a0613320e0c22802880b6ba0e570dcca"],["/post/18912.html","21fe9c7593cd9fc261f7be5a540ad7fc"],["/post/1b9c8662.html","4f1860ab5b4cd766e15a269a7e04b676"],["/post/20198.html","834e40ccf8e4e08ef6fc3c3c2c2fe28a"],["/post/20ff5ccb.html","da6f4f70fd0bd9560086f9dfaaab06f3"],["/post/21624.html","de55c459c062a7d7c2947f41f9143628"],["/post/2170659a.html","6c9d03f6eec5f06046625dcef41fecdb"],["/post/22102.html","2daa4dc4e71dd1e42a2a1b0752ce7dc8"],["/post/22493.html","5ceb915257779226d1ed5e5724908297"],["/post/235252ea.html","c96974114a8fb932ebf59e2db23d58a6"],["/post/25699.html","1c767878ab2b556b10cf620111de08c0"],["/post/2647.html","6c987dcb1b9c91acd64f4e06d9868019"],["/post/26477.html","2c65af232aae5482a40378af00b16c68"],["/post/26671.html","6914f439305a59703fa8bc49c856f71f"],["/post/26737.html","9fb31069803c5fdfa06dca704e183549"],["/post/27045.html","235b423f97c749e6a74289c8b0bb26f2"],["/post/27621.html","0d8e0a07bc8375bc8c05447dba82ed6a"],["/post/27890.html","1be001514035272b1b09913c1efe960b"],["/post/27980.html","bbe8d1074fd895d871177ba8a8affe5e"],["/post/280b588e.html","b7eb9f86aa14de9a3110bcbf81e84154"],["/post/28579.html","ad971395159c71d21db9c2646fe0eda2"],["/post/28877bf.html","6344141cb1bc7d4950aa2a4726b3f719"],["/post/28954.html","94d6a1dced47d7c8ef6fe110d8aa8391"],["/post/29378.html","9f5a3deae8e170f9c984bd3b90380f6c"],["/post/29949.html","d182bbf870291f8d6367d1f466a15fdc"],["/post/2ae43b86.html","fe2b94d62fea2cd96c1e2a947f448b7e"],["/post/2ba82a45.html","fd655b727fff38254bd0dba41f426ccd"],["/post/2cad8b04.html","8855065ae24bd7cb586c9b41504bfa00"],["/post/30072.html","016f68e47402a6f8e6bc440dd0de3624"],["/post/30479.html","845844d885ad7a299a69870150059145"],["/post/31a6b40.html","15b544cb69a6d482ed7b89dd7c91bc41"],["/post/325cdbf2.html","366c7e845587992180329c47e070e942"],["/post/3319ed9a.html","2900658113bdbe57a77569fef7cff594"],["/post/3320.html","e44a4c746642a3da0db19313c72926aa"],["/post/33cb1151.html","a13bb1f17ecf76ac8d5b9c03113a36f5"],["/post/34811d5f.html","f32774d5db350e3b0cce51380be2b25b"],["/post/348d4e04.html","286aef147348eea14c873aa32bf36ae8"],["/post/3526.html","63baefaedfd74ef6a5aa64ea452a0541"],["/post/35532.html","d64c9f7f4494c74469f159b44e0d965a"],["/post/35848.html","7a9aa8144974615ded8edd8b5c53dd41"],["/post/37318.html","d133f12a2918a4416d6afa03653a4654"],["/post/37663.html","147c6d3dbcc6c29463c4b5c3145dc0ab"],["/post/38035.html","5e5b7c770fd30739b875dcd44a0743b9"],["/post/38072.html","76ece17def62c6cdb159e1ba39874781"],["/post/38145.html","0d1e2b046fbfb781125edb173c2f1a5d"],["/post/39968.html","b9cc99fc97c0ad8c30e0dedfcb7e5600"],["/post/3de4bc69.html","79d506d9e8f0e7496dd06d0039a37ad5"],["/post/40583.html","827a27f9ab4d98e6258c249296874ce8"],["/post/40997091.html","0a2bdb17193d4149beef15123a4a491c"],["/post/41129.html","5017262ff8b22421c4b22159df2f6c8c"],["/post/41763.html","e666038d907ab20d659fb3945e3695f6"],["/post/41829.html","d77a56595980d432bf8b4845dbc7ec71"],["/post/41840.html","6db157423f816a7a31ad758fd3e7c6d7"],["/post/41e39f2b.html","c67a6f6ad9f22e32e53d8d72d519b714"],["/post/43817.html","6d63e36d0e4a896141941467fd44ec4f"],["/post/43878.html","9af5c1aaf4b438fe4bb69774a90700e0"],["/post/44250.html","4a6d06b6ab7ebf114bc274836e653695"],["/post/44336.html","84ece37c5b02b30d78de13d2dcb372b3"],["/post/44454.html","84daf2371aa1fb655386f8f831635ac1"],["/post/44487.html","83866e644469467f1789d00019a6dda1"],["/post/44914.html","7c86b617fa92f274b511d8af21cb483c"],["/post/4551c130.html","60ce1b5378a65b666762fe679a20c13d"],["/post/455a4c92.html","de57a3381f2ab70b8befe7b509e70ab4"],["/post/46466.html","6d23a08a23ffdf450388aad75837fdb3"],["/post/46925.html","bc195bfb3f1fd5d55fee8ebff8453b40"],["/post/47075.html","7c85e8df0c80d27e8064902ba0a2628e"],["/post/48220.html","3b53fcfbcff56e970d4d80d5677e1e48"],["/post/4b1879e3.html","6d9c99071f160a8ace1c8118aae65c20"],["/post/4c720881.html","650f5f963564f96c52ac0c5e72a00941"],["/post/50daec4.html","d3cba56321d23bfdb5cbdff9b583f00a"],["/post/51491.html","17c9fb29b1bd0ba14f50af89051ebfe4"],["/post/51e63dcf.html","52d1ebb0177f75081a72073771aee42b"],["/post/52078.html","304e8d3254f02ecdf587c823435b9dd6"],["/post/53677394.html","134f67d3c560a2f0a4edee4fb4b3e701"],["/post/54300.html","f7e33f0da6f3e35ae5a85e9b3fa9bd44"],["/post/54612.html","7a14cabf72691ed76ec5ef69f29fd775"],["/post/54613.html","ccc608aed761d1f5277f9953138c1923"],["/post/54708.html","0dbca43afa95b82d9a9605d0f0480ec1"],["/post/54778.html","00e283bc67753d8a8b25fec37bfbaf11"],["/post/5490.html","54a2e1daa51005e93420644bff21268f"],["/post/55046.html","22367fad9841182d6af3fef5ec27947d"],["/post/56929.html","3e43eb6f1aa4fc9f11cef4db35443096"],["/post/57339.html","55198867841b22e2e817fb160108b2dd"],["/post/57449.html","7e3bf0bee800b7222dc15c5476bb0b54"],["/post/57453.html","54ffe86d2601e1e2618c35bdede7cb6c"],["/post/57671.html","f22420a63e264ca3a8e438a2683aa94b"],["/post/58313.html","44f285dc6e431026d81a593e9daa91df"],["/post/58481.html","f9688913c2e5bff849414048f1f50e7a"],["/post/58986.html","55272f13e0a14892db79e5cd72ae8598"],["/post/59431.html","c4d2d5f5fd31af55716b2b6e77c63346"],["/post/5951da65.html","db7a3479a2b76aaea8be00f281dc66ee"],["/post/5be7e977.html","ecf4d3ae842c6a7916d7f6dc47b3f89b"],["/post/5f9e4eff.html","d37a6d966b94a8cf42355a68e3af0075"],["/post/604b49d0.html","a48a48dab949dd7f32d52c7460684101"],["/post/61312.html","bf4a00e554f5ac1d6cf689925d6778dc"],["/post/61738.html","8381cb14d2e9a23b8816d9f9d4455afb"],["/post/61809.html","ca673d20d41b7ad0f357e0b4dd4bc7b4"],["/post/61eaf19a.html","73d1a4b7d592c8d324d7360cfb338a5e"],["/post/63002.html","b49dff55505064a4e7332cefe4d8ef9f"],["/post/63711.html","ad105021432d340c7f166665da521404"],["/post/6587.html","95a475895c5a7871c4d0bfff62c0e28c"],["/post/6589.html","93e490d7f4e8f92d6b7e4898fafd91b8"],["/post/67454659.html","8a96b45ae4b5d0c778138f5ff7220940"],["/post/6880.html","10aeece75f54987a5b49e28fbb56796a"],["/post/70263071.html","e374ae4fa9c7ba1f19827bb5e5ced651"],["/post/71038564.html","95caebbe5de5aacca4e220314b6fc747"],["/post/7119.html","16f09ebe8d6362f4ad0789bfc887fc6b"],["/post/74e7fdff.html","b9ed87e70845d2afe8ef056f1eb7bba4"],["/post/7502.html","1dc380c32f504114739e4510c62563f6"],["/post/7564.html","763cb0a9ac91581e9bf57bd2a9db0672"],["/post/766f9b60.html","978071d50c15ab6bcac8664b5135940c"],["/post/769365ef.html","c23feba45146c1695d049295d4dea192"],["/post/7ca31f7.html","eca2f76394999f6715560f87e0008dc5"],["/post/7d1c86da.html","3d24ae8fc258062dc63086da414a0dce"],["/post/7f3bcd7f.html","dc14eff57d0121add4dbc02bd8cd61ea"],["/post/8039.html","c83c94717b1ebbd0a0ebecf72b89f46a"],["/post/8050.html","0ce98dd4b1847d5d7504da8975b2ca4f"],["/post/8072.html","58d4dba5851a868ceaee159d3ac57c5f"],["/post/8274.html","92edb6508aabbb864d4f077ff4b5e73c"],["/post/8372.html","6b9beccb6e69111409227c963b8b34ed"],["/post/8498.html","687ae23f660879c667e8e8e0a1f87248"],["/post/85b4e13b.html","2b2c13299bbf3f80fd4c7746ac2744c2"],["/post/912b2566.html","df2d0515bc085d999ea8b8797cdbec8e"],["/post/9187.html","0758f53f95d332017654fe8e4034c9b3"],["/post/9197.html","71eaaf0ae1eb57dcd3a2e12995c75b5a"],["/post/94ceb2fd.html","6a651f05d946c542922c17410f47bf2b"],["/post/95495db.html","fd74908b0578b3028f28a0f4ae125932"],["/post/97246020.html","113cf95c117bc1fa3e0416dda0778107"],["/post/9954ba8e.html","c0ed534c77612188479004b994530174"],["/post/9d855db5.html","ff9b2662214639fcec7828743f38683e"],["/post/a3a786d6.html","c2eef5c6c6b04fd121cdaa3bc5813f4a"],["/post/a444b428.html","64bbf96bbbca16a88631f67cfbb49f74"],["/post/a50b8908.html","936b2944ca5ed61fb08968d12b9d5316"],["/post/aa1eade8.html","8e6fc35b0b4ffcabc78f9391870ac30c"],["/post/ade8c6d6.html","0fb6897e1a6493e38d46b00d15f84e8e"],["/post/ae8362df.html","fa7830ec95d1acda4d7678918de0afe9"],["/post/af3eed3c.html","8546bcf3aee02faf04fdbf6bf87e3756"],["/post/b4c1d206.html","0f74e37634b5960d4ffdc5ec74ea9944"],["/post/bd608ff7.html","77d2860fd31f2528ecc14400acdd8753"],["/post/c82a1c99.html","f22f5316523b547bd8ec5ad8cd65ed84"],["/post/d213fc7f.html","046bedf96c8be14630ef43ff596c39d7"],["/post/d431fab4.html","57b9bd74af0c9836aaa3ad1f7ea7ee29"],["/post/d5381517.html","8c5b61ad91b266ece856d4940b170d80"],["/post/d94f88de.html","2738a38c1bb8b5247a4dffc66f01276f"],["/post/e058ffd8.html","9a246554f63a742b505a173d1c7f5d8c"],["/post/e0f8cb74.html","208bd10b8cb41318a55e7f1ba898b70f"],["/post/eefe591f.html","d3efeb73638466531c417ddc942c1eec"],["/post/ef296a07.html","5b13108b6802bf0ae8bec5c97cdb0b22"],["/post/ef3a3fcc.html","3bb9d6ca9782fff4c30d113db58bc865"],["/post/f201f9fd.html","0b2f84fc37632cee47f33ef1c8dd9e7e"],["/post/f79e4123.html","71eea960f8d8a64f0287c4413bb7e193"],["/post/f8648a1d.html","669cd7dda1c3e08e1b0d9374e9a940ef"],["/post/f89cb603.html","362be67a55d459edc791f989d866cdcc"],["/post/fa288682.html","c124e01ec1cc41a308b8b4de9ffb1614"],["/post/fb98053e.html","7c86f77c8fd5e4dc298779fc4ab354a8"],["/sw-register.js","48b8c9431b4ef325270c0b37851f31da"],["/tags/AT-T/index.html","71555099d08938bfb4fc7cca2d73f48b"],["/tags/index.html","71b55a4eca26a5690131534f0e937d9c"],["/tags/动态规划/index.html","1b595c404e7f80f9d3602337db19d295"],["/tags/字符串/index.html","af8b3f463abbeb8f72907fc06db30ef1"],["/tags/字符常量/index.html","513a8dcec6eb7ab79042a041d7f98daf"],["/tags/快排/index.html","ae2fe363fa55f0af53d83365a554709a"],["/tags/排序/index.html","29cac7f3c6920359bda2e95dcd77cf8b"]];
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
