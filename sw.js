/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","6b592dee31c04c8d96c27e230d52c0d1"],["/archives/2019/index.html","1c71e782b2961eeeafbdbcdb8887083a"],["/archives/2020/01/index.html","7743ad48d23e066fe36bd60b3642aa04"],["/archives/2020/01/page/2/index.html","d42d5840311639550651fb6fe3f13829"],["/archives/2020/01/page/3/index.html","7cfead591a25f25441a6facc740525f5"],["/archives/2020/01/page/4/index.html","4e02bc5bdfc407eeb192f319c6c982c8"],["/archives/2020/01/page/5/index.html","031c9693f158f2d7dc12d76bce755a2f"],["/archives/2020/01/page/6/index.html","d6cf19a5e6a32e81c475675fd5668f8b"],["/archives/2020/02/index.html","a0ee3522752a60dc57aea5ac6e1e34d9"],["/archives/2020/02/page/2/index.html","c5c6150a37864e2f3e5d8404866b1051"],["/archives/2020/02/page/3/index.html","9419c761b6aa754b311e24e0e9ec99a5"],["/archives/2020/03/index.html","54b6ae697b1b74efcb7f5073d1054187"],["/archives/2020/03/page/2/index.html","4a00da1cbb457c0f3734e4d0598e3ec8"],["/archives/2020/04/index.html","9855bbb9e5df7dc8212f0aad63b0cb8e"],["/archives/2020/04/page/2/index.html","901c9be98601b80d33f985ee564684e9"],["/archives/2020/05/index.html","950e8df01e2d3d5c7a9faff7cede1530"],["/archives/2020/05/page/2/index.html","f3362b4925f7b0e367732e22b952882a"],["/archives/2020/06/index.html","be5a4f54c685efe6b57172ac77966e18"],["/archives/2020/07/index.html","f7ff5de67ca2373669adc6aa45ae4e77"],["/archives/2020/07/page/2/index.html","4fbf72a9f2caf408e0a8df29b64b1d0e"],["/archives/2020/08/index.html","a2dbdbbf252a994dd788a8ac031a4aae"],["/archives/2020/10/index.html","59108365065738b222e080000356e2a7"],["/archives/2020/11/index.html","1290f7c2d03da5d4470a06bc4ebe66f1"],["/archives/2020/12/index.html","095dceba07f8136d9b9666eac37253a3"],["/archives/2020/index.html","515cccf2186bd98886545cf411534180"],["/archives/2020/page/10/index.html","10514d4f0d3f6f4366a4269555890956"],["/archives/2020/page/11/index.html","6392af6751b685ee18e0a46f75fe082f"],["/archives/2020/page/12/index.html","9d2f4af2176957e1e50afb3f579f3135"],["/archives/2020/page/13/index.html","6fb5c4386442d6a9279fcc714de4a69f"],["/archives/2020/page/14/index.html","01a1686d724a2e8f1fcac5ee797e421f"],["/archives/2020/page/15/index.html","7eaedef1e35c58903e2901101d264edb"],["/archives/2020/page/16/index.html","8aa043dc3ef6f5ae9340721a11a3392f"],["/archives/2020/page/2/index.html","932af805dc556f1201d75b955d170ad6"],["/archives/2020/page/3/index.html","039a18c58e26d41996899e151192c450"],["/archives/2020/page/4/index.html","d2dec009752ea04a482d5541a66ee8c2"],["/archives/2020/page/5/index.html","8fa2ea36f28624a6845104ed077fab7e"],["/archives/2020/page/6/index.html","7747d4c0d70961703311fa629fdbf8ef"],["/archives/2020/page/7/index.html","2964105ede6b4850ba8536cfa33cc2aa"],["/archives/2020/page/8/index.html","205e812da1cec89e9a60ea7717739785"],["/archives/2020/page/9/index.html","770b7a822149ee2f43291b6c2d153d9b"],["/archives/index.html","f540b3f9488aa702ad77f7f118283fd7"],["/archives/page/10/index.html","6c3f57bf6969ce02a27b608d9321af1c"],["/archives/page/11/index.html","86ffcd047638101950b902737b8f9239"],["/archives/page/12/index.html","978d0e73e364a61cc84660f70aa2bbae"],["/archives/page/13/index.html","e79b42ce43085f686b4e83c258234af4"],["/archives/page/14/index.html","4da64db8cd5db456133bd6de40432472"],["/archives/page/15/index.html","eccef68dd7f287195357b4010e416091"],["/archives/page/16/index.html","4637eea429ce670ef1099c8f3349ee86"],["/archives/page/2/index.html","9c38460ba3b3dd62eb041ce517137de4"],["/archives/page/3/index.html","3787d3a1f211e90234a89cb0eff86fe1"],["/archives/page/4/index.html","d44f9da1415475c91210026b7c1aaead"],["/archives/page/5/index.html","416f54af7816c3c5c556d121b6be50b5"],["/archives/page/6/index.html","4677605da475ae5726e95f4a439f4ac8"],["/archives/page/7/index.html","34212abfae3eeaf85595086072585a0b"],["/archives/page/8/index.html","bb6860f93b5485db55e47e94faebaa7c"],["/archives/page/9/index.html","64c46aaf46fdbd5b1cb1750c82f4fedb"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","e521767c2181ca3120a865b40c18d6ed"],["/categories/Linux/page/2/index.html","32869fbbd27f22dca5a1c15f8912d8c5"],["/categories/Python/index.html","8776e3d026f609d2fc7075aeca989807"],["/categories/c/index.html","c15d75d8fab699d68f5327517879c306"],["/categories/index.html","5fb7d3cc8a61b11f4286c96f6086c38e"],["/categories/java/index.html","f15c81e1be9f85d49317e614b8ec27a9"],["/categories/java/page/2/index.html","90aeeffba1d6881214b105d83448964a"],["/categories/java/page/3/index.html","a76728c7fe35885d15e8c1036d66708e"],["/categories/next/index.html","178268a113e3c00e31ff57f8007998d4"],["/categories/stl/index.html","ba490538fbba96f82f3f72589817caf1"],["/categories/windows/index.html","5d586a2263fd968fea400a31ef00904f"],["/categories/基础/c/index.html","7cf090a4d68ae046f149b8d016fd49ca"],["/categories/基础/index.html","39ba6c18f74449697d71d9fca112210c"],["/categories/基础/page/2/index.html","a523e1e3e2754eaec2d879d5709e7180"],["/categories/数学/index.html","a89fee6ef7acc5388d718a1a3db41ba8"],["/categories/数学/概率论/index.html","b4cce6f36fc3b72cb4f68bc9bd8629cb"],["/categories/数据结构/index.html","0d818d782ed2125ac797db6b983c9830"],["/categories/数据结构/算法/index.html","491f9dae0ca8301c8417648a9d60a863"],["/categories/机器学习/index.html","51153c586d37c147bba9eaec2c9235e4"],["/categories/杂项/index.html","5c3aa11e7564bade9e1560265fcfa49d"],["/categories/汇编/AT-T/index.html","e71d3856370b31088dc367a58da99d76"],["/categories/汇编/index.html","923ba32afc32013529f8b3cecc29ab74"],["/categories/汇编/page/2/index.html","c6173c8d8cc056670bb31de1718244b6"],["/categories/汇编/page/3/index.html","f210141b7b68d855e9d4537d7dd69bda"],["/categories/算法/index.html","82260163f5f3f90323b7111bd87248e8"],["/categories/算法/page/2/index.html","97768ad566d6f08be0aa047b0de03d6d"],["/categories/算法/page/3/index.html","417042e951c6f19e3f8d8c10688309f7"],["/categories/计算机系统基础/index.html","d462941af588ae2894280cf32f67d65a"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","65a11a6ab1423dc99be26e560d101696"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","500bbc92033507eba9e9b9943054848f"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","c639bd4fe0a3f3a3fdebea125f4b2700"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","1d9c0ccd6aaa391cab4805568ca60a36"],["/page/11/index.html","f7ddbb1dae7bd374edb932027fe49be0"],["/page/12/index.html","b8f97ad1dc83195257f6db8f5ca6b2cc"],["/page/13/index.html","3afd6ba80289d247c48aac6f45cf7530"],["/page/14/index.html","ba551205f708d01bb44b6b9131475647"],["/page/15/index.html","852f5cb0d1d8d1bd40cc2dd611f745cd"],["/page/16/index.html","10155c33dd601c3af42d3221ea08213b"],["/page/2/index.html","64eb2bda6db6da14549b9c07f9a57809"],["/page/3/index.html","9a74e825930b41d10473edc1a0c2e058"],["/page/4/index.html","3ff2f5758a8d01843ad3d1cfdf8bc053"],["/page/5/index.html","07b802fac64fee08e5f03aff51dc41ba"],["/page/6/index.html","cbbecf42418d744a8b831fd6dc2b4a91"],["/page/7/index.html","959195fa4138ae93c687d94667d2f4d6"],["/page/8/index.html","766af9d7cf0938ae4cc2755638eee34e"],["/page/9/index.html","3888e02ac176a417d9bf495edf815ac0"],["/post/10919.html","30318368f9ff90ab4cf2298d8e7960ad"],["/post/11051.html","c1a92e9f9216891e4968c2913e51a289"],["/post/11306.html","95eb130dad7b1483d4ae6dfeb5b548a6"],["/post/11491.html","02165506a75ec1d6925a941080033c47"],["/post/11799.html","fbb35ff666e8d2c59d4adf2b234545b0"],["/post/12334.html","7f2b846e0ec97ac90c7204ae803c2d67"],["/post/1326.html","0fe49eb4f460d9a53dbd1f7459926998"],["/post/14379.html","ff9642739440e9ed6491beb42dcb596f"],["/post/14511.html","549fd8e2f71419ff83c38965dc63b5de"],["/post/15201.html","b6c7d4f260df33c17c00c9dc6c3553a1"],["/post/15425.html","d2031ca917a22f647037434ea6964c3d"],["/post/16107.html","c44f4101dea14012365d56a44fbb5212"],["/post/17862176.html","ee94eca35fa38ca4a4540b9fdea10687"],["/post/18431.html","13a4dbf9b42ea3788e260d68167528c7"],["/post/18912.html","a58082f98a74d83fc15cdee24c8fb367"],["/post/1b9c8662.html","479a51ffceb998124676fb0680243e63"],["/post/20198.html","4f127346a1b5922849831ddfb09e17c5"],["/post/20ff5ccb.html","52ad29d12aa46510b1c5c352cd8ce0c9"],["/post/21624.html","fa7dd1696a133ded63251847fa871037"],["/post/2170659a.html","1fe1cd481ec5f953887f20e4548de615"],["/post/22102.html","fa6a43f7ab6e7203649cb29e29b86b10"],["/post/22493.html","b7434e24b958b2eae9411f83670f971a"],["/post/235252ea.html","f5470009cb15d9af2afeba1c66f1619f"],["/post/25699.html","69b10790fcd18a717557b453f1ce40ec"],["/post/2647.html","d0e775071b963de7829d9e838821eee3"],["/post/26477.html","36698decb6a90ae2ed864cf6c371be91"],["/post/26671.html","a3039af12e78bdd0d9858b9325401d53"],["/post/26737.html","7bdf9d04313a6f5a7f72bac10060c1da"],["/post/27045.html","cce8ea6bde7c051b36a2a500e2b5f6a3"],["/post/27621.html","5e993afc4068ca9a03ef50be799d481d"],["/post/27890.html","482de255d041849582104a17b28e75d2"],["/post/27980.html","675404332916bfb29aa69aae3825d923"],["/post/280b588e.html","96beaee09831304a6e1a42dd1bac2c33"],["/post/28579.html","491ff134d3c5d1032412c15cd4612c22"],["/post/28877bf.html","f5193a97d166841859195ac56ac376ad"],["/post/28954.html","1ec4771c601d524a61f0dbebb33cf7bb"],["/post/29378.html","746f088992dc78a1a1036cb26e79ce97"],["/post/29949.html","e3f0bdb50f81de059dc38c84ced2bf7e"],["/post/2ae43b86.html","9b6a148490e0498bf98d0604512c5983"],["/post/2ba82a45.html","da972bb8a00692b7c667cab9eb91cf48"],["/post/30072.html","bd6594d27ae61b108aac3742eee8bd68"],["/post/30479.html","3fcaf218af6f9468199e76f8df600c93"],["/post/31a6b40.html","e1ba55c02497bfb992a66b7a42d88e2a"],["/post/325cdbf2.html","9259227a8f64fe01f9c7184598086f54"],["/post/3319ed9a.html","81a4ec957fd17f143cad848f49449cbf"],["/post/3320.html","0e7d3583c59af4c589c07755ac6a0e75"],["/post/33cb1151.html","8400b62df47d395d2f8a353953944df6"],["/post/34811d5f.html","32a0ed225cc8c98ff63d6ae601ed6993"],["/post/348d4e04.html","502a29a4cbadb8bdac1541164759304a"],["/post/3526.html","5656fde0177382d733d8d798b73fdbf7"],["/post/35532.html","f2336fa11f8789f7029013f8d96df2f3"],["/post/35848.html","929844ea32174d94e39bea7e84f48d4f"],["/post/37318.html","ceb0bc4a80b2baea9598d5f991ba1c32"],["/post/37663.html","c6befe06f7b5b4907e64da6c8add8239"],["/post/38035.html","8ca176406062d61de4f0db00b018ce21"],["/post/38072.html","c1fc4048ea2771d0d2e2e5bfe566d551"],["/post/38145.html","c9e11b034c464f98c7ecd7303e8f1e64"],["/post/39968.html","efca4e2f70fe6ce1ca029f121f8d9b49"],["/post/3de4bc69.html","122e87de947f75c2bb9c3e21a0b8ddb7"],["/post/40583.html","b8b2426f48b84f3a9b34c110199cebf6"],["/post/40997091.html","8176fee74f1d22ac6708ea10959ea54b"],["/post/41129.html","7fbc1c38276047bcbfadf6fb7854e10f"],["/post/41763.html","e127b98eaba34e399c3de452ac65e488"],["/post/41829.html","537c689b7eb93e1fc1e6cf9968aa3a31"],["/post/41840.html","32010d25ad6deb5ca6e8e4c007e23eab"],["/post/43817.html","90d0eded99413731f92e79ad27877884"],["/post/43878.html","637de2bfd010448fb43e6b585bb65277"],["/post/44250.html","0bbe60b061a9b7b656e220cb9dc3f9c1"],["/post/44336.html","ebc009a7cc54fcfdfddf8eaa8fbe693f"],["/post/44454.html","94e63384fc89114688344883b7e87454"],["/post/44487.html","f0e551ac328e4e9ef41d01622b952777"],["/post/44914.html","080a2544647adaab2f56dfe22d7a8089"],["/post/4551c130.html","2ea5a4363b2d6d317a05a4acd382c34b"],["/post/455a4c92.html","471aa5d2aad468458b9b731f3ec06884"],["/post/46466.html","7c334d09cbc92c5561454b2c724f2f55"],["/post/46925.html","6e24009e6c1ed21e67d6718beb9eef4f"],["/post/47075.html","1574d3045a93aaf46bc26fdb3971b29a"],["/post/48220.html","87b2a420b72cef988f90742563191923"],["/post/4b1879e3.html","16fc0122582f203d7f10a0fd079de982"],["/post/4c720881.html","8464f5726c68a88cd1951542e6b5c818"],["/post/50daec4.html","15d1a5640149e134b6799ba028c42f7a"],["/post/51491.html","3280dbcb03cc85915bce045d547f8015"],["/post/51e63dcf.html","abacadf5e349b23873879d6ec49d76c6"],["/post/52078.html","cc0df5a2e12f48bedc7d624225626682"],["/post/53677394.html","d0308730c74e4b01b756dabd6b34073e"],["/post/54300.html","62e8461013a8fc3603b9e619ddc5ade1"],["/post/54612.html","044bf5a34057045609ebe00778d08496"],["/post/54613.html","766600c6b7ae3de26c31174d7e61e587"],["/post/54708.html","4068eb801289b09b7933603b54b31321"],["/post/54778.html","c1a3d4aa70fb28e7efc01c21bbd3a72d"],["/post/5490.html","c60edf416005fcc00bad81825ac340c6"],["/post/55046.html","c26efac0dd17706adface59510aab279"],["/post/56929.html","ba70ef31623585d40f652f8cae17ca89"],["/post/57339.html","f50ec6e6119e49d287867348c73f1fac"],["/post/57449.html","9143ef4f77672512e7455eadf5b5586b"],["/post/57453.html","740398ca1844613bdff44f7051f13ae0"],["/post/57671.html","b8dca3d294811ce935f00404e118b610"],["/post/58313.html","b471694ff278d60510b0a0b10b2b466c"],["/post/58481.html","d9f4c3ae216d1de97f3e1f90638f5a57"],["/post/58986.html","342734c2a5675e5c3daa4fa75a2aa571"],["/post/59431.html","b575dae71373fdc68043a8dc0d933666"],["/post/5951da65.html","2d7d3bea014a991935025c4a1bbaf72e"],["/post/5be7e977.html","64ca98d5557de7d7b7662e027fe00b96"],["/post/5f9e4eff.html","c028f245fb8ac583caa7797e14eb982c"],["/post/604b49d0.html","383f71be02f7e330c52067dac79b6ad8"],["/post/61312.html","9fcad27df66020c7e30ce1d01c37e1ae"],["/post/61738.html","21251da399249abdd9c406d186dea5d6"],["/post/61809.html","c4c1193ebc3bd66e41afc7efd544edfe"],["/post/61eaf19a.html","aae1ffd50ad5f85e5ac5f9140c92c090"],["/post/63002.html","1a812240fabddfe2491d98befa8f8601"],["/post/63711.html","e2766f570dac5c0146538fce39e890c6"],["/post/6587.html","0bdf8a0a3f73acbaa6b9613b7db6ad81"],["/post/6589.html","021d3984ab076463119ea0d94ac86b77"],["/post/6880.html","bde65a6405a0cbf1063438145aac168e"],["/post/70263071.html","4baaf5437cc3789c5057e6a4dad21dbf"],["/post/71038564.html","5dcc1e5c11cf554388e45602b074b253"],["/post/7119.html","fda04238d6fbd2cc36b038d1b927e54a"],["/post/74e7fdff.html","7fe789705ff5394393897c855fdcde45"],["/post/7502.html","31d7d99930e2b0c12c0f3365d3b732b1"],["/post/7564.html","d87d0ea89a9fd2ab720ee41ba57a3bd5"],["/post/766f9b60.html","476129281e43277de38e787bcd432fab"],["/post/7ca31f7.html","2f9decf83ca147888f4967c29e84b99f"],["/post/7d1c86da.html","4619d0e581141fcf1ce4d7a1a56a1a5e"],["/post/7f3bcd7f.html","addd1a5da0c897a55f073c2a7c496bf3"],["/post/8039.html","2f302f7c26f62e90207d45b0757cb04f"],["/post/8050.html","3411cfe96bd86ed773d8689942fc91bf"],["/post/8072.html","d39d0e1cee8b1b55d830f3f2c99c53a9"],["/post/8274.html","59b7fc82e6ceae78d2a6b16e66ab97c3"],["/post/8372.html","2f795294b5db5b3f43c52abde15f318a"],["/post/8498.html","41c2e84f47e95c7c52ff626185ff771f"],["/post/85b4e13b.html","9121cfbfd9397a232a651ec72744bcaf"],["/post/912b2566.html","29a16393796a6088f09a3a6db9325226"],["/post/9187.html","76ed3ea38846efe841fa8ea099dc23d1"],["/post/9197.html","bd9f842ef5e90430db68877d51b0f31e"],["/post/94ceb2fd.html","f0e7e1db4f8e5791a53c0fa97a19568a"],["/post/95495db.html","574834af615cc4c5a7f9397f404a3756"],["/post/97246020.html","c939e70b9ada8ae108d4802e21e5461d"],["/post/a3a786d6.html","96dd8f58218ebf112deda3ddf7805486"],["/post/a444b428.html","64ad223de56d5ac523774d2ec3d5fb21"],["/post/a50b8908.html","a9e64debcec2ade4a18b39fec6597cb5"],["/post/aa1eade8.html","56764c1a06e48deba8c6b3da8fb6c01f"],["/post/ade8c6d6.html","1e42ac35d24089a312bda6fc469dc607"],["/post/ae8362df.html","bed97c097cd9377fbb072277abf6f0dd"],["/post/b4c1d206.html","1078f9a1acebd17c0cdb5a893c5bc87f"],["/post/d431fab4.html","3adb64955607440b473f9a7c4edaaf8a"],["/post/d5381517.html","00ecf340a431e38d76ba53b45093aa2e"],["/post/e058ffd8.html","d5822e276b2a6da04dd5a608b425f5a9"],["/post/e0f8cb74.html","f2c6d8a8aea73e043b9aa255b61a89f7"],["/post/eefe591f.html","9e676da81873bc0086801af47c3069b8"],["/post/ef296a07.html","06e206649a6ad1717d025a1ce10c8da1"],["/post/f201f9fd.html","e64e5ed37ff707a799573fbc8ddaf839"],["/post/f79e4123.html","7ca55711ac302c1d961cd9d37d04cf2a"],["/post/f8648a1d.html","ad9aeaf3078aa9cacf2cdecebc6d78d4"],["/post/f89cb603.html","e4c9d8c720d09bffe8e4634405745c3a"],["/post/fa288682.html","12a231f38a6cb1914803b45f11e51ceb"],["/post/fb98053e.html","329da908e0eca98be44ba5655240676f"],["/sw-register.js","5281e1562ebfa1f94cd383db18bede15"],["/tags/AT-T/index.html","b79476145951ab4d4a01b30998b6686d"],["/tags/index.html","a2a4f1d1c3b6497533e3d06c2663b490"],["/tags/动态规划/index.html","3b29ca67d41ea1ec5e8016ecf1a06f61"],["/tags/字符串/index.html","1b07ca19d1ce08a70ccb9950342a9b0e"],["/tags/字符常量/index.html","2fc7181b7ce00c7d13069f551eca458b"],["/tags/快排/index.html","4530b00d4f5eb90f6e3d7d7a1a4eb873"],["/tags/排序/index.html","a5f23ae30987fb73746b6e827917431b"]];
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
