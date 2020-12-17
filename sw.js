/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","4a229348d7490dcc6cb267c1d033a761"],["/archives/2019/index.html","3b02818d045a1608adf9ac5811b03a53"],["/archives/2020/01/index.html","49aae488c1d901866a175023bcb9093f"],["/archives/2020/01/page/2/index.html","eea39966efa5dc37b4bdf23387b6b941"],["/archives/2020/01/page/3/index.html","c1e00211598a76d9814948eb30630a4a"],["/archives/2020/01/page/4/index.html","a6ed5a5833d75cf230ab15a59370d048"],["/archives/2020/01/page/5/index.html","86254140605830872464e10c513cfb6f"],["/archives/2020/01/page/6/index.html","481c88416b77247402800a1f9caca071"],["/archives/2020/02/index.html","aa1bdb8a116cf9edd71864c905c9c52d"],["/archives/2020/02/page/2/index.html","0b27b6e7d9dad981eae0e4d39e4f0875"],["/archives/2020/02/page/3/index.html","ba7d1a9ba72e898e4d66ce5eb1b36d7e"],["/archives/2020/03/index.html","7aceff8c181f2a9590c44b8019d47472"],["/archives/2020/03/page/2/index.html","3f0ec9fe28b8c70d4c9dd25f56e2db15"],["/archives/2020/04/index.html","bf06ee6eddabdb94f097284b6acbba7a"],["/archives/2020/04/page/2/index.html","5810940fa4d2f27523d6af1b7e5cb9fb"],["/archives/2020/05/index.html","f3c57d77c7fcea5565bab23e3d78c045"],["/archives/2020/05/page/2/index.html","40c58998d0d5b57114d92117586da64e"],["/archives/2020/06/index.html","355804e08979eab17f81b2f77f58ecf8"],["/archives/2020/07/index.html","b9fbb2dfd3365c1700ec1eed3b871fa9"],["/archives/2020/07/page/2/index.html","3b64b089789df887eb6a56029c27a8ee"],["/archives/2020/08/index.html","77aba5b7c50615f9d68697bf6fa2cd13"],["/archives/2020/10/index.html","f60b435abdcc26604d995c81b3f7470e"],["/archives/2020/11/index.html","4b3f7070e52ad5c75ae993a996f33fc8"],["/archives/2020/12/index.html","971a7e3e62839dd7131af2591a1fb250"],["/archives/2020/index.html","a2cfc5524c1c6ff2b2d1ddec8746bb11"],["/archives/2020/page/10/index.html","1d8990b382ed304965d429ddf159c5ce"],["/archives/2020/page/11/index.html","31c93e869e0c93994e0ae2441fb8bd4e"],["/archives/2020/page/12/index.html","87df527a582bda406eb5c106848224a0"],["/archives/2020/page/13/index.html","b5ed115f777aebc7811dbfd226d774c3"],["/archives/2020/page/14/index.html","1d9a88fea90478e4fdfc509f6916e400"],["/archives/2020/page/15/index.html","1b043d4ca2c3851253fab82105e4ae03"],["/archives/2020/page/16/index.html","2ae51a87c1662ee4b5f0f1c2682b60b6"],["/archives/2020/page/2/index.html","874a88faa0984d7682c6eff4ffa1e64d"],["/archives/2020/page/3/index.html","fd07d5092d9af31fff48874518b2688d"],["/archives/2020/page/4/index.html","e4e0df6d3115d16ac9073c8269fe3f57"],["/archives/2020/page/5/index.html","e9012be9f584bffc33cb8c4162c9f62f"],["/archives/2020/page/6/index.html","26e6d4b0fd5a82d630fbd540975d0bfd"],["/archives/2020/page/7/index.html","5cd89d5f828050516e277aedcc25f103"],["/archives/2020/page/8/index.html","6542f18db305228e940756059ad206c6"],["/archives/2020/page/9/index.html","385749a6407cd467b2e797445fc6a6c5"],["/archives/index.html","d4e2c9a8d810b96b9f4e0c3fee390d47"],["/archives/page/10/index.html","6f635993652a0871fed5534e2404ef75"],["/archives/page/11/index.html","dfe5fadfacb9bd678ee5404626815211"],["/archives/page/12/index.html","cd4a64164a000f7160a39be09f2d6cc9"],["/archives/page/13/index.html","31722432db3062ddbb7099d0cd7deaac"],["/archives/page/14/index.html","1a0393f128140c69f21f2852d2aaf2d7"],["/archives/page/15/index.html","b5113aa112403278bd37532c0103439e"],["/archives/page/16/index.html","153ff59ffa509b1394ac011593bd8984"],["/archives/page/2/index.html","9d5aa93caed64ef2e9795e0d9ac24ff7"],["/archives/page/3/index.html","0abf30bdda5e62f86940f71b04dd3cad"],["/archives/page/4/index.html","b01c412daff75629c336eaecb6cf2405"],["/archives/page/5/index.html","b7ec832351ce6bcf7b5a1208218885f0"],["/archives/page/6/index.html","79bb467d04b2c25d876dc2fffb1cec87"],["/archives/page/7/index.html","580c14b845357468639cd981924dac53"],["/archives/page/8/index.html","feb11bfd8381b017fb6486ac83730329"],["/archives/page/9/index.html","baa120cb5d52d7d80b6d6db97191e8d7"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","3ac0af35242520b1ebc92d67201c63e0"],["/categories/Linux/page/2/index.html","ccde0cfe465fd4dc4df22238484469bd"],["/categories/Python/index.html","314a2860e0162d7531e4c7e75fbd241f"],["/categories/c/index.html","e00201456eee40d07a6459fd32e2a461"],["/categories/index.html","b97bd00d298a5176933db97979ea5075"],["/categories/java/index.html","725ec34ba97674719571f97cc9fed7f9"],["/categories/java/page/2/index.html","f6ec86887a65678e53befff6fb9aeb39"],["/categories/java/page/3/index.html","080130236286e2dcfe135cb526660bb5"],["/categories/next/index.html","59e8ce3b78da6e05055d4b37e44a86c1"],["/categories/stl/index.html","b17f153e63e2db4655c32e3b874cda23"],["/categories/windows/index.html","dd7f86a16661b3180d15b04cb55c41f0"],["/categories/基础/c/index.html","18df29664c7211e803c29b22ba0fdde7"],["/categories/基础/index.html","87727cea4fa5f4f49887ca8ba2d082d3"],["/categories/基础/page/2/index.html","51f26576c83f7107d7cb80ef0274242a"],["/categories/数学/index.html","01fb4fc8b1d24db8eb8c71717df2546c"],["/categories/数学/概率论/index.html","a2c92662b341550c059a6f2773ba82cc"],["/categories/数据结构/index.html","73fdc395c41b7dacff17cc43df65ef17"],["/categories/数据结构/算法/index.html","f80d820990c35ec37a57f85633b7b9a2"],["/categories/机器学习/index.html","f1e0777f877042e10a471e4606aa2a8e"],["/categories/杂项/index.html","b070288e10311fe45e0136724f10f0a9"],["/categories/汇编/AT-T/index.html","2f55a426238de2f97cce5490c0db884c"],["/categories/汇编/index.html","d0d1d4a65bd9e73f878d2d2c644b8134"],["/categories/汇编/page/2/index.html","5c05e05f741fddf817afc6f4cb2b05ee"],["/categories/汇编/page/3/index.html","998b6cbd38834545f55e4838f1c9cbd7"],["/categories/算法/index.html","85fcdeb164a08508d1f88beaeaae757b"],["/categories/算法/page/2/index.html","d2a58d06dd7f7e89d3f268d126339a7e"],["/categories/算法/page/3/index.html","ecd48da11434836ae70babc143b141ac"],["/categories/计算机系统基础/index.html","e8a76982b177b550441d5c1e4f0807af"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2938f803832c98738497436cf4f0c918"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","3c44d2e22106b8813926c04887296e66"],["/page/11/index.html","0a0e2a81de32ca38efd9a6696d44f2f7"],["/page/12/index.html","1ae2f405126a29dcb1aa90c26eec56ed"],["/page/13/index.html","40c1934c1b2c9cfa659fb9233660add3"],["/page/14/index.html","455b9619c903e79a72247d8538be11bb"],["/page/15/index.html","6c769d749b810726366cd90f4687c493"],["/page/16/index.html","e45b097d9a7baa23e48ed705584c667b"],["/page/2/index.html","3a576c65663ec513702485555fd38bda"],["/page/3/index.html","f44cdd713db36fd8966427307a3c7ed1"],["/page/4/index.html","92817c6c5c36a5e2134a3af38df5f4f0"],["/page/5/index.html","331018546c5f170104b2f36f01fedd07"],["/page/6/index.html","4ddcf74cd87413859ba4aff9f520be8c"],["/page/7/index.html","46eb53f798604cd2494a8f355643e32c"],["/page/8/index.html","1acbe223328d4d7d28e8c5a21302c0c5"],["/page/9/index.html","bb3be09a01d7758e607465e212cf4b9d"],["/post/10919.html","7fc6065fbcf0f958879cc34e315a778c"],["/post/11051.html","7c6032f18402feba78491b08954809d2"],["/post/11306.html","61b9d26ee6dc1c48d33dede35bb041bb"],["/post/11491.html","812174a0174a405b031902556072ac72"],["/post/11799.html","063359dda11339e4463ad3c064450daa"],["/post/12334.html","b960d61769725c29f7efc1ed3871e0bf"],["/post/1326.html","105d15248e7cdd68929cef776464626e"],["/post/14379.html","92fe12c54c3b740041052d9533fb6e32"],["/post/14511.html","8daeb29f380a9ee582076e7a7a50ed6c"],["/post/15201.html","4d8d77228cb22620017528a829e279f8"],["/post/15425.html","683d0f4661c956cf5cec651fbe346f23"],["/post/16107.html","4f1a200265cdc658add04efe9bf0a985"],["/post/17862176.html","1c89f77ef7fa5e714e70fa0d5342b070"],["/post/18431.html","e91a2daca10d8ff6ee885f13ec220ab0"],["/post/18912.html","10f76f25ff1497009bb95a7f67854af8"],["/post/1b9c8662.html","ad4b7adec84c897acd37d0a5403a2451"],["/post/20198.html","627e6d1110618595148b3d6a266372a8"],["/post/20ff5ccb.html","230b3c5e11073637af23196761289601"],["/post/21624.html","c242d684b45415b49323e48b0ed180bc"],["/post/2170659a.html","c404151ddbbbeaddffbbbcd83a40df87"],["/post/22102.html","d6d85eb567afba52582b49db3f9bb497"],["/post/22493.html","0bf4b97ea6ee938d0d3899a460c26f28"],["/post/235252ea.html","491bbfaef63ac8f610139a427902cee1"],["/post/25699.html","10769cb674bfea699a16cca6694fa4c6"],["/post/2647.html","cf44b3d1a8d8d6fc536ba1629bd2c8d0"],["/post/26477.html","aeaae81179880b56e7bcdc55b6679c75"],["/post/26671.html","2969753a242a49986550715217c56346"],["/post/26737.html","34bcc65a1ede4398e3f7bfb6277e7e79"],["/post/27045.html","b76d8128f664952af59e07d1b69b4a07"],["/post/27621.html","e57e8efbd95d96965abfdd29b70ad0fc"],["/post/27890.html","5f592d14570107fbee078571faa18639"],["/post/27980.html","4d85560bbc73daf097e52c0825b89b31"],["/post/280b588e.html","182b62100263713c1f0db03863385df2"],["/post/28579.html","740bd124eedda400b0d6510112fbcab6"],["/post/28877bf.html","1dc83a655211804857676cb4c19e05ba"],["/post/28954.html","fa9dd914ac8dbf1fced41ee4e3cc11ef"],["/post/29378.html","243d3a0f99af56fd1a4a8c9c66942680"],["/post/29949.html","21feb6bbfcb06b76ed382a4fce5b70e2"],["/post/2ae43b86.html","0edbd6efe42ede68100c6715b27b6424"],["/post/2ba82a45.html","e1b16b2e9cea2aebda958a228611157a"],["/post/30072.html","adb33051bab1ca28d63fe23b0af76f84"],["/post/30479.html","30c4d39a00ee410008b29f7aaccae963"],["/post/31a6b40.html","28cfd6240af36d36da3dcef28a181f68"],["/post/325cdbf2.html","6990555462013bbe240bc9fc14c90452"],["/post/3319ed9a.html","4e3bbc7e67291fa883521921ac864561"],["/post/3320.html","b87469a540c097e5cbc2f7e1b18f0f5c"],["/post/33cb1151.html","f2fed2306854301e98c8a185a5e5cad1"],["/post/34811d5f.html","a561f01ae8792b9bd0f4958b09ea22e2"],["/post/348d4e04.html","0822220400d3d40e0480cb47adf076a4"],["/post/3526.html","46eec2de018c443ad2975bf2c455283f"],["/post/35532.html","fc540b7fc74438e3e3cf4fc17948fae4"],["/post/35848.html","4fa3cac0a3e468d68c9a9ae86d752a08"],["/post/37318.html","62fecdce1f93ea449942ca61fac1ea1f"],["/post/37663.html","0c4271b39bee8cfed424e194b63e327a"],["/post/38035.html","0f7c97cca81983aaca33a11af289a78d"],["/post/38072.html","23769bfea150f414fb4d2032a7d3747d"],["/post/38145.html","3f008e109dc8386e909d26d47dbf3b35"],["/post/39968.html","27dcf1098a0803b31c45c79e3a23b6fa"],["/post/3de4bc69.html","07ce320b574f7fc6f216c943704e43a5"],["/post/40583.html","81647ab5e5f18b9d39c0872e66687e13"],["/post/40997091.html","73b363b0225124ae02e85944de081494"],["/post/41129.html","d98cb2a4c6a7deb5ffaee84eee2d7aa0"],["/post/41763.html","6e603d997c97ef206ef58f02d0b8240e"],["/post/41829.html","db8a6b4fc203e91f3131253e9adacf8b"],["/post/41840.html","68a5dff350602f1282dea3bd4ee7b3fd"],["/post/43817.html","a42e89f2b38d2512baf91dd65e1421ce"],["/post/43878.html","bf113778b2e5a3caf5cc105e59c70b44"],["/post/44250.html","53732132fcfa28dacad671dc8c39dd48"],["/post/44336.html","40e5a35010f75e6836d2c54e7659d455"],["/post/44454.html","8b388bfb4ed7eca1d0876b338574b6a2"],["/post/44487.html","d9e9c6df9206e9e8d66db2a24ab2d5cc"],["/post/44914.html","3c97e52550e51a3ad35ba6156ee85c8b"],["/post/4551c130.html","3e781e4dd2c5d7fc02c6c5b6fcb28c33"],["/post/455a4c92.html","0699f51160afd07797b0bc0bdb2c7f4d"],["/post/46466.html","65ed68f3d4c1f38974e61d3e38d295a3"],["/post/46925.html","89635d7f5c9ce20e15cebdc9e7fad0a2"],["/post/47075.html","76ae3a81b7243f3524420015be88f790"],["/post/48220.html","ff83833837fc915fcdc6e1bdcacc6433"],["/post/4b1879e3.html","5810b3b135722780ff299a04a7be5ae2"],["/post/4c720881.html","a9d65e133c7f1c9d901a14a6f14df96a"],["/post/50daec4.html","b9ac36c46c2de7a21662399597568b29"],["/post/51491.html","d60125b6f9dae1dbc19a72c89e7daedc"],["/post/51e63dcf.html","d710de23a2be5ba50c9f9bba94f1d0b5"],["/post/52078.html","25756fcc50d30280e63ec8ac2f1a79c5"],["/post/53677394.html","2ec723ddb77b2e85fb1011b693c18848"],["/post/54300.html","576ff4e9ebecff211e34d1c4eff0da1a"],["/post/54612.html","6a3d72bae5aa3ed34d949976e63f3118"],["/post/54613.html","9f0b5414340ff4177b992a3dd11e3290"],["/post/54708.html","dae6b73c47499610221ca7ddec34ec34"],["/post/54778.html","3ae82950bfc2666366a48bf30c3b8c99"],["/post/5490.html","6fc6e26b267c96e67317fac8c0da4dd6"],["/post/55046.html","1751f13d1a4c429668917913dc60b809"],["/post/56929.html","90f60d1809fa37b9514e23cbd119dc9d"],["/post/57339.html","d76f2793148a510d08d31b7bc057e84d"],["/post/57449.html","c2b5cbc84f8585b3d997fe09671eb733"],["/post/57453.html","f9510369268a22228a4ab390c6587e95"],["/post/57671.html","fe6c09d91d60e22f0b081df711305971"],["/post/58313.html","55c94a234d3dffc9b25820d13850c3c1"],["/post/58481.html","2b478aeffafe3afd27ad7601e5fe37df"],["/post/58986.html","659b2351ccd497d8c8ad08f4780032a3"],["/post/59431.html","2256e3b4fe6dd26b1b4baddccd5c779d"],["/post/5951da65.html","fbae7e189dfe3f1dce2d4621a3c15009"],["/post/5be7e977.html","47185772bf1853d912a7882842f8b5a1"],["/post/5f9e4eff.html","0bf6f831ad8952de98cea3ebc6514044"],["/post/604b49d0.html","36832f6dbcbc6859f3fcd36c841fe3d7"],["/post/61312.html","3a14fb51ff02b736a60af3e746b2b2f6"],["/post/61738.html","1d6c8652b0373c4bc55860f2113513b0"],["/post/61809.html","e401983b2a4f61a9e3ad946faf609597"],["/post/61eaf19a.html","db4a799e8073ce30272358f5e58adb9e"],["/post/63002.html","1c53afabb0795d4e59022d7fc54f6eac"],["/post/63711.html","ecb1e8fbbb292558273e249027ff714c"],["/post/6587.html","76cebba7d5579c49a59ea9aed14e8f40"],["/post/6589.html","0e1ce7deacd2cc3586703888540e75ce"],["/post/6880.html","3fe4c8ff416bcf59295e6e99b605e11e"],["/post/70263071.html","625ece548300e9286b870a1129851754"],["/post/71038564.html","eabe152014e91f9898d1a5abea4b8564"],["/post/7119.html","49040c6aeb5a32f7052111ba08f7508d"],["/post/74e7fdff.html","94824e5c11c9629a99cd9a24ca86193b"],["/post/7502.html","9798ee04ae9c9593a03c42b7d4a7e23b"],["/post/7564.html","e52677c8885786d5cba445a81d5aad71"],["/post/766f9b60.html","f5c23a553693d40f1557c25164efe1fd"],["/post/7ca31f7.html","ddd97be947bafbf6a6c0e1072beb7f11"],["/post/7d1c86da.html","de6e540958de01f191bf6a44c5a33da8"],["/post/7f3bcd7f.html","74bf8fb84cc5e3938c48a4d9d91a96c8"],["/post/8039.html","e35c03bd72d26defb3e1018c71a3aa3b"],["/post/8050.html","1319b95edf5f67b0706ff5806313009a"],["/post/8072.html","f150034d499035aba3dc93e1a9b63bb0"],["/post/8274.html","82a9d264421f4298b705fc5ddef96ea1"],["/post/8372.html","410117deebae31b0438eb2bf1cf4a82a"],["/post/8498.html","ffc42ecc89532544b55439832cbffe20"],["/post/85b4e13b.html","a08455f48e1dc1476c1e77f79d730618"],["/post/912b2566.html","8388faf68084bfe1d0360225f2198e00"],["/post/9187.html","057a1bd0f12be3dfd8f5f8ea93f43394"],["/post/9197.html","d40da32a8da574d4164d8b23b0e6dcc2"],["/post/94ceb2fd.html","2b96bddca7dcd90c422f7e7680832dc9"],["/post/95495db.html","0ca4f04600eb1b8beacddd414c405b0d"],["/post/97246020.html","118053ebe421b0d64314431335710075"],["/post/a3a786d6.html","fc86e0d96fdb7ff3b16109685f6db50a"],["/post/a444b428.html","393765de446c16323f57b9fc187cda6c"],["/post/a50b8908.html","1865d1885d85631d253500580f549228"],["/post/aa1eade8.html","64e8001e2f252ac31b082a13c8c4f779"],["/post/ade8c6d6.html","ce452513a7ad949579ede3819bafd76b"],["/post/ae8362df.html","5cdebceeb3b5f63ee5b2415b541abc9b"],["/post/b4c1d206.html","bb67b67e1d90c5082dfcfc0bb4c632f2"],["/post/d431fab4.html","cf8208fc364d535b4532fa5cfba38675"],["/post/d5381517.html","54fa6453063301f42cd8d336028bf481"],["/post/e058ffd8.html","c863c86d0036ca9ed01a437b161e0217"],["/post/e0f8cb74.html","2fb81e1a067bff562580a55c74f53642"],["/post/eefe591f.html","0415e77144d43a66d24e17b28556b00e"],["/post/ef296a07.html","aed98434eee6c0e69db765542c9da8bb"],["/post/f201f9fd.html","99fe4491c26b844b8a26828f2f64f8a6"],["/post/f79e4123.html","aa3adf222dea02810396072f2398c389"],["/post/f8648a1d.html","8576e5aebab80e9e76878d6bd7c0a79f"],["/post/f89cb603.html","a2f875241674a826e6d01be3d7a02f11"],["/post/fa288682.html","bdd38e079cb6516e169010626095b52a"],["/post/fb98053e.html","5fed9135cad96c2440132e38d1166f26"],["/sw-register.js","89bfc8595b46643800ac5beb12e6bd35"],["/tags/AT-T/index.html","881470f4c9d3b77c8a2e77d065a7631c"],["/tags/index.html","503c6e3eeb933a5bcfc09b25042fe059"],["/tags/动态规划/index.html","670feff63f7c0a3bf370a70d4a0f4fe6"],["/tags/字符串/index.html","d090f76c03c5219d426cafb2bdcf04e2"],["/tags/字符常量/index.html","09229049e5b49af30101565e52bef5ba"],["/tags/快排/index.html","2391cd98a69dfb382694c820c63e35a3"],["/tags/排序/index.html","6aaec1f0ab0463b3a58864e19059847f"]];
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
