/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","8e0ad172e88effc86d87cae84014d331"],["/archives/2019/index.html","17246f08655bf60180950a0f1f301bb4"],["/archives/2020/01/index.html","fc3fe9c198b527ab845d9063dcc77ce6"],["/archives/2020/01/page/2/index.html","15fc8bb1e359ce02609fbec53f333979"],["/archives/2020/01/page/3/index.html","04b84e767573a2852bb3b817cbc9f4fb"],["/archives/2020/01/page/4/index.html","be0a26899be45d2a9ba2fd47812c48a9"],["/archives/2020/01/page/5/index.html","d4ff9ba6bbc561efc2393426a0c8fcf1"],["/archives/2020/01/page/6/index.html","dd3b8a2dc2150644113cff959826bdf8"],["/archives/2020/02/index.html","5817807bd0e08ed247ea8921bba636c5"],["/archives/2020/02/page/2/index.html","ef891a5a27f1c85afc1723f24d580204"],["/archives/2020/02/page/3/index.html","c5e2938db0b44c9b3f8b7f3ce993995e"],["/archives/2020/03/index.html","d388661c3fd228701c937205f1110110"],["/archives/2020/03/page/2/index.html","1f25757e8c6742a01be038aec69c9b0e"],["/archives/2020/04/index.html","aeac133ee9469e7ed1178a13e46b50fa"],["/archives/2020/04/page/2/index.html","49253c05136759674950a7e1b3369777"],["/archives/2020/05/index.html","31b1f222d45dffda3477d9472a6e45e7"],["/archives/2020/05/page/2/index.html","f61af13cf17282468fcf626fe46b8204"],["/archives/2020/06/index.html","3054b009cd450168b918f0722b565c31"],["/archives/2020/07/index.html","11004ae7d5759c461fba92b1b52a690e"],["/archives/2020/07/page/2/index.html","e2332388a2893afbe165495f80e113bc"],["/archives/2020/08/index.html","d54e3b4650828d7fbed6851159f8bf23"],["/archives/2020/10/index.html","d76b75ea7e16176a904500fb51a26c57"],["/archives/2020/11/index.html","ccd8af3452f25ad50e7ff35e9c67b119"],["/archives/2020/12/index.html","8ff519acf2facce7cc6a129dfeeade5f"],["/archives/2020/index.html","5ce06b3f354fbcfb07a3375559698cf9"],["/archives/2020/page/10/index.html","d7ee645044b1b8d5fc57b2fec647259b"],["/archives/2020/page/11/index.html","cbb5601624cf8c231eac11417dc996f0"],["/archives/2020/page/12/index.html","c8f787681bc6ba8b2e6f26194fe5c90b"],["/archives/2020/page/13/index.html","72cf7056a24eac7568c3aa1f492a720a"],["/archives/2020/page/14/index.html","144573a671dd542d8247e4b91b252c2c"],["/archives/2020/page/15/index.html","a3cb912332023504b87f51b2e3a23a61"],["/archives/2020/page/16/index.html","315e81a4292d3da948cdfdb5bac1371f"],["/archives/2020/page/2/index.html","453eaedb723db50d7fa8c0c4e8860cc6"],["/archives/2020/page/3/index.html","167d5e576c647543e1d35d46ce94ce30"],["/archives/2020/page/4/index.html","71ec84c539eee26c4ca2a74ad0532ea5"],["/archives/2020/page/5/index.html","d3d136f2669f487eb40468240e24d7e2"],["/archives/2020/page/6/index.html","7da7340c4d31c352750dd7ba1c00893b"],["/archives/2020/page/7/index.html","b2681590d678cb698775080670d67aa4"],["/archives/2020/page/8/index.html","74e89e081013268d5c9d7efe36aa737f"],["/archives/2020/page/9/index.html","fc77cbb8a5cba81ae374f17ef666aa4a"],["/archives/2021/01/index.html","bfad1a0679bad77e908608935f8cb1da"],["/archives/2021/02/index.html","5676737998f0738db736572f3b6ac20c"],["/archives/2021/index.html","5477e283ffcf35ded9f8f7c55d57db56"],["/archives/index.html","db0eb84da86905b77047e07ea6a231f2"],["/archives/page/10/index.html","002d7f3bdc83e275eac7882b630593ed"],["/archives/page/11/index.html","7f50d026ff29090d1e7e36e5c57f7e5f"],["/archives/page/12/index.html","bc4f581cadea94cb9a024ed817444dc3"],["/archives/page/13/index.html","26d017e180257adcac1212b6d4a7a5c3"],["/archives/page/14/index.html","8b8b430a42800e596a4e4ca201bde69e"],["/archives/page/15/index.html","94321270667b5167b1e4035b7fafff5e"],["/archives/page/16/index.html","1fce03aac5bdc081d52873c7c90a2650"],["/archives/page/17/index.html","fdb757ff5837893b6120955c057a046a"],["/archives/page/2/index.html","f748daa14b3b76eba01def0d66e5ced5"],["/archives/page/3/index.html","3acbe537e47fdc637a04649a4dcaf2bd"],["/archives/page/4/index.html","658780483e9663638b629202148ba805"],["/archives/page/5/index.html","c511b00be5c619c36cccecef408bfa52"],["/archives/page/6/index.html","4bc4a0c5452abb10e487566878d846be"],["/archives/page/7/index.html","48ea47c8853a7c1563415372d635cff1"],["/archives/page/8/index.html","900a4ab2968d706d3b86b124892746fb"],["/archives/page/9/index.html","62ec7708d9d5f3132185d5073472396d"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","dfb45daf5607be562b5a47b42c5f0acb"],["/categories/Linux/page/2/index.html","282f7b0dfbd20dc23af0ed823f06fa37"],["/categories/MySQL/index.html","e5d18a49c7142136d2b73dc2be553dbb"],["/categories/Python/index.html","5c3de5f8588000f2945309848bb2fb23"],["/categories/c/index.html","42bd94a714875e2ee3aa72e9ae5f700f"],["/categories/index.html","1e991e7f11a9067fd0b05106bc348c89"],["/categories/java/index.html","83b3fc2a5034f136715d8652aa2e7543"],["/categories/java/page/2/index.html","497c307e265358f77f8e8bb9dfb2f9bd"],["/categories/java/page/3/index.html","ab7774d4b557a1ed6aa70f399047da8f"],["/categories/next/index.html","42b5096d9601f44a15b1fe41880fd568"],["/categories/stl/index.html","644bf6e7322db297f60a19d0c7cf2e59"],["/categories/windows/index.html","bc2c8e0568e0cfad671682d8e95e05d0"],["/categories/基础/c/index.html","f68a80cc0a8a104eff82ee739e325f69"],["/categories/基础/index.html","c9bda2a43199a4d405bde7dbb077b11f"],["/categories/基础/page/2/index.html","aa11f200e677a957a06fe6ca56e74bad"],["/categories/数学/index.html","31371680fd28343c77b2cd87eb4018ed"],["/categories/数学/概率论/index.html","7bfbb31726efe61e8aeeb00ca67405d5"],["/categories/数据结构/index.html","757a7be188f651041b6b966ccc317f38"],["/categories/数据结构/算法/index.html","ae81d367d792a9b67708d48bdd9aa36b"],["/categories/机器学习/index.html","46b243b6e004e83b93579df81c0b0e37"],["/categories/杂项/index.html","aca1527feb002a63065c7ceafa4d63bf"],["/categories/汇编/AT-T/index.html","0260f7d5a706e1dd3acfc2dff4a3d312"],["/categories/汇编/index.html","0194c8bedd3abdb0143d9a3694c4dc17"],["/categories/汇编/page/2/index.html","825bc2bec48b1c47bb07e7cf2e6a78fe"],["/categories/汇编/page/3/index.html","73f98efe7ec2764f85212544cd7ce3cd"],["/categories/算法/index.html","ce466856e0238ef22db535fc1b657472"],["/categories/算法/page/2/index.html","56f08867c8ee77d522cd63cc32cd5537"],["/categories/算法/page/3/index.html","85a067b3fb47e3f10d2e2b3a8ed8e864"],["/categories/网络/index.html","7c2cfff4e69b80b7ca8cdffcfb7ca716"],["/categories/计算机系统基础/index.html","6cf59d1717f65e82fca31e777de420a4"],["/categories/计算机系统基础/page/2/index.html","8dee2bcfbd27d7eb88c9de14e8a3b55b"],["/categories/逆向/index.html","38fc34aa341cf6b5934022cd61e44a30"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","0721f23792a2cdb2c263a260174155bd"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/HTTP1.jpg","30e1bea7769f2cec34130f180904cf65"],["/images/PE文件1.jpg","9f673b828bd69f07e1a3c646ecd4367c"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-18.png","cce6a9fc89b75002037e9584d7fac5ea"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/字符串匹配2.png","a2178ecdbd4061940f57c5ad7a3d3a29"],["/images/字符串匹配3.jpg","62ad48f6df4067ac8ba78fae289aec41"],["/images/应用层与HTTP协议3.jpg","9f8dd77e70aa4f6ceb5f6ff52999486c"],["/images/应用层与HTTP协议4.jpg","2d79dee035b8a557b74c312cb88790b7"],["/images/应用层与HTTP协议5.gif","a669d1cf7e5033dd80ff8544273c0f1d"],["/images/应用层与HTTP协议6.jpg","b7dc39f7cc8f5e8fce7625aaf9639726"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/引用层与HTTP协议2.png","87559bf7ba74bffe37c156d4ac8173ec"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/网络层1.jpg","1d4233d4673b7f420ad697652807a1c4"],["/images/网络层2.png","43ea2f9a0123b16603fda74fe7a129e8"],["/images/网络层3.jpg","cc17d38c80d7e7d2b330af541458d8c4"],["/images/网络层5.jpg","fefce8be7f2ebbac1c7972af1c14edad"],["/images/网络层6.jpg","bed91d30f37c2febf4fd09c2d4b8b2cb"],["/images/网络层7.jpg","4bce5f4cba4e1703e36b6d12fd649574"],["/images/网络层8.jpg","84ba3d5cd61aea680cf20fa55d0cdedd"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/计算机系统基础实验1.jpg","0147708dd9da4c97b8cc09237455911d"],["/images/计算机系统基础实验2.png","ae9ec4342c4f99e604c3d82f5db49734"],["/images/运输层.jpg","5b0a17debdd2b880203ee18d4779c5ad"],["/images/运输层3.jpg","b9a70cc24bc81ccf9f94770936a7dd50"],["/images/运输层4.jpg","67b41ea674abb2d6d422639593c0acbd"],["/images/运输层5.jpg","570ddaa64331a62f84e97fd6dc96d15a"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","2c8b6289a84939a8a95632e2f9786c6a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","0e3093988addf058328246cdd6e91a67"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ce95603624a013fff56508abcfe35000"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","9345eabc78a7f5ba7666238d71db6edf"],["/page/11/index.html","e0f3eb455aa881b2d5881c3aa3e2289f"],["/page/12/index.html","4dc2a490001af0f2bd3261f9796d88fe"],["/page/13/index.html","9056d42bcd7047cb90dfda51fbdc08fe"],["/page/14/index.html","d17ff99b2c1eba267667b35c6291e1e8"],["/page/15/index.html","0335b112095050c4f3de253eff33d8ce"],["/page/16/index.html","0b190be81b8622d5d7be33a156bae1dc"],["/page/17/index.html","d0cad299e73ebc910018378fb80e8c63"],["/page/2/index.html","3a48708c81fb23caed5e3234db3eaf43"],["/page/3/index.html","42822733cf8622fc13a3a35e3b98ba17"],["/page/4/index.html","fffbf6d513085a24d8b7e57e6c896453"],["/page/5/index.html","095805f5877dd00cd62f3d741da8347f"],["/page/6/index.html","bc554b1157fefa00ea0c34a3c7ca4b10"],["/page/7/index.html","0b65f56655b19728651adfefb800390e"],["/page/8/index.html","8293fec6ca77bf21452a18b72f47cede"],["/page/9/index.html","d1a40de330f7db44ed3bf9734be9401e"],["/post/10919.html","4e4fb7bc6409890539a304b89a57fe18"],["/post/11051.html","65ca6ac26d1ce10640a6bf9494d21fd1"],["/post/11306.html","c571a3f43532fa2d832f9f85e9d16a7d"],["/post/11491.html","c39556cc6d4477a56201a112a5341d0f"],["/post/11799.html","eae057ac0b625a8e6155ab68dc80b160"],["/post/12334.html","e38c8a357d5abc29ad2106bcd68986a9"],["/post/1326.html","facc8fed75801171fa379b05ac020f35"],["/post/14379.html","c7fd7abd43fedd2263a18ba3135edca7"],["/post/14511.html","f0e9600d9a2aa8eaa7d6f403f2661c66"],["/post/15201.html","f3a8c7f9311d559e37a11a5bfd0a86b6"],["/post/15425.html","b7bf375f9aed8d4ed9b591a3b8844895"],["/post/16107.html","8c2882733e79edb93d5a2dc49997b8c6"],["/post/16e2846c.html","4ad6681ab641864af269dace52dd8f2a"],["/post/17862176.html","c7e09636e6bab28da1316d44e5cbb7d0"],["/post/18431.html","762623aa6465bf381668816ed6fb2ed2"],["/post/18912.html","6682a478a4efc44279a076f3b47ae42e"],["/post/1b9c8662.html","5a14c6c7a226e7ae2ca03c99b7fda39d"],["/post/20198.html","dc617c81cb26689788dcb4becc54c328"],["/post/20ff5ccb.html","98111b3002330fe61959b79f3bb65b12"],["/post/21624.html","1ccc2bc0569680ddcc4d0b752052a1d2"],["/post/2170659a.html","de963d86d64f1338c597dcd62020b2a1"],["/post/22102.html","a50b624b28c5bb4107512c4f2972da98"],["/post/22493.html","89f3edda74c2a877b0c113b57dfe7d99"],["/post/235252ea.html","2b5851146fd89f1b7238e07ae281dac5"],["/post/25699.html","e5454ae384868d46e44929f133dec542"],["/post/2647.html","f5748e563a2864bb62ae410cd8ccaa70"],["/post/26477.html","0e2fa6dbe037611f0e51496fd85dd283"],["/post/26671.html","9fab465eb8d1bf252fd983da054c013e"],["/post/26737.html","adac1f4dc0e60bdffe179229f3f917a5"],["/post/27045.html","bf589de38e6992b4ba9e88165f32c999"],["/post/27621.html","441f5974b94a2b02c4f0cb8bfed38591"],["/post/27890.html","fd2a5044120a45cc468a3bb229de1518"],["/post/27980.html","317585d340d26c71081489b6671c019d"],["/post/280b588e.html","804efb49596bd4f4e6815e2ec172a9d0"],["/post/28579.html","a15c16748e5a3786d476bbb7aa9e9f51"],["/post/28877bf.html","0af35c781a45bad67ddb23a960818cbf"],["/post/28954.html","6379a067cae5f574f57fc31aefbc9246"],["/post/29378.html","7136250f3d66d26121819924bb22a879"],["/post/29949.html","b268a94c02794be77b702acc68a556ba"],["/post/2ae43b86.html","5cde3b790023e961ba799e5777c5b3c4"],["/post/2ba82a45.html","e5f40e20183f31298f34b008e075136b"],["/post/2cad8b04.html","8a1361600d7b338a1e0568864d7eeb6e"],["/post/30072.html","bccae40e883a89ae98ecffaafaf015bc"],["/post/30479.html","414d4762861007e6a971fe6da0e56dcb"],["/post/31a6b40.html","e3b0f8944b463811c65d3d7692d417e0"],["/post/325cdbf2.html","4c82a45599929c1d8ddf13de43d4eda6"],["/post/3319ed9a.html","6911013170eccdf4d4d74577e40e99e8"],["/post/3320.html","5d67daebae23698691f78a79b6b863b2"],["/post/33cb1151.html","57720ab47cf32aab5bb18469fb6f95af"],["/post/34811d5f.html","606079a5e96faa01d49cea0603809379"],["/post/348d4e04.html","965d1387a01e4983d1f884c140b56a33"],["/post/3526.html","7aa5dd5b7bf52ba1c027def074df431d"],["/post/35532.html","33bd882eff5a973a0a912f1ecfcf1983"],["/post/35848.html","26475b3afd2e01f89a20c628f3954207"],["/post/37318.html","2c149cbbdd6dcbdf896043b648287c5c"],["/post/37663.html","6dcac994b38210c4a7e23607c7ca086c"],["/post/38035.html","d8ea7104425d61b5c5ad69d66971804c"],["/post/38072.html","eff05b0984c99f01c64c22e05de4bf89"],["/post/38145.html","e49af2adbbea895e40cc980fde7d6e47"],["/post/39968.html","cdfdd496bc6ee35e4d1fb5c3cace82ad"],["/post/3de4bc69.html","38dc21ff5980b13074f6fa8763e003bd"],["/post/40583.html","0257e155ed1926a748fb808b12cceb11"],["/post/40997091.html","b8b6a746a8658e64eff0fe03cbda4917"],["/post/41129.html","565b314fce9ab10b67468471a6b6ce4a"],["/post/41763.html","11b6f0dff32eea249652ec6aa0c67dbc"],["/post/41829.html","09b9a5b790c40913f76303faf106af31"],["/post/41840.html","5cca1e676c0b6c924358e67a00049999"],["/post/41e39f2b.html","c2a56d32de808227207fc6af9288d1ef"],["/post/43817.html","8ed09e86a188e6fd2ee7151aa4cb24bf"],["/post/43878.html","b63cce3d8ba2ff9020c8b4920505e426"],["/post/44250.html","4eefbc82172d3b5c7ee4556e7d7941c4"],["/post/44336.html","eb87ad8748947562a654c4f7ec3b1f3d"],["/post/44454.html","157a22b1f985ed2e8a6e2ad48d252dc9"],["/post/44487.html","9339359882da0500ee42d0763d0765d8"],["/post/44914.html","3ebdebfe437b4abc5c155db478aca08a"],["/post/4551c130.html","ac8ae1d83217a8bd7db918e99c190007"],["/post/455a4c92.html","562844541060a6512bb0619822b72e68"],["/post/46466.html","c167e8f79ff87496d729781292e21b35"],["/post/46925.html","ae68b3567cbf406107e7a24d3ee21e03"],["/post/47075.html","e271e11484a7e8efeb36fb8a9b7fb0df"],["/post/48220.html","97a672ff1e1abeaddb69807258006c0d"],["/post/4b1879e3.html","61c33764f71fc87688ed6276a8b31519"],["/post/4c720881.html","fb3903133799b82f499bfe179f451777"],["/post/50daec4.html","c0f4d4185ea67a0807f9829ce8541d30"],["/post/51491.html","6b6f343ac4bdc4cd6a789ed9054b2b63"],["/post/51e63dcf.html","d555fbb4d0b9961d42cb94fafa883f1a"],["/post/52078.html","93a19e499ab82bff21eb11015ab9f6d4"],["/post/53677394.html","14735bed3735cfa0302501b070c6e52f"],["/post/54300.html","b586556d26cd4ac2315327f7fd9f2c95"],["/post/54612.html","537d7121fa2168ce0156761345a9f1d1"],["/post/54613.html","2899053c3b40aee8105ad09022fb3e5d"],["/post/54708.html","9783b245bd3a7b33d8c026f1b0d7bc89"],["/post/54778.html","811a7163e6fe5c60bd03016df62e6f57"],["/post/5490.html","276959e82c2736681084a5bccbe895a1"],["/post/55046.html","ba86a028b90a22fe7c2d6ce7cce187ea"],["/post/56929.html","f80e0a7069bf1fd144d0df464d43e0c0"],["/post/57339.html","66cd3d4c218564264ab8424dd99c689c"],["/post/57449.html","520f2f203dc3e9dbf80c3143f47d0bfc"],["/post/57453.html","22ac3f507403e9a5f0e749e2fd2bec66"],["/post/57671.html","21dbb0d48a36216e7c65b7651106cf73"],["/post/58313.html","1c2f11f8fc61b1bdd1ff80e318a64567"],["/post/58481.html","59f1de76233e7a4ed2293dc32621ff21"],["/post/58986.html","d7e1c4e7dbc3e96f7491548d7edc8870"],["/post/59431.html","cb50f1eae16e7a99e9f44171c73180a9"],["/post/5951da65.html","abd5fdce22cf7b4136639cdab8f542a9"],["/post/5be7e977.html","1bafd64ac3952687c37b985ce4526717"],["/post/5f9e4eff.html","f6ec1fed73ffc0cf86637c120ed5611e"],["/post/604b49d0.html","8ea28c88315b0af19f9a40402a4ea132"],["/post/61312.html","73197575756a3be4275908b0466d1a11"],["/post/61738.html","f044a2ce6da72f1f74897cb8dbc56c6b"],["/post/61809.html","61439a8cf92d70cb4d9a551eb7a9cdbf"],["/post/61eaf19a.html","1f93ad8258c1f71d4a64bf5304637027"],["/post/63002.html","c00231f32c0df4dbd60a58e8d59d2161"],["/post/63711.html","8a97acb2a253113f96b6b27ded8e7b57"],["/post/6587.html","a091c9e91c1d5765b879f7a3721434b6"],["/post/6589.html","29d828f78567adda684dfdedbff75dee"],["/post/67454659.html","204e7e462387467d4725b8d1a1fd04f1"],["/post/6880.html","6d82fe9c4d0baedae29145340d9b3de1"],["/post/70263071.html","16beb2b21411a7e7c93a0f64a687d7e7"],["/post/71038564.html","9d37acc1e937cdb8a32b19e9b7aa52fe"],["/post/7119.html","266c3c934d94ccc0ed36ac8359cb637b"],["/post/74e7fdff.html","5a1b8a2cef7cddb32f40f0346a83df66"],["/post/7502.html","6532ae76f3d68e20d8b822e5d009d871"],["/post/7564.html","10a3caced186b8c177b538eed0359af8"],["/post/766f9b60.html","8d4df4e2e4d05c4be117752a05548a7a"],["/post/769365ef.html","b68a83839d1ab3cfe3258ac43cf13fe7"],["/post/7ca31f7.html","f0de86ce8d33a48bdc0e29dcc0367d09"],["/post/7d1c86da.html","f6939931ddf54bae3c5c118d5c7cd29e"],["/post/7f3bcd7f.html","e73bcafd343ff24ba3a60f6dd46e6044"],["/post/8039.html","10c9885f783c3a07511dd73673ff78dd"],["/post/8050.html","529af91b34cea60e9edfb54dcc6259c4"],["/post/8072.html","11b94b497aeb9b16d8f3aa2f2385e70d"],["/post/8274.html","50ec6e0136dac002847f2f1791f74f5c"],["/post/8372.html","1891f10185ff9ee46528c6b96dbd12f9"],["/post/8498.html","976ce6caad18c5fa6878b00131f9b60b"],["/post/85b4e13b.html","abd524edf21e090f675b092c5a66ae3a"],["/post/912b2566.html","17f7b2a0dd45e3cffc4f8c78765fade7"],["/post/9187.html","5d42667f8759fb06e13d8850d38eeb6d"],["/post/9197.html","79d6b81817785e35f4347f973a5d4c10"],["/post/94ceb2fd.html","54093cc0f5789be198c39cf6f2601d15"],["/post/95495db.html","55a0a929fa257a5af2b5f6fb9b990ac7"],["/post/97246020.html","699a162824dcdfcf34535fc1547351aa"],["/post/9954ba8e.html","835b6e50eefa06357328f0b3c889781d"],["/post/9d855db5.html","78a9f84801416f69f1924740c2591c7c"],["/post/a3a786d6.html","059c039f19b727fa1562e7d82bf97317"],["/post/a444b428.html","92a5003a561f91f9757e63fcfa5daf31"],["/post/a50b8908.html","a7262065b21a83610239678d6e3d956b"],["/post/aa1eade8.html","ffe64f86f957f50bd5987a830a36097f"],["/post/ade8c6d6.html","26f78278aded4e76b4daac1db881c052"],["/post/ae8362df.html","ee492e69f5781cb6424a6004546ed32c"],["/post/af3eed3c.html","c3e47ba8fb10eec11b88b7bdd6ae208a"],["/post/b4c1d206.html","00a79ef3f3448d16172a9ed0468ecd45"],["/post/c82a1c99.html","dd35fccf00683241bcf31c07218bb840"],["/post/d213fc7f.html","904049916b0e0d9e80fedf336ef2554a"],["/post/d431fab4.html","dc808db037df4a13dd5cdaab4f0ca95a"],["/post/d5381517.html","58941d5ec9ccf67beb0904b778d0683d"],["/post/d94f88de.html","a6fe05211f90b4d73b540c43aca4ba77"],["/post/e058ffd8.html","0ffd59a65d7e1a48ded089839acedb61"],["/post/e0f8cb74.html","be34a9c590913c2854082d14223067e6"],["/post/eefe591f.html","92f2a38ead4db9ce420e952c02a2fdfa"],["/post/ef296a07.html","d0b48bec9a43c23f30c00967d4d4e4f8"],["/post/ef3a3fcc.html","2b1f76ee5c9324cc9d0032161385afee"],["/post/f201f9fd.html","b9148523a6873f4a5080b5f66966cec2"],["/post/f79e4123.html","ca4b41f42a5801e2a86872bad64314c1"],["/post/f8648a1d.html","e9223cbfe890a5c0dd488df0bb35e9d0"],["/post/f89cb603.html","eb7e149ac29d6c6deeb5198be52d8984"],["/post/fa288682.html","b6623dbdb4c67f116799604559ad1167"],["/post/fb98053e.html","8cb40c810885a3484be9a675bca6538e"],["/sw-register.js","9ba23fd0215a64b9c4db704ffd042eec"],["/tags/AT-T/index.html","e9d0b5164ebbcffd10a0133b3ad04da6"],["/tags/index.html","6a8f97e4eda2278b748cfe9a44755fb0"],["/tags/动态规划/index.html","c348250d4d0c5d32593f5dde53cfee9f"],["/tags/字符串/index.html","d3d42a4a40b0530da75f83cbd17f71b7"],["/tags/字符常量/index.html","f65c4d3dbd53db76242e1496e0a7c9f2"],["/tags/快排/index.html","ac0cd7cef134ace2236141281924a20a"],["/tags/排序/index.html","990a29ddb651480750f2779e2f857076"]];
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
