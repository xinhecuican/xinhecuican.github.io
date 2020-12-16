/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","e096d5db4e138baf18cf32344d90e571"],["/archives/2019/index.html","591c18433a732c1ccc03ce205368fe35"],["/archives/2020/01/index.html","752b43bf45606a779bba1ef5502495a8"],["/archives/2020/01/page/2/index.html","84ef72de42cfaed09965a30851f1ae9e"],["/archives/2020/01/page/3/index.html","8996ba3eba54dd89a8557d8fe8c488da"],["/archives/2020/01/page/4/index.html","4427af693e0cfe58dc191f5cb514edfd"],["/archives/2020/01/page/5/index.html","7cf06bc25a61edf891021fff736f8571"],["/archives/2020/01/page/6/index.html","ea54a6676aae6e1b2c86f664c8fbf2cc"],["/archives/2020/02/index.html","6309b8156a66b0c165021939d172b44e"],["/archives/2020/02/page/2/index.html","4c8cb708400708e17312be3a9156a6af"],["/archives/2020/02/page/3/index.html","78d0b511dfe62bbeb7c80ddc39c4f523"],["/archives/2020/03/index.html","94b962ca54516ac5cdb0d010be2ddf99"],["/archives/2020/03/page/2/index.html","401292e3f97afb32f5cd4b754542a20a"],["/archives/2020/04/index.html","bc066e713dced1326fca4e880977169b"],["/archives/2020/04/page/2/index.html","27f3d03a4ac884b7575e00c125f43d75"],["/archives/2020/05/index.html","9378bc3b2581cd4b7154225f06247d6a"],["/archives/2020/05/page/2/index.html","425c0ece43d928277c40bb282c54258e"],["/archives/2020/06/index.html","113fff8fefffe301260c46c03b0930f2"],["/archives/2020/07/index.html","4157c1181394f3a4b4227d49f7c9a0ed"],["/archives/2020/07/page/2/index.html","48beaa450df29a87df0b82349e90cc88"],["/archives/2020/08/index.html","faca9d7b2d4981ba05fbb809498124ac"],["/archives/2020/10/index.html","7118adf4ac7540e411a0291d30d150ab"],["/archives/2020/11/index.html","c5d4bec436933b6fd908372042e95a2e"],["/archives/2020/12/index.html","521ff25428dfa754eab2170b25ee59e3"],["/archives/2020/index.html","9e67b1cf9d4e1e11cfc01cf7f4c1a389"],["/archives/2020/page/10/index.html","2c3f8edbdfa19c16af37ed666047ac4c"],["/archives/2020/page/11/index.html","0530ba31e77e6c38e37f239b5771a276"],["/archives/2020/page/12/index.html","4a6c633cf2fc1506145e4967d3294825"],["/archives/2020/page/13/index.html","c5b10413583ab29d5c2cc4277f713b40"],["/archives/2020/page/14/index.html","2f3e967ff9ade17adbb1a93359fb96bf"],["/archives/2020/page/15/index.html","23de3ea97a6f6699e52e8f9f4fe728fe"],["/archives/2020/page/16/index.html","ae0325e9446d28bbbe41336fa3fb23ee"],["/archives/2020/page/2/index.html","4ad74fab2682e9e3eca9afcdb9e675a6"],["/archives/2020/page/3/index.html","15cf666b49c6ca11f7c1a13d9331c048"],["/archives/2020/page/4/index.html","9df115822c5ce9063c8f77b3410f6d0d"],["/archives/2020/page/5/index.html","4f90cfceeb49a28bdb38679097f77b8c"],["/archives/2020/page/6/index.html","84fef522f0f2cb2b44d8e0a0f132824e"],["/archives/2020/page/7/index.html","ea13135e9d18d4722e0c8e3961358789"],["/archives/2020/page/8/index.html","68eddd3beb7b5ccbe80a1f8a3baa3200"],["/archives/2020/page/9/index.html","d258648d372e36484f8b60a5248c813d"],["/archives/index.html","1cd39aa2fd55cecb702b2e54104e6fc9"],["/archives/page/10/index.html","368b64be99e01b45c13b48880836faff"],["/archives/page/11/index.html","ee1ef7a3cfd1069483c27e5a264640e7"],["/archives/page/12/index.html","46753e177dc0612c77d84f789581be44"],["/archives/page/13/index.html","c3f11ef48e555bcfd9d18a494967492c"],["/archives/page/14/index.html","fb7c9430b610c9251b5e360e6a1adddb"],["/archives/page/15/index.html","548b05488780a79c912de6f92ce3c380"],["/archives/page/16/index.html","880015a81a51540de159a67adc74349a"],["/archives/page/2/index.html","b210e88407f89ca541586e39b5e35529"],["/archives/page/3/index.html","ad32997ae2fdfc36030615d9cd860e34"],["/archives/page/4/index.html","4756100c4ee8fbb46f9abe4a4e06e0a8"],["/archives/page/5/index.html","a9d1061cdf3308d6d66d834726df2ea3"],["/archives/page/6/index.html","66e044d729604eccdb6936553990aa64"],["/archives/page/7/index.html","05b104874f764d280712a5dbec976bb4"],["/archives/page/8/index.html","2d7c4b8fd509189ef537bff344a0c970"],["/archives/page/9/index.html","42d470563ffa8ab347ee1d63b509ad13"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","bede9484833f70a2f851ff2f9453593f"],["/categories/Linux/page/2/index.html","eae5b320c929a544f1d5a0b74ed75975"],["/categories/Python/index.html","3040ec64612172e1cd3924a3a8441e89"],["/categories/c/index.html","a4e03f9e0d445430bc4a4dcde2869f87"],["/categories/index.html","9a67d3004695f75a597ee4727da2008e"],["/categories/java/index.html","e9273d0363e77b6d4fc9e3c9f47ad373"],["/categories/java/page/2/index.html","57ca7e1526eeb4ac1b9de36cdd5e4635"],["/categories/java/page/3/index.html","69ef3c00796204043bfe1c63f9608716"],["/categories/next/index.html","b1bf2a561b5c105fcc0a11db5a05adc6"],["/categories/stl/index.html","75cd6e8f280409c817e62d256a66291e"],["/categories/windows/index.html","b47fb2bbc5e3d58f84b429e29265c1c0"],["/categories/基础/c/index.html","7df4182a9289891ccce36672fe215b02"],["/categories/基础/index.html","71317514649b4d7d3f9cfb240a51c1e4"],["/categories/基础/page/2/index.html","99fb94884a259c6d454b9848c187d582"],["/categories/数学/index.html","faad7da3e041c264441a94d0be36cd2a"],["/categories/数学/概率论/index.html","173b3fc8214d9704afa91a1dadb9a349"],["/categories/数据结构/index.html","fd2ba971e3a5c53d9b4bee41652f92cd"],["/categories/数据结构/算法/index.html","e7434a36cb2976fbfd674ae1b693b6b5"],["/categories/机器学习/index.html","f90d824894866eb62256c26bc51e0652"],["/categories/杂项/index.html","196df226dbdd2a16d08340c9d778d1ef"],["/categories/汇编/AT-T/index.html","7afd5b460b9de9e62cc84f73194f1a81"],["/categories/汇编/index.html","f8893ef116bf0a3ca0444d6c0b18cea9"],["/categories/汇编/page/2/index.html","f1f56a3e6c07f490e2947b9a9591353a"],["/categories/汇编/page/3/index.html","a83ee438b113f5d9b6d601b13eaed067"],["/categories/算法/index.html","013d070a1826190d200b19dfff9139c5"],["/categories/算法/page/2/index.html","bf75470938d2b69fd9673ff8f734925d"],["/categories/算法/page/3/index.html","1352d8d460c858777f0b0b17a138df5e"],["/categories/计算机系统基础/index.html","61f029413895f6a99fb242c518cf099a"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ff2f2ad490142f0e6e4e2be663b2f196"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","a436d92b240799cb9b7aa31e71c07239"],["/page/11/index.html","d8b60c4444cdfc213b7f4f5176923dde"],["/page/12/index.html","b7187989d5bfa82855c5b8f32b418373"],["/page/13/index.html","3a305fb72be492fa02f9b4266bd17560"],["/page/14/index.html","f70ac6416cafa510c396575863797a57"],["/page/15/index.html","805c8a8e49d1720e9b7a9ab2ca0156c5"],["/page/16/index.html","10ce4b159b4effc0f1836814c5a9a6c8"],["/page/2/index.html","a509db590b20813135a37722cf467ef6"],["/page/3/index.html","620c6cec90a608642d686fac3ac891a3"],["/page/4/index.html","9dcbcd8e25165f43c85a3c626bcb4103"],["/page/5/index.html","5f9e0c20015a122134183eab5f2e032e"],["/page/6/index.html","975a5b7682222021b370e1d699b96a2a"],["/page/7/index.html","ac8c2421ac4dfc02636ce356767b725d"],["/page/8/index.html","4e02b4744c65c1a7bbdad6056c21e96a"],["/page/9/index.html","ed3bc7473e0df2aabfcaf34475d58546"],["/post/10919.html","20a28d548b35994628b6af430b67f56f"],["/post/11051.html","9fd27fc7f7124874d58cc384ac22b633"],["/post/11306.html","a81aa04a3885b69bb71138ef29327fbe"],["/post/11491.html","7833a5c5fec4bb290f839eefce593487"],["/post/11799.html","c7455d2cd52e28c9d373351e24501d1b"],["/post/12334.html","739ad483747ee0b8d10688440ccc12b0"],["/post/1326.html","6a0cd81a6dc3742aad4b2809c7867f1d"],["/post/14379.html","361d7f05bbdc57a7ea07e31fe80f8660"],["/post/14511.html","8fd914ea04042b09d3ea9cf7e1b88445"],["/post/15201.html","14468b7983d060717e32a72ae135bd19"],["/post/15425.html","ad0fe11d51e85ad489b47a618399d830"],["/post/16107.html","75197d32a6278eb37442c72c56ff01e1"],["/post/17862176.html","4380319cd1dc03442137279c58a2b4ef"],["/post/18431.html","76b8ed0b51ced561e09e49b8c646febe"],["/post/18912.html","cbbdf67166d442783e2dd06dd279b7d8"],["/post/1b9c8662.html","3d7217787e9617700b2ab809c1624698"],["/post/20198.html","80f705957043d763fce77c04f75e9ca9"],["/post/20ff5ccb.html","a6bb51a1c23838c062574402a5b04e00"],["/post/21624.html","8b65af7f3c122860d5e312e12174a973"],["/post/2170659a.html","e014706ad171b3d2070c47b526207151"],["/post/22102.html","f85415388d0d6c9c78e8c39b6ae567a8"],["/post/22493.html","328f2c02e581c9593901c56090319eda"],["/post/235252ea.html","d073013995cd790875817003342c70e9"],["/post/25699.html","23c5d0868d6958c028cc47b5b4144232"],["/post/2647.html","e063ea891bbfb1cfef17eb79d5e723da"],["/post/26477.html","4b9cebd33d1053f95c6e4f11c96e47bf"],["/post/26671.html","475303edcb9beafb977b44f644f7c2e0"],["/post/26737.html","57ee5c586730f61131d324e602b7aeaf"],["/post/27045.html","4c4026ba0c6ccef2697d7597b9e62da5"],["/post/27621.html","bb4ed8cf0bf388858c4315f0effb972c"],["/post/27890.html","ada0342836aaed69334a4314acc98147"],["/post/27980.html","0e78605d86eab40427aee32856032cbf"],["/post/280b588e.html","150dd7a812d99d217988a939e8de477f"],["/post/28579.html","aab89a03e79041d18c644902763733dd"],["/post/28877bf.html","38bd415dfcbd2116fd957a65a6ab7b0a"],["/post/28954.html","180145e07a32ff8fff152c5af06c7f57"],["/post/29378.html","06a538a6cfdeec1ed75eccd90723b643"],["/post/29949.html","e21919685d879114f979068d7507fbb1"],["/post/2ae43b86.html","15f6e617f5c5b7f45cbe937ad001213b"],["/post/2ba82a45.html","98c0bba4117f63ede628cad0096390cd"],["/post/30072.html","f1ca42bcd696c8885154d4a72f635f76"],["/post/30479.html","420cf8760850138ff352b711edf32c9b"],["/post/31a6b40.html","5ad9690b4f9fda5b7495f0ee68e251fd"],["/post/325cdbf2.html","760fef7b51b9c4efc3b48a5688d9c851"],["/post/3319ed9a.html","6e617c4b6a8d98a9079379e118a34562"],["/post/3320.html","cd0c1264aaf2eb5980e319f567b3a032"],["/post/33cb1151.html","c92b9fa15e58d34a953eb6bd27efe8b4"],["/post/34811d5f.html","025a03e4a68d9c94cf89cab3dc3348d1"],["/post/348d4e04.html","77f9ed2dfa8dd7147e2c29ca066f17ba"],["/post/3526.html","b6413b91d84327bbb8a7ca02841a0f17"],["/post/35532.html","a505abcfee1d84b0c5c9b8001084e56a"],["/post/35848.html","032e6ad03447efc7d905d4fe66eda904"],["/post/37318.html","b664b884ff5d3573c1dc388fe54e02c0"],["/post/37663.html","cd537cc29ea321a3da2cb8e39dcbdd94"],["/post/38035.html","48e653c62a81497152340202093f3d94"],["/post/38072.html","e40ee22e7caae5626c17bdb86dbe469a"],["/post/38145.html","8e25e54a895cc2b83b0a68d0c197d0b4"],["/post/39968.html","7ee6f6b4c590de3e89fbc3f6e4779af6"],["/post/3de4bc69.html","f1ac59b214b82cfaaeb44393ca60d69b"],["/post/40583.html","b6fa62c30f54cd5ca5a500fdb20827e8"],["/post/40997091.html","6f98bb090016204afac38123a71f0054"],["/post/41129.html","29f4212dfc66743ec05236787983c85b"],["/post/41763.html","42438fe47685161fbd7021b109363d66"],["/post/41829.html","4149c414a1e6c009997dc1bae5947f4f"],["/post/41840.html","e7e5e480442fe1e66a360e1e617d4b69"],["/post/43817.html","0cd03b43d858a2d46f344f33828c633c"],["/post/43878.html","749d0979e621fba81c732de94bc3b31a"],["/post/44250.html","216b2b676355aa8ab1abef924cb2fbf2"],["/post/44336.html","f4818a685fa48f998ff8dc53ddfaab89"],["/post/44454.html","4e21303649948fe66ac7913432f44ba4"],["/post/44487.html","6f94f9c2cbbf4a38e3323d886d6f4553"],["/post/44914.html","cf25d6f7138bd834e00d36f5b3a97ae3"],["/post/4551c130.html","9af3e334fd087b551fca3ffb1b41d3ec"],["/post/455a4c92.html","504a37125d6b1ee738fc7c8b6793916a"],["/post/46466.html","0181a867ad2eab19c1cd9ac5bba2e411"],["/post/46925.html","0cc5c259a97a11dd9756a21fabe5bb04"],["/post/47075.html","4c1ed9a337eff9f8b78f64250ecc4e24"],["/post/48220.html","dad8b778a2f581f8b9c1263b03a4b101"],["/post/4b1879e3.html","4034806d7a4afd430fff33fc93f66f83"],["/post/4c720881.html","a18cf4d139efacfecc7b889009d004b4"],["/post/50daec4.html","84e8ed8db30781fc5edbebe356f3dd98"],["/post/51491.html","0d696a81a5fa86e7c6249af5d4fb30b8"],["/post/51e63dcf.html","661c9e5f9ebcf8c630c89a0711de0d25"],["/post/52078.html","4c05efda0f995cc15712b0e48e39ea3b"],["/post/53677394.html","fdf698215071e46c49f3b02eb9433bef"],["/post/54300.html","809bd3661aefa07621b4f41833afb841"],["/post/54612.html","8b2e586c2a28da87b0ad157f60edca7b"],["/post/54613.html","5abc80cc594562d80eaf6588e478e957"],["/post/54708.html","748440685b268e53be45b1568e045c7f"],["/post/54778.html","f4041e19bfdc90aa9314c598ec5d96cc"],["/post/5490.html","f5f0336a1a61438ea98b7decc78bdd96"],["/post/55046.html","34646d332eda2d77d9c7512186ae7176"],["/post/56929.html","243a68101925d641c8f5ffa518a051bd"],["/post/57339.html","c3a651dd593925454c3af57a6cb14f4a"],["/post/57449.html","e0480416a46ca07857e841f058c3895f"],["/post/57453.html","6741a2a85314de6b712d6959c2f9e192"],["/post/57671.html","631e18c2f4ef172f983e942d938b037d"],["/post/58313.html","5d42adf875155f59198a1403d686c70e"],["/post/58481.html","d5c0853d8e3e1042ce58ccedec42993b"],["/post/58986.html","50b59b8123c898508d80603fd06bdf9c"],["/post/59431.html","0efeaa7bd863a17d63fe3e454c76665a"],["/post/5951da65.html","b767561e89abd2785cb0672075b26e3d"],["/post/5be7e977.html","040e34e09106d7c87edfddd3bb73e60f"],["/post/5f9e4eff.html","c51e73be83e799f78d769e825abf3018"],["/post/604b49d0.html","828e7b06b2fbb6a7d9b0087295bf7c6e"],["/post/61312.html","4395c9483c90952a250788cb0c5b7093"],["/post/61738.html","84ef10d7d2cf9f7dc554023c1981169f"],["/post/61809.html","104a0c247238cf0017d6366f7c8bdd99"],["/post/61eaf19a.html","280d7d5d5579c077b0614772e2175437"],["/post/63002.html","30bbe6ce79931a7b4dd90a85e95e5e11"],["/post/63711.html","f8512c1c31f6e6f68f70c89c215f673a"],["/post/6587.html","5fa8cb610215552bd916088e8047aaba"],["/post/6589.html","a843d96569826b63bb1235f29169533c"],["/post/6880.html","36e9d65dc75d0bb1886f7bf75db243ec"],["/post/70263071.html","2a086ba48b8dd1071b522a5b43deaa6f"],["/post/71038564.html","6f06ac83b46bbed0d0ff1481caf45398"],["/post/7119.html","4cdada3b9380a71c7989c5eecb322b54"],["/post/74e7fdff.html","113429032a76c4e4e1ed901d63ee8ea1"],["/post/7502.html","c738b13641ac88c74a21627742c531a1"],["/post/7564.html","b0bc212d143f280d6d38f3ce3dc1e8b3"],["/post/766f9b60.html","73b6dabf808997529275ab45b3dfea44"],["/post/7ca31f7.html","5344b388cfe9ff1efdc36d9666975e3b"],["/post/7d1c86da.html","1f0b9adc0798110ebc173d4cbe4886bc"],["/post/7f3bcd7f.html","66cba773e3fd3753bc596037e263fe15"],["/post/8039.html","7ee0d2e928102dfb53e0398419b125ca"],["/post/8050.html","1b44107c9cf7f8bda013dae96be82a83"],["/post/8072.html","3f6db68c9f0322926b9b261953f943d7"],["/post/8274.html","f74f3f3654b87581d5eb6eaa2c692935"],["/post/8372.html","8c5067bbc39bde994f86406bb92ed4a1"],["/post/8498.html","4df722ed59ff062b156653772e345dc3"],["/post/85b4e13b.html","4278c4fb92a665e7f06119dca115faf5"],["/post/912b2566.html","217c050c77b0c912187fab79dfe63928"],["/post/9187.html","91291bebbafabdb84398c481ef99c1e8"],["/post/9197.html","1a4486679af8ede3ced6ebbf61ce09eb"],["/post/94ceb2fd.html","b7cf77e024051050d8f98167b7523fd9"],["/post/95495db.html","ebb9f4a0cdd75f5ffe8813d6e303a5ea"],["/post/97246020.html","f434ff1c6a030dfa6c25854175fd7c4e"],["/post/a3a786d6.html","9519c175d4a86546dc68a3d6e32b9bf2"],["/post/a444b428.html","b7aeb55a99b7d4fedd1dda5242a293b5"],["/post/a50b8908.html","43190bfc67e11af62fb2099bd592bc64"],["/post/aa1eade8.html","d37165bef9383803b8b0cf956669371b"],["/post/ade8c6d6.html","386a97436166a4fe455ee95f44f21cf9"],["/post/ae8362df.html","d09392be0f0124bc1c71bd97ef15c2d0"],["/post/b4c1d206.html","0f2ca5b9d23ae10603967688b4609d53"],["/post/d431fab4.html","eac32c4053176cc65ce0834447f66237"],["/post/d5381517.html","ba47744bcaffde3187e7e74376c69043"],["/post/e058ffd8.html","9897b6cc329fabb1a09a958d8eb1c1bd"],["/post/e0f8cb74.html","8a272bd493ec4668f313dd4dce570d95"],["/post/eefe591f.html","57356a623b8cdbe5a0a11f72a6e89262"],["/post/ef296a07.html","819d64dec5e9353e7a804accfd039a47"],["/post/f201f9fd.html","fcb4ee32be7a3fbb49a83c431c76b91f"],["/post/f79e4123.html","05e574a005bfd730ce04284a31887b49"],["/post/f8648a1d.html","2fe551f3a843261d971fa12759361175"],["/post/f89cb603.html","b5e4b1a7bce9b0043ba9798ab840d31d"],["/post/fa288682.html","1d521ef5ff4eb1895e8071edf8bb1ab3"],["/post/fb98053e.html","5ba1c2910dbf8c660e90f77e1d2c53be"],["/sw-register.js","7b09ee9478c41b3817c11988e2cd7b81"],["/tags/AT-T/index.html","ad7d2c73de2259e6eb43362237dec533"],["/tags/index.html","d60dca44cbe3d7b046c3c1a30300378c"],["/tags/动态规划/index.html","37a4ab23708a842f6cca6b9e899d0d7d"],["/tags/字符串/index.html","a427ce701dcce20020d98c93a7c28ee8"],["/tags/字符常量/index.html","049cc4a6b9aa7277e777073eb15c92ef"],["/tags/快排/index.html","caa3f4318257addad59b6f681b1358df"],["/tags/排序/index.html","b3abe63a81ff32a440b8612278a1aacc"]];
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
