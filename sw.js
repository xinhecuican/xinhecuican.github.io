/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","12f6ba971d8018b695b1150d8039475f"],["/archives/2019/index.html","f966881cb90770def7c8e462c3dc2d46"],["/archives/2020/01/index.html","d4214b3b7ebd5d8c43ea095500838f37"],["/archives/2020/01/page/2/index.html","d69052b5485b185078ff7f6fa7b917c3"],["/archives/2020/01/page/3/index.html","85345538c9573cb8883e5698b07ed8a8"],["/archives/2020/01/page/4/index.html","ccbd477492bfdc6276b5ca400722cc6a"],["/archives/2020/01/page/5/index.html","072341a3531462d4cf66b13114ca4f73"],["/archives/2020/01/page/6/index.html","c0dcb4bbe578fe222bf4a0faedc01bde"],["/archives/2020/02/index.html","d92032a853e81be8dd9e6af6c246c145"],["/archives/2020/02/page/2/index.html","f57d0b28a3293f132bcc251c777f99d5"],["/archives/2020/02/page/3/index.html","4c684233d43760b32ad3dbfe697a81a9"],["/archives/2020/03/index.html","17c1c3841629fe72fdffdcf54cb7bec1"],["/archives/2020/03/page/2/index.html","9e8ecdf855e5fd551a13bbe62ae1eb8c"],["/archives/2020/04/index.html","8265d2d290c0a63420383da976cf2654"],["/archives/2020/04/page/2/index.html","7d9dc81b67f8db89095c8f69f23927ea"],["/archives/2020/05/index.html","6a3cbae76e86ec4d5e3ca1031fe63cb5"],["/archives/2020/05/page/2/index.html","74d6fc04b142b371ba045f86bc304b86"],["/archives/2020/06/index.html","bcac9e9ee01639e6e0c2a970782c5422"],["/archives/2020/07/index.html","0e454c9beb298ec78d28bcc6445a5c85"],["/archives/2020/07/page/2/index.html","4dd7eb22f86350ef1ae24a38dd8353ff"],["/archives/2020/08/index.html","38969f6dfa5e158f36ceb2d23fdc72b2"],["/archives/2020/10/index.html","22ebadf970ce58437e1af4396bbc5cd0"],["/archives/2020/11/index.html","b2085919483e446a9246abe8ebf51fc9"],["/archives/2020/12/index.html","7ed834a41153c99efe143fb40980b669"],["/archives/2020/index.html","d4901f3fcffb41f9f205d53adc8673ae"],["/archives/2020/page/10/index.html","ee886d723badf8d3c03aedc549828d13"],["/archives/2020/page/11/index.html","95f9a2ea36aa43874380be4731be917c"],["/archives/2020/page/12/index.html","e97bf1ff2ee42e6849eaf747b6684069"],["/archives/2020/page/13/index.html","73d7de955ac74bf4be562e734d85d732"],["/archives/2020/page/14/index.html","043b81e0579c2fc334fc83640188a216"],["/archives/2020/page/15/index.html","acdbeffe9ca1535e9b57dbb911cedc1f"],["/archives/2020/page/16/index.html","6e48fa56d25f31c49bae87337346e249"],["/archives/2020/page/2/index.html","fff3c33551613d254d2b05b1d96c7d86"],["/archives/2020/page/3/index.html","2233ae918c678cfd8869e405eaab6369"],["/archives/2020/page/4/index.html","544692a4e5be8f116b2c6112ad1880ee"],["/archives/2020/page/5/index.html","52ee0a7a0e7103d53425d232feb77fbd"],["/archives/2020/page/6/index.html","16eed79c526c55c539f1bf4aef5bc917"],["/archives/2020/page/7/index.html","8475157298bbdd6176c93dd96b7c0d9b"],["/archives/2020/page/8/index.html","edf381c379b7be5624da2f79ee770556"],["/archives/2020/page/9/index.html","1b1abb62178003fb56f785239f15c755"],["/archives/index.html","83b7d64bb6eb2468830541aae77e2ef3"],["/archives/page/10/index.html","a04bf3e2767d34fa0614340e23144ba1"],["/archives/page/11/index.html","90538de78fee0a6344878a68049082df"],["/archives/page/12/index.html","0cb51fc1ac665e3947d433306eedcebc"],["/archives/page/13/index.html","b4ce31396ea49c8ad747deb4a1834612"],["/archives/page/14/index.html","fdc13bc3762d95e5625b339dd2445923"],["/archives/page/15/index.html","966214c39650a5fd5043ae1f9dc03a34"],["/archives/page/16/index.html","aa92025f82b3c66412b34d953c6d9623"],["/archives/page/2/index.html","87f9cf8b0d207197d78335015d438f5d"],["/archives/page/3/index.html","ab9fa50551ba228bbd5a7b4175ca2dd6"],["/archives/page/4/index.html","8e930efde67d223a3438d0dee49fb913"],["/archives/page/5/index.html","3c0ceb9a29b08a17f60f6e1a480616f1"],["/archives/page/6/index.html","6d1b82884dafbda79a496b7c3e40c13e"],["/archives/page/7/index.html","b8232ba349a406f7847820e141ef15be"],["/archives/page/8/index.html","cb89883adf8e3b03a0f3d88da874f56e"],["/archives/page/9/index.html","096cd9d70faddca7f4a6bc6f48eaac6f"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","3daa433e2c0f5dff1b82c13d205755ab"],["/categories/Linux/page/2/index.html","a6cb24e711fce6b9bc9a1db93751a298"],["/categories/MySQL/index.html","c342cd774dfd80cfa210e4fd8effc241"],["/categories/Python/index.html","65b2bcc430a915eebd69276bc2638e44"],["/categories/c/index.html","e4186f1bdf181381390a4e28dcbb03f3"],["/categories/index.html","216c137cd368685b32e8dde0cc38eb21"],["/categories/java/index.html","ca8a7ee8a1ae3055abb6b7f11fb8f703"],["/categories/java/page/2/index.html","c72334a9fc6470445f1eeb824824be07"],["/categories/java/page/3/index.html","84ccc2fcf9d2d4ada43270b55b5e97d0"],["/categories/next/index.html","81b7f3b1e9ca8f01befce345f5cab5bc"],["/categories/stl/index.html","2388b4beff553c00ef235c828a12baea"],["/categories/windows/index.html","ca52d4ae9b0718f2ab0736f190a01aee"],["/categories/基础/c/index.html","21671c5fe7ad605487cc592d9372b9e4"],["/categories/基础/index.html","18da8fd3cce1004392a485df311d2f78"],["/categories/基础/page/2/index.html","6c98624d4c020fc59af3e79171c5edc5"],["/categories/数学/index.html","8f8f1f9e05c220d6f12e7e26768f85c0"],["/categories/数学/概率论/index.html","7f786929fe744a0437e4778b6a20329f"],["/categories/数据结构/index.html","39c2979dad29979dd5cd615bb5947494"],["/categories/数据结构/算法/index.html","038ba74cb065710933b70edf20dd7022"],["/categories/机器学习/index.html","0e12740cef9d532aeecb8812c04de28a"],["/categories/杂项/index.html","9fb86bd7f554bc4df764d0f486e1ef45"],["/categories/汇编/AT-T/index.html","75f3ddfc0b058d5eaa2775b52f5ebaeb"],["/categories/汇编/index.html","a93aa6f961e2879501d703b22c5822ab"],["/categories/汇编/page/2/index.html","9359a7949fdb037627fb97e545259592"],["/categories/汇编/page/3/index.html","9770d5ca857c04e54b26332ff39653ea"],["/categories/算法/index.html","9a4d8a9e7729c5a3f9f0fe6efa4deb53"],["/categories/算法/page/2/index.html","472f29dd278cc5f234c3fbfc28ece9a8"],["/categories/算法/page/3/index.html","22dd4fe77ea47fa6d24cfe413962bc84"],["/categories/计算机系统基础/index.html","21bfa5032d6af16ac2cd849e01eedcd9"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/123.jpg","5f5ef51dc065d68649b2b33fe5d3f278"],["/img/abc.jpg","6316bb4e267fe132ae514aa14031ecc5"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3ac6eadd32d708f41947dcc1692310af"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","10bc2389ac1b1a885eb3e97a49546555"],["/page/11/index.html","0ae2e57c8827b53a39c7fdae64667503"],["/page/12/index.html","39a864e7438e502a95c4b3ce38c74233"],["/page/13/index.html","ff8aff3cac2e2c51aa42689ae93d8a78"],["/page/14/index.html","b338a843f23be707539b746073f77e91"],["/page/15/index.html","7b993999e6630f381d1d8ca6863d47f0"],["/page/16/index.html","cd6ebe456bac86d3b8d420afb5e6a513"],["/page/2/index.html","3322bc0c2eeeba8aa53c4f86471147dd"],["/page/3/index.html","aaf1411b21de72c2f8f6fb09141abbbe"],["/page/4/index.html","8196bf65dcdde41973a61bf64c1141e7"],["/page/5/index.html","87ec4ab341b6b17cff994117ddfcfe50"],["/page/6/index.html","6cc0b247d39e0d6133e886538c6f0659"],["/page/7/index.html","c602552d25026836442aa5cf2afe5372"],["/page/8/index.html","47b4aa71d822e59d93f0f5e298062fac"],["/page/9/index.html","756f4b31b53c250dbaef5919b1963853"],["/post/10919.html","383a550550ad5dc98d6897e043040ed8"],["/post/11051.html","c0293415550f02e670144862ad818274"],["/post/11306.html","3290731dee679d2815410e85b602259b"],["/post/11491.html","b241f5e68def70fa56d11ee2dba8ec8b"],["/post/11799.html","89a079ecc5b4760f6839b233679e5b78"],["/post/12334.html","1940918dcaa3093350ae47059bc04de3"],["/post/1326.html","f4917c5e46549d528ab1c4756db9d930"],["/post/14379.html","ce7b3adea084fdcf5e4817c8fc4b2df6"],["/post/14511.html","3bad39413fbf3fcb137bfaf96ef3218e"],["/post/15201.html","e39a1b8fded3be9c5e27655eee5205e1"],["/post/15425.html","c1d640ddd870af5f6746a89cd65198e0"],["/post/16107.html","bb8a57b83d686ddd552584459c5c4b34"],["/post/17862176.html","1166236682fc514376961e37d2494d3e"],["/post/18431.html","89e306b66bbd6a79fde0664e45f87622"],["/post/18912.html","f25fa6e29ffd7dc02a8a5409e1a0817a"],["/post/1b9c8662.html","2e9b5f27d2c8983b927a9a328da3a7b6"],["/post/20198.html","cada86bef86c738ce5d2c269cfec8787"],["/post/20ff5ccb.html","97a0a2b62b663d37d2fa264378aa1eaa"],["/post/21624.html","8f88923ee29d7a26fa02a4b619e370da"],["/post/2170659a.html","4b0f27e56d74b2e8ba2547891437adc0"],["/post/22102.html","7e634c73a710bcaa3b86a5ef965b9bbc"],["/post/22493.html","90090b49ca45b1e64cbac49eb8dfa58f"],["/post/235252ea.html","6844336a03ef0204113e3183f53bf01c"],["/post/25699.html","73ad44106e0bd5a351cb40a6fb0c8061"],["/post/2647.html","7b794bdd02f45b2f3baa5cd91944edc2"],["/post/26477.html","c93623e3f94096de4cda2886d800443c"],["/post/26671.html","c9a7e159828654d7c0c041a37999edc1"],["/post/26737.html","d678524cfd1db9f635df1c35ebb0205a"],["/post/27045.html","a825dc443d7fff80a769450f3d4618b6"],["/post/27621.html","53e65765c910118c70dd810735a4402d"],["/post/27890.html","90176c8cb938a01d3623dbf55dfd9920"],["/post/27980.html","c0616a76ba3fd361deb5fe3b9f76a38e"],["/post/280b588e.html","ce67393a208911494a8019e241911d03"],["/post/28579.html","93fd37c95f8d50c54b639c8bfb25b3be"],["/post/28877bf.html","6e331e4ceb628a132fa4200205e67217"],["/post/28954.html","f76b7534634143a3eab17b36d2376ca6"],["/post/29378.html","0027740f2ef8f27b5e3b5d49ccce2d5b"],["/post/29949.html","0c08b295c3984fd86185b2d7c5a2dae3"],["/post/2ae43b86.html","83169fca8c1b85ebbdb75e454959159b"],["/post/2ba82a45.html","339a553cec5dc6f9eebf1c3a50b890b9"],["/post/30072.html","b6e22e2567487dc4706998adb4813ef6"],["/post/30479.html","ea93509d88e95ebdc001955721fd629f"],["/post/31a6b40.html","e3b27881fcab5631edda394542c3f74f"],["/post/325cdbf2.html","b1816fba3d54f2b87eff563500120a23"],["/post/3319ed9a.html","584ed40fe6672446e167bc7e360b2771"],["/post/3320.html","e13146aa9a705ea835a43de7e40650ac"],["/post/33cb1151.html","ff5d88080338dffc6fa88bf2615ad6e8"],["/post/34811d5f.html","74f750bd45a878216f2b9f756e555bf0"],["/post/348d4e04.html","98c7ec92340a8f0d31606e12fd88b84c"],["/post/3526.html","c5fddd8b20237a6c51c5a7baa26b83c5"],["/post/35532.html","3e8f4b37a4a1137c07cbc8131349e9dd"],["/post/35848.html","048c9f9fa58799a3d366c52bb5529e59"],["/post/37318.html","8e58f10196e473fbbae1d529666b61b5"],["/post/37663.html","e9a0fc0f0818484722781365cf10a868"],["/post/38035.html","311ab1bf137ca9ab80990a75bb8d007d"],["/post/38072.html","8f9ff94adf615aa2d5d25869befc52fa"],["/post/38145.html","0a0c8f695c89b49ed5ee2365472a2ad5"],["/post/39968.html","d3658ab95d38f99a767d38087e46e3f4"],["/post/3de4bc69.html","fb7d56c8f73bedee2c43204c75516d15"],["/post/40583.html","88fb5ba68abe863c6ff1d500d3f9cb1e"],["/post/40997091.html","7d7bb997511e9054dcb8e0f8b328e4c7"],["/post/41129.html","e175a71a5f1faa88856c3fd0005ac99d"],["/post/41763.html","ebb65f68ca8681d55d081c76ba9282cf"],["/post/41829.html","864d44986570852bf9cf0e3b5c204cf4"],["/post/41840.html","adbe0a51a5a5c7d39805ae6dd987a36c"],["/post/43817.html","16f4b91f524dda75977a38a63de12a8f"],["/post/43878.html","cd85995ccf852cda1f464c30389d0bf9"],["/post/44250.html","406e889d27efc5224a2bae2b487153a3"],["/post/44336.html","636a40b52c52e225a8d00490f818c821"],["/post/44454.html","596e65c2e32a7f1aeb334728e53d0aae"],["/post/44487.html","be7545032cd3e27f6a7094c3a9584ea4"],["/post/44914.html","fd2cae3f3586363fa5fea98ef8e006cc"],["/post/4551c130.html","7247f7c5331ecee3cb07ca4460496db7"],["/post/455a4c92.html","d91fcd22f438bf7e072d235868abd9e1"],["/post/46466.html","1d16970347ea26e23922351fecdd4bf2"],["/post/46925.html","0ab66e1ea542c944ecde73ecead10002"],["/post/47075.html","db6dfe42ecc171fdffc66616cd9054f5"],["/post/48220.html","cb7fd7ee2f106054709a0423be9f4e9f"],["/post/4b1879e3.html","641f51722dce52fb255b895b49140b92"],["/post/4c720881.html","a300bdfc05c86b43540b9a5095d698e4"],["/post/50daec4.html","4ce5524834487ae0b814607c5db81efa"],["/post/51491.html","73a3c3b64ee207dfea0e029333ded245"],["/post/51e63dcf.html","3d89487635e9894c5bd99c73e3d98b6b"],["/post/52078.html","bea0ff110c6dcfe0f55f3297bd60d41f"],["/post/53677394.html","bee658338d84c0dc5a206e81bc5452db"],["/post/54300.html","0cce7a406823b40d40625bfbd4d35687"],["/post/54612.html","9349a61216bd9a105bc6c5ee91931d1b"],["/post/54613.html","749df2fbf0cd63579b2e23fa4623e5d3"],["/post/54708.html","074a695762585120cbec3bb478157fd5"],["/post/54778.html","e2cb798e5dbf6a40e062e753630681d0"],["/post/5490.html","f8f37a1e38beebcad7619029e840505a"],["/post/55046.html","2c1902dc458f74ee4ad07b57d08f4a62"],["/post/56929.html","7bad96825a0be2c4813d98acbc818edf"],["/post/57339.html","90902891153226dc2a9da3b4a96b0c2e"],["/post/57449.html","a1a0b3bad1d07e7cfc1e5aa2c52c7520"],["/post/57453.html","b37a652526dbcef2909fbc28180466d0"],["/post/57671.html","edaa620de6547a2429746e9dc16d1a2d"],["/post/58313.html","a76168f196c40ce3733238feb23ec0c7"],["/post/58481.html","d8a7684276fca41b4e19ff9f42b0f1f2"],["/post/58986.html","35a595ce100e866021a5e0c677b8fbd7"],["/post/59431.html","14f37a4271ee8c18c882747f9fe72dca"],["/post/5951da65.html","5b150afb329f158a895d904fb6ca9032"],["/post/5be7e977.html","7f038755e6cf11ec2845a9e3febbf985"],["/post/5f9e4eff.html","139d77d87221c7fc733f76267b14d25e"],["/post/604b49d0.html","8f0a22af4cced65774435303c7d05a3b"],["/post/61312.html","e21d56f2a373bd4cde492f4621e8fcdc"],["/post/61738.html","97c7689925b05b953a1de739c881bdea"],["/post/61809.html","51b3abd570d3d9f6aee168bd93387200"],["/post/61eaf19a.html","6919c7c49b5251e40cb0042684b75b71"],["/post/63002.html","66322a1786434d249529073c60d68246"],["/post/63711.html","278068c8c463b09b3204adb73ee13f9d"],["/post/6587.html","1bf00fe8e0d6337e07733d3801fa95de"],["/post/6589.html","d26f6876c5f6b82f890988afd3e2d6bf"],["/post/6880.html","ff95d185c2e564d1f87cd86415f95934"],["/post/70263071.html","827dee38f59280c9abbea9e462ab9370"],["/post/71038564.html","e6b17b00e352b70457ea8f3436e11d22"],["/post/7119.html","3b9bfac50d1a5c36847f479da79aa8b2"],["/post/74e7fdff.html","78750f74cc50ac644331c79b9b05c3cc"],["/post/7502.html","1c6a50aa165f1516a0042410b1786e36"],["/post/7564.html","89b6caf17dca49b7b1afedd530fddf37"],["/post/766f9b60.html","c7af4bd5a9527476cc91d131900fa88d"],["/post/7ca31f7.html","9493f9c6b39713beed4a5d8882f921e7"],["/post/7d1c86da.html","830264d8a718509ca495e1292b657e54"],["/post/7f3bcd7f.html","87e3d3c107db46a4dccef7dfc3f45a6e"],["/post/8039.html","94fd5f6f7b5f353d78db4064f0c9751a"],["/post/8050.html","cc8cc50aa88c3fc61c825cce9c6e1283"],["/post/8072.html","8b5ac36a6321e249c08e12d207703f98"],["/post/8274.html","53ac031cc85d7d275cbc09de6c492b38"],["/post/8372.html","8c9ab12e5caa00abafa0c708b51d4a8c"],["/post/8498.html","6e5d210da22a81d23b858dfc4dd6e9e3"],["/post/85b4e13b.html","cb5df26ec967d8a1fbdb964a655ef434"],["/post/912b2566.html","df448138af9621fd2103420a6312fdc6"],["/post/9187.html","ad6a366f6ac570148af77739ae2d1fb4"],["/post/9197.html","7b4a11ab2c9702ae47a0ece3b1ce8f1c"],["/post/94ceb2fd.html","3fe0b8e8b191d4ae289ed3f52b5a91bc"],["/post/95495db.html","c6ab6b347689c7caeb99947d266e3033"],["/post/97246020.html","d056cb5b55968ab4ee3e5dfe6474c74a"],["/post/a3a786d6.html","99ef5209f7e788c70cc0a7bb9c54fe87"],["/post/a444b428.html","be02bb7d5cec85a3972c7d8bfbcbdf50"],["/post/a50b8908.html","78c59c34b7c521b2c7e7fac00af4aea2"],["/post/aa1eade8.html","ec3b88a9312415e8bc317be31595ff2e"],["/post/ade8c6d6.html","1dd978b9ddb32f17c1f6606c0af5657c"],["/post/ae8362df.html","0f069fd215135066f1566157929bebaa"],["/post/b4c1d206.html","34cac4d959a41c2f20eb4b337160af65"],["/post/d213fc7f.html","29c66d978fda61bf043535663c8d919e"],["/post/d431fab4.html","5074ee376e5c5425bb0944785831214a"],["/post/d5381517.html","74ec7ac0a5be7eda337de93a986d33eb"],["/post/e058ffd8.html","9d8fbe9bb4c127dd06da2ccb86dd9a75"],["/post/e0f8cb74.html","abcf817f1bbc6b5e6ee9ce672a53417a"],["/post/eefe591f.html","066721d307d0afbb72d29b25cf10c7dd"],["/post/ef296a07.html","6aad720e30277314612c7993e80d3fe7"],["/post/f201f9fd.html","e0b95b8faf9bd30f1246a9f1d5b99952"],["/post/f79e4123.html","eb93bfe9c3d5580b253c655a65f85fbf"],["/post/f8648a1d.html","d023588a3e875556710df2ccd9cb9bb3"],["/post/f89cb603.html","5bd3e0d80694d813e8f4c56ceef4dbd5"],["/post/fa288682.html","4e1c3655ce1b93a1bb314c75314c249d"],["/post/fb98053e.html","54aacbd531b4d31bbe478e029cc1632d"],["/sw-register.js","bb728a2ded83ac6c5b606060a5e67e86"],["/tags/AT-T/index.html","f5212396c9dfa4b75ef2cb9a1f649c0b"],["/tags/index.html","58b676ad072129e02f3a08b3bd716c37"],["/tags/动态规划/index.html","3f34b9bad26ab8296c726a9195dff122"],["/tags/字符串/index.html","67b78088599b98711e662a156e138729"],["/tags/字符常量/index.html","8b640e8244517e4007a24e31b28b7628"],["/tags/快排/index.html","082651b2c491e8cd212f67baf734fa10"],["/tags/排序/index.html","bb25f4c2bd3ab30645848b52e0b2d835"]];
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
