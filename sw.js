/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","553948b054a0d21c5c8d26644558ac7b"],["/archives/2019/index.html","5b967441b5a3334c7bbb544999a3f0cf"],["/archives/2020/01/index.html","fa5fbc212fe9e4ae9dba013339df51f8"],["/archives/2020/01/page/2/index.html","dd61284f640ad9fca8949ea6c22fb644"],["/archives/2020/01/page/3/index.html","0a160aa80ccd0926ced1b09bba30646c"],["/archives/2020/01/page/4/index.html","50c5d251bbcba78645c40f63ad816dd0"],["/archives/2020/01/page/5/index.html","6252917ef537de9c0c6134797c6d19f0"],["/archives/2020/01/page/6/index.html","cd37849347f21831c1ff754f6e348fe5"],["/archives/2020/02/index.html","67e4d164ec8777462eb40b90a2d46cf2"],["/archives/2020/02/page/2/index.html","068a4198b234640bb7a7fac1bb9be70c"],["/archives/2020/02/page/3/index.html","4b65791865486bffa757cdf702e6bbb9"],["/archives/2020/03/index.html","edc3d47d75b958c5ad15978b493eb57c"],["/archives/2020/03/page/2/index.html","094f02d34c41fdb6e338c8a0df26ee2e"],["/archives/2020/04/index.html","c76256a53a6aa6c45ef4ee766171d1b8"],["/archives/2020/04/page/2/index.html","d57bce6b966bf919b3a6207ee0090698"],["/archives/2020/05/index.html","1ce83b6a7e6db3bd60c4350f896b56d1"],["/archives/2020/05/page/2/index.html","fe8c4be5ab1e24c14576f049afbb3458"],["/archives/2020/06/index.html","7edae56ba0de9a3b845d39610b32e59f"],["/archives/2020/07/index.html","18ca957bfe5dc1969534715fdb8ca806"],["/archives/2020/07/page/2/index.html","48f74094fd5bbc37564e24c4d5bd5eea"],["/archives/2020/08/index.html","c1f4805511bc51f6cc53292ac691e946"],["/archives/2020/10/index.html","6f41bacd7a04aa2465905d566d9d2da7"],["/archives/2020/11/index.html","172c2c15500360b386ba94b08ccb79a5"],["/archives/2020/12/index.html","9c414f98a357e879b47add1ba1cf79a4"],["/archives/2020/index.html","f4d1ab97c741a7f549470c6b3c264440"],["/archives/2020/page/10/index.html","e2ec383c5fa8402138f82900ed43a595"],["/archives/2020/page/11/index.html","1c339dd4dcbfc17a1c053d9268fc17b4"],["/archives/2020/page/12/index.html","e20ca5687db30353a4b3575d66f5064a"],["/archives/2020/page/13/index.html","c29bd4033df7c518100925a747a7cad2"],["/archives/2020/page/14/index.html","d3c13ead6827fc9930198bda464825d5"],["/archives/2020/page/15/index.html","287b8c0b59ebe7322da21b8d1859bfb3"],["/archives/2020/page/16/index.html","90e9467bf82b0574a80be00e54c0418c"],["/archives/2020/page/2/index.html","726478b84e4edf2e1a7d6cb259e5a590"],["/archives/2020/page/3/index.html","61207dc61547d8c0f112afb6ee61db52"],["/archives/2020/page/4/index.html","f64d49b9995524d2d529960eb452bf30"],["/archives/2020/page/5/index.html","70e47d9c4e81349af021c3a0e867edf0"],["/archives/2020/page/6/index.html","563268ef8a860f346f7d800da3bc256b"],["/archives/2020/page/7/index.html","4e0af4b3c145060d56ae6c93941de751"],["/archives/2020/page/8/index.html","88b9195f23f7ed1892ccd56806fa4a64"],["/archives/2020/page/9/index.html","f8aa6dc94eeae5108a93188d1de866a4"],["/archives/index.html","c769255a95f467266478cbe2a6c1a45a"],["/archives/page/10/index.html","032e2642e45d861da5a804de2ae314ba"],["/archives/page/11/index.html","cfbc2baae8cc007e774900dbbeae56c1"],["/archives/page/12/index.html","c48f534fa4612d2ccf77c501cd93faa4"],["/archives/page/13/index.html","f20417353ddf795c5212c1416a7cf5b3"],["/archives/page/14/index.html","8237395e96e311a1153ba46090d04967"],["/archives/page/15/index.html","580a45c206e811e6d16d1208cd10ffad"],["/archives/page/16/index.html","18a0b9fe8699f8270bc276b1128e18fc"],["/archives/page/2/index.html","351dcf301b937120502270b450a59706"],["/archives/page/3/index.html","b138849ba4434e66322a02b14a2dfd3f"],["/archives/page/4/index.html","66f707b983cdcd15c437ab55c7415ecc"],["/archives/page/5/index.html","0372624b609cfe3c002a27ad7a22cb2d"],["/archives/page/6/index.html","be9d432225f9bd3257accb11023dba42"],["/archives/page/7/index.html","283df44a0add3ff6ea07b9e7fe61764e"],["/archives/page/8/index.html","2a8b7d8de19dc6e7e781f35237979e75"],["/archives/page/9/index.html","b5b99212edcc1f7b2c2a97d99fe1823c"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","188a0a35a84c43a45eaba8a2ae3dd1cd"],["/categories/Linux/page/2/index.html","845a146754b1c5e72bdc95a66eddfa11"],["/categories/Python/index.html","4e183f576034506f19b876693443c243"],["/categories/c/index.html","5f6ac9b70f99f61e5a26a8687c0de067"],["/categories/index.html","dd951443d5e3776e0a7c62f5babf2f7e"],["/categories/java/index.html","c3a04257f21911733ffc6acdccb60e46"],["/categories/java/page/2/index.html","a87d8817d31ad99061dce6098bd284cc"],["/categories/java/page/3/index.html","2e75ae8cd7684f5f97662e91b0b0327b"],["/categories/next/index.html","ee7be817a09504a96f25b59c0ffd68d9"],["/categories/stl/index.html","8d073824c6be8e82f0c41c26c5945518"],["/categories/windows/index.html","e6ce7624d57eedf93fb126264c5d2ffb"],["/categories/基础/c/index.html","37fd9308c213b02908b4792ceca6ed86"],["/categories/基础/index.html","0d7fb0e4ef758e4a1e3920050e2ac75f"],["/categories/基础/page/2/index.html","47e40ee196db5d81a13f748d566623e4"],["/categories/数学/index.html","e1d4fd9d188b7f6f761415e9e0807983"],["/categories/数学/概率论/index.html","c12ffe442989b576303bc36aacc849da"],["/categories/数据结构/index.html","cbf2e5613abd618fb98ea64a0e6717fe"],["/categories/数据结构/算法/index.html","704f40781f6f5404a079c62e8ffacffc"],["/categories/机器学习/index.html","1dd9649798834db129a25503531b7a1f"],["/categories/汇编/AT-T/index.html","a738e805d9e02f923f345f9b8ddee067"],["/categories/汇编/index.html","af287b4ac105d9093f2a5310eecfd2d8"],["/categories/汇编/page/2/index.html","5899ff955679cd6d0cd031ce31e94f79"],["/categories/汇编/page/3/index.html","9a85df5a9a8cebf91cb3efcc38731715"],["/categories/算法/index.html","b509a1fef2ba2b8fba777d906109231a"],["/categories/算法/page/2/index.html","9add89e2c7b9d9ada8ea270913b8abff"],["/categories/算法/page/3/index.html","8add5de4e0b79c7092d4cba38577f9aa"],["/categories/计算机系统基础/index.html","094697b1e5a9a9c5fd7d2976f59263d0"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","c5e184f6ef3e1d529083c65ecb2ce826"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f1d28de1d91698fcfb6a1f18d47ddb26"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","935bb894ce032421766ddcd928480308"],["/page/11/index.html","66b77f10a971c52a27614b5a6c37f8fe"],["/page/12/index.html","0928379f05a4e69bd2efcae000e6dbd9"],["/page/13/index.html","e7b3a09e43aedb36e550fc43b8397975"],["/page/14/index.html","e143adf895480e390f5efca44e0706ba"],["/page/15/index.html","19dda310fd4af4495b3eee51971f7251"],["/page/16/index.html","46f7d9bb29300d8bea8ea8be74b8ef09"],["/page/2/index.html","212be1081290cc79f399216b655c223d"],["/page/3/index.html","fbd670f994a6b1c8ac653c857ce3cc2a"],["/page/4/index.html","8c2f5632864cd441c5b3fb9b1c1a670e"],["/page/5/index.html","ae4116854230bf51bfc491e3c666dd3d"],["/page/6/index.html","e3ce4f17ced4f9fa808040575ada393f"],["/page/7/index.html","294a4d7a744c4879ee03ee248a37f7a3"],["/page/8/index.html","6d760ad0f2c4b8457edb1e18b147e570"],["/page/9/index.html","ec9e2562f17b26f0b8fcd9f476c89c29"],["/post/10919.html","f017b79c18088badaea37390a7b01ea8"],["/post/11051.html","a784882c15fbb5ded48c36c0ac089c25"],["/post/11306.html","99cb0a7246c0c57512e5b51cccade201"],["/post/11491.html","726782d0296f1ddbd2ba98b1daaf8f6e"],["/post/11799.html","6d4a138f5590ccdd6b6d4953a587924a"],["/post/12334.html","02a2cddb6ea18d9fcb3e30343e7e1186"],["/post/1326.html","a790c3fbeec55e64baf929b614960452"],["/post/14379.html","6c08e74e419fccde50f9c47e2ce0789b"],["/post/14511.html","60d45627baa233f3697f0aa248104810"],["/post/15201.html","88eee2219f82e2e5f37469241df0a85c"],["/post/15425.html","9a3ae650d910834c47de5d7f39bfedca"],["/post/16107.html","11667cd4bb799029ce6d031b99f4a5a6"],["/post/17862176.html","d2482646dab0284c3f1d03c58c1bde9e"],["/post/18431.html","fb1b8ef9101b85ba369bef8469ad02c9"],["/post/18912.html","ef3670c665de7749f022fa2ad8d773ca"],["/post/1b9c8662.html","bb5112e839aa7b615ebc63475b4a0c8d"],["/post/20198.html","d6397e0d11aaa2c99c06d978db1dd2ab"],["/post/20ff5ccb.html","4ed06823dabe18887ea5a1f54a89bdcc"],["/post/21624.html","d3568a5bea883bef3fe46307c373d395"],["/post/2170659a.html","c5836d1552d0d59a1981fabcb663f2ba"],["/post/22102.html","73f4ad98bdca8c24309ce0618cee0edb"],["/post/22493.html","a2951e49d99e31abcfd4d00f069eb412"],["/post/235252ea.html","3d264ff07b31e78833d230f7e239d15e"],["/post/25699.html","a432c6fc6fc27014ab81ef656f2d60d0"],["/post/2647.html","2bfce7552351d7d598f62812d300eb35"],["/post/26477.html","fd6d617b215f602127bd25b63282f863"],["/post/26671.html","fd2d00601652fb9b2bac981093e77750"],["/post/26737.html","dae13749a166c0f1cd0c9863c06eeaf0"],["/post/27045.html","2f727e96ede3a8b74a69ae66fdf1cf65"],["/post/27621.html","0bc0a79d1ed22857525a5335265a9406"],["/post/27890.html","b02a25d722ecf32cdf287661a1e5f77f"],["/post/27980.html","11b34052676ae05378f9cfbca4522703"],["/post/280b588e.html","406310b34dae9df19c670b9c691581c9"],["/post/28579.html","0261ac5e24b97ff914df81814dffa3f1"],["/post/28877bf.html","188d11e01b4ecfd5fb75e9740d9401d4"],["/post/28954.html","ff6b2384f0528261fc8f7e4c0418f602"],["/post/29378.html","c798cbf3dc470791337ab04d94ccdaf1"],["/post/29949.html","6214f722bf49c490e8df4abbc7435110"],["/post/2ae43b86.html","ef9cd9ca9c94b22cc34c438c085cb99e"],["/post/2ba82a45.html","e93d927b9226e6e9e091a826014ca063"],["/post/30072.html","f2986878367b41b786cf320dc5beb434"],["/post/30479.html","a77b5f8e9231ff2317ac13a5ffc83189"],["/post/31a6b40.html","6e63141d85afee1bdf65a49ba4c813a1"],["/post/325cdbf2.html","aab4288140d0cbf3ba17abb080970fe0"],["/post/3319ed9a.html","55f092a37c774fede454cf938ce16fea"],["/post/3320.html","50df7624f781e8eebf56094045a8428a"],["/post/33cb1151.html","4fe4f0a1925c0ab27c9c62d3dba5733c"],["/post/34811d5f.html","a1639197e0882ab8f09ca3f606e9b801"],["/post/348d4e04.html","74f17574b93ab0018f370cc6dacbc12e"],["/post/3526.html","5dbd3ee755ebd03a5aa2093e1b9d9737"],["/post/35532.html","734861d10dd44af31fb8369f75c07cfb"],["/post/35848.html","ab7ea2a837eb25694b5f1760d1089052"],["/post/37318.html","e8817401da4e1ca6d086d949263cfc32"],["/post/37663.html","fd20defcca03d7332642f3187b57694b"],["/post/38035.html","1287c69ee333bf24bf1c146895e12cff"],["/post/38072.html","4a270150ead09790758036e518c0f872"],["/post/38145.html","4116ab1b8429ce75197050bbf03777c7"],["/post/39968.html","b8292af5f139ee9c91284a25c625b673"],["/post/3de4bc69.html","aa72220b890fc11f29a8946c721f203d"],["/post/40583.html","49d8fbd2b08b54894c4a873564d42eb0"],["/post/40997091.html","d78bfd747f63e189b04e4baffd95ca47"],["/post/41129.html","3365b0997795b53db2e3704cf6872eb1"],["/post/41763.html","0afb1746c9cf7a2102eda53463f886bf"],["/post/41829.html","50839520071565bc5e96c58cc42bfbce"],["/post/41840.html","977fd1e252453557222f5de1c208177c"],["/post/43817.html","59ef2a63ea4852d843cb57d3b64fb8c6"],["/post/43878.html","e13246e5c70793c48f19bb08dc6e5363"],["/post/44250.html","376b0b8c7df085a31f7e4029b7268b49"],["/post/44336.html","063b2bd38fdbd51c5c0adc79ac2affcf"],["/post/44454.html","fdeace7f2c8a1572a88f3565fdde9078"],["/post/44487.html","a5923d651e90ec143f4116a0f44322a1"],["/post/44914.html","f32f0ee1302840d6b09582e087e4fbde"],["/post/4551c130.html","69e70289e4f32607bc82c41e2dba3c32"],["/post/455a4c92.html","f1b50a6d0db51197269191d706722568"],["/post/46466.html","9c15049484fa4fedbfa5d1d396dd44d2"],["/post/46925.html","d1ad7c6fdc59140f8f24aacd9220b758"],["/post/47075.html","0ef6576fb5a439a2f3a24919a31852fe"],["/post/48220.html","d98e4a209b5594287e9ec28478844b25"],["/post/4b1879e3.html","f2d2efdde4c7fbc0340247d3e157ae76"],["/post/4c720881.html","43c9cd5a18646c459acbffb80d4329c8"],["/post/50daec4.html","72969ac54f8dc65587916ba450b0b540"],["/post/51491.html","9a5914ba98e3728dfed91942e5b4549d"],["/post/51e63dcf.html","06da7deacc2b36b7e2fdfeac8117eddc"],["/post/52078.html","329547b95e954999542fab4e41ae14ea"],["/post/53677394.html","3fc46fb6c9fc155ae98ca90825d960c5"],["/post/54300.html","80eef0b503c8e89a5d92c04a596f6a5d"],["/post/54612.html","f6ded9ebf37efe8537ea657da36b1de3"],["/post/54613.html","132c2367bfc32582df96a06fbd1ddbff"],["/post/54708.html","2e51227a4010fd6ec808028800131eaa"],["/post/54778.html","3d9e96bab5bde6ac4aaa2b55d4182aeb"],["/post/5490.html","86da4058a43c2e1e3480e8037f9b14bb"],["/post/55046.html","c207f8f203a727f1618fb9469bbf4916"],["/post/56929.html","38c3397d20145a8e4f68667fe433c0fe"],["/post/57339.html","4972343e53ac265dd280095b9537fdbc"],["/post/57449.html","1761d8de94abcec2eaddad1e4a5381a3"],["/post/57453.html","3c57c5a2c76ba96eedd6e83c2cf36bef"],["/post/57671.html","12a6168074fc4df23a4ac76bbe338691"],["/post/58313.html","2d7c27d7b7cddbbca3ac9e15ec684370"],["/post/58481.html","33585158da30ba0abe2291c9ed06c3ee"],["/post/58986.html","c29aa7615f921f518d9d37ffc7a83699"],["/post/59431.html","1798036842b88748cf4f6835a6e3e221"],["/post/5951da65.html","183ca757473f23be7436dffc236dd3a0"],["/post/5be7e977.html","67b290c54c449f9b38a33c52d1958794"],["/post/5f9e4eff.html","73cf2592260d7a9fd1000cfe4614542e"],["/post/604b49d0.html","cdc1f036248e0dfc738391f8ada6b5b2"],["/post/61312.html","b7db710d47a86a61fdc16cd661e530d6"],["/post/61738.html","a42933ca5b7f9a1a1a655f703fc46afa"],["/post/61809.html","add410a5cd109a8bd541dc9ffdebba3a"],["/post/61eaf19a.html","856559ac96efc5f1e760b3775d8cb1b6"],["/post/63002.html","041f3ea2a85a5db9a33643b92f632084"],["/post/63711.html","f4dca2b89ea1a267aef68563427b2d04"],["/post/6587.html","c5e584d423e349b71ed5defc237ff1e4"],["/post/6589.html","c3405a06d5311461310c7c1331a1f095"],["/post/6880.html","45a50ce0f327d9d71e6e2bc50fd183a9"],["/post/70263071.html","e3b01a5b6676d7f9def1bab97661551b"],["/post/71038564.html","7e4d7c458960dc09fc5578aa528352bb"],["/post/7119.html","c2864e66d3e7720bca1a6d9d2f2e61e0"],["/post/74e7fdff.html","632c40b8abb930f00b60fd601417c801"],["/post/7502.html","222dac0a117617a142cf1c0b75b410a8"],["/post/7564.html","87b9a349141b924dde9e00cc3f546411"],["/post/766f9b60.html","9899bdab1648910ebc69932414dfa639"],["/post/7ca31f7.html","9470de2b26b44c592e9b5b71aca7e91c"],["/post/7d1c86da.html","40620ef67f3fbe873db5f56bf061531f"],["/post/7f3bcd7f.html","6d0edfd1714a5d438f85e3a7dc893a0d"],["/post/8039.html","52aab42a5d89659b68d2fcb6640a5d16"],["/post/8050.html","3b29ff309125453d598ddc7acf5c7041"],["/post/8072.html","9258ffde67fc33c0d01acdc9f3d9f911"],["/post/8274.html","7e3397501fef71c17e3f8041d3baafe2"],["/post/8372.html","9619661bfa9691eaca806424b5309c7f"],["/post/8498.html","456b1b1e7d9eb437761216dbfdedccdf"],["/post/85b4e13b.html","711057d320eebd30ab0a073375aad1e8"],["/post/912b2566.html","ac99b52216fbe14a1bab31e8889f7669"],["/post/9187.html","811e0e1f447d846d5661d03ec8643912"],["/post/9197.html","f4b4d5ec2384c9c47dc3fb5db6ea2e1e"],["/post/94ceb2fd.html","3237bcc280f915b17b8c422a42b8d453"],["/post/95495db.html","e832f995c5b3f7a14ef33068ff78f62d"],["/post/97246020.html","16d1e066720c2ee2186c9438c10d7ac6"],["/post/a3a786d6.html","17b778226054347d3645a4d2965899f6"],["/post/a444b428.html","93e70375e8d59fbc1b7333add7e9e640"],["/post/a50b8908.html","15987f0b52f8083d7e1032e087539be5"],["/post/aa1eade8.html","afd5c005e0cca6a480a441da3b73bd52"],["/post/ade8c6d6.html","3354a9cd56c7dab9a6c6bd153ea19431"],["/post/ae8362df.html","6f993baf0c8594f7b4becec562d2c75e"],["/post/b4c1d206.html","3a5032f37c3f4ca10289587468946aae"],["/post/d431fab4.html","7ff01ef2d4726d5d64ffc5a446c962fd"],["/post/d5381517.html","7953c7782cd711229006048c280f9dc1"],["/post/e058ffd8.html","2f3987306e378bbb0c18a4d4dbd88410"],["/post/e0f8cb74.html","282f48980fa8c5f763d29723f6f6ee76"],["/post/eefe591f.html","4d5629d87a0f6c0034fdabc01a8f711c"],["/post/ef296a07.html","dc247a0a1b7ed434c19a6200418e6e83"],["/post/f201f9fd.html","37c468d57c95eb722fb7e00f3b6e7942"],["/post/f79e4123.html","07273c62e00ac608054e636a6d522ec4"],["/post/f8648a1d.html","41e62f64d1d08c0f50abba022a2e6dc3"],["/post/f89cb603.html","1f25db37b4149d7aee22677b587bc99c"],["/post/fa288682.html","fb7527a409684aa3ebe0da84bd9c1b6c"],["/sw-register.js","c0f7bc26a9d7d1fccc16c9bba3535879"],["/tags/AT-T/index.html","b47119bddddee377641569a991d31a74"],["/tags/index.html","3aed3094bb3bd389239dbe61aee1856f"],["/tags/动态规划/index.html","acaae25ef4d0fb3f7f617adf58b3ffca"],["/tags/字符串/index.html","00d051dfff798d75109a0d39050ae192"],["/tags/字符常量/index.html","c5b0ab38edd2d4388f1fded9e996bc19"],["/tags/快排/index.html","f7af5fa953700ea75527e3aba398fbcf"],["/tags/排序/index.html","2d60b3224cfbd4e1202fe79f3b41f4c8"]];
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
