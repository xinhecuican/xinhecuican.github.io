/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","35d4c45b243375e81e32278303ec2c7d"],["/archives/2019/index.html","f7eb938efec4c86b45d69818096efe56"],["/archives/2020/01/index.html","918525f9e3f8818d937ddde28db23287"],["/archives/2020/01/page/2/index.html","e22bbe1b2b243377109a0f5c4e120438"],["/archives/2020/01/page/3/index.html","1a211997cdba61704e7019a3e550c22f"],["/archives/2020/01/page/4/index.html","4215e06df82ce207d16c679e5b20f816"],["/archives/2020/01/page/5/index.html","f0af05236f3e8611a52a286945cb707a"],["/archives/2020/01/page/6/index.html","5d59ae03b414247c8f573115760409d8"],["/archives/2020/02/index.html","b655b20eaf30dd73116463eb96d7d9dc"],["/archives/2020/02/page/2/index.html","22c09ecd1983a9d2c6fc7097d334cc42"],["/archives/2020/02/page/3/index.html","9e489827c3d61a020dc28a1d317bd41a"],["/archives/2020/03/index.html","0e6119fc7b99a3785a79f84525800a5d"],["/archives/2020/03/page/2/index.html","84db5c0c9c975433ba4d451deaba98ec"],["/archives/2020/04/index.html","f9a0fa39e8ed6b9cd6b4607ffa8bdd46"],["/archives/2020/04/page/2/index.html","f9c20f697183de948fa3a6caddcd8326"],["/archives/2020/05/index.html","3b821049bec062f90379cd67afb6f003"],["/archives/2020/05/page/2/index.html","4f19f7be5db6e6bc290b209eba84a408"],["/archives/2020/06/index.html","9411865fd850f82d24b59fc34ae30acd"],["/archives/2020/07/index.html","ef651925606372db7bf3fb5a4dae906c"],["/archives/2020/07/page/2/index.html","cc3747644552aa9a46de51c4e7309924"],["/archives/2020/08/index.html","0fc5e49bab835952c789d543bd2f8564"],["/archives/2020/10/index.html","4d8115b2bea7b9a0a6a583346460411f"],["/archives/2020/11/index.html","e1b290111d25d913ffefaf10e0097608"],["/archives/2020/12/index.html","0d63a34423030c6d6116e76bd7fb504f"],["/archives/2020/index.html","67b20254330503698ae81f5f505433d7"],["/archives/2020/page/10/index.html","0f5d3a90ee9f7b299375023d0efd4e97"],["/archives/2020/page/11/index.html","fc1cf1e4d002e73c1d191a1c61da12a6"],["/archives/2020/page/12/index.html","1925003c9df389fadeeaf8fefd5f099d"],["/archives/2020/page/13/index.html","f1b146558547c7f746ee056c233609cb"],["/archives/2020/page/14/index.html","61caf52f1364591ff0c26bcd21b96b3b"],["/archives/2020/page/15/index.html","6980113ddf8221950c26527e6639440a"],["/archives/2020/page/16/index.html","55092822b5661cde85f2ec9d84e6d7d8"],["/archives/2020/page/2/index.html","0bcc06a4f2ac67da21c6327a86c6bffa"],["/archives/2020/page/3/index.html","7a0a7fddd9d0e12bf2c65aa228b84d60"],["/archives/2020/page/4/index.html","8f64d9c59f5e31c064e91c644c9b57ae"],["/archives/2020/page/5/index.html","5879db04dda26534dd4a9ada4dfc571c"],["/archives/2020/page/6/index.html","c621036a9b377e17f9c09201056ae3d4"],["/archives/2020/page/7/index.html","b675b75793a6d4e3ee653dc3054c32c0"],["/archives/2020/page/8/index.html","7f80a03e702e3578c59cd12665e10d10"],["/archives/2020/page/9/index.html","6cad5100899c47878a48f36e2973c760"],["/archives/index.html","781a26e00305eeb2a9dc13c1fb8b2ec5"],["/archives/page/10/index.html","37bec3daa099280a154d849c22527975"],["/archives/page/11/index.html","d92cff45963a45c50df4652fa65e87e0"],["/archives/page/12/index.html","7854b5f73980966efa2b6a52dc55c7bc"],["/archives/page/13/index.html","ccba1f54c63c46ecb55cf7675fcc1b9e"],["/archives/page/14/index.html","154f490a632fcbed4053e5a77524b1c7"],["/archives/page/15/index.html","fa72a16c43e6d8524c6216c1fe5ec85b"],["/archives/page/16/index.html","140bf24601320fcfb93bb5183f244265"],["/archives/page/2/index.html","dae6e5e628b6c70ea8819d41a2692631"],["/archives/page/3/index.html","ea483e80ff4d39a1baa9aad2ae8fb4bd"],["/archives/page/4/index.html","69204bf889b868453fbbb93b56b79cc8"],["/archives/page/5/index.html","ed83aa59c04547f95576be4c986e6f7f"],["/archives/page/6/index.html","8a878b687fdd09691195dcf5aeacc43e"],["/archives/page/7/index.html","fb36ee768f0228156b7f9d3bb74f849c"],["/archives/page/8/index.html","6a788c05c4a02e0309101d4db6d088ac"],["/archives/page/9/index.html","3e5b3064d200fc360d76c958ba1eed05"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","76b5ccaa10f6ca62ad347caa19e61e57"],["/categories/Linux/page/2/index.html","4a56bcf529ae5b0db35deca61eaaaea8"],["/categories/Python/index.html","3688e98a0a75dd4359c6a8e79537e182"],["/categories/c/index.html","06c333756a7ea8d1bf6a2cb083dabce9"],["/categories/index.html","3e2258245eb4c5b9fbde7e080cf2fabb"],["/categories/java/index.html","532f65f676f202a406902c082e33e453"],["/categories/java/page/2/index.html","421965cd1c8f692b27b6313000069424"],["/categories/java/page/3/index.html","431dd171070daafb5ba587574d6fa3cf"],["/categories/next/index.html","2f2b6b7745673f4297a10e2c76719cbb"],["/categories/stl/index.html","1cf40698a8a40d1e5cc9abfa3d9766c4"],["/categories/windows/index.html","5535a8fa95829a1a6dc38991e1cbb259"],["/categories/基础/c/index.html","db743e0b0c95c7c638b3f34a8e0537f0"],["/categories/基础/index.html","5c9d9acdad692db0c80ff2970c8c57b6"],["/categories/基础/page/2/index.html","8acff2dae9575a8843e0357a3dfb31b5"],["/categories/数学/index.html","35094946079b128bee7ea4918bd0d547"],["/categories/数学/概率论/index.html","055618cc27460e5e74246972f6bf6bf4"],["/categories/数据结构/index.html","f92c4ba6c987d1a8f4cc52a7a900be84"],["/categories/数据结构/算法/index.html","427c74c9d3f48b558c9cbbe8f29e816c"],["/categories/机器学习/index.html","a227b4ae74bd52fde3097cbbbc391b2b"],["/categories/汇编/AT-T/index.html","5679e8f41b19af9a2758f865fd1d55ba"],["/categories/汇编/index.html","177b99edacb30b81388d9dad3f6d59a2"],["/categories/汇编/page/2/index.html","45e5e8001dea11010fc4fba2c60af10d"],["/categories/汇编/page/3/index.html","a27f4c5738c98dc20eca47b30342f208"],["/categories/算法/index.html","b05c92e72f965bcfb5610dc6ac243e8f"],["/categories/算法/page/2/index.html","ad8726e548f8aa67bfd4d059c492aa38"],["/categories/算法/page/3/index.html","5c18703bf15a6fc6028031c78960c7c7"],["/categories/计算机系统基础/index.html","b73d4309080c9a3a2fb7f1712ef99570"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","c6c88ef699fa75dc3fae8de10e75b68a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","41df5ab0a72716faf4c9a0c763216c67"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","5eeb8e03404c0e4f1db771a607c1be88"],["/page/11/index.html","5ec61cb51fa3778782a041a7172e5bfe"],["/page/12/index.html","353ca96d572658124a65b6b6cd117917"],["/page/13/index.html","93495c4c09f04b9d6199eaf047b1b8b8"],["/page/14/index.html","703eb575f57d8e163ddfd5b7d9d5203a"],["/page/15/index.html","4e37e3eeb705b76d7c76a3eb492b84a6"],["/page/16/index.html","b5862a93a39d3ce810c2396b4fb9c708"],["/page/2/index.html","ad1f56ba2aabb4568b9ce8829673b6e2"],["/page/3/index.html","68f226a45dae4c374006988b7a6f3cea"],["/page/4/index.html","52dc76381d3a041d2949d0e7de845b3a"],["/page/5/index.html","072cec29befa5d5f8eeedef4d1c7158d"],["/page/6/index.html","635c2a0ca567083eba50e7df1e0dfccd"],["/page/7/index.html","dd89f070ad372087a5bdf7f161abc385"],["/page/8/index.html","1bc4a5e0d87896f291f8e89da150d86f"],["/page/9/index.html","85d18d1edd3d792d5dabd79258bb6e63"],["/post/10919.html","87105f47d9ee530114a7a9e23ffff935"],["/post/11051.html","87e53858ad5deae560b5f3560c5c7b05"],["/post/11306.html","b79d0bc6afdd219edc9a04f1df487f68"],["/post/11491.html","c7a5a9e8da1dc1e30975aa70cf2366fc"],["/post/11799.html","a79e3f8b0aef972851c05b4d09d22611"],["/post/12334.html","c7f23dee443c713c034c921091e4060b"],["/post/1326.html","d7ea04aad5fe0d04c888dec09ee64bc5"],["/post/14379.html","70a7f4714dbcf5883bb06c600f6f47dd"],["/post/14511.html","491afbc2841885d8e27683488d3b8ba2"],["/post/15201.html","d0c1041292968a6363dd869d13e1b3db"],["/post/15425.html","ecdf2c8aea9e2c89ecc8f10d42ae6d8a"],["/post/16107.html","12424c527ab6feea96cd459e3406aac4"],["/post/17862176.html","ac153bfe92fb7a7a4927b8ef556872db"],["/post/18431.html","966f3e60b557df7cf9a3b2ef3be43577"],["/post/18912.html","b78048dde9d38e0be378812db88c5ae3"],["/post/1b9c8662.html","5c6551977e035f8074c194680e3ab218"],["/post/20198.html","838e258d99bf49f355a5242cd0224084"],["/post/20ff5ccb.html","ac20657bb4752941e173e91cc9986f68"],["/post/21624.html","2d6fba2e6322438c817ad90bc9262c3f"],["/post/2170659a.html","2704b03ce5b3f8b36b843464071cf4cb"],["/post/22102.html","cf7adf64f52b7f7f7f9d27d36ffde123"],["/post/22493.html","4eba42ee348491c6cae1d4f6bac3a7fb"],["/post/235252ea.html","83925c0ef1f77e8f9b702c50f7c76319"],["/post/25699.html","95ea96e1183825c3459f5851b9130a6f"],["/post/2647.html","469f1394759928e8b0494d586d3d1187"],["/post/26477.html","c8cc32ffb9cd227c755408cd40463764"],["/post/26671.html","d13b15fab44852d94772c5c003b2a6e7"],["/post/26737.html","8cec4d877a9460d713acdb46948cf0ea"],["/post/27045.html","82302d86e42c23ca47e167def80a1403"],["/post/27621.html","f2aeb69bdbf0b707206ee76add4f7055"],["/post/27890.html","35a1f350ad3b71095044c5c4614d3c72"],["/post/27980.html","8a289a2cf384cccd5c49952e80cc2179"],["/post/280b588e.html","36ae71c8ec88f1361df1debaca6b7547"],["/post/28579.html","3cee433802fc0f29a75b64fbc1e6ba21"],["/post/28877bf.html","e6d84ceea8c54fd9ec972e42920833af"],["/post/28954.html","e3d5178c14250022a3bf073ccc86cfe1"],["/post/29378.html","4da8a1a9a278c98eaa84e710736be704"],["/post/29949.html","6f32c98b25e2264243ad98f12e6d3764"],["/post/2ae43b86.html","0836bfabea9c9ea453d47e726e9f2e07"],["/post/2ba82a45.html","0937f43709e998b9eec5373df3ca1023"],["/post/30072.html","8b127c8a4db2fbb295bb2a2c0d66e51d"],["/post/30479.html","bcd9ed4d5918ee1020a86bfc2687af35"],["/post/31a6b40.html","6fb3d0e13222cf482ca021b7b60932de"],["/post/325cdbf2.html","9f3aab2b6ed228eb44e7d81c98637c3b"],["/post/3319ed9a.html","06cc2074c8dc68fbd3fabc9ef68389f8"],["/post/3320.html","f658949079ed125752e72b02c1f28fee"],["/post/33cb1151.html","57dbb98f1cd97053613d0614321be17a"],["/post/34811d5f.html","124da06d87b7bf683e783ef29d64f6cb"],["/post/348d4e04.html","928bb6960fb2d6fe2afc683ac6e14f26"],["/post/3526.html","038d67af2a97526c9cb167b9e665c63f"],["/post/35532.html","259005e012dd6a816872b73c621544e5"],["/post/35848.html","eaf6fbea0fd6120b58cfc96ac52bfa83"],["/post/37318.html","35d0c418e6469ae390c97cff1f3fd051"],["/post/37663.html","564737d1386380d46bf2ab0e63ec2441"],["/post/38035.html","7334bc09de9a09c54106781cf6bc4df5"],["/post/38072.html","93064bf7bb4d2d996f79a65fe903ea32"],["/post/38145.html","b4a3b4062c3859c2fb5045fdd4e4c44f"],["/post/39968.html","7dd5df15abeda8224f2d752b26d700cf"],["/post/3de4bc69.html","770690ecc74bba7bb8f5266f9cb8aa62"],["/post/40583.html","f0eaacd5c8d7bf3ac6028b3e8783cdb8"],["/post/40997091.html","528ec2ca8c25e9b5967608f64bc5e56c"],["/post/41129.html","3cfd282ad3880f9f3d60d1539777c3ae"],["/post/41763.html","0be46f1d515b01559036816ab9130ec7"],["/post/41829.html","794488383ddbbe29676ef3e54ee9a7b0"],["/post/41840.html","13ee6cfa257a89c14fd363175224702a"],["/post/43817.html","6a73f93062a58f5b39800b05a758ad0e"],["/post/43878.html","35160c37c1154b72436ef34c0c72e567"],["/post/44250.html","1732c998bc458d3f3babdbcfe0e84665"],["/post/44336.html","5c92e3165682a4ccf80f4bd097b3e1a9"],["/post/44454.html","dbebdb6207976ad6fbcf959ff1fb0419"],["/post/44487.html","025a68354dfe027d9485a790a7c52d18"],["/post/44914.html","8bc799301cb4f2c776d84a9d8a120a33"],["/post/4551c130.html","403fc62781ce90407a1bf0e01a6156b8"],["/post/455a4c92.html","aae6c5b81901d3164f54f42bba407a85"],["/post/46466.html","57e4059befe107ef97d566ec28f9c10c"],["/post/46925.html","aacaa118c7573cc5a37394a55646630e"],["/post/47075.html","5b1869a95e75ae862bc88e4478119cef"],["/post/48220.html","92e23af2ff9880f18fc751eafc14bb2d"],["/post/4b1879e3.html","f49a3e387c59bc1e9b7f57e0c53d37b4"],["/post/4c720881.html","1a4a3fbaeeea72e7da35d7228068fb61"],["/post/50daec4.html","4eecb7dfba25b3e29ffabc7b052cb399"],["/post/51491.html","6f58e7aab12c76bb8dd53a2430f85951"],["/post/51e63dcf.html","a687ce994fb3d0bda4cdbe1015128b51"],["/post/52078.html","d5cb65d99da48cad38ad3568694d7bfa"],["/post/53677394.html","dafe7856d86acb5be94ae2e4ccd18d15"],["/post/54300.html","5f9f8ceb083bcc7c11ce59adcbab5606"],["/post/54612.html","1fa53aa40aa966ebfae947476ca1dc47"],["/post/54613.html","82673ae8b7928642958df58ebbcff754"],["/post/54708.html","583f1ba38980fba242f1e2458a345917"],["/post/54778.html","9822619470546032aba87469450d10ce"],["/post/5490.html","48c3caa2204537c94c3b77240114152a"],["/post/55046.html","4b4c89f7f9633ee65cfe2a1bda1652fe"],["/post/56929.html","fa657f27e225c9702d5370a72a24924f"],["/post/57339.html","8bdc67d53b65bc7ad67156033a27d1d4"],["/post/57449.html","195c1dc03e7a915c82f5947a358f4b16"],["/post/57453.html","e2468723559979a227556800d8e83c23"],["/post/57671.html","af614ce834fcf7d8727376ecf8623348"],["/post/58313.html","ad392a93940c03cd0e80d03de4a0a498"],["/post/58481.html","b0501812d2becd1d2de35c4c47a3e45f"],["/post/58986.html","8365574869526d50e76e8b04dd72e47b"],["/post/59431.html","a07dc762b0a15ce3876d0c09244186df"],["/post/5951da65.html","9dbc5cf883ee90959fbfd1b8309e9679"],["/post/5be7e977.html","0e041184ae7c5616343452395da0dcfe"],["/post/5f9e4eff.html","39240cecc337043d827bab06becfef40"],["/post/604b49d0.html","9355acce2dc163e59c70a6f84af5be15"],["/post/61312.html","43098516420f749d51e357fc89b4b7b1"],["/post/61738.html","6e8bee534d1e281996db721af3e101d5"],["/post/61809.html","98c513b5a230f4519759b938a553c552"],["/post/61eaf19a.html","c0819783752205695676dffef83412f1"],["/post/63002.html","fd8c352680556ea4134157a2aaaf09ed"],["/post/63711.html","9c22f28d75babe48d6c6bd95d774fb3a"],["/post/6587.html","7d07e57e9a12efc916ff17022a19a609"],["/post/6589.html","2d4c5c2f474e325261d8d62b4a314d73"],["/post/6880.html","c067c5ea07248577820b91e62cfcf036"],["/post/70263071.html","979920f326dbc0e1c47dc8ad1c0ff238"],["/post/71038564.html","f5b9b2c80e2f619be3714b16c8591999"],["/post/7119.html","7ac234e5b4aca91c9f02fb692dc6b3ac"],["/post/74e7fdff.html","14e7b81afc6b628f115e34346d1eb747"],["/post/7502.html","82d8c6ca753a43197faffd16fe420f06"],["/post/7564.html","ea08d3ce52681f0ff4eafa8ff7476fd4"],["/post/766f9b60.html","50fb0169d6fa081ab32a36a4bcc9121f"],["/post/7ca31f7.html","dfdb8f2ab339d4679a6dffe072cb874c"],["/post/7d1c86da.html","e98b567bddb0e796ca160bfcac998096"],["/post/7f3bcd7f.html","47f7c7639e48ed9f69ec0b714b498897"],["/post/8039.html","855605c9ef0077a07640b7e5096886ef"],["/post/8050.html","f7c624ab44a843a39eac40b2a5b5ed7e"],["/post/8072.html","1b12a981cc44f5f8fcb339822c3b37af"],["/post/8274.html","4c22d230e6c4da391c5cd201de673d3b"],["/post/8372.html","3c3612f872e0df65370751c4a232e570"],["/post/8498.html","cffd70a049d12e1d857ccfc854c6a54d"],["/post/85b4e13b.html","3cbbe73e1d3633d2d793d72098172bfe"],["/post/912b2566.html","38cb9bce87fcc5abc56c6a9e1b080298"],["/post/9187.html","2a8d19a6b1f1aae3ab9cfb0968dc49c2"],["/post/9197.html","016c5d0219ae5b659b896865da978b0b"],["/post/94ceb2fd.html","804eeda2e563c22bd302e53f64960f18"],["/post/95495db.html","77591afef0765291df0b761895bd0cc6"],["/post/97246020.html","bd0913770a51ad32992487be5b53cb07"],["/post/a3a786d6.html","fc5d00965ea4cf52959d3b9e813ab506"],["/post/a444b428.html","cfca8215e7a7828860ab85d0cb7cd5ae"],["/post/a50b8908.html","8c09768bffe5ae56d7b743e002d4c61d"],["/post/aa1eade8.html","d4a8a207d636ec0b05939d56e75c03cb"],["/post/ade8c6d6.html","b3faa16b8c68b45fcf1bf5d997b440bd"],["/post/ae8362df.html","23cdad50c98db9e93a9c2e5a8bd66caf"],["/post/b4c1d206.html","58d58c7de916d58d9f95dfe1b33d8d84"],["/post/d431fab4.html","0fdc588d2947391d120d1da3856d377c"],["/post/d5381517.html","d1655bd0bb6ec27dbf2a4f92e691c2ca"],["/post/e058ffd8.html","ccac5929b15b2f7b076e8f1fecb40d12"],["/post/e0f8cb74.html","61d46d5e22d1ec0daf76d107018ec32e"],["/post/eefe591f.html","e90060c985fad7c758c5681be90b4870"],["/post/ef296a07.html","7ae0d0e56f53d68509ddb7a446d189fe"],["/post/f201f9fd.html","26fa6f5bd6e95ab1c6ee15c1f6ccf2ed"],["/post/f79e4123.html","d51fdfd59bfa8ef14383803dd7031a49"],["/post/f8648a1d.html","1e70256ef2655147b5f17928cba12ad8"],["/post/f89cb603.html","2cb5031435dfc3a45a5d156db003c7fa"],["/post/fa288682.html","0386b8ada7acffc10b8af1c3c3b249ea"],["/sw-register.js","b712b5d8856f975408834996c31323f8"],["/tags/AT-T/index.html","2928e4c10b512f0f9fc9125727a5c3a3"],["/tags/index.html","f55c57db226a5eac490a20448e279ed7"],["/tags/动态规划/index.html","2113159910c8d2aa972d36ac54caa775"],["/tags/字符串/index.html","9c116dff3211c2fd4d5cb9a719e5e02f"],["/tags/字符常量/index.html","6bfdeaf35faa7977f3a3046691ab3ca6"],["/tags/快排/index.html","5020b2d73272ca57f16d22e4e22148bd"],["/tags/排序/index.html","fb6e2514966277de99397aaec76306fe"]];
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
