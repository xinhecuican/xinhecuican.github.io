/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","b9e6e67da448eac8a2f4ca4d49230acd"],["/archives/2019/index.html","46d50b31b43fc40a0ef29bce17fe569c"],["/archives/2020/01/index.html","18ec7ee816107aafa7d77b9ddc6db4f7"],["/archives/2020/01/page/2/index.html","b2d20916c609cd9014dc89c2d707f333"],["/archives/2020/01/page/3/index.html","264fcee18dece3803e4ac22cbb76eb08"],["/archives/2020/01/page/4/index.html","984fbad95c85cbfa3dfe7dfc7a3a499e"],["/archives/2020/01/page/5/index.html","cc091725c58e7c4f5ac4aba6807dc40a"],["/archives/2020/01/page/6/index.html","507b054712e0e1acfeb660ae79a3da03"],["/archives/2020/02/index.html","fff1c5e5e8eea7bdac7d535fdc0be72b"],["/archives/2020/02/page/2/index.html","04d9ab9806665fc460a0c09775e677cb"],["/archives/2020/02/page/3/index.html","ee219c08c99fe50a861a812d8414885a"],["/archives/2020/03/index.html","f146155be30c7af140372965f99b5275"],["/archives/2020/03/page/2/index.html","98f845695f6afb4a751847ec3fcd21ee"],["/archives/2020/04/index.html","b31f418d0638ae116174c13ed94a037b"],["/archives/2020/04/page/2/index.html","dbb1f0698dea613c71409a9f3a300bc0"],["/archives/2020/05/index.html","06d45ba28d01e38955837e40766b3f5d"],["/archives/2020/05/page/2/index.html","87cc48f829d7d68462d3d2d0a0612815"],["/archives/2020/06/index.html","67d88fdde82e7ca1efe016b9cde5cbec"],["/archives/2020/07/index.html","342ff9d7711e5f9fbe474b68c593825a"],["/archives/2020/07/page/2/index.html","65566a1212dd5f079acbd33550e6cb7f"],["/archives/2020/08/index.html","0bbeca886985cf6a13e3021460f8aa24"],["/archives/2020/10/index.html","a037dfb477fb925774015fefb6349f1b"],["/archives/2020/11/index.html","31615b573ba25c4ae7e72437d3cc6e46"],["/archives/2020/index.html","56b96fb3cf1b3bcf333eff31e9934ae7"],["/archives/2020/page/10/index.html","5a7ee8470aba8e762ec41df57af4f97a"],["/archives/2020/page/11/index.html","61d06acd7ec2d45836fea9ccd9bab1ba"],["/archives/2020/page/12/index.html","ac9d5831c7869fa66c93b33e7d3b504b"],["/archives/2020/page/13/index.html","2fdc9e16c19c8e7010e1f6219ba0c9f5"],["/archives/2020/page/14/index.html","94227efca77076fde6da782b402f8fb3"],["/archives/2020/page/15/index.html","f725fa39465a5800c20cc20aadc2bb5f"],["/archives/2020/page/16/index.html","fada2998652ec3842c9de20b596a3465"],["/archives/2020/page/2/index.html","6c3f04c449c2495d4f61f5a960574d51"],["/archives/2020/page/3/index.html","7ed0f94c78e3e9a5f5ab93558ff9b522"],["/archives/2020/page/4/index.html","d8bd420575222be1ea7da571b5bc89ee"],["/archives/2020/page/5/index.html","3beb0bfb52eb891d9277978ec8dde7a4"],["/archives/2020/page/6/index.html","478f62beeea7d7cd3cf2c92c7a73d4f8"],["/archives/2020/page/7/index.html","634bb53a73d45c5709f8d21d39dc7586"],["/archives/2020/page/8/index.html","dc3bea6129f659be9906ca4629b00fad"],["/archives/2020/page/9/index.html","7a5d0fe26efefd14ce857b13a4a3f786"],["/archives/index.html","48817d511a3a3ab556f5738d8381bf04"],["/archives/page/10/index.html","d404a1953cf5df2205108500749cb6c2"],["/archives/page/11/index.html","60241a1fd31b68fefe4c9ff1a882861c"],["/archives/page/12/index.html","efc544877c0b1afd4ad6da1e84b4ca16"],["/archives/page/13/index.html","2384c632d071cecc55733bb2c1d1c82b"],["/archives/page/14/index.html","a4119af20aa39401ca1bdb6dacfb95c1"],["/archives/page/15/index.html","21d5e16949c5f12b22a9309a25321335"],["/archives/page/16/index.html","2dc8ce56bb1a3b7fd39d2b9fb0e097cb"],["/archives/page/2/index.html","ab90eacdc2341e0d22628d9c35f2b89e"],["/archives/page/3/index.html","ee53c0c5d0ee448aafdd74ff1d195d9f"],["/archives/page/4/index.html","6fbf2c4ed7d449ccccb493dfeba591a4"],["/archives/page/5/index.html","c172c62d9ba339ca34fd9270a8615bbc"],["/archives/page/6/index.html","7599ab65c844ab81ca07a8a12cb92ec4"],["/archives/page/7/index.html","6f62deb7b8a09edca16dfb83f8cc566a"],["/archives/page/8/index.html","7b496aca48f4c9fa6105af0db75e98b5"],["/archives/page/9/index.html","3abb7980ce55f21554f3634f987e2b82"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","29634f2d1a6d8cfc4a6def6fe0fb593a"],["/categories/Linux/page/2/index.html","59c9670c43a2dccb8a6ef75396ec8f7e"],["/categories/Python/index.html","35f8893a702bb9d4c5edb0a5cf4608b3"],["/categories/c/index.html","29bbe303b1fe83f7df745595c49b7f5d"],["/categories/index.html","7b7789b700914ca152904f4b50e51fb3"],["/categories/java/index.html","f32381eb7bb0854ac1bea4c3d2b63be1"],["/categories/java/page/2/index.html","061c9276e6c5d0306f3382ac11a2638f"],["/categories/java/page/3/index.html","b74f0b38e602eaef288ffff37b26b105"],["/categories/next/index.html","8953f2a29dfa7a0a2aff59ce874c79c1"],["/categories/stl/index.html","61447d9cd2a2e981b0b7e782f5e13709"],["/categories/windows/index.html","cc9bdfa68442692b851b29aa50a8b364"],["/categories/基础/c/index.html","0d756ee4546f4cb73cd23400a85b1e38"],["/categories/基础/index.html","69d4ab975bebf56b007359b4df0d54d6"],["/categories/基础/page/2/index.html","930cabe1ce706493db143ffc32dca31c"],["/categories/数学/index.html","4957dad230af857e20bee232844db541"],["/categories/数学/概率论/index.html","caf17a08aa9964af8bb0655690f0314e"],["/categories/数据结构/index.html","4f746c4aed1d72a14786093d1fc8225a"],["/categories/数据结构/算法/index.html","20d24a37b32c914fd07417509bd2bc00"],["/categories/机器学习/index.html","90906e6a736d1e167f07047283d6fc0d"],["/categories/汇编/AT-T/index.html","e4d3c137ff8df0ffff776c19a3a9beac"],["/categories/汇编/index.html","51ac9df8403099bcd2e4e78bdf860260"],["/categories/汇编/page/2/index.html","1e0467d2ecc81fce62f37c057cea2bcf"],["/categories/汇编/page/3/index.html","4ceea39ac3bd6e8077c47429103607f3"],["/categories/算法/index.html","2eb3a428b9017d4ffecacd5d6f988e84"],["/categories/算法/page/2/index.html","903a6d6248ea7960e7f7ec18c404ac14"],["/categories/计算机系统基础/index.html","abba16cb9b73399e3c6dd821004d7c20"],["/css/background.css","39b1b22e2903e556913dc52516e1e7de"],["/css/index.css","ae66f464ddf98fbdd1920fb525722a20"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","1986464ccffdc672a2df4e50b265981e"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","469625d33c8e1ddfdbd633b16f8e155c"],["/page/11/index.html","f5332329b82950d1c213dc53b46c2446"],["/page/12/index.html","431dd3b57f39b6f6b6beb207e2866c2d"],["/page/13/index.html","cdeb65793c442e4858c28cab90854722"],["/page/14/index.html","11892600fef76d54559476652cedc3e3"],["/page/15/index.html","d9a33ceb9c82abe25e80053cf57d7d80"],["/page/16/index.html","53c0d01736f97b41e7a38b4ab8d65520"],["/page/2/index.html","76681ef69bc27af54aa5bc9c265eab5b"],["/page/3/index.html","595dc38c1a6c62ef2965cec26c8af23b"],["/page/4/index.html","0a5eec9f3079788834c0597f66708b19"],["/page/5/index.html","9acac78a7bbb774c1f29e07d550b9256"],["/page/6/index.html","b8cde47923a6d6d91297d05a127ec4e0"],["/page/7/index.html","e9469cca7e80320a0e6b11c7ff40d66a"],["/page/8/index.html","09a744f98462f6988e62be950c3c5bbf"],["/page/9/index.html","f058a1d84a9e989c173bb926308e69a4"],["/post/10919.html","abe136ea93bf16a8135d1bde8c801d1b"],["/post/11051.html","c5d20f754cf4248fa64b8892c1c53625"],["/post/11306.html","62f018a7f4d6294740504c8246c6eae6"],["/post/11491.html","6e317a7409477d97f85308c4c865580e"],["/post/11799.html","d7c521216adf6466c50929649ff0204f"],["/post/12334.html","f89c9cd34be4ea4922a958143aff5c15"],["/post/1326.html","a5b27570dbf308d37fe29aecb5541355"],["/post/14379.html","3a73c68b8e0be8c70114b989c70dc368"],["/post/14511.html","593bd6fdf783c915b2b84132bebfc7b3"],["/post/15201.html","c6b6103a7da791fee38e724e7a9501f4"],["/post/15425.html","e99a148852d355c8179ca6149b5a022e"],["/post/16107.html","686f0bb11641aa10b468d769bccf1cfd"],["/post/17862176.html","03a4b0d89d76627e7f9670f24784cfb3"],["/post/18431.html","b6b84d619d39256c62141a2cd59bf086"],["/post/18912.html","648bfa629ee8a3ff2eb73662519e901c"],["/post/1b9c8662.html","e85a5938e46493ac18ea9e165009735a"],["/post/20198.html","40a311302a35fd8e597d8923102a5606"],["/post/20ff5ccb.html","25d97f91302b3c3ac2db8f2e33fc2f33"],["/post/21624.html","abe11eab27a78eeb90cabb3a2235f429"],["/post/2170659a.html","21186e440fb4920b936eeece2700e68e"],["/post/22102.html","65cf50542d3f28bcb85b7c219e54c937"],["/post/22493.html","9f35b5f89fd4e4a0b32515357997fd7c"],["/post/235252ea.html","7bbf3871898794ef9887cf27443a2d74"],["/post/25699.html","4a93fe4e41ae0b50c56b49890940a919"],["/post/2647.html","8c0a60aabd28e0c047f1ce43dc445d0a"],["/post/26477.html","d7640a2d92577e622b45420a78da4cf5"],["/post/26671.html","1694a0d93e5f7d872df165592a638718"],["/post/26737.html","ff116db7e662d113eee09c7fbcc8afa8"],["/post/27045.html","33b3b7c69a743726d115ef2599fc44e7"],["/post/27621.html","f3af48a68a2347658ec6992eb2330082"],["/post/27890.html","352a8d50eaf6f3317190b6e9b7ff87cd"],["/post/27980.html","44d7463faee92af79425045a1a562f9d"],["/post/280b588e.html","ec5382a69199c4c81381a465a1f6cd0d"],["/post/28579.html","81fa8383ada01f4e152f13100128dba2"],["/post/28877bf.html","2a3ec54eaf10642eb213df0c0c1d1707"],["/post/28954.html","e08aefae2097e9f1ebb86e61ffe15e0e"],["/post/29378.html","dacec55f10a3d26d316b99a7690ad83c"],["/post/29949.html","3f92303a6affc2056e7e6ff78ef782eb"],["/post/2ae43b86.html","2125688ae5b1bf828a0e52867bce1459"],["/post/2ba82a45.html","c5f5b14382011327e807c96787dd80e5"],["/post/30072.html","fda7ccc9c80b0dd1947503ad44a1da16"],["/post/30479.html","96913edbc99aa963bc1f862b34091b1b"],["/post/31a6b40.html","dabdd22d85491771a97149ffaffa7382"],["/post/325cdbf2.html","60b3ba1c8ad0983e82b0cf86155b1080"],["/post/3319ed9a.html","c66a47f5707b41f0040c1339171b8d0d"],["/post/3320.html","31b8f2b496aa48c7a57dcd775e2529be"],["/post/33cb1151.html","b24fa482d4238201927096fb8ebbd0ae"],["/post/348d4e04.html","19fc66be404e9a0b2aa3650c56e9a1f7"],["/post/3526.html","a842eb857ad1b4c91a1a8589f27e973e"],["/post/35532.html","18a01b546a839e849901b067c66a2a80"],["/post/35848.html","578c1e48f8dfefc5af75048ffc63b2d5"],["/post/37318.html","32a4a6758040b0b2d7ce28ae97a7a8c7"],["/post/37663.html","c9888b4edbb1db68ca72c9b46d967b63"],["/post/38035.html","5fc30ac52f6713c77565da24b306feac"],["/post/38072.html","fed85eaa6718d84eda2ac541899b5df9"],["/post/38145.html","9abd44252742688e0a86e51a51ecb43a"],["/post/39968.html","8bdc3ec69dd566f9ece3105b80fac436"],["/post/3de4bc69.html","fffacf9c86db6e8a7db0792e356f4405"],["/post/40583.html","01717505dd77d1f9bd00bca3f9e1e56c"],["/post/40997091.html","4e9345922c6506349675495ec8d5f200"],["/post/41129.html","e5b50192e080a4ab217b3fac6ed11254"],["/post/41763.html","4d1f53ddba4d1e7e119638c3c647a477"],["/post/41829.html","f6f8ac73c135a35d4fcf464bcc03272b"],["/post/41840.html","b09c0780fce923613bfac4d6bbe6f583"],["/post/43817.html","7f4ec69c9d0854737d05f52ee0481ff5"],["/post/43878.html","318c0a1a2012c42dabfbd98b61c9a19e"],["/post/44250.html","11e6f8532cc9f62673f329bd884432cd"],["/post/44336.html","bf8b3dee5743a03f3dce3bc66d36d7bd"],["/post/44454.html","bad25ef510c0764a29583522adca7c80"],["/post/44487.html","782b0766a3f38fea5b05da5256fbbaf4"],["/post/44914.html","07280b20e6fddbef5d95b76415ed5813"],["/post/4551c130.html","c3d3236297c569e24ec9877aad2901a2"],["/post/455a4c92.html","c4dc19352ebc98f52cfee69bb3b3ff06"],["/post/46466.html","5fab7bac7e2bb388442c07fbc3865e87"],["/post/46925.html","7837473669bec6b1dcf45cd29ccef91f"],["/post/47075.html","f24356e4cd9f661e7a16141ecaec8c1e"],["/post/48220.html","5f9803aa56c89e3561e78637711199aa"],["/post/4b1879e3.html","62eb4bceed928e24e23a12013c6e8e1e"],["/post/4c720881.html","94a2f93c1afdafadfaef3446e00c858c"],["/post/50daec4.html","df5e812cc7cae529805e5cad779e88d7"],["/post/51491.html","b2256ddb3d596099a4dab1ffd199a1f2"],["/post/52078.html","9656a200f02607f0b54e94005b1a31d8"],["/post/53677394.html","226045d899335c5dd21354aba6f834f7"],["/post/54300.html","aa908df9f9224ee80d90329fbb6f725c"],["/post/54612.html","9a340fbf9d2e7740dd74245e40052260"],["/post/54613.html","592e7497a9b1036601941e92f38763ab"],["/post/54708.html","9f300b033e54529b6d61b2d94fec63c3"],["/post/54778.html","82ebc29fad950f12ea5c21bf93b98665"],["/post/5490.html","0e4844c62a4b162f75fd7968ef17d001"],["/post/55046.html","fcc89ebf20ca3ad538f115d52e10c7e8"],["/post/56929.html","4b23618007235a8609120f970c9ff2dd"],["/post/57339.html","1e0951ec6633215295e511e5a0058208"],["/post/57449.html","1de37de478f82087c5641f637b337f2e"],["/post/57453.html","90a9b4898e1f84e6e60b365ca4ec9628"],["/post/57671.html","37b6fae5957968b6a5c519e6e6041053"],["/post/58313.html","9dffb44a4639a95ef387fa0754a368fc"],["/post/58481.html","c514363b124f2a2641221ba41fa810bb"],["/post/58986.html","e56408d203d14f3614bad74ec84ea675"],["/post/59431.html","606b2c4c2bb7b9bc4378117516bd7b57"],["/post/5951da65.html","1f96fee30a7b0b922cd91e13aaa3c8c3"],["/post/5be7e977.html","0f6b3f31efce9b52d103d2276e83e0b5"],["/post/5f9e4eff.html","eb424e0c30baa2323f811ed9bbecb28d"],["/post/604b49d0.html","742a2be4507ab2cb809d31067f0acd4e"],["/post/61312.html","78807f9ca1956e894206a62c6c0132e8"],["/post/61738.html","cb356fad1d12ee2e1e22aaff3a8c0881"],["/post/61809.html","4b17c464f2882ad95c2b719888eb7c9a"],["/post/61eaf19a.html","802365b59a44e0871760fa893d0f6e76"],["/post/63002.html","4a119f698629c60d319fc13f7c89c4ef"],["/post/63711.html","04f5654c34a76af2a90d2c23523f8016"],["/post/6587.html","2b8157619f8e613ed1d49495c1ec5578"],["/post/6589.html","417209882261486d12cdf339b88f0d81"],["/post/6880.html","3d9a4e07e4ddeb3ab8ce0c2955dd4f05"],["/post/70263071.html","ba4b8fccac54557e563d9cd926c29dbf"],["/post/71038564.html","e4c23eeb0b074175695f8eda549c2298"],["/post/7119.html","e395b9bc9971536c82280c05b96d1a6f"],["/post/74e7fdff.html","14f8f8cf42a764119e208f2dc825f054"],["/post/7502.html","301445fa87314b019b73c852f266f4ed"],["/post/7564.html","dfd84da4e20fc203d5965eab2cf60de1"],["/post/766f9b60.html","8870e1dcd700c3e44f9683dffa2c8b92"],["/post/7ca31f7.html","7800c455a09b42705b1028e9ff3c5ece"],["/post/7d1c86da.html","85663578d8848b4483938b2f28cd6df6"],["/post/7f3bcd7f.html","a28eabc41c0e04514f81506bf8c7b78a"],["/post/8039.html","08e6302f272ee391e2c860d870a59c66"],["/post/8050.html","a6b2762c7ccf82fa8b302a4197987340"],["/post/8072.html","0e96c0802b550203cdd139a2939feccb"],["/post/8274.html","769865999ae0f735a0788bd6cf4ec632"],["/post/8372.html","848992d3926021ef4142465678a562a7"],["/post/8498.html","637e38f04ed4cda20bcd3ca159a560af"],["/post/85b4e13b.html","4a464bde6b6b8e0ce377586b6ef6a2bc"],["/post/912b2566.html","e123d11feb3bd49b8ebfcaec69fc372d"],["/post/9187.html","b1096b01f84ac8a91605f93f7c972130"],["/post/9197.html","4ec9c259c26d04f4b5c6479bac21af24"],["/post/94ceb2fd.html","8592f765258dc31bbdaf74fe51a6e0e6"],["/post/95495db.html","9c8aa700cc7179a30ddac6ed1bf819db"],["/post/97246020.html","467501c88b647c880288155f2d2d1420"],["/post/a3a786d6.html","922e42d535597bd133db85cfc1356118"],["/post/a444b428.html","260318b3d4646faf168198ef6dc6bd09"],["/post/a50b8908.html","3051cdccedc8b61e5029c378fb165d6e"],["/post/aa1eade8.html","c8e4d918b3849365493f0e297a269fc5"],["/post/ade8c6d6.html","b6900cf9039e780e9032e22479743053"],["/post/ae8362df.html","14a6d6198901185797ba91689950b2d4"],["/post/b4c1d206.html","79d5189a38eec23dc8e9b94f58d16878"],["/post/d431fab4.html","10322c703cd87ffba2b5fffe546710c6"],["/post/d5381517.html","1eb2eff35903c17142c1ddb14834f025"],["/post/e058ffd8.html","aa1b218cf4a595f103e2e886d9d8f5ea"],["/post/e0f8cb74.html","1fcb520d55cbfb98c199875ef3e08c20"],["/post/eefe591f.html","196757d0f03feac406a8d2fea71af809"],["/post/ef296a07.html","7a9ea9076a7193cd415bbd2dc263be53"],["/post/f201f9fd.html","18524a1291e1c66ea20da422cbb1d2e2"],["/post/f79e4123.html","fa692d92f6eabadf8b10265e4148b69c"],["/post/f8648a1d.html","1b13673ea3829cbd18f08e5a6895f251"],["/post/f89cb603.html","5a178278966b522536ef3f7ee27c372e"],["/post/fa288682.html","da4201e65bfef9e57103d50e7f0d2ba3"],["/sw-register.js","575e7ef8c47cc3165838226bb6c58f24"],["/tags/AT-T/index.html","31f93601cc074951b557b5a71757dab4"],["/tags/index.html","0e2ef64443e3ef2dccd9621a22a58062"],["/tags/动态规划/index.html","7b5f0d5cf75588dcbb469a062ac04b94"],["/tags/字符串/index.html","642982059d8dfde126fb337013fd987e"],["/tags/字符常量/index.html","9f63be6f2f74f377af904213268513e8"],["/tags/快排/index.html","747ae4d779f0d07c838b23c03946ac64"],["/tags/排序/index.html","f6e6c8843754b72776b09f99f2300452"]];
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





/* eslint-enable */
