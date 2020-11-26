/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","542f21e49cd366bb3f68373f2f687beb"],["/archives/2019/index.html","b6bf957f5447503c938120c0c649ec02"],["/archives/2020/01/index.html","bdcdcf6473cde56e225a84a4c53da03f"],["/archives/2020/01/page/2/index.html","71df1122f26aa4162eb81de38f2d48f5"],["/archives/2020/01/page/3/index.html","ec3f6f16b12e03f66eeec49469ddfe99"],["/archives/2020/01/page/4/index.html","aa96830ec4acec7c1efa6269a3c34c73"],["/archives/2020/01/page/5/index.html","69f9813bbc22e0555c9cb78422e77ce5"],["/archives/2020/01/page/6/index.html","3108a641273dad89f21aeac13539a0f8"],["/archives/2020/02/index.html","b903fe7f20106b2ffafc787844343a77"],["/archives/2020/02/page/2/index.html","7e6307b70abf874633f10c5687fdef25"],["/archives/2020/02/page/3/index.html","9459cb38008124afdc9cd3e34d64b04c"],["/archives/2020/03/index.html","da2d1c84f8c4e06df4c8540a90e45f4e"],["/archives/2020/03/page/2/index.html","982168035683edbee9524b4bc578b8a2"],["/archives/2020/04/index.html","1594bfa93fd7704e65d1662f695cb75f"],["/archives/2020/04/page/2/index.html","fecbedf4b2f692383e48eb2317c062bc"],["/archives/2020/05/index.html","a198b0e7f7ec61178b86c4f3ed9d58ba"],["/archives/2020/05/page/2/index.html","a71cfda4358f953026d7146a4c194339"],["/archives/2020/06/index.html","56232a5619ff91022b2150c9e058f7bb"],["/archives/2020/07/index.html","666360ab74cfe8f2251896638fbcff79"],["/archives/2020/07/page/2/index.html","b12630803482b9aa11dc33ae26bdcab2"],["/archives/2020/08/index.html","dd555f17d51bae5115472d0c7d167c64"],["/archives/2020/10/index.html","e3c53ac29bc28f183b5806e638c4c280"],["/archives/2020/11/index.html","fcc61856596b0f914e74a338af45d988"],["/archives/2020/index.html","09d960a5eb3878ee839c2e5aa7522cf5"],["/archives/2020/page/10/index.html","f431f62dc22713c25354e9a8aa04b480"],["/archives/2020/page/11/index.html","0422a905600fd4cb39d7fbe4b3ba7ba6"],["/archives/2020/page/12/index.html","a1ab921981e172f41992e91127cfae47"],["/archives/2020/page/13/index.html","c672ca45f073379296925fcbe36fa543"],["/archives/2020/page/14/index.html","f9d8c819242f6875d4b2cd43360132df"],["/archives/2020/page/15/index.html","9b0fa8eca8e1986415f8d3be76ef27bc"],["/archives/2020/page/2/index.html","22991846a3bde37af5c010e8e73eff8d"],["/archives/2020/page/3/index.html","135b0aae58797778d0a5b9390359a1ae"],["/archives/2020/page/4/index.html","a52b44bbffa2af48ef3d8b9afa5ac738"],["/archives/2020/page/5/index.html","84058560db63223980a5e790c816a2ca"],["/archives/2020/page/6/index.html","6f9a8dfdefa8f050a4c0b1a16ee216a3"],["/archives/2020/page/7/index.html","ef3764ab37e4b458188b391c2dc2ddc6"],["/archives/2020/page/8/index.html","7f42802bcaf469d52e25c698bff871da"],["/archives/2020/page/9/index.html","c98f9d17a32dcae73ee174b97a7f6e8a"],["/archives/index.html","beea3dae7ea873dc7a07ea454a20e3ef"],["/archives/page/10/index.html","be76c11fab94729cbcd64e334b7fc374"],["/archives/page/11/index.html","735f6d2907edf884944ce285cdcb0b30"],["/archives/page/12/index.html","900483f2cafc28361a74fc83401b1894"],["/archives/page/13/index.html","f81ea352e32705a787a82390f35e5260"],["/archives/page/14/index.html","6d5b45e1558d0f3f32a471ba23a21bef"],["/archives/page/15/index.html","f352a9b045bca68a7e6dea90bbe2009f"],["/archives/page/16/index.html","8e42b00e2f5a4816150a893ac1ac019c"],["/archives/page/2/index.html","bfd0608d1f09d2c9c78f3f59c400f321"],["/archives/page/3/index.html","7873482a060cf3ae8282e9c021eebb7f"],["/archives/page/4/index.html","211863f3cc464b7e2318acef7dbfa7c1"],["/archives/page/5/index.html","203a22745a5bbc432ae734fd0bf1292a"],["/archives/page/6/index.html","e8c706d099f53ace44df9c13ed780347"],["/archives/page/7/index.html","69991471869e117ad8f9f95fdb47dcbe"],["/archives/page/8/index.html","9d8609e3c4783561e8b264b3543d9e50"],["/archives/page/9/index.html","d657b02020960bc4910d825e428085df"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","cc2dc2e815fa6af8b3082d3ee0d40f7e"],["/categories/Linux/page/2/index.html","72f6c817fc61484dc14485de474e59f2"],["/categories/Python/index.html","42f53fb391ffa1a7cac2b84bb2d2d343"],["/categories/c/index.html","f29040bc2209905f090dc01552ff4139"],["/categories/index.html","91bc23377dc1280d8770f23c9a605b73"],["/categories/java/index.html","d4bf642ee73895407d8bb7dae3df03bd"],["/categories/java/page/2/index.html","51dea1a55ea87a2476651cf69dd0d703"],["/categories/java/page/3/index.html","9b8fafdadaa43a006f3864e061133b4d"],["/categories/next/index.html","d37363cb82fb288ac5abd0b4be741876"],["/categories/stl/index.html","16d6ef9cddac1c74092a88e4bc5bd7b1"],["/categories/windows/index.html","97091788a8c6f90bf5c9fcae49386d35"],["/categories/基础/c/index.html","b89cbe526a9ac8436a14a91db187be53"],["/categories/基础/index.html","ecbf53bef3e00f5f3402efa788938607"],["/categories/基础/page/2/index.html","61c0ab27c48b52a4ee626897d752dc8f"],["/categories/数学/index.html","96b2eaffa3dce94f992b84a0843ec984"],["/categories/数学/概率论/index.html","54bef93a7893abcde16a2d6e6bcae1c2"],["/categories/数据结构/index.html","ac8b28343d4bdb7aed705ea8c5da61df"],["/categories/数据结构/算法/index.html","55196d5f035169498e5b7385a5d09b27"],["/categories/机器学习/index.html","b59e8996897a57da69a12dfd97cb0e37"],["/categories/汇编/AT-T/index.html","ad3d49482fbfe8a10738844db7b6ffcd"],["/categories/汇编/index.html","f616c960ca4b791c57b97f0840a7ad07"],["/categories/汇编/page/2/index.html","a006038b815a9b9855f411f94df3ae3e"],["/categories/汇编/page/3/index.html","6955667e5d76e4b5b461eed1b037ddb4"],["/categories/算法/index.html","78b70066eb269fd819dfefe6b3976126"],["/categories/算法/page/2/index.html","b48fbd4e93ec8749ee1709d974e45e48"],["/categories/计算机系统基础/index.html","970dd3aff68986bbb22d5ca0687080d4"],["/css/background.css","5c6178c8ff0af1605937030256334d33"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c4a50de153cf52be3d74755451e64924"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","b991ff70468ec4c57bd33aca6cf518ac"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","9aa0ea968ae426b66a1bf514df66b03b"],["/page/11/index.html","ec64cf1a152992d4426b4ba831dcf085"],["/page/12/index.html","16a10adaf81328b627e19f57d8b574a4"],["/page/13/index.html","87573e4a097aea5e13353fe8f52868a3"],["/page/14/index.html","1336ff701039eb6514f5fa8a6808fd39"],["/page/15/index.html","648da5a7705439ba707988d3892a830d"],["/page/16/index.html","0395830cefca609218d4d3255c5440e3"],["/page/2/index.html","649207a9a800a55e7035fed8cadb95c4"],["/page/3/index.html","b215a5813e6e0fd1fd973bded7e4c1e0"],["/page/4/index.html","eaaa735bd5ac46df4ac7b9dfcff7e611"],["/page/5/index.html","d3965453f52883e4c38503c273d812d2"],["/page/6/index.html","3444e8bc0f9664bfc74dcb8a3f4034ea"],["/page/7/index.html","8044f6d150c9147bf601dd3141845b20"],["/page/8/index.html","6d3ffb0b19a7beb167924f6cf0191266"],["/page/9/index.html","4f84d44ec0ae41d896515b0c9aedaa70"],["/post/10919.html","ce3d64592e1c675f2ebb7124be9bfb5e"],["/post/11051.html","008f6533d439f69f65fa552f2264ca7f"],["/post/11306.html","d39850057d93a3cfc76430a31b5918b6"],["/post/11491.html","d7ebbdd94a2a215055188bde28c3897a"],["/post/11799.html","67eaafcb3b74990a53c6ad813268f5bf"],["/post/12334.html","3f203d773c0bd04b4c0585013b84b69a"],["/post/1326.html","e71c55839cc5c7e955f5d7c6a28cb3d1"],["/post/14379.html","5c057f4ee4a5b0ac23fede2ea7b17d2d"],["/post/14511.html","4155338b03e7745e505d85554959b857"],["/post/15201.html","ab16a045220e3cc3c102533d771f131f"],["/post/15425.html","b97c90e8d81d24d57a49813b52457191"],["/post/16107.html","f46254f699107f8c02544f4a245e6517"],["/post/17862176.html","20b767d0ce74c5a882a3617e68f376b0"],["/post/18431.html","c48456c340c1fba403d70a04bcb8c5c3"],["/post/18912.html","acef8a4d7e412abd5ee120796533493b"],["/post/20198.html","901d8ae04b9b8d465cfacc014469e6c0"],["/post/20ff5ccb.html","9debc3e6d4ac988e7f24c7b665383240"],["/post/21624.html","af26b2a3697b957e7d630c1c78665cea"],["/post/2170659a.html","db84cd655eea87a154ef71987fff7889"],["/post/22102.html","d8b44c0da50886b3395ba4fd903f0966"],["/post/22493.html","783233eadb9ee94a3e7045a7795d14be"],["/post/235252ea.html","31df4d0aa93ccc90809fae7a8efb85d2"],["/post/25699.html","9e7357300b0235a861e66531bdf47afd"],["/post/2647.html","8349adf27a6efd6df82592507a6c45e7"],["/post/26477.html","b4a71d62508eb4e95c732f623240df57"],["/post/26671.html","7ca740ecaebcd38fd3aa6d6abead8f5d"],["/post/26737.html","a67888706b04b7a688db739bc8fb8aa4"],["/post/27045.html","4c4bd462776e42ce5dedc3a538d91f6d"],["/post/27621.html","2059e1755eacd42bf751584a0e22fc62"],["/post/27890.html","aae8cd88eb2989d06ad77776b7bf55db"],["/post/27980.html","3122bf5676c2f8a16b65e8411ec73b0b"],["/post/280b588e.html","f29c1b6bf4846be7deb2576ca07339b0"],["/post/28579.html","731a315407bdf4fa58ff1b0f2e2b73d2"],["/post/28877bf.html","ca700c1b22bb7c09f2bfcd3a9217c39b"],["/post/28954.html","0dd5c0aadd299fefa2146ecd029c3a88"],["/post/29378.html","43d55ab517a6f862b84f14c7eb14fb31"],["/post/29949.html","7235d25b7e4006e8de705de52823f70a"],["/post/2ae43b86.html","72cd4121cdbd608a59dc80f47659a418"],["/post/2ba82a45.html","2f6018b328d4e095c88fd37443cd8807"],["/post/30072.html","a509109ab0dfcac3ba46f3e91be1beaa"],["/post/30479.html","22368b65f53bbf6c51746a10e1fb55ba"],["/post/31a6b40.html","da933b4baff288691344b48b79225b36"],["/post/325cdbf2.html","6eea8a8bd4b19ba51ba4acffc1daf5be"],["/post/3319ed9a.html","20f63aa1bbfc39aeff082ce5f86ee85f"],["/post/3320.html","aeeda34f88e0ec8085b785ec113fbd07"],["/post/33cb1151.html","185c57173f9b748421b8b22dface22ae"],["/post/348d4e04.html","580e4b1f121eb529697985e296b802c3"],["/post/3526.html","2dc757fc03f089ed270a79518a6dcba2"],["/post/35532.html","9658881f00822c152d6e9955dd1a3817"],["/post/35848.html","5d77ea23f02f6701e04c00f3e4e637b5"],["/post/37318.html","f5e8a2ae7d89398b3b3a5320348a5faa"],["/post/37663.html","ab9adf3d67e44e6cb89c47cedea4af65"],["/post/38035.html","aa5d285d90281c5c3d6da725352a5f32"],["/post/38072.html","07c73c001fcb084e5befce566cffe724"],["/post/38145.html","b1ae61c015492bba42fe35752faccfe2"],["/post/39968.html","016d6884c565f1f6736245d5e0a3c235"],["/post/3de4bc69.html","ad31da109a6232580686996e2128bb87"],["/post/40583.html","64babe5a5e8277303dd1d9ac462d702b"],["/post/40997091.html","55f1e8fb1c8645ff54f04df0426de82d"],["/post/41129.html","84aa9c8fa457a5b2382e72ff33630fde"],["/post/41763.html","4cda1b74c56c13f3fc8f121c1a783d0d"],["/post/41829.html","85ba8ae910f2be6856502c2f2f0d968b"],["/post/41840.html","f0d316889fcea2ce11d4a2aa78768406"],["/post/43817.html","f4875c675b6cb4e21e0b179e08d940ed"],["/post/43878.html","3047dced84dfb29740ec3c91d0e89abf"],["/post/44250.html","fc7ce5583e7cd4352d218a24badede0a"],["/post/44336.html","2361fb5f3e4d9e4dcf4abad26ed8cbec"],["/post/44454.html","cb7bdcb267989cf1bf55b5eb1f694766"],["/post/44487.html","8d41ba271bd47faa8c139114934e54c7"],["/post/44914.html","e87e3d1cab77048dba90b053b66ee258"],["/post/4551c130.html","a5b1f2609a7dd60ed4ebf6a9abb49f45"],["/post/455a4c92.html","1250639ca620cce5ab8b8a52f0ca2567"],["/post/46466.html","22cd3e593402445e072cd72e6e83496a"],["/post/46925.html","a1b4e07668a76786ba46bf28580127ce"],["/post/47075.html","0cbd3cd9caedaf1554c4b6dc2414c13d"],["/post/48220.html","64ffa4b5248796fe985f63257d302547"],["/post/4b1879e3.html","8ca6d579a08511f2340ebffde7b05f75"],["/post/4c720881.html","bb4e293cbbdffb149522ef49313e8344"],["/post/50daec4.html","6b62335f4d0af2bb1c375f421838dfbd"],["/post/51491.html","868d5acebbb48c8513af39fbb0df5618"],["/post/52078.html","71da96b1c362087020cdadbb6ea551e9"],["/post/53677394.html","49f43f136b80de8cfa7ef59d81f25c7a"],["/post/54300.html","839bc64f20b258b5e25a75eefa189773"],["/post/54612.html","e612379a35aace7a471cda5f185a9167"],["/post/54613.html","c4d5f025e3ce3c00caf49a9e3917f6b1"],["/post/54708.html","ae6f2ace3f6951fa77e27fb315bc0c04"],["/post/54778.html","f9207dfa002ee274f91d635129ef732d"],["/post/5490.html","b4aca06319b9000a2ef1d7c2818b9b32"],["/post/55046.html","a80e1621691600c12bb0526ed95962db"],["/post/56929.html","651a9d05f26282f1b5b747070cad93da"],["/post/57339.html","83a4c2ebd97157303119106ec6e45c8e"],["/post/57449.html","3deb8b6a96ff9dcbb9a0842d040fa82e"],["/post/57453.html","880888f64afa7d5205b8a55a1dec401e"],["/post/57671.html","afefc1371a5e2ef7a135656e77a69928"],["/post/58313.html","4e4c54c9dc472043f4cdde0e6e6d3b10"],["/post/58481.html","d83e1d82f4a0577ece9372d768280177"],["/post/58986.html","e548b1964d49b661224f46cee1455d47"],["/post/59431.html","33e6f1c680300b54a4233ee5da0f62e6"],["/post/5951da65.html","e891555d305abf82d585dd9a28ebc354"],["/post/5be7e977.html","978fb6ad5f8ff3fb756d247f43db14ed"],["/post/5f9e4eff.html","1bf5266e78b15ea2360c1d4d326299a3"],["/post/604b49d0.html","02f78bb71b0d6fc2787d34c6c9d8a54f"],["/post/61312.html","7463eb3979de616ecb1af4de157942a9"],["/post/61738.html","6b3c5240c2d95b3231d666b8b63092b5"],["/post/61809.html","b382fde680291537b3f7ee40d729dc10"],["/post/61eaf19a.html","27b47f679ba73370a128840a5fdf2e8f"],["/post/63002.html","e6c3efd9ff9a22da011dfed214df2edd"],["/post/63711.html","e131661f85e1859934843fd34cdd7f12"],["/post/6587.html","9f2ea46c8d0bc444867c3ec15c04d20e"],["/post/6589.html","a88817e6c96a233386f88d5891d6f0d4"],["/post/6880.html","13e3abe87a43e103c485e63bdf0de50b"],["/post/70263071.html","1ad077e0a68ce6186b724444c2f6cdb0"],["/post/71038564.html","e09c40b95c2f6286d2ded0b08f91d3e1"],["/post/7119.html","351ef6624bf9ba6fad21f4d997749562"],["/post/74e7fdff.html","9ad93f3fd8aa231853135bd4a5894d4d"],["/post/7502.html","2af5bf2ff4615981c0f43a0df8127593"],["/post/7564.html","df6e28f37c3a21115d8880bae8ceb0e4"],["/post/766f9b60.html","decf25ddcc91d76373f4ec345413decd"],["/post/7ca31f7.html","2062aa5cbf8758a70db922f441d5acdb"],["/post/7d1c86da.html","d3defff087b8a73e4568585bda5f63a5"],["/post/7f3bcd7f.html","7dbac0d7458c446bc50a507b752702ce"],["/post/8039.html","bcc68ab07bd3d8a268f4d86208272148"],["/post/8050.html","5cf1dd96059e9a8a993c6eb44541e595"],["/post/8072.html","d39a73399d252f5022d4f45678ac075e"],["/post/8274.html","3420a9e7163bd2a993fba9bc363d6c1d"],["/post/8372.html","419ff065e30fe02d7806c8ac1acc4a0e"],["/post/8498.html","524f6f9b74fea2abf77c4cec7a22c6ef"],["/post/85b4e13b.html","06c3d0dc2b30aeeaccfeeb38257c00ee"],["/post/912b2566.html","1c2d0c06e6bc8a2a7c8339101d9dc117"],["/post/9187.html","e827c05af6525498841a663a46d758cf"],["/post/9197.html","c57d712c20a5bdc16490bbf3efad639b"],["/post/94ceb2fd.html","9434436a6becb679d881cab490138ed1"],["/post/95495db.html","1a488124953f20b90fe2ae373b75e299"],["/post/97246020.html","2e57bc2b9efd4b08c7fca130685f735a"],["/post/a3a786d6.html","9b6b977b05f0fcbfa3ca5b9ab32b0ec6"],["/post/a444b428.html","66cc092cf65edb3ca89885894231a107"],["/post/a50b8908.html","0c47d97f4bcaee1f3abc77da552451f3"],["/post/aa1eade8.html","dc7b47673e13918ba94d91743c54487a"],["/post/ade8c6d6.html","b937d94429a7e70471a050cbbb9586b4"],["/post/ae8362df.html","013ed32d5d970320a29e22dba2c475db"],["/post/b4c1d206.html","683ee522a31fa948f084fa3f8cd7d341"],["/post/d431fab4.html","066bc0a6c3cae8da3a6ecaf0fff1791e"],["/post/d5381517.html","a6e86a903921c5ec6b1c9a18d2e04a7e"],["/post/e058ffd8.html","f8dc2a7f07f53fd7f8d3622bdc1b77b7"],["/post/e0f8cb74.html","33036c2ec1cd1acfc6035ba98ea13f2c"],["/post/eefe591f.html","f8ff7eda5ff0299342d1832cae8f4d75"],["/post/ef296a07.html","8a80bb3da20c4d72bea342f765318c27"],["/post/f201f9fd.html","4702e0c9668c60822b2d764d0b45eda7"],["/post/f79e4123.html","771fbe2ab199341559f3e54b2006922d"],["/post/f8648a1d.html","618f266e6baf3a8b1df830b0745c8683"],["/post/f89cb603.html","dc898fd851f74e6a5086a75afdaf559a"],["/post/fa288682.html","f986c61145cd013df74ec8994f87fd29"],["/sw-register.js","461cfd8bf4ee2f1c596674a5b524db74"],["/tags/AT-T/index.html","7bb8587a20d8e861b877c9ac2b3452f8"],["/tags/index.html","97d3d46bf240537961c4935bbcdabbd6"],["/tags/动态规划/index.html","4dbcd07300147fd221d01c272c0cc158"],["/tags/字符串/index.html","e452e676777352ade377b34d4ba0d79e"],["/tags/字符常量/index.html","aa8c7dbdb5d12ef6bbc8c6fee506e13c"],["/tags/快排/index.html","26c5ad63d1c935a5697e14d399cf2ccb"],["/tags/排序/index.html","c573502487c101f71d5004505dfecf23"]];
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
