/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","285275d0ad56e2d24f57c5e602a463f3"],["/archives/2019/index.html","3c7cb3dd5bd2565d302825d623c817bc"],["/archives/2020/01/index.html","6e62e8cd9e236ede48879f0342588720"],["/archives/2020/01/page/2/index.html","cb6fb4a9e546cc09cddf278f44384a32"],["/archives/2020/01/page/3/index.html","e37e2685352b8caf2842e62a6c934a4b"],["/archives/2020/01/page/4/index.html","1f015c7b26dbdd77b8f13379e8369493"],["/archives/2020/01/page/5/index.html","bd46729dd4f7e1cc8797b53e43300f79"],["/archives/2020/01/page/6/index.html","cf8f492f6ddaa8a81c2781a1e459ce66"],["/archives/2020/02/index.html","4f06f63b56cfc59ce13b2a09610df5ce"],["/archives/2020/02/page/2/index.html","aadb4ec93bcaea089c7f9efbb4ac1a7d"],["/archives/2020/02/page/3/index.html","9f4fed831ace99b9b883eadd11859d6c"],["/archives/2020/03/index.html","7456b51e2f52029cac99ec4cd7efd60f"],["/archives/2020/03/page/2/index.html","83680910c9b7bf4cf208ec16d59a8acf"],["/archives/2020/04/index.html","770e8c7012c585dd1cf6d7c10a4e75a5"],["/archives/2020/04/page/2/index.html","045bca3a9c458fb50e1e633411241fda"],["/archives/2020/05/index.html","08b88a390a53e9c96860cbff5f33c771"],["/archives/2020/05/page/2/index.html","b1470f114b5d29e31e7cd4e4d8b090bb"],["/archives/2020/06/index.html","4d51f274e0117305df9a443ea61826d6"],["/archives/2020/07/index.html","6d7cfc4c59ee28e9f2969b3c3c8c6a6c"],["/archives/2020/07/page/2/index.html","7fb06e3c8356c18e5c21dce6b1ed8a13"],["/archives/2020/08/index.html","821daaf0921c9ee475f4ec9a158496dc"],["/archives/2020/10/index.html","c8d659ee9d4d2485c7519c12de454b2a"],["/archives/2020/11/index.html","28c9b047a989c831ea943cea7e64d14b"],["/archives/2020/index.html","7b72a925de8d8a0d48b683576774d5ec"],["/archives/2020/page/10/index.html","2e03d8c4c4a4ad0be6fd49f0a41d26ea"],["/archives/2020/page/11/index.html","c4e74433a4a922aae0f4995c24c14fdc"],["/archives/2020/page/12/index.html","c0935208e9c4cfaff7d778c8a8188715"],["/archives/2020/page/13/index.html","c32c3fe2af39f3e5635c4ad9ef10acbc"],["/archives/2020/page/14/index.html","ad8173be40305797378ca5cfb82ff31c"],["/archives/2020/page/15/index.html","b1e16495bafc6834530e3134cf3811d2"],["/archives/2020/page/2/index.html","daa13282470373d93482be75e149daa6"],["/archives/2020/page/3/index.html","1352a4be150b8565a3eea3d3b61c3ab8"],["/archives/2020/page/4/index.html","f48f3ec6ca18c75439c5456087c15892"],["/archives/2020/page/5/index.html","9ead9cea7faad984a0ef1ab0837f9190"],["/archives/2020/page/6/index.html","96488bd0e71667b9dea64d2cefcceb82"],["/archives/2020/page/7/index.html","f6b33e87fa336706b05b742c843c7b28"],["/archives/2020/page/8/index.html","1d89a3d0b0f0aa780dd1fd813845a320"],["/archives/2020/page/9/index.html","5a012846be5ec2d6cf117ad8d05d0cc4"],["/archives/index.html","899e705b99c8fa6ce364b9f9996ad92b"],["/archives/page/10/index.html","4a4cf6076356f0683a73b5f61e311fe0"],["/archives/page/11/index.html","b3cf957ac174f36e7e13d60aeb895d40"],["/archives/page/12/index.html","c8dbd87864c809113e40e26ad9952576"],["/archives/page/13/index.html","db60c31379836ee616b04ae0076a905e"],["/archives/page/14/index.html","befba8e84a86b56e7b4569089a09892c"],["/archives/page/15/index.html","f1be32215b9647565d81b5b343244c7b"],["/archives/page/16/index.html","a97708aad508a56c44379c7118615f3d"],["/archives/page/2/index.html","ec5fe81ec4f68c21aae24891524106a2"],["/archives/page/3/index.html","1b40afc347f6d8f4b41f0957121206d1"],["/archives/page/4/index.html","c5508ed07b3058514c33fb7b17537fea"],["/archives/page/5/index.html","34b8a108ae947709d67a4f0fe72131d7"],["/archives/page/6/index.html","ed4cf76dba7c3018cc141b0a98148056"],["/archives/page/7/index.html","875bcdd733f051ad2dcdea695de4660a"],["/archives/page/8/index.html","23ea41f65d7151976d6460ddc610efed"],["/archives/page/9/index.html","2cd3af385ad59e397d1ee8eee59fcb4f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","813937b15d5379a4286c7c46b97cf2a7"],["/categories/Linux/page/2/index.html","cceeafe07d88c63efd8465d9776d7ccc"],["/categories/Python/index.html","5243331eb316444f1b5bfa5262bd8056"],["/categories/c/index.html","40f08b429ebc9925b4328269bcc35d65"],["/categories/index.html","21726cbe59196fe73e225f31fbb5712a"],["/categories/java/index.html","f242a297c41fceb4c06758dc7eb6e41d"],["/categories/java/page/2/index.html","efa0509f408862e667446ba95c8fbdf0"],["/categories/java/page/3/index.html","0df11b7e883e0740da465f3b43eeebb2"],["/categories/next/index.html","6b25bb8f94b861a10f6dcc3dd030fb91"],["/categories/stl/index.html","f4b4c9d3f040286c48877713667a9b7c"],["/categories/windows/index.html","546de390ae0a649e30c42339308e4267"],["/categories/基础/c/index.html","02cc1f34f201e23cb0f1f43acdc8fc7e"],["/categories/基础/index.html","9730e35d9acea95a964fd9a061df421d"],["/categories/基础/page/2/index.html","875a40b2fdbdaf668bab0741f30823a9"],["/categories/数学/index.html","909d62a98b0511226bf6930cc792adaa"],["/categories/数学/概率论/index.html","81fe15fe5856fcdffb76e81c59066917"],["/categories/数据结构/index.html","b666f6ca6e0c3542a601704831b1f3d5"],["/categories/数据结构/算法/index.html","c2270483468ec80c30156c79166522b1"],["/categories/机器学习/index.html","5b4c3b98b87b753c0c0ee59a24788b08"],["/categories/汇编/AT-T/index.html","f59be9afebe74331432813af12f846f1"],["/categories/汇编/index.html","373446bc248aa7c386d57233b361d0aa"],["/categories/汇编/page/2/index.html","098bd91827fdc3a0524e84e47a12d164"],["/categories/汇编/page/3/index.html","5009b59c5045ee32cebf936c00076aaa"],["/categories/算法/index.html","2ec771451c4949bfc8d46d79ebf49cab"],["/categories/算法/page/2/index.html","b0f0ea52987fa31bde416d7a8aeb46e8"],["/categories/计算机系统基础/index.html","02f5cb5570363a3921582e020afbf7d6"],["/css/background.css","5c6178c8ff0af1605937030256334d33"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d0fb62b1ab43404df959175f929349c8"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","d04a7e8e7190bd17c79f44bbd17c6424"],["/page/11/index.html","e730fe14b3ba54d43b8dbe571cd4bbab"],["/page/12/index.html","691a0c599f0d3f4817ab6e7b5bbc970d"],["/page/13/index.html","e8146aebe0252774814b246a6afad265"],["/page/14/index.html","fd3529194a3aab4e7fa2d6ded0453c94"],["/page/15/index.html","5ce2ee27aee12e637c23d790568a6ad4"],["/page/16/index.html","0f1b3955cb44a994a3055ed948f5b898"],["/page/2/index.html","4d67344fc80b17fa94dfe6332d355b52"],["/page/3/index.html","83408edfe1917f338ee7dbb194914b9a"],["/page/4/index.html","3979b489dbc31c1303665c420ec3135d"],["/page/5/index.html","dd1b2abb29622882641215365b690b70"],["/page/6/index.html","b718f2da1e9d5dfc27530bf69b912515"],["/page/7/index.html","a8e9db9f318aab4c71c6e772ac0922b9"],["/page/8/index.html","12c8e39f04796ec0488375b55140dcdd"],["/page/9/index.html","b0e02d36a879246c20efca8b8824fd69"],["/post/10919.html","4baad600814990b09388c21858ead4ea"],["/post/11051.html","cef828303876a627a7c2f9d5cc1a0538"],["/post/11306.html","53409a30b0968c88da635e68f794f3cf"],["/post/11491.html","3592d37478385700160b81008bf06202"],["/post/11799.html","60bafd3e8eb97aba7c463f99afbec326"],["/post/12334.html","86b1b2f8f343d7ceebe180493ff6afe6"],["/post/1326.html","c40b51c51001bf3681816369046b822c"],["/post/14379.html","5e51edd314c5d44a6848976ef1032f7d"],["/post/14511.html","13957e3db1ad2034bc5f06f591c3a8aa"],["/post/15201.html","2f12b832b578a7e7305782fd37533560"],["/post/15425.html","c29086a74886b71df60e0b4f9f6f5fe2"],["/post/16107.html","492697cddf92f654dcf2d914b2de39c8"],["/post/17862176.html","db1a8b188ef1ac713bc2f6a866d70146"],["/post/18431.html","5910ea75d8735882289cf26644754b2e"],["/post/18912.html","14d24a9c8a0dd8d1228d5ba40b53acc0"],["/post/20198.html","3ec4184bba26f9554bb167df7bd66c11"],["/post/20ff5ccb.html","fb88ec06c6a59661c7d8901766b2d2de"],["/post/21624.html","eafe0915d72f8cf8059d88c4be09d82b"],["/post/2170659a.html","a36670ed21d2a3b016c0e89d9e61cda2"],["/post/22102.html","6dc4f976b310d72d84d165712a5424e0"],["/post/22493.html","c4690ac3635b6bbc0d15560dee608195"],["/post/235252ea.html","0e4e8ca00b5ce4a87e2cb169f9661735"],["/post/25699.html","e8ccd7f7b90907cda04c8a88453868a4"],["/post/2647.html","202d0d66d79f9aecfc3241bbc976b422"],["/post/26477.html","552c0ecbf5d2bf26b4dd726d61952f48"],["/post/26671.html","cbf6d63ddeeefbf7f1d260faaa781bae"],["/post/26737.html","67c810f41bf59f63147f48f775dbab3f"],["/post/27045.html","fc0e29285e6e00ab859ffe0e9c50abf3"],["/post/27621.html","78bec58a88b550e67db0c7bc8889704a"],["/post/27890.html","6aed0cec988b057d566754b56d5734aa"],["/post/27980.html","f3c7f21044b7e195c780e51d46f4585b"],["/post/280b588e.html","9192afc86328ce7c5e6646beb068fc1c"],["/post/28579.html","1579cc788e9172cb2858b6dc1d74264d"],["/post/28877bf.html","379473a34641e573403fc9648eee7a12"],["/post/28954.html","21fcabcfb8651e0316163c05ac9c4173"],["/post/29378.html","8584fadde14647200851f60dbc6e21df"],["/post/29949.html","beec7ba15a923b7e431854529c79e673"],["/post/2ae43b86.html","0d422ba75c38c441f5d3456ed97b3ec2"],["/post/2ba82a45.html","753b7579a6e6685a853364dd1280a41a"],["/post/30072.html","6a3b1072890a78f5c53aa55dc8d5e861"],["/post/30479.html","0f2839834e7b1923f8c53d1e7a212d43"],["/post/31a6b40.html","dc7268377a478e20a226f206aa3c7a77"],["/post/325cdbf2.html","2c977d5b44fd2356fb755ee70647f1c3"],["/post/3319ed9a.html","c06b5b9f7de9732aee598834737ce218"],["/post/3320.html","2644118166869c7c1a755e199cb64117"],["/post/33cb1151.html","e11cd5035cf2064d35a90195df908434"],["/post/348d4e04.html","01afcd75998d7ea88d4255ec91ba766c"],["/post/3526.html","9ab3f0fe9be6d0b2732a4c5ca67465ed"],["/post/35532.html","6cae5593f5a0efa785c9802e3272301c"],["/post/35848.html","9bad0fc0c4b6f109d1176fea913ce847"],["/post/37318.html","b038bfb50c0a96c0a22b33e8918b18e9"],["/post/37663.html","3220aef834c20b44ee84aa480c8c1af3"],["/post/38035.html","7168883cf7a9bc6d85a6863856d4bb0b"],["/post/38072.html","e7cccb240465ba534c97280654b13928"],["/post/38145.html","ac21e8047d6ef0f01f57dfb2b022cb3b"],["/post/39968.html","54d73026cc417b3d5d89d9c6f3684ffa"],["/post/3de4bc69.html","104e55742d692f453c101d6122dd6151"],["/post/40583.html","5b48462a102c7c880a499f10b37b539b"],["/post/40997091.html","e9d1791eb5490e746c4741c57289ac0e"],["/post/41129.html","019c542fa50e33c0631ea193b2e90bbf"],["/post/41763.html","5316aea6b16ab41be4b4a618ad59553a"],["/post/41829.html","7b37da50c8a9463c46b585ddae65ddf6"],["/post/41840.html","b16d041a61e3d44ecbed392930f24d29"],["/post/43817.html","ef8dbbb91dce52bd96aa9d402407ed2f"],["/post/43878.html","9079bd4ab11b1086416cded29b8c02d6"],["/post/44250.html","4604ab7a538e98fd75b8540db32e46f3"],["/post/44336.html","9f3069609a70c89db302d1bcd3d8ce67"],["/post/44454.html","cb3a35731987fc4a86663f323c75d76d"],["/post/44487.html","e3d52f4fad044554316575591dfd89be"],["/post/44914.html","4dd038d1861d133cc44433a635486a3c"],["/post/4551c130.html","ab2017033b5e07880df2769336ad3111"],["/post/455a4c92.html","c63f904fa2a11a00169d257dafd04a10"],["/post/46466.html","20910f38ebd056f7201bfc47c8225bc5"],["/post/46925.html","1f0eace00d7bf578ad02437e377368b3"],["/post/47075.html","b8e7be540cff7657f5cd29d800334573"],["/post/48220.html","bd6f84a058c3d6c8941b5e2fa4e2c69d"],["/post/4b1879e3.html","5a76cebeec4029ec718e98101dd27b2a"],["/post/4c720881.html","d6a2661086951c732ba89b8a389ee02e"],["/post/50daec4.html","9968829e96dd7295ea7428ff29b06ae3"],["/post/51491.html","23bfe4a16341f391dc1da65f8707f69b"],["/post/52078.html","f055b0dc4c45b7c9b559ebcf22c0bdfb"],["/post/53677394.html","f2ebc616c8ab91357e1d5dd9821ed0e1"],["/post/54300.html","b4d1f10cf81e0fb4628c753d5fecf17c"],["/post/54612.html","6ce2f3d8612bb4e108f1a7d5bc43f2f5"],["/post/54613.html","ea33e220924c0b1c41882bac8ea598be"],["/post/54708.html","af6a6c0ed78c52d7fa0ef77fa7173b67"],["/post/54778.html","41e678dabdafc1804f53f5a393c12df7"],["/post/5490.html","095870259b44d794e965764301f6aca6"],["/post/55046.html","abcb4266f86ce46d4797b64cce585eb1"],["/post/56929.html","d79091220e5fe8090d93e614750bc129"],["/post/57339.html","4e1bc974ea79ab013c461759f83589a7"],["/post/57449.html","32120cd852dba01420b46420a77e80a6"],["/post/57453.html","b30b0b0830f915f6ad45533eeb25d159"],["/post/57671.html","535d88f7c5649f7bc98422f3d1ab9281"],["/post/58313.html","e5e9860e35b844576a1dbc17b6c314b9"],["/post/58481.html","180edd5244bdfd93cec0715b3ab1ec8e"],["/post/58986.html","93ff0774be9832c62fdc8f8f5b73cf2f"],["/post/59431.html","f3ce6b9ed6af5def5d0ea78ea958ad66"],["/post/5951da65.html","9517868b6dd697f012d8b0a424ff5b74"],["/post/5be7e977.html","308bff117eaa0633fcf403164f030ed4"],["/post/5f9e4eff.html","525e2f0e74fd032aa600a74f57cae039"],["/post/604b49d0.html","29687456b3d5c1d2f1a07acba39b6792"],["/post/61312.html","c25ecbd888bbd594771659645a509d8a"],["/post/61738.html","cbf11c16b6acebc697d587becd9a46ab"],["/post/61809.html","902f5e45fab579544268c25592cacaa7"],["/post/61eaf19a.html","7800010f19a74ec189eb8d0ebc654ab2"],["/post/63002.html","586338b0094d6abbfca6ade6d40b1c71"],["/post/63711.html","84ee41053b613f7b890dee9f3ef8349b"],["/post/6587.html","67a94da61a4ccb2bd01af840b0f04659"],["/post/6589.html","f06b9f590c6717254acbdf20a2876e10"],["/post/6880.html","b77491dec4870443b9b72e3a07b17655"],["/post/70263071.html","7e5691e357e1fabb6369872f179af6b8"],["/post/71038564.html","ba5d607fc0ca7c590bff42cdeb1d1f1b"],["/post/7119.html","4936b0eed6a079566a67bd4daf8fa710"],["/post/74e7fdff.html","86c3d524c5a47d5f2b8a3a63edee0901"],["/post/7502.html","679078093bcdc11c92331cba984901ba"],["/post/7564.html","94c27839cc2c195a687cb598600d22f7"],["/post/766f9b60.html","71669b2dd103aaafc0e50dade8f3483b"],["/post/7ca31f7.html","38b6aa050a10ff9bed2da14453a8afb8"],["/post/7d1c86da.html","407ad2dd93353a855bff13c9c3a44832"],["/post/7f3bcd7f.html","2682d011690591a4381527cb44df15df"],["/post/8039.html","0171482bc19b1695e6c38805c7165d39"],["/post/8050.html","df3f6a2d27b78f5d2b1e49877edbabe1"],["/post/8072.html","54d752e7084aeb51bfdb31194e996f0a"],["/post/8274.html","270359528c1e8acca346595faca245e6"],["/post/8372.html","9f6fb386fbda422361846c208c98adde"],["/post/8498.html","708235479df50a62f66ebe208e97efce"],["/post/85b4e13b.html","d9869b4eba56cc1b6f6a2653b255c531"],["/post/912b2566.html","310a97a324b8e0c135a3db98ec1a4dbc"],["/post/9187.html","b5d3a3caeddc4ed77165639fc5fb2639"],["/post/9197.html","7ae4d8c045d6dbf749a3dd6a9bd5731d"],["/post/94ceb2fd.html","0a3d9fa0542c5abd48b0cbdcf17fcd3d"],["/post/95495db.html","0667b6440f7280392b46693e94c8b071"],["/post/97246020.html","5133edd63828d32cd0dede3b10aa0806"],["/post/a3a786d6.html","bc9a65d824d702d27ffebd60e640e530"],["/post/a444b428.html","b399091620715041e491a603340e06de"],["/post/a50b8908.html","5ec7486e32c0bae8aca3aab4fb2680fb"],["/post/aa1eade8.html","8b974b60470742f919d8d16ee68d7872"],["/post/ade8c6d6.html","78f87efacd012575df60089bb6f5fce1"],["/post/ae8362df.html","762b25c0d01e073972ac75a3b75a9958"],["/post/b4c1d206.html","4e7e2b214a34aa64b656c202e43ea94d"],["/post/d431fab4.html","108c501a5e87de137643e2c47be4a593"],["/post/d5381517.html","bc0b3bf9ad03948e273aec23ce4b537d"],["/post/e058ffd8.html","2c105254f3f7cf7fb5304fce4567a725"],["/post/e0f8cb74.html","ec9ca60fedac190f8875a5651d816600"],["/post/eefe591f.html","793f3e2df4162933a79ddaf7e37bffce"],["/post/ef296a07.html","d2ec3e736a2781d449e9d57a7ef4a885"],["/post/f201f9fd.html","a7187f0a6ace2569a2dda84193c66042"],["/post/f79e4123.html","48102fcf29ce2ea2769ff54c7ce8438d"],["/post/f8648a1d.html","0a0b4b1d215dc45a39a854babebbf1b3"],["/post/f89cb603.html","5fa5711003bd61784af0730c8ff7447d"],["/post/fa288682.html","d3abe08d9833b82b49f47e53c95c402d"],["/sw-register.js","17f0b757fd40d55e7ec0e30c48b6b7e3"],["/tags/AT-T/index.html","404466bd2a51dbcf6cc65e59f7870b8f"],["/tags/index.html","2d86a437af3cbd875790de77c2344f45"],["/tags/动态规划/index.html","5c632ee5902b5c372492ea1db2c6481e"],["/tags/字符串/index.html","9aa6ead277ab25ba5a7476fb51feb077"],["/tags/字符常量/index.html","02a9c5f27c06b0205f4ce384373c2ce5"],["/tags/快排/index.html","bb6a8f7064b827dd818a8063cb55df76"],["/tags/排序/index.html","34876a67c530a2e7b0a53301f0226fc5"]];
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









/* eslint-enable */
