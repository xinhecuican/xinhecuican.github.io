/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","31d19972a424d284a712abc3213bd81d"],["/archives/2019/index.html","fd7786c11e797ccd717af8085578c321"],["/archives/2020/01/index.html","f455bd4a06a9be792cb796298c498c5d"],["/archives/2020/01/page/2/index.html","ab1ed32005cdbbb924429b038e82e3a2"],["/archives/2020/01/page/3/index.html","9d16a329f50300a09e8d0c11b9dabf24"],["/archives/2020/01/page/4/index.html","1477d8f74695a986e4663fbf2cbc4a3e"],["/archives/2020/01/page/5/index.html","c1dec4e19cf02188c4c8798f96cea8a9"],["/archives/2020/01/page/6/index.html","c8570951a07486cdf2ee3639752a9706"],["/archives/2020/02/index.html","0b807ff28d2e4c697e17a9ab2c578231"],["/archives/2020/02/page/2/index.html","eff3921beeb5808f03ff519c0b67ec1d"],["/archives/2020/02/page/3/index.html","284dbd8003d1e5e3d754805e40f5b29a"],["/archives/2020/03/index.html","af71478844831b6484a2e36d647b05db"],["/archives/2020/03/page/2/index.html","c3b4838d5037003605fd43f7cd3412ce"],["/archives/2020/04/index.html","6b4b111291656d15ead7d81f10a1b49e"],["/archives/2020/04/page/2/index.html","4f3df6d90e3825cf023b9429003f1ae6"],["/archives/2020/05/index.html","c3624cbb685400e5d1ef00d2d622cd86"],["/archives/2020/05/page/2/index.html","407cbf4b0d0191e9e7a36b88dbe81802"],["/archives/2020/06/index.html","cccd3dfe9544a3c1a62d321337c1cdc3"],["/archives/2020/07/index.html","505049da18fd14d83f0a3c106ac77521"],["/archives/2020/07/page/2/index.html","a8b38207daf7b38b8cc7470709cee72c"],["/archives/2020/08/index.html","861840d4e8e13365ce7472db41d78aab"],["/archives/2020/10/index.html","07aceb73b430fe3f67f3fb3488d00918"],["/archives/2020/11/index.html","b3de44006c9b454be32858a6f1a31560"],["/archives/2020/12/index.html","e60b7ef1112a78cf8e62450b33210a00"],["/archives/2020/index.html","4266e1fd2f1efc57673be2f0c0e818b7"],["/archives/2020/page/10/index.html","84b69e119244e145b6660292e693860d"],["/archives/2020/page/11/index.html","3045f9870023285a2b0065ccc6f25937"],["/archives/2020/page/12/index.html","aa53611041a03015d93d3ae7aba037a8"],["/archives/2020/page/13/index.html","4896ebda5a65d61c491f529c96cb17ff"],["/archives/2020/page/14/index.html","63d56e9245bfc1f0b72eeb9bd8364535"],["/archives/2020/page/15/index.html","8c65e24bac03b5747585df2d2f0ee782"],["/archives/2020/page/16/index.html","2185064d135fdaa269788eb3fcdd5cae"],["/archives/2020/page/2/index.html","c88432b2bb9d7ea16f609f758a102179"],["/archives/2020/page/3/index.html","2975261343a95a7d93c882db83148015"],["/archives/2020/page/4/index.html","0bb91a2c3b0db5c6718834ed03ae0fc7"],["/archives/2020/page/5/index.html","3b93d572c02ab52f67384303de723e63"],["/archives/2020/page/6/index.html","cf03e98da05b655c5967d2e3c09ddbb2"],["/archives/2020/page/7/index.html","2d0e9fa80cfe324323ec0c0180d68555"],["/archives/2020/page/8/index.html","124a0daf75ea7616cdf3d19ad8ffefb5"],["/archives/2020/page/9/index.html","4deaf3ff157bffc64d3110abb9f0246b"],["/archives/index.html","3403ec51e84d99a8fc182660c031753d"],["/archives/page/10/index.html","b6bbce7517b55bb3c7a5b8f9a517d7ee"],["/archives/page/11/index.html","94ee4aa31ab05e7e10454694f25e472d"],["/archives/page/12/index.html","3be26ae9c7665b976ca56130a708dc18"],["/archives/page/13/index.html","0964c89c703c508f43431238529e7a81"],["/archives/page/14/index.html","bf5da5c8b60f7a184a64b6db84713974"],["/archives/page/15/index.html","5b24863e5767ab1d4642ea5cfb5fa1ce"],["/archives/page/16/index.html","5a90ecef5b27cf8e273f1bb2d6e9b9a7"],["/archives/page/2/index.html","1b2c48e2e727076a1bfeaec6e05b315b"],["/archives/page/3/index.html","1c6a8394889e6fb6f869b59e5968e926"],["/archives/page/4/index.html","ef4d2f76e17c3f1ca21492a3c7ab8af4"],["/archives/page/5/index.html","dcd8a624e0ebdac82a14d6ead9d54afe"],["/archives/page/6/index.html","bdb48eb9305fe934e9511ab902f5bbd3"],["/archives/page/7/index.html","84ed7ce029e1cdf204dc55c6afd30b83"],["/archives/page/8/index.html","58079186f054401ca00dbf9de5e6361e"],["/archives/page/9/index.html","46a33b5512719390bbd956334205b646"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","1ff9858f6dafc5594a510fe5558ce087"],["/categories/Linux/page/2/index.html","44682e9fd8b14780fc88b89f4c9a51f9"],["/categories/MySQL/index.html","90db1329eb045b08e141837bb97ecd80"],["/categories/Python/index.html","f5cf79ce08a3a97eb708ffecae5c04d4"],["/categories/c/index.html","c8c9090a5b8100d0a0c9b48c2f841fc2"],["/categories/index.html","57f267fc599f43999a13c5b71442d6db"],["/categories/java/index.html","35be3de83f5208657f5008bdf8549faa"],["/categories/java/page/2/index.html","bf72cf034bf7afe2a1ee4c49a5b967c2"],["/categories/java/page/3/index.html","0344f5ca0d7e20e790b133492bf7c52d"],["/categories/next/index.html","9facd2daab27de36bc0aa8a0d80a8100"],["/categories/stl/index.html","5be7ab71ef6cd5533061370cda2c899a"],["/categories/windows/index.html","bfa12c484b110c481445af6cccbc2feb"],["/categories/基础/c/index.html","e2eb9ea3a0fc4c902f2aae00a6dc1cd6"],["/categories/基础/index.html","b2bf4f1b8d8299fbf8908e938ab88e08"],["/categories/基础/page/2/index.html","003b4faddc84421dd49cfb9fc517e31b"],["/categories/数学/index.html","456733063d4aa881a89995095cedf866"],["/categories/数学/概率论/index.html","f163023e9d75bdd76542d45bb4e4bee1"],["/categories/数据结构/index.html","1699e4c00ffed9863b9e039e954b3b6e"],["/categories/数据结构/算法/index.html","b010139ea246df39eb2c2b0ac098b337"],["/categories/机器学习/index.html","6007e43a18664987a31fbdc0f33da764"],["/categories/杂项/index.html","143898eca5068f4aa1d06a8c16c33d90"],["/categories/汇编/AT-T/index.html","b930308e7c45ce7dce5b3c6b64aab184"],["/categories/汇编/index.html","b7eeb0dce77e4865bb29f5a3ee7c4dbf"],["/categories/汇编/page/2/index.html","409072b08b81204a5bd1a6d1876b79f5"],["/categories/汇编/page/3/index.html","64b8bcc444638029a6ffd0d8c19d0cb4"],["/categories/算法/index.html","06c8412d25207cc85d8ee4167c05e63b"],["/categories/算法/page/2/index.html","5d74d28d70eec33ea580afd86626c2fd"],["/categories/算法/page/3/index.html","793a2571098e47fc3039996b637312be"],["/categories/计算机系统基础/index.html","0b2a05efb31b87f773c909b32724d3be"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0672e2799d4655b22c333488cadac58c"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","4a0dfafe2753e89efa6bf8e91c7a77be"],["/page/11/index.html","401399aa1c716882d712e1188f17a4cb"],["/page/12/index.html","9445d8780cc7c9ddbdcefad88f1fc289"],["/page/13/index.html","753f7f57e497f25302a2c6185ace9e1c"],["/page/14/index.html","939e3e0350c68ebcd6fa7d9f09221689"],["/page/15/index.html","3828aa5fbfc46f3e94cc23ca9ae8ce31"],["/page/16/index.html","f386e162b91ddd089470bd7819370d0d"],["/page/2/index.html","09e875690914da21a50cd3303dc6e730"],["/page/3/index.html","506580c39ffcd45bc6ba678069adc241"],["/page/4/index.html","d59bce693a7e3798b2391abdd419df29"],["/page/5/index.html","82057c862967fdc7d3644ffc9c1d388c"],["/page/6/index.html","53912b5b1ccb30e6f0f21332afb55bc9"],["/page/7/index.html","3b46ee1fae61401ce79332ed19b03198"],["/page/8/index.html","7a3333c05941be026c84d725d970cb1d"],["/page/9/index.html","2161787cf231778eb2efbbb519db3c8f"],["/post/10919.html","3018a0863101603ced517bb2872380e2"],["/post/11051.html","9398c5d559d6f7d290ba8703d1bee58d"],["/post/11306.html","d2746c48b81b5a4129798002c3f6eafc"],["/post/11491.html","098c55d7741544ea9f457389f49ad435"],["/post/11799.html","030d84fa59c81bd1bf3fd30cc3f4b77f"],["/post/12334.html","a46e48b69506559a93431d55732ef2e8"],["/post/1326.html","9146312b8559fd2b185ace5b34fe0a7f"],["/post/14379.html","636f6de5597fd168d5798e627bee2a18"],["/post/14511.html","c41dde2c85bbfb8a7c79840b51fc756b"],["/post/15201.html","3cd95feb90979b0756baa2162e248579"],["/post/15425.html","0803f8101aa677eab260ff1e91c7c336"],["/post/16107.html","e5f596ccb7bfc1bdd569dd531417fedf"],["/post/17862176.html","b5d4c407bef9aa7e6f88bcc5455dbd1a"],["/post/18431.html","0e65108cb2bcfc4760b05b60e0df6a23"],["/post/18912.html","a8d00e3fe677e36b3fdcdaca94465ce2"],["/post/1b9c8662.html","aa82b67ec20b35c93248a49b9d69cd80"],["/post/20198.html","54b252823bca069d91fcb5219b4b668f"],["/post/20ff5ccb.html","7bbecdf8324754edd932edfdec8535a5"],["/post/21624.html","5c73a4b208e07df82a70a4755c1ada56"],["/post/2170659a.html","d911d3cdeafdbbb46318a6f7adce6844"],["/post/22102.html","834943c21a48a8b2d45836e42a9c24f2"],["/post/22493.html","3476866d62723d782588016baa35e043"],["/post/235252ea.html","b0b818ecd9db746d7fbe173b45ae81bc"],["/post/25699.html","bfeb7dfd6c103686cfb31768b614c1ac"],["/post/2647.html","1e82e7858605ad02f7b7c6a2bf5063b1"],["/post/26477.html","6e2c14a8e845a9252ee1a88be37b7ebb"],["/post/26671.html","77d7ea37a07945de04cee70b4cdf362d"],["/post/26737.html","97fe577d3c79c06099e8bb06f037fc3b"],["/post/27045.html","87fe1addae5fab2e3eb9e4aa6a53c1b8"],["/post/27621.html","ad4aa250b0749e279764b1f8b5e34686"],["/post/27890.html","cf2f7b5464b6c1e742659f16d8f69277"],["/post/27980.html","4ed358792f04ebb06323139d61aba3b9"],["/post/280b588e.html","06582e6567a4334c9a047c14bcfcf37d"],["/post/28579.html","e5775f4ed516e345bb589282ac072683"],["/post/28877bf.html","51adca081f73ab9036634f47b6b03403"],["/post/28954.html","74aa7f9a687c4a71cdbce2b36b5bf7c1"],["/post/29378.html","9377a846e43f4c38245f94b9f70d4561"],["/post/29949.html","9a5359ec99f3e8e00426bef2ba1d2499"],["/post/2ae43b86.html","d60e4dc9b38af5be1cd6268dedf1ff39"],["/post/2ba82a45.html","c7c4bddfc12f9c6272d6c490e1efe02e"],["/post/30072.html","1f795d8bec5d3e7ac8478535b5086332"],["/post/30479.html","f0ff1e9f29a23f5686e3ad5452119647"],["/post/31a6b40.html","76bbe785fdf1a5ec94cb9b4e732f1456"],["/post/325cdbf2.html","af2bfa0014db8f3b83735060d2077eca"],["/post/3319ed9a.html","7367335517e3c22f5dbede2614f3ccdb"],["/post/3320.html","fd70a9d1e88562c5b5f508d7dfe37114"],["/post/33cb1151.html","5e5996cfbf69735c26f5fce31987bb89"],["/post/34811d5f.html","0e8b861d5fa0188232d2fd851791dfb1"],["/post/348d4e04.html","f3299d45d6931270585f778a96d6b542"],["/post/3526.html","ffc5225e1ae652ff3485fc00df99cd82"],["/post/35532.html","607f7787f5792ce4cd93a6c0fdb5bd86"],["/post/35848.html","4479532d0d84a666b6841e89a98b9450"],["/post/37318.html","a12d0a0cb9c8749d5c4143976c6aca85"],["/post/37663.html","bf2cf3c48dfbfca80da5c637bb60df6a"],["/post/38035.html","e02c948ef5bb3173d4cf8e4a3a807fe0"],["/post/38072.html","10a3514c5e2fe7b1e349d7f9b53fa907"],["/post/38145.html","5171bd667debf8f31a1664a5560a23ce"],["/post/39968.html","b0a26a8d53775a7518bc1b8beed9224e"],["/post/3de4bc69.html","fc43c925b45f87c04c742aaa49e6c7fd"],["/post/40583.html","e0ab6771e3df3d83634690fefdd7686d"],["/post/40997091.html","efe672f6aa93be3923500061c7987094"],["/post/41129.html","8a520dca11cd0e1c2b56a87f7f2b21f3"],["/post/41763.html","a7e9a1edd3b31c5d2a67ffbad6a0b6e0"],["/post/41829.html","90b999e3d090e90dae4d1d60bfc5ca96"],["/post/41840.html","c74dc5324897200d2f1ac80585baa85a"],["/post/43817.html","677a64cfe14a9f683ca2a85b8966201d"],["/post/43878.html","b239f6eebf885db8b82f303360b785c6"],["/post/44250.html","23ef26251f89692b86cd97ccfa0f5bc8"],["/post/44336.html","3add57db32594d484310f8363ecf6dd9"],["/post/44454.html","95aca69aabab7b632af3bacc458f1e61"],["/post/44487.html","a11c95d55294b28bab4e6d528fc18686"],["/post/44914.html","1577f7d3548146661d84b2a83e857dc6"],["/post/4551c130.html","738dac8a69926d32555adb5e2fe3507e"],["/post/455a4c92.html","d07a81c0e44e2e42983df975e388d614"],["/post/46466.html","0c82ae9326b564e214f7a55f3ee71f2d"],["/post/46925.html","2089b878cce04fd437e7942b41f03b4a"],["/post/47075.html","52859fe5ecff2750f97c2529acb0f276"],["/post/48220.html","6c493f362f1cba4b1cb4420e1735dc60"],["/post/4b1879e3.html","7899a959363a39b8cdddb986c34af140"],["/post/4c720881.html","5d873eaab06a559d12c7c2fc7b57188d"],["/post/50daec4.html","7649f53dbda27a089cb2ae2472c697da"],["/post/51491.html","5b509589a29c2c6598c925a55993b4ed"],["/post/51e63dcf.html","c8ce62591b16a94584a31ba0788f7471"],["/post/52078.html","682ea082a8a436856958b6011b5cc3e5"],["/post/53677394.html","f6623d21fc28db963f0b0d44191a9609"],["/post/54300.html","0faf8d249cde3770f5e6806f4bda1035"],["/post/54612.html","70e3dde7f2f24cbe80f7f78df4d19381"],["/post/54613.html","4b546c1d263c121b91e771896f47fba3"],["/post/54708.html","1004902f8e4a29266cd550a227057ee2"],["/post/54778.html","2b680e6410c7410699c406cd5926de9b"],["/post/5490.html","b6479677909b0985a341c043a778e099"],["/post/55046.html","a8cae82a752a947a56acbc93775b6c16"],["/post/56929.html","16d8385100614a535e03b957e6c21b2a"],["/post/57339.html","c80edf2e2df4fdfda6226a8cba7e06bd"],["/post/57449.html","9bfb5f6aeacd186949da81f23abf45a0"],["/post/57453.html","c997bcf58c214cd0b1d1a25955e7225c"],["/post/57671.html","a2cba9102928b822f902c40633a48b65"],["/post/58313.html","27b1c558d7e4fb9a9120deed4d610129"],["/post/58481.html","628a3b3e8fc29a1dc91abe024058ca20"],["/post/58986.html","92b18a5d3518e5208c640f39dc1cdaea"],["/post/59431.html","6225040137d742b6f351f06b892f710f"],["/post/5951da65.html","789f43b2ab786b8b5b35602b0a1835f2"],["/post/5be7e977.html","5fe4cae31e4f03470c300ea6b096ac6e"],["/post/5f9e4eff.html","77c96cef160386165bbb56ad3012abe3"],["/post/604b49d0.html","eb798569bca50a8fca6311cae3a10905"],["/post/61312.html","9f8d207630404bff37811b2602127339"],["/post/61738.html","713047db343145e036714a47e1f2e6c5"],["/post/61809.html","58ad186686790880f758947beb98355d"],["/post/61eaf19a.html","d5230505ad2bd52bd72d6a6b1710d2cd"],["/post/63002.html","d75d9b7ca00d144381624f6d1b8d96cd"],["/post/63711.html","4af4ef7bf016c5984657c7c58d2333fa"],["/post/6587.html","0a1d6bb60b0e040ff93b3e63150059ee"],["/post/6589.html","7d6b25dc32927b095558183ea7b4526e"],["/post/6880.html","6462094189277ec9da60cf582481f028"],["/post/70263071.html","b5d54ec01bd75216ac509f400825072c"],["/post/71038564.html","40425a280778d061b81d940af66c7faa"],["/post/7119.html","193f3305714e2098a5867dcda21e48d4"],["/post/74e7fdff.html","27840cefd2c321f3bae03bf1863f48ce"],["/post/7502.html","83c1e86aa07d5819ce931862a1909336"],["/post/7564.html","5ff6722960632e857bfce4b28175407f"],["/post/766f9b60.html","6addb1856775ece1d2c5de0624e90a57"],["/post/7ca31f7.html","06de07e180a0748d6bc9f68fe41d351e"],["/post/7d1c86da.html","c2fbb4ed79c4f9617eb79c50044c3cd0"],["/post/7f3bcd7f.html","0eb42eb414782ef8ec21032d21d461c6"],["/post/8039.html","82625472ac8b53de89a1fbe9288c92f3"],["/post/8050.html","bc9214e2dfb0a5d5746c7ad37e1df3e3"],["/post/8072.html","9ae52441103cb796decd6a7777edb3ca"],["/post/8274.html","57d0e506ca486ced1230e4fe6e94f64d"],["/post/8372.html","f5644e4a79266835ed39b9782cfedc52"],["/post/8498.html","715bd1f27e5a904d470bb5c6d1007205"],["/post/85b4e13b.html","c136eeeb3ed69b782d509c07253121cf"],["/post/912b2566.html","0fe833b230aea31e0f8aa6847967a069"],["/post/9187.html","5881283b857723df2e70322ffa08fe25"],["/post/9197.html","1ca95ce1700e5e1d86bdc3849bb295d4"],["/post/94ceb2fd.html","5d83238b174b8bc2645a86e8e6d59810"],["/post/95495db.html","e4e4415f3c04801d416d4f58d848235c"],["/post/97246020.html","c55bff139dd714006e9094192b1ca71a"],["/post/9954ba8e.html","ba8a161c5eff675084bcd135f134c4ae"],["/post/a3a786d6.html","3a5d746674efc27eb535148e112e7a5f"],["/post/a444b428.html","465abb263a68d9cef2e976863f3e4fe7"],["/post/a50b8908.html","4bc437298802f094eda35628b555120e"],["/post/aa1eade8.html","716d376ce1ce05d849e84fec9cea8f43"],["/post/ade8c6d6.html","6fe8fcd66e465433822cf48d40624f97"],["/post/ae8362df.html","a112d36d69feab534ad54fa6921315be"],["/post/b4c1d206.html","347de8787083355ed8230e72d0a06c09"],["/post/d213fc7f.html","fd8aceeeb45ccdbc1e0f55d769cc6cea"],["/post/d431fab4.html","0dc5c036edd6e51dfd568836787a75c4"],["/post/d5381517.html","fd9d72f2d8fadce7feeb2f97b019e8b0"],["/post/e058ffd8.html","8302e070439381cfe089dbea9438d8cd"],["/post/e0f8cb74.html","eb9bbbb7c665a2a4c8e2ca986aaa0f61"],["/post/eefe591f.html","877fa590a6262f3e91dedc13da6dc464"],["/post/ef296a07.html","aed47ddfa6ee3e8f3cef14905b6acbc7"],["/post/f201f9fd.html","5602745c1860acd7cce01ac83753a5ca"],["/post/f79e4123.html","8fd59f7af155d3a972d2d94c59781eba"],["/post/f8648a1d.html","d68cede565d808a7aa2e4d72a39b0f7f"],["/post/f89cb603.html","6ad703b5accf93991a1eefbd467cae77"],["/post/fa288682.html","78fbd59a01beb533aa65ae48c00684bd"],["/post/fb98053e.html","7b0f665e380eadaafaa34cf2b2b5ffc7"],["/sw-register.js","c1a92320a02d061c7093a4e229439782"],["/tags/AT-T/index.html","4831132b7d2067c2f3f7c37f58b29192"],["/tags/index.html","b0d4eaee6246cd371e0814065c619374"],["/tags/动态规划/index.html","b231dd4183075cc5d9aff8a09e444ae7"],["/tags/字符串/index.html","a7cd041f0809a63d6f4b8f69bbbff4e8"],["/tags/字符常量/index.html","9a8e99c8639f9186bc495d7747a8620f"],["/tags/快排/index.html","5b8cba3d79d6243f7ad37bd7c43b9d56"],["/tags/排序/index.html","7a11b05b28e8b2cb59789cebd55dea76"]];
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
