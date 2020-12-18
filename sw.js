/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/2019/12/index.html","5c1a36e8b83499eb811bb6f1ff706e49"],["/archives/2019/index.html","c22b73f51bd42d792e075748690b712a"],["/archives/2020/01/index.html","420fea101a10c5f0071373fae9475b14"],["/archives/2020/01/page/2/index.html","3834c5457fd752f14e612cc651c40f84"],["/archives/2020/01/page/3/index.html","e9106bd8a8387ed1e9ed36c7aa024599"],["/archives/2020/01/page/4/index.html","3820d78c5b63239dbd608a740bf02995"],["/archives/2020/01/page/5/index.html","c8e1f2accb0e5dc344ae655353b79b25"],["/archives/2020/01/page/6/index.html","ae3560dc6cfd5aaa396fe564ef44cfa3"],["/archives/2020/02/index.html","2420358f27572fd3bdc1df6aefea33ce"],["/archives/2020/02/page/2/index.html","876bd74e103146643153055bdcb6978b"],["/archives/2020/02/page/3/index.html","c12e9bdb3ac50b5efefc0f6328101c42"],["/archives/2020/03/index.html","ef4db568a56cc584f9bfdab5eb788f91"],["/archives/2020/03/page/2/index.html","75d58a52d61be0637c35601ecea8a387"],["/archives/2020/04/index.html","ad40a41efc228be22b8976a07e8d9f0d"],["/archives/2020/04/page/2/index.html","d38b5c32c5d8f95067aaa8a41b19b3dc"],["/archives/2020/05/index.html","9b2fb1fe3a8c5ab984daaaa85dea5fbe"],["/archives/2020/05/page/2/index.html","3090b9b951dd80ed673426f03f0ff135"],["/archives/2020/06/index.html","661d90dd4899abaf1a27b41ea9c4e715"],["/archives/2020/07/index.html","f7b6500ab830f0da25f83da6a0bea930"],["/archives/2020/07/page/2/index.html","1ef9f74ebf5ada0066321e174f5dc396"],["/archives/2020/08/index.html","6141e567ddbf30da0806a00cd04377e3"],["/archives/2020/10/index.html","cad881eb3364caa90d12e164d3ccafb3"],["/archives/2020/11/index.html","170d022e51ce960a13717098353b85d2"],["/archives/2020/12/index.html","3ae9bd4311bd65b5044ee5ea60c68cdc"],["/archives/2020/index.html","bf513cef5df298ae7839cfdf964049d1"],["/archives/2020/page/10/index.html","122b46302178dc1421778cbc73ba0a81"],["/archives/2020/page/11/index.html","a74d2f5e5dfc30f52a6bebd65c9ee3bb"],["/archives/2020/page/12/index.html","42de38cbc4848c52bc04b17ea042d203"],["/archives/2020/page/13/index.html","88dce89f8fd3b5955ce92383d6f0fc8c"],["/archives/2020/page/14/index.html","588699c9465eac1480ffaa00828ed540"],["/archives/2020/page/15/index.html","403b8af735d5c0c4f307f14788715790"],["/archives/2020/page/16/index.html","18f4316f9547ec6b28d64963a8e758bc"],["/archives/2020/page/2/index.html","8e5184860211af40c275529f27fbf804"],["/archives/2020/page/3/index.html","04611c7f7912acda2385037318fc1939"],["/archives/2020/page/4/index.html","ab9c068bfaae0b63e901f734a814a9b9"],["/archives/2020/page/5/index.html","9557df47f4af2a640f3629b3fc5f7376"],["/archives/2020/page/6/index.html","7dc1992b62130e9736951fdb40f45f0f"],["/archives/2020/page/7/index.html","495517f7e8610cd3b36880dc65c7700a"],["/archives/2020/page/8/index.html","f4cbe488b7c5d59199964f7a003228c2"],["/archives/2020/page/9/index.html","ad2ae4b8ec051555883892c0e386bc71"],["/archives/index.html","6ef313eaad7648944b55e773ab4d2295"],["/archives/page/10/index.html","672c8a73e1882e6c048c9b990f16af33"],["/archives/page/11/index.html","fe74e4ead91a95c1fda71119ae3a1ae1"],["/archives/page/12/index.html","12e235db9bcea7e1d4bcad8a9d2f734f"],["/archives/page/13/index.html","4543faabe16042bd586244b5f81e10a2"],["/archives/page/14/index.html","a84350274ca23deeb30f38bfd60729ee"],["/archives/page/15/index.html","9e35088d71b9c0ff4ab391d5cbaafaa0"],["/archives/page/16/index.html","ce4b8c59956dde3ee95bcc9727772522"],["/archives/page/2/index.html","8b2fc80348f9fd2e2d00c65482658afd"],["/archives/page/3/index.html","ea6365314054e0b7c23e6bebd027602b"],["/archives/page/4/index.html","127f8a7337b8ffe3d594a0891d6245ae"],["/archives/page/5/index.html","f4a0c3d756b03a7fbcc3993e8684b302"],["/archives/page/6/index.html","880aad603a42de385a2fb01681c59750"],["/archives/page/7/index.html","f5e86a444a8e98b7448a136e7eaba81d"],["/archives/page/8/index.html","0a310b8b307e36dd39edbd1410bf0d4d"],["/archives/page/9/index.html","cdfdf9b78c43f31067dce78c543ef8dd"],["/baidu_verify_EVZv9BO5R3.html","9cb83439de5ae28e29e8884e023b9397"],["/categories/Linux/index.html","ea04825bb8b62cecee9b651a0dc48376"],["/categories/Linux/page/2/index.html","a9b26f675fc7ee1a6238bda000525352"],["/categories/MySQL/index.html","f601ca63c89d678df003f2386dfe282e"],["/categories/Python/index.html","aed3aa690781baba3f31af851e9dceed"],["/categories/c/index.html","ddcc99576fb1766339db5fa97e43cf2d"],["/categories/index.html","bfd64d86e7aad2c9e95722b4f62e6d9f"],["/categories/java/index.html","1ce8367993be3e99c33030fa1823faba"],["/categories/java/page/2/index.html","da370e798d502850bac8ee7fbb4fa6be"],["/categories/java/page/3/index.html","1e9116882c68adc4571753c594138544"],["/categories/next/index.html","279aaa96b45bf9442e3f0e6636a2a5dd"],["/categories/stl/index.html","c8ef9c3beef4dc8cc756d63f616b8bf3"],["/categories/windows/index.html","d910f0bf2f8e1c7aae15d57ae1b4252a"],["/categories/基础/c/index.html","7601e5547c462e771e2d2de12b96a96a"],["/categories/基础/index.html","d213f3fb98ef1911f8425472177d9de2"],["/categories/基础/page/2/index.html","bdac455486b689af3f30346b1fe863a1"],["/categories/数学/index.html","fab92ef27d322f824bb94ce29700c952"],["/categories/数学/概率论/index.html","b52d5877962aeec81530829bb753f79d"],["/categories/数据结构/index.html","2bba1b7039d5db43383dbaacd5ac0db0"],["/categories/数据结构/算法/index.html","54b28f6287ab32825dc66e6e5297e15b"],["/categories/机器学习/index.html","1f30c705486ef51c6ebf1d44c7cd2e44"],["/categories/杂项/index.html","77f488355c57625523b687cee3de14e7"],["/categories/汇编/AT-T/index.html","d0a9acea14c125e529b0ae6bb6d2d258"],["/categories/汇编/index.html","3e323d1867495e5b2ebf69ed53b11de3"],["/categories/汇编/page/2/index.html","59b126772ca1ea87b9f37d8123e7ce2e"],["/categories/汇编/page/3/index.html","1f816c8b8fe79f9514342df44f95fb22"],["/categories/算法/index.html","1f58f1be5d74c2769b375d78f3324cb9"],["/categories/算法/page/2/index.html","c8828ad1c64fb7b96babefced61f759d"],["/categories/算法/page/3/index.html","a44e01ee1aa070ed42f1458909ec9c5c"],["/categories/计算机系统基础/index.html","2f704d24332e9b77eda8e8703d9fa8f5"],["/css/background.css","c37bdf56d03f25bb83866ec531c85551"],["/css/index.css","c6f04a0546e9d520ccd3c2cde0d77249"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/1024555-20161218163120151-452283750.png","1c4291f66d3badeecf8da5db0fa7f258"],["/images/1103198-20180725163149813-311841231.png","c0f85c4be5b67f161a6b0cbf750bd35d"],["/images/20150509003807271.jpg","5ef4067ec57dba8cb2da0139a4ae772b"],["/images/20170305152530328.png","dc9a85caee2736105b0649ebdc064607"],["/images/20170428234108337.png","1c140a284f9e1493d73ae9ab2b9f3e26"],["/images/20180817161822690.png","0b601633fdc93b273505cd2c637afc96"],["/images/26548237_13584034551s55.jpg","be25e15c79ebda24074f3d1086fbc7da"],["/images/323.jpg","5caef86753ca973488835726b2468ba3"],["/images/331.jpg","a9594e28e15da3d822661b2f40b94fa9"],["/images/3331.jpg","d6d87037e5ebca79fa0d81fa6d044bf1"],["/images/3332.jpg","8f2ed7c51e26f153072a3f3e588b7126"],["/images/3343.jpg","1cc462083d686a4c445ac7d2c30148b1"],["/images/3344.jpg","3382dd1f28456eb3b4d0ee2ed93dfca7"],["/images/3353.png","bbdb9fdcca8d944700f22657fa609c46"],["/images/RNN1.jpg","1cf353e787bf9fe4e016ecc6035995c9"],["/images/RNN2.jpg","8e0301109ac2a87ef69d79f17d6c852c"],["/images/RNN7.svg","ec0ae76b257365747700eab5c1a287d9"],["/images/cursor1.png","ba5a073575831764539a26fba1faed87"],["/images/elf.png","c03a66ecce9b68c246b4bae771ba9058"],["/images/gif.gif","4e2799235c695b12f23fb89b994ec1af"],["/images/java 集合，列表，队列，映射.jpg","7dbaaf31f3b3efca51f63df2da8d60fd"],["/images/java文件操作.jpg","144eb894355fceb9e6f1298ac2815de1"],["/images/java线程.jpg","ad0e890da01a183dee9dfab192f6017e"],["/images/pasted-0.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-1.png","b509da2ade00371567a19cd8d7911a57"],["/images/pasted-10.png","9d81e77411f9081b8078ce8507f35a2d"],["/images/pasted-11.png","d19c5e6088c816ed9851f9cd43fc6b25"],["/images/pasted-12.png","6c086c674431ec0e35fdb0f259baf87e"],["/images/pasted-13.png","d8ab5bb63ad1ad13c76d6ee17d6d958c"],["/images/pasted-14.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-15.png","3376592b9109c25c3353f19b59b0c9f6"],["/images/pasted-16.png","f3df68436497a8a034c3ed51fb23f5d6"],["/images/pasted-17.png","72499571d03b5eb0190f1a9d9a58a766"],["/images/pasted-2.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-3.png","9d3a7d4be96c62336b698fc3e5915f49"],["/images/pasted-4.png","51578f3e987a1d0e2a997afeb5890c93"],["/images/pasted-5.png","8339d0288e24f5c2caa9a3f0109a9439"],["/images/pasted-6.png","c7fa5d7f605033673f420b0129763d73"],["/images/pasted-7.png","d9a50b673a8525f561fef9bc707005d5"],["/images/pasted-8.png","988a868c84b1172ead7e7b73edef1563"],["/images/pasted-9.png","328621f7590594521463d97ff3379a99"],["/images/static_linked_list_example.svg","d4f958ca46665db563b071a75d9989ca"],["/images/wxpython1.png","0ae46e3c553b8d2f53355b6a1015fd52"],["/images/wxpython2.png","e29a46f0fcb7044c7e79c009c3c0ce27"],["/images/wxpython3.png","bf6f162dfbb7ade3d390b11fdc14de89"],["/images/wxpython4.png","a307adc328d155e6a640fdbe69a2dce3"],["/images/下载.png","b047e71324f3ff7bf9a3681af75cc634"],["/images/动态规划1.jpg","eeef3d546806be4996cbd5a9f95ff9a3"],["/images/动态规划2.jpg","9f4e03ab2c332d7feb3260547cef784b"],["/images/动态规划3.jpg","b151eed25fe3cd2b577e5b5715711b1b"],["/images/动态规划5.jpg","89fae451a768712f7d56837181cdfe7b"],["/images/图片1.png","7f312e624c707f3861e595f4ea534408"],["/images/图片10.png","2c0a678b3451017c8bab6859d38e13cd"],["/images/图片11.png","9714b8f92faccc0a9f13c5165586688b"],["/images/图片12.png","7e979904deef15338df8def3bea200ee"],["/images/图片13.png","8f08286da74f9149524fb3dca43597f0"],["/images/图片14.png","5e1831f06ee368eceac0204be42691c0"],["/images/图片15.png","16eef0ee620c794da33228d1981c36a6"],["/images/图片16.png","a22f1d35f357eb22eec6cc010e016d10"],["/images/图片17.png","59ef65af3881dbac9860a90db46a206b"],["/images/图片2.png","c059796a07382def5fed2f6d426904f3"],["/images/图片3.png","5827804b227b55c4e55ca89f8c127aff"],["/images/图片4.png","5f7547005554826ce245b8adc9ece17e"],["/images/图片5.png","445af81ad92777e9b84d7eb17943d168"],["/images/图片6.png","6a4a987e1a779c656939a9230d1cf2ab"],["/images/图片7.png","bdb95fb8d580a0b2a23e49bcc3cc083a"],["/images/图片8.png","27cee4753fc09cd5903f7abedb031257"],["/images/图片9.png","e9de3d9866350203d4d94669dbc3c4f0"],["/images/复杂度1.jpg","d9a061810e4833ec7c3b236ea1e6d686"],["/images/异常处理.jpg","89cedde4ca90fc81a27fbb3276a4965b"],["/images/排序.png","3816b11517b62768c941a1dcb3d0f051"],["/images/排序2.png","3cc74a5693b8e5916718916dc8ccc2cb"],["/images/支持向量机1.png","118482e2a70a238dcff1bd4461c56d3e"],["/images/支持向量机2.png","49f9dd141bf3921f6269523e0a2036b0"],["/images/支持向量机3.png","7af700af8791cc422cc3af447e8e64c7"],["/images/支持向量机4.png","0b65e633cd85332167a45a6c0aaedea0"],["/images/支持向量机5.png","e24b1fc5ead712cf8dfe3ab6feba0cbe"],["/images/支持向量机6.png","582ce077f4d203b6ffd5e292f58982ad"],["/images/支持向量机7.png","2a4bd4793ac8b501a5a886b9f4637266"],["/images/支持向量机8.jpg","de8f2ca9c807ee184e2509639fce066d"],["/images/斐波契纳堆1.jpg","6ad3ff99c9bd737397b4ae458525a2f0"],["/images/斐波那契堆1.png","14ad5abebab4e0df00ccdfdcab64018f"],["/images/斐波那契堆2.png","4ec40a6de87a33727ba85cf4bd1d871f"],["/images/无标题.png","f75ca011f32067fcc9e211385a3672e3"],["/images/硬盘.jpg","37a78a032257e1971d93bf1c1eb854c7"],["/images/神经网络1.png","41c80fd1fde930e9dd7e60fb9795e5d8"],["/images/神经网络14.jpg","e754323150b7292ebd380d2ea612a811"],["/images/神经网络2.png","dec1af0bf0b289245348491cf72bbbd0"],["/images/神经网络27.png","71d0856ef1cbda484279bdda69427ee0"],["/images/神经网络28.png","d76dd3f5466e0f84ba2ec95388e4fd9d"],["/images/神经网络3.png","1b42b662332c52626fb3b444ab8dc1bf"],["/images/神经网络4.png","8d9b29bc5fe887b444dba0c9bb95824c"],["/images/神经网络5.png","5a1fe52b6abfeb56cdbaec05e0bc8637"],["/images/红黑树1.jpg","0d8daadedf3482500e96db0bb36f4045"],["/images/红黑树2.jpg","7bb59a91fe9939641a9de158dbebd273"],["/images/红黑树3.png","39dadf1ea774cff8cc2c7ceda43a943c"],["/images/红黑树5.jpg","1cb3e1bad9255cf4785c357cd96dca9f"],["/images/线性回归1.png","f0ae196076369a39df6ba26bae288be5"],["/images/虚拟内存.jpg","fc9a7c40d2eb982f9fc2edace445cee2"],["/images/虚拟内存2.jpg","23dbd7e221544f6dfa34f948660564c4"],["/images/虚拟内存3.jpg","2662b635b63126df803a931f84b3fe40"],["/images/链接.jpg","8badd59eb1b1862b6d2207e8c6c295f5"],["/images/非线性回归10.png","a9b28a56e3d74e9b19117f2a189c9c95"],["/images/非线性回归11.jpg","fb76ad5d1c1e180d386d0f0996b5fac8"],["/images/非线性回归4.jpg","d90e76290c93e9e290d6dab2249873df"],["/images/非线性胡爽12.png","29d6c65633e4d77ab7b3ea50ad74e1fc"],["/images/高速缓存.png","8e80ed97661248e8cb78ef25a729c69d"],["/img/404.jpg","6316bb4e267fe132ae514aa14031ecc5"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/false.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4c184c8280b509e91539e9922d1091ca"],["/js/main.js","526c79ae00f1cd6e13fd2c022e435267"],["/js/mychange.js","807cb7297d98b19effb82d8ebd95a8f2"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","dd653aa4c7ce2e0f9fb9cf6774483b35"],["/js/tw_cn.js","7dcbb18c28dd1a81dea0702b6495a3a5"],["/js/utils.js","b75567b6557d71b7ebd2cc2044932d8b"],["/page/10/index.html","d6a3ccdc4075e6295470b30e8eeaeae7"],["/page/11/index.html","75f521a9a1f38e88e982d84a2259f3b0"],["/page/12/index.html","836451738d482a0021730e38d7293323"],["/page/13/index.html","672b65aafd108e8c4d030f0fc07793a4"],["/page/14/index.html","1e9fbc050cfc57620e23830e553a5bc6"],["/page/15/index.html","2764f8804bb27b8a6221eaa6a678a410"],["/page/16/index.html","861906b77bf63b6b9ab019de5e83d564"],["/page/2/index.html","f99679e42564937155dbfe6788895659"],["/page/3/index.html","49604e68b28be2b3dced32e06a22ebf3"],["/page/4/index.html","10c9e8c052c20cb7dcba0e43db31e807"],["/page/5/index.html","bf9c47ddf81734f82840f12c536332e2"],["/page/6/index.html","543c06ee9e23ae868b1c09034e5805af"],["/page/7/index.html","f1991be5daf6755686f2d2749cc85e4c"],["/page/8/index.html","7139f6ca4044accb950b730d4e447d69"],["/page/9/index.html","73f3ea7bf2ee4cc74f8ce49bce1ccca1"],["/post/10919.html","8d80d73e786429258925a68e6d64373a"],["/post/11051.html","0458d5f010f23bed4f5122a58e6d2a85"],["/post/11306.html","5ff2e224849efae76ca0f63cea7c94c8"],["/post/11491.html","2209dd95ce764f58229ac82fa9387e0c"],["/post/11799.html","ccd52e0b919ff5a06247239665975c69"],["/post/12334.html","f636317a77281b93eaae6bfa4a78ed3a"],["/post/1326.html","39e78b67b95158049c38683e50a081a1"],["/post/14379.html","a64b2d1f1bc9cf5cc6b2b3085e83a6f1"],["/post/14511.html","bbaf4b7f2f56427984c9c85c1161227a"],["/post/15201.html","257947339ee24d2faad1683f166210dc"],["/post/15425.html","9950b60e160495ad05271d93973fc23b"],["/post/16107.html","47ffccd6577bb0e6618611997d78b08f"],["/post/17862176.html","8e35f37e26c46f0752c6a816068c540b"],["/post/18431.html","c7027cf9dedcda9961ebffde4050dcab"],["/post/18912.html","630c668bc88fd21c0a453790aeb48e95"],["/post/1b9c8662.html","e88f7a4806893b8d139b24abaed9c331"],["/post/20198.html","b8aff794235da5757a1becefaa0aaf2a"],["/post/20ff5ccb.html","8af0da71d6ecf7d3e60744ba3074e95b"],["/post/21624.html","9646b450647a1355a3b718a39efcfdd3"],["/post/2170659a.html","50de62281a2f76cb3758b67b1dc083e2"],["/post/22102.html","61f607f314ae355ec30edb81d8c220ed"],["/post/22493.html","b3baa526421f46667fb06a82a52b0c57"],["/post/235252ea.html","89a5ecf9154da03c0d9f243c2a0c4b1b"],["/post/25699.html","de2bcc379aed656ce29500e82241961c"],["/post/2647.html","ea5ddf4ede230fe76da5f268964dfbcd"],["/post/26477.html","6ce05006ae64e7c392603ba17ba372b6"],["/post/26671.html","b6619d872ee99818b61c64dec6d4c768"],["/post/26737.html","a2edcb714af5b291abf0a2afb248e3fe"],["/post/27045.html","08e0f2cf9cb0661113613b6682bf0ee3"],["/post/27621.html","b48caeee6a38c2bacef65dcf7009e980"],["/post/27890.html","ccab263fb5b69ff7e97a754d2f6cf120"],["/post/27980.html","f003fd8b4833a0d58b82c9d205285dd6"],["/post/280b588e.html","304ab2cfcf20e765b49bd2ac3e13fd1c"],["/post/28579.html","6feefbe323df78a4af7a3143b4d08142"],["/post/28877bf.html","c49a1b47e7f605aad50d5178819f9bcb"],["/post/28954.html","93c114458e50700dd4d3843fe0b76d66"],["/post/29378.html","989af4f98390da4b1f2a909a405e4b26"],["/post/29949.html","5eb0191f3f55ad4548248a97b0c74446"],["/post/2ae43b86.html","389720b9d135ca07d4c5449f426ea91c"],["/post/2ba82a45.html","07e8dd670d4729ffae869398d6e0523a"],["/post/30072.html","6f7938791e726fc2d9a430202196d41d"],["/post/30479.html","d49abb8961a949764e8f053a13d49bea"],["/post/31a6b40.html","1e96073ff5267f44616435243cc7f79b"],["/post/325cdbf2.html","71ec378d9787b2ff54c0dd85d0df83bd"],["/post/3319ed9a.html","32d37d644ae5fbdf91ce1c24fe925a80"],["/post/3320.html","0fd59d66906d0db933fe1bc31bbfb991"],["/post/33cb1151.html","3d44e5cc3e452e15d83fda86f2b8ba80"],["/post/34811d5f.html","d649336b6195941d14d9c63c6a27e287"],["/post/348d4e04.html","ffd126e945bb87983d6f16c00f6f92a4"],["/post/3526.html","6e0a4a4ef3eb5bfaf67c0e055c645c45"],["/post/35532.html","2a848839c467a4ee1a3a7de920ab1f24"],["/post/35848.html","4425e503d4f2903b544fbf68fbb27cac"],["/post/37318.html","c83d9631f3e6cf24ce7d0c0640d9d409"],["/post/37663.html","3c6ae79828ee4349384e776238f9a6a2"],["/post/38035.html","e6b7fa2512ce1a37547c889fb114a9cb"],["/post/38072.html","ff28d1005cd49c3208f2666c7dcea5a0"],["/post/38145.html","7a63ecb93734fc677b5186bf413d80fc"],["/post/39968.html","a78e0b2f5d25b12d2e17fd827bf64ce6"],["/post/3de4bc69.html","ecc39a4c17d364a33baa14a8c4e09818"],["/post/40583.html","f06ac6634f64b399b2077fe672387a74"],["/post/40997091.html","7ee8d3349ec52de064b37bf191fce47e"],["/post/41129.html","bca697c8cb19319136bcbf02f5876ee2"],["/post/41763.html","df6346f0ea6b0f6a77f59c1c6a8091a7"],["/post/41829.html","169eecdaf003086914e2940b1193ec0b"],["/post/41840.html","0aa2800ed27b279e8d28eff855fde7c0"],["/post/43817.html","65cbc3f5b8e6cefb6cb9cc5af07c3a86"],["/post/43878.html","8a4ac3993839781dab33ee85097dc8eb"],["/post/44250.html","8b366023408881b3e3fb5c9bfe60e35c"],["/post/44336.html","56a4ba41ae6cc610b4ff623b4960537c"],["/post/44454.html","fe48a76fea4ad278fdca60464d50e60b"],["/post/44487.html","166279f24983de7c753e919dc35520cf"],["/post/44914.html","d766c43a99337602a5d99ec6f5d6956b"],["/post/4551c130.html","757aaccae1d205ec45d378a0afa60b85"],["/post/455a4c92.html","3989265a6f30dc1c7a69cd9af8cd69e0"],["/post/46466.html","e403ca29f71fe130862aab34f7d1d5fa"],["/post/46925.html","c85281d4a7a2d2dd65cd067a048789f3"],["/post/47075.html","042a1fc3eaec8e19438fa8f97b505260"],["/post/48220.html","020c8701494f6ed69d94123686ab96ca"],["/post/4b1879e3.html","168b2ff5a2a71d2a63caf731cad8e283"],["/post/4c720881.html","a43f4eb025e1d95c30f929abccb8fdc7"],["/post/50daec4.html","9fcb7d1a6809e81fe51d6a8deb51e3c1"],["/post/51491.html","0b1aaf2c2c7b23d64d572af1bb822275"],["/post/51e63dcf.html","ec1fb36a60a59c8d7583f9798418557f"],["/post/52078.html","d4584f0328f021496e80cf2465076b62"],["/post/53677394.html","9c955f95ffc44686bef5ab16aee0efda"],["/post/54300.html","9e51be9bd8bf9147cd1f22a4aa8dcac0"],["/post/54612.html","b2d0562a1504f40ebd081565177fb67e"],["/post/54613.html","ed7d2edc28745a12bf826bb6f919762d"],["/post/54708.html","8b4b661472345e68605bccb63e15de94"],["/post/54778.html","31db949be1a0cfebc3106cfa9b090654"],["/post/5490.html","61e9c8e913c5ae7ec5ad849e6fe8d94f"],["/post/55046.html","e67a683e48d0bc7079ad595ccbdfa6fc"],["/post/56929.html","2ca0db51f1fc56ca1f8f51b332941742"],["/post/57339.html","2b4243b31152bf005b9a40d8af8c8889"],["/post/57449.html","3f6daa2762dca7ba5fafaf0b844f7621"],["/post/57453.html","f9509fe9c1316e8c20fbfa52eb74f141"],["/post/57671.html","ee7081cefc2a6f21326745a7bcc1d770"],["/post/58313.html","5927cff9262270dadb5c58471b00a339"],["/post/58481.html","2c265c57326c027cfdc7183e94ee1892"],["/post/58986.html","137ed5182202be54d0b7ad894059ba31"],["/post/59431.html","b8c01fea1a297d00238e0f1bde66ff4f"],["/post/5951da65.html","8728a056aea2b82044fcc9e984a020fb"],["/post/5be7e977.html","33a43d7de3d854f2d0ec450454722a2e"],["/post/5f9e4eff.html","8a5f501707958e7dba039e109c92dbac"],["/post/604b49d0.html","94793bdb6d4b1b699302a31a30624d93"],["/post/61312.html","55344705da20be2d75619b72ac3e2a15"],["/post/61738.html","6d2bda2bd45ffd7073e99d0562c0add4"],["/post/61809.html","187c73959a48f779d77cd789d812b54d"],["/post/61eaf19a.html","6f7f04628c9ba886849924e6860f1c96"],["/post/63002.html","7cea357bc791cf16f8e72c4714302d23"],["/post/63711.html","30bfcce2ae329a0a8f39bec5378f5175"],["/post/6587.html","fbe0559fff8319328a68292b09b900f5"],["/post/6589.html","2cb3f1d9ff9ce46fe9b41c5d7e19284b"],["/post/6880.html","208005aac404cbf9bc0f6f983d2a2c4d"],["/post/70263071.html","240e1470f00e19cdb62f94104601c52b"],["/post/71038564.html","e7284700b72be79c88505c96cd7cd6ab"],["/post/7119.html","ea1cb25421a23ee30c6ef1ef25f76865"],["/post/74e7fdff.html","3c299f7a7a511765e6f1e27feee9c08c"],["/post/7502.html","4bb0b30f18f5e03c764d1b379cdc90aa"],["/post/7564.html","6328e2317742764cf3e36c06d14f4af7"],["/post/766f9b60.html","9dd937c7dc4052b84591cd5e4daa5a37"],["/post/7ca31f7.html","e4111d2e7c5f8e5a69db8c4f6a91f0d1"],["/post/7d1c86da.html","9780172479278d53426edb3f3e44ce7c"],["/post/7f3bcd7f.html","66f8496833d25aede54f825c917d7009"],["/post/8039.html","df4a61095ea3c8bc399fd8c25b64cae2"],["/post/8050.html","687e6806442a2f024bb2d6fa218eb724"],["/post/8072.html","218b61c5edf9634a9700c4eb56f8c3f5"],["/post/8274.html","729612fd5ab221984a99d945c10b5d2b"],["/post/8372.html","792d769befd210b20e308e899044aaa5"],["/post/8498.html","34d611308aa56ae8d0979415d6d069f2"],["/post/85b4e13b.html","0b09f848f1adfa9b2c491ed11ba701e5"],["/post/912b2566.html","add2de0b9b99b0f03d8025aa9794ecb0"],["/post/9187.html","f908b58f2409570c2d9c731dd28b1557"],["/post/9197.html","8e36399451d11339b07ebf76124d41c1"],["/post/94ceb2fd.html","595b13fddcb6c59685ae5b10d5724781"],["/post/95495db.html","ad2ae48a263577969388d152331f2019"],["/post/97246020.html","6801630bdc0b59cbc262bbdfa160ce62"],["/post/a3a786d6.html","95a079324453e471bea6c04b381548e6"],["/post/a444b428.html","9e7a6c01a18bc09757221ac26f10dffb"],["/post/a50b8908.html","f1be4fcefc2ecc85e2e6e961fcf9e9ab"],["/post/aa1eade8.html","c82bc3fd30349b7442a22d6a2e33bb9f"],["/post/ade8c6d6.html","ed9dead9d0d7e74e9e743ff06146861f"],["/post/ae8362df.html","d50bd835b865ac676b4e47764fcfde8a"],["/post/b4c1d206.html","766e9db3ea1abe08bb48f8a6b6fd5d33"],["/post/d213fc7f.html","6487d27b542954049224fcce6b4df04c"],["/post/d431fab4.html","9525e8c3589f466890e997f38fdf2a06"],["/post/d5381517.html","3b5afe0d158381cdad3280646a410f2b"],["/post/e058ffd8.html","aea2f13ff1c3c23079236f325d1953a6"],["/post/e0f8cb74.html","216cfb46f5348a8d0af0acf7164e6cad"],["/post/eefe591f.html","cabf743e84f0ee283c989703ec09523d"],["/post/ef296a07.html","24c062b483a3b0cf96fef6423807b53b"],["/post/f201f9fd.html","ebd0ff99ad6b0b4321ac903c0969afb3"],["/post/f79e4123.html","9f6c3d83bf0021595a8b868c3d11b9a7"],["/post/f8648a1d.html","8123eecd428cce3bc8673189621360e5"],["/post/f89cb603.html","0ae81a55c6c78a46b7c018415b578f0a"],["/post/fa288682.html","33ac4bb96f070685fda39f7d9ed331c7"],["/post/fb98053e.html","b0f923029aaf73dd8a12ea6c9d9d1ac5"],["/sw-register.js","e17d49e57476369af078aea569ce6f3a"],["/tags/AT-T/index.html","4f8c0bb80f41f8305c0fd52b3626cf5b"],["/tags/index.html","d8d5155e0ce165413effbf61eb9a2e94"],["/tags/动态规划/index.html","4d35f17f384c3d40536bd4da48efd7a7"],["/tags/字符串/index.html","4e777aa6be2764110d357abac4eec411"],["/tags/字符常量/index.html","41f53f753717a900b272a6b04f69cc56"],["/tags/快排/index.html","1f0808139f7e0c00d80522fbc9956755"],["/tags/排序/index.html","942e0956d9529fbecec40e41338d523a"]];
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
